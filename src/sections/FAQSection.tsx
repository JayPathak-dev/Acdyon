// src/sections/FAQSection.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { faqItems } from '../data/faq';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItemComponent({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        isOpen ? 'border-fp-accent/30 bg-fp-card' : 'border-fp-border bg-fp-card hover:border-fp-accent/20'
      }`}
    >
      <button
        id={id}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent focus-visible:ring-inset"
        onClick={onToggle}
      >
        <span className="font-medium text-fp-text text-sm md:text-base pr-2">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex-shrink-0"
          aria-hidden="true"
        >
          <ChevronDown
            size={18}
            className={`transition-colors ${isOpen ? 'text-fp-accent' : 'text-fp-subtle'}`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 pt-0">
              <div className="h-px bg-fp-border mb-5" aria-hidden="true" />
              <p className="text-fp-muted text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-20 md:py-28"
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(148,163,184,0.08), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Answers to what people usually want to know about FlowPilot."
          />
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItemComponent
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
