import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nahuel Scheytt | Frontend Developer',
  description: 'Nahuel Scheytt is a Frontend Developer yet capable to develop on backend.',
  keywords: ['Nahuel', 'Scheytt', 'Frontend', 'Developer', 'React', 'JavaScript'],
  authors: [{ name: 'Nahuel Scheytt' }],
  themeColor: '#ffd7ed',
  colorScheme: 'light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Nahuel Scheytt | Frontend Developer',
    description: 'Nahuel Scheytt is a Frontend Developer yet capable to develop on backend.',
    url: 'https://www.nahuelscheytt.com',
    siteName: 'Nahuel Scheytt | Frontend Developer',
    images: [
      {
        url: 'opengraph-image.jpg',
        type: 'image/*',
        width: 800,
        height: 600
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nahuel Scheytt | Frontend Developer',
    description: 'Nahuel Scheytt is a Frontend Developer yet capable to develop on backend.',
    creator: '@nahueesch',
    images: {
      url: 'opengraph-image.jpg',
      alt: 'Nahuel Scheytt | Frontend Developer Logo',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: 'Next.js',
  metadataBase: new URL('https://www.nahuelscheytt.com'),
  alternates: {
    canonical: '/'
  },
  icons: {
    shortcut: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
