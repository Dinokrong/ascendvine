// Public browser configuration. These values are intentionally publishable.
// Database access is protected by Supabase Row Level Security.
export const SUPABASE_URL = 'https://tkzxbjbsdqucpavvcdnb.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_W3PVU_r11-1dV02Q-Dq82w_lhL7Y6pv';

export const isSupabaseConfigured =
  SUPABASE_URL.startsWith('https://') &&
  SUPABASE_ANON_KEY.startsWith('sb_publishable_');
