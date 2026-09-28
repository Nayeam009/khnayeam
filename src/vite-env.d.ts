/// <reference types="vite/client" />

// Typed environment variables (interfaces merge with the ones declared by vite/client).
// Values are supplied by .env locally and by the Vercel project's Environment Variables in production.
// src/integrations/supabase/client.ts falls back to committed literals when these are absent.
interface ImportMetaEnv {
  readonly VITE_SUPABASE_PROJECT_ID: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
