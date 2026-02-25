import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, CheckCircle, ArrowLeft, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AfricanBackground from '@/components/shared/AfricanBackground';

export default function CaseStudyHealthcare() {
  const metrics = [
    { value: '68%', label: 'Projected reduction in misdiagnosis from language barriers', color: 'text-blue-400' },
    { value: '3.2min → 41s', label: 'Expected triage time reduction', color: 'text-amber-400' },
    { value: '47K', label: 'Rural patients targeted in planned pilot', color: 'text-green-400' },
    { value: '12', label: 'Languages to be supported in partner hospitals', color: 'text-violet-400' },
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
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30 mb-6">Projected Impact — Healthcare AI</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Voice Triage for<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Rural Nigeria's Health Crisis</span>
            </h1>
            <p className="text-lg text-stone-400 max-w-3xl">
              We plan to deploy across 14 rural clinics in Anambra State, enabling patients to describe symptoms in Igbo, Igala, and Ibibio — and receive triage guidance from a unified clinical AI in under a minute.
            </p>
          </motion.div>
        </div>
      </section>

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

      <section className="py-20 bg-stone-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <span className="text-red-400 text-sm font-medium uppercase tracking-wider">The Problem</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-5">Language Barriers Are Killing in Rural Clinics</h2>
              <p className="text-stone-400 leading-relaxed mb-4">
                In Anambra's rural clinics today, a single nurse often serves patients speaking 4–6 distinct dialects. Symptoms get lost in translation. A "burning chest" in Igbo could be cardiac or respiratory — and misinterpretation leads to wrong triage priority with fatal consequences.
              </p>
              <p className="text-stone-400 leading-relaxed">
                A 2023 Ministry of Health survey found that 38% of rural patients feel their symptoms are "misunderstood." Text-based translation apps have been tried and failed due to low literacy and high latency. We intend to change that.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
              className="space-y-4">
              <div className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700/40">
                <h4 className="text-stone-300 font-semibold mb-4">Symptom Description Flow</h4>
                <div className="space-y-3">
                  {[
                    { step: '1. Patient speaks in Igbo', icon: '🗣️', ok: true },
                    { step: 'Voice tokenized — no ASR needed', icon: '🎵', ok: true },
                    { step: 'Semantic mapped to clinical terms', icon: '🧠', ok: true },
                    { step: 'Triage AI responds in patient\'s dialect', icon: '💊', ok: true },
                    { step: 'Nurse sees priority score in English', icon: '👩‍⚕️', ok: true },
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-3">
                      <span className="text-xl">{s.icon}</span>
                      <span className="text-stone-300 text-sm">{s.step}</span>
                      <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-blue-950/40 to-stone-900 border border-blue-900/40 text-center">
            <Quote className="w-10 h-10 text-blue-500/40 mx-auto mb-6" />
            <p className="text-xl text-stone-200 leading-relaxed italic mb-8">
              "Right now, I have to guess when a patient speaks Ibibio. If this system can tell me: chest pain, priority 1, possible cardiac — in their own voice — it will change everything for us."
            </p>
            <div>
              <p className="text-white font-semibold">Nurse Adaeze Okafor</p>
              <p className="text-stone-500 text-sm">Senior Triage Nurse, Awka General Hospital — Pilot Partner</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Edge Deployment', desc: 'Will run offline on clinic tablets. No internet required. Syncs automatically when connectivity is restored.' },
              { title: 'Privacy-First', desc: 'All voice data will be processed locally on-device. No patient audio will ever leave the clinic.' },
              { title: 'Clinical Vocabulary', desc: 'Model will be fine-tuned on 5,000+ hours of planned medical consultation recordings across Igbo language families.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="p-8 rounded-2xl bg-stone-800/40 border border-stone-700/40">
                <h3 className="text-blue-400 font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-900 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={createPageUrl('Solutions')} className="inline-flex items-center gap-2 px-8 py-4 bg-stone-800 border border-stone-700 text-white rounded-full hover:bg-stone-700 transition-all">
            <ArrowLeft className="w-4 h-4" /> All Solutions
          </Link>
          <Link to={createPageUrl('Contact')} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-xl transition-all">
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}