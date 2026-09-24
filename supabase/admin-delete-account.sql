-- Add guarded permanent account deletion for AscendVine Admins.
-- Apply this migration after supabase/schema.sql and supabase/groups.sql.

create table public.account_deletion_history (
  id bigint generated always as identity primary key,
  deleted_user_id uuid not null,
  email text not null,
  first_name text not null default '',
  last_name text not null default '',
  deleted_by uuid references public.profiles(id) on delete set null,
  deleted_at timestamptz not null default now()
);

alter table public.account_deletion_history enable row level security;
revoke all on public.account_deletion_history from anon, authenticated;
grant select on public.account_deletion_history to authenticated;

create policy "Admins can view account deletion history"
on public.account_deletion_history for select
to authenticated
using (public.is_any_admin());

create or replace function public.admin_delete_account(target_user uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_profile public.profiles%rowtype;
begin
  if not public.is_any_admin() then
    raise exception 'Admin permission required';
  end if;

  if target_user = auth.uid() then
    raise exception 'You cannot delete your own account';
  end if;

  select * into target_profile
  from public.profiles
  where id = target_user;

  if not found then
    raise exception 'Account not found';
  end if;

  if exists (
    select 1
    from public.semester_memberships target_membership
    where target_membership.user_id = target_user
      and target_membership.role = 'admin'
      and (
        select count(*)
        from public.semester_memberships other_admin
        where other_admin.semester_id = target_membership.semester_id
          and other_admin.role = 'admin'
      ) <= 1
  ) then
    raise exception 'Assign another Admin before deleting the last semester Admin';
  end if;

  if exists (
    select 1
    from public.groups
    where senior_id = target_user
  ) then
    raise exception 'Reassign this Senior''s groups before deleting their account';
  end if;

  insert into public.account_deletion_history (
    deleted_user_id, email, first_name, last_name, deleted_by
  )
  values (
    target_profile.id,
    target_profile.email,
    target_profile.first_name,
    target_profile.last_name,
    auth.uid()
  );

  -- Preserve ownership and audit references before the profile is removed.
  update public.profiles
  set approved_by = auth.uid()
  where approved_by = target_user;

  update public.senior_assignments
  set created_by = auth.uid()
  where created_by = target_user;

  update public.groups
  set created_by = auth.uid()
  where created_by = target_user;

  update public.group_memberships
  set assigned_by = auth.uid()
  where assigned_by = target_user;

  update public.role_change_history
  set changed_by = auth.uid()
  where changed_by = target_user;

  update public.account_approval_history
  set changed_by = auth.uid()
  where changed_by = target_user;

  delete from auth.users
  where id = target_user;

  if not found then
    raise exception 'Authentication account not found';
  end if;
end;
$$;

revoke all on function public.admin_delete_account(uuid) from public;
grant execute on function public.admin_delete_account(uuid) to authenticated;
