import React from 'react';
import { Star, Briefcase, MapPin, Award, MessageSquare } from 'lucide-react';

export const AdvocateCard = ({ advocate, onViewProfile, onChat }) => (
  <div className="bg-white border-2 border-black rounded-xl shadow-lg hover:shadow-2xl transition-all p-6">
    <div className="flex items-start space-x-4 mb-4">
      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
        {advocate.initials}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-black">{advocate.name}</h3>
        <p className="text-gray-700 font-medium">{advocate.specialization}</p>
        <div className="flex items-center mt-1">
          <Star className="w-4 h-4 text-black fill-current" />
          <span className="ml-1 text-sm text-gray-600">{advocate.rating} rating</span>
        </div>
      </div>
    </div>

    <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
      <div className="flex items-center text-gray-700">
        <Briefcase className="w-4 h-4 mr-2" />
        <span className="text-sm">{advocate.experience} years experience</span>
      </div>
      <div className="flex items-center text-gray-700">
        <MapPin className="w-4 h-4 mr-2" />
        <span className="text-sm">{advocate.location}</span>
      </div>
      <div className="flex items-center text-gray-700">
        <Award className="w-4 h-4 mr-2" />
        <span className="text-sm">{advocate.cases} cases handled</span>
      </div>
    </div>

    <div className="flex space-x-3">
      <button 
        onClick={() => onViewProfile(advocate)}
        className="flex-1 bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-all"
      >
        View Profile
      </button>
      <button 
        onClick={() => onChat(advocate)}
        className="px-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition-all"
      >
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  </div>
);
