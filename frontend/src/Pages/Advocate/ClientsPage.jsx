import React, { useState } from "react";
import {
  Plus,
  Search,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Users,
  Calendar,
  MoreVertical,
} from "lucide-react";
import Sidebar from "../../Components/Layout/Advocate/Sidebar";
import Header from "../../Components/Layout/Advocate/Header";

export default function ClientsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Clients</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {filteredClients.length} total clients
                  </p>
                </div>
                <button className="px-4 py-2.5 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:opacity-90 transition flex items-center gap-2 font-medium shadow-sm">
                  <Plus className="w-4 h-4" />
                  Add Client
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search clients by name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  />
                </div>
              </div>

              {filteredClients.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredClients.map((client) => (
                    <div
                      key={client.id}
                      className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
                            {client.avatar}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">
                              {client.name}
                            </h3>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                client.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {client.status}
                            </span>
                          </div>
                        </div>
                        <button className="p-1.5 hover:bg-gray-50 rounded-lg transition">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>

                      <div className="space-y-3 mb-5">
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                          <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="truncate">{client.email}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                          <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span>{client.phone}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                          <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="font-medium text-gray-900">
                            {client.cases} Active Cases
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span>Joined {client.joinDate}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4 border-t border-gray-100">
                        <button className="flex-1 py-2 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white font-medium hover:opacity-90 transition text-sm">
                          View Profile
                        </button>
                        <button className="px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-12 text-center">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-medium">No clients found</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Try adjusting your search terms
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}