import { Metadata } from 'next';
import { ProjectGrid } from '@/components/work/ProjectGrid';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects and case studies from ROQUACE. Digital.',
};

export default function WorkPage() {
  return (
    <div className="px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16">
          <h1 className="font-display text-display-xl text-roquace-warm-white">Our Work</h1>
          <p className="mt-4 max-w-2xl text-body-lg text-roquace-soft-gray/70">
            A curated selection of digital experiences we&apos;ve crafted for clients and concept
            explorations that push boundaries.
          </p>
        </header>

        <ProjectGrid initialCount={6} />
      </div>
    </div>
  );
}
