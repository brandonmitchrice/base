'use client'

import Link from 'next/link'
import { cohorts } from '@/data/cohorts'

function getStatusColor(status: string) {
  switch(status) {
    case 'active': return 'bg-green-900/30 text-green-300'
    case 'upcoming': return 'bg-yellow-900/30 text-yellow-300'
    case 'completed': return 'bg-slate-700/30 text-slate-300'
    default: return 'bg-slate-700/30 text-slate-300'
  }
}

export default function CohortsPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-teal-400">BaseLaunch</h1>
          <div className="space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition">Dashboard</Link>
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-2">All Cohorts</h1>
        <p className="text-slate-400 mb-12">{cohorts.length} cohorts available</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cohorts.map((cohort) => (
            <div key={cohort.title} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-teal-500 transition">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold flex-1">{cohort.title}</h2>
                <span className={	ext-xs px-2 py-1 rounded whitespace-nowrap ml-2 \}>
                  {cohort.status}
                </span>
              </div>
              <p className="text-slate-300 mb-6 text-sm">{cohort.description}</p>
              <div className="space-y-2 text-sm text-slate-400 mb-6 pb-6 border-b border-slate-700">
                <p><span className="text-slate-500">Week:</span> {cohort.week}</p>
                <p><span className="text-slate-500">Students:</span> {cohort.students}</p>
                <p><span className="text-slate-500">Status:</span> {cohort.status}</p>
              </div>
              <button className="w-full bg-teal-600 hover:bg-teal-700 py-2 rounded text-white font-semibold transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
