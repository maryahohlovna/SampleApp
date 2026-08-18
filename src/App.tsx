import { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import WelcomeScreen from './screens/WelcomeScreen';
import GoalSelectionScreen from './screens/GoalSelectionScreen';
import ExperienceLevelScreen from './screens/ExperienceLevelScreen';
import DailyReminderScreen from './screens/DailyReminderScreen';
import CompletionScreen from './screens/CompletionScreen';
import type { OnboardingData, Step } from './types';

const INITIAL_DATA: OnboardingData = {
  goalIds: [],
  levelId: null,
  timeSlotId: 'morning',
  notificationsEnabled: true,
};

export default function App() {
  const [step, setStep] = useState<Step>('welcome');
  const [data, setData] = useState<OnboardingData>(INITIAL_DATA);

  const restart = () => {
    setData(INITIAL_DATA);
    setStep('welcome');
  };

  const toggleGoal = (id: string) => {
    setData((prev) => ({
      ...prev,
      goalIds: prev.goalIds.includes(id)
        ? prev.goalIds.filter((g) => g !== id)
        : [...prev.goalIds, id],
    }));
  };

  return (
    <PhoneFrame>
      {step === 'welcome' && <WelcomeScreen onGetStarted={() => setStep('goals')} />}

      {step === 'goals' && (
        <GoalSelectionScreen
          selectedGoalIds={data.goalIds}
          onToggleGoal={toggleGoal}
          onBack={() => setStep('welcome')}
          onClose={restart}
          onContinue={() => setStep('level')}
        />
      )}

      {step === 'level' && (
        <ExperienceLevelScreen
          selectedLevelId={data.levelId}
          onSelectLevel={(levelId) => setData((prev) => ({ ...prev, levelId }))}
          onBack={() => setStep('goals')}
          onClose={restart}
          onContinue={() => setStep('reminder')}
        />
      )}

      {step === 'reminder' && (
        <DailyReminderScreen
          selectedSlotId={data.timeSlotId}
          onSelectSlot={(timeSlotId) => setData((prev) => ({ ...prev, timeSlotId }))}
          notificationsEnabled={data.notificationsEnabled}
          onToggleNotifications={(notificationsEnabled) =>
            setData((prev) => ({ ...prev, notificationsEnabled }))
          }
          onBack={() => setStep('level')}
          onClose={restart}
          onFinish={() => setStep('complete')}
        />
      )}

      {step === 'complete' && <CompletionScreen data={data} onRestart={restart} />}
    </PhoneFrame>
  );
}
