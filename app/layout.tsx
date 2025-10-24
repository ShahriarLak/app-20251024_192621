import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: 'Hello World - Next.js 14',
  description: 'A simple Hello World application built with Next.js 14 and Tailwind CSS',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Hello World'],
  authors: [{ name: 'Next.js Developer' }],
  creator: 'Next.js Developer',
  publisher: 'Next.js Developer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hello-world-nextjs.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hello World - Next.js 14',
    description: 'A simple Hello World application built with Next.js 14 and Tailwind CSS',
    url: 'https://hello-world-nextjs.vercel.app',
    siteName: 'Hello World Next.js',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Hello World - Next.js 14',
    description: 'A simple Hello World application built with Next.js 14 and Tailwind CSS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}