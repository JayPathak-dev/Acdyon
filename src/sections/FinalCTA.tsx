// src/sections/FinalCTA.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Button } from '../components/ui/Button';
import { smoothScrollTo } from '../lib/utils';

interface FinalCTAProps {
  onSignupOpen: () => void;
}

export function FinalCTA({ onSignupOpen }: FinalCTAProps) {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124, 92, 252, 0.12) 0%, transparent 70%),
            linear-gradient(180deg, transparent, rgba(14,19,32,0.5), transparent)
          `,
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />

      {/* Top separator */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,92,252,0.3), transparent)' }}
        aria-hidden="true"
      />

      {/* Floating accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(124, 92, 252, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="cta-heading"
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-fp-text mb-6 tracking-tight leading-tight"
            >
              Make your next action{' '}
              <span className="text-gradient-accent">obvious.</span>
            </h2>

            <p className="text-fp-muted text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Bring your work into focus and spend less time deciding what to do next.
              FlowPilot gives you clarity from the first minute.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={onSignupOpen}
                className="min-w-48"
                aria-label="Start for free — open signup"
              >
                Start for free
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => smoothScrollTo('demo')}
                aria-label="Explore the interactive demo"
              >
                <Play size={16} className="text-fp-accent" />
                Explore the demo
              </Button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
