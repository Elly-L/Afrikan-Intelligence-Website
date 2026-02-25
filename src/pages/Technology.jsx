import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, Brain, RefreshCw, Volume2, Zap, Server, 
  Smartphone, Radio, ArrowRight, Check, X 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AITranslationDemo from '@/components/technology/AITranslationDemo';
import LatencySimulator from '@/components/technology/LatencySimulator';
import AfricanBackground from '@/components/shared/AfricanBackground';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

export default function Technology() {
  const tr = useT();
  const architectureSteps = [
    { icon: Mic,      stepKey: 'step1', descKey: 'step1desc', color: 'from-blue-500 to-cyan-500' },
    { icon: Brain,    stepKey: 'step2', descKey: 'step2desc', color: 'from-purple-500 to-pink-500' },
    { icon: RefreshCw,stepKey: 'step3', descKey: 'step3desc', color: 'from-orange-500 to-amber-500' },
    { icon: Volume2,  stepKey: 'step4', descKey: 'step4desc', color: 'from-green-500 to-emerald-500' },
  ];

  const features = [
    { icon: Zap,       titleKey: 'metrics',    value: '<200ms',   descKey: 'metricsDesc1' },
    { icon: Server,    titleKey: 'edgeFirst',  value: 'On-Device',descKey: 'edgeDesc' },
    { icon: Radio,     titleKey: 'dataSource', value: '100K+ hrs',descKey: 'dataDesc' },
    { icon: Smartphone,titleKey: 'deployment', value: 'Sovereign',descKey: 'deployDesc' },
  ];

  const comparison = [
    { featureKey: 'f1', traditional: true, ours: false },
    { featureKey: 'f2', traditional: '4+ sec', ours: '<200ms' },
    { featureKey: 'f3', traditional: false, ours: true },
    { featureKey: 'f4', traditional: false, ours: true },
    { featureKey: 'f5', traditional: false, ours: true },
    { featureKey: 'f6', traditional: false, ours: true },
  ];

  return (
    <main className="bg-stone-950 pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <AfricanBackground variant="mud_cloth" overlayOpacity={0.82} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/50 to-stone-950" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
              {tr(T.technology.badge)}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {tr(T.technology.title1)}<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-transparent bg-clip-text">
                {tr(T.technology.title2)}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {tr(T.technology.subtitle)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="relative py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {tr(T.technology.architecture)}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {tr(T.technology.archDesc)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {architectureSteps.map((step, index) => (
              <motion.div
                key={step.stepKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {index < architectureSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-slate-600 to-transparent z-20" />
                )}
                <div className="relative h-full p-6 sm:p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500">
                  <div className="text-xs font-bold text-slate-500 mb-4">STEP {String(index + 1).padStart(2, '0')}</div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2.5">{tr(T.technology[step.stepKey])}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tr(T.technology[step.descKey])}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="relative py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-800/40 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-500 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{feature.value}</div>
                <div className="text-sm sm:text-base font-semibold text-slate-300 mb-1.5">{tr(T.technology[feature.titleKey])}</div>
                <p className="text-slate-400 text-xs sm:text-sm leading-snug">{tr(T.technology[feature.descKey])}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative py-16 sm:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {tr(T.technology.vsTitle)}
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              {tr(T.technology.vsDesc)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl bg-slate-800/50 border border-slate-700/50 overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-4 px-4 sm:px-6 py-4 bg-slate-800 border-b border-slate-700/50">
              <div className="text-slate-400 font-medium text-xs sm:text-sm">{tr(T.technology.feature)}</div>
              <div className="text-center text-red-400 font-medium text-xs sm:text-sm">{tr(T.technology.traditional)}</div>
              <div className="text-center text-green-400 font-medium text-xs sm:text-sm">{tr(T.technology.ourModel)}</div>
            </div>
            {comparison.map((row, index) => (
              <div
                key={row.featureKey}
                className={`grid grid-cols-3 gap-2 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 items-center ${
                  index !== comparison.length - 1 ? 'border-b border-slate-700/25' : ''
                } ${index % 2 === 0 ? 'bg-black/10' : ''}`}
              >
                <div className="text-slate-300 text-xs sm:text-sm font-medium">{tr(T.technology[row.featureKey])}</div>
                <div className="text-center">
                  {typeof row.traditional === 'boolean' ? (
                    row.traditional ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mx-auto" />
                    )
                  ) : (
                    <span className="text-slate-400 text-xs sm:text-sm">{row.traditional}</span>
                  )}
                </div>
                <div className="text-center">
                  {typeof row.ours === 'boolean' ? (
                    row.ours ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mx-auto" />
                    )
                  ) : (
                    <span className="text-orange-400 font-semibold text-xs sm:text-sm">{row.ours}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Translation Demo */}
      <section className="relative py-24 bg-stone-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">{tr(T.technology.interactiveDemo)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr(T.technology.demoTitle)}</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">{tr(T.technology.demoDesc)}</p>
          </motion.div>
          <AITranslationDemo />
        </div>
      </section>

      {/* Latency Simulator */}
      <section className="relative py-24 bg-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">{tr(T.technology.latencyBadge)}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr(T.technology.latencyTitle)}</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">{tr(T.technology.latencyDesc)}</p>
          </motion.div>
          <LatencySimulator />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {tr(T.technology.apiTitle)}
            </h2>
            <p className="text-slate-400 mb-8">
              {tr(T.technology.apiDesc)}
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              {tr(T.technology.requestAccess)}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}