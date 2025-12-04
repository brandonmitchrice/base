import { CohortCard } from "../../components/CohortCard";
import { cohorts } from "../../data/cohorts";

export default function CohortsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">All Cohorts</h1>
        <p className="text-slate-300 mb-8">
          Browse all available developer cohorts on Base network.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cohorts.map((cohort) => (
            <CohortCard key={cohort.title} {...cohort} />
          ))}
        </div>
      </div>
    </main>
  );
}
