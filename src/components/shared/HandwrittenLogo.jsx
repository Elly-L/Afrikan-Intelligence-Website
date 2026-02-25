import React from 'react';

export default function HandwrittenLogo({ size = 'md', dark = false }) {
  const sizes = {
    sm: { text: 'text-lg', sub: 'text-xs', icon: 36 },
    md: { text: 'text-xl', sub: 'text-sm', icon: 42 },
    lg: { text: 'text-2xl', sub: 'text-sm', icon: 50 },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      {/* Handcrafted SVG logo mark */}
      <svg width={s.icon} height={s.icon} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle with slight imperfection - hand-drawn feel */}
        <path
          d="M25,2 C35,1.5 46,8 48,19 C50,30 44,43 33,47 C22,51 10,45 5,35 C0,25 4,12 13,6 C17,3 21,2.5 25,2Z"
          fill="url(#logoGrad)"
        />
        {/* Hand-drawn A letterform */}
        <path
          d="M16,38 L23,14 Q25,10 27,14 L34,38"
          stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
        />
        <path
          d="M18.5,28 L31.5,28"
          stroke="white" strokeWidth="2.5" strokeLinecap="round"
        />
        {/* Small dot - like an Adinkra accent */}
        <circle cx="25" cy="9" r="1.5" fill="white" opacity="0.8" />
        {/* Tribal accent lines */}
        <path d="M10,20 L14,22 M36,22 L40,20" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Handwritten-style text using a serif-ish approach via letter-spacing */}
      <div className="flex flex-col leading-none">
        <span
          className={`${s.text} font-bold tracking-tight`}
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            color: dark ? '#1C1917' : '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          Afrikan
          <span style={{ color: '#D97706' }}>Intelligence</span>
        </span>
        <span
          className={`${s.sub} tracking-widest uppercase`}
          style={{
            color: dark ? '#78716C' : 'rgba(255,255,255,0.5)',
            fontFamily: "'Georgia', serif",
            fontSize: '0.6em',
            letterSpacing: '0.2em',
          }}
        >
          Speech · AI · Africa
        </span>
      </div>
    </div>
  );
}