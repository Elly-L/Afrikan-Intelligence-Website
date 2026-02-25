import React, { createContext, useContext, useState } from 'react';
import { LANGUAGES_UI } from './i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('ai-lang') || 'en'; } catch { return 'en'; }
  });

  function setLanguage(code) {
    setLang(code);
    try { localStorage.setItem('ai-lang', code); } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, languages: LANGUAGES_UI }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

// Quick translation helper for use in components
export function useT() {
  const { lang } = useLang();
  return function translate(obj) {
    if (!obj) return '';
    return obj[lang] || obj['en'] || '';
  };
}