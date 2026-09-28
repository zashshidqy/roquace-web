# Component Library

## UI Primitives (`src/components/ui/`)

### Button
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md" loading={false}>
  Label
</Button>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| loading | `boolean` | `false` | Shows spinner |
| disabled | `boolean` | `false` | Disables button |

### Input / Textarea
```tsx
import { Input, Textarea } from '@/components/ui';

<Input label="Name" placeholder="John" error="Required" />
<Textarea label="Message" placeholder="Details..." />
```

**Props:** Extends native HTML props + `label`, `error`, `hint`

### Card
```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui';

<Card variant="default" padding="md">
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Actions</CardFooter>
</Card>
```

**Variants:** `default`, `elevated`, `outlined`

### Badge
```tsx
import { Badge } from '@/components/ui';

<Badge variant="accent" size="sm">Label</Badge>
```

**Variants:** `default`, `accent`, `muted`, `success`, `type`

---

## Layout Components (`src/components/layout/`)

### Header
```tsx
import { Header } from '@/components/layout';
<Header />
```
Fixed, responsive navigation with logo, links, mobile menu.

### Footer
```tsx
import { Footer } from '@/components/layout';
<Footer />
```
Multi-column footer with navigation, social links, legal.

### Logo
```tsx
import { Logo } from '@/components/layout';

<Logo variant="full" color="black" width={140} height={36} />
<Logo variant="mark" color="white" width={36} height={36} />
```

---

## Home Components (`src/components/home/`)

### Hero
```tsx
import { Hero } from '@/components/home';

<Hero
  videoSrc="/videos/hero.mp4"
  posterSrc="/images/poster.jpg"
  webmSrc="/videos/hero.webm"
/>
```
Full-screen video background with custom controls (play/pause, mute, "TAP FOR SOUND").

### Tagline
```tsx
import { Tagline } from '@/components/home';
<Tagline />
```
Editorial headline "Built for what's next." with CTAs.

### WorkPreview
```tsx
import { WorkPreview } from '@/components/home';
<WorkPreview count={3} />
```
Featured project cards linking to detail pages.

### CTA
```tsx
import { CTA } from '@/components/home';
<CTA />
```
Centered call-to-action section.

---

## Work Components (`src/components/work/`)

### ProjectGrid
```tsx
import { ProjectGrid } from '@/components/work';
<ProjectGrid initialCount={6} />
```
Responsive grid of ProjectCard components.

### ProjectCard
```tsx
import { ProjectCard } from '@/components/work';
<ProjectCard project={project} index={0} />
```
Hover-reveal card with thumbnail, badges, preview images on hover.

### ProjectHero
```tsx
import { ProjectHero } from '@/components/work';
<ProjectHero project={project} />
```
Full-bleed hero with project metadata, tech stack, links.

### SectionBlock
```tsx
import { SectionBlock } from '@/components/work';
<SectionBlock section={section} index={0} />
```
Signature Content Format section (Concept→Approach→Design→Final→Lesson).
Alternating text/media layout with scroll animations.

### ProjectDetail
```tsx
import { ProjectDetail } from '@/components/work';
<ProjectDetail project={project} />
```
Complete project page: Hero → 5 Sections → Testimonial → CTA.

---

## Animation Components (`src/components/animation/`)

### ScrollReveal
```tsx
import { ScrollReveal } from '@/components/animation';

<ScrollReveal y={40} duration={0.8} stagger={0.1}>
  <ChildComponent />
</ScrollReveal>
```
GSAP ScrollTrigger wrapper for entrance animations.

### StaggerContainer / StaggerItem
```tsx
import { StaggerContainer, StaggerItem } from '@/components/animation';

<StaggerContainer stagger={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```
Staggered children animations on scroll.

### PageTransition
```tsx
import { PageTransition } from '@/components/animation';

<PageTransition>
  <PageContent />
</PageTransition>
```
Framer Motion page enter/exit transitions.

---

## Contact Components (`src/components/contact/`)

### ContactForm
```tsx
import { ContactForm } from '@/components/contact';
<ContactForm />
```
Complete form with validation, submission handling, success state.

---

## Providers (`src/components/providers/`)

### LenisProvider
```tsx
import { LenisProvider } from '@/components/providers';

<LenisProvider>
  <App />
</LenisProvider>
```
Initializes Lenis smooth scroll, exposes to window for GSAP sync.

### GSAPProvider
```tsx
import { GSAPProvider } from '@/components/providers';

<GSAPProvider>
  <App />
</GSAPProvider>
```
Registers GSAP plugins, syncs ScrollTrigger with Lenis.
