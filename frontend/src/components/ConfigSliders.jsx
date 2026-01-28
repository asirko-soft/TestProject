import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

const ConfigSliders = () => {
  const [temp, setTemp] = useState(0.7);
  const [tokens, setTokens] = useState(2048);

  return (
    <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="w-5 h-5 text-accent-cyan" />
        <h3 className="text-lg font-semibold text-white">Configuration</h3>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-slate-300">Temperature</label>
            <span className="text-sm text-accent-cyan">{temp}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={temp}
            onChange={(e) => setTemp(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-accent-cyan"
          />
          <p className="text-[10px] text-slate-500 mt-1">Controls randomness: Lower is more deterministic, higher is more creative.</p>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-slate-300">Max Tokens</label>
            <span className="text-sm text-accent-cyan">{tokens}</span>
          </div>
          <input
            type="range"
            min="256"
            max="4096"
            step="128"
            value={tokens}
            onChange={(e) => setTokens(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-accent-cyan"
          />
          <p className="text-[10px] text-slate-500 mt-1">Maximum number of tokens to generate.</p>
        </div>
      </div>
    </div>
  );
};

export default ConfigSliders;
