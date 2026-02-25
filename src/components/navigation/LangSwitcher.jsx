import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe2 } from 'lucide-react';
import { useLang } from '@/components/shared/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';

export default function LangSwitcher() {
  const { lang, setLanguage, languages } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = languages.find(l => l.code === lang) || languages[0];

  useEffect(() => {
    function handler(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
        style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', color: '#D97706' }}>
        <Globe2 className="w-4 h-4" />
        <span>{current.flag} {current.nativeName}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-52 rounded-2xl overflow-hidden z-50 shadow-2xl"
            style={{ background: 'var(--navbar-bg)', border: '1px solid rgba(217,119,6,0.2)', backdropFilter: 'blur(20px)' }}>
            {languages.map(l => (
              <button key={l.code}
                onClick={() => { setLanguage(l.code); setOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-all"
                style={{
                  background: lang === l.code ? 'rgba(217,119,6,0.12)' : 'transparent',
                  color: lang === l.code ? '#D97706' : 'var(--text-body)',
                  fontWeight: lang === l.code ? 700 : 400,
                }}
                onMouseEnter={e => { if (lang !== l.code) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => { if (lang !== l.code) e.currentTarget.style.background = 'transparent'; }}>
                <span className="text-xl">{l.flag}</span>
                <div>
                  <div>{l.nativeName}</div>
                  <div className="text-xs" style={{ color: 'var(--text-label)' }}>{l.name}</div>
                </div>
                {lang === l.code && <div className="ml-auto w-2 h-2 rounded-full bg-amber-500" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}