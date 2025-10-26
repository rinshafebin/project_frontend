import React from 'react';
import { FileText, Users, Calendar, FolderOpen, AlertCircle } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-black mb-6">Quick Actions</h2>
      <div className="space-y-3">
        <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2">
          <FileText className="w-5 h-5" /> New Case
        </button>
        <button className="w-full border-2 border-black text-black py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2">
          <Users className="w-5 h-5" /> Add Client
        </button>
        <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5" /> Schedule Hearing
        </button>
        <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2">
          <FolderOpen className="w-5 h-5" /> Upload Document
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-black mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-500" /> Urgent Tasks
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">Review contract for Kumar case</p>
              <p className="text-xs text-gray-500">Due today</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">Submit evidence documentation</p>
              <p className="text-xs text-gray-500">Due tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
