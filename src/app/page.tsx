import { Hero } from "@/components/home/Hero";
import { Tagline } from "@/components/home/Tagline";
import { WorkPreview } from "@/components/home/WorkPreview";
import { CTA } from "@/components/home/CTA";

const heroImages = [
  "/images/projects/meridian-hero.svg",
  "/images/projects/aura-hero.svg",
  "/images/projects/vertex-hero.svg",
  "/images/projects/atelier-hero.svg",
  "/images/projects/flux-hero.svg",
  "/images/projects/solaris-hero.svg",
];

export default function HomePage() {
  return (
    <>
      <Hero images={heroImages} interval={6000} />
      <Tagline />
      <WorkPreview count={3} />
      <CTA />
    </>
  );
}