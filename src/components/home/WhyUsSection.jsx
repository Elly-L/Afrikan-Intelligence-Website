import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, TrendingUp, Heart, Users, X, Check } from 'lucide-react';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const tr = useT();

  const pillars = [
    { icon: Shield,    titleKey: 'p1title', descKey: 'p1desc', emoji: '🏛️' },
    { icon: TrendingUp,titleKey: 'p2title', descKey: 'p2desc', emoji: '📈' },
    { icon: Heart,     titleKey: 'p3title', descKey: 'p3desc', emoji: '🌍' },
    { icon: Users,     titleKey: 'p4title', descKey: 'p4desc', emoji: '🤝' },
  ];

  const competitors = [
    { nameKey: 'comp1', weaknessKey: 'comp1weak', oursKey: 'comp1ours' },
    { nameKey: 'comp2', weaknessKey: 'comp2weak', oursKey: 'comp2ours' },
    { nameKey: 'comp3', weaknessKey: 'comp3weak', oursKey: 'comp3ours' },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-base)', padding: '5rem 0 6rem' }}
    >
      {/* BG accent */}
      <div
        className="absolute top-0 right-0 w-[40vw] h-full opacity-[0.035] pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #D97706 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: '#D97706' }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#D97706' }}>
              {tr(T.whyUs.label)}
            </span>
            <div className="h-px w-10" style={{ background: '#D97706' }} />
          </div>
          <h2
            className="font-black leading-[0.95]"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 5.5vw, 5rem)', color: '#FAFAF9' }}
          >
            {tr(T.whyUs.title)}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base md:text-lg" style={{ color: '#78716C' }}>
            {tr(T.whyUs.subtitle)}
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 md:mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.titleKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -7, scale: 1.02 }}
              className="rounded-2xl p-6 sm:p-7 relative overflow-hidden group"
              style={{ background: 'rgba(217,119,6,0.06)', border: '1px solid rgba(217,119,6,0.18)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(217,119,6,0.5), transparent)' }}
              />
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="font-black text-base sm:text-lg mb-2.5" style={{ color: '#FAFAF9' }}>
                {tr(T.whyUs[p.titleKey])}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#78716C' }}>
                {tr(T.whyUs[p.descKey])}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Competitive moat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.42 }}
        >
          <h3 className="font-black text-xl sm:text-2xl mb-5 text-center" style={{ color: '#FAFAF9' }}>
            {tr(T.whyUs.moat)}
          </h3>

          {/* Table */}
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(217,119,6,0.22)' }}>
            {/* Header */}
            <div
              className="grid grid-cols-3 px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-widest"
              style={{ background: 'rgba(217,119,6,0.1)', borderBottom: '1px solid rgba(217,119,6,0.18)' }}
            >
              <span style={{ color: '#78716C' }}>{tr(T.whyUs.competitor)}</span>
              <span className="text-center" style={{ color: '#EF4444' }}>{tr(T.whyUs.weakness)}</span>
              <span className="text-center" style={{ color: '#10B981' }}>{tr(T.whyUs.advantage)}</span>
            </div>

            {competitors.map((row, i) => (
              <div
                key={row.nameKey}
                className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-5 gap-3 text-xs sm:text-sm items-start"
                style={{
                  borderBottom: i < competitors.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  background: i % 2 === 0 ? 'rgba(0,0,0,0.15)' : 'transparent',
                }}
              >
                <span className="font-bold" style={{ color: '#E7E5E4' }}>
                  {tr(T.whyUs[row.nameKey])}
                </span>
                <span className="text-center leading-snug" style={{ color: '#57534E' }}>
                  {tr(T.whyUs[row.weaknessKey])}
                </span>
                <span className="text-center font-semibold leading-snug" style={{ color: '#D97706' }}>
                  {tr(T.whyUs[row.oursKey])}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm mt-5 italic" style={{ color: '#44403C' }}>
            {tr(T.whyUs.quoteLabel)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}