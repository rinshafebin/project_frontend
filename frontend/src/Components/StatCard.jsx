import React from 'react';

export default function StatCard({ icon: Icon, label, value, color, trend }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        {trend && <span className="text-green-600 text-sm font-medium">+{trend}%</span>}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </div>
  );
}
