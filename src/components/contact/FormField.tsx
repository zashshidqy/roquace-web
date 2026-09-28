'use client';

import {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
} from 'react';
import { cn } from '@/lib/utils/cn';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  type?: 'text' | 'email' | 'tel' | 'url';
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, label, error, hint, id, type = 'text', ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        <label
          htmlFor={fieldId}
          className="mb-2 block text-body-sm font-medium text-roquace-warm-white"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={fieldId}
          type={type}
          className={cn(
            'w-full border bg-roquace-black px-4 py-3 text-roquace-warm-white placeholder-roquace-soft-gray/50',
            'transition-colors duration-200',
            'focus:border-transparent focus:outline-none focus:ring-2 focus:ring-roquace-accent-blue',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-roquace-soft-gray/30 hover:border-roquace-soft-gray/50',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${fieldId}-error`} className="mt-1.5 text-body-sm text-red-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${fieldId}-hint`} className="mt-1.5 text-body-sm text-roquace-soft-gray/70">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        <label
          htmlFor={fieldId}
          className="mb-2 block text-body-sm font-medium text-roquace-warm-white"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={fieldId}
          className={cn(
            'w-full border bg-roquace-black px-4 py-3 text-roquace-warm-white placeholder-roquace-soft-gray/50',
            'min-h-[120px] resize-y transition-colors duration-200',
            'focus:border-transparent focus:outline-none focus:ring-2 focus:ring-roquace-accent-blue',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-roquace-soft-gray/30 hover:border-roquace-soft-gray/50',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${fieldId}-error`} className="mt-1.5 text-body-sm text-red-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${fieldId}-hint`} className="mt-1.5 text-body-sm text-roquace-soft-gray/70">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

TextareaField.displayName = 'TextareaField';

export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ className, label, error, hint, id, options, placeholder, ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        <label
          htmlFor={fieldId}
          className="mb-2 block text-body-sm font-medium text-roquace-warm-white"
        >
          {label}
        </label>
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
          aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
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
        {hint && !error && (
          <p id={`${fieldId}-hint`} className="mt-1.5 text-body-sm text-roquace-soft-gray/70">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

SelectField.displayName = 'SelectField';
