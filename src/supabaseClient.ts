import { createClient } from "@supabase/supabase-js";

// Cargado automáticamente para enlazar con la base de datos de Suba (Supabase)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://ejemplo-your-supabase.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);