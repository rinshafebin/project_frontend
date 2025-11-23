import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Edit,
  Trash2,
  FileText,
  Calendar,
  Users,
  Clock,
  AlertCircle,
  Download,
  Upload,
  Plus,
  Mail,
  Phone,
  Building,
  Scale,
  FileCheck,
  Gavel,
  TrendingUp,
  Briefcase,
  Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CaseDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  const caseData = {
    case_number: "CIV/2024/0042",
    priority: "High",
    status: "Active",
    title: "Smith vs. Johnson Corporation",
    description: "Contract dispute regarding breach of service agreement and damages claim",
    client_name: "John Smith",
    case_type: "Civil Litigation",
    court: "District Court, Downtown",
    filing_date: "January 15, 2024",
    opposite_party: "Johnson Corporation",
    judge_name: "Hon. Sarah Williams",
    hearing_date: "December 20, 2024",
    result: "Pending",
    client_email: "john.smith@email.com",
    client_phone: "+1 (555) 123-4567",
    notes: "Client seeks compensation for breach of contract. Initial discovery phase completed. Preparing for mediation scheduled next month."
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    { id: "hearings", label: "Hearings", icon: Calendar },
    { id: "documents", label: "Documents", icon: FileCheck },
    { id: "timeline", label: "Timeline", icon: Clock }
  ];

  const stats = [
    { label: "Days Active", value: "294", icon: Clock, color: "blue" },
    { label: "Hearings", value: "3", icon: Calendar, color: "purple" },
    { label: "Documents", value: "12", icon: FileText, color: "green" },
    { label: "Updates", value: "8", icon: TrendingUp, color: "amber" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30 backdrop-blur-xl bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => console.log("Navigate back")}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <div className="p-2 rounded-lg group-hover:bg-slate-100 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-medium">Back to Cases</span>
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => navigate("/advocate/cases/edit")}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 flex items-center gap-2 font-medium"
              >
                <Edit className="w-4 h-4" />
                Edit Case
              </button>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="px-5 py-2.5 border border-red-200 text-red-600 rounded-xl hover:bg-red-50 transition-all flex items-center gap-2 font-medium"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Case Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all mb-6 overflow-hidden">
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-mono text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-lg font-semibold">
                    {caseData.case_number}
                  </span>
                  <span className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide ${caseData.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : caseData.priority === "Medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-green-100 text-green-700"
                    }`}>
                    {caseData.priority}
                  </span>
                  <span className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide ${caseData.status === "Active"
                      ? "bg-blue-100 text-blue-700"
                      : caseData.status === "Closed"
                        ? "bg-slate-100 text-slate-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                    {caseData.status}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-3 leading-tight">{caseData.title}</h1>
                <p className="text-slate-600 text-lg leading-relaxed">{caseData.description}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-200/50">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg bg-${stat.color}-100`}>
                        <Icon className={`w-5 h-5 text-${stat.color}-600`} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                        <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-slate-100 rounded-xl">
                  <Users className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1.5">Client Name</p>
                  <p className="text-sm font-semibold text-slate-900">{caseData.client_name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-slate-100 rounded-xl">
                  <Scale className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1.5">Case Type</p>
                  <p className="text-sm font-semibold text-slate-900">{caseData.case_type}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-slate-100 rounded-xl">
                  <Building className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1.5">Court</p>
                  <p className="text-sm font-semibold text-slate-900">{caseData.court}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-slate-100 rounded-xl">
                  <Calendar className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1.5">Filing Date</p>
                  <p className="text-sm font-semibold text-slate-900">{caseData.filing_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all overflow-hidden">
          <div className="border-b border-slate-200/80">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2.5 px-6 py-4 font-semibold transition-all whitespace-nowrap relative ${activeTab === tab.id
                        ? "text-slate-900 bg-slate-50/50"
                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-50/30"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-8">
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Case Information */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Case Information
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Opposite Party", value: caseData.opposite_party },
                      { label: "Judge Name", value: caseData.judge_name },
                      { label: "Next Hearing", value: caseData.hearing_date },
                      { label: "Result", value: caseData.result }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-200/50">
                        <p className="text-xs text-slate-500 font-semibold mb-2 uppercase tracking-wide">{item.label}</p>
                        <p className="text-base font-semibold text-slate-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Contact */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Client Contact
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/50 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg">
                        <Mail className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium mb-1">Email Address</p>
                        <p className="text-sm font-semibold text-slate-900">{caseData.client_email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg">
                        <Phone className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium mb-1">Phone Number</p>
                        <p className="text-sm font-semibold text-slate-900">{caseData.client_phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Case Notes
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/50">
                    <p className="text-sm text-slate-700 leading-relaxed">{caseData.notes}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "hearings" && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming Hearings
                  </h3>
                  <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 flex items-center gap-2 font-medium">
                    <Plus className="w-4 h-4" />
                    Add Hearing
                  </button>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-200/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Calendar className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-lg mb-2">Next Hearing</p>
                      <p className="text-slate-700 font-semibold mb-1">{caseData.hearing_date}</p>
                      <p className="text-sm text-slate-600">{caseData.court}</p>
                    </div>
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold">
                      Upcoming
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    Case Documents
                  </h3>
                  <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 flex items-center gap-2 font-medium">
                    <Upload className="w-4 h-4" />
                    Upload Document
                  </button>
                </div>

                <div className="text-center py-16">
                  <div className="p-5 bg-slate-100 rounded-2xl w-fit mx-auto mb-4">
                    <FileText className="w-12 h-12 text-slate-400" />
                  </div>
                  <p className="text-slate-600 font-medium mb-2">No documents uploaded</p>
                  <p className="text-sm text-slate-500">Upload case-related documents to get started</p>
                </div>
              </div>
            )}

            {activeTab === "timeline" && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Case Timeline
                </h3>

                <div className="relative pl-10 space-y-8 mt-8">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                  <div className="relative">
                    <div className="absolute -left-[30px] w-4 h-4 bg-slate-900 rounded-full border-4 border-white shadow-sm"></div>
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/50 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold text-slate-900">Case Filed</p>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                          Start
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 font-medium">{caseData.filing_date}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[30px] w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-sm"></div>
                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-5 border border-blue-200/50 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold text-slate-900">Hearing Scheduled</p>
                        <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                          Upcoming
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 font-medium">{caseData.hearing_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 bg-red-100 rounded-xl">
                <AlertCircle className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Delete Case</h3>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Are you sure you want to delete this case? This action cannot be undone and all associated data will be permanently removed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-5 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={() => console.log("Delete case")}
                className="flex-1 px-5 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all font-semibold hover:shadow-lg hover:shadow-red-600/30"
              >
                Delete Case
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}