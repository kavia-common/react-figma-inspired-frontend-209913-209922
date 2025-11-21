import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Icon wrapper
 * Props:
 * - size: number (px)
 * - color: css color string
 * - children: usually an emoji or SVG
 */
export function Icon({ size = 18, color = 'currentColor', children, style }) {
  const mergedStyle = {
    display: 'inline-flex',
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    color,
    lineHeight: 1,
    ...style,
  };
  return <span style={mergedStyle} aria-hidden="true">{children}</span>;
}
