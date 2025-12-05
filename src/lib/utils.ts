import { CohortStatus } from '../data/cohorts'

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getStatusColor(status: CohortStatus): string {
  const colors: Record<CohortStatus, string> = {
    upcoming: 'bg-yellow-900/30 text-yellow-300',
    active: 'bg-green-900/30 text-green-300',
    completed: 'bg-slate-700/30 text-slate-300',
  }
  return colors[status]
}

export function generateEnrollmentMessage(cohortTitle: string, studentAddress: string): string {
  const timestamp = new Date().toISOString()
  return `Enroll in BaseLaunch: ${cohortTitle}\nAddress: ${studentAddress}\nTime: ${timestamp}`
}
