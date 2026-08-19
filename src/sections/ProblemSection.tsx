// src/sections/ProblemSection.tsx
import React from 'react';
import { AlertTriangle, Shuffle, Compass } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHeading } from '../components/ui/SectionHeading';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Too many priorities',
    description: 'Everything looks urgent, so nothing feels clear. You spend time deciding what to do instead of doing it.',
    number: '01',
  },
  {
    icon: Shuffle,
    title: 'Context switching',
    description: 'Important work gets buried between messages, meetings, and tasks. Every interruption costs more than it seems.',
    number: '02',
  },
  {
    icon: Compass,
    title: 'Progress without direction',
    description: "You can see what you've completed without knowing what matters next. Busyness isn't the same as momentum.",
    number: '03',
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="relative py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(14,19,32,0.5), transparent)' }}
    >
      {/* Subtle separator */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(148,163,184,0.1), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The problem"
            title={
              <>
                Your work isn't scattered.{' '}
                <span className="text-gradient-accent">Your attention is.</span>
              </>
            }
            description="Modern work tools give you more information than ever. They rarely tell you what to pay attention to."
          />
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.number} delay={i * 0.12}>
              <div
                className="group relative rounded-2xl p-7 bg-fp-card border border-fp-border hover:border-fp-accent/25 hover:-translate-y-1 transition-all duration-300 h-full cursor-default"
              >
                {/* Number */}
                <span
                  className="absolute top-5 right-6 font-display font-bold text-5xl text-fp-border select-none leading-none"
                  aria-hidden="true"
                >
                  {problem.number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:bg-red-500/15 transition-colors duration-300">
                  <problem.icon size={20} className="text-red-400" />
                </div>

                <h3 className="font-display font-bold text-lg text-fp-text mb-3">
                  {problem.title}
                </h3>
                <p className="text-fp-muted text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
