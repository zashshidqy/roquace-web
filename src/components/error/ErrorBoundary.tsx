'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[300px] items-center justify-center px-6 animate-fade-in">
          <div className="max-w-md w-full text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-roquace-accent-blue/10">
              <svg
                className="w-8 h-8 text-roquace-accent-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="mb-3 font-display text-display-sm text-roquace-warm-white">
              Something went wrong
            </h2>

            <p className="mb-6 text-body-base text-roquace-soft-gray/70">
              This component failed to load. Please try refreshing the page.
            </p>

            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body-base font-medium bg-roquace-accent-blue text-roquace-black hover:bg-blue-400 transition-colors"
            >
              Try Again
            </button>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-caption text-roquace-soft-gray/50">
                  Error details (development only)
                </summary>
                <pre className="mt-3 overflow-auto rounded bg-roquace-black/50 p-4 text-xs text-roquace-soft-gray/70">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}