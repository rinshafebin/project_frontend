import React, { useState } from "react";
import {
  ArrowLeft,
  Save,
  X,
  Users,
  Scale,
  Building,
  Calendar,
  Gavel,
  FileText,
  Mail,
  Phone,
  AlertCircle,
  CheckCircle,
  Loader2
} from "lucide-react";

export default function CaseEditPage() {
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const [formData, setFormData] = useState({
    case_number: "CIV/2024/0042",
    title: "Smith vs. Johnson Corporation",
    description: "Contract dispute regarding breach of service agreement and damages claim",
    case_type: "Civil Litigation",
    priority: "High",
    status: "Active",
    client_name: "John Smith",
    client_email: "john.smith@email.com",
    client_phone: "+1 (555) 123-4567",
    opposite_party: "Johnson Corporation",
    court: "District Court, Downtown",
    judge_name: "Hon. Sarah Williams",
    filing_date: "2024-01-15",
    hearing_date: "2024-12-20",
    result: "Pending",
    notes: "Client seeks compensation for breach of contract. Initial discovery phase completed. Preparing for mediation scheduled next month."
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.case_number.trim()) newErrors.case_number = "Case number is required";
    if (!formData.title.trim()) newErrors.title = "Case title is required";
    if (!formData.client_name.trim()) newErrors.client_name = "Client name is required";
    if (!formData.case_type) newErrors.case_type = "Case type is required";
    if (!formData.priority) newErrors.priority = "Priority is required";
    if (!formData.status) newErrors.status = "Status is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setShowSuccessModal(true);
    
    setTimeout(() => {
      setShowSuccessModal(false);
      console.log("Navigate back to detail page");
    }, 2000);
  };

  const InputField = ({ label, name, type = "text", icon: Icon, required = false, ...props }) => (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3 bg-white border ${
            errors[name] ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-slate-900 focus:ring-slate-100'
          } rounded-xl focus:outline-none focus:ring-4 transition-all text-slate-900 font-medium`}
          {...props}
        />
      </div>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  const SelectField = ({ label, name, options, icon: Icon, required = false }) => (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3 bg-white border ${
            errors[name] ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-slate-900 focus:ring-slate-100'
          } rounded-xl focus:outline-none focus:ring-4 transition-all text-slate-900 font-medium appearance-none cursor-pointer`}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  const TextAreaField = ({ label, name, rows = 4, required = false }) => (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleChange}
        rows={rows}
        className={`w-full px-4 py-3 bg-white border ${
          errors[name] ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-slate-900 focus:ring-slate-100'
        } rounded-xl focus:outline-none focus:ring-4 transition-all text-slate-900 font-medium resize-none`}
      />
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30 backdrop-blur-xl bg-white/90">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => console.log("Navigate back")}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <div className="p-2 rounded-lg group-hover:bg-slate-100 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-medium">Back to Case</span>
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => console.log("Cancel")}
                className="px-5 py-2.5 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2 font-medium"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 flex items-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Edit Case</h1>
          <p className="text-slate-600">Update case information and details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Case Number"
                name="case_number"
                icon={FileText}
                required
                placeholder="e.g., CIV/2024/0042"
              />
              <SelectField
                label="Case Type"
                name="case_type"
                icon={Scale}
                options={["Civil Litigation", "Criminal", "Family Law", "Corporate", "Property Dispute"]}
                required
              />
              <div className="md:col-span-2">
                <InputField
                  label="Case Title"
                  name="title"
                  icon={Gavel}
                  required
                  placeholder="e.g., Smith vs. Johnson Corporation"
                />
              </div>
              <div className="md:col-span-2">
                <TextAreaField
                  label="Description"
                  name="description"
                  rows={3}
                  required
                />
              </div>
              <SelectField
                label="Priority"
                name="priority"
                options={["High", "Medium", "Low"]}
                required
              />
              <SelectField
                label="Status"
                name="status"
                options={["Active", "Pending", "Closed", "On Hold"]}
                required
              />
            </div>
          </div>

          {/* Client Information */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Client Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Client Name"
                name="client_name"
                icon={Users}
                required
                placeholder="Full name"
              />
              <InputField
                label="Client Email"
                name="client_email"
                type="email"
                icon={Mail}
                placeholder="email@example.com"
              />
              <InputField
                label="Client Phone"
                name="client_phone"
                type="tel"
                icon={Phone}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Court & Case Details */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Building className="w-5 h-5" />
              Court & Case Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Court Name"
                name="court"
                icon={Building}
                placeholder="e.g., District Court, Downtown"
              />
              <InputField
                label="Judge Name"
                name="judge_name"
                icon={Gavel}
                placeholder="e.g., Hon. Sarah Williams"
              />
              <InputField
                label="Opposite Party"
                name="opposite_party"
                placeholder="Name of opposing party"
              />
              <InputField
                label="Filing Date"
                name="filing_date"
                type="date"
                icon={Calendar}
              />
              <InputField
                label="Next Hearing Date"
                name="hearing_date"
                type="date"
                icon={Calendar}
              />
              <InputField
                label="Result/Outcome"
                name="result"
                placeholder="e.g., Pending, Won, Lost"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Additional Notes
            </h2>
            <TextAreaField
              label="Case Notes"
              name="notes"
              rows={6}
            />
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
            <p className="text-sm text-slate-600">
              <span className="text-red-500">*</span> Required fields
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => console.log("Cancel")}
                className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Saving Changes...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Changes Saved!</h3>
              <p className="text-slate-600 leading-relaxed">
                Your case has been successfully updated with the new information.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}