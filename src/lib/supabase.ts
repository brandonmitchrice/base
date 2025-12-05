import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for your database
export type Student = {
  id: string
  email: string
  name: string
  cohort_id: string
  enrolled_at: string
  completed_at: string | null
  wallet_address: string | null
}

export type Enrollment = {
  id: string
  student_id: string
  cohort_id: string
  status: 'active' | 'completed' | 'dropped'
  enrolled_at: string
}
