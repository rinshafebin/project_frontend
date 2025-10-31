import React from "react";
import { Upload, Search, Filter, FileText, Eye, Download, Trash2 } from "lucide-react";

export default function DocumentsPage() {
  const documents = [
    { id: 1, name: "Case Brief - IP Dispute.pdf", type: "PDF", size: "2.4 MB", uploadDate: "2025-10-28", category: "Briefs" },
    { id: 2, name: "Client Agreement.docx", type: "DOCX", size: "156 KB", uploadDate: "2025-10-27", category: "Contracts" },
    { id: 3, name: "Evidence Photos.zip", type: "ZIP", size: "15.8 MB", uploadDate: "2025-10-26", category: "Evidence" },
    { id: 4, name: "Court Order.pdf", type: "PDF", size: "890 KB", uploadDate: "2025-10-25", category: "Court Orders" },
    { id: 5, name: "Witness Statement.pdf", type: "PDF", size: "1.2 MB", uploadDate: "2025-10-24", category: "Statements" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Documents</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-sm hover:shadow-lg transition flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload Document
        </button>
      </div>

      {/* Search + Filter */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Document List */}
        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-sm transition flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-inner">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{doc.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.category}</span>
                    <span>•</span>
                    <span>{doc.uploadDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IconButton icon={<Eye />} title="View" />
                <IconButton icon={<Download />} title="Download" />
                <IconButton icon={<Trash2 />} title="Delete" danger />
              </div>
            </div>
          ))}
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
