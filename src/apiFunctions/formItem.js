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

export const fetchListItem = () => {
  const supabase = getSupabase();
  return supabase
    .from('ItemDetail')
    .select('*')
    .then((response) => response.data);
};

export const insertItem = (newItem) => {
  const supabase = getSupabase();

  return supabase.from('ItemDetail').insert(newItem);
};
