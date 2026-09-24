-- AscendVine account, profile, approval, semester, and role foundation.
-- Run this once in the Supabase SQL editor after creating the project.
-- Bootstrap the first approved admin manually in the SQL editor; every later
-- approval, role change, and assignment can be performed by an Admin in the app.

create extension if not exists pgcrypto;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  first_name text not null default '',
  last_name text not null default '',
  graduation_year integer,
  major text,
  bio text,
  avatar_url text,
  approval_status text not null default 'pending'
    check (approval_status in ('pending', 'approved', 'rejected')),
  approved_by uuid references public.profiles(id),
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_emory_email check (lower(email) ~ '^[^@[:space:]]+@emory\.edu$'),
  constraint profiles_graduation_year check (
    graduation_year is null or graduation_year between 2000 and 2100
  )
);

create table public.semesters (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  starts_on date not null,
  ends_on date not null,
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  constraint semesters_valid_dates check (ends_on >= starts_on)
);

create table public.semester_memberships (
  semester_id uuid not null references public.semesters(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null check (
    role in ('admin', 'senior', 'vp', 'associate', 'analyst')
  ),
  created_at timestamptz not null default now(),
  primary key (semester_id, user_id)
);

create table public.senior_assignments (
  id uuid primary key default gen_random_uuid(),
  semester_id uuid not null references public.semesters(id) on delete cascade,
  senior_id uuid not null references public.profiles(id) on delete cascade,
  member_id uuid not null references public.profiles(id) on delete cascade,
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  unique (semester_id, member_id),
  constraint senior_is_not_member check (senior_id <> member_id)
);

create table public.role_change_history (
  id bigint generated always as identity primary key,
  semester_id uuid not null references public.semesters(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  previous_role text check (
    previous_role is null
    or previous_role in ('admin', 'senior', 'vp', 'associate', 'analyst')
  ),
  new_role text not null check (
    new_role in ('admin', 'senior', 'vp', 'associate', 'analyst')
  ),
  changed_by uuid not null references public.profiles(id),
  changed_at timestamptz not null default now()
);

create table public.account_approval_history (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  previous_status text check (
    previous_status is null
    or previous_status in ('pending', 'approved', 'rejected')
  ),
  new_status text not null check (
    new_status in ('pending', 'approved', 'rejected')
  ),
  changed_by uuid not null references public.profiles(id),
  changed_at timestamptz not null default now()
);

create or replace function public.is_emory_user()
returns boolean
language sql
stable
set search_path = ''
as $$
  select lower(coalesce(auth.jwt() ->> 'email', ''))
    ~ '^[^@[:space:]]+@emory\.edu$';
$$;

create or replace function public.is_approved_user()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_emory_user() and exists (
    select 1
    from public.profiles
    where id = auth.uid() and approval_status = 'approved'
  );
$$;

create or replace function public.is_semester_admin(target_semester uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_approved_user() and exists (
    select 1
    from public.semester_memberships
    where semester_id = target_semester
      and user_id = auth.uid()
      and role = 'admin'
  );
$$;

create or replace function public.is_any_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_approved_user() and exists (
    select 1
    from public.semester_memberships
    where user_id = auth.uid() and role = 'admin'
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
    raise exception 'Only Emory email addresses may register';
  end if;

  insert into public.profiles (
    id, email, first_name, last_name, graduation_year, approval_status
  )
  values (
    new.id,
    lower(new.email),
    coalesce(new.raw_user_meta_data ->> 'first_name', ''),
    coalesce(new.raw_user_meta_data ->> 'last_name', ''),
    nullif(new.raw_user_meta_data ->> 'graduation_year', '')::integer,
    'pending'
  );

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.semesters enable row level security;
alter table public.semester_memberships enable row level security;
alter table public.senior_assignments enable row level security;
alter table public.role_change_history enable row level security;
alter table public.account_approval_history enable row level security;

revoke all on public.profiles from anon, authenticated;
revoke all on public.semesters from anon, authenticated;
revoke all on public.semester_memberships from anon, authenticated;
revoke all on public.senior_assignments from anon, authenticated;
revoke all on public.role_change_history from anon, authenticated;
revoke all on public.account_approval_history from anon, authenticated;

grant select, update on public.profiles to authenticated;
grant select on public.semesters to authenticated;
grant select on public.semester_memberships to authenticated;
grant select on public.senior_assignments to authenticated;
grant select on public.role_change_history to authenticated;
grant select on public.account_approval_history to authenticated;

create policy "Users see their profile and admins see all profiles"
on public.profiles for select
to authenticated
using (
  public.is_emory_user()
  and (id = auth.uid() or public.is_any_admin())
);

create policy "Users update only their non-privileged profile fields"
on public.profiles for update
to authenticated
using (public.is_emory_user() and id = auth.uid())
with check (
  public.is_emory_user()
  and id = auth.uid()
  and lower(email) = lower(auth.jwt() ->> 'email')
);

create policy "Approved users can view semesters"
on public.semesters for select
to authenticated
using (public.is_approved_user());

create policy "Approved users can view relevant memberships"
on public.semester_memberships for select
to authenticated
using (
  public.is_approved_user()
  and (
    user_id = auth.uid()
    or public.is_semester_admin(semester_id)
    or exists (
      select 1
      from public.senior_assignments
      where senior_assignments.semester_id = semester_memberships.semester_id
        and senior_assignments.senior_id = auth.uid()
        and senior_assignments.member_id = semester_memberships.user_id
    )
  )
);

create policy "Approved users can view relevant senior assignments"
on public.senior_assignments for select
to authenticated
using (
  public.is_approved_user()
  and (
    senior_id = auth.uid()
    or member_id = auth.uid()
    or public.is_semester_admin(semester_id)
  )
);

create policy "Admins can view role history"
on public.role_change_history for select
to authenticated
using (public.is_semester_admin(semester_id));

create policy "Admins can view approval history"
on public.account_approval_history for select
to authenticated
using (public.is_any_admin());

create or replace function public.admin_set_account_status(
  target_user uuid,
  target_status text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  old_status text;
begin
  if not public.is_any_admin() then
    raise exception 'Admin permission required';
  end if;

  if target_status not in ('pending', 'approved', 'rejected') then
    raise exception 'Invalid approval status';
  end if;

  select approval_status into old_status
  from public.profiles where id = target_user;

  update public.profiles
  set
    approval_status = target_status,
    approved_by = case when target_status = 'approved' then auth.uid() else null end,
    approved_at = case when target_status = 'approved' then now() else null end,
    updated_at = now()
  where id = target_user;

  if old_status is distinct from target_status then
    insert into public.account_approval_history (
      user_id, previous_status, new_status, changed_by
    )
    values (target_user, old_status, target_status, auth.uid());
  end if;
end;
$$;

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
  if not public.is_semester_admin(target_semester) then
    raise exception 'Admin permission required';
  end if;

  if target_role not in ('admin', 'senior', 'vp', 'associate', 'analyst') then
    raise exception 'Invalid role';
  end if;

  if not exists (
    select 1 from public.profiles
    where id = target_user and approval_status = 'approved'
  ) then
    raise exception 'Approve this account before assigning a role';
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
    values (target_semester, target_user, old_role, target_role, auth.uid());
  end if;

  if target_role not in ('associate', 'analyst') then
    delete from public.senior_assignments
    where semester_id = target_semester and member_id = target_user;
  end if;
end;
$$;

create or replace function public.admin_assign_senior(
  target_semester uuid,
  target_senior uuid,
  target_member uuid
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_semester_admin(target_semester) then
    raise exception 'Admin permission required';
  end if;

  if not exists (
    select 1 from public.semester_memberships
    where semester_id = target_semester
      and user_id = target_senior
      and role = 'senior'
  ) then
    raise exception 'Assigned supervisor must have the Senior role';
  end if;

  if not exists (
    select 1 from public.semester_memberships
    where semester_id = target_semester
      and user_id = target_member
      and role in ('associate', 'analyst')
  ) then
    raise exception 'Only Associates and Analysts can be assigned to a Senior';
  end if;

  insert into public.senior_assignments (
    semester_id, senior_id, member_id, created_by
  )
  values (target_semester, target_senior, target_member, auth.uid())
  on conflict (semester_id, member_id)
  do update set
    senior_id = excluded.senior_id,
    created_by = auth.uid(),
    created_at = now();
end;
$$;

revoke all on function public.admin_set_account_status(uuid, text) from public;
revoke all on function public.admin_set_member_role(uuid, uuid, text) from public;
revoke all on function public.admin_assign_senior(uuid, uuid, uuid) from public;

grant execute on function public.admin_set_account_status(uuid, text) to authenticated;
grant execute on function public.admin_set_member_role(uuid, uuid, text) to authenticated;
grant execute on function public.admin_assign_senior(uuid, uuid, uuid) to authenticated;

-- Membership and assignment writes have no direct browser-table policy.
-- They can only occur through the guarded Admin functions above.
-- Never put the secret/service-role key in this repository.
