'use client'

import { useEffect, useState } from 'react'
import { cohorts } from '../data/cohorts'

interface CohortStat {
  title: string
  week: number
  status: string
  students: number
}

export function CohortStats() {
  const [cohortsData, setCohortsData] = useState<CohortStat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCohortsData(cohorts)
    setLoading(false)
  }, [])

  if (loading) {
    return <p className="text-slate-400">Loading...</p>
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-lg font-semibold">Cohorts Performance</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Cohort</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Week</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Students</th>
            </tr>
          </thead>
          <tbody>
            {cohortsData.map((cohort) => {
              const statusClass = cohort.status === 'active' ? 'bg-green-900/30 text-green-300' : 'bg-yellow-900/30 text-yellow-300'
              return (
                <tr key={cohort.title} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="px-6 py-4 text-sm font-medium text-white">{cohort.title}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">Week {cohort.week}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={'px-2 py-1 rounded text-xs font-semibold ' + statusClass}>
                      {cohort.status.charAt(0).toUpperCase() + cohort.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-teal-400 font-semibold">{cohort.students}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
