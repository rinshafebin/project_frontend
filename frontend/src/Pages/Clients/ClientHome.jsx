import React, { useState } from "react";
import {
  Search,
  MessageSquare,
  FileText,
  Calendar,
  User,
  Bell,
  Briefcase,
  Clock,
  Star,
  MapPin,
  Filter,
} from "lucide-react";

export default function ClientHome() {
  const [currentView, setCurrentView] = useState("home");
  const [caseDetails, setCaseDetails] = useState("");
  const [selectedAdvocate, setSelectedAdvocate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("all");

  const advocates = [
    { id: 1, name: "Adv. Rajesh Kumar", specialty: "Criminal Law", experience: "15 years", rating: 4.8, cases: 230, location: "Mumbai", available: true, rate: "₹5000/hr" },
    { id: 2, name: "Adv. Priya Sharma", specialty: "Civil Law", experience: "12 years", rating: 4.9, cases: 180, location: "Delhi", available: true, rate: "₹4500/hr" },
    { id: 3, name: "Adv. Vikram Singh", specialty: "Corporate Law", experience: "18 years", rating: 4.7, cases: 310, location: "Bangalore", available: false, rate: "₹6000/hr" },
    { id: 4, name: "Adv. Meera Nair", specialty: "Family Law", experience: "10 years", rating: 4.9, cases: 150, location: "Chennai", available: true, rate: "₹4000/hr" },
  ];

  const stats = [
    { label: "Active Cases", value: "2", icon: Briefcase, color: "text-blue-500" },
    { label: "Total Advocates", value: "3", icon: User, color: "text-green-500" },
    { label: "Documents", value: "12", icon: FileText, color: "text-purple-500" },
    { label: "Next Hearing", value: "8 days", icon: Calendar, color: "text-orange-500" },
  ];

  const filteredAdvocates = advocates.filter((adv) => {
    const matchesSearch =
      adv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adv.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterSpecialty === "all" || adv.specialty === filterSpecialty;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-black p-2 rounded-xl">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold">LegalConnect</h1>
          </div>

          <nav className="flex items-center space-x-6">
            {["home", "advocates", "cases"].map((view) => (
              <button
                key={view}
                onClick={() => setCurrentView(view)}
                className={`capitalize font-medium transition-all ${
                  currentView === view
                    ? "text-black border-b-2 border-black pb-1"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {view}
              </button>
            ))}
            <button className="relative text-gray-500 hover:text-black">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-xl flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-800">Profile</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Home View */}
        {currentView === "home" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-2">Welcome back, Ramesh 👋</h2>
              <p className="text-gray-600 mb-6">
                Manage your legal matters efficiently and securely.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="w-5 h-5 text-black" />
                  <h3 className="text-lg font-semibold">Submit Case Summary</h3>
                </div>
                <textarea
                  value={caseDetails}
                  onChange={(e) => setCaseDetails(e.target.value)}
                  placeholder="Describe your case in detail..."
                  className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
                <button
                  onClick={() => {
                    alert("Searching for matching advocates...");
                    setCurrentView("advocates");
                  }}
                  className="mt-4 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all"
                >
                  <Search className="w-4 h-4 inline mr-2" />
                  Find Advocates
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Advocates View */}
        {currentView === "advocates" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Find Advocates</h2>

              {/* Search + Filter */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name or specialty..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                <select
                  value={filterSpecialty}
                  onChange={(e) => setFilterSpecialty(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black"
                >
                  <option value="all">All Specialties</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Civil Law">Civil Law</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Family Law">Family Law</option>
                </select>
              </div>

              {/* Advocate Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAdvocates.map((adv) => (
                  <div
                    key={adv.id}
                    className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-black transition-all bg-white"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold">
                          {adv.name.split(" ")[1][0]}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{adv.name}</h3>
                          <p className="text-sm text-gray-500">
                            {adv.specialty}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          adv.available
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {adv.available ? "Available" : "Busy"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" /> {adv.experience}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        {adv.rating} Rating
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {adv.cases} Cases
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {adv.location}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className="font-semibold">{adv.rate}</span>
                      <button
                        onClick={() => setSelectedAdvocate(adv)}
                        className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-all flex items-center space-x-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Contact</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
