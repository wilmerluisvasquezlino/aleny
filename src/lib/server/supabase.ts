
import {env} from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://immqdpbltbabkqakspgx.supabase.co'
const supabaseKey = env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)