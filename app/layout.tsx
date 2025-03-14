import { Metadata, Viewport } from 'next'
import type { Metadata as MetadataType } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackgroundMusic from '@/components/background-music'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faykal - Personal Portfolio',
  description: 'Tech Enthusiast skilled in HTML, CSS, JavaScript, Tailwind, Node.js, and Laravel',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.png',
      type: 'image/svg+xml',
    },
  ],
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Faykal - Personal Portfolio',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <BackgroundMusic />
        {children}
      </body>
    </html>
  )
}

