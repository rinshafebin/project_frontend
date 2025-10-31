import React from 'react'
import { FileText, Upload } from 'lucide-react'

export default function Documents() {
  const docs = [
    { id: 1, title: 'Kumar Case Petition.pdf', date: '2025-10-25' },
    { id: 2, title: 'Sharma Property Evidence.zip', date: '2025-10-26' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Documents</h1>

      <div className="mb-4">
        <button className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl flex items-center gap-2 hover:scale-[1.02] transition">
          <Upload className="w-4 h-4" /> Upload New Document
        </button>
      </div>

      <div className="bg-white/80 rounded-2xl shadow-sm border border-gray-100 p-5">
        {docs.map(doc => (
          <div key={doc.id} className="flex items-center justify-between py-3 border-b last:border-none">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800">{doc.title}</span>
            </div>
            <span className="text-sm text-gray-500">{doc.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
