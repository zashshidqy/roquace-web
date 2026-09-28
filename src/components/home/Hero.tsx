"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface HeroProps {
  images: string[];
  interval?: number;
}

export function Hero({ images, interval = 5000 }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered || images.length <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval, isHovered]);

  // Reset animation state
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setIsAnimating(true);
      setCurrentIndex(index);
    },
    [currentIndex, isAnimating]
  );

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [isAnimating]);

  const transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Ring Carousel */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(${direction * 15}deg) scale(${isAnimating ? 1.05 : 1})`,
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 1.02,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: index === currentIndex ? 0.1 : 0,
              }}
              className="absolute inset-0"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-roquace-black/40 via-roquace-black/20 to-roquace-black/50" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Orb Accents */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-roquace-accent-blue/10 blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-roquace-accent-blue/5 blur-3xl"
          animate={{
            x: [0, -25, 15, 0],
            y: [0, 20, -25, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-roquace-accent-blue/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-16">
        {/* Top: Logo */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/logos/Logo-White-Full-TM.png"
                alt="ROQUACE. Digital"
                width={140}
                height={36}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom: Carousel Controls & Indicators */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Prev Button */}
            <motion.button
              onClick={prevSlide}
              disabled={isAnimating}
              className={cn(
                "relative p-3 rounded-full bg-roquace-warm-white/10 backdrop-blur-sm border border-roquace-warm-white/20",
                "text-roquace-warm-white transition-all duration-300 hover:bg-roquace-warm-white/20 disabled:opacity-50 disabled:cursor-not-allowed",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roquace-accent-blue"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </motion.button>

            {/* Slide Indicators */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-roquace-warm-white/5 backdrop-blur-sm border border-roquace-warm-white/10 rounded-full">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-roquace-accent-blue w-8"
                      : "bg-roquace-warm-white/30 hover:bg-roquace-warm-white/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              disabled={isAnimating}
              className={cn(
                "relative p-3 rounded-full bg-roquace-warm-white/10 backdrop-blur-sm border border-roquace-warm-white/20",
                "text-roquace-warm-white transition-all duration-300 hover:bg-roquace-warm-white/20 disabled:opacity-50 disabled:cursor-not-allowed",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roquace-accent-blue"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Indicators */}
          <div className="md:hidden flex items-center gap-1">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-roquace-accent-blue w-6"
                    : "bg-roquace-warm-white/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-roquace-warm-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="text-caption tracking-widest">SCROLL</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}