-- Show each member's group on both leaderboards.
-- Apply after supabase/quiz-grading.sql and supabase/practice-time.sql.
-- The return columns change, so the functions are dropped and recreated.

drop function if exists public.get_quiz_leaderboard(uuid);
drop function if exists public.get_practice_leaderboard(uuid);

create function public.get_quiz_leaderboard(target_semester uuid)
returns table (
  rank bigint,
  user_id uuid,
  display_name text,
  role text,
  group_name text,
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
      member_group.name as group_name,
      count(attempt.id) filter (where attempt.status = 'graded')::bigint as quizzes_graded,
      coalesce(sum(attempt.score) filter (where attempt.status = 'graded'), 0)::numeric as points_earned,
      coalesce(sum(possible.total_points) filter (where attempt.status = 'graded'), 0)::numeric as points_possible
    from public.semester_memberships membership
    join public.profiles profile on profile.id = membership.user_id
    left join public.group_memberships group_membership
      on group_membership.user_id = membership.user_id
     and group_membership.semester_id = membership.semester_id
    left join public.groups member_group on member_group.id = group_membership.group_id
    left join public.quiz_attempts attempt
      on attempt.user_id = membership.user_id
     and attempt.status = 'graded'
     and exists (
       select 1
       from public.quizzes attempt_quiz
       where attempt_quiz.id = attempt.quiz_id
         and attempt_quiz.semester_id = membership.semester_id
     )
    left join public.quizzes quiz
      on quiz.id = attempt.quiz_id
    left join lateral (
      select sum(question.max_points)::numeric as total_points
      from public.quiz_questions question
      where question.quiz_id = quiz.id
    ) possible on true
    where membership.semester_id = target_semester
      and membership.role in ('associate', 'analyst')
      and (select allowed from authorized)
    group by membership.user_id, profile.first_name, profile.last_name, membership.role, member_group.name
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
    ranked.group_name,
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

create function public.get_practice_leaderboard(target_semester uuid)
returns table (
  rank bigint,
  user_id uuid,
  display_name text,
  role text,
  group_name text,
  days_active bigint,
  active_seconds bigint
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
      member_group.name as group_name,
      count(activity.activity_date) filter (where activity.active_seconds >= 60)::bigint as days_active,
      coalesce(sum(activity.active_seconds), 0)::bigint as active_seconds
    from public.semester_memberships membership
    join public.semesters semester on semester.id = membership.semester_id
    join public.profiles profile on profile.id = membership.user_id
    left join public.group_memberships group_membership
      on group_membership.user_id = membership.user_id
     and group_membership.semester_id = membership.semester_id
    left join public.groups member_group on member_group.id = group_membership.group_id
    left join public.practice_daily_activity activity
      on activity.user_id = membership.user_id
     and activity.activity_date between semester.starts_on and semester.ends_on
    where membership.semester_id = target_semester
      and membership.role in ('associate', 'analyst')
      and (select allowed from authorized)
    group by membership.user_id, profile.first_name, profile.last_name, membership.role, member_group.name
  )
  select
    dense_rank() over (order by member_totals.active_seconds desc) as rank,
    member_totals.user_id,
    coalesce(nullif(member_totals.display_name, ''), 'AscendVine member') as display_name,
    member_totals.role,
    member_totals.group_name,
    member_totals.days_active,
    member_totals.active_seconds
  from member_totals
  order by rank, display_name;
$$;

revoke all on function public.get_quiz_leaderboard(uuid) from public;
revoke all on function public.get_practice_leaderboard(uuid) from public;
grant execute on function public.get_quiz_leaderboard(uuid) to authenticated;
grant execute on function public.get_practice_leaderboard(uuid) to authenticated;
