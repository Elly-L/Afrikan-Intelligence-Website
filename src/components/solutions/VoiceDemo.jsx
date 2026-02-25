import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Play, Square, Zap, Volume2, Loader2, CheckCircle } from 'lucide-react';

const DEMOS = {
  'Healthcare AI': {
    color: 'from-blue-500 to-cyan-500',
    accent: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    prompt: {
      language: 'Igbo',
      flag: '🇳🇬',
      text: 'Afọ m na-awa m awa, na isi m na-eri m eri',
      translation: '"My stomach is hurting and I have a severe headache"',
      audioLabel: 'Patient describing symptoms in Igbo',
    },
    aiResponse: {
      language: 'English (for clinician)',
      text: 'Patient reports: Abdominal pain + severe headache. Likely priority 2 — possible hypertensive episode. Recommend BP check immediately. Translation confidence: 97%.',
      latency: '183ms',
    },
  },
  'Voice FinTech': {
    color: 'from-green-500 to-emerald-500',
    accent: 'text-green-400',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    prompt: {
      language: 'Luo',
      flag: '🇰🇪',
      text: 'Dwaro tiyo pesa mia adek ne Maria Achieng',
      translation: '"I want to send three hundred shillings to Maria Achieng"',
      audioLabel: 'Farmer initiating M-Pesa transfer in Luo',
    },
    aiResponse: {
      language: 'Swahili (confirmed back to user)',
      text: 'Unatuma KES 300 kwa Maria Achieng. Thibitisha? — Sending KES 300 to Maria Achieng. Confirm? Translation confidence: 99%. Transaction ready.',
      latency: '156ms',
    },
  },
  'AgriTech Advisory': {
    color: 'from-amber-500 to-yellow-500',
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    prompt: {
      language: 'Oromo',
      flag: '🇪🇹',
      text: 'Landi kee murtii guyyaa har\'aa maali?',
      translation: '"What is the best planting decision for today?"',
      audioLabel: 'Farmer asking for crop advisory in Oromo',
    },
    aiResponse: {
      language: 'Oromo (responded in-kind)',
      text: 'Har\'a lafa tajaajila tafii. Qorra bishaanii dhibbentaa 64. Teff facaasuu ni ta\'a. — Today conditions are optimal. Soil moisture 64%. Teff planting recommended. Translation confidence: 96%.',
      latency: '201ms',
    },
  },
  'Cross-Border Trade': {
    color: 'from-purple-500 to-pink-500',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    prompt: {
      language: 'Igbo',
      flag: '🇳🇬',
      text: 'Akwa mmiri ọcha ole ka ị nwere? Ọ nwere ike idaba ọnụahịa?',
      translation: '"How many bales of white linen do you have? Can you reduce the price?"',
      audioLabel: 'Trader negotiating cross-border in Igbo',
    },
    aiResponse: {
      language: 'Swahili (supplier in Mombasa)',
      text: 'Nina bale mia tatu. Naweza kupunguza kwa asilimia kumi ukituma M-Pesa. — I have 300 bales. I can reduce by 10% if you send via M-Pesa. Translation confidence: 98%.',
      latency: '218ms',
    },
  },
};

const SOLUTION_KEYS = Object.keys(DEMOS);

export default function VoiceDemo() {
  const [selected, setSelected] = useState('Healthcare AI');
  const [phase, setPhase] = useState('idle'); // idle | playing | recording | processing | done
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);

  const demo = DEMOS[selected];

  // Reset on solution change
  useEffect(() => {
    stopRecording();
    setPhase('idle');
    setRecordingTime(0);
  }, [selected]);

  useEffect(() => () => stopRecording(), []);

  function playPrompt() {
    setPhase('playing');
    // Simulate audio playback duration
    setTimeout(() => setPhase('idle'), 2800);
  }

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;
      mr.start();
      setPhase('recording');
      setRecordingTime(0);
      timerRef.current = setInterval(() => setRecordingTime(t => t + 1), 1000);
      mr.onstop = () => processRecording();
    } catch {
      // No mic permission — still simulate
      setPhase('recording');
      setRecordingTime(0);
      timerRef.current = setInterval(() => setRecordingTime(t => t + 1), 1000);
    }
  }

  function stopRecording() {
    clearInterval(timerRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
  }

  function handleStopRecording() {
    stopRecording();
    processRecording();
  }

  function processRecording() {
    setPhase('processing');
    setTimeout(() => setPhase('done'), 2200);
  }

  function reset() {
    setPhase('idle');
    setRecordingTime(0);
  }

  return (
    <div className="rounded-3xl border overflow-hidden" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-default)' }}>
      {/* Solution Selector */}
      <div className="p-6 border-b" style={{ borderColor: 'var(--border-default)' }}>
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-sub)' }}>Select a Solution</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SOLUTION_KEYS.map(key => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`px-4 py-3 rounded-2xl text-sm font-medium border transition-all duration-300 ${
                selected === key
                  ? `bg-gradient-to-r ${DEMOS[key].color} text-white border-transparent shadow-lg`
                  : 'border-transparent hover:border-white/20'
              }`}
              style={selected !== key ? { background: 'var(--bg-card)', color: 'var(--text-body)' } : {}}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Prompt */}
        <div className="space-y-5">
          <div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${demo.accent}`}>Step 1 — Hear the Prompt</span>
            <h3 className="text-xl font-bold mt-1" style={{ color: 'var(--text-heading)' }}>Sample Patient / User Voice</h3>
          </div>

          <div className={`p-5 rounded-2xl border ${demo.border} ${demo.bg}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{demo.prompt.flag}</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--text-body)' }}>{demo.prompt.language}</span>
            </div>
            <p className="text-lg font-medium mb-1" style={{ color: 'var(--text-heading)' }}>{demo.prompt.text}</p>
            <p className="text-sm italic" style={{ color: 'var(--text-sub)' }}>{demo.prompt.translation}</p>
            <p className="text-xs mt-3" style={{ color: 'var(--text-label)' }}>{demo.prompt.audioLabel}</p>
          </div>

          <button
            onClick={playPrompt}
            disabled={phase === 'playing'}
            className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r ${demo.color} transition-all hover:shadow-lg disabled:opacity-60`}
          >
            {phase === 'playing' ? (
              <><Volume2 className="w-5 h-5 animate-pulse" /> Playing audio…</>
            ) : (
              <><Play className="w-5 h-5" /> Play Prompt</>
            )}
          </button>

          {/* Step 2: Record */}
          <div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${demo.accent}`}>Step 2 — Respond (Optional)</span>
            <p className="text-sm mt-1 mb-3" style={{ color: 'var(--text-sub)' }}>Record your own voice in any supported language</p>
            {phase === 'recording' ? (
              <button onClick={handleStopRecording}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-red-500 to-rose-500 animate-pulse">
                <Square className="w-5 h-5" /> Stop Recording ({recordingTime}s)
              </button>
            ) : (
              <button onClick={startRecording} disabled={phase === 'playing' || phase === 'processing'}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold border-2 border-dashed transition-all hover:border-solid disabled:opacity-40"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-body)', background: 'var(--bg-card)' }}>
                <Mic className="w-5 h-5" /> Record My Voice
              </button>
            )}
          </div>
        </div>

        {/* Right: AI Response */}
        <div className="space-y-5">
          <div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${demo.accent}`}>Step 3 — AI Response</span>
            <h3 className="text-xl font-bold mt-1" style={{ color: 'var(--text-heading)' }}>Simulated Output</h3>
          </div>

          <div className="rounded-2xl border min-h-[220px] flex flex-col justify-center p-6"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-default)' }}>
            <AnimatePresence mode="wait">
              {phase === 'idle' && (
                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                  <Zap className="w-10 h-10 mx-auto mb-3 opacity-20" style={{ color: 'var(--text-sub)' }} />
                  <p className="text-sm" style={{ color: 'var(--text-sub)' }}>Play the prompt or record your voice to see the AI response</p>
                </motion.div>
              )}
              {phase === 'playing' && (
                <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                  <Volume2 className="w-10 h-10 mx-auto mb-3 animate-pulse text-blue-400" />
                  <p className="text-sm" style={{ color: 'var(--text-sub)' }}>Audio playing — AI is listening…</p>
                </motion.div>
              )}
              {phase === 'recording' && (
                <motion.div key="recording" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[0,1,2,3,4].map(i => (
                      <motion.div key={i} className="w-2 rounded-full bg-red-400"
                        animate={{ height: [8, 24, 8] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }} />
                    ))}
                  </div>
                  <p className="text-sm text-red-400 font-medium">Recording… {recordingTime}s</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-sub)' }}>Speak in any African language</p>
                </motion.div>
              )}
              {phase === 'processing' && (
                <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                  <Loader2 className="w-10 h-10 mx-auto mb-3 animate-spin text-amber-400" />
                  <p className="text-sm text-amber-400 font-medium">Mimetic Engine processing…</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-sub)' }}>Tokenising audio → semantic mapping → synthesis</p>
                </motion.div>
              )}
              {phase === 'done' && (
                <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">AI Response Ready</span>
                    <span className={`ml-auto text-xs px-2 py-1 rounded-full font-bold ${demo.bg} ${demo.accent}`}>{demo.aiResponse.latency}</span>
                  </div>
                  <div className={`p-4 rounded-xl border mb-3 ${demo.border} ${demo.bg}`}>
                    <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-sub)' }}>Output in {demo.aiResponse.language}:</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-heading)' }}>{demo.aiResponse.text}</p>
                  </div>
                  <button onClick={reset} className="text-xs underline mt-2" style={{ color: 'var(--text-sub)' }}>Reset demo</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Latency bar */}
          <div className="p-4 rounded-xl flex items-center justify-between" style={{ background: 'var(--bg-card)' }}>
            <span className="text-xs" style={{ color: 'var(--text-sub)' }}>Target latency</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div className={`h-full rounded-full bg-gradient-to-r ${demo.color}`}
                  initial={{ width: '0%' }} animate={{ width: phase === 'done' ? '18%' : '0%' }}
                  transition={{ duration: 0.8, delay: 0.2 }} />
              </div>
              <span className={`text-sm font-bold ${demo.accent}`}>{demo.aiResponse.latency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}