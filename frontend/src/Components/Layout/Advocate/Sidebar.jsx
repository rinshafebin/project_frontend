import React from 'react';
import { Scale, Menu, X } from 'lucide-react';

export default function Sidebar({ sidebarOpen, setSidebarOpen, activeView, setActiveView, navigationItems }) {
  return (
    <div className={(sidebarOpen ? 'w-64' : 'w-20') + ' bg-gradient-to-b from-gray-900 via-black to-black text-white transition-all duration-300 flex flex-col'}>
      <div className="p-6 border-b border-gray-800">
        {sidebarOpen ? (
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8" />
            <div>
              <h1 className="font-bold text-lg">LegalDesk</h1>
              <p className="text-xs text-gray-400">Case Management</p>
            </div>
          </div>
        ) : (
          <Scale className="w-8 h-8 mx-auto" />
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeView === item.id ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            >
              <IconComponent className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
              {sidebarOpen && item.badge && <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>}
            </button>
          );
        })}
      </nav>

      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-4 border-t border-gray-800 hover:bg-gray-800 transition">
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  );
}
