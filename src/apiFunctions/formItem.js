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

export const checkReminder = (id) => {
  const supabase = getSupabase();
  console.log('to jsem já', id);
  return supabase.from('reminders').update({ checked: true }).eq('id', id);
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

export const fetchReminders = (today) => {
  const supabase = getSupabase();
  const inWeek = today.add(1, 'week');

  return supabase
    .from('reminders')
    .select('*, items!inner(*)')
    .eq('checked', false)
    .lt('items.dueDate', inWeek.toISOString())
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

  return supabase
    .from('items')
    .insert(newItem)
    .select()
    .then((response) => {
      const item = response.data[0];
      return supabase
        .from('reminders')
        .insert({
          checked: false,
          itemId: item.id,
        })
        .then(() => undefined);
    });
  // supabase.from('reminders')});
};
