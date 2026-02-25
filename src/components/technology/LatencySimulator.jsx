import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, WifiOff, Zap, Play, RotateCcw, AlertTriangle } from 'lucide-react';

const NETWORK_CONDITIONS = [
  { id: 'fiber', label: 'Fiber / 4G', bandwidth: '50 Mbps', baseLatency: 20, desc: 'Urban Kenya / Nigeria', icon: '📶' },
  { id: '3g', label: '3G Mobile', bandwidth: '2 Mbps', baseLatency: 80, desc: 'Peri-urban Africa', icon: '📱' },
  { id: '2g', label: '2G / EDGE', bandwidth: '200 Kbps', baseLatency: 300, desc: 'Rural East Africa', icon: '📡' },
  { id: 'satellite', label: 'Satellite', bandwidth: '1 Mbps', baseLatency: 600, desc: 'Remote / Off-grid', icon: '🛰️' },
];

const LOAD_CONDITIONS = [
  { id: 'low', label: 'Low Load', factor: 1.0, color: 'text-green-400' },
  { id: 'medium', label: 'Medium Load', factor: 1.4, color: 'text-amber-400' },
  { id: 'high', label: 'High Load', factor: 2.2, color: 'text-red-400' },
];

function SimBar({ label, ms, maxMs, color, isOurs }) {
  const pct = Math.min((ms / maxMs) * 100, 100);
  const conversationImpact = ms < 300 ? 'Natural conversation' : ms < 800 ? 'Noticeable pause' : ms < 1500 ? 'Awkward delay' : 'Conversation breakdown';
  const impactColor = ms < 300 ? 'text-green-400' : ms < 800 ? 'text-amber-400' : ms < 1500 ? 'text-orange-400' : 'text-red-400';

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {isOurs && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">Our Model</span>}
          <span className="text-stone-300 text-sm font-medium">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-xs ${impactColor}`}>{conversationImpact}</span>
          <span className={`font-bold text-lg ${color}`}>{ms}ms</span>
        </div>
      </div>
      <div className="h-5 rounded-full bg-stone-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: isOurs ? 'linear-gradient(90deg,#D97706,#92400E)' : 'linear-gradient(90deg,#6B21A8,#9333EA)' }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      {ms > 1000 && (
        <div className="mt-1 flex items-center gap-1 text-xs text-red-400">
          <AlertTriangle className="w-3 h-3" />
          Conversation flow severely degraded
        </div>
      )}
    </div>
  );
}

function ConversationFlowViz({ ourLatency, traditionalLatency }) {
  const words = ['Habari', '...', 'Hujambo', '...', 'Bei ya', '...', 'ngapi?'];
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Our Model ({ourLatency}ms)</span>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * (ourLatency / 1000) * 0.3 }}
              className={`px-2 py-1 rounded text-sm ${
                w === '...' ? 'text-stone-600' : 'bg-amber-900/40 text-amber-200 border border-amber-800/50'
              }`}
            >
              {w}
            </motion.span>
          ))}
          <span className="text-green-400 text-xs ml-2">✓ Natural flow</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Traditional ({traditionalLatency}ms)</span>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * (traditionalLatency / 1000) * 0.3 }}
              className={`px-2 py-1 rounded text-sm ${
                w === '...' ? 'text-stone-600' : 'bg-purple-900/40 text-purple-200 border border-purple-800/50'
              }`}
            >
              {w}
            </motion.span>
          ))}
          {traditionalLatency > 1000 && <span className="text-red-400 text-xs ml-2">✗ Conversation breakdown</span>}
        </div>
      </div>
    </div>
  );
}

export default function LatencySimulator() {
  const [network, setNetwork] = useState('3g');
  const [load, setLoad] = useState('low');
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState(null);
  const [animKey, setAnimKey] = useState(0);

  const selectedNetwork = NETWORK_CONDITIONS.find(n => n.id === network);
  const selectedLoad = LOAD_CONDITIONS.find(l => l.id === load);

  const simulate = () => {
    setRunning(true);
    setResults(null);
    setAnimKey(k => k + 1);

    const networkMs = selectedNetwork.baseLatency;
    const loadFactor = selectedLoad.factor;

    // Our model: audio tokenization + semantic mapping + synthesis (no ASR/MT/TTS overhead)
    const ourModel = {
      tokenization: Math.round(35 * loadFactor),
      semanticMapping: Math.round(55 * loadFactor),
      synthesis: Math.round(45 * loadFactor),
      network: networkMs,
    };
    ourModel.total = ourModel.tokenization + ourModel.semanticMapping + ourModel.synthesis + ourModel.network;

    // Traditional pipeline: ASR + MT + TTS (three separate models + network overhead per step)
    const traditional = {
      asr: Math.round(800 * loadFactor + networkMs),
      mt: Math.round(600 * loadFactor + networkMs),
      tts: Math.round(500 * loadFactor + networkMs),
    };
    traditional.total = traditional.asr + traditional.mt + traditional.tts;

    setTimeout(() => {
      setResults({ ourModel, traditional });
      setRunning(false);
    }, 1500);
  };

  const maxMs = results ? Math.max(results.traditional.total * 1.1, 200) : 5000;

  return (
    <div className="rounded-3xl overflow-hidden border border-amber-900/30 bg-stone-900/90 shadow-2xl">
      {/* Header */}
      <div className="px-6 py-5 border-b border-stone-700/50 bg-stone-950/80">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">Latency Simulator</h3>
            <p className="text-stone-500 text-sm">Compare performance across African network conditions</p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
            ⚠ Simulated
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Network Conditions */}
        <div>
          <label className="text-xs text-stone-500 uppercase tracking-wider mb-3 block">Network Condition</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {NETWORK_CONDITIONS.map(n => (
              <button
                key={n.id}
                onClick={() => setNetwork(n.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                  network === n.id
                    ? 'bg-amber-900/40 border-amber-600/50 shadow-lg shadow-amber-900/20'
                    : 'bg-stone-800/40 border-stone-700/40 hover:border-stone-600/50'
                }`}
              >
                <div className="text-2xl mb-2">{n.icon}</div>
                <div className="text-sm font-semibold text-stone-200">{n.label}</div>
                <div className="text-xs text-stone-500">{n.bandwidth}</div>
                <div className="text-xs text-stone-600 mt-1">{n.desc}</div>
                <div className={`text-xs font-mono mt-2 ${network === n.id ? 'text-amber-400' : 'text-stone-600'}`}>
                  ~{n.baseLatency}ms base
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Server Load */}
        <div>
          <label className="text-xs text-stone-500 uppercase tracking-wider mb-3 block">Server Load</label>
          <div className="flex gap-3">
            {LOAD_CONDITIONS.map(l => (
              <button
                key={l.id}
                onClick={() => setLoad(l.id)}
                className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  load === l.id
                    ? `border-current ${l.color} bg-stone-800`
                    : 'border-stone-700/40 text-stone-500 bg-stone-800/30 hover:border-stone-600'
                }`}
              >
                <span className={load === l.id ? l.color : ''}>{l.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Run Button */}
        <button
          onClick={simulate}
          disabled={running}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-amber-900/40 flex items-center justify-center gap-3"
        >
          {running ? (
            <><Zap className="w-5 h-5 animate-pulse" /> Simulating...</>
          ) : (
            <><Play className="w-5 h-5" /> Run Simulation</>
          )}
        </button>

        {/* Results */}
        <AnimatePresence>
          {results && (
            <motion.div
              key={animKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-amber-900/20 border border-amber-800/40 text-center">
                  <div className="text-xs text-stone-500 mb-1">Our S2S Model</div>
                  <div className="text-4xl font-bold text-amber-400">{results.ourModel.total}ms</div>
                  <div className="text-xs text-green-400 mt-1">
                    {results.ourModel.total < 300 ? '✓ Real-time conversation' : results.ourModel.total < 600 ? '~ Near real-time' : '⚠ Slight delay'}
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-purple-900/20 border border-purple-800/40 text-center">
                  <div className="text-xs text-stone-500 mb-1">Traditional ASR→MT→TTS</div>
                  <div className="text-4xl font-bold text-purple-400">{results.traditional.total}ms</div>
                  <div className="text-xs text-red-400 mt-1">
                    {results.traditional.total > 3000 ? '✗ Conversation breakdown' : results.traditional.total > 1500 ? '✗ Very awkward delay' : '⚠ Noticeable pause'}
                  </div>
                </div>
              </div>

              {/* Bars */}
              <div className="p-6 rounded-2xl bg-stone-800/40 border border-stone-700/40">
                <h4 className="text-stone-300 font-semibold mb-5">Pipeline Breakdown</h4>
                <SimBar label="Our S2S Total" ms={results.ourModel.total} maxMs={maxMs} color="text-amber-400" isOurs />
                <SimBar label="ASR (Speech→Text)" ms={results.traditional.asr} maxMs={maxMs} color="text-purple-400" />
                <SimBar label="MT (Translation)" ms={results.traditional.mt} maxMs={maxMs} color="text-purple-400" />
                <SimBar label="TTS (Text→Speech)" ms={results.traditional.tts} maxMs={maxMs} color="text-purple-400" />
                <div className="mt-2 pt-4 border-t border-stone-700/40">
                  <SimBar label="Traditional Total" ms={results.traditional.total} maxMs={maxMs} color="text-red-400" />
                </div>
              </div>

              {/* Conversation Flow */}
              <div className="p-6 rounded-2xl bg-stone-800/40 border border-stone-700/40">
                <h4 className="text-stone-300 font-semibold mb-5">Conversation Flow Impact</h4>
                <ConversationFlowViz key={animKey} ourLatency={results.ourModel.total} traditionalLatency={results.traditional.total} />
              </div>

              <div className="text-center text-stone-600 text-xs">
                Simulation based on {selectedNetwork.label} • {selectedLoad.label} server conditions
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}