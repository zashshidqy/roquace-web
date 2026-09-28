"use client";

import Link from "next/link";
import type { Project } from "@/types/project";
import { CATEGORY_LABELS, TYPE_LABELS } from "@/types/project";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const className = cn(
    "project-card group relative overflow-hidden rounded-xl border border-roquace-soft-gray/10 bg-roquace-black transition-all duration-500 hover:border-roquace-accent-blue/50 hover:shadow-xl hover:shadow-roquace-accent-blue/10 animate-on-scroll",
    index === 0 ? "delay-0" : "delay-100"
  );

  return (
    <article className={className}>
      <Link
        href={"/work/" + project.slug}
        className="block"
        aria-label={project.title + " - " + TYPE_LABELS[project.type]}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.thumbnail}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-roquace-black/80 via-roquace-black/20 to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <Badge variant="type" size="sm">
              {CATEGORY_LABELS[project.category]}
            </Badge>
            <Badge variant={project.type === "client-work" ? "accent" : "muted"} size="sm">
              {TYPE_LABELS[project.type]}
            </Badge>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="w-full max-w-md">
              <h3 className="mb-4 font-display text-display-sm text-roquace-warm-white">
                {project.title}
              </h3>
              {project.previewImages.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {project.previewImages.slice(0, 4).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      width={200}
                      height={150}
                      className="rounded-lg object-cover opacity-80 transition-opacity hover:opacity-100"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-display-sm text-roquace-warm-white group-hover:text-roquace-accent-blue transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-body-sm text-roquace-soft-gray/70">
            {project.tagline}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-caption text-roquace-soft-gray/50">
              {project.client} + " " + {project.year}
            </span>
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
  );
}
