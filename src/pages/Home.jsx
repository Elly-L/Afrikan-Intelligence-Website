import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import MarketSection from '@/components/home/MarketSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import ImpactSection from '@/components/home/ImpactSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-base)' }}>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MarketSection />
      <ImpactSection />
      <WhyUsSection />
      <CTASection />
    </main>
  );
}