import { getSupabase } from './supabase.js';

export const getItemDetails = () => {
  const supabase = getSupabase();

  return supabase.from('ItemDetail').select('*');
};

