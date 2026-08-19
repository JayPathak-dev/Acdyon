// src/components/ui/SectionHeading.tsx
import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="text-fp-accent text-sm font-semibold tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-fp-text',
          'leading-tight tracking-tight mb-4'
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-fp-muted text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
