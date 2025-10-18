import React from 'react';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <Settings className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-2">Theme</label>
          <select className="w-full border p-2 rounded-lg">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-2">Notifications</label>
          <input type="checkbox" defaultChecked className="mr-2" /> Enable Email Alerts
        </div>
      </div>
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Save Settings</button>
    </div>
  );
}
