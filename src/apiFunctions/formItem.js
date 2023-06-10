import { getSupabase } from './supabase.js';

export const getItemDetails = () => {
  const supabase = getSupabase();

  return supabase.from('ItemDetail').select('*');
};

export const fetchCategories = () => {
  const supabase = getSupabase();

  return supabase
    .from('Categories')
    .select('*')
    .then((response) => response.data);
};
