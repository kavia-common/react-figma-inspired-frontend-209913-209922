import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

/**
 * PUBLIC_INTERFACE
 * Sidebar navigation
 * Props:
 * - isOpen: boolean
 * - onClose?: () => void
 */
export function Sidebar({ isOpen = true }) {
  return (
    <aside className={`app-sidebar ${isOpen ? 'open' : 'closed'}`} aria-label="Sidebar">
      <nav className="nav">
        <NavLink to="/" end className="nav-link">
          <span>🏠</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/style-guide" className="nav-link">
          <span>🎨</span>
          <span>Style Guide</span>
        </NavLink>
        <NavLink to="/placeholder" className="nav-link">
          <span>📄</span>
          <span>Placeholder</span>
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <small className="text-muted">v0.1</small>
      </div>
    </aside>
  );
}
