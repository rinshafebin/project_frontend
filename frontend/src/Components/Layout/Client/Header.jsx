import React, { useState } from 'react';
import { Scale, Bell, Menu, X } from 'lucide-react';

const navItems = ['home', 'cases', 'chat', 'hearings', 'payments'];

export const Header = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-2xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Scale className="w-8 h-8 text-white" />
            <div>
              <span className="text-2xl font-bold tracking-tight">LEGAL</span>
              <span className="text-2xl font-light">PRO</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1">
            {['home', 'cases', 'chat'].map(item => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`px-4 py-2 rounded font-medium transition-all ${
                  activeSection === item
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-full transition-all">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={() => setActiveSection('profile')}
              className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center font-bold hover:bg-gray-200 transition-all"
            >
              U
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="px-4 py-2 space-y-1">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded transition-all ${
                  activeSection === item
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
