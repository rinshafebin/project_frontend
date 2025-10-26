import React from 'react';
import { Calendar, Clock, Scale } from 'lucide-react';

export default function UpcomingHearings({ upcomingHearings }) {
  return (
    <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black flex items-center gap-2">
          <Calendar className="w-6 h-6" />
          Upcoming Hearings
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
      </div>
      <div className="space-y-4">
        {upcomingHearings.map(hearing => (
          <div key={hearing.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-black mb-1">{hearing.case}</h3>
                <p className="text-sm text-gray-600">{hearing.client}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                hearing.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {hearing.priority === 'high' ? 'High Priority' : 'Medium'}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {hearing.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {hearing.time}
              </span>
              <span className="flex items-center gap-1">
                <Scale className="w-4 h-4" />
                {hearing.court}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
