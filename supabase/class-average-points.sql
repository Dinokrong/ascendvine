-- Class-year quiz averages: also return the average in points (e.g. 7.5 / 10),
-- so the Weekly Quizzes list can show points instead of a percentage.
-- Apply after supabase/teams-photos-profiles.sql.
drop function if exists public.get_class_year_quiz_averages(uuid);

create or replace function public.get_class_year_quiz_averages(target_semester uuid)
returns table (
  quiz_id uuid,
  class_label text,
  average_percent numeric,
  graded_count bigint,
  average_points numeric,
  points_possible numeric
)
language sql
stable
security definer
set search_path = ''
as $$
  with viewer as (
    select profile.graduation_year
    from public.profiles profile
    join public.semester_memberships membership
      on membership.user_id = profile.id
     and membership.semester_id = target_semester
     and membership.role <> 'general'
    where profile.id = auth.uid()
      and public.is_approved_user()
      and profile.graduation_year is not null
  ), semester_info as (
    select
      extract(year from semester.ends_on)::integer
        + case when extract(month from semester.ends_on) >= 7 then 1 else 0 end as spring_year
    from public.semesters semester
    where semester.id = target_semester
  ), quiz_points as (
    select question.quiz_id, sum(question.max_points)::numeric as possible
    from public.quiz_questions question
    join public.quizzes quiz on quiz.id = question.quiz_id
    where quiz.semester_id = target_semester
    group by question.quiz_id
  )
  select
    attempt.quiz_id,
    case (select graduation_year from viewer) - (select spring_year from semester_info)
      when 3 then 'Freshman' when 2 then 'Sophomore' when 1 then 'Junior' when 0 then 'Senior'
      else 'Class of ' || (select graduation_year from viewer)
    end as class_label,
    round(avg(attempt.score / nullif(points.possible, 0) * 100), 1) as average_percent,
    count(*)::bigint as graded_count,
    round(avg(attempt.score), 1) as average_points,
    max(points.possible) as points_possible
  from public.quiz_attempts attempt
  join quiz_points points on points.quiz_id = attempt.quiz_id
  join public.profiles profile on profile.id = attempt.user_id
  where attempt.status = 'graded'
    and profile.graduation_year = (select graduation_year from viewer)
  group by attempt.quiz_id
  having count(*) >= 3;
$$;

revoke all on function public.get_class_year_quiz_averages(uuid) from public;
grant execute on function public.get_class_year_quiz_averages(uuid) to authenticated;
