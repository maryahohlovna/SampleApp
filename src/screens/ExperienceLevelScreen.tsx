import StatusBar from '../components/StatusBar';
import AmbientGlow from '../components/AmbientGlow';
import OnboardingHeader from '../components/OnboardingHeader';
import FooterActions from '../components/PrimaryButton';
import { EXPERIENCE_LEVELS } from '../data/onboarding';
import styles from './ExperienceLevelScreen.module.css';

interface ExperienceLevelScreenProps {
  selectedLevelId: string | null;
  onSelectLevel: (id: string) => void;
  onBack: () => void;
  onClose: () => void;
  onContinue: () => void;
}

export default function ExperienceLevelScreen({
  selectedLevelId,
  onSelectLevel,
  onBack,
  onClose,
  onContinue,
}: ExperienceLevelScreenProps) {
  return (
    <div className={styles.screen}>
      <AmbientGlow size={280} top={150} left={-30} color="rgba(124, 102, 255, 0.4)" />
      <AmbientGlow size={300} top={600} right={-40} color="rgba(124, 102, 255, 0.35)" />
      <div className={styles.content}>
        <StatusBar />
        <OnboardingHeader step={2} totalSteps={3} onBack={onBack} onClose={onClose} />
        <div className={styles.titleBlock}>
          <p className={styles.title}>How familiar are you with meditation?</p>
        </div>
        <div className={styles.cardList}>
          {EXPERIENCE_LEVELS.map((level) => {
            const selected = selectedLevelId === level.id;
            const Icon = level.icon;
            return (
              <button
                key={level.id}
                className={`${styles.card} ${selected ? styles.cardSelected : ''}`}
                onClick={() => onSelectLevel(level.id)}
                aria-pressed={selected}
              >
                <span className={`${styles.iconWrap} ${selected ? styles.iconWrapSelected : ''}`}>
                  <Icon size={28} strokeWidth={1.75} />
                </span>
                <span className={styles.textBlock}>
                  <span className={`${styles.cardTitle} ${selected ? styles.cardTitleSelected : ''}`}>
                    {level.title}
                  </span>
                  <span
                    className={`${styles.cardDescription} ${selected ? styles.cardDescriptionSelected : ''}`}
                  >
                    {level.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <FooterActions label="Continue" onClick={onContinue} disabled={!selectedLevelId} />
    </div>
  );
}
