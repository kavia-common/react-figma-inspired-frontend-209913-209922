import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import { AppShell } from './components/layout/AppShell';
import Dashboard from './pages/Dashboard';
import StyleGuide from './pages/StyleGuide';
import Placeholder from './pages/Placeholder';
import './styles/global.css';

/**
 * PUBLIC_INTERFACE
 * App entry with routing, theming, and layout shell.
 * Routes:
 * - "/": Dashboard
 * - "/style-guide": Style Guide page to visualize tokens
 * - "/placeholder": Placeholder feature page
 */
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/style-guide" element={<StyleGuide />} />
            <Route path="/placeholder" element={<Placeholder />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
