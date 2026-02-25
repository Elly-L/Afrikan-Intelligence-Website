import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, ArrowRight, Play, RefreshCw, Type, Radio, Zap, CheckCircle } from 'lucide-react';

const LANGUAGES = [
  { code: 'sw', name: 'Swahili', flag: '🇰🇪', region: 'East Africa' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬', region: 'West Africa' },
  { code: 'luo', name: 'Luo', flag: '🇰🇪', region: 'East Africa' },
  { code: 'yo', name: 'Yoruba', flag: '🇳🇬', region: 'West Africa' },
  { code: 'zu', name: 'Zulu', flag: '🇿🇦', region: 'Southern Africa' },
  { code: 'am', name: 'Amharic', flag: '🇪🇹', region: 'East Africa' },
];

const DEMO_PHRASES = {
  sw: [
    { text: "Habari za asubuhi. Bei ya mahindi ni ngapi leo?", meaning: "Good morning. What is the price of maize today?" },
    { text: "Ninahitaji dawa kwa mtoto wangu mgonjwa.", meaning: "I need medicine for my sick child." },
    { text: "Naweza kulipa kwa simu yangu.", meaning: "I can pay with my phone." },
  ],
  ig: [
    { text: "Ọ dị mma. Ego ole ka akwa ahịa ya bara?", meaning: "Good. How much does the cloth cost?" },
    { text: "Achọrọ m ọgwụ maka ụmụaka m.", meaning: "I need medicine for my children." },
    { text: "Anyị nwere ike ịkwa ụgwọ site na ekwentị.", meaning: "We can make payment via mobile." },
  ],
  luo: [
    { text: "Oyawore. Bedo ber. Ji oth ni nade?", meaning: "Good morning. How are you?" },
    { text: "Adwaro yath ne nyithinda.", meaning: "I want medicine for my children." },
    { text: "Wabiro chulo mwandu gi simu.", meaning: "We will pay with the phone." },
  ],
  yo: [
    { text: "E kaaro. Elo ni owo oka loni?", meaning: "Good morning. What is the price of corn today?" },
    { text: "Mo nilo oogun fun omo mi ti o san.", meaning: "I need medicine for my sick child." },
    { text: "Mo le san owo pẹlu foonu mi.", meaning: "I can pay with my phone." },
  ],
  zu: [
    { text: "Sawubona. Imali yombila ingakanani namhlanje?", meaning: "Good morning. How much is the maize today?" },
    { text: "Ngidinga umuthi wengane yami egula.", meaning: "I need medicine for my sick child." },
    { text: "Ngingakhokha ngeselula.", meaning: "I can pay with my phone." },
  ],
  am: [
    { text: "ደህና ነህ። የዛሬ የበቆሎ ዋጋ ስንት ነው?", meaning: "Good morning. What is today's corn price?" },
    { text: "ለታማሚ ልጄ መድሃኒት ያስፈልገኛል።", meaning: "I need medicine for my sick child." },
    { text: "በስልኬ መክፈል እችላለሁ።", meaning: "I can pay with my phone." },
  ],
};

const TRANSLATIONS = {
  'sw-ig': ["Ọ dị mma. Ego ole ka ọka bara loni?", "Achọrọ m ọgwụ maka nwa m.", "Anyị nwere ike ịkwa ụgwọ."],
  'sw-yo': ["E kaaro. Elo ni owo oka loni?", "Mo nilo oogun fun omo mi.", "Mo le san owo nipa foonu."],
  'sw-luo': ["Oyawore. Bedo ber nadi?", "Adwaro yath ne nyithinda.", "Wabiro chulo mwandu."],
  'sw-zu': ["Sawubona. Imali yombila ingakanani?", "Ngidinga umuthi wengane yami.", "Ngingakhokha ngeselula."],
  'sw-am': ["ደህና ነህ። የዛሬ ዋጋ ስንት ነው?", "ለታማሚ ልጄ መድሃኒት ያስፈልገኛል።", "በስልኬ መክፈል እችላለሁ።"],
  'ig-sw': ["Habari za asubuhi. Bei ya ngano ni ngapi?", "Ninahitaji dawa kwa mtoto wangu.", "Naweza kulipa kwa simu."],
  'ig-yo': ["E kaaro. Elo ni owo aṣọ naa?", "Mo nilo oogun fun awon omo mi.", "A le san owo nipa foonu."],
  'yo-sw': ["Habari za asubuhi. Bei ya mahindi leo?", "Ninahitaji dawa kwa mtoto wangu.", "Naweza kulipa na simu."],
  'zu-sw': ["Habari! Bei ya mahindi ni nini leo?", "Ninahitaji dawa kwa mtoto wangu mgonjwa.", "Ninaweza kulipa kwa simu."],
  'am-sw': ["Habari. Bei ya mahindi ni ngapi leo?", "Ninahitaji dawa kwa mtoto wangu.", "Ninaweza kulipa kwa simu."],
  'luo-sw': ["Habari! Ninahitaji msaada na bei.", "Ninahitaji dawa kwa watoto wangu.", "Naweza kulipa kwa simu yangu."],
};

function getTranslation(fromCode, toCode, phraseIndex) {
  const key = `${fromCode}-${toCode}`;
  const reverseKey = `${toCode}-${fromCode}`;
  if (TRANSLATIONS[key]) return TRANSLATIONS[key][phraseIndex % TRANSLATIONS[key].length];
  if (TRANSLATIONS[reverseKey]) return TRANSLATIONS[reverseKey][phraseIndex % TRANSLATIONS[reverseKey].length];
  const toLang = LANGUAGES.find(l => l.code === toCode);
  return `[${toLang?.name || toCode} voice output — speaker identity preserved]`;
}

function WaveformAnimation({ active, color = '#D97706', bars = 28 }) {
  return (
    <div className="flex items-center justify-center gap-[2px] h-10">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{ backgroundColor: color, width: 3, opacity: active ? 1 : 0.25 }}
          animate={active ? { height: [4, (i % 7 + 1) * 5 + 4, 4] } : { height: 4 }}
          transition={{
            duration: 0.45 + (i % 5) * 0.08,
            repeat: active ? Infinity : 0,
            delay: i * 0.04,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

const PIPELINE_STEPS = ['Audio Tokenization', 'Semantic Mapping', 'Cross-Lingual Transfer', 'Speech Resynthesis'];

const NUANCE_FACTS = [
  { label: 'Tone Preservation', desc: 'Tonal distinctions in Yoruba and Igbo are mapped to acoustic tokens, never flattened to text.' },
  { label: 'Code-Switching', desc: 'Swahili speakers often blend Arabic loanwords — the engine handles intra-sentence script shifts.' },
  { label: 'Voice Biometrics', desc: 'Speaker gender, age, and timbre are retained through the resynthesis stage.' },
  { label: 'Prosody Mapping', desc: 'Sentence rhythm and emotional cadence transfer across language families.' },
];

const INPUT_MODES = [
  { id: 'demo', label: 'Phrase Demo', icon: Play },
  { id: 'text', label: 'Type to Translate', icon: Type },
  { id: 'nuances', label: 'Linguistic Nuances', icon: Radio },
];

export default function AITranslationDemo() {
  const [fromLang, setFromLang] = useState('sw');
  const [toLang, setToLang] = useState('yo');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [stage, setStage] = useState('idle'); // idle | listening | processing | translating | done
  const [latency, setLatency] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [inputMode, setInputMode] = useState('demo');
  const [customText, setCustomText] = useState('');
  const [customTranslation, setCustomTranslation] = useState('');
  const [isTypingProcessing, setIsTypingProcessing] = useState(false);
  const timerRefs = useRef([]);

  const fromPhrases = DEMO_PHRASES[fromLang] || DEMO_PHRASES['sw'];
  const currentPhrase = fromPhrases[phraseIndex % fromPhrases.length];

  const clearTimers = () => { timerRefs.current.forEach(clearTimeout); timerRefs.current = []; };

  const runDemo = () => {
    clearTimers();
    setStage('listening');
    setShowTranslation(false);
    setLatency(null);
    setProcessingStep(0);

    const t = (ms, fn) => { const id = setTimeout(fn, ms); timerRefs.current.push(id); };
    t(1000, () => { setStage('processing'); setProcessingStep(1); });
    t(1600, () => setProcessingStep(2));
    t(2200, () => setProcessingStep(3));
    t(2700, () => { setStage('translating'); setProcessingStep(4); });
    t(3100, () => {
      setLatency(Math.floor(Math.random() * 40) + 155);
      setShowTranslation(true);
      setStage('done');
    });
  };

  const reset = () => {
    clearTimers();
    setStage('idle');
    setShowTranslation(false);
    setLatency(null);
    setProcessingStep(0);
    setPhraseIndex(p => p + 1);
  };

  const handleTextTranslate = () => {
    if (!customText.trim()) return;
    setIsTypingProcessing(true);
    setCustomTranslation('');
    setTimeout(() => {
      const toLangObj = LANGUAGES.find(l => l.code === toLang);
      const fakeOutputs = {
        sw: `Tafsiri (${toLangObj?.name}): "${customText.slice(0, 40)}${customText.length > 40 ? '...' : ''}" — sauti ya asili imehifadhiwa`,
        yo: `Ìtumọ̀ (${toLangObj?.name}): "${customText.slice(0, 40)}${customText.length > 40 ? '...' : ''}" — ohùn ẹni tí a tọ́jú`,
        ig: `Ntụgharị (${toLangObj?.name}): "${customText.slice(0, 40)}${customText.length > 40 ? '...' : ''}" — olu onwe ya echekwara`,
        am: `ትርጉም (${toLangObj?.name}): "${customText.slice(0, 40)}${customText.length > 40 ? '...' : ''}" — ድምፁ ተጠብቋል`,
        luo: `Tiend (${toLangObj?.name}): "${customText.slice(0, 40)}${customText.length > 40 ? '...' : ''}" — dwond ng'ato omako`,
        zu: `Ukuhumusha (${toLangObj?.name}): "${customText.slice(0, 40)}${customText.length > 40 ? '...' : ''}" — izwi lomuntu ligcinwe`,
      };
      setCustomTranslation(fakeOutputs[toLang] || `[${toLangObj?.name} output — voice identity preserved]`);
      setIsTypingProcessing(false);
    }, 1800);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-amber-900/30 bg-stone-900/90 shadow-2xl">
      {/* Terminal header */}
      <div className="px-6 py-4 border-b border-stone-700/50 flex items-center justify-between bg-stone-950/80">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-stone-400 text-sm font-mono">Mimetic Engine v2.1 — Interactive Demo</span>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> LIVE
        </span>
      </div>

      {/* Mode Tabs */}
      <div className="flex border-b border-stone-800">
        {INPUT_MODES.map(mode => (
          <button key={mode.id} onClick={() => setInputMode(mode.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-all ${inputMode === mode.id ? 'text-amber-400 border-b-2 border-amber-500 bg-amber-500/5' : 'text-stone-500 hover:text-stone-300'}`}>
            <mode.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{mode.label}</span>
          </button>
        ))}
      </div>

      <div className="p-6 md:p-8">
        {/* Language Selectors */}
        <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
          <div className="flex-1 w-full">
            <label className="text-xs text-stone-500 uppercase tracking-wider mb-2 block">Source Language</label>
            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES.map(lang => (
                <button key={lang.code}
                  onClick={() => { setFromLang(lang.code); if (lang.code === toLang) setToLang(LANGUAGES.find(l => l.code !== lang.code)?.code); reset(); }}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${fromLang === lang.code ? 'bg-amber-600 border-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-stone-800/50 border-stone-700/50 text-stone-400 hover:border-amber-700/50 hover:text-stone-200'}`}>
                  {lang.flag} {lang.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex md:flex-col items-center justify-center gap-1 md:pt-7">
            <ArrowRight className="w-6 h-6 text-amber-500" />
            <span className="text-xs text-stone-600 font-mono">S2S</span>
          </div>
          <div className="flex-1 w-full">
            <label className="text-xs text-stone-500 uppercase tracking-wider mb-2 block">Target Language</label>
            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES.map(lang => (
                <button key={lang.code}
                  onClick={() => { if (lang.code !== fromLang) { setToLang(lang.code); reset(); } }}
                  disabled={lang.code === fromLang}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${toLang === lang.code ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/20' : lang.code === fromLang ? 'opacity-25 cursor-not-allowed bg-stone-800/20 border-stone-800 text-stone-600' : 'bg-stone-800/50 border-stone-700/50 text-stone-400 hover:border-violet-700/50 hover:text-stone-200'}`}>
                  {lang.flag} {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── DEMO MODE ── */}
        {inputMode === 'demo' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Input panel */}
              <div className="p-5 rounded-2xl bg-stone-800/60 border border-stone-700/40">
                <div className="flex items-center gap-2 mb-3">
                  <Mic className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-stone-500 uppercase tracking-wider">Input — {LANGUAGES.find(l => l.code === fromLang)?.flag} {LANGUAGES.find(l => l.code === fromLang)?.name}</span>
                </div>
                <p className="text-stone-200 text-base leading-relaxed mb-1 font-medium">{currentPhrase.text}</p>
                <p className="text-stone-500 text-xs italic mb-4">{currentPhrase.meaning}</p>
                <WaveformAnimation active={stage === 'listening'} color="#D97706" />
              </div>

              {/* Output panel */}
              <div className="p-5 rounded-2xl bg-stone-800/60 border border-violet-900/40">
                <div className="flex items-center gap-2 mb-3">
                  <Volume2 className="w-4 h-4 text-violet-400" />
                  <span className="text-xs text-stone-500 uppercase tracking-wider">Output — {LANGUAGES.find(l => l.code === toLang)?.flag} {LANGUAGES.find(l => l.code === toLang)?.name}</span>
                </div>
                <AnimatePresence mode="wait">
                  {showTranslation ? (
                    <motion.div key="t" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                      <p className="text-violet-200 text-base leading-relaxed font-medium mb-1">{getTranslation(fromLang, toLang, phraseIndex % 3)}</p>
                      <p className="text-stone-500 text-xs italic">Voice biometrics preserved · Speaker identity retained</p>
                    </motion.div>
                  ) : (
                    <motion.div key="w" className="text-stone-600 text-sm italic flex items-center gap-2 min-h-[48px]">
                      {(stage === 'processing' || stage === 'translating') && <RefreshCw className="w-4 h-4 text-amber-500 animate-spin flex-shrink-0" />}
                      {stage === 'idle' && 'Awaiting audio input...'}
                      {stage === 'listening' && <span className="text-amber-400">Recording audio stream...</span>}
                      {stage === 'processing' && <span className="text-amber-400">Processing acoustic tokens...</span>}
                      {stage === 'translating' && <span className="text-violet-400">Synthesizing target speech...</span>}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="mt-3"><WaveformAnimation active={stage === 'done'} color="#7C3AED" /></div>
              </div>
            </div>

            {/* Pipeline steps */}
            <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-1">
              {PIPELINE_STEPS.map((step, i) => (
                <React.Fragment key={step}>
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-500 whitespace-nowrap border ${processingStep > i ? 'bg-green-500/20 text-green-400 border-green-500/30' : processingStep === i + 1 ? 'bg-amber-500/20 text-amber-400 border-amber-500/30 animate-pulse' : 'bg-stone-800/40 text-stone-600 border-stone-700/30'}`}>
                    <span>{processingStep > i ? '✓' : processingStep === i + 1 ? '◉' : '○'}</span>
                    {step}
                  </div>
                  {i < PIPELINE_STEPS.length - 1 && <ArrowRight className="w-3 h-3 text-stone-700 flex-shrink-0" />}
                </React.Fragment>
              ))}
            </div>

            {/* Controls + Latency */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                {latency && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">{latency}ms</div>
                      <div className="text-xs text-stone-500">Our model</div>
                    </div>
                    <div className="text-center opacity-50">
                      <div className="text-xl font-bold text-red-400 line-through">4,200ms</div>
                      <div className="text-xs text-stone-500">Traditional</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                      {Math.round((4200 - latency) / 4200 * 100)}% faster
                    </span>
                  </motion.div>
                )}
              </div>
              <div className="flex gap-3">
                {stage === 'done' && (
                  <button onClick={reset} className="px-4 py-2 rounded-xl bg-stone-800 border border-stone-700 text-stone-300 text-sm hover:border-stone-600 transition-all">
                    Next Phrase
                  </button>
                )}
                <button onClick={runDemo} disabled={stage !== 'idle' && stage !== 'done'}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-sm hover:from-amber-500 hover:to-amber-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg flex items-center gap-2">
                  {stage === 'idle' || stage === 'done' ? <><Play className="w-4 h-4" /> Translate</> : <><RefreshCw className="w-4 h-4 animate-spin" /> Processing...</>}
                </button>
              </div>
            </div>
          </>
        )}

        {/* ── TEXT INPUT MODE ── */}
        {inputMode === 'text' && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-stone-800/60 border border-stone-700/40">
              <label className="text-xs text-stone-500 uppercase tracking-wider mb-3 block flex items-center gap-2">
                <Type className="w-3.5 h-3.5" /> Type in {LANGUAGES.find(l => l.code === fromLang)?.name}
              </label>
              <textarea
                value={customText}
                onChange={e => setCustomText(e.target.value)}
                placeholder={`Type a sentence in ${LANGUAGES.find(l => l.code === fromLang)?.name}…`}
                rows={3}
                className="w-full bg-transparent text-stone-200 placeholder:text-stone-600 text-base resize-none outline-none leading-relaxed"
              />
              <WaveformAnimation active={isTypingProcessing} color="#D97706" bars={20} />
            </div>

            <div className="flex justify-end">
              <button onClick={handleTextTranslate} disabled={!customText.trim() || isTypingProcessing}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-sm hover:from-amber-500 hover:to-amber-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg flex items-center gap-2">
                {isTypingProcessing ? <><RefreshCw className="w-4 h-4 animate-spin" /> Translating...</> : <><Zap className="w-4 h-4" /> Translate</>}
              </button>
            </div>

            <AnimatePresence>
              {customTranslation && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-2xl bg-stone-800/60 border border-violet-900/40">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-violet-400" />
                    <span className="text-xs text-stone-500 uppercase tracking-wider">Output — {LANGUAGES.find(l => l.code === toLang)?.name}</span>
                  </div>
                  <p className="text-violet-200 text-base leading-relaxed">{customTranslation}</p>
                  <WaveformAnimation active color="#7C3AED" bars={20} />
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-xs text-stone-600 italic text-center">
              This is a simulated demo. Full API returns real speech-to-speech audio output.
            </p>
          </div>
        )}

        {/* ── NUANCES MODE ── */}
        {inputMode === 'nuances' && (
          <div className="space-y-4">
            <p className="text-stone-400 text-sm mb-6">
              Our engine handles linguistic subtleties that text-based pipelines completely miss:
            </p>
            {NUANCE_FACTS.map((fact, i) => (
              <motion.div key={fact.label}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-stone-800/50 border border-stone-700/40">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-400 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h4 className="text-stone-200 font-semibold mb-1">{fact.label}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{fact.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-violet-500/10 border border-amber-500/20 text-center">
              <p className="text-amber-300 text-sm font-medium">
                Result: 98% voice preservation vs. 34% in text-based pipelines
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}