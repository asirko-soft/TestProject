import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        {/* Placeholder routes for other sidebar items */}
        <Route path="/genai" element={<Dashboard />} />
        <Route path="/assistant" element={<Chat />} />
        <Route path="/schema" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
