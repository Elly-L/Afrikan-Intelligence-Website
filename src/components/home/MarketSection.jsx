import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, DollarSign, Languages, TrendingUp } from 'lucide-react';
import AfricanBackground from '@/components/shared/AfricanBackground';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

export default function MarketSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const tr = useT();

  const marketStats = [
    { icon: Users,      value: '1.2B',  labelKey: 'stat1', color: '#D97706', bg: 'rgba(217,119,6,0.07)', border: 'rgba(217,119,6,0.2)' },
    { icon: DollarSign, value: '$180B', labelKey: 'stat2', color: '#D97706', bg: 'rgba(217,119,6,0.07)', border: 'rgba(217,119,6,0.2)' },
    { icon: Languages,  value: '2,140', labelKey: 'stat3', color: '#D97706', bg: 'rgba(217,119,6,0.07)', border: 'rgba(217,119,6,0.2)' },
  ];

  const markets = [
    { labelKey: 'market1', value: '$12B',  percent: 50 },
    { labelKey: 'market2', value: '$8B',   percent: 33 },
    { labelKey: 'market3', value: '$4.5B', percent: 19 },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden theme-section" style={{ padding: '6rem 0' }}>
      <AfricanBackground variant="sand" overlayOpacity={0.87} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-16 rounded-full" style={{ background: '#D97706' }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#D97706' }}>{tr(T.market.label)}</span>
          </div>
          <h2 className="font-black leading-[0.95]" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#FAFAF9' }}>
            {tr(T.market.title1)}<br />
            <span style={{ color: '#D97706' }}>{tr(T.market.title2)}</span>
          </h2>
          <p className="mt-5 max-w-lg" style={{ color: '#78716C', fontSize: '1.1rem' }}>
            {tr(T.market.subtitle)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {marketStats.map((s, i) => (
            <motion.div key={s.labelKey}
              initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ scale: 1.04, y: -5 }}
              className="rounded-3xl p-10 text-center"
              style={{ background: s.bg, border: `1px solid ${s.border}` }}>
              <s.icon className="w-10 h-10 mx-auto mb-5" style={{ color: s.color }} />
              <div className="font-black mb-2 leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: s.color }}>{s.value}</div>
              <div style={{ color: '#78716C' }}>{tr(T.market[s.labelKey])}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.45 }}
          className="rounded-3xl p-10 md:p-14"
          style={{ background: 'rgba(217,119,6,0.05)', border: '1px solid rgba(217,119,6,0.15)' }}>
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-7 h-7" style={{ color: '#D97706' }} />
            <h3 className="font-black text-2xl" style={{ color: '#FAFAF9' }}>{tr(T.market.som)}</h3>
          </div>
          <div className="space-y-8">
            {markets.map((m, i) => (
              <motion.div key={m.labelKey}
                initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold" style={{ color: '#A8A29E' }}>{tr(T.market[m.labelKey])}</span>
                  <span className="font-black text-xl" style={{ color: '#D97706' }}>{m.value}</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    initial={{ width: 0 }} animate={isInView ? { width: `${m.percent}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.7 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(to right, #D97706, #D9770699)' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}