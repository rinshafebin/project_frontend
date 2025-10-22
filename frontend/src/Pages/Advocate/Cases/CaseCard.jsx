import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as ViewIcon } from '../../assets/icons/view.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';

const getPriorityColor = (priority) => {
  switch(priority) {
    case 'High': return 'bg-red-100 text-red-800 border-red-300';
    case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'Low': return 'bg-green-100 text-green-800 border-green-300';
    default: return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

const getStatusColor = (status) => {
  switch(status) {
    case 'Active': return 'bg-green-100 text-green-800 border-green-300';
    case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'Closed': return 'bg-gray-100 text-gray-800 border-gray-300';
    default: return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

const CaseCard = ({ caseItem }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-600">{caseItem.id}</span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(caseItem.status)}`}>
              {caseItem.status}
            </span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(caseItem.priority)}`}>
              {caseItem.priority}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-black">{caseItem.title}</h3>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4 text-sm text-black">
        <p><strong>Client:</strong> {caseItem.client}</p>
        <p><strong>Type:</strong> {caseItem.type}</p>
        <p><strong>Court:</strong> {caseItem.court}</p>
        <p><strong>Filing Date:</strong> {caseItem.filingDate}</p>
        {caseItem.nextHearing !== '-' && <p><strong>Next Hearing:</strong> {caseItem.nextHearing}</p>}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-4 border-t border-gray-200">
        <button className="flex-1 px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-50 text-sm flex items-center justify-center gap-2">
          <ViewIcon className="w-4 h-4" />
          View
        </button>
        <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 flex items-center justify-center">
          <DownloadIcon className="w-4 h-4" />
        </button>
        <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 flex items-center justify-center">
          <EditIcon className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default CaseCard;