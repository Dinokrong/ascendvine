// Public browser configuration. These values are safe to expose when Row Level Security is enabled.
// Replace both placeholders after creating the Supabase project.
export const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
export const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

export const isSupabaseConfigured =
  !SUPABASE_URL.includes('YOUR_PROJECT') &&
  !SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_ANON_KEY');
