'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6 bg-roquace-black">
      <div className="max-w-md w-full text-center animate-fade-in animate-slide-up">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-roquace-accent-blue/10">
          <svg
            className="w-8 h-8 text-roquace-accent-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="mb-3 font-display text-display-md text-roquace-warm-white">
          Something went wrong
        </h1>

        <p className="mb-6 text-body-base text-roquace-soft-gray/70">
          We encountered an unexpected error. Please try again or go back to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className={cn(
              'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body-base font-medium transition-colors',
              'bg-roquace-accent-blue text-roquace-black hover:bg-blue-400'
            )}
          >
            Try Again
          </button>
          <Link
            href="/"
            className={cn(
              'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body-base font-medium transition-colors',
              'border border-roquace-soft-gray/30 text-roquace-warm-white hover:border-roquace-warm-white/50'
            )}
          >
            Go Home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-6 text-caption text-roquace-soft-gray/50">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}