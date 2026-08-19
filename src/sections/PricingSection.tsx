// src/sections/PricingSection.tsx
import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { pricingTiers } from '../data/pricing';

interface PricingSectionProps {
  onSignupOpen: () => void;
}

export function PricingSection({ onSignupOpen }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative py-20 md:py-28"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,92,252,0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(148,163,184,0.08), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, honest pricing"
            description="Start free. Upgrade when you need more. These are example demo prices for a fictional product."
          />
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.15}>
              <div
                className={`
                  relative rounded-2xl border p-8 h-full flex flex-col
                  transition-all duration-300
                  ${tier.highlighted
                    ? 'bg-fp-card border-fp-accent/40 ring-1 ring-fp-accent/20 shadow-accent'
                    : 'bg-fp-card border-fp-border hover:border-fp-accent/20'
                  }
                `}
              >
                {/* Popular badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="accent">{tier.badge}</Badge>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-lg text-fp-text mb-1">{tier.name}</h3>
                  <p className="text-fp-muted text-sm">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 flex items-end gap-1">
                  <span className="font-display font-bold text-5xl text-fp-text">{tier.price}</span>
                  <span className="text-fp-muted text-sm mb-2">/ {tier.period}</span>
                </div>

                {/* CTA */}
                <Button
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  size="md"
                  className="w-full mb-8"
                  onClick={onSignupOpen}
                  aria-label={`${tier.cta} — ${tier.name} plan`}
                >
                  {tier.cta}
                </Button>

                {/* Feature list */}
                <ul className="space-y-3 flex-1" aria-label={`${tier.name} plan features`}>
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircle2 size={16} className="text-fp-success flex-shrink-0" />
                      ) : (
                        <X size={16} className="text-fp-border flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-fp-muted' : 'text-fp-subtle line-through'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <ScrollReveal>
          <p className="text-center text-fp-subtle text-xs mt-8">
            Demo pricing only — FlowPilot is a fictional product created for a frontend evaluation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
