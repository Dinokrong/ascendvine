-- Record when a member leaves the quiz page while taking a quiz, and which
-- question they were on, so the group's Senior and VP see it when grading.
-- Apply after supabase/quizzes.sql.

create table public.quiz_away_events (
  id bigint generated always as identity primary key,
  attempt_id uuid not null references public.quiz_attempts(id) on delete cascade,
  question_id uuid references public.quiz_questions(id) on delete set null,
  left_at timestamptz not null default now(),
  returned_at timestamptz
);

create index quiz_away_events_attempt_idx on public.quiz_away_events (attempt_id);

alter table public.quiz_away_events enable row level security;
revoke all on public.quiz_away_events from anon, authenticated;
grant select on public.quiz_away_events to authenticated;

-- Only graders (the group's Senior and VP, and Admins) can see these.
create policy "Graders can view quiz away events"
on public.quiz_away_events for select
to authenticated
using (
  exists (
    select 1
    from public.quiz_attempts attempt
    where attempt.id = quiz_away_events.attempt_id
      and public.can_grade_group(attempt.group_id)
  )
);

-- Called when the quiz page is hidden or loses focus. Ignored if the member
-- is already marked as away, so one trip away counts once.
create or replace function public.record_quiz_away(
  target_attempt uuid,
  target_question uuid default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_approved_user() or not exists (
    select 1
    from public.quiz_attempts attempt
    where attempt.id = target_attempt
      and attempt.user_id = auth.uid()
      and attempt.status = 'in_progress'
  ) then
    return;
  end if;

  if exists (
    select 1 from public.quiz_away_events
    where attempt_id = target_attempt and returned_at is null
  ) then
    return;
  end if;

  insert into public.quiz_away_events (attempt_id, question_id)
  select target_attempt, question.id
  from (select 1) always_one
  left join public.quiz_attempts attempt on attempt.id = target_attempt
  left join public.quiz_questions question
    on question.id = target_question
   and question.quiz_id = attempt.quiz_id;
end;
$$;

-- Called when the member comes back to the quiz page.
create or replace function public.record_quiz_return(target_attempt uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.quiz_away_events event
  set returned_at = now()
  from public.quiz_attempts attempt
  where event.attempt_id = target_attempt
    and event.returned_at is null
    and attempt.id = event.attempt_id
    and attempt.user_id = auth.uid();
end;
$$;

revoke all on function public.record_quiz_away(uuid, uuid) from public;
revoke all on function public.record_quiz_return(uuid) from public;
grant execute on function public.record_quiz_away(uuid, uuid) to authenticated;
grant execute on function public.record_quiz_return(uuid) to authenticated;
