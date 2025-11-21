import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import './appshell.css';

/**
 * PUBLIC_INTERFACE
 * AppShell layout composing Header, Sidebar, and main content area.
 * Props:
 * - children: ReactNode for the main content
 */
export function AppShell({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="app-shell">
      <Header onToggleSidebar={() => setOpen(o => !o)} />
      <div className="app-shell__body">
        <Sidebar isOpen={open} />
        <main className="app-content">
          {children}
        </main>
      </div>
    </div>
  );
}
