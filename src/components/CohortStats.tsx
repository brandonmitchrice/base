'use client'

import { cohorts, CohortStatus } from '@/data/cohorts'

export function CohortStats() {
  const getStatusClasses = (status: CohortStatus) => {
    const configs = {
      active: "bg-green-900/30 text-green-300",
      upcoming: "bg-blue-900/30 text-blue-300",
      completed: "bg-slate-700/30 text-slate-400"
    }
    return configs[status]
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-lg font-semibold">Cohort Performance</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-900/50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Cohort</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Week</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Students</th>
            </tr>
          </thead>
          <tbody>
            {cohorts.map((cohort, idx) => (
              <tr 
                key={cohort.title} 
                className={order-b border-slate-700 hover:bg-slate-700/30 transition-colors \}
              >
                <td className="px-6 py-4 text-sm font-medium text-white">
                  {cohort.title}
                </td>
                <td className="px-6 py-4 text-sm text-slate-300">
                  Week {cohort.week}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={px-2 py-1 rounded text-xs font-semibold \}>
                    {cohort.status.charAt(0).toUpperCase() + cohort.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-teal-400 font-semibold">
                  {cohort.students}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
