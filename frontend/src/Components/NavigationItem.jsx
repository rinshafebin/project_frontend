import React from 'react';

export default function NavigationItem({ icon: Icon, label, tab, activeTab, setActiveTab, badge }) {
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
        activeTab === tab 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={20} />
        <span className="font-medium">{label}</span>
      </div>
      {badge && (
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}
