import React, { useState } from "react";
import { Users, Mail, Phone, Plus, MoreVertical, Briefcase } from "lucide-react";
import Sidebar from "../../../Components/Layout/Advocate/Sidebar";
import Header from "../../../Components/Layout/Advocate/Header";

export default function TeamPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const members = [
    { 
      id: 1, 
      name: "Amit Verma", 
      role: "Junior Advocate", 
      email: "amit@legalpro.com",
      phone: "+91 98765 43216",
      avatar: "AV",
      cases: 12,
      status: "Active"
    },
    { 
      id: 2, 
      name: "Neha Singh", 
      role: "Paralegal Assistant", 
      email: "neha@legalpro.com",
      phone: "+91 98765 43217",
      avatar: "NS",
      cases: 8,
      status: "Active"
    },
    { 
      id: 3, 
      name: "John Doe", 
      role: "Intern", 
      email: "john@legalpro.com",
      phone: "+91 98765 43218",
      avatar: "JD",
      cases: 3,
      status: "Active"
    },
    { 
      id: 4, 
      name: "Priya Mehta", 
      role: "Senior Associate", 
      email: "priya@legalpro.com",
      phone: "+91 98765 43219",
      avatar: "PM",
      cases: 18,
      status: "Active"
    },
    { 
      id: 5, 
      name: "Rahul Kapoor", 
      role: "Legal Researcher", 
      email: "rahul@legalpro.com",
      phone: "+91 98765 43220",
      avatar: "RK",
      cases: 6,
      status: "On Leave"
    },
    { 
      id: 6, 
      name: "Sneha Patel", 
      role: "Document Specialist", 
      email: "sneha@legalpro.com",
      phone: "+91 98765 43221",
      avatar: "SP",
      cases: 5,
      status: "Active"
    },
  ];

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
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Team Members
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{members.length} team members</p>
                </div>
                <button className="px-4 py-2.5 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:opacity-90 transition flex items-center gap-2 font-medium shadow-sm">
                  <Plus className="w-4 h-4" />
                  Add Member
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
                          {member.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {member.name}
                          </h3>
                          <p className="text-xs text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <button className="p-1.5 hover:bg-gray-50 rounded-lg transition">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="font-medium text-gray-900">{member.cases} Active Cases</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          member.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {member.status}
                      </span>
                      <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}