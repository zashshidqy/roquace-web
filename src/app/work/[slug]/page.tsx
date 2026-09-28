import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, getAllSlugs } from '@/lib/data/projects';
import { ProjectDetail } from '@/components/work/ProjectDetail';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: project.heroImage ? [{ url: project.heroImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.tagline,
      images: project.heroImage ? [project.heroImage] : [],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
