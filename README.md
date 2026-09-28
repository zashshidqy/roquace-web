# ROQUACE. Digital Website

> Built for what's next.

Phase 1 MVP of the ROQUACE. Digital website — a cinematic/editorial digital studio portfolio inspired by a24.raviklaassens.com.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom ROQUACE theme)
- **Animations**: GSAP + ScrollTrigger, Framer Motion
- **Smooth Scroll**: Lenis
- **Forms**: React Hook Form + Zod
- **Font**: Inter (via next/font)
- **Deployment**: Vercel

## Brand

| Property | Value |
|----------|-------|
| Primary | ROQUACE Black `#0A0A0A` |
| Background | Warm White `#F5F3EF` |
| Muted | Soft Gray `#A7A39E` |
| Accent | Digital Blue `#3B82F6` |

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero video, tagline, featured work, CTA |
| Work | `/work` | Project grid (6 projects) |
| Project Detail | `/work/[slug]` | Signature Content Format (5 sections) |
| Contact | `/contact` | Brief form with validation |

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Base components
│   ├── layout/            # Header, Footer, Logo
│   ├── home/              # Home page components
│   ├── work/              # Portfolio components
│   ├── contact/           # Contact form
│   ├── animation/         # Scroll, stagger, transitions
│   └── providers/         # Lenis, GSAP
├── lib/
│   ├── data/              # Projects, navigation, config
│   ├── utils/             # Helpers (cn, format, animation)
│   ├── hooks/             # Custom React hooks
│   └── constants/         # Design tokens
├── styles/                # Global CSS
└── types/                 # TypeScript definitions
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md) - Technical decisions, data flow
- [Component Library](docs/COMPONENT_LIBRARY.md) - All components with props
- [Animation Guide](docs/ANIMATION_GUIDE.md) - GSAP patterns, performance
- [Content Strategy](docs/CONTENT_STRATEGY.md) - Project data structure
- [Deployment](docs/DEPLOYMENT.md) - Vercel, CI/CD, monitoring
- [Changelog](docs/CHANGELOG.md) - Version history
- [TODO](docs/TODO.md) - Task tracking

## Animation Features

- **Lenis** smooth momentum scroll (1.2s duration)
- **GSAP ScrollTrigger** fade + translate-Y reveals
- **Staggered** entrance animations (0.1s delay)
- **Hero video** custom controls (play/pause/mute/maximize)
- **Project cards** hover lift + preview reveal
- **Framer Motion** page transitions (fade + slide)
- **Reduced motion** support via `prefers-reduced-motion`

## Project Data

Projects defined in `src/lib/data/projects.ts` with Signature Content Format:
```
Concept → Approach → Design → Final → Lesson
```

Each project includes:
- Metadata (client, year, category, type)
- Hero image/video, thumbnail, preview images
- 5 content sections with images/videos
- Testimonial (for client work)
- Tech stack, external links

## CMS Migration Ready

Current: Local TypeScript files
Target: Sanity/Contentful (Phase 2+)

Interfaces in `src/types/project.ts` remain stable.

## Accessibility

- Semantic HTML5
- ARIA labels & roles
- Focus management
- Color contrast (WCAG AA)
- Keyboard navigation
- Reduced motion support
- Skip to content link

## Performance Targets

- LCP < 2.5s
- CLS < 0.1
- FID < 100ms
- Lighthouse > 90

## License

Proprietary - ROQUACE. Digital
