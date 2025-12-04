import { CohortCard } from "../components/CohortCard";

export default function Home() {
  const cohorts = [
    {
      title: "Base Mini App",
      description: "Build your first mini app on Base network.",
      week: 1,
      students: 24,
      status: "active" as const,
    },
    {
      title: "OnchainKit Masters",
      description: "Master Web3 integration patterns.",
      week: 3,
      students: 18,
      status: "upcoming" as const,
    },
    {
      title: "Advanced Farcaster",
      description: "Build social apps on Farcaster.",
      week: 2,
      students: 32,
      status: "active" as const,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="mx-auto mt-6 max-w-4xl">
        <h1 className="mb-2 text-4xl font-bold">BaseLaunch</h1>
        <p className="mb-6 text-slate-300">
          Cohort-based developer platform on Base network.
        </p>

        <div className="space-y-4">
          {cohorts.map((cohort) => (
            <CohortCard key={cohort.title} {...cohort} />
          ))}
        </div>
      </div>
    </main>
  );
}
