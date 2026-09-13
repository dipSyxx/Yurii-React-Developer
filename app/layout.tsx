import React from "react"
import type { Metadata, Viewport } from 'next'
import { Archivo_Black, IBM_Plex_Mono, Instrument_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { profile } from '@/src/content/profile'
import './globals.css'
import './kinetic.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: profile.seo.title,
  description: profile.seo.description,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'frontend developer',
    'full-stack developer',
    'React',
    'Next.js',
    'TypeScript',
    'Norway',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: profile.seo.title,
    description: profile.seo.description,
    siteName: `${profile.name} Portfolio`,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F7F3' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F16' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} ${ibmPlexMono.variable} ${archivoBlack.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a className="skip-link" href="#main-content">Skip to content</a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
