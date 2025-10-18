import React from 'react';
import { FileText } from 'lucide-react';

export default function DocumentsPage() {
  return (
    <div className="text-center py-20">
      <FileText size={48} className="mx-auto text-blue-600 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800">Documents</h2>
      <p className="text-gray-600 mt-2">Upload, manage, and share your legal documents here.</p>
    </div>
  );
}
