
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dxgkhustbdhxldgvsbdb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4Z2todXN0YmRoeGxkZ3ZzYmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMTAxMTcsImV4cCI6MjA1NjU4NjExN30.JLTo-GPQccG5iaPvwOog7bZowP-6jomDj4o5l2xnBN0";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
