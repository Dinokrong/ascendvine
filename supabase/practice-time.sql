-- Practice leaderboard: active time spent in the Question Bank.
-- The browser only reports that the page is open and in use. The database
-- measures the time between reports, so a page cannot claim more time than
-- actually passed.
-- Apply after supabase/schema.sql.

create table public.practice_daily_activity (
  user_id uuid not null references public.profiles(id) on delete cascade,
  activity_date date not null,
  active_seconds integer not null default 0
    check (active_seconds between 0 and 86400),
  primary key (user_id, activity_date)
);

create table public.practice_heartbeats (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  last_seen_at timestamptz not null
);

alter table public.practice_daily_activity enable row level security;
alter table public.practice_heartbeats enable row level security;

revoke all on public.practice_daily_activity from anon, authenticated;
revoke all on public.practice_heartbeats from anon, authenticated;
grant select on public.practice_daily_activity to authenticated;

create policy "Users can view their own practice activity"
on public.practice_daily_activity for select
to authenticated
using (user_id = auth.uid());

-- Credits the time since the previous report, if it was at most 60 seconds
-- ago. A longer gap means the member was away, so nothing is credited.
-- Pass resume = true when activity restarts after a pause.
create or replace function public.record_practice_heartbeat(resume boolean default false)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  previous timestamptz;
  elapsed numeric;
  credited integer := 0;
  today date := (now() at time zone 'America/New_York')::date;
  total integer;
begin
  if not public.is_approved_user() then
    raise exception 'Approved account required';
  end if;

  select last_seen_at into previous
  from public.practice_heartbeats
  where user_id = auth.uid()
  for update;

  if not resume and previous is not null then
    elapsed := extract(epoch from (now() - previous));
    if elapsed > 0 and elapsed <= 60 then
      credited := round(elapsed)::integer;
    end if;
  end if;

  insert into public.practice_heartbeats (user_id, last_seen_at)
  values (auth.uid(), now())
  on conflict (user_id) do update set last_seen_at = excluded.last_seen_at;

  insert into public.practice_daily_activity (user_id, activity_date, active_seconds)
  values (auth.uid(), today, credited)
  on conflict (user_id, activity_date)
  do update set active_seconds = least(
    public.practice_daily_activity.active_seconds + excluded.active_seconds,
    86400
  )
  returning active_seconds into total;

  return total;
end;
$$;

create or replace function public.get_practice_leaderboard(target_semester uuid)
returns table (
  rank bigint,
  user_id uuid,
  display_name text,
  role text,
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
      count(activity.activity_date) filter (where activity.active_seconds >= 60)::bigint as days_active,
      coalesce(sum(activity.active_seconds), 0)::bigint as active_seconds
    from public.semester_memberships membership
    join public.semesters semester on semester.id = membership.semester_id
    join public.profiles profile on profile.id = membership.user_id
    left join public.practice_daily_activity activity
      on activity.user_id = membership.user_id
     and activity.activity_date between semester.starts_on and semester.ends_on
    where membership.semester_id = target_semester
      and membership.role in ('associate', 'analyst')
      and (select allowed from authorized)
    group by membership.user_id, profile.first_name, profile.last_name, membership.role
  )
  select
    dense_rank() over (order by member_totals.active_seconds desc) as rank,
    member_totals.user_id,
    coalesce(nullif(member_totals.display_name, ''), 'AscendVine member') as display_name,
    member_totals.role,
    member_totals.days_active,
    member_totals.active_seconds
  from member_totals
  order by rank, display_name;
$$;

revoke all on function public.record_practice_heartbeat(boolean) from public;
revoke all on function public.get_practice_leaderboard(uuid) from public;
grant execute on function public.record_practice_heartbeat(boolean) to authenticated;
grant execute on function public.get_practice_leaderboard(uuid) to authenticated;
