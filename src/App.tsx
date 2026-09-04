import { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import WelcomeScreen from './screens/WelcomeScreen';
import GoalSelectionScreen from './screens/GoalSelectionScreen';
import ExperienceLevelScreen from './screens/ExperienceLevelScreen';
import TimePreferenceScreen from './screens/TimePreferenceScreen';
import CompletionScreen from './screens/CompletionScreen';
import type { OnboardingData, Step } from './types';

const INITIAL_DATA: OnboardingData = {
  goalIds: [],
  levelId: null,
  durationId: '10',
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
          onContinue={() => setStep('level')}
        />
      )}

      {step === 'level' && (
        <ExperienceLevelScreen
          selectedLevelId={data.levelId}
          onSelectLevel={(levelId) => setData((prev) => ({ ...prev, levelId }))}
          onBack={() => setStep('goals')}
          onContinue={() => setStep('time')}
        />
      )}

      {step === 'time' && (
        <TimePreferenceScreen
          selectedDurationId={data.durationId}
          onSelectDuration={(durationId) => setData((prev) => ({ ...prev, durationId }))}
          onBack={() => setStep('level')}
          onContinue={() => setStep('complete')}
        />
      )}

      {step === 'complete' && <CompletionScreen onRestart={restart} />}
    </PhoneFrame>
  );
}
