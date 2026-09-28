'use client';

import { ToastProvider } from '@/components/ui/Toast';
import { ReactNode } from 'react';

export function ToastProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
