import React from 'react';
import { Sparkles } from 'lucide-react';

const GenerationPrompt = () => {
  return (
    <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Generation Prompt</h3>
        <Sparkles className="w-5 h-5 text-accent-purple" />
      </div>
      <textarea
        className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-purple/50 transition-all resize-none min-h-[150px]"
        placeholder="Describe the type of data you want to generate. For example: Generate 100 employees with realistic names, diverse departments, and salary ranges from 50k to 150k..."
      />
      <button className="mt-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold py-2.5 px-6 rounded-xl hover:opacity-90 transition-opacity active:scale-[0.98]">
        Generate Data
      </button>
    </div>
  );
};

export default GenerationPrompt;
