import React from 'react';
import { Scale, Search } from 'lucide-react';

export const HeroSection = ({ searchQuery, setSearchQuery, onSearch }) => (
  <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 rounded-2xl p-8 mb-8 text-white shadow-2xl">
    <div className="flex items-center space-x-3 mb-4">
      <Scale className="w-12 h-12" />
      <div>
        <h1 className="text-4xl font-bold">Find Your Legal Expert</h1>
        <p className="text-gray-400 mt-1">Professional advocates at your service</p>
      </div>
    </div>

    <div className="bg-white rounded-xl p-2 flex items-center shadow-lg mt-6">
      <Search className="w-6 h-6 text-gray-400 ml-2" />
      <input
        type="text"
        placeholder="Search by advocate name, specialization, or location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 px-4 py-3 text-black outline-none"
      />
      <button 
        onClick={onSearch}
        className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
      >
        Search
      </button>
    </div>
  </div>
);

