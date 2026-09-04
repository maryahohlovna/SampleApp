import { Waves, MoonStar, Flower, Sprout } from 'lucide-react';
import type { Goal, ExperienceLevel, Duration } from '../types';

export const GOALS: Goal[] = [
  { id: 'stress', label: 'Reduce stress', icon: Waves },
  { id: 'sleep', label: 'Better sleep', icon: MoonStar },
  { id: 'focus', label: 'Improve focus', icon: Flower },
  { id: 'habit', label: 'Build a habit', icon: Sprout },
];

export const EXPERIENCE_LEVELS: ExperienceLevel[] = [
  {
    id: 'new',
    title: "I'm new to meditation",
    description: "Perfect place to start. We'll guide you step by step.",
  },
  {
    id: 'tried',
    title: "I've tried it a few times",
    description: "You know the basics. We'll help you deepen your practice.",
  },
  {
    id: 'regular',
    title: 'I practice regularly',
    description: 'Advanced sessions and unguided timers to suit your routine.',
  },
];

export const DURATIONS: Duration[] = [
  { id: '5', label: '5 min' },
  { id: '10', label: '10 min' },
  { id: '15', label: '15 min' },
  { id: '20', label: '20 min' },
  { id: '30', label: '30 min' },
];
