import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rdroeodqgztmocybbwdg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcm9lb2RxZ3p0bW9jeWJid2RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNzA1MjYsImV4cCI6MjA2NDk0NjUyNn0.RvLvSuTvwIZYRmtC9DxLdbD84W3esoc5EkaiXRV3HAg';

export const supabase = createClient(supabaseUrl, supabaseKey);
