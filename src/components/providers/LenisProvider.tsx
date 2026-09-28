'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // smooth and smoothTouch are not in Lenis 1.1.0 options
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    // Make lenis globally accessible for GSAP ScrollTrigger
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis;
    }

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== 'undefined') {
        (window as any).lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
}
