-- AscendVine quiz foundation: Admin upload, protected answer keys, releases,
-- submissions, and grading-ready records.
-- Apply after supabase/schema.sql and supabase/groups.sql.

create table public.quizzes (
  id uuid primary key default gen_random_uuid(),
  semester_id uuid not null references public.semesters(id) on delete cascade,
  title text not null,
  description text,
  source_label text,
  source_url text,
  status text not null default 'draft'
    check (status in ('draft', 'ready', 'archived')),
  created_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  position integer not null check (position > 0),
  chapter text,
  prompt text not null,
  max_points numeric(8,2) not null default 1 check (max_points > 0),
  unique (quiz_id, position)
);

-- Answer keys are deliberately separate so quiz takers can select prompts
-- without ever receiving grading answers from the browser API.
create table public.quiz_answer_keys (
  question_id uuid primary key references public.quiz_questions(id) on delete cascade,
  answer_key text not null
);

create table public.quiz_group_releases (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  group_id uuid not null references public.groups(id) on delete cascade,
  released_by uuid not null references public.profiles(id),
  released_at timestamptz not null default now(),
  due_at timestamptz,
  unique (quiz_id, group_id)
);

create table public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  group_id uuid not null references public.groups(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'in_progress'
    check (status in ('in_progress', 'submitted', 'graded')),
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  graded_at timestamptz,
  graded_by uuid references public.profiles(id),
  score numeric(10,2),
  overall_feedback text,
  unique (quiz_id, user_id)
);

create table public.quiz_responses (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.quiz_attempts(id) on delete cascade,
  question_id uuid not null references public.quiz_questions(id) on delete cascade,
  response_text text not null default '',
  points_awarded numeric(8,2),
  grader_feedback text,
  updated_at timestamptz not null default now(),
  unique (attempt_id, question_id)
);

alter table public.quizzes enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_answer_keys enable row level security;
alter table public.quiz_group_releases enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.quiz_responses enable row level security;

revoke all on public.quizzes from anon, authenticated;
revoke all on public.quiz_questions from anon, authenticated;
revoke all on public.quiz_answer_keys from anon, authenticated;
revoke all on public.quiz_group_releases from anon, authenticated;
revoke all on public.quiz_attempts from anon, authenticated;
revoke all on public.quiz_responses from anon, authenticated;

grant select on public.quizzes to authenticated;
grant select on public.quiz_questions to authenticated;
grant select on public.quiz_answer_keys to authenticated;
grant select on public.quiz_group_releases to authenticated;
grant select on public.quiz_attempts to authenticated;
grant select on public.quiz_responses to authenticated;

create or replace function public.can_grade_group(target_group uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_approved_user() and exists (
    select 1
    from public.groups selected_group
    where selected_group.id = target_group
      and (
        public.is_semester_admin(selected_group.semester_id)
        or selected_group.senior_id = auth.uid()
        or exists (
          select 1
          from public.group_memberships vp_membership
          join public.semester_memberships vp_role
            on vp_role.semester_id = vp_membership.semester_id
           and vp_role.user_id = vp_membership.user_id
          where vp_membership.group_id = selected_group.id
            and vp_membership.user_id = auth.uid()
            and vp_role.role = 'vp'
        )
      )
  );
$$;

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
      )
  );
$$;

create policy "Users can view relevant quizzes"
on public.quizzes for select
to authenticated
using (public.can_view_quiz(id));

create policy "Users can view relevant quiz prompts"
on public.quiz_questions for select
to authenticated
using (public.can_view_quiz(quiz_id));

create policy "Only graders can view answer keys"
on public.quiz_answer_keys for select
to authenticated
using (
  exists (
    select 1 from public.quiz_questions question
    where question.id = quiz_answer_keys.question_id
      and public.can_grade_quiz(question.quiz_id)
  )
);

create policy "Users can view relevant quiz releases"
on public.quiz_group_releases for select
to authenticated
using (
  public.can_view_group(group_id)
  or exists (
    select 1 from public.quizzes quiz
    where quiz.id = quiz_group_releases.quiz_id
      and public.is_semester_admin(quiz.semester_id)
  )
);

create policy "Users and graders can view relevant attempts"
on public.quiz_attempts for select
to authenticated
using (
  user_id = auth.uid()
  or public.can_grade_group(group_id)
);

create policy "Users and graders can view relevant responses"
on public.quiz_responses for select
to authenticated
using (
  exists (
    select 1 from public.quiz_attempts attempt
    where attempt.id = quiz_responses.attempt_id
      and (
        attempt.user_id = auth.uid()
        or public.can_grade_group(attempt.group_id)
      )
  )
);

create or replace function public.admin_create_quiz(
  target_semester uuid,
  quiz_title text,
  quiz_description text,
  quiz_source_label text,
  quiz_source_url text,
  question_rows jsonb
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  new_quiz_id uuid;
  question_count integer;
  row_item record;
  new_question_id uuid;
begin
  if not public.is_semester_admin(target_semester) then
    raise exception 'Admin permission required';
  end if;

  if length(trim(coalesce(quiz_title, ''))) < 2 then
    raise exception 'Quiz title must contain at least two characters';
  end if;

  if jsonb_typeof(question_rows) <> 'array'
     or jsonb_array_length(question_rows) = 0 then
    raise exception 'Add at least one question';
  end if;

  insert into public.quizzes (
    semester_id, title, description, source_label, source_url, created_by
  )
  values (
    target_semester,
    trim(quiz_title),
    nullif(trim(coalesce(quiz_description, '')), ''),
    nullif(trim(coalesce(quiz_source_label, '')), ''),
    nullif(trim(coalesce(quiz_source_url, '')), ''),
    auth.uid()
  )
  returning id into new_quiz_id;

  question_count := 0;
  for row_item in
    select value, ordinality
    from jsonb_array_elements(question_rows) with ordinality
  loop
    if length(trim(coalesce(row_item.value ->> 'prompt', ''))) = 0 then
      raise exception 'Question % is missing its prompt', row_item.ordinality;
    end if;
    if length(trim(coalesce(row_item.value ->> 'answer_key', ''))) = 0 then
      raise exception 'Question % is missing its answer key', row_item.ordinality;
    end if;

    insert into public.quiz_questions (
      quiz_id, position, chapter, prompt, max_points
    )
    values (
      new_quiz_id,
      row_item.ordinality,
      nullif(trim(coalesce(row_item.value ->> 'chapter', '')), ''),
      trim(row_item.value ->> 'prompt'),
      greatest(coalesce((row_item.value ->> 'max_points')::numeric, 1), 0.01)
    )
    returning id into new_question_id;

    insert into public.quiz_answer_keys (question_id, answer_key)
    values (
      new_question_id,
      trim(row_item.value ->> 'answer_key')
    );

    question_count := question_count + 1;
  end loop;

  if question_count = 0 then
    raise exception 'Add at least one question';
  end if;

  return new_quiz_id;
end;
$$;

create or replace function public.admin_set_quiz_status(
  target_quiz uuid,
  target_status text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_semester uuid;
begin
  select semester_id into target_semester
  from public.quizzes
  where id = target_quiz;

  if target_semester is null
     or not public.is_semester_admin(target_semester) then
    raise exception 'Admin permission required';
  end if;

  if target_status not in ('draft', 'ready', 'archived') then
    raise exception 'Invalid quiz status';
  end if;

  update public.quizzes
  set status = target_status, updated_at = now()
  where id = target_quiz;
end;
$$;

create or replace function public.admin_delete_draft_quiz(target_quiz uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_semester uuid;
  current_status text;
begin
  select semester_id, status into target_semester, current_status
  from public.quizzes
  where id = target_quiz;

  if target_semester is null
     or not public.is_semester_admin(target_semester) then
    raise exception 'Admin permission required';
  end if;

  if current_status <> 'draft' then
    raise exception 'Only draft quizzes can be deleted';
  end if;

  delete from public.quizzes where id = target_quiz;
end;
$$;

revoke all on function public.can_grade_group(uuid) from public;
revoke all on function public.can_view_quiz(uuid) from public;
revoke all on function public.can_grade_quiz(uuid) from public;
revoke all on function public.admin_create_quiz(uuid, text, text, text, text, jsonb) from public;
revoke all on function public.admin_set_quiz_status(uuid, text) from public;
revoke all on function public.admin_delete_draft_quiz(uuid) from public;

grant execute on function public.can_grade_group(uuid) to authenticated;
grant execute on function public.can_view_quiz(uuid) to authenticated;
grant execute on function public.can_grade_quiz(uuid) to authenticated;
grant execute on function public.admin_create_quiz(uuid, text, text, text, text, jsonb) to authenticated;
grant execute on function public.admin_set_quiz_status(uuid, text) to authenticated;
grant execute on function public.admin_delete_draft_quiz(uuid) to authenticated;


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

  if target_due_at is not null and target_due_at <= now() then
    raise exception 'Due time must be in the future';
  end if;

  insert into public.quiz_group_releases (
    quiz_id, group_id, released_by, released_at, due_at
  )
  values (
    target_quiz, target_group, auth.uid(), now(), target_due_at
  )
  on conflict (quiz_id, group_id)
  do update set
    released_by = auth.uid(),
    released_at = now(),
    due_at = excluded.due_at
  returning id into release_id;

  return release_id;
end;
$$;

create or replace function public.start_quiz_attempt(target_quiz uuid)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  selected_group uuid;
  selected_due_at timestamptz;
  attempt_id uuid;
begin
  if not public.is_approved_user() then
    raise exception 'Approved account required';
  end if;

  -- A submitted or graded attempt remains viewable even if an Admin later
  -- archives the quiz or the original release due date has passed.
  select id into attempt_id
  from public.quiz_attempts
  where quiz_id = target_quiz and user_id = auth.uid();

  if attempt_id is not null then
    return attempt_id;
  end if;

  select release.group_id, release.due_at
  into selected_group, selected_due_at
  from public.quiz_group_releases release
  join public.group_memberships group_member
    on group_member.group_id = release.group_id
   and group_member.user_id = auth.uid()
  join public.semester_memberships member_role
    on member_role.semester_id = group_member.semester_id
   and member_role.user_id = group_member.user_id
   and member_role.role in ('associate', 'analyst')
  join public.quizzes quiz on quiz.id = release.quiz_id
  where release.quiz_id = target_quiz
    and quiz.status = 'ready'
  limit 1;

  if selected_group is null then
    raise exception 'This quiz has not been released to your group';
  end if;

  if selected_due_at is not null and selected_due_at < now() then
    raise exception 'The due time for this quiz has passed';
  end if;

  insert into public.quiz_attempts (quiz_id, group_id, user_id)
  values (target_quiz, selected_group, auth.uid())
  returning id into attempt_id;

  insert into public.quiz_responses (attempt_id, question_id)
  select attempt_id, question.id
  from public.quiz_questions question
  where question.quiz_id = target_quiz
  order by question.position;

  return attempt_id;
end;
$$;

create or replace function public.save_quiz_response(
  target_attempt uuid,
  target_question uuid,
  answer_text text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not exists (
    select 1
    from public.quiz_attempts attempt
    join public.quiz_questions question
      on question.quiz_id = attempt.quiz_id
    where attempt.id = target_attempt
      and attempt.user_id = auth.uid()
      and attempt.status = 'in_progress'
      and question.id = target_question
  ) then
    raise exception 'This response cannot be edited';
  end if;

  insert into public.quiz_responses (
    attempt_id, question_id, response_text, updated_at
  )
  values (
    target_attempt, target_question, coalesce(answer_text, ''), now()
  )
  on conflict (attempt_id, question_id)
  do update set
    response_text = excluded.response_text,
    updated_at = now();
end;
$$;

create or replace function public.submit_quiz_attempt(target_attempt uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  missing_count integer;
  target_due_at timestamptz;
begin
  if not exists (
    select 1 from public.quiz_attempts
    where id = target_attempt
      and user_id = auth.uid()
      and status = 'in_progress'
  ) then
    raise exception 'This quiz cannot be submitted';
  end if;

  select release.due_at into target_due_at
  from public.quiz_attempts attempt
  join public.quiz_group_releases release
    on release.quiz_id = attempt.quiz_id
   and release.group_id = attempt.group_id
  where attempt.id = target_attempt;

  if target_due_at is not null and target_due_at < now() then
    raise exception 'The due time for this quiz has passed';
  end if;

  select count(*) into missing_count
  from public.quiz_responses response
  where response.attempt_id = target_attempt
    and length(trim(response.response_text)) = 0;

  if missing_count > 0 then
    raise exception 'Answer every question before submitting';
  end if;

  update public.quiz_attempts
  set status = 'submitted', submitted_at = now()
  where id = target_attempt;
end;
$$;

revoke all on function public.senior_release_quiz(uuid, uuid, timestamptz) from public;
revoke all on function public.start_quiz_attempt(uuid) from public;
revoke all on function public.save_quiz_response(uuid, uuid, text) from public;
revoke all on function public.submit_quiz_attempt(uuid) from public;

grant execute on function public.senior_release_quiz(uuid, uuid, timestamptz) to authenticated;
grant execute on function public.start_quiz_attempt(uuid) to authenticated;
grant execute on function public.save_quiz_response(uuid, uuid, text) to authenticated;
grant execute on function public.submit_quiz_attempt(uuid) to authenticated;
