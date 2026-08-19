// src/sections/WorkflowSection.tsx
import React from 'react';
import { Inbox, Target, Rocket } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHeading } from '../components/ui/SectionHeading';

const steps = [
  {
    number: '01',
    icon: Inbox,
    title: 'Capture',
    description: 'Bring tasks and project work into one place. No more scattered notes, messages, or forgotten context.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    connector: true,
  },
  {
    number: '02',
    icon: Target,
    title: 'Prioritize',
    description: 'FlowPilot identifies what deserves attention today. Context, deadlines, and dependencies — all weighed automatically.',
    color: 'text-fp-accent-soft',
    bg: 'bg-fp-accent/10 border-fp-accent/20',
    connector: true,
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execute',
    description: 'Work from a clear, focused plan. No decisions. No second-guessing. Just the next right action.',
    color: 'text-fp-success',
    bg: 'bg-fp-success/10 border-fp-success/20',
    connector: false,
  },
];

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      aria-labelledby="workflow-heading"
      className="relative py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(14,19,32,0.6), transparent)' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(148,163,184,0.08), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="How it works"
            title="Three steps to a clearer workday"
            description="FlowPilot is designed to fit naturally into how you already work."
          />
        </ScrollReveal>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="mt-16 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px mx-32"
            aria-hidden="true"
            style={{
              background: 'linear-gradient(90deg, rgba(124,92,252,0.2), rgba(167,139,250,0.4), rgba(52,211,153,0.2))',
            }}
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Connector dot (mobile only) */}
                  {step.connector && (
                    <div
                      className="lg:hidden absolute left-8 top-28 w-px h-8 bg-gradient-to-b from-fp-border to-transparent"
                      aria-hidden="true"
                    />
                  )}

                  {/* Mobile: horizontal layout */}
                  <div className="flex lg:flex-col items-start gap-4 w-full">
                    {/* Icon circle */}
                    <div className={`relative w-16 h-16 rounded-2xl border flex items-center justify-center flex-shrink-0 ${step.bg}`}>
                      <step.icon size={24} className={step.color} />
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-fp-bg border border-fp-border flex items-center justify-center">
                        <span className="text-xs font-bold text-fp-subtle">{i + 1}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-fp-accent text-xs font-bold tracking-widest uppercase mb-1">{step.number}</p>
                      <h3 className="font-display font-bold text-xl text-fp-text mb-2">{step.title}</h3>
                      <p className="text-fp-muted text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
