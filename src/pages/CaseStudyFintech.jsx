import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, TrendingUp, Users, Clock, CheckCircle, ArrowLeft, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AfricanBackground from '@/components/shared/AfricanBackground';

export default function CaseStudyFintech() {
  const metrics = [
    { value: '73%', label: 'Projected increase in mobile payment adoption', color: 'text-green-400' },
    { value: '4.1s → 178ms', label: 'Expected latency reduction for voice transactions', color: 'text-amber-400' },
    { value: '280K', label: 'Previously unbanked users targeted in pilot', color: 'text-blue-400' },
    { value: '96%', label: 'Target transaction completion rate', color: 'text-violet-400' },
  ];

  const timeline = [
    { phase: 'Problem', desc: 'Rural farmers in Kisumu, Kenya cannot access mobile banking today. Menus are text-based, literacy is required.' },
    { phase: 'Integration', desc: 'We will integrate the Afrikan Intelligence API into an M-Pesa partner app, activating voice commands in Luo and Swahili.' },
    { phase: 'Rollout', desc: 'A 12-week pilot across 3 counties will invite 280,000 first-time users to speak their way into financial services.' },
    { phase: 'Projected Impact', desc: 'We expect average transaction time to drop 91% and voice-based loan applications to increase by 340%.' },
  ];

  return (
    <main className="pt-20" style={{ background: 'var(--bg-base)' }}>
      <section className="relative py-24 overflow-hidden">
        <AfricanBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/90 to-stone-950" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <Link to={createPageUrl('Solutions')} className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Solutions
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30 mb-6">Projected Impact — FinTech</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Voice Banking for<br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 text-transparent bg-clip-text">Kenya's Oral-First Farmers</span>
            </h1>
            <p className="text-lg text-stone-400 max-w-3xl">
              How Afrikan Intelligence will enable 280,000 previously unbanked Kisumu residents to complete financial transactions using their native Luo and Swahili voices — without a single text interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700/40 text-center">
                <div className={`text-2xl md:text-3xl font-bold ${m.color} mb-2`}>{m.value}</div>
                <div className="text-stone-500 text-xs">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <span className="text-red-400 text-sm font-medium uppercase tracking-wider">The Problem</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-5">The Text Wall in Financial Services</h2>
              <p className="text-stone-400 leading-relaxed mb-4">
                In Kisumu County today, 68% of adults lack secondary school literacy yet own mobile phones. Traditional fintech apps demand text-based PIN entry, menu navigation, and form filling. For oral-first communities, this remains a locked door.
              </p>
              <p className="text-stone-400 leading-relaxed">
                Existing voice solutions (ASR→MT→TTS) produce 4+ second delays with under 60% accuracy on Luo accents, causing conversation breakdowns and user abandonment rates of 82%. We will solve this.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
              className="p-8 rounded-3xl bg-red-950/20 border border-red-900/40">
              <h4 className="text-red-400 font-semibold mb-5">Before Afrikan Intelligence</h4>
              <div className="space-y-4">
                {[
                  { label: 'Traditional ASR latency', value: '4.1s', bad: true },
                  { label: 'Luo dialect accuracy', value: '58%', bad: true },
                  { label: 'Voice transaction abandonment', value: '82%', bad: true },
                  { label: 'Unbanked adult population', value: '68%', bad: true },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-stone-400 text-sm">{item.label}</span>
                    <span className="text-red-400 font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">The Solution</span>
            <h2 className="text-3xl font-bold text-white mt-3">Implementation Timeline</h2>
          </motion.div>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div key={item.phase} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }} viewport={{ once: true }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-stone-800/40 border border-stone-700/40">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">{i+1}</div>
                <div>
                  <span className="text-amber-400 text-sm font-semibold">{item.phase}</span>
                  <p className="text-stone-300 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-amber-950/40 to-stone-900 border border-amber-900/40 text-center">
            <Quote className="w-10 h-10 text-amber-500/40 mx-auto mb-6" />
            <p className="text-xl text-stone-200 leading-relaxed italic mb-8">
              "Kando ka pesa, en mar wuoyo. Ka simu nyal wuoyo gi ja Luo, to abiro tiyo kodhi." 
              <br/><span className="text-stone-400 text-sm not-italic">"Money aside, language matters. If a phone can speak Luo, I will use it every day."</span>
            </p>
            <div>
              <p className="text-white font-semibold">Otieno Akelo</p>
              <p className="text-stone-500 text-sm">Maize trader, Kisumu County — Prospective Pilot User</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* After */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="p-10 rounded-3xl bg-green-950/20 border border-green-900/40">
            <h3 className="text-green-400 font-semibold mb-6 text-xl">With Afrikan Intelligence — Projected Outcomes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'S2S Latency', value: '178ms', good: true },
                { label: 'Luo Accuracy', value: '97%', good: true },
                { label: 'Transaction Completion', value: '96%', good: true },
                { label: 'New Users Onboarded', value: '280K', good: true },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-green-400 font-bold text-2xl">{item.value}</div>
                  <div className="text-stone-500 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-950 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={createPageUrl('Solutions')} className="inline-flex items-center gap-2 px-8 py-4 bg-stone-800 border border-stone-700 text-white rounded-full hover:bg-stone-700 transition-all">
            <ArrowLeft className="w-4 h-4" /> All Solutions
          </Link>
          <Link to={createPageUrl('Contact')} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-amber-900/30 transition-all">
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}