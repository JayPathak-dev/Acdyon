// src/sections/Footer.tsx
import React from 'react';
import { Zap, Code2, Link2, MessageSquare } from 'lucide-react';
import { smoothScrollTo } from '../lib/utils';

const footerNav = {
  Product: ['demo', 'features', 'workflow', 'pricing'],
  Resources: ['#', '#', '#'],
};

const productLabels: Record<string, string> = {
  demo: 'Product',
  features: 'Features',
  workflow: 'Workflow',
  pricing: 'Pricing',
};

const resourceLabels = ['Documentation', 'Help', 'Privacy'];

const socialLinks = [
  { icon: Code2, label: 'GitHub (demo link)', href: '#' },
  { icon: Link2, label: 'LinkedIn (demo link)', href: '#' },
  { icon: MessageSquare, label: 'X / Twitter (demo link)', href: '#' },
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative border-t border-fp-border py-16"
      style={{ background: '#080B14' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-fp-accent flex items-center justify-center">
                <Zap size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-fp-text text-lg">FlowPilot</span>
            </div>
            <p className="text-fp-muted text-sm max-w-xs leading-relaxed">
              Clear work. Better focus.
            </p>
            <p className="text-fp-subtle text-xs leading-relaxed max-w-xs">
              FlowPilot is a demo product created for a frontend engineering evaluation. No real data is collected or stored.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-lg border border-fp-border bg-fp-card text-fp-subtle hover:text-fp-muted hover:border-fp-accent/25 transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent cursor-default"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Product nav */}
          <div>
            <h3 className="text-fp-text text-sm font-semibold mb-5">Product</h3>
            <ul className="space-y-3" role="list">
              {Object.keys(productLabels).map((href) => (
                <li key={href}>
                  <button
                    onClick={() => smoothScrollTo(href)}
                    className="text-fp-muted text-sm hover:text-fp-text transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent rounded"
                  >
                    {productLabels[href]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-fp-text text-sm font-semibold mb-5">Resources</h3>
            <ul className="space-y-3" role="list">
              {resourceLabels.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${label} (demo link — not functional)`}
                    className="text-fp-muted text-sm hover:text-fp-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-accent rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-fp-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-fp-subtle text-xs">
            © 2026 FlowPilot. Demo product created for frontend evaluation.
          </p>
          <p className="text-fp-subtle text-xs">
            Built with React · Vite · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
