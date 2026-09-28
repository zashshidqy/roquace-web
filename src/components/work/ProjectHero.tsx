'use client';

import type { Project } from '@/types/project';
import { CATEGORY_LABELS, TYPE_LABELS } from '@/types/project';
import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden" aria-label={project.title}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roquace-black/90 via-roquace-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="project-hero-badges mb-6 flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Badge variant="type" size="md">
              {CATEGORY_LABELS[project.category]}
            </Badge>
            <Badge variant={project.type === 'client-work' ? 'accent' : 'muted'} size="md">
              {TYPE_LABELS[project.type]}
            </Badge>
            <Badge variant="muted" size="md">
              {project.year}
            </Badge>
          </div>

          <h1 className="project-hero-title font-display text-display-xl md:text-display-lg text-roquace-warm-white leading-[1.05] max-w-4xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {project.title}
          </h1>

          <p className="project-hero-tagline mt-6 max-w-2xl text-body-lg text-roquace-soft-gray/70 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {project.tagline}
          </p>

          {project.techStack.length > 0 && (
            <div className="project-hero-tech mt-8 flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="muted" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {project.links?.live && (
            <div className="project-hero-links mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-body-base font-medium text-roquace-black bg-roquace-accent-blue rounded-full hover:bg-blue-400 transition-colors"
              >
                Visit Website
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-roquace-warm-white/50 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-caption tracking-widest">SCROLL</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </header>
  );
}