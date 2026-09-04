import type { LucideIcon } from 'lucide-react';

export type Step = 'welcome' | 'goals' | 'level' | 'time' | 'complete';

export interface Goal {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ExperienceLevel {
  id: string;
  title: string;
  description: string;
}

export interface Duration {
  id: string;
  label: string;
}

export interface OnboardingData {
  goalIds: string[];
  levelId: string | null;
  durationId: string;
}
