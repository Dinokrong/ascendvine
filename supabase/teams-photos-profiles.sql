-- Group photos, Admin profile edits, and the fair team leaderboard.
-- Apply after supabase/general-members.sql and supabase/graded-answer-review.sql.

-- ---------------------------------------------------------------------------
-- Group photos
-- ---------------------------------------------------------------------------
alter table public.groups add column if not exists photo_path text;

-- The group's Senior, or an Admin of the group's semester.
create or replace function public.can_manage_group_photo(target_group text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_approved_user() and exists (
    select 1
    from public.groups selected_group
    where selected_group.id::text = target_group
      and (
        selected_group.senior_id = auth.uid()
        or public.is_semester_admin(selected_group.semester_id)
      )
  );
$$;

create or replace function public.set_group_photo(target_group uuid, photo_path text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.can_manage_group_photo(target_group::text) then
    raise exception 'Only this group''s Senior or an Admin can change its photo';
  end if;

  if photo_path is not null and photo_path not like target_group::text || '/%' then
    raise exception 'Photo must be stored in this group''s folder';
  end if;

  update public.groups
  set photo_path = set_group_photo.photo_path, updated_at = now()
  where id = target_group;
end;
$$;

revoke all on function public.can_manage_group_photo(text) from public;
revoke all on function public.set_group_photo(uuid, text) from public;
grant execute on function public.can_manage_group_photo(text) to authenticated;
grant execute on function public.set_group_photo(uuid, text) to authenticated;

-- Public-read bucket; files live at <group id>/<timestamp>.jpg.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('group-photos', 'group-photos', true, 2097152, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "Group Seniors and Admins can upload group photos"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'group-photos'
  and public.can_manage_group_photo((storage.foldername(name))[1])
);

create policy "Group Seniors and Admins can replace group photos"
on storage.objects for update
to authenticated
using (bucket_id = 'group-photos' and public.can_manage_group_photo((storage.foldername(name))[1]))
with check (bucket_id = 'group-photos' and public.can_manage_group_photo((storage.foldername(name))[1]));

create policy "Group Seniors and Admins can delete group photos"
on storage.objects for delete
to authenticated
using (bucket_id = 'group-photos' and public.can_manage_group_photo((storage.foldername(name))[1]));

-- ---------------------------------------------------------------------------
-- Admins can edit a member's name and graduation year
-- ---------------------------------------------------------------------------
create or replace function public.admin_update_profile(
  target_user uuid,
  first_name text,
  last_name text,
  graduation_year integer
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_any_admin() then
    raise exception 'Admin permission required';
  end if;

  if length(trim(coalesce(first_name, ''))) = 0 or length(trim(coalesce(last_name, ''))) = 0 then
    raise exception 'First and last name are required';
  end if;

  if length(trim(first_name)) > 60 or length(trim(last_name)) > 60 then
    raise exception 'Names must be 60 characters or fewer';
  end if;

  if graduation_year is not null and graduation_year not between 2000 and 2100 then
    raise exception 'Graduation year must be between 2000 and 2100';
  end if;

  update public.profiles
  set
    first_name = trim(admin_update_profile.first_name),
    last_name = trim(admin_update_profile.last_name),
    graduation_year = admin_update_profile.graduation_year,
    updated_at = now()
  where id = target_user;

  if not found then
    raise exception 'Account not found';
  end if;
end;
$$;

revoke all on function public.admin_update_profile(uuid, text, text, integer) from public;
grant execute on function public.admin_update_profile(uuid, text, text, integer) to authenticated;

-- ---------------------------------------------------------------------------
-- Fair team leaderboard
-- ---------------------------------------------------------------------------
-- A team's score is the average of its members' scores. A member's score is
-- the average, over the quizzes that count for their group, of:
--   (their percent on the quiz) / (average percent of members with the same
--   graduation year on that quiz) * 100
-- so 100 = average for their class year. Members without a graduation year
-- are compared with everyone's average on that quiz.
-- A quiz counts for a group once grading has started for it in that group.
-- Not submitting a counted quiz scores 0; a submitted quiz still waiting for a
-- grade is left out until it's graded.
-- Only Associates and Analysts (quiz takers) count toward teams.
create or replace function public.get_team_leaderboard(target_semester uuid)
returns table (
  rank bigint,
  group_id uuid,
  group_name text,
  senior_name text,
  photo_path text,
  members bigint,
  analysts bigint,
  associates bigint,
  freshmen bigint,
  sophomores bigint,
  counted_quizzes bigint,
  participation numeric,
  average_percent numeric,
  team_score numeric
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
        and viewer.role <> 'general'
    ) and public.is_approved_user() as allowed
  ), semester_info as (
    -- The spring year that ends this academic year (Fall 2026 -> 2027).
    select
      extract(year from semester.ends_on)::integer
        + case when extract(month from semester.ends_on) >= 7 then 1 else 0 end as spring_year
    from public.semesters semester
    where semester.id = target_semester
  ), takers as (
    select
      membership.user_id,
      membership.role,
      profile.graduation_year,
      group_membership.group_id
    from public.semester_memberships membership
    join public.profiles profile on profile.id = membership.user_id
    join public.group_memberships group_membership
      on group_membership.user_id = membership.user_id
     and group_membership.semester_id = membership.semester_id
    where membership.semester_id = target_semester
      and membership.role in ('associate', 'analyst')
      and (select allowed from authorized)
  ), quiz_points as (
    select question.quiz_id, sum(question.max_points)::numeric as possible
    from public.quiz_questions question
    join public.quizzes quiz on quiz.id = question.quiz_id
    where quiz.semester_id = target_semester
    group by question.quiz_id
  ), graded as (
    -- Every graded attempt this semester, as a percent.
    select
      attempt.quiz_id,
      attempt.user_id,
      attempt.group_id,
      profile.graduation_year,
      attempt.score / nullif(points.possible, 0) * 100 as percent
    from public.quiz_attempts attempt
    join quiz_points points on points.quiz_id = attempt.quiz_id
    join public.profiles profile on profile.id = attempt.user_id
    where attempt.status = 'graded'
  ), year_average as (
    select quiz_id, graduation_year, avg(percent) as average
    from graded
    where graduation_year is not null
    group by quiz_id, graduation_year
  ), quiz_average as (
    select quiz_id, avg(percent) as average
    from graded
    group by quiz_id
  ), counted as (
    -- Quizzes that count for each group: released to it, and grading started there.
    select distinct release.group_id, release.quiz_id
    from public.quiz_group_releases release
    join graded on graded.quiz_id = release.quiz_id and graded.group_id = release.group_id
  ), member_quiz as (
    select
      taker.user_id,
      taker.group_id,
      counted.quiz_id,
      attempt.status,
      coalesce(graded.percent, 0) as percent,
      coalesce(year_average.average, quiz_average.average) as benchmark
    from takers taker
    join counted on counted.group_id = taker.group_id
    left join public.quiz_attempts attempt
      on attempt.quiz_id = counted.quiz_id and attempt.user_id = taker.user_id
    left join graded
      on graded.quiz_id = counted.quiz_id and graded.user_id = taker.user_id
    left join year_average
      on year_average.quiz_id = counted.quiz_id and year_average.graduation_year = taker.graduation_year
    left join quiz_average
      on quiz_average.quiz_id = counted.quiz_id
    -- A submitted quiz still waiting for a grade is left out for now.
    where coalesce(attempt.status, 'missing') <> 'submitted'
  ), member_scores as (
    select
      user_id,
      avg(percent) as average_percent,
      avg(case when benchmark > 0 then percent / benchmark * 100 else 100 end) as relative,
      count(*) filter (where status = 'graded')::numeric / nullif(count(*), 0) as participation
    from member_quiz
    group by user_id
  ), teams as (
    select
      selected_group.id as group_id,
      selected_group.name as group_name,
      trim(coalesce(senior.first_name, '') || ' ' || coalesce(senior.last_name, '')) as senior_name,
      selected_group.photo_path,
      count(taker.user_id)::bigint as members,
      count(taker.user_id) filter (where taker.role = 'analyst')::bigint as analysts,
      count(taker.user_id) filter (where taker.role = 'associate')::bigint as associates,
      count(taker.user_id) filter (where taker.graduation_year - (select spring_year from semester_info) = 3)::bigint as freshmen,
      count(taker.user_id) filter (where taker.graduation_year - (select spring_year from semester_info) = 2)::bigint as sophomores,
      (select count(*) from counted where counted.group_id = selected_group.id)::bigint as counted_quizzes,
      avg(scores.participation) as participation,
      avg(scores.average_percent) as average_percent,
      avg(scores.relative) as team_score
    from public.groups selected_group
    left join public.profiles senior on senior.id = selected_group.senior_id
    left join takers taker on taker.group_id = selected_group.id
    left join member_scores scores on scores.user_id = taker.user_id
    where selected_group.semester_id = target_semester
      and (select allowed from authorized)
    group by selected_group.id, selected_group.name, senior.first_name, senior.last_name, selected_group.photo_path
  )
  select
    case when team_score is null then null
      else rank() over (order by team_score desc nulls last) end as rank,
    group_id,
    group_name,
    coalesce(nullif(senior_name, ''), 'No Senior') as senior_name,
    photo_path,
    members,
    analysts,
    associates,
    freshmen,
    sophomores,
    counted_quizzes,
    round(participation * 100, 1) as participation,
    round(average_percent, 1) as average_percent,
    round(team_score, 1) as team_score
  from teams
  order by team_score desc nulls last, group_name;
$$;

revoke all on function public.get_team_leaderboard(uuid) from public;
grant execute on function public.get_team_leaderboard(uuid) to authenticated;

-- ---------------------------------------------------------------------------
-- Class-year averages on the Weekly Quizzes list
-- ---------------------------------------------------------------------------
-- Every group gets the same Admin-uploaded quiz, so each member can see the
-- average graded score of their own class year (graduation year) on it,
-- across all groups. Shown only once at least 3 people in that year have
-- been graded, so no one's individual score can be worked out.
create or replace function public.get_class_year_quiz_averages(target_semester uuid)
returns table (
  quiz_id uuid,
  class_label text,
  average_percent numeric,
  graded_count bigint
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
    count(*)::bigint as graded_count
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
