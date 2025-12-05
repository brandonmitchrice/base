// API Response types
export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
}

// Cohort types
export type CohortWithStats = {
  id: string
  title: string
  description: string
  week: number
  status: 'active' | 'upcoming' | 'completed'
  students: number
  startDate: string
  endDate: string
  topics: string[]
}

// Student types
export type StudentProfile = {
  id: string
  email: string
  name: string
  walletAddress?: string
  avatar?: string
  joinedAt: string
  completedCohorts: string[]
  nftBadges?: string[]
}

// Enrollment types
export type EnrollmentData = {
  cohortId: string
  email: string
  name: string
  walletAddress?: string
}
