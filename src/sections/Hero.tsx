// src/sections/Hero.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, CheckCircle2, Circle, ChevronRight, Brain } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { smoothScrollTo } from '../lib/utils';

interface HeroProps {
  onSignupOpen: () => void;
}

// Dashboard tasks for the hero preview
const heroTasks = [
  { id: 1, label: 'Finalize homepage', done: true },
  { id: 2, label: 'Review analytics', done: false },
  { id: 3, label: 'Publish deployment', done: false },
];

function HeroDashboard() {
  const [progress, setProgress] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Animate progress bar after mount
    const timer = setTimeout(() => setProgress(78), 600);
    // Show notification after delay
    const notifTimer = setTimeout(() => setShowNotification(true), 1800);
    return () => { clearTimeout(timer); clearTimeout(notifTimer); };
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-fp-border shadow-card"
      style={{ background: 'linear-gradient(145deg, #0e1320 0%, #121827 100%)' }}
      aria-label="FlowPilot dashboard preview"
      role="img"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-fp-border">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1 bg-fp-bg/60 rounded-md px-3 py-1 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-fp-accent" />
          <span className="text-xs text-fp-subtle">flowpilot.app/workspace</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-5 space-y-5">
        {/* Greeting */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-fp-muted text-xs uppercase tracking-widest mb-1">Good morning</p>
            <h3 className="text-fp-text font-display font-bold text-lg">Jay</h3>
          </div>
          <div className="flex items-center gap-1.5 bg-fp-accent/10 border border-fp-accent/20 rounded-lg px-3 py-1.5">
            <div className="w-2 h-2 rounded-full bg-fp-success animate-pulse" />
            <span className="text-xs text-fp-accent-soft font-medium">3 focus tasks</span>
          </div>
        </div>

        {/* Project progress */}
        <div className="bg-fp-bg/40 rounded-xl p-4 border border-fp-border space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-fp-muted text-xs font-medium">Website Redesign</span>
            <span className="text-fp-accent-soft text-xs font-semibold">{progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #7C5CFC, #A78BFA)' }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
          </div>
          <p className="text-fp-subtle text-xs">On track · 3 days remaining</p>
        </div>

        {/* Tasks */}
        <div className="space-y-2">
          <p className="text-fp-subtle text-xs font-semibold uppercase tracking-widest mb-3">Next up</p>
          {heroTasks.map((task, i) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
              className="flex items-center gap-3 py-1.5"
            >
              {task.done ? (
                <CheckCircle2 size={16} className="text-fp-success flex-shrink-0" />
              ) : (
                <Circle size={16} className="text-fp-subtle flex-shrink-0" />
              )}
              <span
                className={`text-sm ${
                  task.done
                    ? 'line-through text-fp-subtle'
                    : 'text-fp-muted'
                }`}
              >
                {task.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* AI Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="border border-fp-accent/25 bg-fp-accent/5 rounded-xl p-4 space-y-2"
        >
          <div className="flex items-center gap-2">
            <Brain size={14} className="text-fp-accent-soft" />
            <span className="text-xs font-semibold text-fp-accent-soft uppercase tracking-wider">AI suggestion</span>
          </div>
          <p className="text-fp-muted text-xs leading-relaxed">
            "Finish the homepage review before starting the analytics task — it unblocks the rest of the sprint."
          </p>
        </motion.div>

        {/* Floating notification */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={showNotification ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-4 right-4 glass border border-fp-border rounded-xl px-4 py-3 flex items-center gap-3 shadow-card max-w-[200px]"
          aria-live="polite"
        >
          <div className="w-7 h-7 rounded-lg bg-fp-success/15 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={14} className="text-fp-success" />
          </div>
          <div>
            <p className="text-xs font-medium text-fp-text">Task complete</p>
            <p className="text-xs text-fp-subtle">Homepage draft ✓</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Hero({ onSignupOpen }: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(124, 92, 252, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(167, 139, 250, 0.05) 0%, transparent 60%)
          `,
        }}
      />
      {/* Accent orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(124, 92, 252, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Badge className="mb-6 inline-flex">
                <Sparkles size={11} />
                AI-powered workflow intelligence
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display text-hero-mobile sm:text-5xl lg:text-hero-desktop xl:text-hero-xl text-fp-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Turn scattered work into{' '}
              <span className="text-gradient-accent">a clear plan.</span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              className="text-fp-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              FlowPilot brings your tasks, priorities, and project signals into one focused workspace —
              so you always know what to work on next.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onSignupOpen}
                aria-label="Start for free — open signup"
              >
                Start for free
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => smoothScrollTo('demo')}
                aria-label="See how FlowPilot works"
              >
                <Play size={16} className="text-fp-accent" />
                See how it works
              </Button>
            </motion.div>

            {/* Trust indicators — honest */}
            <motion.div
              className="mt-10 flex items-center gap-6 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[
                'No credit card required',
                'Free to start',
                'Cancel anytime',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-fp-subtle text-sm">
                  <ChevronRight size={14} className="text-fp-accent" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard Preview */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glow behind dashboard */}
            <div
              className="absolute -inset-4 rounded-3xl"
              aria-hidden="true"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(124, 92, 252, 0.12) 0%, transparent 70%)',
                filter: 'blur(24px)',
              }}
            />
            <HeroDashboard />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-fp-subtle text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-0.5 h-8 rounded-full bg-gradient-to-b from-fp-accent/60 to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
