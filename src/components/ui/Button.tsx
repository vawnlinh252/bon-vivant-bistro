'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', isLoading = false, disabled, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-serif tracking-wider transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 select-none';

    const variants = {
      primary:
        'bg-bordeaux text-cream hover:bg-bordeaux-hover active:bg-bordeaux-hover shadow-sm border border-bordeaux-hover hover:border-gold/50',
      secondary:
        'bg-cream-warm text-espresso hover:bg-cream-dark active:bg-cream-dark border border-gold/30 hover:border-gold',
      outline:
        'border border-gold text-espresso hover:bg-gold hover:text-cream active:bg-gold-hover transition-colors',
      ghost:
        'text-espresso hover:text-bordeaux hover:bg-cream-warm/50',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs uppercase',
      md: 'px-6 py-3 text-sm uppercase',
      lg: 'px-8 py-4 text-base uppercase',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
