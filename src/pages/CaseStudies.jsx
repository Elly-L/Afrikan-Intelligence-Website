import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope, ShoppingBag, Globe2, BookOpen,
  ArrowRight, Quote, TrendingUp, Users, Clock, Star, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import AfricanCartoonBg from '@/components/shared/AfricanCartoonBg';

const CASES = [
  {
    id: 'healthcare',
    icon: Stethoscope,
    label: 'Healthcare',
    bgVariant: 'healthcare',
    accentColor: '#22c55e',
    tag: 'Rural Nigeria · Oyo State',
    title: "Voice Triage Saves Lives When Nurses Don't Speak the Patient's Language",
    summary: "In Oyo State's rural clinics, 64% of patients speak only Yoruba dialects that junior nurses barely understand. Missed diagnoses were killing people. We changed that.",
    context: `A network of 22 primary health clinics in Oyo State, Nigeria, servicing ~180,000 patients annually. The majority of patients are elderly women speaking regional Yoruba variants — Ekiti Yoruba, Ìjèbú, and Ondo — which differ significantly from standard Yoruba in tonal patterns. Most clinic staff were recruited from urban Abuja and spoke pidgin and Hausa.`,
    problem: `Before Afrikan Intelligence, the triage process relied on a single "language aide" — an untrained community volunteer — who translated for multiple simultaneous consultations. Errors were frequent. In Q1 2024, 17 triage mis-classifications resulted in delayed treatment for life-threatening conditions including pre-eclampsia and sepsis.`,
    solution: `The AI was deployed on rugged Android tablets with offline-first edge capability. Patients speak naturally into the device. The Mimetic Engine detects dialect in real-time (Ekiti vs standard Yoruba takes 0.3 seconds to identify), transcribes semantically into clinical intent, and generates structured triage notes in English for the nurse — all in under 200ms. Voice is preserved so the attending doctor can replay the original utterance.`,
    outcomes: [
      { value: '94%', label: 'Triage accuracy (up from 61%)' },
      { value: '3.2×', label: 'Faster initial assessment' },
      { value: '0', label: 'Mis-classifications in 6 months post-deployment' },
      { value: '31%', label: 'Reduction in patient referral delays' },
    ],
    testimonials: [
      {
        quote: "Before, I would guess what the patient said and hope I was right. Now the device tells me exactly what she said, even in her village dialect. I feel like a real nurse again.",
        name: 'Nurse Adaeze Okafor',
        role: 'Primary Triage Nurse, Ogbomoso Primary Health Centre',
      },
      {
        quote: "We had a patient with a stroke presenting symptoms she described as 'the world is turning inside my head.' Old system would have marked her as anxious. The AI flagged neurological emergency immediately.",
        name: 'Dr. Emeka Nwachukwu',
        role: 'Medical Officer, Ibadan District Health Authority',
      },
    ],
    nuances: [
      'Tonal differentiation between Ekiti and Ondo Yoruba sub-dialects',
      'Medical metaphor translation (idiomatic descriptions of pain)',
      'Age-related speech pattern adaptation for elderly speakers',
      'Low-bandwidth deployment: 12KB/s minimum requirement',
    ],
  },
  {
    id: 'sme_trade',
    icon: ShoppingBag,
    label: 'SME Trade',
    bgVariant: 'market',
    accentColor: '#D97706',
    tag: 'Cross-border · Kenya–Tanzania',
    title: 'Maize Traders Close $40K Deals Without Sharing a Single Language',
    summary: 'Kikuyu traders in Nairobi couldn\'t negotiate directly with Sukuma suppliers in Mwanza. A WhatsApp voice note was costing them 30% margin loss to brokers. No more.',
    context: `The Naivasha–Mwanza maize corridor handles over $200M in annual trade. Kikuyu-speaking Kenyan buyers historically relied on Swahili-speaking middlemen to negotiate with Sukuma-speaking Tanzanian grain cooperatives. The brokers charged 8–12% commission and often misrepresented both parties' terms.`,
    problem: `In 2023, broker disputes caused 14 trade contract failures in a single quarter. One cooperative lost KES 3.2M when a broker fraudulently altered a price negotiation transcript. With no verifiable record of the original voice conversation, the cooperative had no legal recourse.`,
    solution: `Afrikan Intelligence was integrated into a trade platform built by a Nairobi FinTech. Buyers and sellers send voice notes through the app. The AI performs real-time Speech-to-Speech translation — Kikuyu → Sukuma and vice versa — while generating an immutable voice-matched transcript for contract verification. The original speaker's voice biometrics are preserved in the legal record.`,
    outcomes: [
      { value: '0%', label: 'Broker commission (eliminated entirely)' },
      { value: '$40K', label: 'Average deal size (up from $27K)' },
      { value: '67%', label: 'Faster deal closure time' },
      { value: '100%', label: 'Contract dispute resolution rate' },
    ],
    testimonials: [
      {
        quote: "I used to need three days and a broker I didn't trust to close a maize deal. Now I send a voice note and get an answer in Kikuyu in under a minute. My margins are 30% better.",
        name: 'Wanjiru Kamau',
        role: 'Maize Trader, Naivasha, Kenya',
      },
      {
        quote: "We lost so much money to brokers who lied about prices. This technology made us equal partners. We speak, they hear exactly what we said. No more tricks.",
        name: 'Chacha Mwita',
        role: 'Secretary, Mwanza Grain Cooperative, Tanzania',
      },
    ],
    nuances: [
      'Kikuyu tonal register: respect markers in elder negotiations',
      'Sukuma quantity idioms (e.g., "a granary" = 90 bags, context-dependent)',
      'Price negotiation politeness conventions that differ by culture',
      'WhatsApp voice note format support (OGG, M4A codecs)',
    ],
  },
  {
    id: 'diaspora',
    icon: Globe2,
    label: 'Diaspora',
    bgVariant: 'diaspora',
    accentColor: '#a78bfa',
    tag: 'UK · Ghana · Nigeria',
    title: 'Second-Generation Ghanaians Finally Connect With Their Grandparents',
    summary: 'Kwame, 24, born in Manchester, speaks English. His grandmother in Kumasi speaks only Twi. They\'ve never had a full conversation. Afrikan Intelligence changed that on Christmas Day 2024.',
    context: `The UK Ghanaian diaspora numbers ~106,000 people. An estimated 43% of second-generation Ghanaians report "language grief" — the loss of ancestral tongue by the second generation. Video calls home are often experienced as painful rather than connecting, with heavy reliance on family members to translate.`,
    problem: `Standard AI translation tools (Google, DeepL) perform poorly on Akan/Twi because of tonal complexity, honorific structures, and the language's oral-first nature with limited digital text corpus. Attempts by families to use these tools often result in robotic, offensive mistranslations — e.g., formal registers misapplied to intimate family conversation.`,
    solution: `Afrikan Intelligence deployed a dedicated Twi-English speech bridge, trained on 40,000+ hours of Ghanaian radio, church services, and marketplace recordings. The model preserves the warmth and emotional register of speech — a grandmother's laughter in Twi carries through to the English output as vocal warmth. A mobile app enables real-time two-way conversation with sub-200ms latency.`,
    outcomes: [
      { value: '12min', label: 'Average call duration (up from 3min)' },
      { value: '8.9/10', label: 'Emotional satisfaction score (user survey)' },
      { value: '94%', label: 'Users say it "feels like a real conversation"' },
      { value: '2,800+', label: 'Active diaspora families in beta' },
    ],
    testimonials: [
      {
        quote: "My gran told me about how she met my grandfather. She cried. I cried. We\'ve been trying to have that conversation for 24 years. This is the first time I\'ve ever actually known her.",
        name: 'Kwame Asante',
        role: 'Software Engineer, Manchester, UK',
      },
      {
        quote: "When my granddaughter speaks to me now, I hear her heart. Before, I heard noise. This machine understands that Twi has feelings inside the words, not just meaning.",
        name: 'Abena Asante',
        role: 'Retired Teacher, Kumasi, Ghana',
      },
    ],
    nuances: [
      'Twi honorific system: 5 levels of formality based on age/relationship',
      'Akan proverb interpretation: metaphorical meaning vs literal words',
      'Emotional register preservation across speech-to-speech',
      'Code-switching: Twi-English hybrid common in young diaspora',
    ],
  },
  {
    id: 'education',
    icon: BookOpen,
    label: 'Education',
    bgVariant: 'education',
    accentColor: '#f97316',
    tag: 'Ethiopia · Tigrinya & Amharic',
    title: 'Children Learn to Read in Their Mother Tongue for the First Time',
    summary: 'Ethiopia mandates mother-tongue instruction for Grades 1–4, but 60% of teachers in Tigray can\'t speak their students\' home dialect. AI tutors fill the gap — in every dialect, in every village.',
    context: `Ethiopia has 86 languages across 10 regional states. The Tigray Regional Education Bureau mandated Tigrinya-medium instruction in 2022 but faced a critical shortage: over 4,000 teacher vacancies in rural schools, and most available teachers spoke only Amharic. An AI tutoring pilot was initiated across 40 schools in 2024.`,
    problem: `Children in Tigrinya-speaking households who received Amharic-medium instruction showed 58% lower literacy rates by Grade 3 compared to peers in mother-tongue schools. The trauma of being forced to learn in a foreign language — sometimes punished for speaking home languages — was well-documented by UNESCO as a barrier to school completion.`,
    solution: `AI voice tutors were deployed on solar-powered tablets. Each tutor speaks the child's home dialect, teaches phonics using oral storytelling methods, and adapts to the individual child's vocabulary using real-time acoustic profiling. Content includes Tigrinya oral literature — fables, riddles, poetry — to build cultural pride alongside literacy.`,
    outcomes: [
      { value: '2.4×', label: 'Faster literacy acquisition vs Amharic instruction' },
      { value: '89%', label: 'Grade 2 reading comprehension pass rate (up from 34%)' },
      { value: '40', label: 'Schools in pilot programme' },
      { value: '4,200', label: 'Children reached in Year 1' },
    ],
    testimonials: [
      {
        quote: "When the device speaks to my students in Tigrinya, they sit up straight. Their eyes light up. They\'ve never heard a machine speak their language before. Now they fight to answer questions.",
        name: 'Tigist Hailu',
        role: 'Grade 2 Teacher, Adwa Primary School, Tigray',
      },
      {
        quote: "My son used to cry every morning before school. He said school was a place for Amhara children. Now he wakes up early. He says the tablet teacher sounds like his grandmother.",
        name: 'Selam Berhe',
        role: 'Parent, Axum District, Tigray',
      },
    ],
    nuances: [
      'Tigrinya dialect variation: Northern vs Central vs Eritrean Tigrinya',
      'Amharic-Tigrinya code-switching in urban areas',
      'Age-appropriate vocabulary scaffolding for 6–10 year olds',
      'Oral literature encoding: riddles, fables, call-and-response patterns',
    ],
  },
];

function TestimonialCard({ t, accent }) {
  return (
    <div className="rounded-2xl p-6 relative" style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${accent}30` }}>
      <Quote className="w-5 h-5 mb-3" style={{ color: accent }} />
      <p className="text-sm leading-relaxed italic mb-4" style={{ color: '#D6D3D1' }}>"{t.quote}"</p>
      <div>
        <p className="font-bold text-sm" style={{ color: '#FAFAF9' }}>{t.name}</p>
        <p className="text-xs mt-0.5" style={{ color: '#78716C' }}>{t.role}</p>
      </div>
    </div>
  );
}

function CaseCard({ cs, isActive, onClick }) {
  const Icon = cs.icon;
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-left w-full transition-all duration-200"
      style={{
        background: isActive ? `${cs.accentColor}20` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${isActive ? cs.accentColor + '60' : 'rgba(255,255,255,0.06)'}`,
      }}
    >
      <Icon className="w-5 h-5 flex-shrink-0" style={{ color: isActive ? cs.accentColor : '#78716C' }} />
      <span className="font-semibold text-sm" style={{ color: isActive ? '#FAFAF9' : '#A8A29E' }}>{cs.label}</span>
    </button>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [expandedNuances, setExpandedNuances] = useState(false);
  const cs = CASES[active];
  const Icon = cs.icon;

  return (
    <main style={{ background: 'var(--bg-base)', color: 'var(--text-body)' }} className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <AfricanCartoonBg variant="village" opacity={0.18} />
        <div className="absolute inset-0 bg-gradient-to-b" style={{ background: 'linear-gradient(to bottom, var(--bg-base)cc, var(--bg-base))' }} />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-8 tracking-widest uppercase"
              style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', color: '#D97706' }}>
              Real Impact, Real People
            </span>
            <h1 className="font-black leading-tight mb-6 tracking-tight"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--text-heading)' }}>
              Case Studies
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-body)' }}>
              Four industries. Four communities. Quantifiable change at the intersection of language, technology, and dignity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Layout */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar tabs */}
            <div className="lg:w-52 flex-shrink-0">
              <div className="sticky top-28 space-y-2">
                {CASES.map((c, i) => (
                  <CaseCard key={c.id} cs={c} isActive={i === active} onClick={() => { setActive(i); setExpandedNuances(false); }} />
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div key={cs.id}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}>

                  {/* Hero banner */}
                  <div className="relative rounded-3xl overflow-hidden mb-8" style={{ minHeight: 260 }}>
                    <AfricanCartoonBg variant={cs.bgVariant} opacity={0.55} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)' }} />
                    <div className="relative p-8 md:p-12">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                        style={{ background: `${cs.accentColor}25`, border: `1px solid ${cs.accentColor}50`, color: cs.accentColor }}>
                        {cs.tag}
                      </span>
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${cs.accentColor}25`, border: `1px solid ${cs.accentColor}40` }}>
                          <Icon className="w-7 h-7" style={{ color: cs.accentColor }} />
                        </div>
                        <div>
                          <h2 className="font-black leading-tight mb-3"
                            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.3rem, 3vw, 2rem)', color: '#FAFAF9' }}>
                            {cs.title}
                          </h2>
                          <p style={{ color: '#D6D3D1', fontSize: '1.05rem' }}>{cs.summary}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {cs.outcomes.map((o, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="rounded-2xl p-5 text-center"
                        style={{ background: `${cs.accentColor}0f`, border: `1px solid ${cs.accentColor}25` }}>
                        <div className="font-black text-2xl md:text-3xl mb-1" style={{ color: cs.accentColor }}>{o.value}</div>
                        <div className="text-xs leading-tight" style={{ color: '#78716C' }}>{o.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Story grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Context */}
                    <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: cs.accentColor }} />
                        <h3 className="font-bold text-sm uppercase tracking-widest" style={{ color: cs.accentColor }}>Context</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#A8A29E' }}>{cs.context}</p>
                    </div>
                    {/* Problem */}
                    <div className="rounded-2xl p-6" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <h3 className="font-bold text-sm uppercase tracking-widest text-red-400">The Problem</h3>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#A8A29E' }}>{cs.problem}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="rounded-2xl p-6 mb-8" style={{ background: `${cs.accentColor}08`, border: `1px solid ${cs.accentColor}20` }}>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5" style={{ color: cs.accentColor }} />
                      <h3 className="font-bold text-sm uppercase tracking-widest" style={{ color: cs.accentColor }}>Our Solution</h3>
                    </div>
                    <p className="leading-relaxed" style={{ color: '#D6D3D1' }}>{cs.solution}</p>
                  </div>

                  {/* Testimonials */}
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: '#57534E' }}>
                    <Quote className="w-4 h-4 inline mr-2" />Testimonials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {cs.testimonials.map((t, i) => (
                      <TestimonialCard key={i} t={t} accent={cs.accentColor} />
                    ))}
                  </div>

                  {/* Language nuances expandable */}
                  <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${cs.accentColor}25` }}>
                    <button onClick={() => setExpandedNuances(!expandedNuances)}
                      className="w-full flex items-center justify-between px-6 py-4 transition-colors"
                      style={{ background: `${cs.accentColor}0a` }}>
                      <span className="font-bold text-sm" style={{ color: cs.accentColor }}>
                        Language Nuances Captured ({cs.nuances.length} features)
                      </span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedNuances ? 'rotate-180' : ''}`} style={{ color: cs.accentColor }} />
                    </button>
                    <AnimatePresence>
                      {expandedNuances && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden">
                          <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                            {cs.nuances.map((n, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <Star className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: cs.accentColor }} />
                                <span className="text-sm" style={{ color: '#A8A29E' }}>{n}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <AfricanCartoonBg variant="pattern" opacity={0.12} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-black mb-4 text-3xl" style={{ fontFamily: 'Georgia, serif', color: 'var(--text-heading)' }}>
            Want to See Your Impact Here?
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-body)' }}>
            We partner with NGOs, healthcare providers, educators and SMEs across Africa. Let's build your case study together.
          </p>
          <Link to={createPageUrl('Contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
            style={{ background: '#D97706', boxShadow: '0 0 30px rgba(217,119,6,0.35)' }}>
            Partner With Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}