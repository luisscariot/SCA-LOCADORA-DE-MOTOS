'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FleetSection } from '@/components/FleetSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FaqSection } from '@/components/FaqSection';
import { GoogleReviewsSection } from '@/components/GoogleReviewsSection';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';
import { Footer } from '@/components/Footer';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';

export default function Home() {
  const whatsappNumber = '5554996139870';
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#politica-de-privacidade') {
        setIsPrivacyModalOpen(true);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Sticky Header */}
      <Header whatsappNumber={whatsappNumber} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero whatsappNumber={whatsappNumber} />

        {/* Motorcycle Fleet Section */}
        <FleetSection whatsappNumber={whatsappNumber} />

        {/* Google Customer Reviews Section */}
        <GoogleReviewsSection />

        {/* Core Benefits - Por que escolher a SCA Locadora de Motos */}
        <BenefitsSection />

        {/* How It Works Workflow */}
        <HowItWorksSection />

        {/* FAQ Section */}
        <FaqSection whatsappNumber={whatsappNumber} />
      </main>

      {/* Footer */}
      <Footer
        whatsappNumber={whatsappNumber}
        onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
      />

      {/* WhatsApp Floating Contact Button */}
      <WhatsAppFloatingButton whatsappNumber={whatsappNumber} />

      {/* Interactive Privacy Policy & LGPD Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        whatsappNumber={whatsappNumber}
      />
    </div>
  );
}
