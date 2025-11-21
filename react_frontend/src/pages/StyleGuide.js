import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function StyleGuide() {
  const { tokens } = useContext(ThemeContext);
  const colors = tokens.colors;

  const swatch = (name, value) => (
    <div key={name} style={{
      background: '#fff',
      border: '1px solid var(--color-border)',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ background: value, height: 56 }} />
      <div style={{ padding: '10px 12px' }}>
        <div style={{ fontWeight: 600 }}>{name}</div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>{value}</div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1>Style Guide</h1>
      <p className="text-muted">Visualize theme tokens, components, and typography.</p>

      <Card title="Colors" subtitle="Ocean Professional palette">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
          {Object.entries({
            Primary: colors.primary,
            Secondary: colors.secondary,
            Success: colors.success,
            Error: colors.error,
            Background: colors.background,
            Surface: colors.surface,
            Text: colors.text,
            'Text Muted': colors.mutedText,
            Border: colors.border,
          }).map(([k, v]) => swatch(k, v))}
        </div>
      </Card>

      <Card title="Buttons" subtitle="Variants and sizes">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary" size="sm">Primary sm</Button>
          <Button variant="primary" size="md">Primary md</Button>
          <Button variant="primary" size="lg">Primary lg</Button>

          <Button variant="secondary" size="md">Secondary</Button>
          <Button variant="ghost" size="md">Ghost</Button>
        </div>
      </Card>

      <Card title="Typography" subtitle="Scale and weights">
        <div>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <p>Body text with default color.</p>
          <p className="text-muted">Muted description text for captions or helper copy.</p>
          <pre style={{
            background: '#0b0f19',
            color: '#e5e7eb',
            padding: 12,
            borderRadius: 8,
            overflow: 'auto'
          }}>
{`// Code font example
const example = 'monospace tokens';
console.log(example);`}
          </pre>
        </div>
      </Card>
    </div>
  );
}
