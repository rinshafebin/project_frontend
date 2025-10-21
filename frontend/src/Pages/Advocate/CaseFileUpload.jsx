import { Upload } from 'lucide-react';
import { useState } from 'react';

export default function CaseFileUpload({ caseTitle }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">{caseTitle} - Upload Documents</h3>

      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition">
        <Upload className="w-8 h-8 text-gray-600 mb-2" />
        <span className="text-gray-600">Click to upload or drag files here</span>
        <input type="file" multiple className="hidden" onChange={handleFileChange} />
      </label>

      {files.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Selected Files:</h4>
          <ul className="list-disc list-inside text-gray-700">
            {files.map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
