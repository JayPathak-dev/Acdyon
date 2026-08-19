// src/data/features.ts
import {
  Zap,
  BarChart3,
  Focus,
  TrendingUp,
  Map,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: boolean;
}

export const features: Feature[] = [
  {
    icon: Zap,
    title: 'Intelligent Priorities',
    description:
      'Know what deserves attention next. FlowPilot analyzes task context, deadlines, and project weight to surface what actually matters.',
    accent: true,
  },
  {
    icon: BarChart3,
    title: 'Project Pulse',
    description:
      'Understand project health at a glance. Track velocity, identify stalled work, and see which efforts are moving forward.',
  },
  {
    icon: Focus,
    title: 'Focus Mode',
    description:
      'Reduce distractions and work from a clear, trimmed-down task view. No dashboards. No noise. Just what is next.',
  },
  {
    icon: TrendingUp,
    title: 'Workflow Insights',
    description:
      'See where your time and attention are going. Understand patterns in how you work so you can improve gradually.',
  },
  {
    icon: Map,
    title: 'Smart Planning',
    description:
      'Turn large goals into practical next steps. Break down projects automatically and see a path forward without manual planning.',
  },
  {
    icon: Users,
    title: 'Team Visibility',
    description:
      'Understand what is moving and what is blocked. Keep small teams aligned without daily standups or status meetings.',
  },
];
