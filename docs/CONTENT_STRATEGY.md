# Content Strategy

## Project Data Structure

Each project follows the **Signature Content Format** (from PRD Slide 13):

```
Concept → Approach → Design → Final → Lesson
```

### TypeScript Interface
```typescript
interface Project {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: 'corporate' | 'hospitality' | 'fashion-ecommerce' | 'service-property';
  type: 'client-work' | 'concept-work';
  tagline: string;
  heroImage: string;
  heroVideo?: string;
  thumbnail: string;
  previewImages: string[];
  description: string;
  testimonial?: Testimonial;
  sections: ProjectSection[];
  techStack: string[];
  links?: { live?: string; github?: string; caseStudy?: string };
}

interface ProjectSection {
  type: 'concept' | 'approach' | 'design' | 'final' | 'lesson';
  title: string;
  content: string;
  images: string[];
  videos?: string[];
}
```

## Section Content Guidelines

### Concept
- **What**: The problem, opportunity, or insight that sparked the project
- **Tone**: Strategic, investigative
- **Length**: 2-3 paragraphs
- **Visuals**: Research artifacts, sketches, moodboards, competitor analysis

### Approach
- **What**: Methodology, process, technical decisions
- **Tone**: Analytical, transparent
- **Length**: 2-3 paragraphs
- **Visuals**: Wireframes, architecture diagrams, user flows, prototypes

### Design
- **What**: Visual system, UI decisions, interaction design
- **Tone**: Craft-focused, detail-oriented
- **Length**: 2-3 paragraphs
- **Visuals**: High-fidelity mockups, design system components, motion studies

### Final
- **What**: Launched product, results, metrics
- **Tone**: Outcome-oriented, proud but measured
- **Length**: 2-3 paragraphs
- **Visuals**: Production screenshots, device mockups, analytics dashboards

### Lesson
- **What**: Retrospective insights, what you'd do differently
- **Tone**: Reflective, generous (sharing knowledge)
- **Length**: 1-2 paragraphs
- **Visuals**: Optional - process photos, team, sketches

## Writing Style (PRD Non-Negotiables)

> "Bahasa di seluruh copy situs: singkat, langsung, tanpa hype"

- **Direct**: "We built X" not "We were tasked with building X"
- **Specific**: "40% increase in direct bookings" not "significant improvement"
- **No superlatives**: Avoid "best", "amazing", "revolutionary", "world-class"
- **Active voice**: "The quiz increased conversion" not "Conversion was increased by the quiz"
- **Present tense for current work**: "The system handles..." not "The system handled..."

## Project Categories (from PRD Slide 14)

| Category | Label | Example Clients |
|----------|-------|-----------------|
| `corporate` | Corporate | B2B SaaS, professional services, fintech |
| `hospitality` | Hospitality | Hotels, restaurants, travel |
| `fashion-ecommerce` | Fashion / E-commerce | DTC brands, marketplaces, retail |
| `service-property` | Service / Property | Agencies, real estate, property management |

## Project Types

| Type | Label | Usage |
|------|-------|-------|
| `client-work` | Client Work | Real commissioned projects |
| `concept-work` | Concept Work | Self-initiated explorations |

> **Rule**: Every concept project MUST have `type: 'concept-work'` and display "Concept Work" badge (PRD Slide 14)

## Content Distribution (PRD Section 9)

| Content Type | % | Implementation |
|--------------|---|----------------|
| Work | 40% | Project grid, detail pages |
| Insight | 30% | Future: blog/articles section |
| Process | 20% | Process page, "How it's made" in case studies |
| Offer | 10% | CTAs, contact page |

## Image Guidelines

### Required per Project
- `heroImage`: 1920x1080 (hero background)
- `thumbnail`: 800x600 (grid card)
- `previewImages[]`: 3-4 images at 800x600 (hover preview)

### Per Section
- `images[]`: 1-2 images per section at 1200x900
- `videos[]`: Optional, 1920x1080, muted, loop

### Format
- WebP/AVIF preferred (Next.js Image handles)
- Source: High-res source images in `/public/images/projects/`
- Naming: `{slug}-{section}-{n}.{ext}`

## Adding New Projects

1. Add images to `/public/images/projects/`
2. Add entry to `src/lib/data/projects.ts`
3. Run `npm run type-check`
4. Deploy

## CMS Migration (Phase 2+)

When migrating to Sanity/Contentful:

1. Create schema matching `Project` interface
2. Keep `types/project.ts` as source of truth
3. Update `lib/data/projects.ts` to fetch from CMS
4. Add preview mode for draft content
5. Update `generateStaticParams` for dynamic routes

## SEO per Project

Each project page generates:
- Dynamic metadata (title, description, OG, Twitter)
- JSON-LD structured data (CaseStudy)
- Semantic HTML structure
- Optimized images with alt text
