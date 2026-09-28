# Changelog

All notable changes to ROQUACE. Digital website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-09-25

### Added
- **Phase 1 MVP** - Initial release
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- GSAP + ScrollTrigger + Lenis + Framer Motion animation stack
- Home page with video hero, editorial tagline, work preview, CTA
- Work/Portfolio grid with 6 concept/client projects
- Project detail pages with Signature Content Format (5 sections)
- Contact/Brief form with React Hook Form + Zod validation
- Responsive design (mobile-first)
- Dark theme (ROQUACE Black `#0A0A0A`) with Warm White `#F5F3EF`
- Accent Blue `#3B82F6` for interactive elements
- Inter font via next/font
- SEO metadata, Open Graph, Twitter cards
- Sitemap.xml and robots.txt generation
- Accessibility: semantic HTML, ARIA, reduced motion support
- CI/CD: GitHub Actions workflow (lint, type-check, build, deploy)
- Lighthouse CI performance budgets
- Documentation: Architecture, Component Library, Animation Guide, Content Strategy, Deployment

### Project Data (6 Projects)
1. **Meridian Hotel** (Client Work) - Hospitality
2. **Aura Skincare** (Client Work) - Fashion/E-commerce
3. **Vertex Ventures** (Client Work) - Corporate
4. **Atelier Living** (Concept Work) - Service/Property
5. **Flux Finance** (Concept Work) - Corporate
6. **Solaris Energy** (Concept Work) - Corporate

### Technical
- Lenis smooth scroll (1.2s duration, exponential easing)
- GSAP ScrollTrigger for scroll-based reveals
- Framer Motion for page transitions (fade + slide)
- Custom video player with play/pause/mute/maximize
- Staggered entrance animations (0.1s delay)
- Hover micro-interactions on cards/buttons
- Type-safe project data with Zod validation
- Zero ESLint warnings
- Prettier formatting enforced

---

## Upcoming

### [1.1.0] - Phase 2
- Services page (Build / Maintain / Improve)
- Process page (6-step timeline)
- About page (positioning, values)
- Sanity CMS integration
- Blog/Insights section

### [1.2.0] - Phase 3
- SEO optimization per case study
- JSON-LD structured data
- Advanced analytics
- Performance budget enforcement

### [2.0.0] - Phase 4
- Sub-brand template system (Tech, Atelier, Living)
- Multi-brand color theming
- Shared component library package
