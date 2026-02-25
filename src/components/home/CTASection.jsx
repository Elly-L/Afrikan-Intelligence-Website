import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Users } from 'lucide-react';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

export default function CTASection() {
  const tr = useT();

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-base)', padding: '6rem 0' }}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #D97706 0%, #DC2626 50%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: '#D97706' }}
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: '#DC2626' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg italic mb-12"
          style={{ color: '#57534E' }}
        >
          {tr(T.cta.quote)}
        </motion.blockquote>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-black leading-[0.95] tracking-tight mb-6"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
            color: '#FAFAF9',
          }}
        >
          {tr(T.cta.headline1)}{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #D97706, #DC2626)' }}
          >
            {tr(T.cta.headline2)}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: '#78716C' }}
        >
          {tr(T.cta.desc)}
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {tr(T.cta.preSeed).split(' · ').map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(217,119,6,0.1)', color: '#D97706', border: '1px solid rgba(217,119,6,0.25)' }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={createPageUrl('Contact')}
            className="group w-full sm:w-auto px-8 py-4 font-bold rounded-full flex items-center justify-center gap-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #D97706, #DC2626)',
              boxShadow: '0 8px 40px rgba(217,119,6,0.35)',
            }}
          >
            <Users className="w-5 h-5" />
            {tr(T.cta.partnerWithUs)}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to={createPageUrl('Technology')}
            className="w-full sm:w-auto px-8 py-4 font-bold rounded-full flex items-center justify-center gap-2 border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'rgba(217,119,6,0.35)',
              color: '#D97706',
              background: 'rgba(217,119,6,0.06)',
            }}
          >
            {tr(T.cta.exploreResearch)}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}