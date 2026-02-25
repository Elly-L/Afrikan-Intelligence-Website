import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import { ThemeProvider } from '@/components/shared/ThemeContext';
import { LanguageProvider } from '@/components/shared/LanguageContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

export default function Layout({ children }) {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <div className="min-h-screen theme-root" style={{ fontFamily: "'Georgia', 'Palatino Linotype', serif" }}>
        <style>{`
          :root, [data-theme="dark"] {
            --bg-base: #0A0500;
            --bg-surface: #110D04;
            --bg-card: rgba(255,255,255,0.03);
            --bg-card-alt: rgba(255,255,255,0.02);
            --text-heading: #FAFAF9;
            --text-body: #A8A29E;
            --text-sub: #78716C;
            --text-label: #57534E;
            --border-default: rgba(255,255,255,0.08);
            --divider: rgba(255,255,255,0.07);
            --navbar-bg: rgba(10,5,0,0.95);
          }
          [data-theme="light"] {
            --bg-base: #FDFAF5;
            --bg-surface: #F5EFE4;
            --bg-card: rgba(0,0,0,0.03);
            --bg-card-alt: rgba(0,0,0,0.02);
            --text-heading: #1C1917;
            --text-body: #44403C;
            --text-sub: #57534E;
            --text-label: #78716C;
            --border-default: rgba(0,0,0,0.1);
            --divider: rgba(0,0,0,0.08);
            --navbar-bg: rgba(253,250,245,0.95);
          }
          .theme-root { background-color: var(--bg-base); }
          body { background-color: var(--bg-base); transition: background-color 0.3s; }
          .theme-section { background-color: var(--bg-surface); }
          .theme-heading { color: var(--text-heading); }
          .theme-body { color: var(--text-body); }
          .theme-subtext { color: var(--text-sub); }
          .theme-label { color: var(--text-label); }
          .theme-card { background: var(--bg-card); }
          .theme-card-alt { background: var(--bg-card-alt); }
          .theme-divider { border-color: var(--divider); }
          .theme-quote { color: var(--text-heading); }
          h1, h2, h3 { font-family: 'Georgia', 'Palatino Linotype', serif; }
          .font-mono { font-family: 'Courier New', monospace; }
          * { transition: background-color 0.25s, color 0.25s, border-color 0.25s; }

          /* Global page theming — applies to ALL content pages */
          main { background-color: var(--bg-base) !important; }
          section { background-color: inherit; }

          /* ALL themes: remap slate/stone hardcoded bg classes to CSS vars */
          .bg-slate-950, .bg-stone-950 { background-color: var(--bg-base) !important; }
          .bg-slate-900, .bg-stone-900 { background-color: var(--bg-surface) !important; }
          .bg-slate-800, .bg-slate-800\/50 { background-color: var(--bg-card) !important; }
          .bg-stone-800, .bg-stone-800\/50, .bg-stone-800\/40 { background-color: var(--bg-card) !important; }

          /* Border overrides */
          .border-slate-700\/50, .border-slate-700,
          .border-stone-700\/50, .border-stone-700, .border-stone-700\/40 { border-color: var(--border-default) !important; }
          .border-slate-600, .border-stone-600 { border-color: var(--border-default) !important; }

          /* Text overrides — cover all slate AND stone variants */
          .text-slate-400, .text-stone-400 { color: var(--text-body) !important; }
          .text-slate-300, .text-stone-300 { color: var(--text-body) !important; }
          .text-slate-200, .text-stone-200 { color: var(--text-heading) !important; }
          .text-slate-500, .text-stone-500 { color: var(--text-sub) !important; }
          .text-slate-600, .text-stone-600 { color: var(--text-label) !important; }
          .text-white, .text-stone-100, .text-slate-100 { color: var(--text-heading) !important; }

          /* Keep gradient text working */
          .bg-clip-text.text-transparent { color: transparent !important; }

          /* Gradient/tinted card backgrounds — keep subtle tint but respect theme */
          [class*="from-slate-800"], [class*="from-stone-800"],
          [class*="to-slate-900"], [class*="to-stone-900"] {
            background-color: var(--bg-card) !important;
          }

          /* bg-white/5 and bg-white/10 glass elements */
          .bg-white\/5 { background-color: var(--bg-card) !important; }
          .bg-white\/10 { background-color: var(--bg-card-alt) !important; }

          /* border-white/10, border-white/20 */
          .border-white\/10, .border-white\/20 { border-color: var(--border-default) !important; }

          /* Red/amber/green tinted dark cards — keep color accent but remap base */
          [class*="from-red-950"], [class*="from-green-950"],
          [class*="from-blue-950"], [class*="from-amber-950"],
          [class*="from-purple-950"] { background-color: var(--bg-card) !important; }

          /* Footer always dark */
          footer { background-color: #0A0500 !important; }
          footer * { color: inherit; }
        `}</style>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </div>
    </LanguageProvider>
    </ThemeProvider>
  );
}