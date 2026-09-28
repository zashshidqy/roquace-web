# Technical Architecture

## Overview
ROQUACE. Digital website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Designed for cinematic/editorial aesthetic with smooth scroll animations.

## Stack Decisions

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Next.js 14 (App Router) | SSR/SSG, SEO, React ecosystem, PRD recommendation |
| Styling | Tailwind CSS | Utility-first, custom theme, performance |
| Animations | GSAP + ScrollTrigger | Industry standard for scroll animations |
| Transitions | Framer Motion | Page transitions, micro-interactions |
| Smooth Scroll | Lenis | Momentum-based, GSAP-compatible |
| Forms | React Hook Form + Zod | Type-safe, performant validation |
| Content | Local TypeScript files | Zero-setup, version controlled, CMS-ready |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── work/              # Portfolio pages
│   │   ├── page.tsx       # Work grid
│   │   └── [slug]/        # Dynamic project detail
│   ├── contact/           # Contact page
│   └── api/contact/       # Form submission endpoint
├── components/
│   ├── ui/                # Base components (Button, Input, Card, etc.)
│   ├── layout/            # Header, Footer, Logo
│   ├── home/              # Home-specific components
│   ├── work/              # Portfolio components
│   ├── contact/           # Contact form components
│   ├── animation/         # ScrollReveal, Stagger, PageTransition
│   └── providers/         # Lenis, GSAP providers
├── lib/
│   ├── data/              # Project data, navigation, site config
│   ├── utils/             # cn, format, animation, validation
│   ├── hooks/             # useLenis, useScrollTrigger, useReducedMotion
│   └── constants/         # Colors, breakpoints, z-indices
├── styles/                # Global CSS, variables, animations
└── types/                 # TypeScript definitions
```

## Data Flow

```
Project Data (lib/data/projects.ts)
    │
    ├─→ Work Page (ProjectGrid → ProjectCard)
    ├─→ Home Page (WorkPreview)
    └─→ Project Detail Page (ProjectHero → SectionBlock × 5)
```

## Animation Architecture

### Lenis + GSAP ScrollTrigger Integration
1. Lenis initializes smooth scroll in `LenisProvider`
2. GSAP registers ScrollTrigger in `GSAPProvider`
3. Lenis `on('scroll')` triggers `ScrollTrigger.update()`
4. GSAP ticker drives Lenis `raf()`

### Component Patterns
- **ScrollReveal**: Wrapper for single-element scroll animations
- **StaggerContainer/StaggerItem**: Staggered children animations
- **PageTransition**: Framer Motion page transitions

### Performance Guidelines
- Use `gsap.context()` for automatic cleanup
- Prefer `transform` over layout properties
- Limit simultaneous ScrollTriggers
- Test on low-end devices

## CMS Migration Path (Phase 2+)

Current: `lib/data/projects.ts` (local TypeScript)
Target: Sanity/Contentful headless CMS

Migration steps:
1. Keep TypeScript interfaces in `types/project.ts`
2. Create CMS schema matching Project type
3. Add API layer in `lib/data/projects.ts` (swap implementation)
4. Update `generateStaticParams` for dynamic routes
5. Add preview mode for draft content

## SEO Strategy
- Static generation for all project pages
- Dynamic metadata per project
- JSON-LD structured data for case studies
- Open Graph / Twitter cards
- Sitemap.xml generation (next-sitemap)

## Performance Targets
- LCP < 2.5s
- CLS < 0.1
- FID < 100ms
- Lighthouse Score > 90

## Accessibility
- Semantic HTML
- ARIA labels where needed
- Focus management
- Reduced motion support
- Color contrast (WCAG AA)
- Keyboard navigation
