import React from "react"
import { motion } from "framer-motion"
import { MessageSquare, Send } from "lucide-react"

export default function RecentMessages({ recentMessages }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <MessageSquare className="w-5 h-5" /> Recent Messages
        </h2>
        <button className="text-sm text-indigo-600">View All</button>
      </div>

      {/* Message List */}
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {recentMessages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03 }}
            className={`flex items-start gap-3 p-3 rounded-xl transition cursor-pointer ${
              msg.unread ? "bg-indigo-50" : "hover:bg-gray-50"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                msg.type === "client"
                  ? "bg-gradient-to-br from-blue-500 to-purple-600"
                  : "bg-gradient-to-br from-green-400 to-teal-500"
              }`}
            >
              {msg.avatar}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div
                  className={`text-sm font-medium ${
                    msg.unread ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {msg.sender}
                </div>
                <div className="text-xs text-gray-400">{msg.time}</div>
              </div>

              <div
                className={`text-sm truncate ${
                  msg.unread
                    ? "text-gray-700 font-medium"
                    : "text-gray-600"
                }`}
              >
                {msg.message}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compose Button */}
      <button className="w-full mt-4 py-2 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition flex items-center justify-center gap-2">
        <Send className="w-4 h-4" /> Compose
      </button>
    </div>
  )
}
