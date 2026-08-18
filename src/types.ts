import type { LucideIcon } from 'lucide-react';

export type Step = 'welcome' | 'goals' | 'level' | 'reminder' | 'complete';

export interface Goal {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ExperienceLevel {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimeSlot {
  id: string;
  label: string;
  display: string;
  hour: number;
  minute: number;
  meridiem: 'AM' | 'PM';
}

export interface OnboardingData {
  goalIds: string[];
  levelId: string | null;
  timeSlotId: string;
  notificationsEnabled: boolean;
}
