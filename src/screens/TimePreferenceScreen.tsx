import StatusBar from '../components/StatusBar';
import OnboardingHeader from '../components/OnboardingHeader';
import FooterActions from '../components/PrimaryButton';
import { DURATIONS } from '../data/onboarding';
import styles from './TimePreferenceScreen.module.css';

interface TimePreferenceScreenProps {
  selectedDurationId: string;
  onSelectDuration: (id: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function TimePreferenceScreen({
  selectedDurationId,
  onSelectDuration,
  onBack,
  onContinue,
}: TimePreferenceScreenProps) {
  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <StatusBar />
        <OnboardingHeader
          step={3}
          totalSteps={4}
          headline="How much time can you spend?"
          onBack={onBack}
        />
        <div className={styles.carousel}>
          {DURATIONS.map((duration) => {
            const selected = duration.id === selectedDurationId;
            return (
              <button
                key={duration.id}
                className={`${styles.pill} ${selected ? styles.pillSelected : ''}`}
                onClick={() => onSelectDuration(duration.id)}
                aria-pressed={selected}
              >
                {duration.label}
              </button>
            );
          })}
        </div>
        <div className={styles.illustrationWrap}>
          <div className={styles.zenStones} aria-hidden="true" />
        </div>
      </div>
      <FooterActions label="Continue" onClick={onContinue} />
    </div>
  );
}
