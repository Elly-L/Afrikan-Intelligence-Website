import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Globe2, Zap, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AfricanBackground from '@/components/shared/AfricanBackground';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

const TICKER_PHRASES = [
  { lang: 'Yorùbá', text: 'Ohùn ni ìdánimọ wa.' },
  { lang: 'Kiswahili', text: 'Sauti yetu ni utambulisho wetu.' },
  { lang: 'Hausa', text: 'Murya ita ce asalinmu.' },
  { lang: 'አማርኛ', text: 'ድምፃችን ማንነታችን ነው።' },
  { lang: 'Lingála', text: 'Mongongo na biso ezali biso.' },
];

function RotatingPhrase() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % TICKER_PHRASES.length), 3200);
    return () => clearInterval(t);
  }, []);
  const phrase = TICKER_PHRASES[idx];
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#57534E' }}>{phrase.lang}</span>
      <span className="mx-3" style={{ color: '#3C3025' }}>·</span>
      <span className="text-sm italic" style={{ color: '#78716C' }}>{phrase.text}</span>
    </motion.div>
  );
}

export default function HeroSection() {
  const tr = useT();

  const stats = [
    { icon: Globe2, value: '54', labelKey: 'nations' },
    { icon: Zap,    value: '<200ms', labelKey: 'latency' },
    { icon: Mic,    value: '2,000+', labelKey: 'languages' },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Background */}
      <AfricanBackground variant="baobab" overlayOpacity={0.72} />

      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(-55deg, #D97706 0px, #D97706 1px, transparent 1px, transparent 52px)`,
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-[10%] w-72 md:w-[30rem] h-72 md:h-[30rem] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.45), transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 13, repeat: Infinity }}
        className="absolute bottom-1/4 right-[10%] w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.3), transparent 70%)' }}
      />

      {/* Decorative "A" */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center overflow-hidden pointer-events-none select-none">
        <span
          className="font-black leading-none text-orange-400 translate-x-1/3"
          style={{ fontSize: 'clamp(18rem, 40vw, 38rem)', opacity: 0.022, fontFamily: 'Georgia, serif' }}
        >
          A
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center">

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 md:mb-10 rounded-full border backdrop-blur-sm"
          style={{ background: 'rgba(217,119,6,0.1)', borderColor: 'rgba(217,119,6,0.38)' }}
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase" style={{ color: '#F59E0B' }}>
            {tr(T.hero.badge)}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="font-black leading-[0.92] tracking-tight mb-7 md:mb-8"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 9.5vw, 8.5rem)',
            color: '#FAFAF9',
          }}
        >
          <span className="block">{tr(T.hero.line1)}</span>
          <span className="block" style={{ color: '#D97706', WebkitTextStroke: '1px rgba(217,119,6,0.3)' }}>
            {tr(T.hero.line2)}
          </span>
          <span className="block">{tr(T.hero.line3)}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-10 md:mb-12"
          style={{ color: '#A8A29E' }}
        >
          {tr(T.hero.subtitle)}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 md:mb-20"
        >
          <Link
            to={createPageUrl('Technology')}
            className="group w-full sm:w-auto px-8 py-4 font-bold rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-base"
            style={{
              background: '#D97706',
              color: '#fff',
              boxShadow: '0 0 40px rgba(217,119,6,0.35)',
            }}
          >
            {tr(T.hero.exploreTech)}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to={createPageUrl('Solutions')}
            className="group w-full sm:w-auto px-8 py-4 font-bold rounded-full flex items-center justify-center gap-2 border-2 transition-all duration-300 hover:scale-105 text-base"
            style={{
              borderColor: 'rgba(255,255,255,0.22)',
              color: '#FAFAF9',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Play className="w-4 h-4 fill-current opacity-70" />
            {tr(T.hero.seeSolutions)}
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="p-4 sm:p-6 rounded-2xl text-center cursor-default"
              style={{
                background: 'rgba(255,255,255,0.035)',
                border: '1px solid rgba(217,119,6,0.22)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 sm:mb-3" style={{ color: '#D97706' }} />
              <div
                className="font-black leading-none mb-1"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  color: '#FAFAF9',
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium" style={{ color: '#57534E' }}>
                {tr(T.hero[stat.labelKey])}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rotating phrase ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-12 md:mt-16 h-8 flex items-center justify-center"
        >
          <RotatingPhrase />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(217,119,6,0.35)' }}
        >
          <div className="w-1 h-1.5 rounded-full" style={{ background: '#D97706' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}