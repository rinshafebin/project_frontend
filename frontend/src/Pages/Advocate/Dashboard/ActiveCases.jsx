import React from "react"
import { motion } from "framer-motion"
import {
  Briefcase,
  Users,
  Clock,
  FileText,
  MessageSquare,
  MoreVertical,
} from "lucide-react"

export default function ActiveCases({ activeCases }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Active Cases
        </h2>
        <button className="text-sm text-indigo-600 hover:underline">View All</button>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeCases.map((caseItem, i) => (
          <motion.div
            key={caseItem.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition cursor-pointer bg-white"
          >
            {/* Top Section */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-gray-500 bg-gray-50 px-2 py-1 rounded">
                    {caseItem.caseNo}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      caseItem.priority === "high"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {caseItem.priority === "high" ? "High" : "Medium"}
                  </span>
                </div>

                <div className="text-lg font-semibold text-gray-900">
                  {caseItem.title}
                </div>
                <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                  <Users className="w-4 h-4" /> {caseItem.client}
                </div>
              </div>

              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Case Details */}
            <div className="space-y-2 mb-3 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Status:</span>
                <span className="font-medium text-gray-900">{caseItem.status}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Category:</span>
                <span className="font-medium text-gray-900">{caseItem.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Next Hearing:</span>
                <span className="font-medium text-gray-900 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {caseItem.nextHearing}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-3 border-t border-gray-100">
              <button className="flex-1 py-2 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white font-medium hover:opacity-90 transition">
                View
              </button>
              <button className="px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                <FileText className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
