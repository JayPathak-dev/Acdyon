// src/sections/ProductPrinciples.tsx
import React from 'react';
import { Eye, Focus, Shield } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHeading } from '../components/ui/SectionHeading';

const principles = [
  {
    icon: Eye,
    title: 'Clarity',
    description: 'See what matters without digging through dashboards. FlowPilot surfaces the right information at the right time.',
    color: 'from-fp-accent/20 to-fp-accent/5',
    iconColor: 'text-fp-accent-soft',
    borderColor: 'border-fp-accent/20',
  },
  {
    icon: Focus,
    title: 'Focus',
    description: 'Turn priorities into a simple next action. Reduce the cognitive load of deciding what to do every morning.',
    color: 'from-blue-500/15 to-blue-500/5',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: Shield,
    title: 'Control',
    description: 'Understand your workload before it becomes overwhelming. Know what is coming before it hits.',
    color: 'from-fp-success/15 to-fp-success/5',
    iconColor: 'text-fp-success',
    borderColor: 'border-fp-success/20',
  },
];

export function ProductPrinciples() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="relative py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Designed for focused work"
            title="The philosophy behind FlowPilot"
            description="Three principles that guide every design decision — from the dashboard to the AI suggestions."
          />
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div
                className={`
                  relative group rounded-2xl p-7 border h-full
                  bg-fp-card ${p.borderColor}
                  hover:border-opacity-50 hover:-translate-y-1
                  transition-all duration-300 cursor-default
                `}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex w-11 h-11 rounded-xl bg-white/5 items-center justify-center mb-5 border ${p.borderColor}`}>
                    <p.icon size={20} className={p.iconColor} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-fp-text mb-3">
                    {p.title}
                  </h3>
                  <p className="text-fp-muted text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
