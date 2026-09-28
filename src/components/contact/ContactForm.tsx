'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData, BUDGET_OPTIONS } from '@/types/contact';
import { Input, Textarea, Label } from '@/components/ui';
import { Button } from '@/components/ui';
import { useToast } from '@/components/ui/Toast';
import { cn } from '@/lib/utils/cn';

export function ContactForm() {
  const { addToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      addToast({
        type: 'success',
        title: 'Message sent successfully!',
        message: "We'll get back to you within 24 hours.",
        duration: 5000,
      });

      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      addToast({
        type: 'error',
        title: 'Failed to send message',
        message: 'Please try again or email us directly at hello@roquace.digital',
        duration: 5000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="john@company.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div>
        <Label>Business Type</Label>
        <Input
          placeholder="e.g., SaaS startup, hospitality group, e-commerce brand"
          error={errors.businessType?.message}
          {...register('businessType')}
        />
      </div>

      <div>
        <Label>What do you need?</Label>
        <Textarea
          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
          error={errors.needs?.message}
          {...register('needs')}
        />
      </div>

      <div>
        <Label>Budget Range</Label>
        <select
          {...register('budget')}
          className={cn(
            'w-full border bg-roquace-black px-4 py-3 text-roquace-warm-white',
            'appearance-none transition-colors duration-200',
            'focus:border-transparent focus:outline-none focus:ring-2 focus:ring-roquace-accent-blue',
            errors.budget
              ? 'border-red-500 focus:ring-red-500'
              : 'border-roquace-soft-gray/30 hover:border-roquace-soft-gray/50'
          )}
          aria-invalid={errors.budget ? 'true' : 'false'}
        >
          <option value="">Select budget range</option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p className="mt-1.5 text-body-sm text-red-500" role="alert">
            {errors.budget.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" size="lg" loading={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Brief'}
      </Button>

      <p className="text-center text-body-sm text-roquace-soft-gray/50">
        By submitting, you agree to our{' '}
        <a href="/privacy" className="text-roquace-accent-blue hover:underline">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms" className="text-roquace-accent-blue hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
}