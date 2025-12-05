'use client'

import { useWallet } from '@/lib/wallet-context'

export function ConnectWalletButton() {
  const { address, isConnected, connect, disconnect } = useWallet()

  const short = (addr: string) => addr.slice(0, 6) + '...' + addr.slice(-4)

  if (!isConnected) {
    return (
      <button
        className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded text-white font-semibold"
        onClick={connect}
      >
        Connect Wallet
      </button>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-slate-300 font-mono">{short(address!)}</span>
      <button
        className="bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded text-white"
        onClick={disconnect}
      >
        Disconnect
      </button>
    </div>
  )
}
