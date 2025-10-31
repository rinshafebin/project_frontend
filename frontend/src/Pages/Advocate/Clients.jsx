import React, { useState } from "react";
import {
  Plus,
  Search,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
} from "lucide-react";

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const clients = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      phone: "+91 98765 43210",
      cases: 3,
      status: "Active",
      avatar: "RK",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43211",
      cases: 2,
      status: "Active",
      avatar: "PS",
      joinDate: "2024-03-20",
    },
    {
      id: 3,
      name: "Tech Solutions Ltd",
      email: "contact@techsolutions.com",
      phone: "+91 98765 43212",
      cases: 5,
      status: "Active",
      avatar: "TS",
      joinDate: "2023-11-10",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+91 98765 43213",
      cases: 1,
      status: "Active",
      avatar: "SJ",
      joinDate: "2024-08-05",
    },
    {
      id: 5,
      name: "Green Developers",
      email: "info@greendev.com",
      phone: "+91 98765 43214",
      cases: 4,
      status: "Active",
      avatar: "GD",
      joinDate: "2023-09-12",
    },
    {
      id: 6,
      name: "Michael Brown",
      email: "michael.b@email.com",
      phone: "+91 98765 43215",
      cases: 1,
      status: "Inactive",
      avatar: "MB",
      joinDate: "2024-02-28",
    },
  ];

  // Filter clients based on search term
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Clients</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Client
        </button>
      </div>

      {/* Search bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <div
                key={client.id}
                className="p-5 border border-gray-200 rounded-xl hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {client.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {client.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          client.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {client.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{client.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{client.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    <span>{client.cases} Active Cases</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition">
                    View Profile
                  </button>
                  <button className="px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full py-6">
              No clients found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
