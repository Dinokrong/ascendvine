-- Add named Senior-led groups to an existing AscendVine account schema.

create table public.groups (
  id uuid primary key default gen_random_uuid(),
  semester_id uuid not null references public.semesters(id) on delete cascade,
  name text not null,
  senior_id uuid not null references public.profiles(id),
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (semester_id, name),
  unique (id, semester_id)
);

create table public.group_memberships (
  group_id uuid not null,
  semester_id uuid not null,
  user_id uuid not null references public.profiles(id) on delete cascade,
  assigned_by uuid not null references public.profiles(id),
  joined_at timestamptz not null default now(),
  primary key (group_id, user_id),
  unique (semester_id, user_id),
  foreign key (group_id, semester_id)
    references public.groups(id, semester_id)
    on delete cascade
);

alter table public.groups enable row level security;
alter table public.group_memberships enable row level security;

revoke all on public.groups from anon, authenticated;
revoke all on public.group_memberships from anon, authenticated;
grant select on public.groups to authenticated;
grant select on public.group_memberships to authenticated;

create or replace function public.can_view_group(target_group uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_approved_user() and exists (
    select 1
    from public.groups selected_group
    where selected_group.id = target_group
      and (
        selected_group.senior_id = auth.uid()
        or public.is_semester_admin(selected_group.semester_id)
        or exists (
          select 1
          from public.group_memberships membership
          where membership.group_id = selected_group.id
            and membership.user_id = auth.uid()
        )
      )
  );
$$;

create policy "Users can view relevant groups"
on public.groups for select
to authenticated
using (public.can_view_group(id));

create policy "Users can view relevant group memberships"
on public.group_memberships for select
to authenticated
using (
  public.can_view_group(group_id)
  or user_id = auth.uid()
);

drop policy if exists "Approved users can view relevant memberships"
on public.semester_memberships;

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
      from public.groups selected_group
      join public.group_memberships group_member
        on group_member.group_id = selected_group.id
      where selected_group.semester_id = semester_memberships.semester_id
        and selected_group.senior_id = auth.uid()
        and group_member.user_id = semester_memberships.user_id
    )
  )
);

create or replace function public.admin_create_group(
  target_semester uuid,
  group_name text,
  target_senior uuid
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  new_group_id uuid;
begin
  if not public.is_semester_admin(target_semester) then
    raise exception 'Admin permission required';
  end if;

  if length(trim(group_name)) < 2 then
    raise exception 'Group name must contain at least two characters';
  end if;

  if not exists (
    select 1 from public.semester_memberships
    where semester_id = target_semester
      and user_id = target_senior
      and role = 'senior'
  ) then
    raise exception 'Group leader must have the Senior role';
  end if;

  insert into public.groups (
    semester_id, name, senior_id, created_by
  )
  values (
    target_semester, trim(group_name), target_senior, auth.uid()
  )
  returning id into new_group_id;

  return new_group_id;
end;
$$;

create or replace function public.admin_update_group(
  target_group uuid,
  group_name text,
  target_senior uuid
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_semester uuid;
begin
  select semester_id into target_semester
  from public.groups
  where id = target_group;

  if target_semester is null
     or not public.is_semester_admin(target_semester) then
    raise exception 'Admin permission required';
  end if;

  if length(trim(group_name)) < 2 then
    raise exception 'Group name must contain at least two characters';
  end if;

  if not exists (
    select 1 from public.semester_memberships
    where semester_id = target_semester
      and user_id = target_senior
      and role = 'senior'
  ) then
    raise exception 'Group leader must have the Senior role';
  end if;

  update public.groups
  set
    name = trim(group_name),
    senior_id = target_senior,
    updated_at = now()
  where id = target_group;
end;
$$;

create or replace function public.admin_assign_group_member(
  target_group uuid,
  target_user uuid
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_semester uuid;
begin
  select semester_id into target_semester
  from public.groups
  where id = target_group;

  if target_semester is null
     or not public.is_semester_admin(target_semester) then
    raise exception 'Admin permission required';
  end if;

  if not exists (
    select 1 from public.semester_memberships
    where semester_id = target_semester
      and user_id = target_user
      and role in ('associate', 'analyst')
  ) then
    raise exception 'Only Associates and Analysts can join a group';
  end if;

  insert into public.group_memberships (
    group_id, semester_id, user_id, assigned_by
  )
  values (
    target_group, target_semester, target_user, auth.uid()
  )
  on conflict (semester_id, user_id)
  do update set
    group_id = excluded.group_id,
    assigned_by = auth.uid(),
    joined_at = now();
end;
$$;

create or replace function public.admin_remove_group_member(
  target_semester uuid,
  target_user uuid
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

  delete from public.group_memberships
  where semester_id = target_semester
    and user_id = target_user;
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

  if old_role = 'senior'
     and target_role <> 'senior'
     and exists (
       select 1 from public.groups
       where semester_id = target_semester and senior_id = target_user
     ) then
    raise exception 'Reassign this Senior''s groups before changing their role';
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
    delete from public.group_memberships
    where semester_id = target_semester and user_id = target_user;
  end if;
end;
$$;

revoke all on function public.can_view_group(uuid) from public;
revoke all on function public.admin_create_group(uuid, text, uuid) from public;
revoke all on function public.admin_update_group(uuid, text, uuid) from public;
revoke all on function public.admin_assign_group_member(uuid, uuid) from public;
revoke all on function public.admin_remove_group_member(uuid, uuid) from public;

grant execute on function public.can_view_group(uuid) to authenticated;
grant execute on function public.admin_create_group(uuid, text, uuid) to authenticated;
grant execute on function public.admin_update_group(uuid, text, uuid) to authenticated;
grant execute on function public.admin_assign_group_member(uuid, uuid) to authenticated;
grant execute on function public.admin_remove_group_member(uuid, uuid) to authenticated;
