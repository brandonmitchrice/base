interface StatCardProps {
  label: string
  value: string | number
  icon: string
  trend?: string
}

export function StatCard({ label, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-slate-400 text-sm">{label}</p>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold mb-2">{value}</p>
      {trend && <p className="text-sm text-green-400">{trend}</p>}
    </div>
  )
}
