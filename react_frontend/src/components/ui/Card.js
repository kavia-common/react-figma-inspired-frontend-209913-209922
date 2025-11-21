import React from 'react';
import './card.css';

/**
 * PUBLIC_INTERFACE
 * Card component
 * Props:
 * - title?: string
 * - subtitle?: string
 * - children: ReactNode
 * - footer?: ReactNode
 */
export function Card({ title, subtitle, children, footer }) {
  return (
    <div className="card">
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
