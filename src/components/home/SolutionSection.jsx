import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mic, Brain, RefreshCw, Volume2, ArrowRight } from 'lucide-react';
import AfricanBackground from '@/components/shared/AfricanBackground';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const tr = useT();

  const steps = [
    { icon: Mic,      stepKey: 'step1', descKey: 'step1desc', color: '#D97706' },
    { icon: Brain,    stepKey: 'step2', descKey: 'step2desc', color: '#D97706' },
    { icon: RefreshCw,stepKey: 'step3', descKey: 'step3desc', color: '#D97706' },
    { icon: Volume2,  stepKey: 'step4', descKey: 'step4desc', color: '#D97706' },
  ];

  const statsRight = [
    { value: '170ms', labelKey: 'processing' },
    { value: '100K+', labelKey: 'hoursData' },
    { value: '98%',   labelKey: 'voiceMatch' },
    { labelKey: 'zero', labelValueKey: 'textDep' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: 'var(--bg-base)', padding: '6rem 0' }}>
      <AfricanBackground variant="kente" overlayOpacity={0.9} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#D97706' }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#D97706' }}>{tr(T.solution.label)}</span>
            <div className="h-px w-12" style={{ background: '#D97706' }} />
          </div>
          <h2 className="font-black leading-[0.95]" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#FAFAF9' }}>
            {tr(T.solution.title1)}<br />
            <span style={{ color: '#D97706', fontStyle: 'italic' }}>{tr(T.solution.title2)}</span>
          </h2>
          <p className="mt-5 max-w-lg mx-auto" style={{ color: '#78716C', fontSize: '1.1rem' }}>
            {tr(T.solution.subtitle)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map((step, i) => (
            <motion.div key={step.stepKey}
              initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl p-7 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${step.color}40` }}>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: step.color }} />
              <span className="block text-xs font-bold tracking-[0.25em] mb-4 uppercase" style={{ color: step.color }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <step.icon className="w-8 h-8 mb-5" style={{ color: step.color }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#FAFAF9' }}>{tr(T.solution[step.stepKey])}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#78716C' }}>{tr(T.solution[step.descKey])}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ background: 'rgba(217,119,6,0.06)', border: '1px solid rgba(217,119,6,0.2)' }}>
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#D97706' }}>{tr(T.solution.keyInnovation)}</span>
            <h3 className="font-black mb-5 leading-tight" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FAFAF9' }}>
              {tr(T.solution.phonetic)}
            </h3>
            <p className="leading-relaxed mb-8" style={{ color: '#78716C' }}>
              {tr(T.solution.phoneticDesc)}
            </p>
            <Link to={createPageUrl('Technology')}
              className="inline-flex items-center gap-2 font-bold text-sm group"
              style={{ color: '#D97706' }}>
              {tr(T.solution.learnMore)}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2" style={{ borderLeft: '1px solid rgba(217,119,6,0.15)' }}>
            {[
              { value: '170ms', labelKey: 'processing' },
              { value: '100K+', labelKey: 'hoursData' },
              { value: '98%',   labelKey: 'voiceMatch' },
              { value: null,    labelKey: 'textDep', valueKey: 'zero' },
            ].map((s, i) => (
              <div key={s.labelKey} className="p-8 flex flex-col items-center justify-center text-center"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid rgba(217,119,6,0.12)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(217,119,6,0.12)' : 'none'
                }}>
                <div className="font-black text-3xl md:text-4xl mb-1" style={{ color: '#D97706' }}>
                  {s.value !== null ? s.value : tr(T.solution[s.valueKey])}
                </div>
                <div className="text-xs" style={{ color: '#57534E' }}>{tr(T.solution[s.labelKey])}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}