import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Edit,
  Trash2,
  FileText,
  Calendar,
  Users,
  Briefcase,
  Clock,
  AlertCircle,
  Download,
  Upload,
  Plus,
  X,
  Check,
  Loader2,
  MapPin,
  Phone,
  Mail,
  Building,
  Scale,
  FileCheck
} from "lucide-react";
import Sidebar from "../../../Components/Layout/Advocate/Sidebar";
import Header from "../../../Components/Layout/Advocate/Header";
import { useNavigate, useParams } from "react-router-dom";
import createAxiosInstance from "../../../Api/axiosInstance";

export default function CaseDetailPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const axiosAdvocate = createAxiosInstance("advocate");

  useEffect(() => {
    const fetchCaseDetail = async () => {
      try {
        const res = await axiosAdvocate.get(`/advocates/cases/${id}/`);
        console.log("Case Detail:", res.data);
        setCaseData(res.data.data || res.data);
      } catch (err) {
        console.error("Error fetching case:", err);
        setError("Failed to load case details");
      } finally {
        setLoading(false);
      }
    };
    fetchCaseDetail();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axiosAdvocate.delete(`/advocates/cases/${id}/`);
      navigate("/advocate/cases");
    } catch (err) {
      console.error("Error deleting case:", err);
      alert("Failed to delete case");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-2 text-gray-500">
                <Loader2 className="w-6 h-6 animate-spin" />
                Loading case details...
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (error || !caseData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <p className="text-lg text-gray-700 font-medium">{error || "Case not found"}</p>
                <button
                  onClick={() => navigate("/advocate/cases")}
                  className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-xl hover:opacity-90 transition"
                >
                  Back to Cases
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "hearings", label: "Hearings", icon: Calendar },
    { id: "documents", label: "Documents", icon: FileCheck },
    { id: "timeline", label: "Timeline", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-7xl mx-auto">
              {/* Back Button & Actions */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigate("/advocate/cases")}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-medium">Back to Cases</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/advocate/cases/${id}/edit`)}
                    className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="px-4 py-2 border border-red-200 text-red-600 rounded-xl hover:bg-red-50 transition flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>

              {/* Case Header */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-mono text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
                        {caseData.case_number}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          caseData.priority === "High"
                            ? "bg-red-100 text-red-700"
                            : caseData.priority === "Medium"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {caseData.priority?.toUpperCase()}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          caseData.status === "Active"
                            ? "bg-blue-100 text-blue-700"
                            : caseData.status === "Closed"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {caseData.status}
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{caseData.title}</h1>
                    <p className="text-gray-600">{caseData.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Client Name</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {caseData.client_name || "—"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <Scale className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Case Type</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {caseData.case_type || "—"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <Building className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Court</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {caseData.court || "—"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Filing Date</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {caseData.filing_date || "—"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="border-b border-gray-100 overflow-x-auto">
                  <div className="flex">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 px-6 py-4 font-medium transition whitespace-nowrap ${
                            activeTab === tab.id
                              ? "text-gray-900 border-b-2 border-gray-900"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      {/* Case Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Information</h3>
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Opposite Party</p>
                            <p className="text-sm font-medium text-gray-900">
                              {caseData.opposite_party || "—"}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Judge Name</p>
                            <p className="text-sm font-medium text-gray-900">
                              {caseData.judge_name || "—"}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Next Hearing</p>
                            <p className="text-sm font-medium text-gray-900">
                              {caseData.hearing_date || "Not scheduled"}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Result</p>
                            <p className="text-sm font-medium text-gray-900">
                              {caseData.result || "Pending"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Client Details */}
                      {(caseData.client_email || caseData.client_phone) && (
                        <div className="pt-6 border-t border-gray-100">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Contact</h3>
                          <div className="space-y-3">
                            {caseData.client_email && (
                              <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-900">{caseData.client_email}</span>
                              </div>
                            )}
                            {caseData.client_phone && (
                              <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-900">{caseData.client_phone}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Notes */}
                      {caseData.notes && (
                        <div className="pt-6 border-t border-gray-100">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Notes</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{caseData.notes}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "hearings" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Upcoming Hearings</h3>
                        <button className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:opacity-90 transition flex items-center gap-2">
                          <Plus className="w-4 h-4" />
                          Add Hearing
                        </button>
                      </div>

                      {caseData.hearing_date ? (
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                              <div className="p-3 bg-white rounded-lg">
                                <Calendar className="w-6 h-6 text-gray-700" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 mb-1">Next Hearing</p>
                                <p className="text-sm text-gray-600">{caseData.hearing_date}</p>
                                {caseData.court && (
                                  <p className="text-sm text-gray-500 mt-1">{caseData.court}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                          <p className="text-gray-500">No hearings scheduled</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "documents" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Case Documents</h3>
                        <button className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:opacity-90 transition flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Upload Document
                        </button>
                      </div>

                      <div className="text-center py-12">
                        <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No documents uploaded</p>
                        <p className="text-sm text-gray-400 mt-1">Upload case-related documents to get started</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "timeline" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Timeline</h3>
                      
                      <div className="relative pl-8 space-y-6">
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                        
                        {caseData.filing_date && (
                          <div className="relative">
                            <div className="absolute -left-[26px] w-3 h-3 bg-gray-900 rounded-full border-4 border-white"></div>
                            <div className="bg-gray-50 rounded-xl p-4">
                              <p className="font-medium text-gray-900">Case Filed</p>
                              <p className="text-sm text-gray-600 mt-1">{caseData.filing_date}</p>
                            </div>
                          </div>
                        )}

                        {caseData.hearing_date && (
                          <div className="relative">
                            <div className="absolute -left-[26px] w-3 h-3 bg-blue-500 rounded-full border-4 border-white"></div>
                            <div className="bg-blue-50 rounded-xl p-4">
                              <p className="font-medium text-gray-900">Hearing Scheduled</p>
                              <p className="text-sm text-gray-600 mt-1">{caseData.hearing_date}</p>
                            </div>
                          </div>
                        )}

                        {!caseData.filing_date && !caseData.hearing_date && (
                          <div className="text-center py-8">
                            <Clock className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500">No timeline events</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-full">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Delete Case</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this case? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}