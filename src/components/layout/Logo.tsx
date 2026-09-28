'use client';

import { cn } from '@/lib/utils/cn';

interface LogoProps {
  variant?: 'full' | 'mark';
  color?: 'black' | 'white';
  className?: string;
  width?: number;
  height?: number;
  'aria-label'?: string;
}

const logoMap = {
  full: {
    black: '/images/logos/Logo-Black-Full-TM.svg',
    white: '/images/logos/Logo-White-Full-TM.svg',
  },
  mark: {
    black: '/images/logos/Logo-Black-TM.svg',
    white: '/images/logos/Logo-White-TM.svg',
  },
};

export function Logo({
  variant = 'full',
  color = 'black',
  className,
  width,
  height,
  'aria-label': ariaLabel,
}: LogoProps) {
  const src = logoMap[variant][color];
  const label = ariaLabel || 'ROQUACE. Digital';

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={label}
      width={width}
      height={height}
      className={cn('block', className)}
      loading="lazy"
      decoding="async"
    />
  );
}

export function LogoText({
  className,
  color = 'warm-white',
}: {
  className?: string;
  color?: 'warm-white' | 'black';
}) {
  return (
    <span
      className={cn('font-display font-medium tracking-tight', `text-roquace-${color}`, className)}
    >
      ROQUACE<span className="text-roquace-accent-blue">.</span>
    </span>
  );
}
