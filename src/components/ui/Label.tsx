'use client';

import { forwardRef, LabelHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn('mb-2 block text-body-sm font-medium text-roquace-warm-white', className)}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';
