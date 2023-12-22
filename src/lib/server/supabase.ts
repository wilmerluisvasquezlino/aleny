
import {env} from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hddahffpincuomusbpue.supabase.co'
const supabaseKey = env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)