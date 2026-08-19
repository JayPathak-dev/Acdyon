// src/sections/MetricsSection.tsx
import React from 'react';
import { FolderOpen, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

const metrics = [
  {
    icon: FolderOpen,
    value: 6,
    label: 'Active projects',
    color: 'text-fp-accent-soft',
    bg: 'bg-fp-accent/10 border-fp-accent/20',
  },
  {
    icon: Zap,
    value: 3,
    label: 'Focus tasks today',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: CheckCircle2,
    value: 12,
    label: 'Completed this week',
    color: 'text-fp-success',
    bg: 'bg-fp-success/10 border-fp-success/20',
  },
  {
    icon: TrendingUp,
    value: 78,
    label: 'Avg. progress (%)',
    suffix: '%',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
];

export function MetricsSection() {
  return (
    <section
      id="metrics"
      aria-labelledby="metrics-heading"
      className="relative py-20 md:py-24"
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(148,163,184,0.08), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-fp-accent text-sm font-semibold tracking-widest uppercase mb-3">Demo workspace</p>
            <h2 id="metrics-heading" className="font-display font-bold text-3xl md:text-4xl text-fp-text mb-3">
              Your workspace at a glance
            </h2>
            <p className="text-fp-muted text-sm">
              The numbers below are example demo data — not real metrics.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.1}>
              <div className="bg-fp-card border border-fp-border rounded-2xl p-6 text-center hover:border-fp-accent/25 transition-colors duration-300 cursor-default">
                <div className={`inline-flex w-12 h-12 rounded-xl border items-center justify-center mb-4 ${m.bg}`}>
                  <m.icon size={22} className={m.color} />
                </div>
                <p className={`font-display font-bold text-4xl mb-2 ${m.color}`}>
                  <AnimatedCounter
                    value={m.value}
                    suffix={m.suffix}
                  />
                </p>
                <p className="text-fp-muted text-sm">{m.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Demo label */}
        <ScrollReveal>
          <p className="text-center text-fp-subtle text-xs mt-6 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-fp-subtle inline-block" />
            Demo workspace — all data shown is illustrative
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
