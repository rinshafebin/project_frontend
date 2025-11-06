import React, { useState } from "react";
import { Save, ArrowLeft, User, Mail, Phone, MapPin, Briefcase, Building2, FileText, Loader2, Calendar } from "lucide-react";

export default function CreateClientPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clientType: "Individual",
    company: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Client data:", formData);
      alert("✅ Client created successfully!");
      setLoading(false);
      // Navigate back would go here
      // navigate("/advocate/clients");
    }, 1500);
  };

  const handleCancel = () => {
    // Navigate back would go here
    // navigate("/advocate/clients");
    console.log("Cancel clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleCancel}
            className="p-2 hover:bg-white rounded-xl transition border border-gray-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Add New Client</h2>
            <p className="text-sm text-gray-600 mt-1">Fill in the client details to add them to your system</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-8 space-y-8">
            {/* Basic Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-gray-400" />
                Basic Information
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name / Company Name *
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter full name"
                      className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Client Type *
                    </label>
                    <select
                      name="clientType"
                      value={formData.clientType}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition bg-white cursor-pointer"
                    >
                      <option value="Individual">Individual</option>
                      <option value="Company">Company</option>
                      <option value="Organization">Organization</option>
                    </select>
                  </div>
                </div>

                {formData.clientType !== "Individual" && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      Company/Organization Name
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter company or organization name"
                      className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-400" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="client@example.com"
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                Address Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter street address"
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      PIN Code
                    </label>
                    <input
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter PIN code"
                      className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-400" />
                Additional Information
              </h3>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  name="notes"
                  rows="4"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Add any additional notes or important information about the client..."
                  className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50/50 px-8 py-5 border-t border-gray-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 border border-gray-200 rounded-xl hover:bg-white transition font-medium text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
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
                  Add Client
                </>
              )}
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50/50 backdrop-blur-sm border border-blue-100 rounded-2xl p-6">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Client Information</h4>
              <p className="text-sm text-gray-600">
                All fields marked with * are required. You can update client information and add case details after creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}