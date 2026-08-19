// src/sections/Navbar.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useScrollNav } from '../hooks/useScrollNav';
import { Button } from '../components/ui/Button';
import { smoothScrollTo } from '../lib/utils';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Product', href: 'demo' },
  { label: 'Features', href: 'features' },
  { label: 'Workflow', href: 'workflow' },
  { label: 'Pricing', href: 'pricing' },
];

interface NavbarProps {
  onSignupOpen: () => void;
}

export function Navbar({ onSignupOpen }: NavbarProps) {
  const scrolled = useScrollNav(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    smoothScrollTo(href);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-strong border-b border-fp-border shadow-card'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        >
          {/* Logo */}
          <a
            href="#"
            aria-label="FlowPilot home"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent rounded-lg"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="w-8 h-8 rounded-lg bg-fp-accent flex items-center justify-center shadow-accent group-hover:shadow-glow transition-shadow duration-300">
              <Zap size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-fp-text text-lg tracking-tight">
              FlowPilot
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm text-fp-muted hover:text-fp-text transition-colors duration-150 rounded-lg hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onSignupOpen}
              className="text-sm text-fp-muted hover:text-fp-text transition-colors duration-150 px-3 py-2 rounded-lg hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent cursor-pointer"
            >
              Log in
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={onSignupOpen}
              aria-label="Start for free"
            >
              Start for free
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-fp-muted hover:text-fp-text transition-colors rounded-lg hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mobile-nav-overlay md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-label="Mobile navigation"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong border-l border-fp-border md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-fp-border">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-fp-accent flex items-center justify-center">
                    <Zap size={14} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-display font-bold text-fp-text">FlowPilot</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 text-fp-muted hover:text-fp-text rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 p-5">
                <ul className="space-y-1" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left px-4 py-3 text-fp-muted hover:text-fp-text hover:bg-white/5 rounded-xl transition-all duration-150 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent cursor-pointer"
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTAs */}
              <div className="p-5 border-t border-fp-border space-y-3">
                <button
                  onClick={() => { onSignupOpen(); setMobileOpen(false); }}
                  className="w-full text-sm text-fp-muted hover:text-fp-text transition-colors py-3 rounded-xl hover:bg-white/5 border border-fp-border cursor-pointer"
                >
                  Log in
                </button>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => { onSignupOpen(); setMobileOpen(false); }}
                >
                  Start for free
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
