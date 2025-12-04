export interface Student {
  id: string
  email: string
  name: string
  cohort_id: string
  enrolled_at: string
  progress: number
}

export interface Enrollment {
  id: string
  student_id: string
  cohort_id: string
  enrolled_at: string
  completed_at: string | null
  progress: number
}
