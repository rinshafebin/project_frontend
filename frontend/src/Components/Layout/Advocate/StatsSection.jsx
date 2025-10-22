import React from 'react';
import { Briefcase, Clock, CheckCircle, Users } from 'lucide-react';

export default function StatsSection() {
  // Local JSON data inside the component
  const stats = [
    { label: 'Active Cases', value: 24, icon: Briefcase, color: 'bg-blue-500', change: '+3' },
    { label: 'Pending Cases', value: 8, icon: Clock, color: 'bg-yellow-500', change: '-2' },
    { label: 'Closed Cases', value: 156, icon: CheckCircle, color: 'bg-green-500', change: '+12' },
    { label: 'Clients', value: 89, icon: Users, color: 'bg-purple-500', change: '+5' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change} this month</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
