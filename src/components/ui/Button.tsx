// src/components/ui/Button.tsx
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-pressed'?: boolean;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  id?: string;
}

const variantStyles = {
  primary: 'bg-fp-accent text-white hover:bg-opacity-90 shadow-accent',
  secondary: 'bg-fp-card text-fp-text border border-fp-border hover:border-fp-accent hover:bg-[#1a2236]',
  ghost: 'text-fp-muted hover:text-fp-text hover:bg-white/5',
  outline: 'border border-fp-accent/40 text-fp-accent-soft hover:bg-fp-accent/10',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  type = 'button',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? {} : { y: -1, scale: 1.01 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={cn(
        'inline-flex items-center justify-center font-medium',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent focus-visible:ring-offset-2 focus-visible:ring-offset-fp-bg',
        'disabled:opacity-50 disabled:pointer-events-none',
        'cursor-pointer select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
