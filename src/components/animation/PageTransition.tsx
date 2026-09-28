"use client";

import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <div className={`page-transition-content ${className}`}>
      {children}
    </div>
  );
}

interface PageLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function PageLink({ href, children, className, ...props }: PageLinkProps) {
  return (
    <a
      href={href}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}