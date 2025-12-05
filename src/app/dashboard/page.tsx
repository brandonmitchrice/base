'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { cohorts } from '@/data/cohorts'
import { CohortStats } from '@/components/CohortStats'
import { ConnectWalletButton } from '@/components/ConnectWalletButton'
import { useWallet } from '@/lib/wallet-context'

export default function Dashboard() {
  const { address, isConnected } = useWallet()
  const [enrollments, setEnrollments] = useState<any[] | null>(null)
  const [loadingEnrollments, setLoadingEnrollments] = useState(false)

  useEffect(() => {
    const load = async () => {
      if (!isConnected || !address) return
      setLoadingEnrollments(true)
      try {
        const res = await fetch(`/api/enrollments?studentId=${encodeURIComponent(address)}`)
        const json = await res.json()
        if (json?.success) setEnrollments(json.data)
        else setEnrollments([])
      } catch {
        setEnrollments([])
      } finally {
        setLoadingEnrollments(false)
      }
    }
    load()
  }, [address, isConnected])
  const stats = useMemo(() => ([
    { label: 'Total Cohorts', value: cohorts.length, subtext: 'All courses' },
    { label: 'Active Students', value: cohorts.reduce((sum, c) => sum + c.students, 0), subtext: 'Enrolled globally' },
    { label: 'Avg Course Length', value: Math.round(cohorts.reduce((sum, c) => sum + c.week, 0) / cohorts.length), subtext: 'Weeks per course' },
  ]), [])

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 z-50 bg-slate-900/95 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-teal-400">BaseLaunch</h1>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link href="/cohorts" className="text-slate-300 hover:text-white transition">Cohorts</Link>
            <ConnectWalletButton />
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

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">My Enrollments</h2>
          {!isConnected ? (
            <p className="text-slate-400">Connect your wallet to view enrollments.</p>
          ) : loadingEnrollments ? (
            <p className="text-slate-400">Loading...</p>
          ) : !enrollments || enrollments.length === 0 ? (
            <p className="text-slate-400">No enrollments found.</p>
          ) : (
            <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700 bg-slate-900/50">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Cohort</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Enrolled</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrollments.map((row) => (
                      <tr key={row.id} className="border-b border-slate-700">
                        <td className="px-6 py-4 text-sm text-white">{row.cohorts?.title ?? '-'}</td>
                        <td className="px-6 py-4 text-sm text-slate-300">{row.status ?? 'active'}</td>
                        <td className="px-6 py-4 text-sm text-slate-400">{new Date(row.enrolled_at ?? Date.now()).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
