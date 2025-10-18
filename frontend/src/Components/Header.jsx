import React from 'react';
import { Bell, Menu, X } from 'lucide-react';

export default function Header({ sidebarOpen, setSidebarOpen, setActiveTab }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-2xl font-bold text-gray-800">⚖️ LegalAdvocate</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={24} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">A</div>
            <div className="hidden md:block text-left">
              <p className="font-semibold text-gray-800 text-sm">Adv. Arjun Menon</p>
              <p className="text-xs text-gray-600">Senior Advocate</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
