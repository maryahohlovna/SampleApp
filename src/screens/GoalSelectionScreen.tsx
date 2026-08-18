import { Check } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import AmbientGlow from '../components/AmbientGlow';
import OnboardingHeader from '../components/OnboardingHeader';
import FooterActions from '../components/PrimaryButton';
import { GOALS } from '../data/onboarding';
import styles from './GoalSelectionScreen.module.css';

interface GoalSelectionScreenProps {
  selectedGoalIds: string[];
  onToggleGoal: (id: string) => void;
  onBack: () => void;
  onClose: () => void;
  onContinue: () => void;
}

export default function GoalSelectionScreen({
  selectedGoalIds,
  onToggleGoal,
  onBack,
  onClose,
  onContinue,
}: GoalSelectionScreenProps) {
  const canContinue = selectedGoalIds.length > 0;

  return (
    <div className={styles.screen}>
      <AmbientGlow size={300} top={80} right={-50} color="rgba(124, 102, 255, 0.4)" />
      <AmbientGlow size={320} top={500} left={-50} color="rgba(124, 102, 255, 0.35)" />
      <div className={styles.content}>
        <StatusBar />
        <OnboardingHeader step={1} totalSteps={3} onBack={onBack} onClose={onClose} />
        <div className={styles.titleBlock}>
          <p className={styles.title}>What brings you to Stillpoint?</p>
          <p className={styles.subtitle}>
            Choose the areas you would like to focus on. We will customize your meditation pathway.
          </p>
        </div>
        <div className={styles.cardList}>
          {GOALS.map((goal) => {
            const selected = selectedGoalIds.includes(goal.id);
            const Icon = goal.icon;
            return (
              <button
                key={goal.id}
                className={`${styles.card} ${selected ? styles.cardSelected : ''}`}
                onClick={() => onToggleGoal(goal.id)}
                aria-pressed={selected}
              >
                <div className={styles.cardLeft}>
                  <span className={`${styles.iconWrap} ${selected ? styles.iconWrapSelected : ''}`}>
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className={`${styles.cardLabel} ${selected ? styles.cardLabelSelected : ''}`}>
                    {goal.label}
                  </span>
                </div>
                <span className={`${styles.checkbox} ${selected ? styles.checkboxSelected : ''}`}>
                  {selected && <Check size={10} strokeWidth={3} />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <FooterActions label="Continue" onClick={onContinue} disabled={!canContinue} />
    </div>
  );
}
