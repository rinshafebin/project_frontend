import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import createAxiosInstance from "../../../Api/axiosInstance";
import {
  Save,
  ArrowLeft,
  FileText,
  Users,
  Calendar,
  Hash,
  Flag,
  AlignLeft,
  Loader2,
} from "lucide-react";
import Sidebar from "../../../Components/Layout/Advocate/Sidebar";
import Header from "../../../Components/Layout/Advocate/Header";

export default function CreateCasePage() {
  const navigate = useNavigate();
  const axiosAdvocate = createAxiosInstance("advocate");

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    client_identifier: "", 
    case_number: "",
    priority: "low",
    next_hearing: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        case_number: formData.case_number,
        client_identifier: formData.client_identifier,
        priority: formData.priority,
        hearing_date: formData.next_hearing,
      };

      console.log("📤 Sending payload:", payload);

      const res = await axiosAdvocate.post("advocates/cases/", payload);
      console.log("✅ Response:", res.data); 

      alert("✅ Case created successfully!");
      navigate("/advocate/cases");
    } catch (err) {
      console.error("❌ Error creating case:", err);
      console.log("❌ Error response:", err.response?.data);
      alert(`❌ Failed to create case: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigate("/advocate/cases")}
                    className="p-2 hover:bg-white rounded-xl transition border border-gray-200"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Create New Case
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Fill in the details to register a new case
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <form onSubmit={handleSubmit}>
                  <div className="p-8 space-y-6">
                    {/* Title */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        Case Title *
                      </label>
                      <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="Enter case title"
                        className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                      />
                    </div>

                    {/* Client Field */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        Client (Username or Email) *
                      </label>
                      <input
                        name="client_identifier"
                        value={formData.client_identifier}
                        onChange={handleChange}
                        required
                        placeholder="Enter client's username or email"
                        className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                      />
                    </div>

                    {/* Case Number */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Hash className="w-4 h-4 text-gray-400" />
                        Case Number
                      </label>
                      <input
                        name="case_number"
                        value={formData.case_number}
                        onChange={handleChange}
                        placeholder="e.g., CAS-2025-001"
                        className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                      />
                    </div>

                    {/* Priority & Hearing Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <Flag className="w-4 h-4 text-gray-400" />
                          Priority
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition bg-white cursor-pointer"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          Next Hearing Date
                        </label>
                        <input
                          type="date"
                          name="next_hearing"
                          value={formData.next_hearing}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <AlignLeft className="w-4 h-4 text-gray-400" />
                        Case Description
                      </label>
                      <textarea
                        name="description"
                        rows="6"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Provide detailed information about the case..."
                        className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="bg-gray-50/50 px-8 py-5 border-t border-gray-100 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => navigate("/advocate/cases")}
                      className="px-6 py-2.5 border border-gray-200 rounded-xl hover:bg-white transition font-medium text-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white font-semibold hover:opacity-90 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          Create Case
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
