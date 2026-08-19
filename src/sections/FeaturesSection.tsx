// src/sections/FeaturesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { features } from '../data/features';

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to stay on track"
            description="Built around how people actually work — not how they wish they could."
          />
        </ScrollReveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`
                  group relative rounded-2xl p-7 border h-full cursor-default
                  bg-fp-card border-fp-border
                  hover:border-fp-accent/30 transition-colors duration-300
                  ${feature.accent ? 'ring-1 ring-fp-accent/20' : ''}
                `}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fp-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                {/* Accent badge for featured item */}
                {feature.accent && (
                  <div
                    className="absolute top-4 right-4 text-xs font-medium text-fp-accent-soft bg-fp-accent/10 border border-fp-accent/20 px-2.5 py-1 rounded-full"
                    aria-label="Core feature"
                  >
                    Core
                  </div>
                )}

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`
                      inline-flex w-11 h-11 rounded-xl items-center justify-center mb-5
                      ${feature.accent
                        ? 'bg-fp-accent text-white shadow-accent'
                        : 'bg-white/5 border border-fp-border text-fp-muted group-hover:bg-fp-accent/10 group-hover:text-fp-accent-soft group-hover:border-fp-accent/25'
                      }
                      transition-all duration-300
                    `}
                  >
                    <feature.icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-display font-bold text-lg text-fp-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-fp-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
