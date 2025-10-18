import React from 'react';
import { Plus, Briefcase, CheckCircle, Clock, Users, Calendar, AlertCircle } from 'lucide-react';
import StatCard from '../components/StatCard';
import CaseCard from '../components/CaseCard';

export default function DashboardPage({ cases = [], notifications = [], messages = [], stats = {} }) {
  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard icon={Briefcase} label="Total Cases" value={stats.totalCases || 0} color="bg-blue-600" trend="8" />
        <StatCard icon={CheckCircle} label="Active Cases" value={stats.activeCases || 0} color="bg-green-600" />
        <StatCard icon={Clock} label="Pending Cases" value={stats.pendingCases || 0} color="bg-yellow-600" />
        <StatCard icon={Users} label="Total Clients" value={stats.clients || 0} color="bg-purple-600" trend="12" />
        <StatCard icon={Calendar} label="Hearings This Week" value={stats.hearingsThisWeek || 0} color="bg-red-600" />
        <StatCard icon={AlertCircle} label="Closed Cases" value={stats.closedCases || 0} color="bg-gray-600" />
      </div>

      {/* Recent Cases */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Cases</h2>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus size={16} /> Add Case
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.slice(0, 3).map((caseData) => (
            <CaseCard key={caseData.id} caseData={caseData} />
          ))}
        </div>
      </section>

      {/* Notifications */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
        <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
          {notifications.map((note, i) => (
            <div key={i} className="flex justify-between border-b last:border-none pb-2">
              <span>{note.message}</span>
              <span className="text-gray-500 text-sm">{note.time}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
