import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  isSupabaseConfigured
} from './supabase-config.js';

export const supabase = isSupabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

export function isEmoryEmail(email) {
  return /^[^@\s]+@emory\.edu$/i.test(String(email || '').trim());
}

export function configurationError() {
  return 'Account setup is not connected yet. Add the Supabase project URL and anonymous key in js/supabase-config.js.';
}

export async function signUp({ email, password, firstName, lastName, graduationYear }) {
  const normalizedEmail = String(email || '').trim().toLowerCase();

  if (!isSupabaseConfigured || !supabase) throw new Error(configurationError());
  if (!isEmoryEmail(normalizedEmail)) throw new Error('Use your @emory.edu email address.');
  if (String(password || '').length < 10) throw new Error('Use a password with at least 10 characters.');

  const emailRedirectTo = new URL('profile.html', window.location.href).href;
  const { data, error } = await supabase.auth.signUp({
    email: normalizedEmail,
    password,
    options: {
      emailRedirectTo,
      data: {
        first_name: String(firstName || '').trim(),
        last_name: String(lastName || '').trim(),
        graduation_year: graduationYear ? Number(graduationYear) : null
      }
    }
  });

  if (error) throw error;
  return data;
}

export async function signIn(email, password) {
  if (!isSupabaseConfigured || !supabase) throw new Error(configurationError());

  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!isEmoryEmail(normalizedEmail)) throw new Error('Use your @emory.edu email address.');

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password
  });

  if (error) throw error;
  if (!data.user?.email_confirmed_at) {
    await supabase.auth.signOut();
    throw new Error('Verify your Emory email before signing in.');
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('approval_status')
    .eq('id', data.user.id)
    .single();

  if (profileError) {
    await supabase.auth.signOut();
    throw profileError;
  }

  if (profile.approval_status !== 'approved') {
    await supabase.auth.signOut();
    const message = profile.approval_status === 'rejected'
      ? 'This account request was not approved. Contact an administrator if you believe this is an error.'
      : 'Your Emory email is verified. An administrator must approve your account before you can enter.';
    throw new Error(message);
  }

  return data;
}

export async function sendPasswordReset(email) {
  if (!isSupabaseConfigured || !supabase) throw new Error(configurationError());

  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!isEmoryEmail(normalizedEmail)) throw new Error('Use your @emory.edu email address.');

  const redirectTo = new URL('reset-password.html', window.location.href).href;
  const { error } = await supabase.auth.resetPasswordForEmail(normalizedEmail, { redirectTo });
  if (error) throw error;
}

export async function signOut() {
  if (supabase) await supabase.auth.signOut();
  window.location.replace('index.html');
}

export async function getVerifiedUser() {
  if (!isSupabaseConfigured || !supabase) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;
  if (!data.user.email_confirmed_at || !isEmoryEmail(data.user.email)) return null;
  return data.user;
}

export async function requireApprovedUser() {
  const user = await getVerifiedUser();
  if (!user) {
    const destination = isSupabaseConfigured ? 'index.html' : 'index.html?setup=1';
    window.location.replace(destination);
    return null;
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('approval_status')
    .eq('id', user.id)
    .single();

  if (error || profile?.approval_status !== 'approved') {
    await supabase.auth.signOut();
    window.location.replace('index.html?approval=pending');
    return null;
  }

  return user;
}

export async function getMyProfile() {
  const user = await requireApprovedUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('id, email, first_name, last_name, graduation_year, major, bio, avatar_url')
    .eq('id', user.id)
    .single();

  if (error) throw error;
  return data;
}

export async function updateMyProfile(values) {
  const user = await requireApprovedUser();
  if (!user) return null;

  const allowed = {
    first_name: String(values.first_name || '').trim(),
    last_name: String(values.last_name || '').trim(),
    graduation_year: values.graduation_year ? Number(values.graduation_year) : null,
    major: String(values.major || '').trim() || null,
    bio: String(values.bio || '').trim() || null,
    updated_at: new Date().toISOString()
  };

  const { data, error } = await supabase
    .from('profiles')
    .update(allowed)
    .eq('id', user.id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getMyMemberships() {
  const user = await requireApprovedUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from('semester_memberships')
    .select('role, semesters(name, starts_on, ends_on)')
    .eq('user_id', user.id);

  if (error) throw error;
  return data || [];
}
