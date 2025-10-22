import React, { useState } from 'react';

const ClientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const clients = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      activeCases: 2,
      totalCases: 3,
      joinDate: 'Jan 2024',
      lastContact: '2 hours ago',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Amit Patel',
      email: 'amit.patel@email.com',
      phone: '+91 98765 43211',
      activeCases: 1,
      totalCases: 2,
      joinDate: 'Dec 2023',
      lastContact: '1 day ago',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+91 98765 43212',
      activeCases: 1,
      totalCases: 1,
      joinDate: 'Dec 2024',
      lastContact: '3 days ago',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Rahul Verma',
      email: 'rahul.v@email.com',
      phone: '+91 98765 43213',
      activeCases: 2,
      totalCases: 4,
      joinDate: 'Nov 2023',
      lastContact: '1 week ago',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Neha Kapoor',
      email: 'neha.k@email.com',
      phone: '+91 98765 43214',
      activeCases: 0,
      totalCases: 1,
      joinDate: 'Nov 2024',
      lastContact: '2 weeks ago',
      status: 'Inactive'
    },
    {
      id: 6,
      name: 'Tech Solutions Ltd',
      email: 'contact@techsol.com',
      phone: '+91 98765 43215',
      activeCases: 1,
      totalCases: 1,
      joinDate: 'Nov 2024',
      lastContact: '5 days ago',
      status: 'Active'
    },
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-black">Clients</h1>
            <p className="text-gray-600 mt-1">Manage your client relationships</p>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
            <span>➕</span>
            <span>Add Client</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-bold text-black">{clients.length}</p>
            <p className="text-sm text-gray-600">Total Clients</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-bold text-green-600">{clients.filter(c => c.status === 'Active').length}</p>
            <p className="text-sm text-gray-600">Active Clients</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-bold text-black">{clients.reduce((sum, c) => sum + c.activeCases, 0)}</p>
            <p className="text-sm text-gray-600">Active Cases</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-2xl font-bold text-black">6</p>
            <p className="text-sm text-gray-600">New This Month</p>
          </div>
        </div>

        {/* Search and View Toggle */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search clients by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg ${viewMode === 'grid' ? 'bg-black text-white' : 'border border-gray-300 text-black hover:bg-gray-50'}`}
              >
                ⊞ Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg ${viewMode === 'list' ? 'bg-black text-white' : 'border border-gray-300 text-black hover:bg-gray-50'}`}
              >
                ☰ List
              </button>
            </div>
          </div>
        </div>

        {/* Rest of your component (Grid and List Views) */}
        {/* No change needed below — all same logic */}
      </div>
    </div>
  );
};

export default ClientList;
