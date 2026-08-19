// src/components/ui/Badge.tsx
import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'success' | 'muted';
  className?: string;
}

const variants = {
  accent: 'border-fp-accent/30 bg-fp-accent/10 text-fp-accent-soft',
  success: 'border-green-500/30 bg-green-500/10 text-fp-success',
  muted: 'border-fp-border bg-white/5 text-fp-muted',
};

export function Badge({ children, variant = 'accent', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border',
        'tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
