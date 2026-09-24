-- Keep the founding Admin permanently approved, undeletable, and an Admin in
-- every semester. Because that account is an Admin of every semester, each
-- semester always retains at least one Admin.
-- Apply after supabase/schema.sql, groups.sql, and admin-delete-account.sql.

create or replace function public.protected_admin_email()
returns text
language sql
immutable
set search_path = ''
as $$
  select 'ashley.hsieh@emory.edu'::text;
$$;

create or replace function public.is_protected_admin(target_user uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles
    where id = target_user
      and lower(email) = public.protected_admin_email()
  );
$$;

-- Blocks un-approval and deletion of the founding Admin. Deleting the
-- Supabase Auth user cascades to this profile, so this also blocks that.
create or replace function public.guard_protected_admin_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if lower(old.email) = public.protected_admin_email() then
    if tg_op = 'DELETE' then
      raise exception 'The founding Admin account cannot be deleted';
    end if;

    if new.approval_status <> 'approved'
       or lower(new.email) <> lower(old.email) then
      raise exception 'The founding Admin account must stay approved';
    end if;
  end if;

  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

create trigger protect_founding_admin_profile
before update or delete on public.profiles
for each row execute function public.guard_protected_admin_profile();

-- Blocks demoting or removing the founding Admin from any semester that still
-- exists. Deleting a whole semester is still allowed.
create or replace function public.guard_protected_admin_membership()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if old.role = 'admin'
     and public.is_protected_admin(old.user_id)
     and (
       tg_op = 'DELETE'
       or new.role <> 'admin'
       or new.user_id <> old.user_id
       or new.semester_id <> old.semester_id
     )
     and exists (select 1 from public.semesters where id = old.semester_id) then
    raise exception 'The founding Admin must remain an Admin in every semester';
  end if;

  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

create trigger protect_founding_admin_membership
before update or delete on public.semester_memberships
for each row execute function public.guard_protected_admin_membership();

create or replace function public.add_protected_admin_to_semester()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.semester_memberships (semester_id, user_id, role)
  select new.id, profile.id, 'admin'
  from public.profiles profile
  where lower(profile.email) = public.protected_admin_email()
  on conflict (semester_id, user_id) do update set role = 'admin';

  return new;
end;
$$;

create trigger add_founding_admin_to_new_semester
after insert on public.semesters
for each row execute function public.add_protected_admin_to_semester();

-- Make the founding Admin an Admin of every existing semester.
insert into public.semester_memberships (semester_id, user_id, role)
select semester.id, profile.id, 'admin'
from public.semesters semester
cross join public.profiles profile
where lower(profile.email) = public.protected_admin_email()
on conflict (semester_id, user_id) do update set role = 'admin';

-- Rejecting or un-approving an account must not remove a semester's last Admin.
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

  if target_status <> 'approved' and public.is_protected_admin(target_user) then
    raise exception 'The founding Admin account must stay approved';
  end if;

  if target_status <> 'approved' and exists (
    select 1
    from public.semester_memberships target_membership
    where target_membership.user_id = target_user
      and target_membership.role = 'admin'
      and not exists (
        select 1
        from public.semester_memberships other_admin
        join public.profiles other_profile on other_profile.id = other_admin.user_id
        where other_admin.semester_id = target_membership.semester_id
          and other_admin.role = 'admin'
          and other_admin.user_id <> target_user
          and other_profile.approval_status = 'approved'
      )
  ) then
    raise exception 'Assign another Admin before removing the last semester Admin';
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

revoke all on function public.protected_admin_email() from public;
revoke all on function public.is_protected_admin(uuid) from public;
revoke all on function public.guard_protected_admin_profile() from public;
revoke all on function public.guard_protected_admin_membership() from public;
revoke all on function public.add_protected_admin_to_semester() from public;
revoke all on function public.admin_set_account_status(uuid, text) from public;

grant execute on function public.admin_set_account_status(uuid, text) to authenticated;
