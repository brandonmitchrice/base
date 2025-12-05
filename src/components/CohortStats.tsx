'use client'

import { cohorts } from '@/data/cohorts'
import { getStatusColor } from '@/lib/utils'

export function CohortStats() {

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
            {cohorts.map((cohort, idx) => {
              const isLast = idx === cohorts.length - 1
              const borderClass = isLast ? 'border-b-0' : 'border-b border-slate-700'
              return (
                <tr key={cohort.title} className={borderClass + ' hover:bg-slate-700/30 transition-colors'}>
                  <td className="px-6 py-4 text-sm font-medium text-white">{cohort.title}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">Week {cohort.week}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={'px-2 py-1 rounded text-xs font-semibold ' + getStatusColor(cohort.status)}>
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
