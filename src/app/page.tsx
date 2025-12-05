'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { cohorts } from '@/data/cohorts'
import { getStatusColor, slugify, generateEnrollmentMessage } from '@/lib/utils'
import { useWallet } from '@/lib/wallet-context'
import { ConnectWalletButton } from '@/components/ConnectWalletButton'
import { useToast } from '@/lib/toast'

export default function Home() {
  const { address, isConnected } = useWallet()
  const { show } = useToast()
  const [enrolling, setEnrolling] = useState<string | null>(null)
  const [enrolled, setEnrolled] = useState<Set<string>>(new Set())
  const activeCohorts = useMemo(() => cohorts.filter((c) => c.status === 'active'), [])

  const handleEnroll = async (title: string) => {
    try {
      if (!isConnected) {
        show({ type: 'info', message: 'Please connect your wallet before enrolling.' })
        return
      }
      setEnrolling(title)
      const message = generateEnrollmentMessage(title, address!)
      const signature: string = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, address!],
      })
      const res = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: address, cohortId: slugify(title), message, signature }),
      })
      const json = await res.json()
      if (json?.success) {
        show({ type: 'success', message: 'Enrollment successful!' })
        setEnrolled((prev) => new Set([...Array.from(prev), title]))
      } else {
        show({ type: 'error', message: json?.error ?? 'Enrollment failed. Please try again.' })
      }
    } finally {
      setEnrolling(null)
    }
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <header className="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-teal-400">BaseLaunch</h1>
          <div className="flex items-center gap-6">
            <Link href="/cohorts" className="text-slate-300 hover:text-white transition">
              Cohorts
            </Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition">
              Dashboard
            </Link>
            <ConnectWalletButton />
          </div>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-6xl font-bold mb-6 text-white">Master Web3 Development</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl">
          Join cohort-based courses on Base network. Learn from experts, build with peers, ship to production.
        </p>
        <Link
          href="/cohorts"
          className="inline-block bg-teal-600 hover:bg-teal-700 px-8 py-4 rounded-lg font-semibold transition"
        >
          Explore Cohorts →
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-16 border-t border-slate-700">
        <h3 className="text-3xl font-bold mb-8">Active Cohorts Now</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCohorts.map((cohort) => (
            <div
              key={cohort.title}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-teal-500 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold flex-1">{cohort.title}</h4>
                <span className={'text-xs px-2 py-1 rounded whitespace-nowrap ml-2 ' + getStatusColor(cohort.status)}>
                  {cohort.status}
                </span>
              </div>
              <p className="text-slate-300 mb-4 text-sm">{cohort.description}</p>
              <div className="flex justify-between items-center text-sm text-slate-400 pt-4 border-t border-slate-700">
                <span>Week {cohort.week}</span>
                <span>{cohort.students} students</span>
              </div>
              <button
                className="w-full mt-4 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-700 py-2 rounded text-white font-semibold transition"
                disabled={!isConnected || enrolling === cohort.title}
                onClick={() => handleEnroll(cohort.title)}
              >
                {!isConnected
                  ? 'Connect wallet to enroll'
                  : enrolled.has(cohort.title)
                  ? 'Enrolled'
                  : enrolling === cohort.title
                  ? 'Enrolling...'
                  : 'Enroll Now'}
              </button>
            </div>
          ))}
        </div>
      </section>

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
            <p className="text-4xl font-bold text-teal-400">
              {Math.round(cohorts.reduce((sum, c) => sum + c.week, 0) / cohorts.length)}
            </p>
            <p className="text-slate-400 mt-2">Average Weeks</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-700 mt-24 py-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-8 text-center text-slate-400 text-sm">
          <p>BaseLaunch © 2024. Building Web3 developers on Base.</p>
        </div>
      </footer>
    </main>
  )
}
