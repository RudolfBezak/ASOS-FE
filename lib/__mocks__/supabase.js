import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('http://localhost', 'fake-anon-key');
