import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Stethoscope, Briefcase, Heart, ShoppingBag, Quote, ChevronRight } from 'lucide-react';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

const cases = [
  {
    id: 'health',
    icon: Stethoscope,
    tagKey: 'tag_health',
    cost: '$2.4B',
    costLabelKey: 'health_costLabel',
    titleKey: 'health_title',
    problemKey: 'health_problem',
    solutionKey: 'health_solution',
    impactKeys: ['health_i1','health_i2','health_i3'],
    testimonialQuoteKey: 'health_quote',
    testimonialName: 'Dr. Amara Diallo',
    testimonialTitleKey: 'health_qtitle',
    accentColor: '#D97706',
    accentBg: 'rgba(217,119,6,0.07)',
    accentBorder: 'rgba(217,119,6,0.2)',
  },
  {
    id: 'trade',
    icon: ShoppingBag,
    tagKey: 'tag_trade',
    cost: '$180B',
    costLabelKey: 'trade_costLabel',
    titleKey: 'trade_title',
    problemKey: 'trade_problem',
    solutionKey: 'trade_solution',
    impactKeys: ['trade_i1','trade_i2','trade_i3'],
    testimonialQuoteKey: 'trade_quote',
    testimonialName: 'Chukwuemeka Obi',
    testimonialTitleKey: 'trade_qtitle',
    accentColor: '#D97706',
    accentBg: 'rgba(217,119,6,0.07)',
    accentBorder: 'rgba(217,119,6,0.2)',
  },
  {
    id: 'diaspora',
    icon: Heart,
    tagKey: 'tag_diaspora',
    cost: '200M',
    costLabelKey: 'diaspora_costLabel',
    titleKey: 'diaspora_title',
    problemKey: 'diaspora_problem',
    solutionKey: 'diaspora_solution',
    impactKeys: ['diaspora_i1','diaspora_i2','diaspora_i3'],
    testimonialQuoteKey: 'diaspora_quote',
    testimonialName: 'Efua Mensah-Asante',
    testimonialTitleKey: 'diaspora_qtitle',
    accentColor: '#D97706',
    accentBg: 'rgba(217,119,6,0.07)',
    accentBorder: 'rgba(217,119,6,0.2)',
  },
  {
    id: 'education',
    icon: Briefcase,
    tagKey: 'tag_edu',
    cost: '600M',
    costLabelKey: 'edu_costLabel',
    titleKey: 'edu_title',
    problemKey: 'edu_problem',
    solutionKey: 'edu_solution',
    impactKeys: ['edu_i1','edu_i2','edu_i3'],
    testimonialQuoteKey: 'edu_quote',
    testimonialName: 'Kalisa Ndayambaje',
    testimonialTitleKey: 'edu_qtitle',
    accentColor: '#D97706',
    accentBg: 'rgba(217,119,6,0.07)',
    accentBorder: 'rgba(217,119,6,0.2)',
  },
];

export default function ImpactSection() {
  const [active, setActive] = useState('health');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const tr = useT();

  const current = cases.find(c => c.id === active);

  return (
    <section ref={ref} className="relative overflow-hidden theme-section" style={{ padding: '6rem 0' }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(to right, #D97706, #7C3AED)' }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase theme-label">{tr(T.impact.label)}</span>
          </div>
          <h2 className="font-black leading-[0.95] theme-heading" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            {tr(T.impact.title1)}<br />
            <span style={{ color: '#D97706', fontStyle: 'italic' }}>{tr(T.impact.title2)}</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg theme-subtext">
            {tr(T.impact.subtitle)}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-10">
          {cases.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
              style={{
                background: active === c.id ? c.accentColor : 'transparent',
                color: active === c.id ? '#fff' : c.accentColor,
                border: `2px solid ${c.accentColor}`,
                opacity: active === c.id ? 1 : 0.6,
              }}>
              <c.icon className="w-4 h-4" />
              {tr(T.impact[c.tagKey])}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl px-8 py-6 flex flex-wrap items-center gap-4"
                style={{ background: current.accentBg, border: `1px solid ${current.accentBorder}` }}>
                <span className="font-black text-5xl" style={{ color: current.accentColor }}>{current.cost}</span>
                <span className="text-sm max-w-xs theme-subtext">{tr(T.impact[current.costLabelKey])}</span>
              </div>

              <div className="rounded-2xl p-8 theme-card" style={{ border: `1px solid ${current.accentBorder}` }}>
                <h3 className="font-black text-xl mb-5 theme-heading" style={{ fontFamily: 'Georgia, serif' }}>
                  {tr(T.impact[current.titleKey])}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#DC2626' }}>{tr(T.impact.problem)}</p>
                    <p className="text-sm leading-relaxed theme-subtext">{tr(T.impact[current.problemKey])}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: current.accentColor }}>{tr(T.impact.ourSolution)}</p>
                    <p className="text-sm leading-relaxed theme-subtext">{tr(T.impact[current.solutionKey])}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t theme-divider">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3 theme-label">{tr(T.impact.impactLabel)}</p>
                  <div className="flex flex-wrap gap-3">
                    {current.impactKeys.map(key => (
                      <span key={key} className="flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full"
                        style={{ background: current.accentBg, color: current.accentColor, border: `1px solid ${current.accentBorder}` }}>
                        <ChevronRight className="w-3 h-3" />
                        {tr(T.impact[key])}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-2xl p-8 h-full flex flex-col justify-between theme-card-alt"
                style={{ border: `1px solid ${current.accentBorder}` }}>
                <div>
                  <Quote className="w-10 h-10 mb-5" style={{ color: current.accentColor }} />
                  <blockquote className="text-lg font-medium leading-relaxed mb-6 theme-quote" style={{ fontFamily: 'Georgia, serif' }}>
                    "{tr(T.impact[current.testimonialQuoteKey])}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm"
                    style={{ background: current.accentColor }}>
                    {current.testimonialName[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm theme-heading">{current.testimonialName}</p>
                    <p className="text-xs theme-label">{tr(T.impact[current.testimonialTitleKey])}</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}