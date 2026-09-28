'use client';

import type { ProjectSection } from '@/types/project';
import { SECTION_LABELS } from '@/types/project';
import { cn } from '@/lib/utils/cn';

interface SectionBlockProps {
  section: ProjectSection;
  index: number;
}

export function SectionBlock({ section, index }: SectionBlockProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      className={cn('project-section py-20 md:py-28 animate-on-scroll', isEven ? 'bg-roquace-black' : 'bg-roquace-black/50')}
      aria-labelledby={`section-${section.type}`}
      data-section-type={section.type}
      style={{ transitionDelay: `${index * 100}ms` } as React.CSSProperties}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div
          className={cn(
            'grid lg:grid-cols-12 gap-12 md:gap-16 items-start',
            !isEven && 'lg:direction-rtl'
          )}
        >
          {/* Text Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 lg:top-32">
              <span className="text-caption text-roquace-accent-blue">
                {SECTION_LABELS[section.type].toUpperCase()}
              </span>
              <h2 id={`section-${section.type}`} className="mt-2 font-display text-display-md text-roquace-warm-white">
                {section.title}
              </h2>
              <div className="prose prose-invert max-w-none mt-6">
                <p className="whitespace-pre-line text-body-lg leading-relaxed text-roquace-soft-gray/70">
                  {section.content}
                </p>
              </div>
            </div>
          </div>

          {/* Media Column */}
          <div className="lg:col-span-7 space-y-8">
            {section.images.map((image, i) => (
              <div
                key={i}
                className="section-image relative rounded-xl overflow-hidden animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` } as React.CSSProperties}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`${section.title} - Image ${i + 1}`}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
            {section.videos?.map((video, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden animate-on-scroll">
                <video src={video} autoPlay loop muted playsInline className="h-auto w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}