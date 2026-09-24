-- Let members see the answer key for a quiz once their own attempt is graded,
-- so they can compare their answers with the correct ones. Before grading
-- (while taking it or waiting for a grade) answer keys stay hidden.
-- Apply after supabase/quizzes.sql.

create policy "Members can view answer keys after their quiz is graded"
on public.quiz_answer_keys for select
to authenticated
using (
  public.is_approved_user()
  and exists (
    select 1
    from public.quiz_questions question
    join public.quiz_attempts attempt on attempt.quiz_id = question.quiz_id
    where question.id = quiz_answer_keys.question_id
      and attempt.user_id = auth.uid()
      and attempt.status = 'graded'
  )
);
