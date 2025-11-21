import React, { createContext, useMemo } from 'react';
import { oceanProfessionalTokens } from './tokens';

// PUBLIC_INTERFACE
export const ThemeContext = createContext({
  // tokens are exposed for components to reference if needed
  tokens: oceanProfessionalTokens,
  // PUBLIC_INTERFACE
  getEnv: (key, fallback = '') => fallback,
});

/**
 * PUBLIC_INTERFACE
 * ThemeProvider
 * Injects CSS variables into :root from Ocean Professional tokens and exposes env helper.
 * - Props:
 *   - children: React nodes
 * - Behavior:
 *   - Sets CSS variables for colors, spacing, radius, shadows, etc.
 *   - Provides getEnv(key, fallback) which reads from process.env.REACT_APP_* with a safe fallback.
 */
export function ThemeProvider({ children }) {
  const tokens = oceanProfessionalTokens;

  const styleVars = useMemo(() => {
    const { colors, radii, spacing, shadows, transitions, typography } = tokens;
    return {
      // Colors
      '--color-primary': colors.primary,
      '--color-secondary': colors.secondary,
      '--color-success': colors.success,
      '--color-error': colors.error,
      '--color-bg': colors.background,
      '--color-surface': colors.surface,
      '--color-text': colors.text,
      '--color-text-muted': colors.mutedText,
      '--color-border': colors.border,
      '--color-ring': colors.ring,
      '--gradient-from': colors.gradientFrom,
      '--gradient-to': colors.gradientTo,

      // Radii
      '--radius-sm': radii.sm,
      '--radius-md': radii.md,
      '--radius-lg': radii.lg,
      '--radius-xl': radii.xl,
      '--radius-full': radii.full,

      // Spacing
      '--space-xs': spacing.xs,
      '--space-sm': spacing.sm,
      '--space-md': spacing.md,
      '--space-lg': spacing.lg,
      '--space-xl': spacing.xl,
      '--space-2xl': spacing['2xl'],

      // Shadows
      '--shadow-sm': shadows.sm,
      '--shadow-md': shadows.md,
      '--shadow-lg': shadows.lg,

      // Transitions
      '--transition-fast': transitions.fast,
      '--transition-base': transitions.base,

      // Typography
      '--font-sans': typography.fontFamily,
      '--font-code': typography.codeFamily,
    };
  }, [tokens]);

  // Apply style vars to document root
  const rootStyle = useMemo(() => {
    const style = {};
    Object.entries(styleVars).forEach(([k, v]) => {
      style[k] = v;
    });
    return style;
  }, [styleVars]);

  // PUBLIC_INTERFACE
  const getEnv = (key, fallback = '') => {
    // Only read REACT_APP_* per CRA convention; do not assume values
    const fullKey = `REACT_APP_${key}`;
    const value = process.env[fullKey];
    return typeof value === 'string' && value.length > 0 ? value : fallback;
  };

  return (
    <ThemeContext.Provider value={{ tokens, getEnv }}>
      <div style={rootStyle}>{children}</div>
    </ThemeContext.Provider>
  );
}
