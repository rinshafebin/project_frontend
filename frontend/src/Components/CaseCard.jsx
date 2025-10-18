import React from 'react';
import { Calendar, FileText } from 'lucide-react';

export default function CaseCard({ caseData }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">{caseData.title}</h3>
          <p className="text-sm text-gray-600 mt-1">Client: {caseData.client}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          caseData.status === 'Active' ? 'bg-green-100 text-green-700' : 
          caseData.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
          'bg-gray-100 text-gray-700'
        }`}>
          {caseData.status}
        </span>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{caseData.nextHearing}</span>
        </div>
        <div className="flex items-center gap-1">
          <FileText size={16} />
          <span>{caseData.type}</span>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">
          View Details
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
          Edit
        </button>
      </div>
    </div>
  );
}
