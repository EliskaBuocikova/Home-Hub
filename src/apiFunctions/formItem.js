import { getSupabase } from './supabase.js';

export const fetchItem = (id) => {
  const supabase = getSupabase();

  return supabase
    .from('items')
    .select('*')
    .eq('id', id)
    .then((response) => response.data[0]);
};
export const deleteItem = (id) => {
  const supabase = getSupabase();
  return supabase.from('items').delete().eq('id', id);
};

export const updateItem = (id, item) => {
  const supabase = getSupabase();
  return supabase.from('items').update(item).eq('id', id);
};

export const fetchCategories = () => {
  const supabase = getSupabase();

  return supabase
    .from('Categories')
    .select('*')
    .then((response) => response.data);
};
export const fetchCategory = (id) => {
  const supabase = getSupabase();

  return supabase
    .from('Categories')
    .select('*, items(*)')
    .eq('id', id)
    .then((response) => response.data[0]);
};

export const fetchReminders = () => {
  const supabase = getSupabase();

  return supabase
    .from('reminders')
    .select('*, items(*)')
    .eq('checked', false)
    .then((response) => response.data);
};

export const fetchListItem = () => {
  const supabase = getSupabase();
  return supabase
    .from('items')
    .select('*')
    .then((response) => response.data);
};

export const insertItem = (newItem) => {
  const supabase = getSupabase();

  return supabase.from('items').insert(newItem);
};
