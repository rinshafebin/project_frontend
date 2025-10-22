import React, { useState } from 'react';

const ClientDetail = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const clientData = {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 43210',
    address: '123 Marine Drive, Mumbai, Maharashtra 400002',
    joinDate: 'Jan 15, 2024',
    status: 'Active',
    occupation: 'Business Owner',
    company: 'Sharma Enterprises',
    emergencyContact: '+91 98765 43220',
    notes: 'Prefers morning appointments. Responsive to emails.'
  };

  const cases = [
    { id: 'C-2024-045', title: 'Property Dispute', status: 'Active', type: 'Civil', startDate: 'Dec 10, 2024', nextHearing: 'Jan 25, 2025' },
    { id: 'C-2024-030', title: 'Contract Breach', status: 'Active', type: 'Commercial', startDate: 'Nov 5, 2024', nextHearing: 'Jan 30, 2025' },
    { id: 'C-2023-156', title: 'Business Partnership', status: 'Closed', type: 'Commercial', startDate: 'Aug 10, 2023', nextHearing: '-' },
  ];

  const messages = [
    { date: '2 hours ago', sender: 'You', message: 'I have reviewed the documents. We can proceed with the hearing.' },
    { date: '5 hours ago', sender: 'Priya Sharma', message: 'Thank you for the update. I have sent the additional documents.' },
    { date: '1 day ago', sender: 'You', message: 'The hearing has been scheduled for Jan 25, 2025 at 10:30 AM.' },
    { date: '2 days ago', sender: 'Priya Sharma', message: 'Can we schedule a meeting to discuss the case strategy?' },
  ];

  const documents = [
    { name: 'ID Proof.pdf', uploadDate: 'Jan 15, 2024', size: '1.2 MB', type: 'Identity' },
    { name: 'Address Proof.pdf', uploadDate: 'Jan 15, 2024', size: '890 KB', type: 'Identity' },
    { name: 'Authorization Letter.pdf', uploadDate: 'Dec 10, 2024', size: '456 KB', type: 'Legal' },
  ];

  const payments = [
    { date: 'Dec 15, 2024', amount: '₹50,000', description: 'Case Filing Fee - Property Dispute', status: 'Paid', method: 'Bank Transfer' },
    { date: 'Nov 10, 2024', amount: '₹25,000', description: 'Consultation Fee - Contract Breach', status: 'Paid', method: 'UPI' },
    { date: 'Jan 20, 2025', amount: '₹30,000', description: 'Next Hearing Fee', status: 'Pending', method: '-' },
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'cases', label: 'Cases', icon: '📁' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'payments', label: 'Payments', icon: '💳' },
  ];

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button className="text-black hover:underline mb-4 flex items-center gap-2">
            <span>←</span>
            <span>Back to Clients</span>
          </button>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl">👤</div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-black">{clientData.name}</h1>
                    <p className="text-gray-600 mt-1">{clientData.occupation} at {clientData.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {clientData.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span>📧</span>
                    <span className="text-black">{clientData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>📱</span>
                    <span className="text-black">{clientData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>📍</span>
                    <span className="text-black">{clientData.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>📅</span>
                    <span className="text-black">Client since {clientData.joinDate}</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">💬 Send Message</button>
                  <button className="px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-50">📞 Call</button>
                  <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50">✏️ Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-bold text-black">{cases.length}</p>
            <p className="text-sm text-gray-600">Total Cases</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-bold text-green-600">{cases.filter(c => c.status === 'Active').length}</p>
            <p className="text-sm text-gray-600">Active Cases</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-bold text-black">{documents.length}</p>
            <p className="text-sm text-gray-600">Documents</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-bold text-black">₹1.05L</p>
            <p className="text-sm text-gray-600">Total Paid</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {/* Profile tab */}
          {activeTab === 'profile' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-black mb-4">Personal Information</h2>
                <div className="space-y-3">
                  <div><p className="text-sm text-gray-600">Full Name</p><p className="text-black font-medium">{clientData.name}</p></div>
                  <div><p className="text-sm text-gray-600">Email Address</p><p className="text-black font-medium">{clientData.email}</p></div>
                  <div><p className="text-sm text-gray-600">Phone Number</p><p className="text-black font-medium">{clientData.phone}</p></div>
                  <div><p className="text-sm text-gray-600">Emergency Contact</p><p className="text-black font-medium">{clientData.emergencyContact}</p></div>
                  <div><p className="text-sm text-gray-600">Address</p><p className="text-black font-medium">{clientData.address}</p></div>
                </div>
              </div>
              {/* Professional Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-black mb-4">Professional Information</h2>
                <div className="space-y-3">
                  <div><p className="text-sm text-gray-600">Occupation</p><p className="text-black font-medium">{clientData.occupation}</p></div>
                  <div><p className="text-sm text-gray-600">Company</p><p className="text-black font-medium">{clientData.company}</p></div>
                  <div><p className="text-sm text-gray-600">Client Since</p><p className="text-black font-medium">{clientData.joinDate}</p></div>
                  <div><p className="text-sm text-gray-600">Status</p><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">{clientData.status}</span></div>
                </div>
              </div>
              {/* Notes */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 lg:col-span-2">
                <h2 className="text-xl font-semibold text-black mb-4">Notes</h2>
                <p className="text-black">{clientData.notes}</p>
                <button className="mt-4 px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-50">Edit Notes</button>
              </div>
            </div>
          )}

          {/* Cases tab */}
          {activeTab === 'cases' && (
            <div className="space-y-4">
              {cases.map(c => (
                <div key={c.id} className="bg-white border border-gray-200 rounded-lg p-6 flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-black">{c.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${c.status==='Active'?'bg-green-100 text-green-800':'bg-gray-100 text-gray-800'}`}>{c.status}</span>
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">{c.type}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                      <div><p className="text-sm text-gray-600">Case ID</p><p className="text-black font-medium">{c.id}</p></div>
                      <div><p className="text-sm text-gray-600">Start Date</p><p className="text-black font-medium">{c.startDate}</p></div>
                      <div><p className="text-sm text-gray-600">Next Hearing</p><p className="text-black font-medium">{c.nextHearing}</p></div>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-50">View Details</button>
                </div>
              ))}
            </div>
          )}

          {/* Messages tab */}
          {activeTab === 'messages' && (
            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-6 border-b border-gray-200"><h2 className="text-xl font-semibold text-black">Message History</h2></div>
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                {messages.map((msg,i)=>(
                  <div key={i} className={`flex ${msg.sender==='You'?'justify-end':'justify-start'}`}>
                    <div className={`max-w-md ${msg.sender==='You'?'bg-black text-white':'bg-gray-100 text-black'} rounded-lg p-4`}>
                      <p className="text-sm font-medium mb-1">{msg.sender}</p>
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs mt-2 opacity-70">{msg.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-gray-200 flex gap-2">
                <input type="text" placeholder="Type your message..." className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"/>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Send</button>
              </div>
            </div>
          )}

          {/* Documents tab */}
          {activeTab === 'documents' && (
            <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Document Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Upload Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {documents.map((d,i)=>(
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-black font-medium">{d.name}</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">{d.type}</span></td>
                      <td className="px-6 py-4 text-sm text-gray-600">{d.size}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{d.uploadDate}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="text-sm text-black hover:underline">View</button>
                        <button className="text-sm text-black hover:underline">Download</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Payments tab */}
          {activeTab === 'payments' && (
            <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {payments.map((p,i)=>(
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-black">{p.date}</td>
                      <td className="px-6 py-4 text-sm text-black">{p.description}</td>
                      <td className="px-6 py-4 text-sm font-medium text-black">{p.amount}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{p.method}</td>
                      <td className="px-6 py-4"><span className={`px-2 py-1 text-xs font-medium rounded-full ${p.status==='Paid'?'bg-green-100 text-green-800':'bg-yellow-100 text-yellow-800'}`}>{p.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
