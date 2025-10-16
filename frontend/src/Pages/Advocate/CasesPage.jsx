import React, { useState } from "react";
import Sidebar from "../../Components/Navbar";

export default function CasesPage() {
  const [activeTab, setActiveTab] = useState("All");

  const cases = [
    {
      title: "Property Dispute - Sharma vs Kumar",
      hearing: "Oct 15, 2025",
      client: "Rajesh Sharma",
      court: "District Court",
      status: "Active",
    },
    {
      title: "Divorce Petition - Verma Family",
      hearing: "Oct 18, 2025",
      client: "Priya Verma",
      court: "Family Court",
      status: "Pending",
    },
    {
      title: "Criminal Defense - State vs Mehta",
      hearing: "Oct 20, 2025",
      client: "Anil Mehta",
      court: "Sessions Court",
      status: "Active",
    },
    {
      title: "Contract Dispute - Tech Corp",
      hearing: "Oct 25, 2025",
      client: "Tech Corp",
      court: "Commercial Court",
      status: "Closed",
    },
  ];

  const statusColors = {
    Active: "bg-green-700 text-white",
    Pending: "bg-yellow-100 text-yellow-800",
    Closed: "bg-gray-200 text-gray-700",
  };

  const filteredCases =
    activeTab === "All"
      ? cases
      : cases.filter((c) => c.status === activeTab);

  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Cases</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-300">
          {["All", "Active", "Pending", "Closed"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium border-b-2 transition-all ${
                activeTab === tab
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black hover:border-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by client or case title..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
          />
        </div>

        {/* Cases Table */}
        <div className="grid grid-cols-1 gap-4">
          {filteredCases.length === 0 ? (
            <div className="p-6 bg-white rounded-xl border border-gray-200 text-center text-gray-500">
              No cases found.
            </div>
          ) : (
            filteredCases.map((caseItem, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-all"
              >
                <div>
                  <h3 className="font-semibold">{caseItem.title}</h3>
                  <div className="text-sm text-gray-500 flex gap-4">
                    <span>📅 Hearing: {caseItem.hearing}</span>
                    <span>👤 Client: {caseItem.client}</span>
                    <span>📍 {caseItem.court}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[caseItem.status]}`}
                  >
                    {caseItem.status}
                  </span>
                  <button className="px-2 py-1 border rounded-lg hover:bg-gray-100">
                    👁️
                  </button>
                  <button className="px-2 py-1 border rounded-lg hover:bg-gray-100">
                    ✏️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
