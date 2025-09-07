import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrenchPad - Professional Solana Bundle Trading Platform',
  description: 'Advanced Jito bundling system for Solana token launches and trading. Secure, local, and profitable.',
  keywords: ['Solana', 'Jito', 'Bundle', 'Trading', 'DeFi', 'Crypto', 'TrenchPad'],
  authors: [{ name: 'osknyo_dev', url: 'https://x.com/osknyo_dev' }],
  icons: {
    icon: [
      {
        url: '/trenchpad-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: '/trenchpad-logo.png',
    apple: '/trenchpad-logo.png',
  },
  openGraph: {
    title: 'TrenchPad - Professional Solana Bundle Trading',
    description: 'Advanced Jito bundling system for profitable Solana trading',
    url: 'https://trenchpad.vercel.app',
    siteName: 'TrenchPad',
    type: 'website',
    images: ['/trenchpad-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrenchPad - Professional Solana Bundle Trading',
    description: 'Advanced Jito bundling system for profitable Solana trading',
    creator: '@osknyo_dev',
    images: ['/trenchpad-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 