import React from "react";
import { Plus } from "lucide-react";

export default function CalendarPage() {
  const events = [
    {
      id: 1,
      title: "State vs. Kumar Hearing",
      time: "10:30 AM",
      type: "hearing",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Client Meeting - Priya Sharma",
      time: "02:00 PM",
      type: "meeting",
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Document Review Deadline",
      time: "04:00 PM",
      type: "deadline",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Calendar</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">November 2025</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-sm font-semibold text-gray-600 py-2"
              >
                {day}
              </div>
            ))}

            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition ${
                  i + 1 === new Date().getDate()
                    ? "bg-blue-500 text-white font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Today's Schedule
          </h3>

          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="p-4 bg-gray-50 rounded-xl hover:shadow-sm transition"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-3 h-3 ${event.color} rounded-full mt-1`}
                  ></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                  </div>
                </div>
              </div>
            ))}

            {events.length === 0 && (
              <p className="text-gray-500 text-sm text-center py-4">
                No events today.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
