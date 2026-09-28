import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { ToastProviderWrapper } from '@/components/providers/ToastProviderWrapper';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://roquace.digital'),
  title: {
    default: "ROQUACE. Digital — Built for what's next.",
    template: '%s | ROQUACE. Digital',
  },
  description:
    'Building digital experiences with intent. Web development, design systems, and digital strategy for growing businesses.',
  keywords: [
    'web development',
    'digital agency',
    'design systems',
    'Next.js',
    'React',
    'TypeScript',
    'UI/UX design',
    'digital strategy',
  ],
  authors: [{ name: 'ROQUACE. Digital' }],
  creator: '@roquace',
  publisher: 'ROQUACE. Digital',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roquace.digital',
    siteName: 'ROQUACE. Digital',
    title: "ROQUACE. Digital — Built for what's next.",
    description:
      'Building digital experiences with intent. Web development, design systems, and digital strategy for growing businesses.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'ROQUACE. Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ROQUACE. Digital — Built for what's next.",
    description:
      'Building digital experiences with intent. Web development, design systems, and digital strategy for growing businesses.',
    images: ['/images/og-default.jpg'],
    creator: '@roquace',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} lenis`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-roquace-black text-roquace-warm-white antialiased">
        <ToastProviderWrapper>
          <LenisProvider>
            <a
              href="#main-content"
              className="sr-only z-[1000] rounded-md bg-roquace-accent-blue px-4 py-2 text-roquace-black focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="pt-20">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>
            <Footer />
          </LenisProvider>
        </ToastProviderWrapper>
      </body>
    </html>
  );
}