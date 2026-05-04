import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashir Mehfooz — AI Developer & Data Scientist',
  description: 'Portfolio of Ashir Mehfooz — AI Developer, Data Scientist, and Founder of XactGen.',
  authors: [{ name: 'Ashir Mehfooz' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="grid-bg" aria-hidden="true" />
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="orb orb-3" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}