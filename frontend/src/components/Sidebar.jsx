import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Bot, PlusCircle, MessageCircle, Table } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'GenAI', icon: Sparkles, path: '/genai', subtitle: 'Data Architect' },
    { name: 'Data Assistant', icon: Bot, path: '/assistant' },
    { name: 'Data Generation', icon: PlusCircle, path: '/dashboard' },
    { name: 'Talk to Your Data', icon: MessageCircle, path: '/chat' },
    { name: 'Schema', icon: Table, path: '/schema' },
  ];

  return (
    <div className="w-64 h-screen bg-[#0f172a] border-r border-slate-800 flex flex-col py-6 shrink-0">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent-purple rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">GenAI</span>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`
            }
          >
            <item.icon className={`w-5 h-5 mr-3 ${item.name === 'GenAI' ? 'text-purple-400' : ''}`} />
            <div className="flex flex-col">
              <span className="font-medium text-sm">{item.name}</span>
              {item.subtitle && (
                <span className="text-[10px] uppercase tracking-wider opacity-50">{item.subtitle}</span>
              )}
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto px-6">
        <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
          <p className="text-xs text-slate-500">Workspace</p>
          <p className="text-sm font-medium text-slate-300">Production DB</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
