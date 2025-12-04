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

export default function Home() {
  const activeCohorts = cohorts.filter(c => c.status === 'active')
  
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-teal-400">BaseLaunch</h1>
          <div className="space-x-8">
            <Link href="/cohorts" className="text-slate-300 hover:text-white transition">Cohorts</Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition">Dashboard</Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-6xl font-bold mb-6 text-white">Master Web3 Development</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl">Join cohort-based courses on Base network. Learn from experts, build with peers, ship to production.</p>
        <Link href="/cohorts" className="inline-block bg-teal-600 hover:bg-teal-700 px-8 py-4 rounded-lg font-semibold transition">
          Explore Cohorts →
        </Link>
      </section>

      {/* Featured Active Cohorts */}
      <section className="max-w-6xl mx-auto px-8 py-16 border-t border-slate-700">
        <h3 className="text-3xl font-bold mb-8">Active Cohorts Now</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCohorts.map((cohort) => (
            <div key={cohort.title} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-teal-500 transition">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold flex-1">{cohort.title}</h4>
                <span className={	ext-xs px-2 py-1 rounded whitespace-nowrap ml-2 \}>
                  {cohort.status}
                </span>
              </div>
              <p className="text-slate-300 mb-4 text-sm">{cohort.description}</p>
              <div className="flex justify-between items-center text-sm text-slate-400 pt-4 border-t border-slate-700">
                <span>Week {cohort.week}</span>
                <span>{cohort.students} students</span>
              </div>
              <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 py-2 rounded text-white font-semibold transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-8 py-16 border-t border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-teal-400">{cohorts.length}</p>
            <p className="text-slate-400 mt-2">Cohorts Available</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-teal-400">{cohorts.reduce((sum, c) => sum + c.students, 0)}</p>
            <p className="text-slate-400 mt-2">Active Students</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-teal-400">\</p>
            <p className="text-slate-400 mt-2">Average Week</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-24 py-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-8 text-center text-slate-400 text-sm">
          <p>BaseLaunch © 2024. Building Web3 developers on Base.</p>
        </div>
      </footer>
    </main>
  )
}
