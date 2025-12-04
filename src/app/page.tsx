import Link from "next/link";
import { CohortCard } from "../components/CohortCard";
import { cohorts } from "../data/cohorts";

export default function Home() {
  const featuredCohorts = cohorts.slice(0, 2);

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">BaseLaunch</h1>
        <p className="text-slate-300 mb-8">
          Cohort-based developer platform on Base network. Learn Web3 development with hands-on projects and community support.
        </p>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Cohorts</h2>
            <Link href="/cohorts" className="text-teal-400 hover:text-teal-300 text-sm font-medium">
              View All →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredCohorts.map((cohort) => (
              <CohortCard key={cohort.title} {...cohort} />
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Why BaseLaunch?</h3>
          <ul className="text-slate-300 space-y-2 text-sm">
            <li>• Learn from experienced Base developers</li>
            <li>• Build real onchain applications</li>
            <li>• Join a thriving Web3 community</li>
            <li>• Ship projects to mainnet</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
