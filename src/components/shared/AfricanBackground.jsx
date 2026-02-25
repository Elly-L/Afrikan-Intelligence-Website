import React from 'react';

// Curated African art / culture / pattern images from Unsplash
const IMAGES = {
  kente: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1600&auto=format&fit=crop&q=80',       // Kente / woven textile pattern
  mud_cloth: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1600&auto=format&fit=crop&q=80',   // Mudcloth / Bogolan fabric
  savanna: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800&auto=format&fit=crop&q=80',        // Savanna twilight silhouette
  baobab: 'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1800&auto=format&fit=crop&q=80',      // Baobab trees sunset
  market: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1800&auto=format&fit=crop&q=80',      // African market, vibrant colour
  adire: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&auto=format&fit=crop&q=80',       // Adire / Batik dyed textile
  sand: 'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?w=1800&auto=format&fit=crop&q=80',        // Sahara sand dunes aerial
  village: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1800&auto=format&fit=crop&q=80',     // Village / landscape wide
};

/**
 * variant: 'kente' | 'mud_cloth' | 'savanna' | 'baobab' | 'market' | 'adire' | 'sand' | 'village'
 * overlayOpacity: 0–1 (default 0.75) — controls how dark/light the overlay is
 * overlayColor: css color string for tint
 */
export default function AfricanBackground({
  variant = 'kente',
  overlayOpacity = 0.78,
  overlayColor = '#0A0500',
  className = '',
}) {
  const src = IMAGES[variant] || IMAGES.kente;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Photo layer */}
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'saturate(0.7) contrast(1.1)' }}
      />
      {/* Dark tint overlay so text stays readable */}
      <div
        className="absolute inset-0"
        style={{ background: overlayColor, opacity: overlayOpacity }}
      />
      {/* Subtle amber vignette around edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(10,5,0,0.6) 100%)',
        }}
      />
    </div>
  );
}