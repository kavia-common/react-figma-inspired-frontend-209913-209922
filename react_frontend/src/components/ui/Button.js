import React from 'react';
import './button.css';

/**
 * PUBLIC_INTERFACE
 * Button component
 * Props:
 * - variant: 'primary' | 'secondary' | 'ghost'
 * - size: 'sm' | 'md' | 'lg'
 * - children: ReactNode
 * - ...rest: button props
 */
export function Button({ variant = 'primary', size = 'md', children, ...rest }) {
  const className = `btn btn-${variant} btn-${size}`;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
