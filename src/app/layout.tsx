import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { WalletProvider } from '../lib/wallet-context'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'BaseLaunch - Cohort-based Developer Platform',
  description: 'Learn Web3 development on Base network with hands-on cohorts',
  keywords: ['Web3', 'Base', 'Blockchain', 'Developer', 'Cohort', 'Learning'],
  authors: [{ name: 'BaseLaunch Team' }],
  openGraph: {
    title: 'BaseLaunch - Learn Web3 on Base Network',
    description: 'Join cohort-based developer courses on the Base blockchain',
    url: 'https://baselaunch.dev',
    siteName: 'BaseLaunch',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BaseLaunch',
    description: 'Learn Web3 development with hands-on cohorts',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-white`}
      >
        <WalletProvider>
          <header className="border-b border-slate-800 bg-slate-950/80 px-6 py-4 sticky top-0 z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
                  BL
                </div>
                <span className="text-lg font-semibold hidden sm:inline">BaseLaunch</span>
              </div>

              <nav className="text-sm text-slate-300 space-x-4 hidden md:flex">
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
                <a href="/cohorts" className="hover:text-white transition">
                  Cohorts
                </a>
                <a href="/dashboard" className="hover:text-white transition">
                  Dashboard
                </a>
              </nav>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </header>

          <main className="min-h-screen">{children}</main>

          <footer className="border-t border-slate-800 bg-slate-950/50 px-6 py-12 mt-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold mb-4">BaseLaunch</h3>
                  <p className="text-slate-400 text-sm">
                    Learn Web3 development on Base network with hands-on cohorts.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-sm">Product</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>
                      <a href="/cohorts" className="hover:text-white transition">
                        Cohorts
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard" className="hover:text-white transition">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:text-white transition">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-sm">Resources</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>
                      <a
                        href="https://base.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        Base Network
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://onchainkit.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        OnchainKit
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://farcaster.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        Farcaster
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-sm">Social</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
                <p>&copy; 2025 BaseLaunch. All rights reserved.</p>
                <div className="flex gap-6 mt-4 sm:mt-0">
                  <a href="/privacy" className="hover:text-white transition">
                    Privacy
                  </a>
                  <a href="/terms" className="hover:text-white transition">
                    Terms
                  </a>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </WalletProvider>
      </body>
    </html>
  )
}
