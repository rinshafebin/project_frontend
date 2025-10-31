import React from 'react'
import { Calendar } from 'lucide-react'

export default function CalendarPage() {
  return (
    <div className="p-6 bg-white/80 rounded-2xl shadow-sm border border-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-4">
        <Calendar className="w-6 h-6 text-indigo-600" /> Calendar
      </h1>
      <p className="text-gray-600">
        Calendar integration will appear here. You can display upcoming hearings, client meetings, or reminders.
      </p>
    </div>
  )
}
