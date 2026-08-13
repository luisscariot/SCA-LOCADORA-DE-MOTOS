'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FleetSection } from '@/components/FleetSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FaqSection } from '@/components/FaqSection';
import { GoogleReviewsSection } from '@/components/GoogleReviewsSection';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';
import { Footer } from '@/components/Footer';

export default function Home() {
  const whatsappNumber = '5554996139870';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Sticky Header */}
      <Header whatsappNumber={whatsappNumber} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero whatsappNumber={whatsappNumber} />

        {/* Motorcycle Fleet Section */}
        <FleetSection whatsappNumber={whatsappNumber} />

        {/* Core Benefits */}
        <BenefitsSection />

        {/* How It Works Workflow */}
        <HowItWorksSection />

        {/* FAQ Section */}
        <FaqSection whatsappNumber={whatsappNumber} />

        {/* Google Customer Reviews Section */}
        <GoogleReviewsSection />
      </main>

      {/* Footer */}
      <Footer whatsappNumber={whatsappNumber} />

      {/* WhatsApp Floating Contact Button */}
      <WhatsAppFloatingButton whatsappNumber={whatsappNumber} />
    </div>
  );
}
