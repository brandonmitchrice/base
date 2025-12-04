import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getOrCreateStudent(walletAddress: string) {
  try {
    // Check if student exists
    const { data: existing, error: fetchError } = await supabase
      .from('students')
      .select('*')
      .eq('wallet_address', walletAddress)
      .single()

    if (existing) {
      return existing
    }

    // Create new student
    const { data: newStudent, error: createError } = await supabase
      .from('students')
      .insert([{ wallet_address: walletAddress }])
      .select()
      .single()

    if (createError) throw createError
    return newStudent
  } catch (error) {
    console.error('Error with student:', error)
    throw error
  }
}
