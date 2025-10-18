import React from 'react';
import { Calendar } from 'lucide-react';

export default function CalendarPage() {
  return (
    <div className="text-center py-20">
      <Calendar size={48} className="mx-auto text-blue-600 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800">Calendar Coming Soon</h2>
      <p className="text-gray-600 mt-2">This page will display your upcoming hearings and appointments.</p>
    </div>
  );
}
