import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roquace.digital';
  const projectSlugs = getAllSlugs();

  const staticRoutes = ['', '/work', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
