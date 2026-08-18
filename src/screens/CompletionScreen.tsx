import StatusBar from '../components/StatusBar';
import AmbientGlow from '../components/AmbientGlow';
import MeditationPortal from '../components/MeditationPortal';
import FooterActions from '../components/PrimaryButton';
import { GOALS, EXPERIENCE_LEVELS, TIME_SLOTS } from '../data/onboarding';
import type { OnboardingData } from '../types';
import styles from './CompletionScreen.module.css';

interface CompletionScreenProps {
  data: OnboardingData;
  onRestart: () => void;
}

export default function CompletionScreen({ data, onRestart }: CompletionScreenProps) {
  const goalLabels = GOALS.filter((g) => data.goalIds.includes(g.id))
    .map((g) => g.label)
    .join(', ');
  const level = EXPERIENCE_LEVELS.find((l) => l.id === data.levelId);
  const slot = TIME_SLOTS.find((s) => s.id === data.timeSlotId);

  return (
    <div className={styles.screen}>
      <AmbientGlow size={350} top={150} left={26} color="rgba(134, 243, 211, 0.35)" />
      <StatusBar />
      <div className={styles.hero}>
        <div className={styles.portalSmall}>
          <MeditationPortal />
        </div>
        <div className={styles.textBlock}>
          <p className={styles.title}>You're all set</p>
          <p className={styles.subtitle}>Your personalized Stillpoint practice is ready to begin.</p>
        </div>
        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Focus areas</span>
            <span className={styles.summaryValue}>{goalLabels || '—'}</span>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Experience</span>
            <span className={styles.summaryValue}>{level?.title ?? '—'}</span>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Daily reminder</span>
            <span className={styles.summaryValue}>
              {data.notificationsEnabled ? `${slot?.display} · ${slot?.label}` : 'Off'}
            </span>
          </div>
        </div>
      </div>
      <FooterActions label="Start Over" onClick={onRestart} />
    </div>
  );
}
