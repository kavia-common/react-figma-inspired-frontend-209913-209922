import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p className="text-muted">Welcome. This layout is inspired by Figma wireframes with a modern Ocean Professional theme.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '16px' }}>
        <Card title="Get Started" subtitle="Explore the structure">
          <p>Use the sidebar to navigate. Visit the Style Guide to preview UI tokens and components.</p>
          <div style={{ marginTop: 12 }}>
            <Button variant="primary">Primary Action</Button>
            <span style={{ marginLeft: 8 }} />
            <Button variant="ghost">Learn More</Button>
          </div>
        </Card>
        <Card title="Environment" subtitle="Safe env fallbacks">
          <p>Front-end URL:</p>
          <code style={{ display: 'block', marginTop: 6, fontFamily: 'var(--font-code)' }}>
            {process.env.REACT_APP_FRONTEND_URL || 'not set'}
          </code>
          <p style={{ marginTop: 12 }}>API Base:</p>
          <code style={{ display: 'block', marginTop: 6, fontFamily: 'var(--font-code)' }}>
            {process.env.REACT_APP_API_BASE || 'not set'}
          </code>
        </Card>
        <Card title="Status" subtitle="All systems nominal">
          <p>No errors detected. You can start extending components and pages with confidence.</p>
        </Card>
      </div>
    </div>
  );
}
