import React from 'react';

// Real Africa SVG paths per region (simplified but geographically accurate outlines)
const REGIONS = {
  'North Africa': {
    color: '#8B5CF6',
    // Morocco, Algeria, Tunisia, Libya, Egypt, Sudan (north), Western Sahara
    paths: [
      // Moroccan + Algeria + Tunisia + Libya + Egypt strip
      'M 152,108 L 165,100 L 195,95 L 230,90 L 270,88 L 310,87 L 355,88 L 395,90 L 430,95 L 460,102 L 485,112 L 500,125 L 505,145 L 500,168 L 488,185 L 470,198 L 445,208 L 415,215 L 380,220 L 340,222 L 300,221 L 262,218 L 228,212 L 198,202 L 172,190 L 155,175 L 148,158 L 148,138 Z',
    ],
  },
  'West Africa': {
    color: '#D97706',
    // Senegal, Guinea, Sierra Leone, Liberia, Ivory Coast, Ghana, Togo, Benin, Nigeria, Niger (south), Burkina Faso, Mali (south)
    paths: [
      'M 148,158 L 155,175 L 155,210 L 148,240 L 145,268 L 152,292 L 165,310 L 172,330 L 175,352 L 172,368 L 180,378 L 196,375 L 215,370 L 238,368 L 260,372 L 280,370 L 298,360 L 315,345 L 328,328 L 335,308 L 338,285 L 340,262 L 342,240 L 342,222 L 300,221 L 262,218 L 228,212 L 198,202 L 172,190 Z',
    ],
  },
  'Central Africa': {
    color: '#EC4899',
    // Cameroon, Central African Republic, DRC, Republic of Congo, Gabon, Equatorial Guinea, Chad (south), Angola (north)
    paths: [
      'M 315,345 L 328,328 L 338,285 L 340,262 L 342,240 L 380,220 L 415,215 L 445,208 L 470,198 L 485,212 L 490,240 L 488,268 L 482,295 L 478,322 L 470,348 L 458,372 L 445,392 L 430,412 L 412,430 L 390,445 L 368,455 L 345,458 L 322,452 L 302,438 L 285,420 L 275,400 L 272,382 L 278,365 L 290,352 L 298,360 Z',
    ],
  },
  'East Africa': {
    color: '#06B6D4',
    // Ethiopia, Somalia, Kenya, Tanzania, Uganda, Rwanda, Burundi, Eritrea, Djibouti, South Sudan
    paths: [
      'M 470,198 L 488,185 L 500,168 L 505,145 L 515,155 L 525,175 L 530,200 L 528,228 L 522,255 L 518,280 L 515,308 L 510,335 L 500,360 L 488,382 L 472,400 L 458,412 L 445,420 L 432,428 L 415,432 L 397,435 L 380,432 L 368,422 L 355,410 L 345,390 L 340,368 L 342,345 L 348,322 L 358,300 L 368,278 L 375,258 L 378,238 L 375,218 L 380,220 L 415,215 L 445,208 L 470,198 Z',
    ],
  },
  'Southern Africa': {
    color: '#22C55E',
    // Zambia, Zimbabwe, Mozambique, Malawi, Madagascar, South Africa, Namibia, Botswana, Lesotho, Swaziland, Angola (south)
    paths: [
      'M 302,438 L 322,452 L 345,458 L 368,455 L 390,445 L 412,430 L 430,412 L 445,420 L 458,412 L 472,400 L 480,420 L 485,445 L 482,472 L 475,498 L 462,522 L 445,542 L 425,560 L 400,574 L 375,582 L 350,580 L 325,572 L 302,558 L 282,538 L 268,515 L 260,490 L 258,465 L 262,442 L 272,428 L 285,420 L 302,438 Z',
    ],
  },
};

export default function AfricaMap({ activeRegion, onRegionClick }) {
  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <svg viewBox="135 80 405 520" className="w-full drop-shadow-xl" style={{ filter: 'drop-shadow(0 0 18px rgba(0,0,0,0.5))' }}>
        <defs>
          <filter id="mapglow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Continent base fill */}
        <path
          d="M 152,108 L 165,100 L 195,95 L 230,90 L 270,88 L 310,87 L 355,88 L 395,90 L 430,95 L 460,102 L 485,112 L 500,125 L 515,155 L 530,200 L 528,228 L 522,255 L 518,280 L 515,308 L 510,335 L 500,360 L 488,382 L 480,420 L 485,445 L 482,472 L 475,498 L 462,522 L 445,542 L 425,560 L 400,574 L 375,582 L 350,580 L 325,572 L 302,558 L 282,538 L 268,515 L 260,490 L 258,465 L 262,442 L 260,420 L 258,400 L 258,380 L 255,360 L 248,340 L 240,318 L 230,298 L 222,275 L 215,250 L 210,225 L 200,205 L 185,185 L 170,168 L 155,155 L 148,138 L 148,120 Z"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
        />

        {/* Region fills */}
        {Object.entries(REGIONS).map(([key, region]) => {
          const isActive = activeRegion === key;
          return (
            <g key={key} onClick={() => onRegionClick(key)} style={{ cursor: 'pointer' }}>
              {region.paths.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill={isActive ? `${region.color}cc` : `${region.color}28`}
                  stroke={region.color}
                  strokeWidth={isActive ? 2 : 0.8}
                  strokeLinejoin="round"
                  filter={isActive ? 'url(#mapglow)' : undefined}
                  style={{ transition: 'all 0.3s ease' }}
                />
              ))}
            </g>
          );
        })}

        {/* Region label dots */}
        {Object.entries(REGIONS).map(([key, region]) => {
          const isActive = activeRegion === key;
          const centers = {
            'North Africa': [325, 155],
            'West Africa': [240, 285],
            'Central Africa': [405, 335],
            'East Africa': [460, 310],
            'Southern Africa': [370, 508],
          };
          const [cx, cy] = centers[key];
          return (
            <g key={`dot-${key}`} onClick={() => onRegionClick(key)} style={{ cursor: 'pointer' }}>
              <circle cx={cx} cy={cy} r={isActive ? 8 : 5}
                fill={region.color} opacity={isActive ? 1 : 0.55}
                style={{ transition: 'all 0.3s ease' }} />
              {isActive && (
                <>
                  <circle cx={cx} cy={cy} r={14} fill="none" stroke={region.color} strokeWidth="1" opacity="0.4" />
                  <text x={cx} y={cy - 18} textAnchor="middle" fill={region.color}
                    fontSize="10" fontWeight="bold" fontFamily="Georgia, serif" style={{ pointerEvents: 'none' }}>
                    {key}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {Object.entries(REGIONS).map(([key, region]) => (
          <button key={key} onClick={() => onRegionClick(key)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all"
            style={{
              background: activeRegion === key ? `${region.color}25` : 'var(--bg-card)',
              border: `1px solid ${activeRegion === key ? region.color : 'var(--border-default)'}`,
              color: activeRegion === key ? region.color : 'var(--text-sub)',
            }}>
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: region.color }} />
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}