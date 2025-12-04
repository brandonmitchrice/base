import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BaseLaunch",
  description: "Cohort-based developer platform on Base network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-white`}
      >
        <header className="border-b border-slate-800 bg-slate-950/80 px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <span className="text-lg font-semibold">BaseLaunch</span>
            <nav className="text-sm text-slate-300 space-x-4">
              <button className="hover:text-white">Cohorts</button>
              <button className="hover:text-white">Students</button>
              <button className="hover:text-white">Settings</button>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
