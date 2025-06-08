import { supabase } from './supabase';

export async function createAppointment(formData) {
  const { data, error } = await supabase.from('appointment').insert([formData]);
  if (error) throw error;
  return data;
}
