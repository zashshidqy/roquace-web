# TODO - ROQUACE. Digital Phase 1 MVP

## Phase 1: Foundation & Setup
- [x] Initialize Next.js 14 + TypeScript + Tailwind
- [x] Configure Tailwind with ROQUACE theme (colors, fonts, spacing)
- [x] Set up ESLint, Prettier, TypeScript strict mode
- [x] Create LenisProvider for smooth scroll
- [x] Create GSAPProvider for animation sync
- [x] Build UI primitives: Button, Input, Textarea, Label, Card, Badge
- [x] Build Layout: Header, Footer, Logo
- [x] Set up project data structure (`lib/data/projects.ts`)
- [x] Create placeholder assets (logos, images, video)

## Phase 2: Home Page
- [x] Hero component with video player
- [x] Custom video controls (play/pause, mute, "TAP FOR SOUND")
- [x] Editorial tagline with responsive clamp() typography
- [x] WorkPreview: 3 featured project cards
- [x] CTA section
- [x] ScrollTrigger animations on home page

## Phase 3: Work/Portfolio
- [x] ProjectGrid with 6 ProjectCard components
- [x] ProjectCard hover: scale + preview image reveal
- [x] ProjectDetail page with Signature Content Format
- [x] 5 Sections: Concept → Approach → Design → Final → Lesson
- [x] Full-width images/video alternating with text blocks
- [x] Scroll-triggered section reveals
- [x] Testimonial display
- [x] Tech stack badges
- [x] External links (live site, case study)
- [x] Category filter with 5 categories

## Phase 4: Contact & Polish
- [x] ContactForm with React Hook Form + Zod
- [x] Fields: name, email, business type, needs, budget
- [x] Form submission API route
- [x] Toast success/error states
- [x] Page transitions (Framer Motion)
- [x] Reduced motion support
- [x] Accessibility audit (keyboard, ARIA, contrast)
- [x] Performance optimization
- [x] Core Web Vitals check
- [x] SEO: sitemap.xml, robots.txt, metadata

## Phase 5: CI/CD & Documentation
- [x] GitHub Actions CI workflow (lint, type-check, build)
- [x] Vercel preview/production deployment config
- [x] Lighthouse CI budget config
- [x] Prettier formatting
- [x] ESLint zero warnings
- [x] Complete documentation:
  - [x] ARCHITECTURE.md
  - [x] COMPONENT_LIBRARY.md
  - [x] ANIMATION_GUIDE.md
  - [x] CONTENT_STRATEGY.md
  - [x] DEPLOYMENT.md
  - [x] CHANGELOG.md
  - [x] TODO.md

## Phase 6: Asset Replacement (Post-Launch)
- [ ] Replace hero placeholder video with actual showreel
- [ ] Replace project placeholder images with real assets
- [ ] Add OG images for social sharing
- [ ] Add favicon set

## Logo Processing (User Action Required)
- [ ] Remove backgrounds from all logo PNGs
- [ ] Optimize for web (compress, WebP/AVIF)
- [ ] Create SVG versions if possible
- [ ] Verify contrast on dark (`#0A0A0A`) and light (`#F5F3EF`) backgrounds
- [ ] Place in `/public/images/logos/`

## Future Phases (Not in MVP)
- [ ] Services page
- [ ] Process page
- [ ] About page
- [ ] Insights/Blog section
- [ ] Sanity CMS integration
- [ ] Sub-brand template system
