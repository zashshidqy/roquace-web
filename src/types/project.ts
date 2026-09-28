export type ProjectCategory =
  'corporate' | 'hospitality' | 'fashion-ecommerce' | 'service-property';

export type ProjectType = 'client-work' | 'concept-work';

export type SectionType = 'concept' | 'approach' | 'design' | 'final' | 'lesson';

export interface ProjectSection {
  type: SectionType;
  title: string;
  content: string;
  images: string[];
  videos?: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  caseStudy?: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: ProjectCategory;
  type: ProjectType;
  tagline: string;
  heroImage: string;
  heroVideo?: string;
  thumbnail: string;
  previewImages: string[];
  description: string;
  testimonial?: Testimonial;
  sections: ProjectSection[];
  techStack: string[];
  links?: ProjectLinks;
}

export const SECTION_LABELS: Record<SectionType, string> = {
  concept: 'Concept',
  approach: 'Approach',
  design: 'Design',
  final: 'Final',
  lesson: 'Lesson',
};

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  corporate: 'Corporate',
  hospitality: 'Hospitality',
  'fashion-ecommerce': 'Fashion / E-commerce',
  'service-property': 'Service / Property',
};

export const TYPE_LABELS: Record<ProjectType, string> = {
  'client-work': 'Client Work',
  'concept-work': 'Concept Work',
};
