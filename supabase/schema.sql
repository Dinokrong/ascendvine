-- AscendVine account, profile, semester, and mentorship foundation.
-- Run this once in the Supabase SQL editor after creating the project.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  first_name text not null default '',
  last_name text not null default '',
  graduation_year integer,
  major text,
  bio text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_emory_email check (lower(email) ~ '^[^@[:space:]]+@emory\.edu$'),
  constraint profiles_graduation_year check (
    graduation_year is null or graduation_year between 2000 and 2100
  )
);

create table if not exists public.semesters (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  starts_on date not null,
  ends_on date not null,
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  constraint semesters_valid_dates check (ends_on >= starts_on)
);

create table if not exists public.semester_memberships (
  semester_id uuid not null references public.semesters(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null check (role in ('admin', 'mentor', 'mentee')),
  created_at timestamptz not null default now(),
  primary key (semester_id, user_id)
);

create table if not exists public.role_change_history (
  id bigint generated always as identity primary key,
  semester_id uuid not null references public.semesters(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  previous_role text check (previous_role is null or previous_role in ('admin', 'mentor', 'mentee')),
  new_role text not null check (new_role in ('admin', 'mentor', 'mentee')),
  changed_by uuid not null references public.profiles(id),
  changed_at timestamptz not null default now()
);

create table if not exists public.mentor_assignments (
  id uuid primary key default gen_random_uuid(),
  semester_id uuid not null references public.semesters(id) on delete cascade,
  mentor_id uuid not null references public.profiles(id) on delete cascade,
  mentee_id uuid not null references public.profiles(id) on delete cascade,
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  unique (semester_id, mentee_id),
  constraint mentor_is_not_mentee check (mentor_id <> mentee_id)
);

create or replace function public.is_verified_emory_user()
returns boolean
language sql
stable
set search_path = ''
as $$
  select
    coalesce((auth.jwt() ->> 'email_confirmed_at') is not null, false)
    and lower(coalesce(auth.jwt() ->> 'email', '')) ~ '^[^@[:space:]]+@emory\.edu$';
$$;

create or replace function public.is_semester_admin(target_semester uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.semester_memberships membership
    where membership.semester_id = target_semester
      and membership.user_id = auth.uid()
      and membership.role = 'admin'
  );
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if lower(new.email) !~ '^[^@[:space:]]+@emory\.edu$' then
    raise exception 'Only verified Emory email addresses may register';
  end if;

  insert into public.profiles (
    id,
    email,
    first_name,
    last_name,
    graduation_year
  )
  values (
    new.id,
    lower(new.email),
    coalesce(new.raw_user_meta_data ->> 'first_name', ''),
    coalesce(new.raw_user_meta_data ->> 'last_name', ''),
    nullif(new.raw_user_meta_data ->> 'graduation_year', '')::integer
  );

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.semesters enable row level security;
alter table public.semester_memberships enable row level security;
alter table public.mentor_assignments enable row level security;
alter table public.role_change_history enable row level security;

revoke all on public.profiles from anon, authenticated;
revoke all on public.semesters from anon, authenticated;
revoke all on public.semester_memberships from anon, authenticated;
revoke all on public.mentor_assignments from anon, authenticated;
revoke all on public.role_change_history from anon, authenticated;

grant select, update on public.profiles to authenticated;
grant select on public.semesters to authenticated;
grant select on public.semester_memberships to authenticated;
grant select on public.mentor_assignments to authenticated;
grant select on public.role_change_history to authenticated;

create policy "Verified users can view their own profile"
on public.profiles for select
to authenticated
using (public.is_verified_emory_user() and id = auth.uid());

create policy "Verified users can update their own profile"
on public.profiles for update
to authenticated
using (public.is_verified_emory_user() and id = auth.uid())
with check (
  public.is_verified_emory_user()
  and id = auth.uid()
  and lower(email) = lower(auth.jwt() ->> 'email')
);

create policy "Verified users can view semesters"
on public.semesters for select
to authenticated
using (public.is_verified_emory_user());

create policy "Users can view their own memberships"
on public.semester_memberships for select
to authenticated
using (
  public.is_verified_emory_user()
  and (
    user_id = auth.uid()
    or public.is_semester_admin(semester_id)
    or exists (
      select 1
      from public.mentor_assignments assignment
      where assignment.semester_id = semester_memberships.semester_id
        and assignment.mentor_id = auth.uid()
        and assignment.mentee_id = semester_memberships.user_id
    )
  )
);

create policy "Users can view relevant mentor assignments"
on public.mentor_assignments for select
to authenticated
using (
  public.is_verified_emory_user()
  and (
    mentor_id = auth.uid()
    or mentee_id = auth.uid()
    or public.is_semester_admin(semester_id)
  )
);

-- Membership and mentor-assignment writes intentionally have no browser policy.
-- Perform them from an admin-only server function or the Supabase dashboard.
-- Never put the secret/service-role key in this repository.


create policy "Admins can view role history"
on public.role_change_history for select
to authenticated
using (
  public.is_verified_emory_user()
  and public.is_semester_admin(semester_id)
);

create or replace function public.admin_set_member_role(
  target_semester uuid,
  target_user uuid,
  target_role text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  old_role text;
  admin_count integer;
begin
  if not public.is_verified_emory_user()
     or not public.is_semester_admin(target_semester) then
    raise exception 'Admin permission required';
  end if;

  if target_role not in ('admin', 'mentor', 'mentee') then
    raise exception 'Invalid role';
  end if;

  select role into old_role
  from public.semester_memberships
  where semester_id = target_semester and user_id = target_user;

  if old_role = 'admin' and target_role <> 'admin' then
    select count(*) into admin_count
    from public.semester_memberships
    where semester_id = target_semester and role = 'admin';

    if admin_count <= 1 then
      raise exception 'A semester must retain at least one admin';
    end if;
  end if;

  insert into public.semester_memberships (semester_id, user_id, role)
  values (target_semester, target_user, target_role)
  on conflict (semester_id, user_id)
  do update set role = excluded.role;

  if old_role is distinct from target_role then
    insert into public.role_change_history (
      semester_id, user_id, previous_role, new_role, changed_by
    )
    values (
      target_semester, target_user, old_role, target_role, auth.uid()
    );
  end if;
end;
$$;

revoke all on function public.admin_set_member_role(uuid, uuid, text) from public;
grant execute on function public.admin_set_member_role(uuid, uuid, text) to authenticated;
