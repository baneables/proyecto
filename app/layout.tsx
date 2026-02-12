import React from "react"
import type { Metadata, Viewport } from 'next'
import { Creepster, Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _creepster = Creepster({ weight: '400', subsets: ['latin'], variable: '--font-creepster' })

export const metadata: Metadata = {
  title: 'Dread By Blood | A Multiplayer Survival Horror Game',
  description: 'Face your darkest fears in Dread By Blood. Play as the Hunter or survive as the Prey in this terrifying asymmetric multiplayer horror experience.',
}

export const viewport: Viewport = {
  themeColor: '#1a0000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
