import type { Metadata } from 'next'
import './globals.css'
import { OnchainProvider } from '../lib/onchain'
import { WalletProvider } from '../lib/wallet-context'
import { ToastProvider } from '../lib/toast'

export const metadata: Metadata = {
  title: 'BaseLaunch - Web3 Learning Platform',
  description: 'Cohort-based developer platform on Base network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-900 text-white">
        <OnchainProvider>
          <WalletProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </WalletProvider>
        </OnchainProvider>
      </body>
    </html>
  )
}
