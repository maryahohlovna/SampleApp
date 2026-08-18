import { Wind, Moon, Target, Compass, Heart, CircleX, Flower2, Flower } from 'lucide-react';
import type { Goal, ExperienceLevel, TimeSlot } from '../types';

export const GOALS: Goal[] = [
  { id: 'stress', label: 'Reduce Stress & Anxiety', icon: Wind },
  { id: 'sleep', label: 'Improve Sleep Quality', icon: Moon },
  { id: 'focus', label: 'Deepen Mental Focus', icon: Target },
  { id: 'self-discovery', label: 'Self-Discovery & Reflection', icon: Compass },
  { id: 'resilience', label: 'Emotional Resilience', icon: Heart },
];

export const EXPERIENCE_LEVELS: ExperienceLevel[] = [
  {
    id: 'new',
    title: 'New to this',
    description:
      'I am ready to discover meditation. Perfect for building a simple, guided foundational practice.',
    icon: CircleX,
  },
  {
    id: 'some',
    title: 'Some experience',
    description: 'I know the basics and practice occasionally. Help me deepen my mindfulness routine.',
    icon: Flower2,
  },
  {
    id: 'regular',
    title: 'Regular practice',
    description:
      "Mindfulness is already part of my life. I'm looking for advanced silent and unguided sessions.",
    icon: Flower,
  },
];

export const TIME_SLOTS: TimeSlot[] = [
  { id: 'morning', label: 'Morning', display: '7:30 AM', hour: 7, minute: 30, meridiem: 'AM' },
  { id: 'midday', label: 'Midday', display: '1:00 PM', hour: 1, minute: 0, meridiem: 'PM' },
  { id: 'evening', label: 'Evening', display: '6:30 PM', hour: 6, minute: 30, meridiem: 'PM' },
  { id: 'before-bed', label: 'Before Bed', display: '9:45 PM', hour: 9, minute: 45, meridiem: 'PM' },
];
