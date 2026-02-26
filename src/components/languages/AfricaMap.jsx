import React, { useEffect, useRef, useState } from 'react';
import { geoMercator, geoPath } from 'd3-geo';

const REGION_COUNTRIES = {
  'North Africa':    ['Morocco','Algeria','Tunisia','Libya','Egypt','Western Sahara'],
  'West Africa':     ['Mauritania','Mali','Niger','Chad','Senegal','Gambia','Guinea-Bissau','Guinea','Sierra Leone','Liberia','Ivory Coast','Ghana','Togo','Benin','Burkina Faso','Nigeria','Cape Verde'],
  'Central Africa':  ['Cameroon','Central African Republic','Equatorial Guinea','Gabon','Republic of the Congo','Democratic Republic of the Congo','São Tomé and Príncipe'],
  'East Africa':     ['Sudan','South Sudan','Ethiopia','Eritrea','Djibouti','Somalia','Kenya','Uganda','Rwanda','Burundi','Tanzania','Comoros','Seychelles'],
  'Southern Africa': ['Angola','Zambia','Zimbabwe','Malawi','Mozambique','Namibia','Botswana','South Africa','Lesotho','Swaziland','eSwatini','Madagascar'],
};

const REGION_COLORS = {
  'North Africa':    '#FFD700',
  'West Africa':     '#1f77b4',
  'Central Africa':  '#e41a1c',
  'East Africa':     '#4daf4a',
  'Southern Africa': '#984ea3',
};

function getRegion(name) {
  for (const [region, countries] of Object.entries(REGION_COUNTRIES)) {
    if (countries.some(c => name.toLowerCase().includes(c.toLowerCase()) || c.toLowerCase().includes(name.toLowerCase()))) {
      return region;
    }
  }
  return null;
}

const GEOJSON_URL = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';

export default function AfricaMap({ activeRegion, onRegionClick }) {
  const svgRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dims, setDims] = useState({ width: '100%', height: 'auto' });

  useEffect(() => {
    fetch(GEOJSON_URL)
      .then(r => r.json())
      .then(data => {
        // Filter Africa only
        const africaFeatures = data.features.filter(f => {
          const name = f.properties.ADMIN || f.properties.name || '';
          // Explicitly exclude non-African countries including Alaska
          if (name.toLowerCase().includes('alaska')) return false;
          return getRegion(name) !== null;
        });
        setCountries(africaFeatures);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!countries.length || !svgRef.current) return;

    const w = svgRef.current.clientWidth || 500;
    const h = Math.round(w * 1.15);
    setDims({ width: w, height: h });

    const collection = { type: 'FeatureCollection', features: countries };

    const projection = geoMercator()
      .fitSize([w, h], collection);

    const pathGen = geoPath().projection(projection);

    const computed = countries.map(f => ({
      d: pathGen(f),
      name: f.properties.ADMIN || f.properties.name || '',
      region: getRegion(f.properties.ADMIN || f.properties.name || ''),
    }));

    setPaths(computed);
  }, [countries, svgRef.current?.clientWidth]);

  // Recalculate on resize
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (!countries.length || !svgRef.current) return;
      const w = svgRef.current.clientWidth;
      const h = Math.round(w * 1.15);
      setDims({ width: w, height: h });

      const collection = { type: 'FeatureCollection', features: countries };
      const projection = geoMercator().fitSize([w, h], collection);
      const pathGen = geoPath().projection(projection);

      setPaths(countries.map(f => ({
        d: pathGen(f),
        name: f.properties.ADMIN || f.properties.name || '',
        region: getRegion(f.properties.ADMIN || f.properties.name || ''),
      })));
    });

    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, [countries]);

  return (
    <div className="relative w-full select-none" ref={svgRef}>
      {loading && (
        <div className="flex items-center justify-center h-64 text-stone-400 text-sm">
          Loading map…
        </div>
      )}

      {!loading && (
        <svg
          viewBox={`0 0 ${dims.width} ${dims.height}`}
          width="100%"
          style={{ display: 'block' }}
        >
          <defs>
            <filter id="mapShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
            </filter>
          </defs>

          {paths.map((p, i) => {
            if (!p.d || !p.region) return null;
            const color = REGION_COLORS[p.region];
            const isActive = activeRegion === p.region;
            return (
              <path
                key={i}
                d={p.d}
                fill={color}
                fillOpacity={isActive ? 0.95 : 0.75}
                stroke={isActive ? '#fff' : '#111'}
                strokeWidth={isActive ? 1.5 : 0.5}
                strokeLinejoin="round"
                style={{ cursor: 'pointer', transition: 'all 0.15s ease' }}
                onClick={() => onRegionClick(p.region)}
              >
                <title>{p.name} ({p.region})</title>
              </path>
            );
          })}
        </svg>
      )}

      {/* Floating Legend */}
      <div
        className="absolute bottom-3 left-3 rounded-xl p-3 flex flex-col gap-1.5"
        style={{
          background: 'rgba(10,5,0,0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <p className="text-white text-xs font-bold mb-1" style={{ letterSpacing: '0.08em' }}>
          REGIONS
        </p>
        {Object.entries(REGION_COLORS).map(([name, color]) => (
          <button
            key={name}
            onClick={() => onRegionClick(name)}
            className="flex items-center gap-2 text-left hover:opacity-80 transition-opacity"
          >
            <span
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{
                background: color,
                border: activeRegion === name ? '1.5px solid #fff' : '1px solid rgba(255,255,255,0.3)',
              }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: activeRegion === name ? '#fff' : 'rgba(255,255,255,0.7)' }}
            >
              {name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}