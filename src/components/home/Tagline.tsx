'use client';

export function Tagline() {
  return (
    <section className="relative px-6 py-20 md:px-12 md:py-32" aria-labelledby="tagline-heading">
      <div className="mx-auto max-w-7xl">
        <h1
          id="tagline-heading"
          className="tagline-title font-display text-display-xl text-roquace-warm-white leading-[1.05] tracking-tight max-w-5xl animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Built for what&apos;s next<span className="text-roquace-accent-blue">.</span>
        </h1>

        <p className="tagline-description mt-8 md:mt-12 max-w-2xl text-body-lg text-roquace-soft-gray/70 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          We design and build digital products that move businesses forward.
          Websites, platforms, and experiences crafted with precision and intent.
        </p>

        <div className="tagline-cta mt-10 md:mt-16 flex flex-wrap gap-4 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 text-body-base font-medium text-roquace-black bg-roquace-accent-blue rounded-full hover:bg-blue-400 transition-colors"
          >
            View Work
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-body-base font-medium text-roquace-warm-white border border-roquace-soft-gray/30 rounded-full hover:border-roquace-warm-white/50 transition-colors"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}