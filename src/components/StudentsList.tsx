'use client'

import { useEffect, useState } from 'react'

interface Student {
  id: string
  wallet_address: string
  email: string | null
  name: string | null
  created_at: string
}

export function StudentsList() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setStudents([
      {
        id: '1',
        wallet_address: '0x1234...5678',
        email: 'student@example.com',
        name: 'John Doe',
        created_at: new Date().toISOString(),
      },
    ])
    setLoading(false)
  }, [])

  if (loading) {
    return <p className="text-slate-400">Loading...</p>
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-lg font-semibold">Students ({students.length})</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Wallet</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Joined</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-slate-400">
                  No students yet
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="px-6 py-4 text-sm font-mono text-teal-400">
                    {student.wallet_address}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{student.email || '-'}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{student.name || '-'}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    {new Date(student.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
