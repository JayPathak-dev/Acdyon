# FlowPilot

> **Turn scattered work into a clear plan.**

FlowPilot is an AI-powered productivity and workflow management platform for individuals and small teams. Built as a premium SaaS landing page for the **Acdyon Technologies Frontend Challenge — Part 2**.

![FlowPilot Hero](./public/favicon.svg)

---

## 🚀 Live Demo

> Deploy to Vercel with one click — see [Deployment](#deployment) below.

---

## 📦 Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | React 19 + TypeScript | Type safety, component model |
| Build tool | Vite | Fast HMR, optimized production builds |
| Styling | Tailwind CSS v3 | Utility-first, consistent design tokens |
| Animation | Framer Motion | Purposeful, accessible animations |
| Icons | Lucide React | Consistent, lightweight icon set |
| Routing | — (SPA, no routing needed) | Single landing page |
| Deployment | Vercel | Zero-config, CDN-first |

---

## 🏗 Project Architecture

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Variant-based button with micro-animation
│   │   ├── Badge.tsx           # Status/label badge
│   │   ├── SectionHeading.tsx  # Consistent section headers
│   │   ├── ScrollReveal.tsx    # Intersection-observer scroll animation
│   │   └── AnimatedCounter.tsx # Count-up animation on scroll-in
│   └── EasterEgg.tsx           # Konami code easter egg overlay
├── sections/
│   ├── Navbar.tsx              # Sticky navbar with mobile drawer
│   ├── Hero.tsx                # Hero + live dashboard preview
│   ├── ProductPrinciples.tsx   # 3 honest product principles
│   ├── ProblemSection.tsx      # Problem statement cards
│   ├── ProductDemo.tsx         # Interactive tabbed dashboard demo
│   ├── FeaturesSection.tsx     # 6 feature cards
│   ├── WorkflowSection.tsx     # 3-step workflow visualization
│   ├── FeatureSpotlight.tsx    # Split-section feature highlight
│   ├── MetricsSection.tsx      # Demo workspace metrics
│   ├── PricingSection.tsx      # Free + Pro pricing tiers
│   ├── FAQSection.tsx          # Accordion FAQ
│   ├── FinalCTA.tsx            # Closing call to action
│   └── Footer.tsx              # Footer with nav + social
├── modals/
│   └── SignupModal.tsx         # Demo signup modal (frontend only)
├── data/
│   ├── features.ts             # Feature card content
│   ├── faq.ts                  # FAQ questions and answers
│   └── pricing.ts              # Pricing tier data
├── hooks/
│   ├── useScrollNav.ts         # Scroll position for navbar state
│   ├── useReducedMotion.ts     # prefers-reduced-motion hook
│   └── useEasterEgg.ts         # Konami code listener
├── lib/
│   └── utils.ts                # cn() helper, smoothScrollTo
├── App.tsx                     # Root — assembles all sections
├── main.tsx                    # Entry point
└── index.css                   # Design system tokens + Tailwind directives
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repo
git clone <your-repo-url>
cd Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎮 Interactive Features

| Feature | How to use |
|---------|-----------|
| **Dashboard preview** | Hero section — animated on load |
| **Tab switching** | Product Demo section → Today / Projects / Insights |
| **Task completion** | Product Demo → Today tab → click any task |
| **FAQ accordion** | FAQ section → click any question |
| **Signup modal** | Any "Start for free" button |
| **Mobile menu** | Resize to < 768px → hamburger icon |
| **Easter egg** | Type `↑ ↑ ↓ ↓ ← → ← → B A` on any keyboard |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Status |
|-----------|-------|--------|
| Mobile S | 360px | ✅ Tested |
| Mobile M | 390px | ✅ Tested |
| Tablet | 768px | ✅ Tested |
| Laptop | 1024px | ✅ Tested |
| Desktop | 1440px | ✅ Tested |

---

## ♿ Accessibility

- Semantic HTML5 throughout (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`)
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on all interactive elements
- `aria-expanded` on FAQ accordion buttons
- `role="dialog"` + `aria-modal` on modals
- `role="checkbox"` on interactive task items
- Visible `:focus-visible` ring on all focusable elements
- `prefers-reduced-motion` respected via `useReducedMotion` hook
- Keyboard navigation: full Tab/Enter/Space/Escape support
- Color contrast: all text meets WCAG AA minimum

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite** (auto-detected)
4. Deploy — no configuration needed

### Manual

```bash
npm run build
# Upload the dist/ folder to any static host
```

---

## 📋 Page Structure

1. **Navbar** — Sticky, blur on scroll, mobile hamburger drawer
2. **Hero** — Headline + live dashboard visualization
3. **Product Principles** — Clarity, Focus, Control
4. **Problem Section** — Why users need FlowPilot
5. **Interactive Demo** — Tabbed dashboard (Today/Projects/Insights)
6. **Features** — 6-card feature grid
7. **Workflow** — 3-step Capture → Prioritize → Execute
8. **Feature Spotlight** — Focus Mode split-section
9. **Demo Metrics** — Animated counters (clearly labeled demo data)
10. **Pricing** — Free + Pro tiers (demo pricing)
11. **FAQ** — 5-item accordion
12. **Final CTA** — Closing call to action
13. **Footer** — Navigation + disclaimer

---

## ⚠️ Honesty Disclaimer

FlowPilot is a **fictional product** built for a frontend evaluation challenge.

- No real user accounts are created
- No data is transmitted or stored
- Pricing shown is example/demo pricing only
- Metrics shown are illustrative demo data
- Social links are placeholder (non-functional)

---

## 📄 License

This project was created for the Acdyon Technologies Frontend Challenge. All code is original work.

© 2026 FlowPilot — Demo product created for frontend evaluation.
