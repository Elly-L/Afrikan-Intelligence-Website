import React, { useState, useMemo } from 'react';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, CheckCircle, Users, Music, Globe2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AfricaMap from '@/components/languages/AfricaMap';
import LanguageDetail from '@/components/languages/LanguageDetail';

const REGIONS = ['All', 'West Africa', 'East Africa', 'Central Africa', 'Southern Africa', 'North Africa'];
const STATUS_OPTIONS = ['All', 'Full Support', 'Beta', 'In Research'];

const LANGUAGES = [
  { name: 'Yoruba', speakers: '47M', region: 'West Africa', family: 'Niger-Congo', status: 'full', flag: '🇳🇬', dialects: ['Ekiti', 'Ondo', 'Ìjèbú', 'Oyo'], tones: 3, nuances: ['3-level tone system (high, mid, low)', 'Nasal harmony', 'Honorific register for elders', 'Proverb-dense speech patterns'] },
  { name: 'Igbo', speakers: '44M', region: 'West Africa', family: 'Niger-Congo', status: 'full', flag: '🇳🇬', dialects: ['Owerri', 'Onitsha', 'Aba', 'Enugu'], tones: 2, nuances: ['Binary tone with downstep', 'Vowel harmony (8 vowels)', 'Tone-bearing nasals', 'Oral literature encoding'] },
  { name: 'Hausa', speakers: '70M', region: 'West Africa', family: 'Afro-Asiatic', status: 'full', flag: '🇳🇬', dialects: ['Kano', 'Sokoto', 'Zaria', 'Bauchi'], tones: 2, nuances: ['Tonal language with length contrast', 'Ejective consonants', 'Arabic loanword phonology', 'Gendered verb agreement'] },
  { name: 'Twi (Akan)', speakers: '22M', region: 'West Africa', family: 'Niger-Congo', status: 'full', flag: '🇬🇭', dialects: ['Asante', 'Akuapem', 'Fante'], tones: 2, nuances: ['Tone sandhi at morpheme boundaries', 'Vowel harmony (ATR)', 'Proverb translation complexity', 'Honorific 5-level system'] },
  { name: 'Wolof', speakers: '10M', region: 'West Africa', family: 'Niger-Congo', status: 'full', flag: '🇸🇳', dialects: ['Dakar Urban', 'Rural Kaolack', 'Lebu'], tones: 0, nuances: ['Consonant mutation system (7 classes)', 'Non-tonal (rare for West Africa)', 'French code-switching patterns', 'Social register complexity'] },
  { name: 'Fula / Fulfulde', speakers: '40M', region: 'West Africa', family: 'Niger-Congo', status: 'beta', flag: '🌍', dialects: ['Pular', 'Pulaar', 'Fulfulde Adamawa'], tones: 0, nuances: ['Noun class system (25+ classes)', 'Initial consonant mutation', 'Vast geographic dialect variation', 'Pastoralist vocabulary richness'] },
  { name: 'Ewe', speakers: '7M', region: 'West Africa', family: 'Niger-Congo', status: 'beta', flag: '🇬🇭', dialects: ['Anlo', 'Abutia', 'Tongu'], tones: 3, nuances: ['3-tone with contour tones', 'Labiodental flap (rare phoneme)', 'Drum-language encoding', 'Complex syllable structure'] },
  { name: 'Bambara', speakers: '15M', region: 'West Africa', family: 'Mande', status: 'beta', flag: '🇲🇱', dialects: ['Bamako Urban', 'Rural Dioïla', 'Ségou'], tones: 2, nuances: ['Tonal melodies over entire words', 'SV word order variation', 'Islamic register (Arabic borrowings)', 'Griot oral tradition encoding'] },
  { name: 'Swahili', speakers: '200M', region: 'East Africa', family: 'Niger-Congo (Bantu)', status: 'full', flag: '🇰🇪', dialects: ['Coastal', 'Standard (Sanifu)', 'Sheng (Nairobi urban)'], tones: 0, nuances: ['Noun class system (15 classes)', 'Bantu agglutination patterns', 'Arabic maritime vocabulary', 'Sheng urban code-switch model'] },
  { name: 'Amharic', speakers: '32M', region: 'East Africa', family: 'Afro-Asiatic (Semitic)', status: 'full', flag: '🇪🇹', dialects: ['Addis Ababa', 'Gondar', 'Jimma'], tones: 0, nuances: ['Gemination (consonant doubling)', 'Fidel script phoneme mapping', 'Ethiopic poetic meter patterns', 'Formal vs informal register'] },
  { name: 'Tigrinya', speakers: '9M', region: 'East Africa', family: 'Afro-Asiatic', status: 'full', flag: '🇪🇹', dialects: ['Northern (Eritrean)', 'Central (Tigray)', 'Adwa variant'], tones: 0, nuances: ['Pharyngeal consonants', 'Geminate phoneme contrast', 'Tigray vs Eritrean lexical divergence', 'Oral literature: riddles and fables'] },
  { name: 'Gikuyu (Kikuyu)', speakers: '8M', region: 'East Africa', family: 'Niger-Congo (Bantu)', status: 'full', flag: '🇰🇪', dialects: ['Central', 'Kirinyaga', 'Murang\'a'], tones: 2, nuances: ['Tonal melodies on verb stems', 'Noun class concord patterns', 'Proverb-rich negotiation speech', 'Elder respect registers'] },
  { name: 'Oromo', speakers: '40M', region: 'East Africa', family: 'Afro-Asiatic', status: 'beta', flag: '🇪🇹', dialects: ['Borana', 'Guji', 'Wellega', 'Arsi'], tones: 2, nuances: ['Tonal contrast in verb paradigms', 'Geminate consonants', 'Gada oral governance vocabulary', 'Pastoral ecological lexicon'] },
  { name: 'Somali', speakers: '22M', region: 'East Africa', family: 'Afro-Asiatic', status: 'beta', flag: '🇸🇴', dialects: ['Northern', 'Benadiri', 'Maay'], tones: 2, nuances: ['Tonal accent (2-level)', 'Rich oral poetry tradition', 'Complex case system', 'Pastoral and maritime registers'] },
  { name: 'Luganda', speakers: '7M', region: 'East Africa', family: 'Niger-Congo (Bantu)', status: 'beta', flag: '🇺🇬', dialects: ['Kampala Urban', 'Rural Buganda'], tones: 2, nuances: ['Tonal with downstep patterns', 'Bantu noun classes', 'Royal court vocabulary', 'Catholic/Protestant register divergence'] },
  { name: 'Lingala', speakers: '70M', region: 'Central Africa', family: 'Niger-Congo (Bantu)', status: 'full', flag: '🇨🇩', dialects: ['Kinshasa Urban', 'River (Classical)', 'Brazzaville'], tones: 2, nuances: ['Two underlying tones + downstep', 'French and Bantu vocabulary blending', 'Congolese music rhythm patterns', 'Urban slang evolution model'] },
  { name: 'Kinyarwanda', speakers: '12M', region: 'Central Africa', family: 'Niger-Congo (Bantu)', status: 'beta', flag: '🇷🇼', dialects: ['Standard', 'Kiga border variant'], tones: 2, nuances: ['Lexical tone system', '15-class noun system', 'Post-genocide reconciliation register', 'Imigani oral literature'] },
  { name: 'Fang', speakers: '3M', region: 'Central Africa', family: 'Niger-Congo (Bantu)', status: 'research', flag: '🇬🇦', dialects: ['Beti', 'Bulu', 'Ewondo'], tones: 2, nuances: ['Complex tonal system', 'Rich forest ecology vocabulary', 'Ritual speech patterns', 'Very limited digital corpus'] },
  { name: 'Zulu (isiZulu)', speakers: '27M', region: 'Southern Africa', family: 'Niger-Congo (Bantu)', status: 'full', flag: '🇿🇦', dialects: ['Standard', 'Natal Coast', 'Inland'], tones: 2, nuances: ['Click consonants (3 types: dental, alveolar, palatal)', 'Noun class concord', 'Isigqi bow-playing rhythm encoding', 'Formal praise poetry (izibongo)'] },
  { name: 'Xhosa (isiXhosa)', speakers: '20M', region: 'Southern Africa', family: 'Niger-Congo (Bantu)', status: 'full', flag: '🇿🇦', dialects: ['Standard', 'Gcaleka', 'Mfengu'], tones: 2, nuances: ['Click consonants (dental, lateral, palatal)', 'Extended Ntu noun class system', 'Initiation ceremony speech register', 'Oral praise tradition'] },
  { name: 'Shona', speakers: '15M', region: 'Southern Africa', family: 'Niger-Congo (Bantu)', status: 'beta', flag: '🇿🇼', dialects: ['Karanga', 'Korekore', 'Zezuru', 'Manyika'], tones: 2, nuances: ['Tonal contrasts on long vowels', 'Agglutinative verbal morphology', 'Mbira music lexicon', 'Ancestral spirit register (midzimu)'] },
  { name: 'Sesotho', speakers: '8M', region: 'Southern Africa', family: 'Niger-Congo (Bantu)', status: 'beta', flag: '🇱🇸', dialects: ['Lesotho', 'South African variety'], tones: 2, nuances: ['Tonal with downstep', 'Bantu noun class system', 'Praise poetry (lithoko)', 'Sotho-Nguni code-switching'] },
  { name: 'Tamazight (Berber)', speakers: '25M', region: 'North Africa', family: 'Afro-Asiatic', status: 'research', flag: '🇲🇦', dialects: ['Tachelhit', 'Central Atlas', 'Kabyle', 'Tarifit'], tones: 0, nuances: ['Consonant-heavy roots', 'Triconsonantal morphology', 'Tifinagh script phonology', 'Pre-Islamic oral culture preservation'] },
  { name: 'Hassaniya Arabic', speakers: '5M', region: 'North Africa', family: 'Afro-Asiatic', status: 'research', flag: '🇲🇷', dialects: ['Mauritanian', 'Saharan', 'Mali variant'], tones: 0, nuances: ['Saharan Arabic phonology', 'Poetic register (Hassan poetry)', 'Nomadic pastoral vocabulary', 'Very limited digital corpus'] },
];

const STATUS_MAP = { 'Full Support': 'full', 'Beta': 'beta', 'In Research': 'research' };
const STATUS_LABELS = {
  full: { label: 'Full Support', color: '#22c55e' },
  beta: { label: 'Beta', color: '#D97706' },
  research: { label: 'In Research', color: '#a78bfa' },
};

function LangCard({ lang, onClick, isSelected }) {
  const status = STATUS_LABELS[lang.status];
  return (
    <motion.button layout whileHover={{ y: -3 }} onClick={onClick}
      className="rounded-2xl p-5 text-left w-full transition-all duration-200"
      style={{
        background: isSelected ? 'rgba(217,119,6,0.10)' : 'var(--bg-card)',
        border: `1px solid ${isSelected ? '#D97706' : 'var(--border-default)'}`,
      }}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{lang.flag}</span>
          <div>
            <div className="font-bold text-sm" style={{ color: 'var(--text-heading)' }}>{lang.name}</div>
            <div className="text-xs" style={{ color: 'var(--text-sub)' }}>{lang.family}</div>
          </div>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0"
          style={{ background: `${status.color}20`, color: status.color, border: `1px solid ${status.color}40` }}>
          {status.label}
        </span>
      </div>
      <div className="flex items-center gap-3 text-xs mb-2" style={{ color: 'var(--text-sub)' }}>
        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {lang.speakers}</span>
        <span className="flex items-center gap-1"><Music className="w-3 h-3" /> {lang.tones === 0 ? 'Non-tonal' : `${lang.tones}-tone`}</span>
      </div>
      {lang.dialects.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {lang.dialects.slice(0, 2).map(d => (
            <span key={d} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(217,119,6,0.1)', color: '#D97706' }}>{d}</span>
          ))}
          {lang.dialects.length > 2 && (
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--bg-card)', color: 'var(--text-sub)' }}>+{lang.dialects.length - 2}</span>
          )}
        </div>
      )}
    </motion.button>
  );
}

function RequestForm() {
  const [form, setForm] = useState({ language: '', region: '', speakers: '', context: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  if (submitted) return (
    <div className="rounded-3xl p-10 text-center" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.3)' }}>
      <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
      <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--text-heading)' }}>Request Submitted!</h3>
      <p style={{ color: 'var(--text-body)' }}>Our linguistics team will review your request and reach out within 5–7 business days.</p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}>
      <h3 className="font-black text-xl" style={{ color: 'var(--text-heading)' }}>Request Language Support</h3>
      <p className="text-sm" style={{ color: 'var(--text-sub)' }}>Help us grow. Tell us about the language your community speaks.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { key: 'language', label: 'Language Name *', placeholder: 'e.g. Dinka, Nuer, Igala...', required: true },
          { key: 'region', label: 'Region / Country *', placeholder: 'e.g. South Sudan', required: true },
          { key: 'speakers', label: 'Estimated Speakers', placeholder: 'e.g. 2 million', required: false },
          { key: 'email', label: 'Your Email *', placeholder: 'you@example.com', required: true, type: 'email' },
        ].map(f => (
          <div key={f.key}>
            <label className="block text-xs font-bold mb-1.5 uppercase tracking-widest" style={{ color: 'var(--text-label)' }}>{f.label}</label>
            <Input type={f.type || 'text'} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
              required={f.required} placeholder={f.placeholder}
              style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-default)', color: 'var(--text-heading)' }} />
          </div>
        ))}
      </div>
      <div>
        <label className="block text-xs font-bold mb-1.5 uppercase tracking-widest" style={{ color: 'var(--text-label)' }}>Use Case & Context</label>
        <Textarea value={form.context} onChange={e => setForm({ ...form, context: e.target.value })}
          placeholder="Why is this language important to you or your community? Healthcare, trade, education, diaspora connection?"
          style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-default)', color: 'var(--text-heading)' }}
          className="min-h-[100px]" />
      </div>
      <button type="submit" className="flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105"
        style={{ background: '#D97706', boxShadow: '0 0 20px rgba(217,119,6,0.25)' }}>
        <Send className="w-4 h-4" /> Submit Request
      </button>
    </form>
  );
}

export default function Languages() {
  const tr = useT();
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const counts = useMemo(() => {
    const c = { full: 0, beta: 0, research: 0 };
    LANGUAGES.forEach(l => c[l.status]++);
    return c;
  }, []);

  const filtered = useMemo(() => LANGUAGES.filter(l => {
    const matchRegion = region === 'All' || l.region === region;
    const matchStatus = statusFilter === 'All' || l.status === STATUS_MAP[statusFilter];
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.family.toLowerCase().includes(search.toLowerCase()) ||
      l.dialects.some(d => d.toLowerCase().includes(search.toLowerCase()));
    return matchRegion && matchStatus && matchSearch;
  }), [region, statusFilter, search]);

  function handleMapRegion(r) {
    setRegion(prev => prev === r ? 'All' : r);
    setSelected(null);
  }

  return (
    <main style={{ background: 'var(--bg-base)' }} className="pt-20 min-h-screen">

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.12) 0%, transparent 70%)' }} />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-8 tracking-widest uppercase"
              style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', color: '#D97706' }}>
              {tr(T.languagesPage.badge)}
            </span>
            <h1 className="font-black mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: 'var(--text-heading)' }}>
              {LANGUAGES.length} {tr(T.languagesPage.title1)}<br />
              <span style={{ color: '#D97706' }}>{tr(T.languagesPage.title2)}</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-body)' }}>
              {tr(T.languagesPage.subtitle)}
            </p>
            {/* Status counts */}
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(STATUS_LABELS).map(([k, v]) => (
                <div key={k} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ background: `${v.color}15`, border: `1px solid ${v.color}35`, color: v.color }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: v.color }} />
                  {v.label}: {counts[k]}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map + Stats */}
      <section className="py-16" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: '#D97706' }}>Regional Presence</p>
              <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--text-heading)', fontFamily: 'Georgia, serif' }}>Click a Region to Filter</h2>
              <p className="mb-8 text-sm" style={{ color: 'var(--text-body)' }}>Our coverage spans all five African regions. Select any region on the map to explore the languages supported there.</p>
              <AfricaMap activeRegion={region === 'All' ? null : region} onRegionClick={handleMapRegion} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '24', label: 'Languages Supported', icon: Globe2, color: '#D97706' },
                { value: '80+', label: 'Distinct Dialects', icon: Music, color: '#06B6D4' },
                { value: '700M+', label: 'Total Speakers Reached', icon: Users, color: '#22C55E' },
                { value: '5', label: 'African Regions Covered', icon: Globe2, color: '#8B5CF6' },
              ].map(({ value, label, icon: Icon, color }) => (
                <motion.div key={label} whileHover={{ y: -4 }}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}>
                  <Icon className="w-6 h-6 mx-auto mb-3" style={{ color }} />
                  <div className="text-3xl font-black mb-1" style={{ color: 'var(--text-heading)' }}>{value}</div>
                  <div className="text-xs" style={{ color: 'var(--text-sub)' }}>{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter + Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-label)' }} />
              <Input value={search} onChange={e => setSearch(e.target.value)}
                placeholder={tr(T.languagesPage.searchPlaceholder)}
                style={{ paddingLeft: '3rem', height: '3rem', background: 'var(--bg-card)', borderColor: 'var(--border-default)', color: 'var(--text-heading)' }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {STATUS_OPTIONS.map(s => (
                <button key={s} onClick={() => setStatusFilter(s)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: statusFilter === s ? '#D97706' : 'var(--bg-card)',
                    color: statusFilter === s ? '#fff' : 'var(--text-body)',
                    border: `1px solid ${statusFilter === s ? '#D97706' : 'var(--border-default)'}`,
                  }}>{s}
                </button>
              ))}
            </div>
          </div>

          {/* Region pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {REGIONS.map(r => (
              <button key={r} onClick={() => { setRegion(r); setSelected(null); }}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: region === r ? 'rgba(217,119,6,0.15)' : 'var(--bg-card)',
                  color: region === r ? '#D97706' : 'var(--text-sub)',
                  border: `1px solid ${region === r ? '#D97706' : 'var(--border-default)'}`,
                }}>{r}
              </button>
            ))}
          </div>

          <p className="text-sm mb-6" style={{ color: 'var(--text-sub)' }}>
            {tr(T.languagesPage.showing)} <span className="font-bold" style={{ color: 'var(--text-heading)' }}>{filtered.length}</span> {tr(T.languagesPage.langLabel)}
          </p>

          {/* Grid + Detail panel */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 content-start">
              <AnimatePresence>
                {filtered.map(lang => (
                  <LangCard key={lang.name} lang={lang}
                    isSelected={selected?.name === lang.name}
                    onClick={() => setSelected(selected?.name === lang.name ? null : lang)} />
                ))}
              </AnimatePresence>
              {filtered.length === 0 && (
                <div className="col-span-3 text-center py-16" style={{ color: 'var(--text-sub)' }}>
                  {tr(T.languagesPage.noResults)}{' '}
                  <button onClick={() => { setSearch(''); setRegion('All'); setStatusFilter('All'); }}
                    className="underline" style={{ color: '#D97706' }}>{tr(T.languagesPage.clearFilters)}</button>
                </div>
              )}
            </div>

            <AnimatePresence>
              {selected && (
                <div className="lg:w-80 flex-shrink-0">
                  <LanguageDetail lang={selected} onClose={() => setSelected(null)} />
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Request form */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl mb-3" style={{ fontFamily: 'Georgia, serif', color: 'var(--text-heading)' }}>
              {tr(T.languagesPage.dontSee)}
            </h2>
            <p style={{ color: 'var(--text-body)' }}>
              {tr(T.languagesPage.requestDesc)}
            </p>
          </div>
          <RequestForm />
        </div>
      </section>
    </main>
  );
}