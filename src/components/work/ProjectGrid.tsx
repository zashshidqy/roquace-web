'use client';

import { useState } from 'react';
import { projects } from '@/lib/data/projects';
import { ProjectCard } from './ProjectCard';
import { CATEGORY_LABELS } from '@/types/project';
import { cn } from '@/lib/utils/cn';

interface ProjectGridProps {
  initialCount?: number;
}

export function ProjectGrid({ initialCount = 6 }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'corporate', 'hospitality', 'fashion-ecommerce', 'service-property'] as const;

  const filteredProjects = selectedCategory === 'all'
    ? projects.slice(0, initialCount)
    : projects.filter(p => p.category === selectedCategory).slice(0, initialCount);

  return (
    <div className="project-grid">
      <header className="mb-16 project-grid-header animate-fade-in">
        <h1 className="font-display text-display-xl text-roquace-warm-white">
          Our Work
        </h1>
        <p className="mt-4 text-body-lg text-roquace-soft-gray/70 max-w-2xl">
          A curated selection of digital experiences we&apos;ve crafted for clients
          and concept explorations that push boundaries.
        </p>
      </header>

      <div className="project-filter mb-10 flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: '0.1s' }} role="group" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              'px-4 py-2 text-body-sm font-medium rounded-full border transition-all duration-200',
              selectedCategory === category
                ? 'bg-roquace-accent-blue text-roquace-black border-roquace-accent-blue'
                : 'text-roquace-warm-white/70 border-roquace-soft-gray/30 hover:border-roquace-warm-white/50'
            )}
            aria-pressed={selectedCategory === category}
          >
            {category === 'all' ? 'All' : CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-roquace-soft-gray/70 animate-fade-in">
          No projects found for this category.
        </div>
      )}
    </div>
  );
}