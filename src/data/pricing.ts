// src/data/pricing.ts
export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For individuals exploring FlowPilot.',
    highlighted: false,
    cta: 'Start for free',
    features: [
      { text: '3 active projects', included: true },
      { text: 'Basic planning view', included: true },
      { text: 'Focus mode', included: true },
      { text: 'Daily priority digest', included: true },
      { text: 'Intelligent priorities', included: false },
      { text: 'Workflow insights', included: false },
      { text: 'Team visibility', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per month',
    description: 'For people managing more complex workflows.',
    highlighted: true,
    cta: 'Start for free',
    badge: 'Most popular',
    features: [
      { text: 'Unlimited projects', included: true },
      { text: 'Intelligent planning', included: true },
      { text: 'Focus mode', included: true },
      { text: 'Daily priority digest', included: true },
      { text: 'Workflow insights', included: true },
      { text: 'AI suggestions', included: true },
      { text: 'Team visibility (up to 5)', included: true },
    ],
  },
];
