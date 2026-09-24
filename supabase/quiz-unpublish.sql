-- Allow a Senior to remove a quiz release from their own group. Existing
-- attempts stay available, but members who have not started can no longer do so.
-- Apply after supabase/quizzes.sql.

create or replace function public.can_view_quiz(target_quiz uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_approved_user() and exists (
    select 1
    from public.quizzes selected_quiz
    where selected_quiz.id = target_quiz
      and (
        public.is_semester_admin(selected_quiz.semester_id)
        or (
          selected_quiz.status = 'ready'
          and exists (
            select 1
            from public.semester_memberships senior_role
            where senior_role.semester_id = selected_quiz.semester_id
              and senior_role.user_id = auth.uid()
              and senior_role.role = 'senior'
          )
        )
        or exists (
          select 1
          from public.quiz_group_releases release
          join public.groups selected_group on selected_group.id = release.group_id
          left join public.group_memberships viewer_group
            on viewer_group.group_id = release.group_id
           and viewer_group.user_id = auth.uid()
          where release.quiz_id = selected_quiz.id
            and (
              selected_group.senior_id = auth.uid()
              or viewer_group.user_id is not null
            )
        )
        or exists (
          select 1
          from public.quiz_attempts own_attempt
          where own_attempt.quiz_id = selected_quiz.id
            and own_attempt.user_id = auth.uid()
        )
      )
  );
$$;

create or replace function public.can_grade_quiz(target_quiz uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_approved_user() and exists (
    select 1
    from public.quizzes selected_quiz
    where selected_quiz.id = target_quiz
      and (
        public.is_semester_admin(selected_quiz.semester_id)
        or exists (
          select 1
          from public.quiz_group_releases release
          where release.quiz_id = selected_quiz.id
            and public.can_grade_group(release.group_id)
        )
        or exists (
          select 1
          from public.quiz_attempts attempt
          where attempt.quiz_id = selected_quiz.id
            and public.can_grade_group(attempt.group_id)
        )
      )
  );
$$;

create or replace function public.senior_unpublish_quiz(
  target_quiz uuid,
  target_group uuid
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_approved_user() or not exists (
    select 1
    from public.quiz_group_releases release
    join public.groups selected_group on selected_group.id = release.group_id
    where release.quiz_id = target_quiz
      and release.group_id = target_group
      and selected_group.senior_id = auth.uid()
  ) then
    raise exception 'Only the group Senior can unpublish this quiz';
  end if;

  delete from public.quiz_group_releases
  where quiz_id = target_quiz
    and group_id = target_group;
end;
$$;

revoke all on function public.senior_unpublish_quiz(uuid, uuid) from public;
revoke all on function public.can_view_quiz(uuid) from public;
revoke all on function public.can_grade_quiz(uuid) from public;
grant execute on function public.senior_unpublish_quiz(uuid, uuid) to authenticated;
grant execute on function public.can_view_quiz(uuid) to authenticated;
grant execute on function public.can_grade_quiz(uuid) to authenticated;
