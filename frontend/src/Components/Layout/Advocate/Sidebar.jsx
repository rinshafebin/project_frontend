import React from 'react';
import { Scale, X, Menu, TrendingUp, Briefcase, Users, Calendar, FileText, Settings } from 'lucide-react';

export default function Sidebar({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab }) {
  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-black text-white transition-all duration-300 flex flex-col`}>
      <div className="p-6 flex items-center justify-between border-b border-gray-800">
        {sidebarOpen && (
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8" />
            <span className="font-bold text-lg">LegalPro</span>
          </div>
        )}
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded-lg">
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {[
            { id: 'overview', icon: TrendingUp, label: 'Overview' },
            { id: 'cases', icon: Briefcase, label: 'My Cases' },
            { id: 'clients', icon: Users, label: 'Clients' },
            { id: 'calendar', icon: Calendar, label: 'Calendar' },
            { id: 'documents', icon: FileText, label: 'Documents' },
            { id: 'team', icon: Users, label: 'Team' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id ? 'bg-white text-black' : 'hover:bg-gray-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
          {sidebarOpen && <span>Settings</span>}
        </button>
      </div>
    </div>
  );
}
