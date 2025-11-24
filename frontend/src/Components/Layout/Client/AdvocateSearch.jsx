import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import { AdvocateCard } from './AdvocateCard';
import { Filter, Search } from 'lucide-react';

export const AdvocateSearch = ({ onSelectAdvocate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const mockAdvocates = [
    { id: 1, name: "Adv. Rajesh Kumar", initials: "RK", specialization: "Criminal Law", experience: 15, location: "Delhi", rating: 4.8, cases: 250 },
    { id: 2, name: "Adv. Priya Sharma", initials: "PS", specialization: "Family Law", experience: 10, location: "Mumbai", rating: 4.9, cases: 180 },
    { id: 3, name: "Adv. Amit Patel", initials: "AP", specialization: "Corporate Law", experience: 12, location: "Bangalore", rating: 4.7, cases: 320 },
    { id: 4, name: "Adv. Sneha Reddy", initials: "SR", specialization: "Civil Law", experience: 8, location: "Hyderabad", rating: 4.6, cases: 150 },
    { id: 5, name: "Adv. Vikram Singh", initials: "VS", specialization: "Property Law", experience: 20, location: "Delhi", rating: 4.9, cases: 400 },
    { id: 6, name: "Adv. Meera Iyer", initials: "MI", specialization: "Consumer Law", experience: 7, location: "Chennai", rating: 4.5, cases: 120 },
  ];

  const filteredAdvocates = mockAdvocates.filter(advocate => {
    const matchesSearch = advocate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         advocate.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    if (selectedFilter === 'all') return matchesSearch;
    return matchesSearch && advocate.specialization.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <div className="space-y-6">
      <HeroSection 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onSearch={() => {}}
      />

      <div className="flex items-center space-x-4 overflow-x-auto pb-2">
        <div className="flex items-center space-x-2 text-black">
          <Filter className="w-5 h-5" />
          <span className="font-semibold whitespace-nowrap">Filter:</span>
        </div>
        {['all', 'criminal', 'family', 'corporate', 'civil', 'property'].map(filter => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all border-2 ${
              selectedFilter === filter
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-black'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAdvocates.map(advocate => (
          <AdvocateCard 
            key={advocate.id}
            advocate={advocate}
            onViewProfile={onSelectAdvocate}
            onChat={(adv) => onSelectAdvocate(adv)}
          />
        ))}
      </div>

      {filteredAdvocates.length === 0 && (
        <div className="text-center py-12 bg-white border-2 border-black rounded-xl">
          <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-black mb-2">No advocates found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};
