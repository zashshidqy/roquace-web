import { z } from 'zod';

export const emailSchema = z.string().email('Invalid email address');
export const urlSchema = z.string().url('Invalid URL').optional().or(z.literal(''));
export const requiredStringSchema = (min = 1) => z.string().min(min, 'This field is required');
export const optionalStringSchema = () => z.string().optional().or(z.literal(''));
