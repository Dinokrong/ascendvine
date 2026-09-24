# AscendVine account setup

This branch replaces the public shared passcode with individual verified Emory
accounts. New accounts remain pending until an Admin approves them.

## Role model

| Role | Account approval and organization | Quiz release | Quiz grading | Takes quizzes |
| --- | --- | --- | --- | --- |
| Admin | Yes | No | Administrative override only | No |
| Senior | No | Yes, for their group | Yes, for their group | No |
| Vice President | No | No | Yes, for their assigned group | No |
| Associate | No | No | No | Yes |
| Analyst | No | No | No | Yes |
| General | No | No | No | No |

The quiz workflow uses those same semester roles and Senior-led groups. Admins
upload a draft and its answer key, mark it ready, and Seniors push it to their
group. Associates and Analysts can then answer and submit it. Answer keys are
stored separately and are never sent to quiz takers. Vice Presidents and Seniors can grade
only the groups assigned to them; Admins retain an administrative override.

## 1. Create and configure Supabase

1. Create a Supabase project.
2. Open the SQL editor and run `supabase/schema.sql`.
3. Run `supabase/groups.sql` once after the base schema to add named groups
   and group-scoped permissions.
4. Run `supabase/admin-delete-account.sql` once to enable guarded permanent
   deletion from the Admin page.
5. Run `supabase/quizzes.sql` once to add quiz uploads, protected answer keys,
   group releases, attempts, and responses.
   - If `quizzes.sql` was installed before the grading phase, also run
     `supabase/quiz-grading.sql` once to add grading and quiz standings.
   - Existing projects can run `supabase/quiz-unpublish.sql` once to let Seniors
     remove a quiz release from their group. Existing attempts remain available,
     but members who have not started can no longer begin it.
6. Run `supabase/admin-protection.sql` once. It keeps
   `ashley.hsieh@emory.edu` approved, undeletable, and an Admin of every
   semester, including semesters created later.
7. Run `supabase/no-quiz-deadlines.sql` once. Released quizzes stay open until
   submitted.
8. Run `supabase/practice-time.sql` once to add Question Bank time tracking and
   the practice leaderboard.
   - Then run `supabase/leaderboard-groups-streaks.sql` once to show each
     member's group on both leaderboards and study streaks on the practice one.
   - Run `supabase/graded-answer-review.sql` once so members can compare
     their answers with the answer key after their quiz is graded.
   - Run `supabase/general-members.sql` once to add the General role (see
     below).
   - Run `supabase/quiz-away-alerts.sql` once to record when members leave the
     quiz page mid-quiz, shown to their Senior and Vice President when grading.
9. Under Authentication, enable email/password accounts.
10. Require email confirmation.
11. Set the production Site URL to the deployed AscendVine URL.
12. Add exact redirect URLs for:
   - `/profile.html`
   - `/reset-password.html`
   - the corresponding local-development URLs
13. Configure custom SMTP before inviting users. Supabase's built-in mailer is for
   testing only and is currently limited to two Auth emails per hour per project.

## 2. Connect the browser client

Edit `js/supabase-config.js` and replace:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

The anonymous browser key is designed to be public. Database Row Level Security
is what limits it. Never place a Supabase secret/service-role key or SMTP
credential in this repository.

## 3. Bootstrap the first Admin

The first Admin is intentionally a manual bootstrap because no Admin exists to
approve them yet.

1. Register through `index.html` with an `@emory.edu` address.
2. Verify the email.
3. In the Supabase SQL editor, run the following with the real email and semester
   dates:

```sql
update public.profiles
set approval_status = 'approved',
    approved_at = now()
where email = 'first-admin@emory.edu';

insert into public.semesters (name, starts_on, ends_on, is_active)
values ('Fall 2026', '2026-08-24', '2026-12-18', true)
on conflict (name) do update set is_active = excluded.is_active;

insert into public.semester_memberships (semester_id, user_id, role)
select semester.id, profile.id, 'admin'
from public.semesters semester
join public.profiles profile on profile.email = 'first-admin@emory.edu'
where semester.name = 'Fall 2026'
on conflict (semester_id, user_id) do update set role = 'admin';
```

After this, that user can open `admin.html` to approve accounts, assign roles,
create named Senior-led groups, and place Vice Presidents, Associates, and Analysts in them.

## Approval flow

1. User registers with an exact `@emory.edu` address.
2. User verifies ownership through the emailed link.
3. The profile remains `pending`.
4. An Admin approves or rejects the request.
5. On approval, the Admin assigns one semester role.
6. An Admin creates Senior-led groups.
7. Vice Presidents, Associates, and Analysts can then be assigned to one group per semester.

Users cannot edit approval status, role, semester membership, or group
assignment. All changes are checked in the database and role/approval changes
are retained in audit tables.


## Permanent account deletion

Admins can permanently delete an account from either the pending-request list or
the semester roster. The browser requires the Admin to type `DELETE`, and the
database prevents self-deletion, deletion of a semester's last Admin, and
deletion of a Senior who still leads a group. The operation removes the
Supabase Auth user and cascades through the profile, roles, and group membership.
A minimal deletion audit record retains the deleted user ID, email, name,
deleting Admin, and timestamp.

## Weekly quiz workflow

1. An Admin opens `quiz-admin.html`, pastes the numbered Questions tab and the
   matching Answer Key tab, then validates the pairs.
2. The Admin creates a draft and marks it ready after reviewing the preview.
3. A Senior opens `quiz-release.html`, selects their group, then pushes the
   quiz. Quizzes have no due date.
4. Associates and Analysts open `quizzes.html`, choose the released quiz, and
   answer it in `quiz.html`. Answers save automatically and lock on submission.
5. The submitted records are visible only to the quiz taker, their group's
   Senior and Vice President, and semester Admins.
6. Seniors, Vice Presidents, and Admins open `grading.html`, review the member response
   beside the protected answer key, award points, and publish feedback.
7. `leaderboard.html` has two tabs. Quizzes totals graded quiz points across
   the semester. Practice totals active Question Bank time: the page reports
   every 30 seconds while it is visible and in use, and the database credits at
   most 60 seconds per report, so idle or hidden tabs do not count.

The bulk parser recognizes chapter headings plus numbered questions such as
`1. Question text`. It pairs them, in order, with paragraphs beginning
`Answer:`. The question and answer counts must match before upload.

## General members

General is for people outside the group who still get study access. General
members see only Home, the Question Bank, the Study Guide, and their Profile.
They are never placed in groups, do not take quizzes, and cannot view either
leaderboard; the site sends them to Home if they open those pages, and the
database refuses leaderboard data for them. Admins choose General when approving
an account or changing a role.
