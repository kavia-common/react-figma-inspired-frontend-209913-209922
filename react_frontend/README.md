# Ocean Professional React Frontend

A modern, Figma-inspired React frontend scaffold featuring a header, sidebar navigation, and main content area. Styled per the Ocean Professional theme.

## Quick Start

- `npm install`
- `npm start`
- Visit http://localhost:3000

## Structure

- `src/theme/`
  - `tokens.js` — theme tokens (colors, radii, spacing, shadows, typography)
  - `ThemeProvider.js` — injects tokens as CSS variables and provides `getEnv`
- `src/styles/`
  - `global.css` — global/base styles, gradient background, utilities
- `src/components/ui/`
  - `Button.js`, `button.css` — primary, secondary, ghost variants
  - `Card.js`, `card.css` — surface container with header/body/footer
  - `Icon.js` — wrapper for SVG/emoji icons
- `src/components/layout/`
  - `Header.js`, `header.css`
  - `Sidebar.js`, `sidebar.css`
  - `AppShell.js`, `appshell.css`
- `src/pages/`
  - `Dashboard.js` — default route
  - `StyleGuide.js` — visualize tokens/components
  - `Placeholder.js` — scaffold for future features
- `src/App.js` — routes + layout wiring
- `src/index.js` — app entrypoint

## Theme

Ocean Professional style guide:
- Primary: `#2563EB`
- Secondary/Success: `#F59E0B`
- Error: `#EF4444`
- Background: `#f9fafb`
- Surface: `#ffffff`
- Text: `#111827`
- Subtle gradient accents are applied to backgrounds and headers.

Theme tokens live in `src/theme/tokens.js`. They are injected as CSS variables by `src/theme/ThemeProvider.js`.

To use a token in CSS:
```css
color: var(--color-primary);
border-radius: var(--radius-md);
box-shadow: var(--shadow-md);
```

## Environment Variables

Do not hardcode configuration. Use CRA-style variables:
- `process.env.REACT_APP_API_BASE`
- `process.env.REACT_APP_BACKEND_URL`
- `process.env.REACT_APP_FRONTEND_URL`
- `process.env.REACT_APP_WS_URL`
- `process.env.REACT_APP_NODE_ENV`
- `process.env.REACT_APP_NEXT_TELEMETRY_DISABLED`
- `process.env.REACT_APP_ENABLE_SOURCE_MAPS`
- `process.env.REACT_APP_PORT`
- `process.env.REACT_APP_TRUST_PROXY`
- `process.env.REACT_APP_LOG_LEVEL`
- `process.env.REACT_APP_HEALTHCHECK_PATH`
- `process.env.REACT_APP_FEATURE_FLAGS`
- `process.env.REACT_APP_EXPERIMENTS_ENABLED`

Access safely with a fallback:
```js
const apiBase = process.env.REACT_APP_API_BASE || '';
```
Or via ThemeProvider context:
```js
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';
const { getEnv } = useContext(ThemeContext);
const apiBase = getEnv('API_BASE', '');
```

## Extending

- Create a new page in `src/pages/MyPage.js`
- Add a route in `src/App.js`:
```jsx
<Route path="/my-page" element={<MyPage />} />
```
- Add navigation link in `src/components/layout/Sidebar.js`

For new UI elements:
- Build a reusable component under `src/components/ui/`
- Style with CSS variables; keep transitions subtle and modern
- Ensure keyboard focus styles are visible (uses `--color-ring`)

## Accessibility & Responsiveness

- Sidebar collapses on smaller screens
- Focus rings are visible
- Header is sticky; main content uses fluid grid where applicable

## Notes

- Light theme only for now; dark mode can be added by extending tokens and toggling a root attribute.
- Minimal dependencies; no heavy UI libraries to keep bundle small.
