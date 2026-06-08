import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Evitamos que falle la compilación o el inicio del servidor si las variables no están definidas
// usando un formato de URL válido como fallback temporal y mostrando una advertencia.
const isConfigured = supabaseUrl && supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseUrl.startsWith('http');

const safeUrl = isConfigured 
  ? supabaseUrl! 
  : 'https://placeholder-project-id.supabase.co';

const safeKey = supabaseAnonKey && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY' 
  ? supabaseAnonKey 
  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';

if (!isConfigured) {
  console.warn(
    '\x1b[33m%s\x1b[0m',
    ' [Supabase Warning]: NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY no están configurados correctamente en .env.local. Usando cliente de simulación para evitar caídas del servidor.'
  );
}

export const supabase = createClient(safeUrl, safeKey);