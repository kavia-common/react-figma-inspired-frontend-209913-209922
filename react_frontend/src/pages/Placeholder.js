import React from 'react';
import { Card } from '../components/ui/Card';

export default function Placeholder() {
  return (
    <div className="container">
      <h1>Placeholder Page</h1>
      <p className="text-muted">Use this area for future feature pages.</p>
      <Card title="Coming Soon" subtitle="Example layout">
        <p>
          This page serves as a scaffold for new features. Duplicate it to create new routes and views.
        </p>
      </Card>
    </div>
  );
}
