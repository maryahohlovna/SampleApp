import { ChevronLeft } from 'lucide-react';
import styles from './OnboardingHeader.module.css';

interface OnboardingHeaderProps {
  step: number;
  totalSteps: number;
  headline: string;
  onBack: () => void;
}

export default function OnboardingHeader({ step, totalSteps, headline, onBack }: OnboardingHeaderProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <button className={styles.backButton} onClick={onBack} aria-label="Go back">
          <ChevronLeft size={18} />
        </button>
        <p className={styles.step}>
          Step {step} of {totalSteps}
        </p>
        <div className={styles.spacer} aria-hidden="true" />
      </div>
      <div className={styles.progressBg}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <p className={styles.headline}>{headline}</p>
    </div>
  );
}
