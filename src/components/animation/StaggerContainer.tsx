"use client";

import { useId } from "react";
import { HTMLAttributes } from "react";

interface StaggerContainerProps extends HTMLAttributes<HTMLDivElement> {
  stagger?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className,
  stagger = 100,
  delay = 0,
  ...props
}: StaggerContainerProps) {
  const style = {
    ...(props.style || {}),
    "--stagger-delay": `${stagger}ms`,
    "--stagger-base-delay": `${delay}ms`,
  };

  return (
    <div
      id={useId()}
      className={className}
      {...props}
      style={style}
    >
      {children}
    </div>
  );
}