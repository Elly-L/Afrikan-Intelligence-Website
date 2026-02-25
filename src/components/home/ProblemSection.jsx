import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Shuffle, Volume2, AlertTriangle } from 'lucide-react';
import AfricanBackground from '@/components/shared/AfricanBackground';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

const STAT_VALUES = ['90%', '4+ sec', '2,140'];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const tr = useT();

  const problems = [
    { icon: Database, num: '01', titleKey: 'p01title', descKey: 'p01desc' },
    { icon: Shuffle,  num: '02', titleKey: 'p02title', descKey: 'p02desc' },
    { icon: Volume2,  num: '03', titleKey: 'p03title', descKey: 'p03desc' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden theme-section" style={{ padding: '5rem 0 6rem' }}>
      <AfricanBackground variant="adire" overlayOpacity={0.9} />

      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-48 h-48 pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle at 0% 0%, #D97706, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.25)' }}>
              <AlertTriangle className="w-3.5 h-3.5" style={{ color: '#EF4444' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#EF4444' }}>
                {tr(T.problem.label)}
              </span>
            </div>
          </div>
          <h2
            className="font-black leading-[0.95] tracking-tight"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 5.5vw, 5rem)', color: '#FAFAF9' }}
          >
            {tr(T.problem.title1)}{' '}
            {tr(T.problem.title2)}{' '}
            <span style={{ color: '#D97706', fontStyle: 'italic' }}>{tr(T.problem.title3)}</span>
            <br />
            {tr(T.problem.title4)}
          </h2>
          <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: '#78716C' }}>
            {tr(T.problem.subtitle)}
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 md:mb-14">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 48 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl p-7 overflow-hidden group"
              style={{
                background: 'rgba(217,119,6,0.055)',
                border: '1px solid rgba(217,119,6,0.18)',
              }}
            >
              {/* Number watermark */}
              <span
                className="absolute -right-1 -top-3 font-black opacity-[0.06] select-none leading-none pointer-events-none"
                style={{ fontSize: '8rem', color: '#D97706', fontFamily: 'Georgia, serif' }}
              >
                {p.num}
              </span>
              {/* Top accent */}
              <div className="absolute top-0 left-6 right-6 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(217,119,6,0.5), transparent)' }} />

              <p.icon className="w-7 h-7 mb-5 relative z-10" style={{ color: '#D97706' }} />
              <h3 className="text-base sm:text-lg font-black mb-2.5 relative z-10" style={{ color: '#FAFAF9' }}>
                {tr(T.problem[p.titleKey])}
              </h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: '#78716C' }}>
                {tr(T.problem[p.descKey])}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(217,119,6,0.18)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {['stat1', 'stat2', 'stat3'].map((key, i) => (
              <div
                key={key}
                className="p-8 md:p-10 text-center relative"
                style={{
                  background: 'rgba(217,119,6,0.055)',
                  borderRight: i < 2 ? '1px solid rgba(217,119,6,0.12)' : 'none',
                  borderBottom: i === 0 ? '1px solid rgba(217,119,6,0.08)' : 'none',
                }}
              >
                <div
                  className="font-black leading-none mb-2"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#D97706' }}
                >
                  {STAT_VALUES[i]}
                </div>
                <div className="text-sm leading-snug" style={{ color: '#78716C' }}>
                  {tr(T.problem[key])}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}