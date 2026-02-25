import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPageUrl } from '@/utils';
import HandwrittenLogo from '@/components/shared/HandwrittenLogo';
import { useTheme } from '@/components/shared/ThemeContext';
import { useT } from '@/components/shared/LanguageContext';
import LangSwitcher from '@/components/navigation/LangSwitcher';
import { T } from '@/components/shared/i18n/translations';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();
  const tr = useT();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: tr(T.nav.home), path: 'Home' },
    { name: tr(T.nav.about), path: 'About' },
    { name: tr(T.nav.technology), path: 'Technology' },
    { name: tr(T.nav.solutions), path: 'Solutions' },
    { name: tr(T.nav.caseStudies), path: 'CaseStudies' },
    { name: tr(T.nav.languages), path: 'Languages' },
    { name: tr(T.nav.contact), path: 'Contact' },
  ];

  const isActive = (path) => location.pathname.includes(path.toLowerCase()) && path !== 'Home' || (path === 'Home' && location.pathname === '/');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      style={{
        background: isScrolled
          ? isDark ? 'rgba(10,5,0,0.97)' : 'rgba(253,250,245,0.97)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(217,119,6,0.12)' : 'none',
        boxShadow: isScrolled ? '0 4px 40px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center flex-shrink-0">
            <HandwrittenLogo size="md" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={createPageUrl(link.path)}
                  className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 group"
                  style={{
                    color: active
                      ? '#D97706'
                      : isDark ? 'rgba(214,211,208,0.8)' : 'rgba(68,64,60,0.85)',
                  }}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500"
                    />
                  )}
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)' }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden xl:flex items-center gap-2">
            <LangSwitcher />
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
                color: isDark ? '#F59E0B' : '#7C3AED',
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to={createPageUrl('Contact')}
              className="ml-1 px-5 py-2.5 text-white text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #D97706, #DC2626)',
                boxShadow: '0 4px 20px rgba(217,119,6,0.28)',
              }}
            >
              {tr(T.nav.getStarted)}
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
              style={{
                color: isDark ? '#fff' : '#1C1917',
                background: isMobileMenuOpen
                  ? isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
                  : 'transparent',
              }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="xl:hidden"
            style={{
              background: isDark ? 'rgba(10,5,0,0.98)' : 'rgba(253,250,245,0.98)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(217,119,6,0.12)',
            }}
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, i) => {
                const active = isActive(link.path);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={createPageUrl(link.path)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-150"
                      style={{
                        color: active ? '#D97706' : isDark ? 'rgba(214,211,208,0.85)' : 'rgba(68,64,60,0.9)',
                        background: active
                          ? 'rgba(217,119,6,0.08)'
                          : 'transparent',
                      }}
                    >
                      <span className="font-medium">{link.name}</span>
                      {active && <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
                    </Link>
                  </motion.div>
                );
              })}
              {/* Language + Theme in mobile menu */}
              <div className="px-4 pt-2 pb-1 flex items-center gap-3 border-t" style={{ borderColor: 'rgba(217,119,6,0.12)' }}>
                <LangSwitcher />
                <button
                  onClick={toggle}
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
                    color: isDark ? '#F59E0B' : '#7C3AED',
                  }}
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
              <div className="pt-2 pb-2 px-4">
                <Link
                  to={createPageUrl('Contact')}
                  className="flex items-center justify-center w-full py-3.5 text-white font-bold rounded-xl transition-all duration-200 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #D97706, #DC2626)' }}
                >
                  {tr(T.nav.getStarted)}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}