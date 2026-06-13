import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PitchCast — Personalize Podcast Guest Pitches at Scale',
  description: 'AI-powered podcast guest pitch personalization. Research hosts, generate tailored emails, and land more podcast appearances.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f90ab268-5db8-4561-a25d-f3c1671e79f6"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
