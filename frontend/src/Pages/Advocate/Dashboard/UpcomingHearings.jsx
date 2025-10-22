import React from 'react';
import { Calendar } from 'lucide-react';

export default function UpcomingHearings() {
  const hearings = [
    { case: 'State vs. Kumar', date: '2025-10-25', time: '10:30 AM', court: 'District Court' },
    { case: 'Divorce Proceedings', date: '2025-10-28', time: '2:00 PM', court: 'Family Court' },
    { case: 'Contract Breach', date: '2025-10-30', time: '11:00 AM', court: 'High Court' }
  ];

  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" /> Upcoming Hearings
        </h2>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
      </div>
      <div className="p-6 space-y-4">
        {hearings.map((h, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">{h.case}</h3>
                <p className="text-sm text-gray-600">{h.court}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{h.date}</p>
              <p className="text-sm text-gray-600">{h.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
