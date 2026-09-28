"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface StaggerItemProps extends HTMLAttributes<HTMLDivElement> {
  index?: number;
  delay?: number;
}

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ className, index = 0, delay = 0, children, ...props }, ref) => {
    const style = {
      transitionDelay: `${delay}ms`,
    };

    return (
      <div
        ref={ref}
        className={cn("animate-on-scroll stagger-item", className)}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
);

StaggerItem.displayName = "StaggerItem";