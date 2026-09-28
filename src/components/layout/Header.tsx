'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

const navigation = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isDarkPage = pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[300] transition-all duration-400',
        scrolled || !isDarkPage
          ? 'bg-roquace-black/95 backdrop-blur-md border-b border-roquace-soft-gray/10'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="ROQUACE. Digital - Home">
            <Logo variant="full" color={isDarkPage && !scrolled ? 'white' : 'black'} width={140} height={36} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-body-sm font-medium transition-colors duration-200 relative',
                  pathname === item.href
                    ? 'text-roquace-accent-blue'
                    : 'text-roquace-warm-white/70 hover:text-roquace-warm-white'
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-roquace-accent-blue transition-transform duration-300 origin-left" />
                )}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" variant="primary">
                Start a Project
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-roquace-warm-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden overflow-hidden mt-4 pt-4 border-t border-roquace-soft-gray/10 animate-slide-down"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'py-2 text-body-base font-medium',
                    pathname === item.href ? 'text-roquace-accent-blue' : 'text-roquace-warm-white/70'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-2">
                <Button className="w-full" variant="primary">
                  Start a Project
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
