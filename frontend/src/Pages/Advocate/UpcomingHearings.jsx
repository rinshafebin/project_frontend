import React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Scale } from "lucide-react"

export default function UpcomingHearings({ upcomingHearings }) {
  return (
    <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-700" /> Upcoming Hearings
        </h2>
        <button className="text-sm text-indigo-600 hover:underline">View All</button>
      </div>

      {/* Hearing List */}
      <div className="space-y-4">
        {upcomingHearings.map((hearing, i) => (
          <motion.div
            key={hearing.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-sm text-gray-500">{hearing.case}</div>
                <div className="text-sm font-medium text-gray-800">{hearing.client}</div>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  hearing.priority === "high"
                    ? "bg-red-50 text-red-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {hearing.priority === "high" ? "High" : "Medium"}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {hearing.date} • {hearing.time}
              </div>

              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" /> <span>{hearing.court}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
