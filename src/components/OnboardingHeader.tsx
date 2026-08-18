import { ChevronLeft, X } from 'lucide-react';
import styles from './OnboardingHeader.module.css';

interface OnboardingHeaderProps {
  step: number;
  totalSteps: number;
  onBack: () => void;
  onClose: () => void;
}

export default function OnboardingHeader({ step, totalSteps, onBack, onClose }: OnboardingHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <button className={styles.iconButton} onClick={onBack} aria-label="Go back">
          <ChevronLeft size={20} />
        </button>
        <p className={styles.step}>
          Step {step} of {totalSteps}
        </p>
        <button className={styles.iconButton} onClick={onClose} aria-label="Close onboarding">
          <X size={20} />
        </button>
      </div>
      <div className={styles.progress}>
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`${styles.segment} ${i < step ? styles.segmentFilled : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
