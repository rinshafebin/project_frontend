import React, { useState } from 'react';
import { 
  FileText, Folder, Calendar, Clock, StickyNote, Edit, Upload, Eye, Download, Target, ArrowLeft 
} from 'lucide-react';

const CaseDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const caseData = {
    id: 'C-2024-045',
    title: 'Property Dispute - Mumbai',
    client: 'Priya Sharma',
    type: 'Civil',
    status: 'Active',
    priority: 'High',
    filingDate: 'Dec 10, 2024',
    court: 'District Court, Mumbai',
    judge: 'Hon. Justice Ramesh Kumar',
    nextHearing: 'Jan 25, 2025',
    description:
      'This is a property dispute case involving ownership rights of a commercial property located in Andheri, Mumbai. The plaintiff claims rightful ownership based on registered sale deed while the defendant contests the validity of the transaction.',
  };

  const documents = [
    { id: 1, name: 'Sale Deed.pdf', type: 'PDF', size: '2.4 MB', uploadDate: 'Dec 10, 2024', category: 'Evidence' },
    { id: 2, name: 'Property Photos.zip', type: 'ZIP', size: '15.8 MB', uploadDate: 'Dec 12, 2024', category: 'Evidence' },
    { id: 3, name: 'Witness Statement.docx', type: 'DOCX', size: '156 KB', uploadDate: 'Dec 15, 2024', category: 'Testimony' },
    { id: 4, name: 'Court Order.pdf', type: 'PDF', size: '890 KB', uploadDate: 'Dec 20, 2024', category: 'Court Documents' },
  ];

  const timeline = [
    { date: 'Dec 20, 2024', event: 'Court order received', type: 'document', user: 'System' },
    { date: 'Dec 15, 2024', event: 'Witness statement uploaded', type: 'upload', user: 'Adv. Rajesh Kumar' },
    { date: 'Dec 12, 2024', event: 'Evidence photos submitted', type: 'upload', user: 'Client' },
    { date: 'Dec 10, 2024', event: 'Case filed', type: 'milestone', user: 'Adv. Rajesh Kumar' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FileText size={18} /> },
    { id: 'documents', label: 'Documents', icon: <Folder size={18} /> },
    { id: 'timeline', label: 'Timeline', icon: <Clock size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button className="text-black hover:underline mb-4 flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Cases
          </button>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-black">{caseData.title}</h1>
                <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full border border-green-300">
                  {caseData.status}
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full border border-red-300">
                  {caseData.priority}
                </span>
              </div>
              <p className="text-gray-600">{caseData.id}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <Edit size={16} /> Edit
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                <FileText size={16} /> Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium whitespace-nowrap flex items-center gap-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-black mb-4">Case Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  ['Client Name', caseData.client],
                  ['Case Type', caseData.type],
                  ['Filing Date', caseData.filingDate],
                  ['Court', caseData.court],
                  ['Judge', caseData.judge],
                  ['Next Hearing', caseData.nextHearing],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-sm text-gray-600">{label}</p>
                    <p className="text-black font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-black mb-4">Case Description</h2>
              <p className="text-black leading-relaxed">{caseData.description}</p>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-black">Case Documents</h2>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                <Upload size={16} /> Upload Document
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {['Document Name', 'Type', 'Size', 'Category', 'Upload Date', 'Actions'].map(header => (
                      <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {documents.map(doc => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-black">{doc.name}</td>
                      <td className="px-6 py-4 text-sm text-black">{doc.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{doc.size}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">{doc.category}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{doc.uploadDate}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-3">
                          <button className="flex items-center gap-1 text-sm text-black hover:underline">
                            <Eye size={14} /> View
                          </button>
                          <button className="flex items-center gap-1 text-sm text-black hover:underline">
                            <Download size={14} /> Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-black mb-6">Case Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                      {item.type === 'milestone' ? <Target size={18} /> : <Upload size={18} />}
                    </div>
                    {index < timeline.length - 1 && <div className="w-0.5 h-full bg-gray-300 mt-2"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-sm text-gray-600">{item.date}</p>
                    <p className="text-black font-medium mt-1">{item.event}</p>
                    <p className="text-sm text-gray-600 mt-1">by {item.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CaseDetail;
