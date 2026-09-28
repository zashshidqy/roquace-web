'use client';

import Link from 'next/link';
import { footerNavigation } from '@/lib/data/navigation';
import { Logo } from './Logo';
import { cn } from '@/lib/utils/cn';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const connectLinks: FooterLink[] = [
  { label: 'Contact', href: '/contact' },
  { label: 'Instagram', href: 'https://instagram.com/roquace', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/roquace', external: true },
  { label: 'Twitter', href: 'https://twitter.com/roquace', external: true },
];

const legalLinks: FooterLink[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-roquace-soft-gray/10 bg-roquace-black" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-6 block" aria-label="ROQUACE. Digital - Home">
              <Logo variant="full" color="white" width={160} height={40} />
            </Link>
            <p className="max-w-xs text-body-base leading-relaxed text-roquace-soft-gray/70">
              Building digital experiences with intent. Web development, design systems, and digital
              strategy for growing businesses.
            </p>
            <div className="mt-6 flex gap-4">
              {connectLinks.slice(1).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-roquace-soft-gray/50 transition-colors hover:text-roquace-warm-white"
                  aria-label={link.label}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label === 'Instagram' && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  )}
                  {link.label === 'LinkedIn' && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {link.label === 'Twitter' && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="mb-4 text-caption text-roquace-accent-blue">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-roquace-soft-gray/70 transition-colors hover:text-roquace-warm-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <nav aria-label="Connect links">
            <h3 className="mb-4 text-caption text-roquace-accent-blue">Connect</h3>
            <ul className="space-y-3">
              {connectLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-body-sm text-roquace-soft-gray/70 transition-colors hover:text-roquace-warm-white"
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <h3 className="mb-4 text-caption text-roquace-accent-blue">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-roquace-soft-gray/70 transition-colors hover:text-roquace-warm-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-roquace-soft-gray/10 pt-8 md:flex-row">
          <p className="text-body-sm text-roquace-soft-gray/50">
            © {currentYear} ROQUACE. Digital. All rights reserved.
          </p>
          <p className="text-body-sm text-roquace-soft-gray/50">
            Made with intent in Jakarta & Singapore.
          </p>
        </div>
      </div>
    </footer>
  );
}
