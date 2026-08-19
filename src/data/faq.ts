// src/data/faq.ts
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'What is FlowPilot?',
    answer:
      'FlowPilot is an AI-powered productivity and workflow management platform designed for individuals and small teams. It brings your tasks, priorities, and project signals into one focused workspace — so you always know what to work on next. This is a demo product created for a frontend evaluation.',
  },
  {
    question: 'Is FlowPilot free?',
    answer:
      'FlowPilot offers a free tier for individuals exploring the platform, with access to 3 projects, basic planning, and focus mode. The Pro plan at $12/month unlocks unlimited projects, intelligent planning, and workflow insights. Note: these are example/demo prices for a fictional product.',
  },
  {
    question: 'Does FlowPilot replace project management tools?',
    answer:
      'FlowPilot is not a replacement for tools like Jira or Linear. It is designed to sit alongside your existing stack as a personal and team-level clarity layer — helping you understand what deserves attention across all your work, regardless of which tools hold the underlying data.',
  },
  {
    question: 'Can I use it as an individual?',
    answer:
      'Absolutely. FlowPilot is designed with solo contributors in mind first. The focus mode, daily priority view, and AI suggestions work especially well for individuals who manage multiple projects and need to avoid context-switching costs.',
  },
  {
    question: 'Is my data private?',
    answer:
      'In this demo, no real data is stored or transmitted. In a production version of FlowPilot, data would be encrypted at rest and in transit, isolated per workspace, and never used to train AI models without explicit consent.',
  },
];
