'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cohorts } from '@/data/cohorts'
import { getStatusColor, slugify, generateEnrollmentMessage } from '@/lib/utils'
import { useWallet } from '@/lib/wallet-context'
import { ConnectWalletButton } from '@/components/ConnectWalletButton'
import { useToast } from '@/lib/toast'

export default function CohortsPage() {
  const { address, isConnected } = useWallet()
  const { show } = useToast()
  const [enrolling, setEnrolling] = useState<string | null>(null)
  const [enrolled, setEnrolled] = useState<Set<string>>(new Set())

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
            <Link href="/" className="text-slate-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition">
              Dashboard
            </Link>
            <ConnectWalletButton />
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-2">All Cohorts</h1>
        <p className="text-slate-400 mb-12">{cohorts.length} cohorts available</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cohorts.map((cohort) => (
            <div
              key={cohort.title}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-teal-500 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold flex-1">{cohort.title}</h2>
                <span className={'text-xs px-2 py-1 rounded whitespace-nowrap ml-2 ' + getStatusColor(cohort.status)}>
                  {cohort.status}
                </span>
              </div>
              <p className="text-slate-300 mb-6 text-sm">{cohort.description}</p>
              <div className="space-y-2 text-sm text-slate-400 mb-6 pb-6 border-b border-slate-700">
                <p>
                  <span className="text-slate-500">Week:</span> {cohort.week}
                </p>
                <p>
                  <span className="text-slate-500">Students:</span> {cohort.students}
                </p>
                <p>
                  <span className="text-slate-500">Status:</span> {cohort.status}
                </p>
              </div>
              <button
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-slate-700 py-2 rounded text-white font-semibold transition"
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
      </div>
    </main>
  )
}
