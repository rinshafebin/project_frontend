import React, { useState } from "react";
import { Upload, Search, Filter, FileText, Eye, Download, Trash2, File, MoreVertical } from "lucide-react";
import Sidebar from "../../Components/Layout/Advocate/Sidebar";
import Header from "../../Components/Layout/Advocate/Header";

export default function DocumentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    { id: 1, name: "Case Brief - IP Dispute.pdf", type: "PDF", size: "2.4 MB", uploadDate: "2025-10-28", category: "Briefs" },
    { id: 2, name: "Client Agreement.docx", type: "DOCX", size: "156 KB", uploadDate: "2025-10-27", category: "Contracts" },
    { id: 3, name: "Evidence Photos.zip", type: "ZIP", size: "15.8 MB", uploadDate: "2025-10-26", category: "Evidence" },
    { id: 4, name: "Court Order.pdf", type: "PDF", size: "890 KB", uploadDate: "2025-10-25", category: "Court Orders" },
    { id: 5, name: "Witness Statement.pdf", type: "PDF", size: "1.2 MB", uploadDate: "2025-10-24", category: "Statements" },
  ];

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
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
                  <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
                  <p className="text-sm text-gray-600 mt-1">{filteredDocuments.length} total documents</p>
                </div>
                <button className="px-4 py-2.5 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:opacity-90 transition flex items-center gap-2 font-medium shadow-sm">
                  <Upload className="w-4 h-4" />
                  Upload Document
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search documents by name or category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                    />
                  </div>
                  <button className="px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {filteredDocuments.length > 0 ? (
                  filteredDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-5 hover:shadow-md transition flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">{doc.name}</h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-1">
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium">{doc.type}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                            <span>•</span>
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium">{doc.category}</span>
                            <span>•</span>
                            <span>{doc.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <IconButton icon={<Eye className="w-4 h-4" />} title="View" />
                        <IconButton icon={<Download className="w-4 h-4" />} title="Download" />
                        <IconButton icon={<Trash2 className="w-4 h-4" />} title="Delete" danger />
                        <button className="p-2 hover:bg-gray-50 rounded-lg transition">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-12 text-center">
                    <File className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-medium">No documents found</p>
                    <p className="text-gray-400 text-sm mt-1">Try adjusting your search</p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function IconButton({ icon, title, danger }) {
  return (
    <button
      title={title}
      className={`p-2 rounded-lg transition ${
        danger
          ? "hover:bg-red-50 text-red-600"
          : "hover:bg-gray-100 text-gray-600"
      }`}
    >
      {icon}
    </button>
  );
}