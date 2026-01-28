import React from 'react';
import { SqlBlock, DataTable, DataChart } from './DataVisualization';
import { Bot, User } from 'lucide-react';

const ChatHistory = () => {
  const messages = [
    {
      role: 'user',
      content: "Can you show me the average salary by department for the employees generated?"
    },
    {
      role: 'assistant',
      content: "Certainly! I've calculated the average salary across all departments. Here's the analysis:",
      type: 'analysis',
      sql: "SELECT department, AVG(salary) as avg_salary \nFROM employees \nGROUP BY department \nORDER BY avg_salary DESC;",
      tableData: [
        { department: 'Engineering', avg_salary: '$138,500' },
        { department: 'Product', avg_salary: '$124,000' },
        { department: 'Design', avg_salary: '$112,000' },
        { department: 'Marketing', avg_salary: '$89,000' }
      ],
      chartData: [
        { name: 'Engineering', value: 138500 },
        { name: 'Product', value: 124000 },
        { name: 'Design', value: 112000 },
        { name: 'Marketing', value: 89000 }
      ]
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-8">
      {messages.map((msg, i) => (
        <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          {msg.role === 'assistant' && (
            <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center shrink-0 border border-accent-purple/30">
              <Bot className="w-5 h-5 text-accent-purple" />
            </div>
          )}

          <div className={`max-w-[80%] ${msg.role === 'user' ? 'bg-accent-blue/10 border border-accent-blue/20 p-4 rounded-2xl rounded-tr-none text-slate-200' : 'space-y-2'}`}>
            <p className="text-sm leading-relaxed">{msg.content}</p>

            {msg.role === 'assistant' && msg.sql && <SqlBlock code={msg.sql} />}
            {msg.role === 'assistant' && msg.tableData && <DataTable data={msg.tableData} />}
            {msg.role === 'assistant' && msg.chartData && <DataChart data={msg.chartData} />}
          </div>

          {msg.role === 'user' && (
            <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center shrink-0 border border-accent-blue/30">
              <User className="w-5 h-5 text-accent-blue" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
