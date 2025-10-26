import React from 'react';
import { Users, Calendar, FileText, MessageSquare, MoreVertical } from 'lucide-react';

export default function ActiveCases({ activeCases }) {
  return (
    <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black">Active Cases</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
          View All <MoreVertical className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeCases.map(caseItem => (
          <div key={caseItem.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all hover:border-gray-300 cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {caseItem.caseNo}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    caseItem.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {caseItem.priority === 'high' ? 'High' : 'Medium'}
                  </span>
                </div>
                <h3 className="font-semibold text-black text-lg mb-1">{caseItem.title}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Users className="w-4 h-4" /> {caseItem.client}
                </p>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium text-gray-900">{caseItem.status}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium text-gray-900">{caseItem.category}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Next Hearing:</span>
                <span className="font-medium text-gray-900 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {caseItem.nextHearing}
                </span>
              </div>
            </div>

            <div className="flex gap-2 pt-3 border-t border-gray-200">
              <button className="flex-1 py-2 px-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                View Details
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <FileText className="w-4 h-4 text-gray-600" />
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageSquare className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
