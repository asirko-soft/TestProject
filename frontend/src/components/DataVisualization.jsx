import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Code, Table as TableIcon, BarChart3 } from 'lucide-react';

export const SqlBlock = ({ code }) => (
  <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden my-4">
    <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
      <Code className="w-4 h-4 text-accent-blue" />
      <span className="text-xs font-mono text-slate-300">Generated SQL</span>
    </div>
    <pre className="p-4 overflow-x-auto text-xs font-mono text-blue-300">
      <code>{code}</code>
    </pre>
  </div>
);

export const DataTable = ({ data }) => (
  <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden my-4">
    <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
      <TableIcon className="w-4 h-4 text-accent-purple" />
      <span className="text-xs font-mono text-slate-300">Result Set</span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-[11px]">
        <thead className="bg-slate-800/50 text-slate-400 uppercase tracking-wider">
          <tr>
            {Object.keys(data[0]).map(key => (
              <th key={key} className="px-4 py-2 font-medium">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td key={j} className="px-4 py-2 text-slate-300">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const DataChart = ({ data }) => {
  const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b'];

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden my-4">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <BarChart3 className="w-4 h-4 text-accent-cyan" />
        <span className="text-xs font-mono text-slate-300">Data Trend Over Time</span>
      </div>
      <div className="h-64 w-full p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#64748b"
              fontSize={10}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#64748b"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', fontSize: '12px' }}
              itemStyle={{ color: '#f1f5f9' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} fillOpacity={0.8} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
