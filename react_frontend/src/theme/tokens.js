//
// Theme tokens for Ocean Professional
// These are injected to CSS variables via ThemeProvider.
//

export const oceanProfessionalTokens = {
  // Colors
  colors: {
    primary: '#2563EB',
    secondary: '#F59E0B', // also used as success
    success: '#F59E0B',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    mutedText: '#6B7280',
    border: '#E5E7EB',
    ring: 'rgba(37, 99, 235, 0.35)',
    gradientFrom: 'rgba(59,130,246,0.10)', // blue-500/10
    gradientTo: '#f9fafb', // gray-50 like
  },

  // Radii
  radii: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '20px',
    full: '9999px',
  },

  // Spacing scale
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.04)',
    md: '0 4px 10px rgba(0,0,0,0.08)',
    lg: '0 10px 25px rgba(0,0,0,0.10)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease',
    base: '220ms ease',
  },

  // Typography
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif",
    codeFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
};
