import React from 'react';
import { Button } from '../ui/Button';
import './header.css';

/**
 * PUBLIC_INTERFACE
 * Header with title/logo and right-side action placeholders
 * Props:
 * - onToggleSidebar?: () => void
 * - title?: string
 */
export function Header({ onToggleSidebar, title = 'Ocean Professional' }) {
  return (
    <header className="app-header">
      <div className="app-header__left">
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <div className="brand">
          <div className="brand-mark">🌊</div>
          <div className="brand-text">
            <strong>{title}</strong>
            <div className="brand-underline" />
          </div>
        </div>
      </div>
      <div className="app-header__right">
        <Button variant="ghost" size="sm">Docs</Button>
        <Button variant="primary" size="sm">Primary</Button>
      </div>
    </header>
  );
}
