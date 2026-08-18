import type { CSSProperties } from 'react';
import styles from './AmbientGlow.module.css';

interface AmbientGlowProps {
  size: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  color?: string;
}

export default function AmbientGlow({
  size,
  top,
  bottom,
  left,
  right,
  color = 'rgba(124, 102, 255, 0.45)',
}: AmbientGlowProps) {
  const style: CSSProperties = {
    width: size,
    height: size,
    top,
    bottom,
    left,
    right,
    background: `radial-gradient(circle, ${color} 0%, rgba(124, 102, 255, 0) 70%)`,
  };

  return <div className={styles.glow} style={style} aria-hidden="true" />;
}
