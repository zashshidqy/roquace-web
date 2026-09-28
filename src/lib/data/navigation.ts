export const navigation = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerNavigation = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Insights', href: '/insights' },
  ],
  connect: [
    { label: 'Contact', href: '/contact' },
    { label: 'Instagram', href: 'https://instagram.com/roquace', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/roquace', external: true },
    { label: 'Twitter', href: 'https://twitter.com/roquace', external: true },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
} as const;
