import React from 'react';
import { motion } from 'framer-motion';
import { 
  Banknote, Stethoscope, Wheat, Truck, 
  Code, Building2, ArrowRight, Check, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AfricanBackground from '@/components/shared/AfricanBackground';
import VoiceDemo from '@/components/solutions/VoiceDemo';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

export default function Solutions() {
  const tr = useT();
  const solutions = [
    {
      icon: Banknote,
      title: 'Voice FinTech',
      titleKey: 'fintech',
      description: 'Enable voice-first banking, payments, and financial services for the unbanked population.',
      descKey: 'fintechDesc',
      features: ['M-Pesa Voice Integration', 'Loan Applications via Speech', 'Balance Inquiries', 'Money Transfer Commands'],
      featKeys: ['feature1', 'feature2', 'feature3', 'feature4'],
      color: 'from-green-500 to-emerald-500',
      market: '$12B',
      caseStudy: 'CaseStudyFintech',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare AI',
      titleKey: 'healthcare',
      description: 'Patients describe symptoms in their mother tongue. AI provides triage and connects to medical professionals.',
      descKey: 'healthcareDesc',
      features: ['Symptom Description', 'Medical Triage', 'Appointment Booking', 'Prescription Reminders'],
      featKeys: ['feature1', 'feature2', 'feature3', 'feature4'],
      color: 'from-blue-500 to-cyan-500',
      market: '$3B',
      caseStudy: 'CaseStudyHealthcare',
    },
    {
      icon: Wheat,
      title: 'AgriTech Advisory',
      titleKey: 'agritech',
      description: 'Farmers access market prices, weather forecasts, and agricultural advice through voice.',
      descKey: 'agritechDesc',
      features: ['Crop Price Updates', 'Weather Forecasts', 'Pest Management', 'Harvest Timing'],
      featKeys: ['feature1', 'feature2', 'feature3', 'feature4'],
      color: 'from-amber-500 to-yellow-500',
      market: '$4.5B',
      caseStudy: 'CaseStudyAgritech',
    },
    {
      icon: Truck,
      title: 'Cross-Border Trade',
      titleKey: 'trade',
      description: 'Enable real-time negotiation between traders speaking different languages across African borders.',
      descKey: 'tradeDesc',
      features: ['Real-time Translation', 'Price Negotiation', 'Shipping Coordination', 'Payment Processing'],
      featKeys: ['feature1', 'feature2', 'feature3', 'feature4'],
      color: 'from-purple-500 to-pink-500',
      market: '$8B',
      caseStudy: 'CaseStudyTrade',
    },
  ];

  const phases = [
    {
      phase: '01',
      title: 'Developer Beta',
      titleKey: 'phase1Title',
      timeline: 'Months 1-6',
      timeKey: 'phase1Time',
      description: 'Release API SDK to African FinTechs (e.g., M-Pesa integrators) to build voice-first payment bots.',
      descKey: 'phase1Desc',
      focus: 'Kenya & Nigeria',
      focusKey: 'phase1Focus',
    },
    {
      phase: '02',
      title: 'Vertical Integration',
      titleKey: 'phase2Title',
      timeline: 'Months 6-18',
      timeKey: 'phase2Time',
      description: 'Partner with NGOs (Health/Agri) to deploy "Sovereign Nodes" on edge devices in rural areas.',
      descKey: 'phase2Desc',
      focus: 'Healthcare & Agriculture',
      focusKey: 'phase2Focus',
    },
    {
      phase: '03',
      title: 'The Platform',
      titleKey: 'phase3Title',
      timeline: 'Months 18+',
      timeKey: 'phase3Time',
      description: 'Launch "Babel Studio" allowing communities to fine-tune models for their own micro-dialects.',
      descKey: 'phase3Desc',
      focus: 'Community-Driven Growth',
      focusKey: 'phase3Focus',
    },
  ];

  return (
    <main className="bg-slate-950 pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <AfricanBackground variant="market" overlayOpacity={0.82} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/50 to-stone-950" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8">
              {tr(T.solutions.badge)}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {tr(T.solutions.title)}<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-transparent bg-clip-text">
                {tr(T.solutions.subtitle)}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {tr(T.solutions.heroDesc)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.titleKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold">
                      {solution.market} TAM
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">{tr(T.solutions[solution.titleKey])}</h3>
                  <p className="text-slate-400 mb-5 text-sm sm:text-base">{tr(T.solutions[solution.descKey])}</p>
                  <div className="space-y-2.5 mb-6 flex-1">
                    {solution.featKeys.map((fk) => (
                      <div key={fk} className="flex items-center gap-3">
                        <div className="w-5 h-5 flex-shrink-0 rounded-full bg-green-500/15 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-slate-300 text-sm">{tr(T.solutions[fk])}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={createPageUrl(solution.caseStudy)} className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors group/link">
                    {tr(T.solutions.readCase)} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Voice Demo */}
      <section className="relative py-16 sm:py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-5">
              {tr(T.solutions.demoTitle)}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {tr(T.solutions.demoDesc)}
            </h2>
          </motion.div>
          <VoiceDemo />
        </div>
      </section>

      {/* Use Case Highlight */}
      <section className="relative py-16 sm:py-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-7 sm:p-10 md:p-14 rounded-3xl bg-gradient-to-br from-slate-800/90 to-orange-900/20 border border-slate-700/50"
          >
            <div className="flex items-center gap-3 mb-5">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-medium text-sm">{tr(T.solutions.realWorld)}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5">
              {tr(T.solutions.scenarioTitle)}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              {tr(T.solutions.scenario)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: '<200ms', labelKey: 'latGoal' },
                { value: '98%',   labelKey: 'voicePreserve' },
                { value: '2,140', labelKey: 'langsCovered' },
              ].map(({ value, labelKey }) => (
                <div key={labelKey} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-slate-400 text-xs sm:text-sm">{tr(T.solutions[labelKey])}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative py-16 sm:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Go-To-Market Strategy
            </h2>
            <p className="text-slate-400">{tr(T.solutions.roadmapDesc)}</p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {phase.phase}
                      </div>
                      <div>
                        <span className="text-amber-400 text-xs font-medium">{tr(T.solutions[phase.timeKey])}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{tr(T.solutions[phase.titleKey])}</h3>
                      </div>
                    </div>
                    <div className="flex-1 sm:border-l sm:border-slate-700/50 sm:pl-6">
                      <p className="text-slate-400 text-sm sm:text-base mb-2.5">{tr(T.solutions[phase.descKey])}</p>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(217,119,6,0.12)', color: '#D97706' }}>
                        {tr(T.solutions.focus)}: {tr(T.solutions[phase.focusKey])}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5">
              {tr(T.solutions.ctaTitle)}
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              {tr(T.solutions.ctaDesc)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl('Contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
              >
                {tr(T.cta.requestAccess)}
                <Code className="w-4 h-4" />
              </Link>
              <Link
                to={createPageUrl('Technology')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/15 transition-all duration-300"
              >
                {tr(T.solutions.viewDocs)}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}