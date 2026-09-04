import StatusBar from '../components/StatusBar';
import OnboardingHeader from '../components/OnboardingHeader';
import FooterActions from '../components/PrimaryButton';
import { EXPERIENCE_LEVELS } from '../data/onboarding';
import styles from './ExperienceLevelScreen.module.css';

interface ExperienceLevelScreenProps {
  selectedLevelId: string | null;
  onSelectLevel: (id: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function ExperienceLevelScreen({
  selectedLevelId,
  onSelectLevel,
  onBack,
  onContinue,
}: ExperienceLevelScreenProps) {
  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <StatusBar />
        <OnboardingHeader step={2} totalSteps={4} headline="How experienced are you?" onBack={onBack} />
        <div className={styles.list}>
          {EXPERIENCE_LEVELS.map((level) => {
            const selected = selectedLevelId === level.id;
            return (
              <button
                key={level.id}
                className={`${styles.card} ${selected ? styles.cardSelected : ''}`}
                onClick={() => onSelectLevel(level.id)}
                aria-pressed={selected}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardTitle}>{level.title}</span>
                  <span className={`${styles.radio} ${selected ? styles.radioSelected : ''}`}>
                    {selected && <span className={styles.radioDot} />}
                  </span>
                </div>
                <p className={styles.cardDescription}>{level.description}</p>
              </button>
            );
          })}
        </div>
      </div>
      <FooterActions label="Continue" onClick={onContinue} disabled={!selectedLevelId} />
    </div>
  );
}
