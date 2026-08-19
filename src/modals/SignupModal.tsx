// src/modals/SignupModal.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff, Zap, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Stage = 'form' | 'success';

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [stage, setStage] = useState<Stage>('form');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Trap focus in modal
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => nameRef.current?.focus(), 100);
      // Reset form on open
      setStage('form');
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
      setLoading(false);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.includes('@')) newErrors.email = 'Enter a valid email address';
    if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate async (frontend only — no real auth)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStage('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="signup-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              ref={dialogRef}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md bg-fp-secondary border border-fp-border rounded-2xl shadow-card overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-7 pt-6 pb-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-fp-accent flex items-center justify-center">
                    <Zap size={15} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-display font-bold text-fp-text">FlowPilot</span>
                </div>
                <button
                  aria-label="Close signup modal"
                  onClick={onClose}
                  className="p-2 text-fp-subtle hover:text-fp-muted rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-7">
                <AnimatePresence mode="wait">
                  {stage === 'form' ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h2 id="signup-title" className="font-display font-bold text-2xl text-fp-text mb-1.5">
                        Start building with FlowPilot
                      </h2>
                      <p className="text-fp-muted text-sm mb-7">
                        Create your workspace in seconds.
                      </p>

                      {/* Demo disclaimer */}
                      <div className="bg-fp-accent/5 border border-fp-accent/15 rounded-xl px-4 py-3 mb-6">
                        <p className="text-xs text-fp-muted">
                          <span className="text-fp-accent-soft font-medium">Demo signup — </span>
                          no account is actually created. No data is transmitted.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="signup-name"
                            className="block text-fp-muted text-sm font-medium mb-2"
                          >
                            Full name
                          </label>
                          <input
                            ref={nameRef}
                            id="signup-name"
                            type="text"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Jay Pathak"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            className={`
                              w-full bg-fp-bg border rounded-xl px-4 py-3 text-fp-text text-sm
                              placeholder:text-fp-subtle outline-none transition-all duration-150
                              focus:ring-2 focus:ring-fp-accent
                              ${errors.name ? 'border-red-500/60' : 'border-fp-border hover:border-fp-accent/30'}
                            `}
                          />
                          {errors.name && (
                            <p id="name-error" role="alert" className="text-red-400 text-xs mt-1.5">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="signup-email"
                            className="block text-fp-muted text-sm font-medium mb-2"
                          >
                            Email address
                          </label>
                          <input
                            id="signup-email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className={`
                              w-full bg-fp-bg border rounded-xl px-4 py-3 text-fp-text text-sm
                              placeholder:text-fp-subtle outline-none transition-all duration-150
                              focus:ring-2 focus:ring-fp-accent
                              ${errors.email ? 'border-red-500/60' : 'border-fp-border hover:border-fp-accent/30'}
                            `}
                          />
                          {errors.email && (
                            <p id="email-error" role="alert" className="text-red-400 text-xs mt-1.5">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Password */}
                        <div>
                          <label
                            htmlFor="signup-password"
                            className="block text-fp-muted text-sm font-medium mb-2"
                          >
                            Password
                          </label>
                          <div className="relative">
                            <input
                              id="signup-password"
                              type={showPassword ? 'text' : 'password'}
                              autoComplete="new-password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="At least 8 characters"
                              aria-invalid={!!errors.password}
                              aria-describedby={errors.password ? 'password-error' : undefined}
                              className={`
                                w-full bg-fp-bg border rounded-xl px-4 py-3 pr-12 text-fp-text text-sm
                                placeholder:text-fp-subtle outline-none transition-all duration-150
                                focus:ring-2 focus:ring-fp-accent
                                ${errors.password ? 'border-red-500/60' : 'border-fp-border hover:border-fp-accent/30'}
                              `}
                            />
                            <button
                              type="button"
                              aria-label={showPassword ? 'Hide password' : 'Show password'}
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-fp-subtle hover:text-fp-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent rounded cursor-pointer"
                            >
                              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                          {errors.password && (
                            <p id="password-error" role="alert" className="text-red-400 text-xs mt-1.5">
                              {errors.password}
                            </p>
                          )}
                        </div>

                        {/* Submit */}
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="w-full"
                          disabled={loading}
                          aria-label={loading ? 'Creating account...' : 'Create account'}
                        >
                          {loading ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Creating account...
                            </>
                          ) : (
                            'Create account'
                          )}
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-fp-success/15 border border-fp-success/30 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 size={28} className="text-fp-success" />
                      </div>
                      <h2 id="signup-title" className="font-display font-bold text-2xl text-fp-text mb-3">
                        You're all set!
                      </h2>
                      <p className="text-fp-muted text-sm leading-relaxed mb-7">
                        This is a demo — no account was actually created. In a real product, you'd be headed to your workspace right now.
                      </p>
                      <Button variant="secondary" size="md" onClick={onClose}>
                        Back to the page
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
