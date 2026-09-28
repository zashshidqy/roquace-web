"use client";

import { forwardRef, HTMLAttributes, useId, isValidElement, cloneElement, ReactElement } from "react";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  stagger?: number;
}

function cloneWithReveal(child: ReactElement<any>): ReactElement<any> {
  return cloneElement(child, {
    "data-reveal": true,
    className: (child.props.className || "") + " animate-on-scroll",
    style: { ...(child.props.style || {}) },
  });
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, className, stagger = 0, ...props }, ref) => {
    const childrenWithProps = stagger
      ? Array.isArray(children)
        ? children.map((child) =>
            isValidElement(child) ? cloneWithReveal(child as ReactElement<any>) : child
          )
        : isValidElement(children)
        ? cloneWithReveal(children as ReactElement<any>)
        : children
      : children;

    return (
      <div id={useId()} ref={ref} className={className} {...props}>
        {childrenWithProps}
      </div>
    );
  }
);

ScrollReveal.displayName = "ScrollReveal";