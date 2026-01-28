import React from 'react';
import { Table, ChevronRight, Send } from 'lucide-react';
import Layout from '../components/Layout';
import ChatHistory from '../components/ChatHistory';

const SchemaContext = () => {
  const tables = [
    'companies', 'departments', 'employees', 'projects', 'employee_projects', 'salaries', 'locations'
  ];

  return (
    <div className="w-64 bg-slate-900/50 border-l border-slate-800 flex flex-col p-6 overflow-y-auto shrink-0">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Schema Context</h3>
      <div className="space-y-2">
        {tables.map(table => (
          <div key={table} className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <Table className="w-4 h-4 text-slate-600 group-hover:text-accent-blue transition-colors" />
              <span className="text-sm text-slate-400 group-hover:text-slate-200">{table}</span>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-slate-800">
        <p className="text-[10px] text-slate-600 leading-relaxed">
          The assistant has full context of the current schema and can perform complex joins and aggregations.
        </p>
      </div>
    </div>
  );
};

const Chat = () => {
  return (
    <Layout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col relative bg-[#020617]">
          <header className="px-8 py-4 border-b border-slate-800 flex items-center justify-between bg-[#020617]/80 backdrop-blur-md sticky top-0 z-10">
            <h2 className="text-xl font-bold text-white">Talk to Your Data</h2>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-slate-500 font-medium">Assistant Online</span>
            </div>
          </header>

          <ChatHistory />

          <div className="p-6 border-t border-slate-800 bg-[#020617]">
            <div className="max-w-4xl mx-auto relative">
              <input
                type="text"
                placeholder="Ask a question about your data..."
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-4 pl-6 pr-14 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-xl"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent-blue hover:bg-blue-500 text-white rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-accent-blue/20">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-600 mt-3">
              Press Enter to send. The assistant can generate SQL, tables, and visualizations.
            </p>
          </div>
        </div>

        <SchemaContext />
      </div>
    </Layout>
  );
};

export default Chat;
