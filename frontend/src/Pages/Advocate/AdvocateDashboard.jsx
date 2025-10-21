// src/AdvocateDashboard.jsx
import React from 'react';

export default function AdvocateDashboard() {
  const navItems = [
    { icon: '', label: 'Dashboard' },
    { icon: '', label: 'Cases' },
    { icon: '', label: 'Clients' },
    { icon: '', label: 'Calendar' },
    { icon: '', label: 'Messages' },
    { icon: '', label: 'Documents' },
    { icon: '', label: 'Team' },
    { icon: '', label: 'Analytics' },
    { icon: '', label: 'Settings' },
  ];

  const stats = [
    { label: 'Active Cases', value: 24, change: '+3 from last month' },
    { label: 'Pending Cases', value: 8, change: '2 require attention' },
    { label: 'Closed Cases', value: 156, change: '89% success rate' },
    { label: 'Total Clients', value: 87, change: '+5 this month' },
  ];

  const recentCases = [
    { title: 'Property Dispute - Sharma vs Kumar', client: 'Rajesh Sharma', nextHearing: 'Oct 15, 2025', court: 'District Court', status: 'active' },
    { title: 'Divorce Petition - Verma Family', client: 'Priya Verma', nextHearing: 'Oct 18, 2025', court: 'Family Court', status: 'pending' },
    { title: 'Criminal Defense - State vs Mehta', client: 'Anil Mehta', nextHearing: 'Oct 20, 2025', court: 'Sessions Court', status: 'active' },
  ];

  const upcomingHearings = [
    { title: 'Property Dispute - Sharma vs Kumar', nextHearing: 'Oct 15, 2025 - 10:00 AM', court: 'District Court, Room 3' },
    { title: 'Divorce Petition - Verma Family', nextHearing: 'Oct 18, 2025 - 2:30 PM', court: 'Family Court, Room 1' },
  ];

  const recentMessages = [
    { name: 'Rajesh Sharma', message: 'Please review the latest documents I uploaded...', time: '2 hours ago' },
    { name: 'Priya Verma', message: 'When is the next hearing scheduled?', time: '5 hours ago' },
  ];

  const statusClasses = {
    active: 'bg-black text-white',
    pending: 'bg-gray-100 text-gray-700',
    closed: 'bg-gray-200 text-gray-500',
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col justify-between fixed h-screen">
        <div>
          <div className="text-2xl font-bold mb-10">CaseBridge</div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 cursor-pointer rounded hover:bg-gray-100 ${i===0 ? 'bg-gray-100 font-medium' : ''}`}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 p-3 border-t">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">AK</div>
          <div>
            <h4 className="text-sm font-semibold">Adv. Kumar</h4>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">🔔 Notifications</button>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">+ New Case</button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border hover:border-black transition">
              <div className="text-xs text-gray-500 uppercase">{stat.label}</div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-xs text-gray-600 mt-1">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Recent Cases */}
        <div className="bg-white p-6 rounded-lg border mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Recent Cases</h2>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">View All</button>
          </div>
          <div className="flex flex-col gap-4">
            {recentCases.map((c, i) => (
              <div key={i} className="flex justify-between items-center p-4 border rounded hover:bg-gray-50 hover:border-black transition">
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <div className="text-xs text-gray-500 flex flex-wrap gap-3 mt-1">
                    <span>📅 Next Hearing: {c.nextHearing}</span>
                    <span>👤 Client: {c.client}</span>
                    <span>📍 {c.court}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[c.status]}`}>{c.status}</span>
                  <button className="px-2 py-1 border rounded hover:bg-gray-100">view</button>
                  <button className="px-2 py-1 border rounded hover:bg-gray-100">edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Hearings */}
        <div className="bg-white p-6 rounded-lg border mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Upcoming Hearings</h2>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">View Calendar</button>
          </div>
          <div className="flex flex-col gap-4">
            {upcomingHearings.map((h, i) => (
              <div key={i} className="flex justify-between items-center p-4 border rounded hover:bg-gray-50 hover:border-black transition">
                <div>
                  <h3 className="font-semibold">{h.title}</h3>
                  <div className="text-xs text-gray-500 flex flex-wrap gap-3 mt-1">
                    <span>⏰ {h.nextHearing}</span>
                    <span>📍 {h.court}</span>
                  </div>
                </div>
                <button className="px-4 py-2 border rounded hover:bg-gray-100">Set Reminder</button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white p-6 rounded-lg border mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Recent Messages</h2>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">View All</button>
          </div>
          <div className="flex flex-col gap-4">
            {recentMessages.map((m, i) => (
              <div key={i} className="flex justify-between items-center p-4 border rounded hover:bg-gray-50 hover:border-black transition">
                <div>
                  <h3 className="font-semibold">{m.name}</h3>
                  <div className="text-xs text-gray-500 mt-1">{m.message}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-gray-500">{m.time}</span>
                  <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Reply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
