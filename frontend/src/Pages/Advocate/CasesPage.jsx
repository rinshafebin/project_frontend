import React, { useState } from "react";
import { Plus, Search, Eye, Edit, FileText } from "lucide-react";

export default function CasesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const cases = [
    {
      id: 1,
      title: "Intellectual Property Dispute",
      caseNo: "IP/2025/001",
      client: "Innovate Inc",
      status: "In Progress",
      nextHearing: "2025-11-05",
      priority: "high",
      category: "IP Law",
    },
    {
      id: 2,
      title: "Employment Contract Case",
      caseNo: "EMP/2025/042",
      client: "Sarah Johnson",
      status: "Document Review",
      nextHearing: "2025-11-12",
      priority: "medium",
      category: "Labor Law",
    },
    {
      id: 3,
      title: "Real Estate Transaction",
      caseNo: "RE/2025/089",
      client: "Green Developers",
      status: "Negotiation",
      nextHearing: "2025-11-08",
      priority: "high",
      category: "Property Law",
    },
    {
      id: 4,
      title: "Corporate Merger Advisory",
      caseNo: "CORP/2025/023",
      client: "Tech Ventures Ltd",
      status: "Due Diligence",
      nextHearing: "2025-11-15",
      priority: "medium",
      category: "Corporate Law",
    },
    {
      id: 5,
      title: "Criminal Defense Case",
      caseNo: "CRIM/2025/067",
      client: "Michael Brown",
      status: "In Progress",
      nextHearing: "2025-11-10",
      priority: "high",
      category: "Criminal Law",
    },
    {
      id: 6,
      title: "Family Law Matter",
      caseNo: "FAM/2025/034",
      client: "Lisa Anderson",
      status: "Mediation",
      nextHearing: "2025-11-18",
      priority: "low",
      category: "Family Law",
    },
  ];

  // Filter + Search logic
  const filteredCases = cases.filter(
    (caseItem) =>
      (filterStatus === "all" || caseItem.status === filterStatus) &&
      (caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.caseNo.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">My Cases</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Case
        </button>
      </div>

      {/* Search + Filter */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Document Review">Document Review</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Due Diligence">Due Diligence</option>
            <option value="Mediation">Mediation</option>
          </select>
        </div>

        {/* Case List */}
        <div className="space-y-4">
          {filteredCases.length > 0 ? (
            filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="p-5 border border-gray-200 rounded-xl hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Case No: {caseItem.caseNo}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      caseItem.priority === "high"
                        ? "bg-red-100 text-red-700"
                        : caseItem.priority === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {caseItem.priority}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Client</p>
                    <p className="text-sm font-medium text-gray-800">
                      {caseItem.client}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="text-sm font-medium text-gray-800">
                      {caseItem.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Category</p>
                    <p className="text-sm font-medium text-gray-800">
                      {caseItem.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Next Hearing</p>
                    <p className="text-sm font-medium text-gray-800">
                      {caseItem.nextHearing}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition flex items-center gap-1">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    Documents
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-6">No cases found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
