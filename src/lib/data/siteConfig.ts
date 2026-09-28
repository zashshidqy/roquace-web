export const siteConfig = {
  name: 'ROQUACE. Digital',
  description:
    'Building digital experiences with intent. Web development, design systems, and digital strategy for growing businesses.',
  url: 'https://roquace.digital',
  ogImage: '/images/og-default.jpg',
  links: {
    twitter: 'https://twitter.com/roquace',
    linkedin: 'https://linkedin.com/company/roquace',
    instagram: 'https://instagram.com/roquace',
    github: 'https://github.com/roquace',
    email: 'mailto:hello@roquace.digital',
  },
  creator: '@roquace',
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
};

export const metadata = {
  title: {
    default: "ROQUACE. Digital — Built for what's next.",
    template: '%s | ROQUACE. Digital',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'ROQUACE. Digital' }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
