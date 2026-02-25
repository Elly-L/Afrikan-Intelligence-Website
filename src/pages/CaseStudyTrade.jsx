import React from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle, ArrowLeft, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AfricanBackground from '@/components/shared/AfricanBackground';

export default function CaseStudyTrade() {
  const metrics = [
    { value: '$2.3M', label: 'Additional trade volume projected in 90-day pilot', color: 'text-purple-400' },
    { value: '6', label: 'Border languages to be bridged simultaneously', color: 'text-amber-400' },
    { value: '92%', label: 'Target negotiation success rate (vs 61% without AI)', color: 'text-pink-400' },
    { value: '340ms', label: 'Target cross-language response latency', color: 'text-cyan-400' },
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
            <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium border border-purple-500/30 mb-6">Projected Impact — Cross-Border Trade</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Lagos–Nairobi in Real-Time:<br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Igbo Meets Swahili</span>
            </h1>
            <p className="text-lg text-stone-400 max-w-3xl">
              Imagine a textile trader in Onitsha negotiating with a fabric supplier in Mombasa — each speaking their own language, simultaneously, with AI bridging the conversation in under 340ms. No interpreter. No misunderstanding. This is what we are building toward.
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12">
            <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">Simulated Conversation</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-8">A Trade Negotiation, AI-Bridged — As It Could Look</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { speaker: 'Chukwuemeka (Onitsha, Igbo)', text: '"Akwa mmiri ọcha ole ka ị nwere?"', translation: '"How many bales of white linen do you have?"', side: 'left', lang: 'Igbo', color: 'amber' },
              { speaker: 'Hamisi (Mombasa, Swahili)', text: '"Nina bale mia tatu. Bei ni elfu ishirini kwa kila moja."', translation: '"I have 300 bales. Price is 20,000 per bale."', side: 'right', lang: 'Swahili', color: 'cyan' },
              { speaker: 'Chukwuemeka (Igbo)', text: '"Ọ dị mma. Ị nwere ike ịdaba ọnụahịa ka ọ bụrụ naira?"', translation: '"Good. Can you reduce the price if I pay in Naira?"', side: 'left', lang: 'Igbo', color: 'amber' },
              { speaker: 'Hamisi (Swahili)', text: '"Naweza. Tuma moja kwa moja kwa akaunti yangu ya M-Pesa."', translation: '"I can. Transfer directly to my M-Pesa account."', side: 'right', lang: 'Swahili', color: 'cyan' },
            ].map((msg, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: msg.side === 'left' ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}
                className={`flex ${msg.side === 'right' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md p-5 rounded-2xl border ${msg.color === 'amber' ? 'bg-amber-950/30 border-amber-900/40' : 'bg-cyan-950/30 border-cyan-900/40'}`}>
                  <span className={`text-xs font-semibold ${msg.color === 'amber' ? 'text-amber-400' : 'text-cyan-400'}`}>{msg.speaker}</span>
                  <p className="text-stone-200 mt-2 font-medium">{msg.text}</p>
                  <p className="text-stone-500 text-xs italic mt-1">{msg.translation}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">AI translated</span>
                    <span className="text-xs text-stone-600">~{280 + i * 40}ms</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-purple-950/40 to-stone-900 border border-purple-900/40 text-center">
            <Quote className="w-10 h-10 text-purple-500/40 mx-auto mb-6" />
            <p className="text-xl text-stone-200 leading-relaxed italic mb-8">
              "Right now, I need my nephew in Lagos to translate every call I make to Nairobi. If I could close deals myself, in Igbo, with anyone on the continent — that would be true freedom."
            </p>
            <div>
              <p className="text-white font-semibold">Chukwuemeka Obi</p>
              <p className="text-stone-500 text-sm">Textile trader, Onitsha Market — Prospective User</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-stone-950 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={createPageUrl('Solutions')} className="inline-flex items-center gap-2 px-8 py-4 bg-stone-800 border border-stone-700 text-white rounded-full hover:bg-stone-700 transition-all">
            <ArrowLeft className="w-4 h-4" /> All Solutions
          </Link>
          <Link to={createPageUrl('Contact')} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-xl transition-all">
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}