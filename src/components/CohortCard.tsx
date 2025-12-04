type CohortStatus = "upcoming" | "active" | "completed";

interface CohortCardProps {
  title: string;
  description: string;
  week: number;
  students: number;
  status: CohortStatus;
}

export function CohortCard({
  title,
  description,
  week,
  students,
  status,
}: CohortCardProps) {
  const statusLabel =
    status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mb-3 text-sm text-slate-300">{description}</p>
      <p className="text-xs text-slate-400">
        Week {week} · {students} students · {statusLabel}
      </p>
    </div>
  );
}
