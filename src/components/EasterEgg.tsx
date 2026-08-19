// src/components/EasterEgg.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

interface EasterEggProps {
  visible: boolean;
  onClose: () => void;
}

export function EasterEgg({ visible, onClose }: EasterEggProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="easter-egg-overlay"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Easter egg activated"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-center max-w-sm mx-4 bg-fp-card border border-fp-accent/40 rounded-2xl p-10 shadow-accent"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-fp-accent-soft"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 15)],
                  y: [0, -40 - i * 10],
                }}
                transition={{
                  delay: 0.2 + i * 0.08,
                  duration: 1.2,
                  ease: 'easeOut',
                }}
                style={{
                  top: '40%',
                  left: '50%',
                }}
                aria-hidden="true"
              />
            ))}

            {/* Close button */}
            <button
              aria-label="Close easter egg"
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-fp-subtle hover:text-fp-muted rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-fp-accent/15 border border-fp-accent/30 flex items-center justify-center mx-auto mb-5">
              <Sparkles size={28} className="text-fp-accent-soft" />
            </div>

            <h3 className="font-display font-bold text-2xl text-fp-text mb-3">
              Nice.
            </h3>
            <p className="text-fp-accent-soft font-medium text-sm mb-2">
              You found the hidden focus mode.
            </p>
            <p className="text-fp-muted text-xs leading-relaxed">
              ↑ ↑ ↓ ↓ ← → ← → B A — the classic sequence.
              Real focus mode is less dramatic, but works just as well.
            </p>

            <button
              onClick={onClose}
              className="mt-7 text-xs text-fp-subtle hover:text-fp-muted transition-colors cursor-pointer underline underline-offset-2"
            >
              Back to work
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
