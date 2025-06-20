import './globals.css' // jika ada styling global
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://avagenc.com'),
  title: {
    default: 'Avagenc - Custom AI Agents & Business Automation Solutions',
    template: '%s | Avagenc',
  },
  description: "Transform your business with Avagenc's cutting-edge AI automation solutions. Specializing in custom AI agents, intelligent workflows, and business process automation for modern enterprises.",
  keywords: [
    'avagenc',
    'ai automation',
    'business automation',
    'custom ai agents',
    'intelligent automation',
    'workflow optimization',
    'process automation services',
    'ai consulting',
    'business intelligence solutions',
    'automation company'
  ],
  openGraph: {
    title: 'Avagenc - Custom AI Agents & Business Automation Solutions',
    description: 'Transform your business with cutting-edge AI automation solutions. Custom AI agents and intelligent workflows for modern enterprises.',
    url: 'https://avagenc.com',
    siteName: 'Avagenc',
    type: 'website',
    images: [
      {
        url: '/og-homepage.png',
        width: 1200,
        height: 630,
        alt: 'Avagenc - AI Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avagenc - Custom AI Agents & Business Automation Solutions',
    description: 'Transform your business with cutting-edge AI automation solutions.',
    images: ['/og-homepage.png'],
    creator: '@avagenc',
  },
  authors: [{ name: 'Avagenc Team' }],
  creator: 'Avagenc',
  publisher: 'Avagenc',
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
  verification: {
    google: 'EyQjxe7yeHKd3clOZ1cpBw0jNUPDgo0o6rgne-hWY4s',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}