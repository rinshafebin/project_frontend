import React from "react";

const ClientDashboard = () => {
  const stats = [
    { label: "Active Cases", value: 2 },
    { label: "Total Cases", value: 5 },
    { label: "Unread Messages", value: 3 },
    { label: "Next Hearing", value: 5, unit: "Days Away" },
  ];

  const myCases = [
    {
      title: "Property Dispute - Sharma vs Kumar",
      advocate: "Rajesh Kumar",
      date: "Oct 15, 2025",
      court: "District Court",
      status: "Active",
    },
    {
      title: "Contract Dispute - Business Agreement",
      advocate: "Priya Mehta",
      date: "Oct 22, 2025",
      court: "Civil Court",
      status: "Pending",
    },
  ];

  const myAdvocates = [
    {
      initials: "RK",
      name: "Adv. Rajesh Kumar",
      specialization: "Property Law, Civil Law",
      experience: "12 Years",
      barId: "MH/2012/45678",
      location: "Mumbai, Maharashtra",
    },
    {
      initials: "PM",
      name: "Adv. Priya Mehta",
      specialization: "Corporate Law, Contract Law",
      experience: "8 Years",
      barId: "MH/2017/23456",
      location: "Mumbai, Maharashtra",
    },
  ];

  const statusColor = (status) =>
    status === "Active" ? "bg-black text-white" : "bg-gray-100 text-gray-600";

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="text-2xl font-bold px-6 py-8">CaseBridge</div>
        <nav className="flex-1">
          {[
            { icon: "", label: "Dashboard" },
            { icon: "", label: "Find Advocate" },
            { icon: "", label: "My Cases" },
            { icon: "", label: "Documents" },
            { icon: "", label: "Messages" },
            { icon: "", label: "Calendar" },
            { icon: "", label: "Payments" },
            { icon: "", label: "Settings" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-6 py-3 cursor-pointer text-gray-600 text-sm transition ${
                i === 0 ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
              RS
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-medium">Rajesh Sharma</h4>
              <p className="text-xs text-gray-500">View Profile</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome back, Rajesh</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              🔔 Notifications
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              + New Case
            </button>
          </div>
        </div>

        {/* Alert */}
        <div className="bg-white border-l-4 border-black p-4 rounded-md shadow mb-8">
          <div className="font-semibold mb-1">⚠️ Upcoming Hearing Alert</div>
          <p>
            Your case hearing for "Property Dispute - Sharma vs Kumar" is
            scheduled on Oct 15, 2025 at 10:00 AM
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-black transition"
            >
              <div className="text-xs text-gray-500 uppercase mb-1">{stat.label}</div>
              <div className="text-3xl font-bold">{stat.value}</div>
              {stat.unit && <div className="text-sm text-gray-500 mt-1">{stat.unit}</div>}
            </div>
          ))}
        </div>

        {/* My Cases */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Cases</h2>
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">
              View All
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {myCases.map((c, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white border border-gray-200 p-4 rounded-lg hover:border-black transition"
              >
                <div>
                  <h3 className="font-medium">{c.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-1">
                    <span>👨‍⚖️ Adv. {c.advocate}</span>
                    <span>📅 Next Hearing: {c.date}</span>
                    <span>📍 {c.court}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 md:mt-0">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(
                      c.status
                    )}`}
                  >
                    {c.status}
                  </span>
                  <button className="px-3 py-1 bg-black text-white rounded-lg hover:bg-gray-800 text-xs">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Advocates */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Advocates</h2>
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">
              Find More
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {myAdvocates.map((adv, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white border border-gray-200 p-4 rounded-lg hover:border-black transition"
              >
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                  {adv.initials}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{adv.name}</h3>
                  <p className="text-sm text-gray-600">Specialization: {adv.specialization}</p>
                  <p className="text-sm text-gray-600">
                    Experience: {adv.experience} | Bar ID: {adv.barId}
                  </p>
                  <p className="text-sm text-gray-600">📍 {adv.location}</p>
                </div>
                <div className="flex gap-2 mt-3 md:mt-0">
                  <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm">
                    💬 Message
                  </button>
                  <button className="px-3 py-1 bg-black text-white rounded-lg hover:bg-gray-800 text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Chatbot */}
      <div className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-2xl cursor-pointer shadow-lg hover:scale-110 transition">
        💬
      </div>
    </div>
  );
};

export default ClientDashboard;

