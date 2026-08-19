# DECISIONS.md — FlowPilot Frontend Challenge

> Technical decisions, trade-offs, and honest notes on AI usage.

---

## 1. Why This Approach?

### React + TypeScript
React was chosen for its component model — each section of the landing page maps cleanly to a component, which made it easy to reason about state isolation (task completion in the demo, FAQ open state, modal visibility) without prop-drilling chaos. TypeScript caught several interface mismatches early (e.g. `PricingTier` feature shape, `FAQItem` structure) and made refactoring the data layer trivial. The tradeoff is initial setup cost vs. a plain JS project — worth it for a project of this scope.

### Vite
Vite's HMR is near-instant, which matters when iterating on visual design. The production build output is also highly optimized (tree-shaking, code-splitting). No configuration needed for React + TypeScript — the template just works.

### Tailwind CSS v3
Tailwind was specified by the assignment. I extended it with a custom design token system (`fp-bg`, `fp-card`, `fp-accent`, etc.) that maps to CSS variables defined in `index.css`. This gave two benefits: (1) Tailwind's utility classes for rapid layout and spacing, (2) CSS variables for runtime theming if needed later. I deliberately avoided using Tailwind's full color palette everywhere — the design uses only tokens from the specified color system.

### Framer Motion
Framer Motion handles the hero entrance animation, scroll reveals (`ScrollReveal` wrapper), FAQ accordion height animation, modal entrance/exit, and tab transitions. Every animation is gated behind a `useReducedMotion()` hook — if the user has `prefers-reduced-motion: reduce` enabled, all non-essential animations are bypassed. I avoided animating every card hover — only elements that benefit from motion (modals, tab changes, checkboxes) are animated.

### Lucide React
Consistent iconography with minimal bundle impact. Icons are imported individually (tree-shaken by Vite). Used to communicate meaning — not decoration.

### Component Architecture Decision
I separated sections from UI primitives from data:
- `sections/` = page-level components (own their layout)
- `components/ui/` = design system primitives (no layout opinion)
- `data/` = content separated from presentation

This means a content change (new FAQ item, new feature card) requires zero component changes — just edit the data file. Another engineer can maintain this without reading component code.

---

## 2. Trade-offs

### Frontend-only auth
The signup modal is frontend-only — form validation, loading state simulation, and success screen are all local state. No real authentication, no API calls, no password storage. This was intentional: building a real auth backend was out of scope for a frontend evaluation, and fabricating a fake backend would have been misleading. The modal explicitly says "Demo signup — no account is actually created."

**If I had another week:** I'd connect this to Firebase Auth (or a lightweight BFF) and implement real workspace creation. The modal structure and form validation already match what a real implementation would need.

### No React Router
The assignment is a single-page landing page. Adding React Router for one page would add bundle weight and complexity with no benefit. Navigation is handled by `smoothScrollTo()` — a small utility using native `scrollIntoView`. If this grew into a multi-page product (signup, dashboard, settings), React Router would be the right next step.

### Interactive demo is mocked
The product demo section shows a realistic-looking dashboard with real React state — tab switching, task completion, progress bars, bar charts. But the data is static. In a real product, this would connect to a live workspace API. I chose a realistic-looking mock over a fake "screenshot" because it demonstrates state management and component design thinking without implying the backend exists.

### Pricing section disclaimer
The pricing is clearly labeled as "Demo pricing only — FlowPilot is a fictional product." This is deliberate. The assignment explicitly said not to fabricate metrics, reviews, or commercial claims. I applied the same principle to pricing.

---

## 3. AI Usage (Honest)

AI tools (specifically this AI coding assistant) were used for:

- **Scaffolding**: Generating the initial component structure and boilerplate (data files, hooks, utility functions)
- **Debugging**: Identifying the `Github` named export issue in the installed version of lucide-react
- **Copy variations**: Brainstorming the product principles, problem section copy, and FAQ answers
- **Animation logic**: The `AnimatedCounter` easing function and the `useEasterEgg` key sequence matcher

I personally:
- Designed the visual system (color tokens, spacing rhythm, typography hierarchy)
- Reviewed every component and verified it matched the design intent
- Tested responsive behavior across breakpoints
- Verified all interactive states (FAQ, modal, task completion, tab switching) functioned correctly
- Made the architectural decisions about data separation and component boundaries
- Wrote the accessibility attributes (ARIA labels, roles, keyboard handlers)

The generated code was treated as a starting point, not a final answer. Components were inspected, adjusted, and in some cases restructured when the initial output didn't match the design intent.

---

## 4. What I'd Do Differently With More Time

1. **Real authentication** — connect to Firebase Auth or Supabase for actual workspace creation
2. **Persistent task state** — localStorage or a backend so task completion survives a page refresh
3. **Actual AI integration** — wire the "AI suggestion" UI to a real Gemini/OpenAI API call with task context
4. **E2E tests** — Playwright tests for the critical paths (modal open/close, FAQ toggle, tab switching)
5. **Performance audit** — run Lighthouse and optimize LCP (hero dashboard is the heaviest element)
6. **Storybook** — document the UI component library for team consumption

---

*Created for the Acdyon Technologies Frontend Challenge — Part 2: The Premium Home Page.*
