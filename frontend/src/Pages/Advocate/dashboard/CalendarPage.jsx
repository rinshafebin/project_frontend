import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Calendar, Clock, MapPin, Users, MoreVertical } from "lucide-react";
import Sidebar from "../../../Components/Layout/Advocate/Sidebar";
import Header from "../../../Components/Layout/Advocate/Header";

export default function CalendarPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const events = [
    {
      id: 1,
      title: "State vs. Kumar Hearing",
      time: "10:30 AM",
      type: "hearing",
      color: "bg-blue-500",
      location: "District Court",
      client: "Rajesh Kumar",
    },
    {
      id: 2,
      title: "Client Meeting - Priya Sharma",
      time: "02:00 PM",
      type: "meeting",
      color: "bg-purple-500",
      location: "Office",
      client: "Priya Sharma",
    },
    {
      id: 3,
      title: "Document Review Deadline",
      time: "04:00 PM",
      type: "deadline",
      color: "bg-red-500",
      location: "N/A",
      client: "Tech Solutions Ltd",
    },
  ];

  const getEventTypeLabel = (type) => {
    const types = {
      hearing: { label: "Hearing", bg: "bg-blue-100", text: "text-blue-700" },
      meeting: { label: "Meeting", bg: "bg-purple-100", text: "text-purple-700" },
      deadline: { label: "Deadline", bg: "bg-red-100", text: "text-red-700" },
    };
    return types[type] || types.hearing;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Calendar</h2>
                  <p className="text-sm text-gray-600 mt-1">Manage your hearings and appointments</p>
                </div>
                <button className="px-4 py-2.5 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:opacity-90 transition flex items-center gap-2 font-medium shadow-sm">
                  <Plus className="w-4 h-4" />
                  New Event
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar Section */}
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      November 2025
                    </h3>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        Previous
                      </button>
                      <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        Next
                      </button>
                    </div>
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div
                        key={day}
                        className="text-center text-xs font-semibold text-gray-600 py-2"
                      >
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 30 }, (_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.01 }}
                        onClick={() => setSelectedDate(i + 1)}
                        className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition ${
                          i + 1 === selectedDate
                            ? "bg-gradient-to-r from-black to-gray-800 text-white font-bold shadow-md"
                            : i + 1 === new Date().getDate()
                            ? "bg-gray-100 text-gray-900 font-semibold border border-gray-300"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        {i + 1}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Today's Schedule */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Today's Schedule
                  </h3>
                  <div className="space-y-3">
                    {events.map((event, i) => {
                      const typeInfo = getEventTypeLabel(event.type);
                      return (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-4 bg-white rounded-xl hover:shadow-md transition cursor-pointer border border-gray-100"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-3 h-3 ${event.color} rounded-full mt-1.5`}></div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <p className="font-semibold text-gray-900 text-sm leading-tight">
                                  {event.title}
                                </p>
                                <button className="p-1 hover:bg-gray-50 rounded transition flex-shrink-0">
                                  <MoreVertical className="w-4 h-4 text-gray-400" />
                                </button>
                              </div>
                              
                              <div className="space-y-1.5 text-xs text-gray-600">
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-3 h-3" />
                                  <span>{event.time}</span>
                                </div>
                                {event.location !== "N/A" && (
                                  <div className="flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3" />
                                    <span>{event.location}</span>
                                  </div>
                                )}
                                <div className="flex items-center gap-1.5">
                                  <Users className="w-3 h-3" />
                                  <span>{event.client}</span>
                                </div>
                              </div>

                              <div className="mt-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeInfo.bg} ${typeInfo.text}`}>
                                  {typeInfo.label}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                    {events.length === 0 && (
                      <div className="text-center py-8">
                        <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500 text-sm">No events scheduled</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}