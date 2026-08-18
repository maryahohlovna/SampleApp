import type { ReactNode } from 'react';
import styles from './PhoneFrame.module.css';

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return <div className={styles.frame}>{children}</div>;
}
