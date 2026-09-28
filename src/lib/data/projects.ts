import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'meridian-hotel',
    title: 'Meridian Hotel',
    client: 'Meridian Hospitality Group',
    year: 2024,
    category: 'hospitality',
    type: 'client-work',
    tagline: 'A digital sanctuary for modern travelers.',
    heroImage: '/images/projects/meridian-hero.jpg',
    thumbnail: '/images/projects/meridian-thumb.jpg',
    previewImages: [
      '/images/projects/meridian-1.jpg',
      '/images/projects/meridian-2.jpg',
      '/images/projects/meridian-3.jpg',
    ],
    description:
      'Complete digital transformation for a boutique hotel chain, including booking engine, guest portal, and brand website.',
    testimonial: {
      quote:
        'ROQUACE understood our brand essence and translated it into a digital experience that feels as premium as our physical spaces.',
      author: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'Meridian Hospitality Group',
    },
    sections: [
      {
        type: 'concept',
        title: 'Concept',
        content:
          "Meridian approached us with a fragmented digital presence across three properties. The challenge: unify their brand narrative while preserving each hotel's unique character. We proposed a modular design system that scales across locations.",
        images: ['/images/projects/meridian-concept-1.jpg'],
      },
      {
        type: 'approach',
        title: 'Approach',
        content:
          'We conducted stakeholder workshops across all properties, mapped guest journeys, and identified friction points in the booking flow. A component-based architecture in Next.js allowed us to share 80% of code while customizing per property.',
        images: ['/images/projects/meridian-approach-1.jpg'],
      },
      {
        type: 'design',
        title: 'Design',
        content:
          "Editorial-inspired layouts with generous whitespace, custom photography art direction, and a refined color palette drawn from each property's interior design. Micro-interactions guide users through the booking journey.",
        images: [
          '/images/projects/meridian-design-1.jpg',
          '/images/projects/meridian-design-2.jpg',
        ],
      },
      {
        type: 'final',
        title: 'Final',
        content:
          'Launched across three properties simultaneously. 40% increase in direct bookings, 60% reduction in bounce rate, and consistent 4.8+ app store ratings. The design system now powers their expanding portfolio.',
        images: ['/images/projects/meridian-final-1.jpg'],
      },
      {
        type: 'lesson',
        title: 'Lesson',
        content:
          'Modular systems require upfront investment but pay dividends at scale. Client alignment on design tokens early prevented scope creep. Photography direction is as critical as UI design for hospitality brands.',
        images: [],
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Sanity CMS', 'Stripe'],
    links: {
      live: 'https://meridian-hotels.com',
      caseStudy: '/work/meridian-hotel',
    },
  },
  {
    slug: 'aura-skincare',
    title: 'Aura Skincare',
    client: 'Aura Labs',
    year: 2024,
    category: 'fashion-ecommerce',
    type: 'client-work',
    tagline: 'Clean beauty, clean code.',
    heroImage: '/images/projects/aura-hero.jpg',
    thumbnail: '/images/projects/aura-thumb.jpg',
    previewImages: ['/images/projects/aura-1.jpg', '/images/projects/aura-2.jpg'],
    description:
      'Headless e-commerce platform for a direct-to-consumer skincare brand with subscription management and quiz-based personalization.',
    testimonial: {
      quote:
        'The quiz funnel ROQUACE built increased our conversion rate by 35%. They think like business partners, not just developers.',
      author: 'Marcus Webb',
      role: 'Founder',
      company: 'Aura Labs',
    },
    sections: [
      {
        type: 'concept',
        title: 'Concept',
        content:
          'Aura needed to differentiate in a saturated DTC beauty market. Their competitive advantage: science-backed formulations and transparent ingredient sourcing. We built the experience around trust and education.',
        images: ['/images/projects/aura-concept-1.jpg'],
      },
      {
        type: 'approach',
        title: 'Approach',
        content:
          'Headless Shopify Plus backend with a custom Next.js frontend. Built a skin diagnostic quiz that maps responses to personalized routines. Subscription logic handles pause, swap, and frequency changes without support tickets.',
        images: ['/images/projects/aura-approach-1.jpg'],
      },
      {
        type: 'design',
        title: 'Design',
        content:
          'Minimal, laboratory-inspired aesthetic. Product pages feature interactive ingredient glossaries. Color system adapts to product collections. Motion design reinforces the "science meets nature" narrative.',
        images: ['/images/projects/aura-design-1.jpg', '/images/projects/aura-design-2.jpg'],
      },
      {
        type: 'final',
        title: 'Final',
        content:
          'Launched with 3 SKUs, scaled to 12 within 6 months. Quiz completion rate: 68%. Subscription revenue: 42% of total. Site speed scores: 95+ across Core Web Vitals.',
        images: ['/images/projects/aura-final-1.jpg'],
      },
      {
        type: 'lesson',
        title: 'Lesson',
        content:
          'Headless commerce adds complexity—only worth it when the frontend experience is a differentiator. Quiz data became a product development roadmap. Subscription UX is retention UX.',
        images: [],
      },
    ],
    techStack: [
      'Next.js',
      'Shopify Hydrogen',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Klaviyo',
    ],
    links: {
      live: 'https://aura-skincare.com',
      caseStudy: '/work/aura-skincare',
    },
  },
  {
    slug: 'vertex-ventures',
    title: 'Vertex Ventures',
    client: 'Vertex Ventures',
    year: 2023,
    category: 'corporate',
    type: 'client-work',
    tagline: 'Venture capital, reimagined for founders.',
    heroImage: '/images/projects/vertex-hero.jpg',
    thumbnail: '/images/projects/vertex-thumb.jpg',
    previewImages: ['/images/projects/vertex-1.jpg', '/images/projects/vertex-2.jpg'],
    description:
      'Brand website and portfolio platform for a Southeast Asian venture capital firm, showcasing 50+ portfolio companies with dynamic filtering.',
    testimonial: {
      quote:
        'Our portfolio page is now the first thing we show LPs. ROQUACE turned our data into a narrative.',
      author: 'Priya Sharma',
      role: 'Partner',
      company: 'Vertex Ventures',
    },
    sections: [
      {
        type: 'concept',
        title: 'Concept',
        content:
          'VC websites are typically static brochures. Vertex wanted a living platform that showcases portfolio momentum in real-time. The site needed to serve founders (applying), LPs (reporting), and press (storytelling).',
        images: ['/images/projects/vertex-concept-1.jpg'],
      },
      {
        type: 'approach',
        title: 'Approach',
        content:
          'Built a portfolio CMS that syncs with their internal deal flow data. Dynamic filtering by sector, stage, geography. Founder portal for application tracking. Automated LP report generation from portfolio data.',
        images: ['/images/projects/vertex-approach-1.jpg'],
      },
      {
        type: 'design',
        title: 'Design',
        content:
          'Data-dense but breathable. Dark mode default (finance convention). Interactive portfolio grid with smooth filtering animations. Typography system scales from dense tables to editorial feature stories.',
        images: ['/images/projects/vertex-design-1.jpg', '/images/projects/vertex-design-2.jpg'],
      },
      {
        type: 'final',
        title: 'Final',
        content:
          '40% increase in quality inbound applications. LP reporting time reduced from days to minutes. Portfolio companies now use their Vertex profile as their primary web presence.',
        images: ['/images/projects/vertex-final-1.jpg'],
      },
      {
        type: 'lesson',
        title: 'Lesson',
        content:
          'Data visualization must serve decisions, not decoration. Internal tooling for the client is as important as the public site. Design for the power user (analysts), progressive disclosure for everyone else.',
        images: [],
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Sanity CMS', 'Airtable Sync'],
    links: {
      live: 'https://vertex.vc',
      caseStudy: '/work/vertex-ventures',
    },
  },
  {
    slug: 'atelier-living',
    title: 'Atelier Living',
    client: 'Concept Project',
    year: 2024,
    category: 'service-property',
    type: 'concept-work',
    tagline: 'Where craftsmanship meets commerce.',
    heroImage: '/images/projects/atelier-hero.jpg',
    thumbnail: '/images/projects/atelier-thumb.jpg',
    previewImages: [
      '/images/projects/atelier-1.jpg',
      '/images/projects/atelier-2.jpg',
      '/images/projects/atelier-3.jpg',
    ],
    description:
      'Concept for a curated marketplace connecting artisan furniture makers with design-conscious buyers. Includes maker profiles, commission system, and AR visualization.',
    sections: [
      {
        type: 'concept',
        title: 'Concept',
        content:
          'Independent furniture makers struggle with digital presence. Buyers want authentic stories, not mass-produced catalogs. Atelier Living bridges this gap: a juried platform where craft meets commerce.',
        images: ['/images/projects/atelier-concept-1.jpg'],
      },
      {
        type: 'approach',
        title: 'Approach',
        content:
          'Marketplace model with curated onboarding. Maker dashboard for inventory, orders, and storytelling. AR room visualization using WebXR. Commission-based revenue. Community features: process journals, material libraries.',
        images: ['/images/projects/atelier-approach-1.jpg'],
      },
      {
        type: 'design',
        title: 'Design',
        content:
          'Warm, tactile aesthetic. Product imagery treated as editorial spreads. Maker profiles feel like studio visits. Color palette drawn from natural materials: walnut, linen, clay, steel. Motion feels hand-crafted.',
        images: ['/images/projects/atelier-design-1.jpg', '/images/projects/atelier-design-2.jpg'],
      },
      {
        type: 'final',
        title: 'Final',
        content:
          'Concept validated through 50+ maker interviews and 200+ buyer surveys. Technical prototype built for AR visualization. Business model projected to break even at 200 active makers.',
        images: ['/images/projects/atelier-final-1.jpg'],
      },
      {
        type: 'lesson',
        title: 'Lesson',
        content:
          'Two-sided marketplaces need liquidity mechanics from day one. Maker onboarding friction must be near-zero. AR is a differentiator but not a purchase driver—photography still converts.',
        images: [],
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'WebXR', 'Stripe Connect'],
    links: {
      caseStudy: '/work/atelier-living',
    },
  },
  {
    slug: 'flux-finance',
    title: 'Flux Finance',
    client: 'Concept Project',
    year: 2024,
    category: 'corporate',
    type: 'concept-work',
    tagline: 'Banking that breathes.',
    heroImage: '/images/projects/flux-hero.jpg',
    thumbnail: '/images/projects/flux-thumb.jpg',
    previewImages: ['/images/projects/flux-1.jpg', '/images/projects/flux-2.jpg'],
    description:
      'Concept for a neobank focused on freelancers and creators. Features: income smoothing, tax automation, and revenue-based credit.',
    sections: [
      {
        type: 'concept',
        title: 'Concept',
        content:
          'Traditional banking fails variable-income earners. Freelancers face cash flow gaps, tax surprises, and credit invisibility. Flux reimagines banking around income patterns, not account balances.',
        images: ['/images/projects/flux-concept-1.jpg'],
      },
      {
        type: 'approach',
        title: 'Approach',
        content:
          'API-first banking stack (Banking-as-a-Service). ML-powered income prediction for cash flow smoothing. Automated tax withholding per jurisdiction. Revenue-based credit scoring using platform data.',
        images: ['/images/projects/flux-approach-1.jpg'],
      },
      {
        type: 'design',
        title: 'Design',
        content:
          'Calm, reassuring interface. Data visualization for financial health (not just balances). Adaptive color system: green for healthy, amber for attention, red for action needed. Motion reduces financial anxiety.',
        images: ['/images/projects/flux-design-1.jpg'],
      },
      {
        type: 'final',
        title: 'Final',
        content:
          'Concept validated with 300+ freelancer interviews. Regulatory pathway mapped for 3 jurisdictions. Technical prototype for income smoothing algorithm. Pitch deck created for pre-seed fundraising.',
        images: ['/images/projects/flux-final-1.jpg'],
      },
      {
        type: 'lesson',
        title: 'Lesson',
        content:
          'Fintech trust is earned through transparency, not marketing. Regulatory strategy dictates product roadmap. "Move fast and break things" doesn\'t apply to people\'s money.',
        images: [],
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Plaid API', 'AWS'],
    links: {
      caseStudy: '/work/flux-finance',
    },
  },
  {
    slug: 'solaris-energy',
    title: 'Solaris Energy',
    client: 'Concept Project',
    year: 2024,
    category: 'corporate',
    type: 'concept-work',
    tagline: 'Powering the transition to renewable energy.',
    heroImage: '/images/projects/solaris-hero.svg',
    thumbnail: '/images/projects/solaris-thumb.svg',
    previewImages: [
      '/images/projects/solaris-1.svg',
      '/images/projects/solaris-2.svg',
      '/images/projects/solaris-3.svg',
    ],
    description:
      'Concept for a renewable energy marketplace connecting solar installers with homeowners. Includes energy savings calculator, installer marketplace, and financing options.',
    sections: [
      {
        type: 'concept',
        title: 'Concept',
        content:
          'Solar adoption is hindered by complexity: finding installers, understanding savings, navigating incentives. Solaris simplifies this with a unified marketplace that matches homeowners with vetted installers and shows real-time ROI calculations.',
        images: ['/images/projects/solaris-concept-1.svg'],
      },
      {
        type: 'approach',
        title: 'Approach',
        content:
          'Two-sided marketplace model. Homeowner side: address-based solar potential analysis using satellite imagery, savings calculator with local utility rates, incentive finder. Installer side: lead management, proposal generator, project tracking. Revenue: transaction fee + SaaS subscription.',
        images: ['/images/projects/solaris-approach-1.svg'],
      },
      {
        type: 'design',
        title: 'Design',
        content:
          'Clean, trustworthy aesthetic. Data visualization for energy production/savings. Color system: solar yellow accents on dark base (energy at night). Interactive roof designer with 3D preview. Mobile-first for on-site installer use.',
        images: ['/images/projects/solaris-design-1.svg', '/images/projects/solaris-design-2.svg'],
      },
      {
        type: 'final',
        title: 'Final',
        content:
          'Concept validated with 200+ homeowner surveys and 50+ installer interviews. Technical prototype for satellite-based roof analysis. Unit economics modeled: CAC <$200, LTV >$2,000. Ready for pre-seed fundraising.',
        images: ['/images/projects/solaris-final-1.svg'],
      },
      {
        type: 'lesson',
        title: 'Lesson',
        content:
          'Solar is a high-consideration purchase—trust signals matter more than features. Installer onboarding must be dead simple. Regulatory variation by jurisdiction is the biggest scaling challenge, not technology.',
        images: [],
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Mapbox GL', 'Three.js', 'Stripe'],
    links: {
      caseStudy: '/work/solaris-energy',
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByType(type: Project['type']): Project[] {
  return projects.filter((p) => p.type === type);
}

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
