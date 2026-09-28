'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface ImageWithFallbackProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
}

export function ImageWithFallback({
  src,
  fallbackSrc = '/images/hero-poster.svg',
  alt = '',
  className,
  onLoad,
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!hasError) {
      setHasError(true);
      const target = e.currentTarget;
      target.src = fallbackSrc;
    }
    onError?.(e);
  };

  return (
    <img
      src={hasError ? fallbackSrc : src}
      alt={alt}
      className={cn(
        'transition-opacity duration-300',
        isLoading ? 'opacity-0' : 'opacity-100',
        className
      )}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
}
