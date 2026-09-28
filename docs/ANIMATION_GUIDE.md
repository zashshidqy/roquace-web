# Animation Guide

## Principles
- **Quiet confidence**: Animations feel precise and calm, not flashy
- **Performance first**: 60fps on mobile, respect `prefers-reduced-motion`
- **Purposeful**: Every animation guides attention or provides feedback
- **Consistent**: Shared easings, durations, patterns across components

## Core Libraries

### Lenis (Smooth Scroll)
```typescript
// Initialization in LenisProvider
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
});

// Sync with GSAP
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
```

### GSAP + ScrollTrigger
```typescript
// Register once
gsap.registerPlugin(ScrollTrigger);

// Default config
gsap.defaults({
  ease: 'power4.out',
  duration: 0.8,
});
```

### Framer Motion
```typescript
// Page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};
const transition = { type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.5 };
```

## Standard Easings & Durations

| Name | Value | Usage |
|------|-------|-------|
| `EASE_OUT_EXPO` | `power4.out` | Default entrance |
| `EASE_SPRING` | `back.out(1.2)` | Playful micro-interactions |
| `DURATION_FAST` | `0.4s` | Hover, taps |
| `DURATION_NORMAL` | `0.6s` | Standard reveals |
| `DURATION_SLOW` | `1.0s` | Hero, major sections |

## Animation Patterns

### 1. Scroll Reveal (Fade + Translate Y)
```typescript
gsap.fromTo(
  element,
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  }
);
```

### 2. Stagger Reveal
```typescript
gsap.fromTo(
  items,
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 85%',
    },
  }
);
```

### 3. Hero Video Controls
Custom play/pause/mute with "TAP FOR SOUND" indicator.
- Default: muted, auto-playing
- Click video or button to toggle play
- Mute button toggles audio
- Visual feedback on all interactions

### 4. Project Card Hover
```typescript
// Framer Motion
whileHover={{ y: -8, scale: 1.02 }}
transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}

// Preview overlay
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

### 5. Page Transitions
```typescript
// AnimatePresence in layout
<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={transition}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

## Component-Specific Animations

### Home Page
- Hero video: Auto-play, loop, custom controls
- Tagline: Staggered fade + slide up (0.2s delay each)
- WorkPreview: Staggered cards (0.1s each)
- CTA: Fade + slide up

### Work Grid
- Cards: Staggered entrance (0.1s each)
- Hover: Lift + preview reveal
- Filter buttons: Scale tap feedback

### Project Detail
- Hero: Fade in content over video
- Sections: Alternating layout, scroll-triggered
- Images: Scale reveal on scroll
- Testimonial: Centered fade in

### Contact Form
- Field focus: Ring animation
- Validation: Shake on error
- Submit: Loading spinner
- Success: Slide down toast

## Reduced Motion Support

```typescript
// Hook
const prefersReducedMotion = useReducedMotion();

// In components
const animationProps = prefersReducedMotion
  ? { initial: false, animate: { opacity: 1 } }
  : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
```

CSS fallback:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Performance Checklist

- [ ] Use `transform`/`opacity` only (GPU accelerated)
- [ ] Avoid layout thrashing (width, height, top, left)
- [ ] Limit ScrollTriggers to visible sections
- [ ] Use `gsap.context()` for cleanup
- [ ] Lazy-load below-fold images
- [ ] Compress videos (H.264 + WebM)
- [ ] Test on 3G / low-end devices
- [ ] Monitor Core Web Vitals

## Debugging

```typescript
// Enable ScrollTrigger markers
scrollTrigger: {
  markers: true, // Visual debugging
}

// GSAP debug
gsap.globalTimeline.timeScale(0.5); // Slow motion
```

## Common Issues

| Issue | Solution |
|-------|----------|
| Lenis + ScrollTrigger conflict | Ensure Lenis `on('scroll')` calls `ScrollTrigger.update()` |
| Animations not triggering | Check `start`/`end` values, ensure trigger in viewport |
| Flicker on load | Set initial state in CSS, animate from in JS |
| Mobile performance | Reduce complexity, disable non-essential animations |
