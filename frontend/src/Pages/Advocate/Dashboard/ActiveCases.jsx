// ActiveCases.jsx
import React from 'react';
import { Eye, Edit, Briefcase, Plus } from 'lucide-react';

export default function ActiveCases() {
  // Local JSON data for this component
  const cases = [
    { id: 1, title: 'State vs. Kumar', client: 'Raj Kumar', status: 'Active', nextHearing: '2025-10-25', type: 'Criminal', priority: 'High' },
    { id: 2, title: 'Property Dispute - Sharma', client: 'Anjali Sharma', status: 'Pending', nextHearing: '2025-11-02', type: 'Civil', priority: 'Medium' },
    { id: 3, title: 'Divorce Proceedings', client: 'Priya Mehta', status: 'Active', nextHearing: '2025-10-28', type: 'Family', priority: 'Low' },
    { id: 4, title: 'Contract Breach - Tech Corp', client: 'TechCorp Pvt Ltd', status: 'Active', nextHearing: '2025-10-30', type: 'Corporate', priority: 'High' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Closed': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-blue-100 text-blue-800';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'text-red-600',
      'Medium': 'text-yellow-600',
      'Low': 'text-green-600'
    };
    return colors[priority] || 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-green-600" />
          Active Cases
        </h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <Plus className="w-4 h-4" />
          New Case
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Case Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Next Hearing</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cases.map((caseItem) => (
              <tr key={caseItem.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{caseItem.title}</td>
                <td className="px-6 py-4 text-gray-600">{caseItem.client}</td>
                <td className="px-6 py-4 text-gray-600">{caseItem.type}</td>
                <td className="px-6 py-4">
                  <span className={'px-3 py-1 rounded-full text-xs font-medium ' + getStatusColor(caseItem.status)}>
                    {caseItem.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={'font-medium ' + getPriorityColor(caseItem.priority)}>
                    {caseItem.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{caseItem.nextHearing}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <Edit className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
