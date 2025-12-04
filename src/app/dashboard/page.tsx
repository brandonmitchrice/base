'use client'

import { useState } from 'react'

export default function DashboardPage() {
  const [enrollments] = useState([
    {
      id: '1',
      cohortTitle: 'Web3 Basics',
      progress: 75,
    },
  ])

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">My Enrollments</h2>
          <p className="text-slate-300">You have {enrollments.length} enrollment(s)</p>
        </div>
      </div>
    </main>
  )
}
