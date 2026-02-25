import React from 'react';

// 2D flat/cartoon African art SVG backgrounds
// Each variant is a different scene or pattern

const scenes = {
  savanna: (
    <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a0a00" />
          <stop offset="100%" stopColor="#3d1a00" />
        </linearGradient>
        <linearGradient id="ground1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5c2d0a" />
          <stop offset="100%" stopColor="#2a1000" />
        </linearGradient>
      </defs>
      <rect width="1440" height="500" fill="url(#sky1)" />
      {/* Ground */}
      <ellipse cx="720" cy="520" rx="900" ry="200" fill="url(#ground1)" />
      {/* Sun / Moon */}
      <circle cx="1100" cy="100" r="60" fill="#D97706" opacity="0.5" />
      <circle cx="1100" cy="100" r="45" fill="#F59E0B" opacity="0.6" />
      {/* Baobab tree left */}
      <rect x="120" y="250" width="28" height="160" rx="6" fill="#3d1f05" />
      <ellipse cx="134" cy="255" rx="60" ry="75" fill="#4a2608" />
      <ellipse cx="100" cy="270" rx="35" ry="50" fill="#3d1f05" />
      <ellipse cx="168" cy="268" rx="38" ry="52" fill="#3d1f05" />
      {/* Baobab tree right */}
      <rect x="1260" y="230" width="32" height="180" rx="6" fill="#3d1f05" />
      <ellipse cx="1276" cy="232" rx="70" ry="80" fill="#4a2608" />
      <ellipse cx="1238" cy="250" rx="40" ry="55" fill="#3d1f05" />
      <ellipse cx="1312" cy="248" rx="42" ry="56" fill="#3d1f05" />
      {/* Acacia tree middle */}
      <rect x="650" y="300" width="18" height="120" rx="4" fill="#3d1f05" />
      <ellipse cx="659" cy="295" rx="80" ry="30" fill="#4a2608" opacity="0.8" />
      {/* Silhouette elephant */}
      <g transform="translate(400, 300)" fill="#2a1000" opacity="0.7">
        <ellipse cx="80" cy="60" rx="70" ry="50" />
        <ellipse cx="140" cy="50" rx="30" ry="25" />
        <rect x="128" y="70" width="10" height="50" rx="5" />
        <path d="M140 55 Q180 70 170 90 Q155 80 140 70Z" />
        <rect x="30" y="95" width="14" height="45" rx="6" />
        <rect x="55" y="100" width="14" height="45" rx="6" />
        <rect x="95" y="95" width="14" height="45" rx="6" />
        <rect x="120" y="100" width="14" height="45" rx="6" />
      </g>
      {/* Silhouette giraffe */}
      <g transform="translate(900, 180)" fill="#2a1000" opacity="0.6">
        <rect x="30" y="0" width="12" height="120" rx="5" />
        <ellipse cx="36" cy="8" rx="14" ry="18" />
        <ellipse cx="36" cy="110" rx="30" ry="22" />
        <rect x="15" y="118" width="10" height="60" rx="4" />
        <rect x="30" y="120" width="10" height="60" rx="4" />
        <rect x="48" y="118" width="10" height="60" rx="4" />
        <rect x="63" y="120" width="10" height="60" rx="4" />
      </g>
      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <circle key={i} cx={50 + i * 68} cy={20 + (i % 5) * 30} r="1.5" fill="#F59E0B" opacity={0.3 + (i % 3) * 0.2} />
      ))}
    </svg>
  ),

  village: (
    <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d0500" />
          <stop offset="100%" stopColor="#2d1200" />
        </linearGradient>
      </defs>
      <rect width="1440" height="500" fill="url(#sky2)" />
      {/* Ground */}
      <rect x="0" y="380" width="1440" height="120" fill="#3d1a00" />
      <rect x="0" y="370" width="1440" height="20" rx="5" fill="#4a2008" />
      {/* Hut 1 */}
      <rect x="80" y="260" width="120" height="120" rx="4" fill="#6b3310" />
      <polygon points="80,260 200,260 140,170" fill="#c2440a" />
      <rect x="120" y="310" width="40" height="70" fill="#3d1a00" />
      <rect x="90" y="280" width="30" height="30" rx="3" fill="#D97706" opacity="0.4" />
      <rect x="155" y="280" width="30" height="30" rx="3" fill="#D97706" opacity="0.4" />
      {/* Hut 2 */}
      <rect x="280" y="280" width="100" height="100" rx="4" fill="#7a3a12" />
      <polygon points="280,280 380,280 330,200" fill="#b03d09" />
      <rect x="310" y="320" width="36" height="60" fill="#3d1a00" />
      {/* Round hut */}
      <ellipse cx="550" cy="360" rx="70" ry="60" fill="#6b3310" />
      <ellipse cx="550" cy="300" rx="90" ry="40" fill="#c2440a" />
      <ellipse cx="550" cy="295" rx="85" ry="35" fill="#d4560c" />
      <rect x="525" y="330" width="50" height="30" fill="#3d1a00" rx="4" />
      {/* Tall hut */}
      <rect x="700" y="240" width="90" height="140" rx="4" fill="#5c2a0a" />
      <polygon points="700,240 790,240 745,150" fill="#b03d09" />
      <rect x="725" y="290" width="40" height="90" fill="#3d1a00" />
      <rect x="710" y="260" width="25" height="25" rx="2" fill="#D97706" opacity="0.35" />
      <rect x="755" y="260" width="25" height="25" rx="2" fill="#D97706" opacity="0.35" />
      {/* More huts right */}
      <ellipse cx="950" cy="370" rx="80" ry="60" fill="#6b3310" />
      <ellipse cx="950" cy="314" rx="100" ry="42" fill="#c2440a" />
      <rect x="920" y="340" width="55" height="30" fill="#3d1a00" rx="3" />
      <rect x="1100" y="270" width="110" height="110" rx="4" fill="#7a3a12" />
      <polygon points="1100,270 1210,270 1155,185" fill="#b03d09" />
      <rect x="1130" y="315" width="42" height="65" fill="#3d1a00" />
      {/* Drum / pot */}
      <ellipse cx="450" cy="375" rx="20" ry="25" fill="#8b4513" />
      <ellipse cx="450" cy="360" rx="25" ry="12" fill="#a0522d" />
      {/* Fire */}
      <ellipse cx="650" cy="378" rx="15" ry="5" fill="#3d1a00" />
      <path d="M645 378 Q650 350 655 360 Q660 340 650 345 Q640 335 648 360Z" fill="#F59E0B" opacity="0.8" />
      <path d="M648 375 Q652 358 656 365 Q658 352 652 356 Q646 348 650 362Z" fill="#ef4444" opacity="0.6" />
      {/* Stars */}
      {[...Array(25)].map((_, i) => (
        <circle key={i} cx={30 + i * 57} cy={15 + (i % 6) * 25} r="1.5" fill="#FCD34D" opacity={0.2 + (i % 4) * 0.15} />
      ))}
      {/* Moon */}
      <path d="M1350 60 A40 40 0 0 1 1380 30 A50 50 0 0 0 1350 60Z" fill="#F59E0B" opacity="0.5" />
      <circle cx="1365" cy="45" r="30" fill="none" stroke="#F59E0B" strokeWidth="2" opacity="0.3" />
    </svg>
  ),

  pattern: (
    <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="kente" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="#0d0500" />
          <rect x="0" y="0" width="80" height="8" fill="#D97706" opacity="0.25" />
          <rect x="0" y="20" width="80" height="5" fill="#dc7609" opacity="0.15" />
          <rect x="0" y="35" width="80" height="8" fill="#D97706" opacity="0.2" />
          <rect x="0" y="55" width="80" height="5" fill="#dc7609" opacity="0.12" />
          <rect x="0" y="70" width="80" height="8" fill="#D97706" opacity="0.18" />
          <rect x="0" y="0" width="8" height="80" fill="#D97706" opacity="0.15" />
          <rect x="24" y="0" width="5" height="80" fill="#dc7609" opacity="0.1" />
          <rect x="40" y="0" width="8" height="80" fill="#D97706" opacity="0.12" />
          <rect x="60" y="0" width="5" height="80" fill="#dc7609" opacity="0.08" />
          <rect x="72" y="0" width="8" height="80" fill="#D97706" opacity="0.12" />
          <rect x="36" y="36" width="8" height="8" fill="#F59E0B" opacity="0.3" transform="rotate(45 40 40)" />
        </pattern>
        <linearGradient id="patternOverlay" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d0500" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#0d0500" stopOpacity="0" />
          <stop offset="100%" stopColor="#0d0500" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect width="1440" height="500" fill="url(#kente)" />
      <rect width="1440" height="500" fill="url(#patternOverlay)" />
      {/* Adinkra symbols scattered */}
      {/* Gye Nyame-style symbol */}
      <g transform="translate(200,120)" opacity="0.12" fill="#D97706">
        <circle cx="0" cy="0" r="30" fill="none" stroke="#D97706" strokeWidth="3" />
        <path d="M-15 0 Q0 -20 15 0 Q0 20 -15 0Z" />
        <line x1="0" y1="-30" x2="0" y2="30" stroke="#D97706" strokeWidth="2" />
      </g>
      <g transform="translate(800,250)" opacity="0.1" fill="#D97706">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#D97706" strokeWidth="3" />
        <path d="M-20 0 Q0 -25 20 0 Q0 25 -20 0Z" />
        <line x1="0" y1="-40" x2="0" y2="40" stroke="#D97706" strokeWidth="2" />
      </g>
      <g transform="translate(1200,100)" opacity="0.1" fill="#D97706">
        <circle cx="0" cy="0" r="25" fill="none" stroke="#D97706" strokeWidth="2" />
        <path d="M-12 0 Q0 -16 12 0 Q0 16 -12 0Z" />
        <line x1="0" y1="-25" x2="0" y2="25" stroke="#D97706" strokeWidth="1.5" />
      </g>
    </svg>
  ),

  market: (
    <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0400" />
          <stop offset="100%" stopColor="#2d1200" />
        </linearGradient>
      </defs>
      <rect width="1440" height="500" fill="url(#sky3)" />
      <rect x="0" y="400" width="1440" height="100" fill="#3d1a00" />
      {/* Market stalls */}
      {/* Stall 1 */}
      <rect x="50" y="260" width="160" height="140" rx="3" fill="#5c2a0a" />
      <path d="M30 260 L230 260 L210 230 L50 230Z" fill="#c2440a" />
      <path d="M30 260 L230 260 L210 240 L50 240Z" fill="#D97706" opacity="0.6" />
      {/* Goods */}
      <circle cx="90" cy="360" r="18" fill="#e67e22" />
      <circle cx="120" cy="355" r="15" fill="#f39c12" />
      <circle cx="150" cy="360" r="18" fill="#e74c3c" opacity="0.8" />
      <circle cx="180" cy="355" r="15" fill="#27ae60" opacity="0.7" />
      {/* Stall 2 */}
      <rect x="260" y="270" width="150" height="130" rx="3" fill="#6b3310" />
      <path d="M240 270 L430 270 L415 240 L255 240Z" fill="#b03d09" />
      <path d="M240 270 L430 270 L415 250 L255 250Z" fill="#D97706" opacity="0.5" />
      {/* Fabric rolls */}
      <rect x="275" y="320" width="25" height="70" rx="12" fill="#D97706" />
      <rect x="310" y="315" width="25" height="75" rx="12" fill="#c0392b" opacity="0.8" />
      <rect x="345" y="320" width="25" height="70" rx="12" fill="#8e44ad" opacity="0.7" />
      <rect x="380" y="315" width="25" height="75" rx="12" fill="#16a085" opacity="0.8" />
      {/* Stall 3 */}
      <rect x="470" y="255" width="170" height="145" rx="3" fill="#5c2a0a" />
      <path d="M450 255 L660 255 L645 220 L465 220Z" fill="#c2440a" />
      {/* Pots */}
      <ellipse cx="510" cy="380" rx="28" ry="20" fill="#8b4513" />
      <ellipse cx="510" cy="365" rx="32" ry="22" fill="#a0522d" />
      <ellipse cx="555" cy="382" rx="22" ry="16" fill="#8b4513" />
      <ellipse cx="555" cy="368" rx="25" ry="18" fill="#a0522d" />
      <ellipse cx="595" cy="380" rx="26" ry="19" fill="#7a3a12" />
      {/* Stall 4 */}
      <rect x="690" y="265" width="155" height="135" rx="3" fill="#7a3a12" />
      <path d="M670 265 L865 265 L850 232 L685 232Z" fill="#b03d09" />
      {/* Spices */}
      <ellipse cx="730" cy="385" rx="25" ry="12" fill="#D97706" />
      <ellipse cx="775" cy="387" rx="22" ry="10" fill="#c0392b" opacity="0.9" />
      <ellipse cx="818" cy="385" rx="24" ry="11" fill="#f39c12" />
      {/* Stall 5 */}
      <rect x="900" y="270" width="145" height="130" rx="3" fill="#5c2a0a" />
      <path d="M880 270 L1065 270 L1050 238 L895 238Z" fill="#c2440a" />
      {/* Stall 6 */}
      <rect x="1100" y="255" width="160" height="145" rx="3" fill="#6b3310" />
      <path d="M1080 255 L1280 255 L1265 218 L1095 218Z" fill="#b03d09" />
      <path d="M1080 255 L1280 255 L1265 238 L1095 238Z" fill="#D97706" opacity="0.45" />
      {/* People silhouettes */}
      <g fill="#1a0800" opacity="0.6">
        <ellipse cx="220" cy="370" rx="12" ry="18" />
        <rect x="213" y="388" width="14" height="25" rx="5" />
        <rect x="210" y="413" width="6" height="20" rx="3" />
        <rect x="221" y="413" width="6" height="20" rx="3" />
      </g>
      <g fill="#1a0800" opacity="0.6">
        <ellipse cx="650" cy="365" rx="11" ry="17" />
        <rect x="644" y="382" width="13" height="23" rx="5" />
        <rect x="642" y="405" width="6" height="18" rx="3" />
        <rect x="652" y="405" width="6" height="18" rx="3" />
      </g>
      {/* Sun */}
      <circle cx="1350" cy="70" r="50" fill="#D97706" opacity="0.25" />
      <circle cx="1350" cy="70" r="35" fill="#F59E0B" opacity="0.3" />
    </svg>
  ),

  diaspora: (
    <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="globe" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a0a00" />
          <stop offset="100%" stopColor="#0a0400" />
        </radialGradient>
      </defs>
      <rect width="1440" height="500" fill="url(#globe)" />
      {/* Globe in center */}
      <circle cx="720" cy="250" r="200" fill="none" stroke="#D97706" strokeWidth="1.5" opacity="0.15" />
      <circle cx="720" cy="250" r="150" fill="none" stroke="#D97706" strokeWidth="1" opacity="0.1" />
      <circle cx="720" cy="250" r="100" fill="none" stroke="#D97706" strokeWidth="0.8" opacity="0.08" />
      {/* Africa silhouette */}
      <path d="M700 130 L740 128 L760 150 L755 180 L768 210 L770 250 L755 285 L730 310 L710 330 L695 320 L680 295 L675 260 L672 230 L678 200 L670 175 L675 155 L688 138Z" 
        fill="#D97706" opacity="0.3" />
      {/* Connection lines to cities */}
      <line x1="720" y1="200" x2="200" y2="100" stroke="#D97706" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" />
      <line x1="720" y1="200" x2="1200" y2="80" stroke="#D97706" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" />
      <line x1="720" y1="250" x2="100" y2="350" stroke="#D97706" strokeWidth="1" opacity="0.15" strokeDasharray="4,6" />
      <line x1="720" y1="250" x2="1350" y2="350" stroke="#D97706" strokeWidth="1" opacity="0.15" strokeDasharray="4,6" />
      <line x1="720" y1="230" x2="400" y2="420" stroke="#D97706" strokeWidth="1" opacity="0.12" strokeDasharray="6,4" />
      {/* City dots */}
      <circle cx="200" cy="100" r="8" fill="#D97706" opacity="0.5" />
      <circle cx="200" cy="100" r="20" fill="none" stroke="#D97706" strokeWidth="1" opacity="0.2" />
      <circle cx="1200" cy="80" r="8" fill="#D97706" opacity="0.5" />
      <circle cx="1200" cy="80" r="20" fill="none" stroke="#D97706" strokeWidth="1" opacity="0.2" />
      <circle cx="100" cy="350" r="6" fill="#D97706" opacity="0.4" />
      <circle cx="1350" cy="350" r="6" fill="#D97706" opacity="0.4" />
      <circle cx="400" cy="420" r="6" fill="#D97706" opacity="0.4" />
      <circle cx="1050" cy="430" r="6" fill="#D97706" opacity="0.4" />
      <line x1="720" y1="280" x2="1050" y2="430" stroke="#D97706" strokeWidth="1" opacity="0.12" strokeDasharray="4,5" />
      {/* Stars scattered */}
      {[...Array(40)].map((_, i) => (
        <circle key={i} cx={20 + i * 35} cy={10 + (i % 8) * 45} r={i % 3 === 0 ? 2 : 1} fill="#F59E0B" opacity={0.1 + (i % 5) * 0.06} />
      ))}
    </svg>
  ),

  education: (
    <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0500" />
          <stop offset="100%" stopColor="#1f0d00" />
        </linearGradient>
      </defs>
      <rect width="1440" height="500" fill="url(#sky4)" />
      {/* Ground */}
      <rect x="0" y="420" width="1440" height="80" fill="#3d1a00" />
      {/* School building */}
      <rect x="500" y="200" width="440" height="220" rx="4" fill="#5c2a0a" />
      <polygon points="480 200 960 200 720 110" fill="#c2440a" />
      {/* Windows */}
      <rect x="540" y="240" width="60" height="60" rx="4" fill="#D97706" opacity="0.3" />
      <rect x="620" y="240" width="60" height="60" rx="4" fill="#D97706" opacity="0.3" />
      <rect x="760" y="240" width="60" height="60" rx="4" fill="#D97706" opacity="0.3" />
      <rect x="840" y="240" width="60" height="60" rx="4" fill="#D97706" opacity="0.3" />
      <rect x="540" y="320" width="60" height="50" rx="4" fill="#D97706" opacity="0.25" />
      <rect x="840" y="320" width="60" height="50" rx="4" fill="#D97706" opacity="0.25" />
      {/* Door */}
      <rect x="690" y="330" width="60" height="90" rx="4" fill="#3d1a00" />
      {/* Flag */}
      <rect x="718" y="80" width="3" height="50" fill="#6b3310" />
      <rect x="721" y="80" width="35" height="22" fill="#D97706" opacity="0.7" />
      {/* Trees flanking */}
      <rect x="380" y="310" width="16" height="110" rx="4" fill="#3d1f05" />
      <ellipse cx="388" cy="310" rx="40" ry="55" fill="#4a2608" />
      <rect x="1040" y="310" width="16" height="110" rx="4" fill="#3d1f05" />
      <ellipse cx="1048" cy="310" rx="40" ry="55" fill="#4a2608" />
      {/* Students silhouettes */}
      {[200, 280, 1160, 1240].map((x, i) => (
        <g key={i} fill="#1a0800" opacity="0.6" transform={`translate(${x}, 380)`}>
          <ellipse cx="12" cy="-20" rx="10" ry="14" />
          <rect x="5" y="-6" width="14" height="26" rx="5" />
          <rect x="4" y="20" width="6" height="22" rx="3" />
          <rect x="15" y="20" width="6" height="22" rx="3" />
        </g>
      ))}
      {/* Book open */}
      <g transform="translate(100, 300)" opacity="0.15">
        <path d="M0 0 Q60 -10 120 0 L120 80 Q60 70 0 80Z" fill="#D97706" />
        <line x1="60" y1="-8" x2="60" y2="80" stroke="#D97706" strokeWidth="2" />
      </g>
      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <circle key={i} cx={40 + i * 70} cy={20 + (i % 4) * 35} r="1.5" fill="#FCD34D" opacity={0.15 + (i % 3) * 0.1} />
      ))}
      {/* Sun */}
      <circle cx="200" cy="80" r="55" fill="#D97706" opacity="0.2" />
      <circle cx="200" cy="80" r="38" fill="#F59E0B" opacity="0.25" />
    </svg>
  ),

  healthcare: (
    <svg viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky5" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#030e05" />
          <stop offset="100%" stopColor="#0d2010" />
        </linearGradient>
      </defs>
      <rect width="1440" height="500" fill="url(#sky5)" />
      <rect x="0" y="400" width="1440" height="100" fill="#0d2010" />
      {/* Clinic building */}
      <rect x="540" y="220" width="360" height="180" rx="4" fill="#0d3d1a" />
      <rect x="520" y="200" width="400" height="30" rx="3" fill="#0f4d20" />
      {/* Red cross */}
      <rect x="700" y="230" width="40" height="100" rx="4" fill="#c0392b" opacity="0.8" />
      <rect x="675" y="255" width="90" height="40" rx="4" fill="#c0392b" opacity="0.8" />
      {/* Windows */}
      <rect x="560" y="250" width="50" height="50" rx="3" fill="#D97706" opacity="0.2" />
      <rect x="830" y="250" width="50" height="50" rx="3" fill="#D97706" opacity="0.2" />
      {/* Door */}
      <rect x="690" y="330" width="60" height="70" rx="3" fill="#061a08" />
      {/* Trees */}
      <rect x="380" y="320" width="14" height="90" rx="3" fill="#0a2a0d" />
      <ellipse cx="387" cy="318" rx="38" ry="50" fill="#0d3d1a" />
      <rect x="1040" y="320" width="14" height="90" rx="3" fill="#0a2a0d" />
      <ellipse cx="1047" cy="318" rx="38" ry="50" fill="#0d3d1a" />
      {/* People */}
      {[230, 1140].map((x, i) => (
        <g key={i} fill="#061208" opacity="0.7" transform={`translate(${x}, 390)`}>
          <ellipse cx="12" cy="-20" rx="11" ry="15" />
          <rect x="4" y="-5" width="16" height="28" rx="5" />
          <rect x="3" y="23" width="7" height="20" rx="3" />
          <rect x="14" y="23" width="7" height="20" rx="3" />
        </g>
      ))}
      {/* Stethoscope decorative */}
      <g transform="translate(100, 150)" opacity="0.1" stroke="#27ae60" strokeWidth="3" fill="none">
        <path d="M30 0 Q50 30 30 60 Q10 90 30 120" />
        <circle cx="30" cy="125" r="15" />
      </g>
      {/* Stars */}
      {[...Array(18)].map((_, i) => (
        <circle key={i} cx={30 + i * 80} cy={18 + (i % 5) * 32} r="1.5" fill="#4ade80" opacity={0.1 + (i % 4) * 0.07} />
      ))}
      {/* Moon */}
      <circle cx="1320" cy="70" r="40" fill="#4ade80" opacity="0.08" />
      <circle cx="1330" cy="65" r="30" fill="#0d2010" opacity="0.9" />
    </svg>
  ),
};

export default function AfricanCartoonBg({ variant = 'savanna', opacity = 1, className = '' }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {scenes[variant] || scenes.savanna}
    </div>
  );
}