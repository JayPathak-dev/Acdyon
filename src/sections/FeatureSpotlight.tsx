// src/sections/FeatureSpotlight.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Brain, BarChart3, Layers, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Button } from '../components/ui/Button';
import { smoothScrollTo } from '../lib/utils';

const benefits = [
  'Priority-aware planning',
  'Project context always visible',
  'Progress without manual tracking',
];

function SpotlightDashboard() {
  return (
    <div
      className="relative rounded-2xl border border-fp-border overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #0d1122, #111826)' }}
      aria-label="FlowPilot focus mode preview"
      role="img"
    >
      {/* Header bar */}
      <div className="px-5 py-4 border-b border-fp-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers size={14} className="text-fp-accent-soft" />
          <span className="text-fp-muted text-sm font-medium">Focus Mode</span>
        </div>
        <div className="text-xs text-fp-subtle">Today, 9:41 AM</div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-5">
        {/* AI priority card */}
        <div className="bg-fp-accent/8 border border-fp-accent/20 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Brain size={14} className="text-fp-accent-soft" />
            <span className="text-xs font-semibold text-fp-accent-soft uppercase tracking-wider">Your next action</span>
          </div>
          <p className="text-fp-text font-medium text-sm">Finalize homepage design review</p>
          <div className="flex items-center gap-2 text-xs text-fp-subtle">
            <span className="px-2 py-0.5 bg-fp-accent/10 text-fp-accent-soft rounded-md border border-fp-accent/20">Website Redesign</span>
            <span>·</span>
            <span>Highest impact</span>
          </div>
        </div>

        {/* Context summary */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: BarChart3, label: 'Progress', value: '78%', color: 'text-fp-accent-soft' },
            { icon: CheckCircle2, label: 'Done today', value: '3', color: 'text-fp-success' },
            { icon: Brain, label: 'AI queued', value: '2', color: 'text-amber-400' },
          ].map((stat) => (
            <div key={stat.label} className="bg-fp-bg/50 rounded-lg p-3 border border-fp-border text-center">
              <stat.icon size={13} className={`${stat.color} mx-auto mb-1.5`} />
              <p className="text-fp-text text-sm font-bold">{stat.value}</p>
              <p className="text-fp-subtle text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Task queue */}
        <div className="space-y-2">
          {[
            { label: 'Finalize homepage', priority: 'high' },
            { label: 'Review API docs', priority: 'high' },
            { label: 'Update timeline', priority: 'medium' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-fp-bg/30 border border-fp-border"
            >
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                item.priority === 'high' ? 'bg-red-400' : 'bg-amber-400'
              }`} />
              <span className="text-fp-muted text-xs flex-1">{item.label}</span>
              <ArrowRight size={12} className="text-fp-subtle" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeatureSpotlight() {
  return (
    <section
      id="spotlight"
      aria-labelledby="spotlight-heading"
      className="relative py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Dashboard */}
          <ScrollReveal direction="left">
            <SpotlightDashboard />
          </ScrollReveal>

          {/* Right — Copy */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <p className="text-fp-accent text-sm font-semibold tracking-widest uppercase">
                Smart planning
              </p>

              <h2 className="font-display font-bold text-3xl md:text-4xl text-fp-text leading-tight tracking-tight">
                Stop asking what to do next.
              </h2>

              <p className="text-fp-muted text-lg leading-relaxed">
                FlowPilot turns project context into an actionable next step, helping you move forward
                without rebuilding your plan every morning.
              </p>

              {/* Benefits */}
              <ul className="space-y-3" aria-label="Key benefits">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-fp-success/15 border border-fp-success/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={12} className="text-fp-success" />
                    </div>
                    <span className="text-fp-muted text-sm">{b}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => smoothScrollTo('demo')}
                aria-label="Explore the workflow in the interactive demo"
              >
                Explore the workflow
                <ArrowRight size={16} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
