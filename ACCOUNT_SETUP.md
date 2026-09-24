# AscendVine account setup

This branch replaces the public shared passcode with individual verified Emory
accounts. New accounts remain pending until an Admin approves them.

## Role model

| Role | Account approval and organization | Quiz release | Quiz grading | Takes quizzes |
| --- | --- | --- | --- | --- |
| Admin | Yes | No | Administrative override only | No |
| Senior | No | Yes, for their group | Yes, for their group | No |
| VP | No | No | Yes, for their assigned group | No |
| Associate | No | No | No | Yes |
| Analyst | No | No | No | Yes |

The quiz workflow uses those same semester roles and Senior-led groups. Admins
upload a draft and its answer key, mark it ready, and Seniors push it to their
group. Associates and Analysts can then answer and submit it. Answer keys are
stored separately and are never sent to quiz takers. VPs and Seniors can grade
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
6. Under Authentication, enable email/password accounts.
7. Require email confirmation.
8. Set the production Site URL to the deployed AscendVine URL.
9. Add exact redirect URLs for:
   - `/profile.html`
   - `/reset-password.html`
   - the corresponding local-development URLs
10. Configure custom SMTP before inviting users. Supabase's built-in mailer is for
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
create named Senior-led groups, and place VPs, Associates, and Analysts in them.

## Approval flow

1. User registers with an exact `@emory.edu` address.
2. User verifies ownership through the emailed link.
3. The profile remains `pending`.
4. An Admin approves or rejects the request.
5. On approval, the Admin assigns one semester role.
6. An Admin creates Senior-led groups.
7. VPs, Associates, and Analysts can then be assigned to one group per semester.

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
3. A Senior opens `quiz-release.html`, selects their group and optional due time,
   then pushes the quiz.
4. Associates and Analysts open `quizzes.html`, choose the released quiz, and
   answer it in `quiz.html`. Answers save automatically and lock on submission.
5. The submitted records are visible only to the quiz taker, their group's
   Senior and VP, and semester Admins.
6. Seniors, VPs, and Admins open `grading.html`, review the member response
   beside the protected answer key, award points, and publish feedback.
7. `quiz-leaderboard.html` totals graded quiz points across the semester. This
   is separate from the future Question Bank practice leaderboard.

The bulk parser recognizes chapter headings plus numbered questions such as
`1. Question text`. It pairs them, in order, with paragraphs beginning
`Answer:`. The question and answer counts must match before upload.
