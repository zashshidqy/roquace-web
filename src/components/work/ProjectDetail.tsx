'use client';

import type { Project } from '@/types/project';
import { ProjectHero } from './ProjectHero';
import { SectionBlock } from './SectionBlock';
import { CTA } from '@/components/home';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="min-h-screen bg-roquace-black">
      {/* Hero */}
      <ProjectHero project={project} />

      {/* Signature Content Format Sections */}
      <div className="px-6 md:px-12">
        {project.sections.map((section, index) => (
          <SectionBlock key={section.type} section={section} index={index} />
        ))}

        {/* Testimonial */}
        {project.testimonial && (
          <section className="project-testimonial py-20 md:py-28 bg-roquace-black/50 animate-on-scroll">
            <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
              <blockquote className="relative">
                <svg
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 text-roquace-accent-blue/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4 3.638-4 5.849h4v10h-9.996z" />
                </svg>
                <p className="font-display text-display-sm text-roquace-warm-white leading-relaxed mb-6">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <footer className="not-italic">
                  <div className="font-medium text-roquace-warm-white">{project.testimonial.author}</div>
                  <div className="text-body-sm text-roquace-soft-gray/70">
                    {project.testimonial.role}, {project.testimonial.company}
                  </div>
                </footer>
              </blockquote>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTA />
      </div>
    </article>
  );
}