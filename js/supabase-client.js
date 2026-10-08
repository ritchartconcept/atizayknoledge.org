// Remplace ces deux valeurs par les tiennes (Settings → API dans Supabase)
const SUPABASE_URL = "https://wkuyjsbfdtfwgczjlaeg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_in-62UcTVHYAMCcZmXEDAg_J0KBHPqT";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);