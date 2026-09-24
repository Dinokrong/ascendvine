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

Quiz tables and submission screens will be added in the next implementation
phase. The account schema plus `supabase/groups.sql` establish the roles and
Senior-led groups those rules will use. VPs, Associates, and Analysts are group
members; Seniors lead groups.

## 1. Create and configure Supabase

1. Create a Supabase project.
2. Open the SQL editor and run `supabase/schema.sql`.
3. Run `supabase/groups.sql` once after the base schema to add named groups
   and group-scoped permissions.
4. Under Authentication, enable email/password accounts.
5. Require email confirmation.
6. Set the production Site URL to the deployed AscendVine URL.
7. Add exact redirect URLs for:
   - `/profile.html`
   - `/reset-password.html`
   - the corresponding local-development URLs
8. Configure custom SMTP before inviting users. Supabase's built-in mailer is for
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
