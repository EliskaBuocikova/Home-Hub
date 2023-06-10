import { getSupabase } from './supabase.js';

export const fetchItem = () => {
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

export const insertItem = () => {
  const supabase = getSupabase();

  return supabase.from('ItemDetail').insert({ id: 1, name: '' });
};
