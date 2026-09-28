'use client';

import Link from 'next/link';

export function CTA() {
  return (
    <section className="relative px-6 py-20 md:px-12 md:py-32" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="cta-heading" className="cta-title font-display text-display-lg text-roquace-warm-white animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Ready to build something remarkable?
        </h2>

        <p className="cta-description mt-6 text-body-lg text-roquace-soft-gray/70 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Let&apos;s discuss your next digital project. We&apos;ll respond within 24 hours.
        </p>

        <div className="cta-buttons mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-body-base font-medium text-roquace-black bg-roquace-accent-blue rounded-full hover:bg-blue-400 transition-colors"
          >
            Start a Conversation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-body-base font-medium text-roquace-warm-white border border-roquace-soft-gray/30 rounded-full hover:border-roquace-warm-white/50 transition-colors"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}