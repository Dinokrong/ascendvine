-- Incremental migration for projects that already installed quizzes.sql before
-- the grading and quiz-leaderboard phase was added.

create or replace function public.grade_quiz_attempt(
  target_attempt uuid,
  response_grades jsonb,
  final_feedback text default null
)
returns numeric
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_group uuid;
  target_status text;
  expected_count integer;
  provided_count integer;
  grade_item jsonb;
  question_uuid uuid;
  awarded numeric(8,2);
  maximum numeric(8,2);
  final_score numeric(10,2);
begin
  select group_id, status into target_group, target_status
  from public.quiz_attempts
  where id = target_attempt;

  if target_group is null or not public.can_grade_group(target_group) then
    raise exception 'You do not have permission to grade this submission';
  end if;

  if target_status not in ('submitted', 'graded') then
    raise exception 'Only submitted quizzes can be graded';
  end if;

  if jsonb_typeof(response_grades) <> 'array' then
    raise exception 'Response grades must be an array';
  end if;

  select count(*) into expected_count
  from public.quiz_responses response
  where response.attempt_id = target_attempt;

  select count(distinct item ->> 'question_id') into provided_count
  from jsonb_array_elements(response_grades) item;

  if expected_count = 0 or provided_count <> expected_count then
    raise exception 'Every response must receive a grade';
  end if;

  for grade_item in select value from jsonb_array_elements(response_grades)
  loop
    begin
      question_uuid := (grade_item ->> 'question_id')::uuid;
      awarded := (grade_item ->> 'points_awarded')::numeric;
    exception when others then
      raise exception 'Each grade needs a valid question and point value';
    end;

    if awarded is null then
      raise exception 'Each grade needs a point value';
    end if;

    select question.max_points into maximum
    from public.quiz_responses response
    join public.quiz_questions question on question.id = response.question_id
    where response.attempt_id = target_attempt
      and response.question_id = question_uuid;

    if maximum is null then
      raise exception 'A graded question does not belong to this submission';
    end if;

    if awarded < 0 or awarded > maximum then
      raise exception 'Points must be between zero and the question maximum';
    end if;

    update public.quiz_responses
    set points_awarded = awarded,
        grader_feedback = nullif(trim(coalesce(grade_item ->> 'feedback', '')), ''),
        updated_at = now()
    where attempt_id = target_attempt
      and question_id = question_uuid;
  end loop;

  select coalesce(sum(points_awarded), 0) into final_score
  from public.quiz_responses
  where attempt_id = target_attempt;

  update public.quiz_attempts
  set status = 'graded',
      score = final_score,
      overall_feedback = nullif(trim(coalesce(final_feedback, '')), ''),
      graded_at = now(),
      graded_by = auth.uid()
  where id = target_attempt;

  return final_score;
end;
$$;

create or replace function public.get_quiz_leaderboard(target_semester uuid)
returns table (
  rank bigint,
  user_id uuid,
  display_name text,
  role text,
  quizzes_graded bigint,
  points_earned numeric,
  points_possible numeric,
  percentage numeric
)
language sql
stable
security definer
set search_path = ''
as $$
  with authorized as (
    select exists (
      select 1
      from public.semester_memberships viewer
      where viewer.semester_id = target_semester
        and viewer.user_id = auth.uid()
    ) and public.is_approved_user() as allowed
  ), member_totals as (
    select
      membership.user_id,
      trim(coalesce(profile.first_name, '') || ' ' || coalesce(profile.last_name, '')) as display_name,
      membership.role,
      count(attempt.id) filter (where attempt.status = 'graded')::bigint as quizzes_graded,
      coalesce(sum(attempt.score) filter (where attempt.status = 'graded'), 0)::numeric as points_earned,
      coalesce(sum(possible.total_points) filter (where attempt.status = 'graded'), 0)::numeric as points_possible
    from public.semester_memberships membership
    join public.profiles profile on profile.id = membership.user_id
    left join public.quiz_attempts attempt
      on attempt.user_id = membership.user_id
     and attempt.status = 'graded'
     and exists (
       select 1
       from public.quizzes attempt_quiz
       where attempt_quiz.id = attempt.quiz_id
         and attempt_quiz.semester_id = membership.semester_id
     )
    left join public.quizzes quiz on quiz.id = attempt.quiz_id
    left join lateral (
      select sum(question.max_points)::numeric as total_points
      from public.quiz_questions question
      where question.quiz_id = quiz.id
    ) possible on true
    where membership.semester_id = target_semester
      and membership.role in ('associate', 'analyst')
      and (select allowed from authorized)
    group by membership.user_id, profile.first_name, profile.last_name, membership.role
  ), ranked as (
    select
      dense_rank() over (
        order by points_earned desc,
          case when points_possible > 0 then points_earned / points_possible else 0 end desc
      ) as rank,
      member_totals.*
    from member_totals
  )
  select
    ranked.rank,
    ranked.user_id,
    coalesce(nullif(ranked.display_name, ''), 'AscendVine member') as display_name,
    ranked.role,
    ranked.quizzes_graded,
    ranked.points_earned,
    ranked.points_possible,
    case
      when ranked.points_possible > 0
        then round((ranked.points_earned / ranked.points_possible) * 100, 1)
      else 0
    end as percentage
  from ranked
  order by ranked.rank, ranked.display_name;
$$;

revoke all on function public.grade_quiz_attempt(uuid, jsonb, text) from public;
revoke all on function public.get_quiz_leaderboard(uuid) from public;
grant execute on function public.grade_quiz_attempt(uuid, jsonb, text) to authenticated;
grant execute on function public.get_quiz_leaderboard(uuid) to authenticated;
