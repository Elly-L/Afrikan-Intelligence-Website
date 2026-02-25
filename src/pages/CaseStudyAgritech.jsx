import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, CheckCircle, ArrowLeft, Quote, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AfricanBackground from '@/components/shared/AfricanBackground';

export default function CaseStudyAgritech() {
  const metrics = [
    { value: '31%', label: 'Projected increase in crop yield via AI advisory', color: 'text-green-400' },
    { value: '$420', label: 'Projected additional annual income per farmer', color: 'text-amber-400' },
    { value: '89K', label: 'Farmers targeted in planned 6-month pilot', color: 'text-lime-400' },
    { value: '8', label: 'Languages planned for Ethiopia pilot alone', color: 'text-teal-400' },
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
            <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30 mb-6">Projected Impact — AgriTech</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Voice Advisory for<br />
              <span className="bg-gradient-to-r from-green-400 to-lime-400 text-transparent bg-clip-text">Ethiopia's 15 Million Smallholders</span>
            </h1>
            <p className="text-lg text-stone-400 max-w-3xl">
              We are in early discussions with the Ethiopian Ministry of Agriculture to deliver real-time crop advisory, weather alerts, and market pricing to 89,000 farmers — in Amharic, Oromo, Tigrinya, and 5 other languages — with zero text required.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <span className="text-red-400 text-sm font-medium uppercase tracking-wider">The Problem</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-5">Advisory Locked Behind Literacy</h2>
              <p className="text-stone-400 leading-relaxed mb-4">
                Ethiopia's agricultural extension services are heavily text-based — SMS alerts, web dashboards, printed guides. Of the 15 million smallholder farmers, 71% in rural Oromia cannot read these materials. With accelerating climate change, they need real-time advice more urgently than ever.
              </p>
              <p className="text-stone-400 leading-relaxed mb-4">
                Lost crop guidance due to language gaps is estimated to cost the Ethiopian agricultural sector $2.1B annually in preventable losses — a figure we project our solution will meaningfully reduce.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
              className="space-y-4">
              <h3 className="text-amber-400 font-semibold mb-4">What Farmers Will Be Able to Ask by Voice</h3>
              {[
                { q: '"Landi kee murtii guyyaa har\'aa?" (Oromo)', a: 'Today is optimal for teff planting. Soil moisture at 62%.' },
                { q: '"Raga uummata baay\'ina midhaan maali?" (Oromo)', a: 'Maize at 3,200 ETB/quintal in Addis today. Up 8% from last week.' },
                { q: '"Abeettoon ganna yoomi waggaataa?" (Oromo)', a: 'Heavy rains expected Thursday. Cover harvested grain by Wednesday.' },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-stone-800/40 border border-stone-700/40">
                  <p className="text-amber-300 text-sm italic mb-2">Farmer asks: {item.q}</p>
                  <p className="text-stone-300 text-sm"><span className="text-green-400">AI responds:</span> {item.a}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-green-950/40 to-stone-900 border border-green-900/40 text-center">
            <Quote className="w-10 h-10 text-green-500/40 mx-auto mb-6" />
            <p className="text-xl text-stone-200 leading-relaxed italic mb-8">
              "Qonnaan bulaan beekumsa argachuuf gargaarsa barbaada. Sagalee isaaniitiin yoo dubbatan, deebii argatan — sun jijjiirama guddaa ta'a." 
              <br/><span className="text-stone-400 text-sm not-italic">"Farmers need help accessing knowledge. If they can speak in their own voice and get an answer — that will be a great change."</span>
            </p>
            <div>
              <p className="text-white font-semibold">Alemu Tadesse</p>
              <p className="text-stone-500 text-sm">District Agricultural Extension Officer, West Hararghe — Prospective Partner</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-stone-950 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={createPageUrl('Solutions')} className="inline-flex items-center gap-2 px-8 py-4 bg-stone-800 border border-stone-700 text-white rounded-full hover:bg-stone-700 transition-all">
            <ArrowLeft className="w-4 h-4" /> All Solutions
          </Link>
          <Link to={createPageUrl('Contact')} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-lime-600 text-white font-semibold rounded-full hover:shadow-xl transition-all">
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}