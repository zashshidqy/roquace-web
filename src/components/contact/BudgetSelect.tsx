'use client';

import { forwardRef, SelectHTMLAttributes } from 'react';
import { BUDGET_OPTIONS } from '@/types/contact';
import { cn } from '@/lib/utils/cn';

export interface BudgetSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  placeholder?: string;
}

export const BudgetSelect = forwardRef<HTMLSelectElement, BudgetSelectProps>(
  ({ className, label, error, placeholder = 'Select budget range', id, ...props }, ref) => {
    const fieldId = id || 'budget';

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={fieldId}
            className="mb-2 block text-body-sm font-medium text-roquace-warm-white"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={fieldId}
          className={cn(
            'w-full appearance-none border bg-roquace-black px-4 py-3 text-roquace-warm-white',
            'transition-colors duration-200',
            'focus:border-transparent focus:outline-none focus:ring-2 focus:ring-roquace-accent-blue',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-roquace-soft-gray/30 hover:border-roquace-soft-gray/50',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={`${fieldId}-error`} className="mt-1.5 text-body-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

BudgetSelect.displayName = 'BudgetSelect';
