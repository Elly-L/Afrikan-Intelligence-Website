import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Globe2, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import AfricanCartoonBg from '@/components/shared/AfricanCartoonBg';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tr = useT();

  const values = [
    { icon: Globe2, titleKey: 'v1title', descKey: 'v1desc' },
    { icon: Zap,    titleKey: 'v2title', descKey: 'v2desc' },
    { icon: Shield, titleKey: 'v3title', descKey: 'v3desc' },
    { icon: Users,  titleKey: 'v4title', descKey: 'v4desc' },
  ];

  const timeline = [
    { year: '2023', titleKey: 't1title', descKey: 't1desc' },
    { year: '2024', titleKey: 't2title', descKey: 't2desc' },
    { year: '2025', titleKey: 't3title', descKey: 't3desc' },
    { year: '2026', titleKey: 't4title', descKey: 't4desc' },
  ];

  return (
    <main className="pt-20" style={{ background: 'var(--bg-base)' }}>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <AfricanCartoonBg variant="savanna" opacity={0.18} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, var(--bg-base))' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
              {tr(T.about.badge)}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {tr(T.about.title)}{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-transparent bg-clip-text">
                {tr(T.about.titleHighlight)}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {tr(T.about.heroDesc)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="relative py-24" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative p-10 md:p-12 rounded-3xl bg-slate-800/50 border border-slate-700/50 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{tr(T.about.mission)}</h3>
                <p className="text-slate-400 leading-relaxed">{tr(T.about.missionDesc)}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative p-10 md:p-12 rounded-3xl bg-slate-800/50 border border-slate-700/50 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{tr(T.about.vision)}</h3>
                <p className="text-slate-400 leading-relaxed">{tr(T.about.visionDesc)}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 inline mr-2" />
              {tr(T.about.coreValues)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {tr(T.about.whatDrivesUs)}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tr(T.about[value.titleKey])}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tr(T.about[value.descKey])}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {tr(T.about.ourJourney)}
            </h2>
            <p className="text-slate-400">{tr(T.about.journeySubtitle)}</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line — left on mobile, center on md+ */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-amber-500 to-transparent" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 md:gap-8 mb-10 md:mb-12 pl-14 md:pl-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-6 z-10 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-md shadow-orange-500/40" />

                <div className={`flex-1 md:${index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                  <div className="inline-block p-5 sm:p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-left">
                    <span className="text-orange-400 font-bold text-base">{item.year}</span>
                    <h4 className="text-white font-semibold mt-1 text-sm sm:text-base">{tr(T.about[item.titleKey])}</h4>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">{tr(T.about[item.descKey])}</p>
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AfricanCartoonBg variant="pattern" opacity={0.1} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-heading)' }}>
              {tr(T.about.joinMovement)}
            </h2>
            <p className="mb-8" style={{ color: 'var(--text-body)' }}>
              {tr(T.about.joinDesc)}
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              {tr(T.about.getInTouch)}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}