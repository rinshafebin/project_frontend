import React, { useState } from "react";
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
  CheckCircle,
  AlertCircle,
  Sparkles,
  Scale,
  Building
} from "lucide-react";

export default function CreateCasePage() {
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    client_identifier: "", 
    case_number: "",
    priority: "low",
    next_hearing: "",
    description: "",
    case_type: "",
    court: ""
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
    if (!formData.title.trim()) newErrors.title = "Case title is required";
    if (!formData.client_identifier.trim()) newErrors.client_identifier = "Client information is required";
    
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
      console.log("Navigate to cases list");
    }, 2000);
  };

  const InputField = ({ label, name, type = "text", icon: Icon, required = false, placeholder, ...props }) => (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2.5 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-slate-400" />}
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-white border ${
          errors[name] 
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
            : 'border-slate-200 focus:border-slate-900 focus:ring-slate-100'
        } rounded-xl focus:outline-none focus:ring-4 transition-all text-slate-900 font-medium placeholder:text-slate-400`}
        {...props}
      />
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
      <label className="block text-sm font-semibold text-slate-700 mb-2.5 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-slate-400" />}
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border ${
            errors[name] 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
              : 'border-slate-200 focus:border-slate-900 focus:ring-slate-100'
          } rounded-xl focus:outline-none focus:ring-4 transition-all text-slate-900 font-medium appearance-none cursor-pointer`}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
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

  const TextAreaField = ({ label, name, icon: Icon, required = false, ...props }) => (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2.5 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-slate-400" />}
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`w-full px-4 py-3 bg-white border ${
          errors[name] 
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
            : 'border-slate-200 focus:border-slate-900 focus:ring-slate-100'
        } rounded-xl focus:outline-none focus:ring-4 transition-all text-slate-900 font-medium resize-none placeholder:text-slate-400`}
        {...props}
      />
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  const priorityOptions = [
    { value: "low", label: "Low Priority" },
    { value: "medium", label: "Medium Priority" },
    { value: "high", label: "High Priority" }
  ];

  const caseTypeOptions = [
    { value: "", label: "Select case type" },
    { value: "civil", label: "Civil Litigation" },
    { value: "criminal", label: "Criminal" },
    { value: "family", label: "Family Law" },
    { value: "corporate", label: "Corporate" },
    { value: "property", label: "Property Dispute" }
  ];

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
              <span className="font-medium">Back to Cases</span>
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => console.log("Cancel")}
                className="px-5 py-2.5 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2 font-medium"
              >
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
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl">
              <Sparkles className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Create New Case</h1>
              <p className="text-slate-600 mt-1">Fill in the details to register a new case in the system</p>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200/50 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">Quick Tip</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ensure all required fields are filled accurately. You can add more details and documents after creating the case.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Basic Information
            </h2>
            <div className="space-y-6">
              <InputField
                label="Case Title"
                name="title"
                icon={FileText}
                required
                placeholder="Enter a descriptive case title"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Case Number"
                  name="case_number"
                  icon={Hash}
                  placeholder="e.g., CIV/2024/0042"
                />
                
                <SelectField
                  label="Case Type"
                  name="case_type"
                  icon={Scale}
                  options={caseTypeOptions}
                />
              </div>

              <TextAreaField
                label="Case Description"
                name="description"
                icon={AlignLeft}
                rows={5}
                placeholder="Provide detailed information about the case..."
              />
            </div>
          </div>

          {/* Client Information */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Client Information
            </h2>
            <InputField
              label="Client Identifier"
              name="client_identifier"
              icon={Users}
              required
              placeholder="Enter client's username or email address"
            />
            <p className="mt-2 text-sm text-slate-500">
              Enter the client's registered username or email to link this case
            </p>
          </div>

          {/* Case Details */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Building className="w-5 h-5" />
              Case Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField
                label="Priority Level"
                name="priority"
                icon={Flag}
                options={priorityOptions}
              />

              <InputField
                label="Next Hearing Date"
                name="next_hearing"
                type="date"
                icon={Calendar}
              />

              <InputField
                label="Court Name"
                name="court"
                icon={Building}
                placeholder="e.g., District Court, Downtown"
              />
            </div>
          </div>

          {/* Action Footer */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <AlertCircle className="w-4 h-4" />
                <span><span className="text-red-500">*</span> indicates required fields</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => console.log("Cancel")}
                  className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Creating Case...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Create Case
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Case Created Successfully!</h3>
              <p className="text-slate-600 leading-relaxed mb-2">
                Your new case has been registered in the system.
              </p>
              <p className="text-sm text-slate-500">
                Redirecting to cases list...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}