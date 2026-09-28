import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  businessType: z.string().min(2, 'Please describe your business'),
  needs: z.string().min(10, 'Please describe your needs in more detail'),
  budget: z.enum(['under-10k', '10k-25k', '25k-50k', '50k-100k', '100k+'], {
    required_error: 'Please select a budget range',
  }),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const BUDGET_OPTIONS = [
  { value: 'under-10k', label: 'Under $10K' },
  { value: '10k-25k', label: '$10K - $25K' },
  { value: '25k-50k', label: '$25K - $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k+', label: '$100K+' },
] as const;
