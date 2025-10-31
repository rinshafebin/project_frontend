import React from "react"
import { FileText, Users, Calendar, FolderOpen, AlertCircle } from "lucide-react"

export default function QuickActions() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="col-span-2 py-3 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white font-medium shadow hover:scale-[1.01] transition transform flex items-center justify-center gap-3">
          <FileText className="w-4 h-4" /> New Case
        </button>

        <button className="py-3 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:shadow-sm transition">
          <Users className="w-4 h-4 text-gray-700" /> Add Client
        </button>

        <button className="py-3 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:shadow-sm transition">
          <Calendar className="w-4 h-4 text-gray-700" /> Schedule
        </button>

        <button className="py-3 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:shadow-sm transition">
          <FolderOpen className="w-4 h-4 text-gray-700" /> Upload
        </button>
      </div>

      {/* Urgent Tasks */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-500" /> Urgent Tasks
        </h3>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-2" />
            <div>
              <div className="text-sm text-gray-700">Review contract for Kumar case</div>
              <div className="text-xs text-gray-400">Due today</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-2" />
            <div>
              <div className="text-sm text-gray-700">Submit evidence documentation</div>
              <div className="text-xs text-gray-400">Due tomorrow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
