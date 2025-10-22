import React from 'react';

export const Textarea = ({ label, required, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-black mb-2">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <textarea
      {...props}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>
);