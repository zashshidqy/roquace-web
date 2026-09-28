'use client';

import Link from 'next/link';
import { projects, getFeaturedProjects } from '@/lib/data/projects';
import { CATEGORY_LABELS, TYPE_LABELS } from '@/types/project';
import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

interface WorkPreviewProps {
  count?: number;
}

export function WorkPreview({ count = 3 }: WorkPreviewProps) {
  const featuredProjects = getFeaturedProjects(count);

  return (
    <section className="relative px-6 py-20 md:px-12 md:py-32" aria-labelledby="work-preview-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-4 md:mb-16">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 id="work-preview-heading" className="font-display text-display-lg text-roquace-warm-white">
              Selected Work
            </h2>
            <p className="mt-2 text-body-base text-roquace-soft-gray/70">
              A curated selection of recent projects.
            </p>
          </div>
          <Link
            href="/work"
            className="animate-fade-in inline-flex items-center gap-2 text-body-sm font-medium text-roquace-accent-blue hover:text-blue-400 transition-colors"
            style={{ animationDelay: '0.3s' }}
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className={cn(
                'animate-on-scroll',
                index === 0 ? 'delay-0' : index === 1 ? 'delay-200' : 'delay-400'
              )}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group relative block overflow-hidden rounded-xl border border-roquace-soft-gray/10 bg-roquace-black transition-all duration-500 hover:border-roquace-accent-blue/50 hover:shadow-xl hover:shadow-roquace-accent-blue/10"
                aria-label={`${project.title} - ${TYPE_LABELS[project.type]}`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumbnail}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roquace-black/80 via-roquace-black/20 to-transparent" />

                  {/* Category & Type Badges */}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <Badge variant="type" size="sm">
                      {CATEGORY_LABELS[project.category]}
                    </Badge>
                    <Badge variant={project.type === 'client-work' ? 'accent' : 'muted'} size="sm">
                      {TYPE_LABELS[project.type]}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-display-sm text-roquace-warm-white group-hover:text-roquace-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-roquace-soft-gray/70 line-clamp-2">
                    {project.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-caption text-roquace-soft-gray/50">{project.year}</span>
                    <span className="inline-flex items-center gap-1 text-body-sm font-medium text-roquace-accent-blue">
                      View Case Study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}