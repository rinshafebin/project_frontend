import React from "react"
import { motion } from "framer-motion"

export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.06 }}
          className="relative bg-gradient-to-tr from-white/60 to-white/30 rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition"
        >
          <div className="flex items-start justify-between">
            {/* Icon Section */}
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.color} text-white shadow-inner`}
            >
              <stat.icon className="w-6 h-6" />
            </div>

            {/* Change Indicator */}
            <div className="text-sm text-gray-400">{stat.change}</div>
          </div>

          {/* Value + Label */}
          <div className="mt-4">
            <div className="text-3xl font-bold text-gray-900">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
