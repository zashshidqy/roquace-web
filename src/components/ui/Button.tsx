'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roquace-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-roquace-black disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'bg-roquace-accent-blue text-roquace-black hover:bg-blue-400 active:scale-[0.98]',
      secondary: 'bg-roquace-soft-gray text-roquace-black hover:bg-gray-400 active:scale-[0.98]',
      outline:
        'border border-roquace-soft-gray text-roquace-warm-white hover:bg-roquace-soft-gray/10 active:scale-[0.98]',
      ghost: 'text-roquace-warm-white hover:text-roquace-accent-blue active:scale-[0.98]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-body-sm gap-2',
      md: 'px-6 py-3 text-body-base gap-2',
      lg: 'px-8 py-4 text-body-lg gap-3',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
