import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maisha Rahman — AI Engineer & Fullstack Developer',
  description: 'Portfolio of Maisha Rahman, AI Engineer, Fullstack Developer, and published researcher at ICCIT 2025.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}