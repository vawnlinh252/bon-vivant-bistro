'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full text-left space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-serif uppercase tracking-wider text-espresso">
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-cream border text-espresso text-sm rounded-sm transition-colors duration-200',
            'placeholder:text-espresso-muted/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold',
            error ? 'border-red-600 focus:ring-red-600' : 'border-gold/30 hover:border-gold/60 focus:border-gold',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-700 tracking-wide">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string | number; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="w-full text-left space-y-1.5">
        {label && (
          <label htmlFor={selectId} className="block text-xs font-serif uppercase tracking-wider text-espresso">
            {label}
          </label>
        )}
        <select
          id={selectId}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-cream border text-espresso text-sm rounded-sm transition-colors duration-200',
            'focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold appearance-none cursor-pointer',
            error ? 'border-red-600 focus:ring-red-600' : 'border-gold/30 hover:border-gold/60 focus:border-gold',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-cream py-1 text-espresso">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-700 tracking-wide">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
