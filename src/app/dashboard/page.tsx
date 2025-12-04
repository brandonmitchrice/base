'use client'

import Link from 'next/link'
import { cohorts } from '@/data/cohorts'
import { CohortStats } from '@/components/CohortStats'

export default function Dashboard() {
  const stats = [
    { 
      label: 'Total Cohorts', 
      value: cohorts.length,
      subtext: 'All courses'
    },
    { 
      label: 'Active Students', 
      value: cohorts.reduce((sum, c) => sum + c.students, 0),
      subtext: 'Enrolled globally'
    },
    { 
      label: 'Avg Course Length', 
      value: Math.round(cohorts.reduce((sum, c) => sum + c.week, 0) / cohorts.length),
      subtext: 'Weeks per course'
    },
  ]

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-teal-400">BaseLaunch</h1>
          <div className="space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link href="/cohorts" className="text-slate-300 hover:text-white transition">Cohorts</Link>
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">Analytics Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <p className="text-4xl font-bold text-teal-400 mt-4">{stat.value}</p>
              <p className="text-slate-500 text-sm mt-2">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Cohort Stats Component */}
        <CohortStats />
      </div>
    </main>
  )
}
