import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';
`

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
    url: 'https://nahuelscheytt.com',
    siteName: 'Nahuel Scheytt | Frontend Developer',
    images: [
      {
        url: 'img/view-home-og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'img/view-home-og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'View site alt',
      },
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
      url: 'img/view-home-og.png',
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
  metadataBase: new URL('https://nahuelscheytt.com'),
  alternates: {
    canonical: '/'
  },
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
