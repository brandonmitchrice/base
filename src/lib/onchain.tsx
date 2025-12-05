'use client'

import type { ReactNode } from 'react'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'

const network = process.env.NEXT_PUBLIC_NETWORK || 'base-sepolia'
const chain = network === 'base' ? base : baseSepolia

export const wagmiConfig = createConfig({
  chains: [chain],
  transports: {
    [chain.id]: (() => {
      const key = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      if (key) {
        const sub = chain.id === base.id ? 'base' : 'base-sepolia'
        return http(`https://${sub}.g.alchemy.com/v2/${key}`)
      }
      return http()
    })(),
  },
})

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 300000, gcTime: 600000 },
  },
})

export function OnchainProvider({ children }: { children: ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_ONCHAIN_KIT_API_KEY || ''
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider apiKey={apiKey} chain={chain}>
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
