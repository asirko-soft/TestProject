import React from 'react';
import { Upload } from 'lucide-react';

const UploadDDL = () => {
  return (
    <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Upload DDL</h3>
      <div className="border-2 border-dashed border-slate-700 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-900/50 hover:bg-slate-900/80 transition-colors cursor-pointer group">
        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Upload className="w-6 h-6 text-accent-blue" />
        </div>
        <p className="text-sm text-slate-300 font-medium">Drag and drop DDL file</p>
        <p className="text-xs text-slate-500 mt-1">or click to browse from computer</p>
      </div>
    </div>
  );
};

export default UploadDDL;
