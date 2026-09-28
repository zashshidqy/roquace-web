# Deployment Guide

## Vercel (Recommended)

### Quick Start
1. Push to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Build Settings
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Environment Variables
| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL (e.g., https://roquace.digital) |
| `NEXT_PUBLIC_SITE_NAME` | Yes | Site name for metadata |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics Measurement ID |
| `CONTACT_EMAIL` | No | Email for form submissions |
| `RESEND_API_KEY` | No | Resend API key for transactional emails |

### Custom Domain
1. Add domain in Vercel project settings
2. Configure DNS:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`
3. Enable HTTPS (automatic)

## Asset Optimization

### Images
- Next.js Image Optimization API (automatic)
- Configure `next.config.js` for remote patterns
- Use WebP/AVIF formats

### Videos
- Host on Bunny CDN, Cloudinary, or Mux
- Use signed URLs for private content
- Compress: H.264 (MP4) + VP9 (WebM)
- Poster images for LCP

### Fonts
- Self-hosted via `next/font` (Inter)
- Preload critical fonts
- `font-display: swap`

## CI/CD Pipeline

### GitHub Actions (`.github/workflows/ci.yml`)
```yaml
name: CI
on: [push, pull_request]
jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run format:check
      - run: npm run build
```

### Preview Deployments
- Every PR gets a preview URL
- Automatic on push to main → production

## Performance Monitoring

### Core Web Vitals
- Vercel Analytics (built-in)
- Web Vitals library for custom tracking
- Target: LCP < 2.5s, CLS < 0.1, FID < 100ms

### Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
- uses: treosh/lighthouse-ci-action@v11
  with:
    urls: |
      https://roquace.digital
      https://roquace.digital/work
      https://roquace.digital/work/meridian-hotel
    budgetPath: ./lighthouse-budget.json
```

## Edge Cases

### Large Videos
- Use Bunny CDN / Mux for streaming
- Implement video preload strategy
- Consider adaptive bitrate (HLS/DASH)

### Form Spam
- Add honeypot field
- Rate limiting via Vercel Edge Functions
- reCAPTCHA v3 (invisible)

### SEO for Dynamic Routes
- `generateStaticParams` for static generation
- `generateMetadata` for dynamic metadata
- Sitemap via `next-sitemap`

## Rollback
```bash
# Vercel CLI
vercel rollback [deployment-url]

# Or via dashboard: Deployments → ... → Promote to Production
```

## Monitoring Checklist

### Pre-deploy
- [ ] `npm run lint` passes
- [ ] `npm run type-check` passes
- [ ] `npm run build` succeeds
- [ ] All pages render without errors
- [ ] Forms submit successfully
- [ ] Animations work on mobile

### Post-deploy
- [ ] Core Web Vitals in range
- [ ] No console errors
- [ ] Forms deliver emails
- [ ] Analytics tracking
- [ ] 404 page works
- [ ] Sitemap accessible

## Staging Environment
- Deploy `develop` branch to `staging.roquace.digital`
- Protected with Vercel Authentication
- Shared with stakeholders for review
