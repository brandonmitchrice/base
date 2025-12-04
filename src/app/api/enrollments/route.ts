import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { studentId, cohortId } = await request.json()

    const { data, error } = await supabase
      .from('enrollments')
      .insert([
        {
          student_id: studentId,
          cohort_id: cohortId,
        },
      ])
      .select()

    if (error) throw error

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Enrollment error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to enroll' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const studentId = request.nextUrl.searchParams.get('studentId')

    const { data, error } = await supabase
      .from('enrollments')
      .select('*, cohorts(title, description)')
      .eq('student_id', studentId)

    if (error) throw error

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Fetch enrollments error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch enrollments' },
      { status: 500 }
    )
  }
}
