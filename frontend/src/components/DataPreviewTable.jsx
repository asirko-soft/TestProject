import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const DataPreviewTable = () => {
  const data = [
    { id: 101, name: 'Sarah Chen', dept: 'Engineering', salary: '$145,000', date: '2023-01-15' },
    { id: 102, name: 'Michael Ross', dept: 'Marketing', salary: '$92,000', date: '2023-03-22' },
    { id: 103, name: 'Elena Rodriguez', dept: 'Product', salary: '$128,000', date: '2022-11-10' },
    { id: 104, name: 'James Wilson', dept: 'Engineering', salary: '$132,000', date: '2023-05-05' },
    { id: 105, name: 'Aisha Khan', dept: 'Design', salary: '$115,000', date: '2023-02-28' },
  ];

  return (
    <div className="bg-[#0f172a] rounded-2xl border border-slate-800 flex flex-col overflow-hidden">
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Live Data Preview</h3>
        <button className="flex items-center gap-2 text-xs font-semibold text-accent-blue bg-accent-blue/10 px-3 py-1.5 rounded-lg hover:bg-accent-blue/20 transition-colors">
          <Download className="w-3.5 h-3.5" />
          Export Data
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900/50 text-slate-400 uppercase text-[10px] tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">employee_id</th>
              <th className="px-6 py-4 font-medium">name</th>
              <th className="px-6 py-4 font-medium">department</th>
              <th className="px-6 py-4 font-medium">salary</th>
              <th className="px-6 py-4 font-medium">hire_date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 text-slate-300 font-mono text-xs">{row.id}</td>
                <td className="px-6 py-4 text-white font-medium">{row.name}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-[10px] font-semibold">
                    {row.dept}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-300">{row.salary}</td>
                <td className="px-6 py-4 text-slate-400">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-slate-800 bg-slate-900/30 flex justify-center">
        <button className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1">
          View all 100 rows <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default DataPreviewTable;
