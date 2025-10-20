import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [userType, setUserType] = useState("client");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    licenseNumber: "",
    specialization: "",
    experience: "",
    barCouncil: "",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = {
      userType,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      ...(userType === "advocate" && {
        licenseNumber: formData.licenseNumber,
        specialization: formData.specialization,
        experience: formData.experience,
        barCouncil: formData.barCouncil,
        bio: formData.bio,
      }),
    };

    console.log("Registration Data:", data);
    alert(`Registration successful as ${userType}! Check console for details.`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-100 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Join as a Client or Advocate
        </p>

        {/* User Type Selector */}
        <div className="flex gap-2 mb-6 rounded-full bg-gray-100 p-1">
          {["client", "advocate"].map((type) => (
            <button
              key={type}
              onClick={() => handleUserTypeChange(type)}
              className={`flex-1 py-2 rounded-full font-medium transition-all ${
                userType === type
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          {[
            { label: "Full Name", id: "fullName", type: "text" },
            { label: "Email Address", id: "email", type: "email" },
            { label: "Phone Number", id: "phone", type: "tel" },
            { label: "Password", id: "password", type: "password" },
            { label: "Confirm Password", id: "confirmPassword", type: "password" },
          ].map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                required
                value={formData[field.id]}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>
          ))}

          {/* Advocate Fields */}
          {userType === "advocate" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Bar License Number
                  </label>
                  <input
                    id="licenseNumber"
                    type="text"
                    required
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Specialization
                  </label>
                  <select
                    id="specialization"
                    required
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
                  >
                    <option value="">Select specialization</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="civil">Civil Law</option>
                    <option value="family">Family Law</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="property">Property Law</option>
                    <option value="tax">Tax Law</option>
                    <option value="labor">Labor Law</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Years of Experience
                  </label>
                  <input
                    id="experience"
                    type="number"
                    required
                    min="0"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Bar Council
                  </label>
                  <input
                    id="barCouncil"
                    type="text"
                    required
                    value={formData.barCouncil}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Short Bio
                </label>
                <textarea
                  id="bio"
                  required
                  value={formData.bio}
                  onChange={handleChange}
                  rows="3"
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
                ></textarea>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all mt-2"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
