# Create the component file with code
@"
'use client';

interface CohortCardProps {
  title: string;
  description: string;
  week: number;
  students: number;
  status: 'upcoming' | 'active' | 'completed';
}

export default function CohortCard({
  title,
  description,
  week,
  students,
  status,
}: CohortCardProps) {
  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800',
    active: 'bg-green-100 text-green-800',
    completed: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full \${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex gap-6">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Week</p>
            <p className="text-lg font-bold text-gray-900">{week}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Students</p>
            <p className="text-lg font-bold text-gray-900">{students}</p>
          </div>
        </div>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
"@ | Out-File -FilePath "src/components/CohortCard.tsx" -Encoding UTF8
