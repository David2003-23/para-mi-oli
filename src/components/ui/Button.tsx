import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'default',
  className,
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-8 py-3 rounded-full transition-all transform hover:scale-105 hover:shadow-lg font-semibold group',
        {
          'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800': variant === 'primary',
          'bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800': variant === 'secondary',
          'text-base px-8 py-3': size === 'default',
          'text-lg px-10 py-4': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}