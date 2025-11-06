import React, { useEffect, useState } from "react";
import { Plus,Search,Eye,Edit,FileText,Briefcase,Users,Clock,Filter,MoreVertical,Loader2 } from "lucide-react";
import Sidebar from "../../../Components/Layout/Advocate/Sidebar";
import Header from "../../../Components/Layout/Advocate/Header";
import { useNavigate } from "react-router-dom";
import createAxiosInstance from "../../../Api/axiosInstance";

export default function CasesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const axiosAdvocate = createAxiosInstance("advocate");

  useEffect(() => {
  const fetchCases = async () => {
    try {
      const res = await axiosAdvocate.get("/advocates/cases/");
      console.log("API Response:", res.data);
      setCases(res.data.data || []);
    } catch (err) {
      console.error("Error fetching cases:", err);
      setError("Failed to load cases");
    } finally {
      setLoading(false);
    }
  };
  fetchCases();
}, []);


  // Filter + Search logic
  const filteredCases = cases.filter(
    (caseItem) =>
      (filterStatus === "all" || caseItem.status === filterStatus) &&
      (caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.client_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.case_number.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">My Cases</h2>
                  <p className="text-sm text-gray-600 mt-1">{filteredCases.length} total cases</p>
                </div>
                <button
                  onClick={() => navigate("/advocate/cases/create")}
                  className="px-4 py-2.5 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:opacity-90 transition flex items-center gap-2 font-medium shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  New Case
                </button>
              </div>

              {/* Search + Filter */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search cases by title, client, or case number..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                    />
                  </div>

                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none bg-white cursor-pointer transition"
                    >
                      <option value="all">All Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Active">Active</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Case List */}
              {loading ? (
                <div className="flex items-center justify-center py-20 text-gray-500">
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  Loading cases...
                </div>
              ) : error ? (
                <div className="text-center text-red-500 py-20">{error}</div>
              ) : filteredCases.length > 0 ? (
                <div className="space-y-4">
                  {filteredCases.map((caseItem) => (
                    <div
                      key={caseItem.id}
                      className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-mono text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg">
                              {caseItem.case_number}
                            </span>
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                caseItem.priority === "High"
                                  ? "bg-red-100 text-red-700"
                                  : caseItem.priority === "Medium"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              {caseItem.priority.toUpperCase()}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {caseItem.title}
                          </h3>
                        </div>
                        <button className="p-2 hover:bg-gray-50 rounded-lg transition">
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500">Client</p>
                            <p className="text-sm font-medium text-gray-900">
                              {caseItem.client_name || "—"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Briefcase className="w-4 h-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500">Status</p>
                            <p className="text-sm font-medium text-gray-900">
                              {caseItem.status}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500">Result</p>
                            <p className="text-sm font-medium text-gray-900">
                              {caseItem.result || "Pending"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500">Hearing Date</p>
                            <p className="text-sm font-medium text-gray-900">
                              {caseItem.hearing_date || "—"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => navigate(`/advocate/cases/${caseItem.id}`)}
                          className="flex-1 py-2 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition flex items-center gap-2">
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                        <button className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Docs
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-12 text-center">
                  <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-medium">No cases found</p>
                  <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
