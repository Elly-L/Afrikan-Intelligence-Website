import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, MapPin, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import HandwrittenLogo from '@/components/shared/HandwrittenLogo';
import { useT } from '@/components/shared/LanguageContext';
import { T } from '@/components/shared/i18n/translations';

export default function Footer() {
  const tr = useT();
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0A0500', borderTop: '1px solid rgba(217,119,6,0.12)' }}>
      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #D97706, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-14">
          {/* Brand — spans 2 cols on lg */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:pr-10">
            <div className="mb-5">
              <HandwrittenLogo size="md" />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: '#78716C' }}>
              {tr(T.footer.tagline)}
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Github, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.06)', color: '#78716C' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#D97706'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#78716C'; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#D97706' }}>
              {tr(T.footer.company)}
            </h4>
            <ul className="space-y-3">
              {[
                { labelKey: 'about', page: 'About' },
                { labelKey: 'technology', page: 'Technology' },
                { labelKey: 'languages', page: 'Languages' },
                { labelKey: 'contact', page: 'Contact' },
              ].map((item) => (
                <li key={item.page}>
                  <Link
                    to={createPageUrl(item.page)}
                    className="text-sm transition-colors duration-200 hover:text-amber-500"
                    style={{ color: '#57534E' }}
                  >
                    {tr(T.nav[item.labelKey])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#D97706' }}>
              {tr(T.footer.solutions)}
            </h4>
            <ul className="space-y-3">
              {[
                { labelKey: 'fintech', page: 'CaseStudyFintech' },
                { labelKey: 'healthcare', page: 'CaseStudyHealthcare' },
                { labelKey: 'agritech', page: 'CaseStudyAgritech' },
                { labelKey: 'trade', page: 'CaseStudyTrade' },
              ].map((item) => (
                <li key={item.labelKey}>
                  <Link
                    to={createPageUrl(item.page)}
                    className="text-sm transition-colors duration-200 hover:text-amber-500"
                    style={{ color: '#57534E' }}
                  >
                    {tr(T.footer[item.labelKey])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#D97706' }}>
              {tr(T.footer.contact)}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@afrikanintelligence.ai"
                  className="flex items-center gap-2.5 text-sm group"
                  style={{ color: '#57534E' }}
                >
                  <Mail size={14} className="text-amber-600 flex-shrink-0" />
                  <span className="group-hover:text-amber-500 transition-colors break-all">hello@afrikanintelligence.ai</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: '#57534E' }}>
                <MapPin size={14} className="text-amber-600 flex-shrink-0" />
                <span>{tr(T.footer.location)}</span>
              </li>
            </ul>

            {/* CTA */}
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-1.5 mt-6 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #D97706, #DC2626)' }}
            >
              {tr(T.nav.getStarted)}
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-xs order-2 sm:order-1" style={{ color: '#44403C' }}>
            © {year} Afrikan Intelligence. {tr(T.footer.rights)}
          </p>
          <div className="flex items-center gap-5 order-1 sm:order-2">
            <Link
              to={createPageUrl('PrivacyPolicy')}
              className="text-xs transition-colors hover:text-amber-500"
              style={{ color: '#44403C' }}
            >
              {tr(T.footer.privacy)}
            </Link>
            <Link
              to={createPageUrl('TermsOfService')}
              className="text-xs transition-colors hover:text-amber-500"
              style={{ color: '#44403C' }}
            >
              {tr(T.footer.terms)}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}