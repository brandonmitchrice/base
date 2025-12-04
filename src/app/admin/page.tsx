'use client'

import { useState } from 'react'
import { StatCard } from '../../components/StatCard'
import { StudentsList } from '../../components/StudentsList'
import { CohortStats } from '../../components/CohortStats'

export default function AdminPage() {
  const [stats] = useState({
    totalEnrollments: 24,
    avgProgress: 65,
    completedCount: 8,
    completionRate: 33,
    totalStudents: 12,
  })

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-slate-300">Monitor cohorts, students, and enrollments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total Students"
            value={stats.totalStudents}
            icon="??"
            trend="Active users"
          />
          <StatCard
            label="Total Enrollments"
            value={stats.totalEnrollments}
            icon="??"
            trend="Across all cohorts"
          />
          <StatCard
            label="Avg Progress"
            value={stats.avgProgress + '%'}
            icon="??"
            trend="Overall completion"
          />
          <StatCard
            label="Completion Rate"
            value={stats.completionRate + '%'}
            icon="?"
            trend={stats.completedCount + ' completed'}
          />
        </div>

        <div className="space-y-8">
          <CohortStats />
          <StudentsList />
        </div>
      </div>
    </main>
  )
}
