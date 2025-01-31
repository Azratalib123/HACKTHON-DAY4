// components/ui/button.tsx
'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large' | 'icon';
  className?: string;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  asChild = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md transition-colors';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border border-gray-300 text-gray-900 hover:bg-gray-100',
    ghost: 'text-red-500 hover:text-red-600',
  };
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    icon: 'p-2', // For icon buttons
  };

  const buttonClassNames = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClassNames}>
      {children}
    </button>
  );
};

export { Button };
