'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'muted' | 'success' | 'type';
  size?: 'sm' | 'md';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-roquace-soft-gray/20 text-roquace-warm-white border border-roquace-soft-gray/30',
      accent:
        'bg-roquace-accent-blue/20 text-roquace-accent-blue border border-roquace-accent-blue/30',
      muted: 'bg-roquace-soft-gray/10 text-roquace-soft-gray border border-roquace-soft-gray/20',
      success: 'bg-green-500/20 text-green-400 border border-green-500/30',
      type: 'bg-roquace-black text-roquace-warm-white border border-roquace-soft-gray/30',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-caption',
      md: 'px-3 py-1 text-body-sm',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border font-medium transition-colors duration-200',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
