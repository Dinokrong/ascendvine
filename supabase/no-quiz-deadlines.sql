-- Weekly quizzes have no deadline. Released quizzes stay open until the
-- member submits them.
-- Apply after supabase/quizzes.sql.

update public.quiz_group_releases
set due_at = null
where due_at is not null;

alter table public.quiz_group_releases
  add constraint quiz_group_releases_no_due_date check (due_at is null);

-- target_due_at is kept so older cached pages can still call this function;
-- it is ignored.
create or replace function public.senior_release_quiz(
  target_quiz uuid,
  target_group uuid,
  target_due_at timestamptz default null
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_semester uuid;
  release_id uuid;
begin
  select quiz.semester_id into target_semester
  from public.quizzes quiz
  join public.groups selected_group
    on selected_group.semester_id = quiz.semester_id
  where quiz.id = target_quiz
    and selected_group.id = target_group
    and quiz.status = 'ready'
    and selected_group.senior_id = auth.uid();

  if target_semester is null or not public.is_approved_user() then
    raise exception 'Only the group Senior can release a ready quiz';
  end if;

  insert into public.quiz_group_releases (
    quiz_id, group_id, released_by, released_at
  )
  values (
    target_quiz, target_group, auth.uid(), now()
  )
  on conflict (quiz_id, group_id)
  do update set
    released_by = auth.uid(),
    released_at = now()
  returning id into release_id;

  return release_id;
end;
$$;

revoke all on function public.senior_release_quiz(uuid, uuid, timestamptz) from public;
grant execute on function public.senior_release_quiz(uuid, uuid, timestamptz) to authenticated;
