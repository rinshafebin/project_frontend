import React from 'react';
import { Bell } from 'lucide-react';

export default function RemindersPage() {
  return (
    <div className="text-center py-20">
      <Bell size={48} className="mx-auto text-blue-600 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800">Reminders</h2>
      <p className="text-gray-600 mt-2">Set reminders for case hearings, client meetings, and deadlines.</p>
    </div>
  );
}
