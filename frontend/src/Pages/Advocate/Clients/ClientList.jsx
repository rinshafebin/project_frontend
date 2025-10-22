import React, { useState, useMemo } from "react";

// Subcomponents
const StatsCard = ({ title, value, color }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4">
    <p className={`text-2xl font-bold ${color || 'text-black'}`}>{value}</p>
    <p className="text-sm text-gray-600">{title}</p>
  </div>
);

const SearchBar = ({ searchTerm, setSearchTerm, viewMode, setViewMode }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex-1 w-full md:w-auto relative">
        <input
          type="text"
          placeholder="Search clients by name, email, or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setViewMode("grid")}
          className={`px-4 py-2 rounded-lg ${viewMode === "grid" ? "bg-black text-white" : "border border-gray-300 text-black hover:bg-gray-50"}`}
        >
          ⊞ Grid
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`px-4 py-2 rounded-lg ${viewMode === "list" ? "bg-black text-white" : "border border-gray-300 text-black hover:bg-gray-50"}`}
        >
          ☰ List
        </button>
      </div>
    </div>
  </div>
);

const ClientCard = ({ client }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">👤</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-black">{client.name}</h3>
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1 ${client.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
          {client.status}
        </span>
      </div>
    </div>

    <div className="space-y-2 mb-4">
      <p className="text-sm text-black flex items-center gap-2">📧 <span className="truncate">{client.email}</span></p>
      <p className="text-sm text-black flex items-center gap-2">📱 {client.phone}</p>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200">
      <div>
        <p className="text-xl font-bold text-black">{client.activeCases}</p>
        <p className="text-xs text-gray-600">Active Cases</p>
      </div>
      <div>
        <p className="text-xl font-bold text-black">{client.totalCases}</p>
        <p className="text-xs text-gray-600">Total Cases</p>
      </div>
    </div>

    <div className="text-xs text-gray-600 mb-4">
      <p>Client since {client.joinDate}</p>
      <p>Last contact: {client.lastContact}</p>
    </div>

    <div className="flex gap-2">
      <button className="flex-1 px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm">View Profile</button>
      <button className="px-3 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50">💬</button>
      <button className="px-3 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50">📞</button>
    </div>
  </div>
);

const ClientTableRow = ({ client }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">👤</div>
        <div>
          <p className="text-sm font-medium text-black">{client.name}</p>
          <p className="text-xs text-gray-600">{client.joinDate}</p>
        </div>
      </div>
    </td>
    <td className="px-6 py-4">
      <p className="text-sm text-black">{client.email}</p>
      <p className="text-xs text-gray-600">{client.phone}</p>
    </td>
    <td className="px-6 py-4">{client.activeCases}</td>
    <td className="px-6 py-4">{client.totalCases}</td>
    <td className="px-6 py-4">
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${client.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
        {client.status}
      </span>
    </td>
    <td className="px-6 py-4">{client.lastContact}</td>
    <td className="px-6 py-4">
      <div className="flex gap-2">
        <button className="text-sm text-black hover:underline">View</button>
        <button className="text-sm text-black hover:underline">Message</button>
      </div>
    </td>
  </tr>
);

const ClientList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const clients = useMemo(() => [
    { id: 1, name: "Priya Sharma", email: "priya.sharma@email.com", phone: "+91 98765 43210", activeCases: 2, totalCases: 3, joinDate: "Jan 2024", lastContact: "2 hours ago", status: "Active" },
    { id: 2, name: "Amit Patel", email: "amit.patel@email.com", phone: "+91 98765 43211", activeCases: 1, totalCases: 2, joinDate: "Dec 2023", lastContact: "1 day ago", status: "Active" },
    { id: 3, name: "Sarah Johnson", email: "sarah.j@email.com", phone: "+91 98765 43212", activeCases: 1, totalCases: 1, joinDate: "Dec 2024", lastContact: "3 days ago", status: "Active" },
    { id: 4, name: "Rahul Verma", email: "rahul.v@email.com", phone: "+91 98765 43213", activeCases: 2, totalCases: 4, joinDate: "Nov 2023", lastContact: "1 week ago", status: "Active" },
    { id: 5, name: "Neha Kapoor", email: "neha.k@email.com", phone: "+91 98765 43214", activeCases: 0, totalCases: 1, joinDate: "Nov 2024", lastContact: "2 weeks ago", status: "Inactive" },
    { id: 6, name: "Tech Solutions Ltd", email: "contact@techsol.com", phone: "+91 98765 43215", activeCases: 1, totalCases: 1, joinDate: "Nov 2024", lastContact: "5 days ago", status: "Active" }
  ], []);

  const filteredClients = useMemo(() => 
    clients.filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm)
    )
  , [clients, searchTerm]);

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
            ➕ Add Client
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <StatsCard title="Total Clients" value={clients.length} />
          <StatsCard title="Active Clients" value={clients.filter(c => c.status === "Active").length} color="text-green-600" />
          <StatsCard title="Active Cases" value={clients.reduce((sum, c) => sum + c.activeCases, 0)} />
          <StatsCard title="New This Month" value={6} />
        </div>

        {/* Search & View Toggle */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} viewMode={viewMode} setViewMode={setViewMode} />

        {/* Client Views */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map(client => <ClientCard key={client.id} client={client} />)}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Active Cases</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Total Cases</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Last Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredClients.map(client => <ClientTableRow key={client.id} client={client} />)}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No clients found</p>
            <p className="text-sm text-gray-500 mt-2">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientList;
