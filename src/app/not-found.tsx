import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 bg-roquace-black">
      <div className="max-w-md w-full text-center animate-fade-in animate-slide-up">
        <div className="mb-8">
          <span className="font-display text-9xl font-medium text-roquace-accent-blue/30 animate-scale-in">
            404
          </span>
        </div>

        <h1 className="mb-3 font-display text-display-md text-roquace-warm-white">
          Page not found
        </h1>

        <p className="mb-8 text-body-base text-roquace-soft-gray/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className={cn(
              'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body-base font-medium transition-colors',
              'bg-roquace-accent-blue text-roquace-black hover:bg-blue-400'
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/work"
            className={cn(
              'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body-base font-medium transition-colors',
              'border border-roquace-soft-gray/30 text-roquace-warm-white hover:border-roquace-warm-white/50'
            )}
          >
            View Work
          </Link>
        </div>
      </div>
    </div>
  );
}