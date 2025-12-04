export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
             <div className="space-y-4">
          <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
            <h2 className="text-xl font-semibold">Base Mini App</h2>
            <p className="text-slate-300 text-sm">
              Build your first mini app on Base network. Week 1, 24 students.
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
            <h2 className="text-xl font-semibold">OnchainKit Masters</h2>
            <p className="text-slate-300 text-sm">
              Master Web3 integration patterns. Week 3, 18 students.
            </p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
            <h2 className="text-xl font-semibold">Advanced Farcaster</h2>
            <p className="text-slate-300 text-sm">
              Build social apps on Farcaster. Week 2, 32 students.
            </p>
          </div>
        </div>

    </main>

  );
}
