import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uzvkkculocyjknnvdmyq.supabase.co';

export const getSupabase = () => {
  return createClient(
    SUPABASE_URL,
    localStorage.getItem(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dmtrY3Vsb2N5amtubnZkbXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjM2NjUsImV4cCI6MjAwMTg5OTY2NX0.iV5H0mmUiPQjfjRvfdnO_jPq9PlgccNjYdWfAIuhXIU',
    ),
  );
};
