import StatusBar from '../components/StatusBar';
import OnboardingHeader from '../components/OnboardingHeader';
import FooterActions from '../components/PrimaryButton';
import { GOALS } from '../data/onboarding';
import styles from './GoalSelectionScreen.module.css';

interface GoalSelectionScreenProps {
  selectedGoalIds: string[];
  onToggleGoal: (id: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function GoalSelectionScreen({
  selectedGoalIds,
  onToggleGoal,
  onBack,
  onContinue,
}: GoalSelectionScreenProps) {
  const canContinue = selectedGoalIds.length > 0;

  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <StatusBar />
        <OnboardingHeader step={1} totalSteps={4} headline="What brings you here?" onBack={onBack} />
        <div className={styles.grid}>
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
                <span className={styles.iconWrap}>
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className={styles.title}>{goal.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      <FooterActions label="Continue" onClick={onContinue} disabled={!canContinue} />
    </div>
  );
}
