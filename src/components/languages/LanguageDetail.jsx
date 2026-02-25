import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Volume2, Users, Music, BookOpen, X, Play } from 'lucide-react';

const STATUS_LABELS = {
  full: { label: 'Full Support', color: '#22c55e' },
  beta: { label: 'Beta', color: '#D97706' },
  research: { label: 'In Research', color: '#a78bfa' },
};

// Voice options per language — simulated
function getVoiceOptions(lang) {
  const bases = [
    { id: 'v1', name: 'Adaeze (Female)', age: 'Adult', style: 'Neutral', accent: lang.dialects[0] || 'Standard' },
    { id: 'v2', name: 'Emeka (Male)', age: 'Adult', style: 'Formal', accent: lang.dialects[1] || lang.dialects[0] || 'Standard' },
  ];
  if (lang.status === 'full') {
    bases.push(
      { id: 'v3', name: 'Ngozi (Female)', age: 'Elder', style: 'Traditional', accent: lang.dialects[2] || lang.dialects[0] || 'Standard' },
      { id: 'v4', name: 'Chukwu (Male)', age: 'Youth', style: 'Urban / Code-switch', accent: 'Urban blend' },
    );
  }
  return bases;
}

export default function LanguageDetail({ lang, onClose }) {
  const [playingVoice, setPlayingVoice] = useState(null);
  const status = STATUS_LABELS[lang.status];
  const voices = getVoiceOptions(lang);

  function simulatePlay(id) {
    setPlayingVoice(id);
    setTimeout(() => setPlayingVoice(null), 2000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}
      className="rounded-3xl p-6 sticky top-28"
      style={{ background: 'var(--bg-surface)', border: '1px solid rgba(217,119,6,0.25)' }}>

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{lang.flag}</span>
          <div>
            <h3 className="font-black text-xl" style={{ color: 'var(--text-heading)' }}>{lang.name}</h3>
            <p className="text-xs font-medium" style={{ color: '#D97706' }}>{lang.region}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-xs font-bold"
            style={{ background: `${status.color}20`, color: status.color, border: `1px solid ${status.color}40` }}>
            {status.label}
          </span>
          <button onClick={onClose} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors">
            <X className="w-4 h-4" style={{ color: 'var(--text-sub)' }} />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { icon: Users, label: 'Speakers', value: lang.speakers },
          { icon: Music, label: 'Tone System', value: lang.tones === 0 ? 'Non-tonal' : `${lang.tones}-tone` },
          { icon: BookOpen, label: 'Dialects', value: `${lang.dialects.length}` },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-xl p-3 text-center" style={{ background: 'var(--bg-card)' }}>
            <Icon className="w-4 h-4 mx-auto mb-1" style={{ color: '#D97706' }} />
            <div className="text-sm font-bold" style={{ color: 'var(--text-heading)' }}>{value}</div>
            <div className="text-xs" style={{ color: 'var(--text-label)' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Language family */}
      <div className="mb-4 text-sm flex items-center justify-between">
        <span style={{ color: 'var(--text-sub)' }}>Language Family</span>
        <span className="font-semibold text-right" style={{ color: 'var(--text-heading)', maxWidth: '55%' }}>{lang.family}</span>
      </div>

      {/* Dialects */}
      {lang.dialects.length > 0 && (
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-label)' }}>Dialects</p>
          <div className="flex flex-wrap gap-1.5">
            {lang.dialects.map(d => (
              <span key={d} className="text-xs px-2 py-1 rounded-full"
                style={{ background: 'rgba(217,119,6,0.12)', color: '#D97706', border: '1px solid rgba(217,119,6,0.25)' }}>{d}</span>
            ))}
          </div>
        </div>
      )}

      {/* Nuances */}
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-label)' }}>Linguistic Nuances Captured</p>
        <div className="space-y-2">
          {lang.nuances.map((n, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#D97706' }} />
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-body)' }}>{n}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Voice Options */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--text-label)' }}>
          <Mic className="w-3 h-3" /> Available Voice Options
        </p>
        <div className="space-y-2">
          {voices.map(v => (
            <div key={v.id} className="flex items-center justify-between p-3 rounded-xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)' }}>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-heading)' }}>{v.name}</p>
                <p className="text-xs" style={{ color: 'var(--text-sub)' }}>{v.style} · {v.accent}</p>
              </div>
              <button onClick={() => simulatePlay(v.id)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: playingVoice === v.id ? '#D97706' : 'rgba(217,119,6,0.15)' }}>
                {playingVoice === v.id
                  ? <Volume2 className="w-4 h-4 text-white animate-pulse" />
                  : <Play className="w-3.5 h-3.5" style={{ color: '#D97706' }} />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}