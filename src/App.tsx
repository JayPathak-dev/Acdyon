// src/App.tsx
import React, { useState, useCallback } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ProductPrinciples } from './sections/ProductPrinciples';
import { ProblemSection } from './sections/ProblemSection';
import { ProductDemo } from './sections/ProductDemo';
import { FeaturesSection } from './sections/FeaturesSection';
import { WorkflowSection } from './sections/WorkflowSection';
import { FeatureSpotlight } from './sections/FeatureSpotlight';
import { MetricsSection } from './sections/MetricsSection';
import { PricingSection } from './sections/PricingSection';
import { FAQSection } from './sections/FAQSection';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';
import { SignupModal } from './modals/SignupModal';
import { EasterEgg } from './components/EasterEgg';
import { useEasterEgg } from './hooks/useEasterEgg';

function App() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [easterEggVisible, setEasterEggVisible] = useState(false);

  const handleEasterEgg = useCallback(() => {
    setEasterEggVisible(true);
  }, []);

  useEasterEgg(handleEasterEgg);

  const openSignup = useCallback(() => setSignupOpen(true), []);
  const closeSignup = useCallback(() => setSignupOpen(false), []);
  const closeEasterEgg = useCallback(() => setEasterEggVisible(false), []);

  return (
    <div className="min-h-screen" style={{ background: '#080B14' }}>
      {/* Navigation */}
      <Navbar onSignupOpen={openSignup} />

      {/* Main content */}
      <main id="main-content">
        {/* 1. Hero */}
        <Hero onSignupOpen={openSignup} />

        {/* 2. Product Principles */}
        <ProductPrinciples />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Interactive Product Demo */}
        <ProductDemo />

        {/* 5. Features Grid */}
        <FeaturesSection />

        {/* 6. Workflow Steps */}
        <WorkflowSection />

        {/* 7. Feature Spotlight */}
        <FeatureSpotlight />

        {/* 8. Demo Metrics */}
        <MetricsSection />

        {/* 9. Pricing */}
        <PricingSection onSignupOpen={openSignup} />

        {/* 10. FAQ */}
        <FAQSection />

        {/* 11. Final CTA */}
        <FinalCTA onSignupOpen={openSignup} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <SignupModal isOpen={signupOpen} onClose={closeSignup} />
      <EasterEgg visible={easterEggVisible} onClose={closeEasterEgg} />
    </div>
  );
}

export default App;
