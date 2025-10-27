import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/axiosInstance";
import { useAuth } from '../../context/AuthContext';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [userType, setUserType] = useState("client");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",        
    bar_council_number: "",  
  });
  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); 
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (formData.password !== formData.confirm_password) {
      setErrors({ confirm_password: "Passwords do not match!" });
      return;
    }

    const data = userType === "client" 
      ? {
          username: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirm_password,
          role: "client",
        } 
      : {
          username: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirm_password,
          role: "advocate",
          phone_number: formData.phone_number,
          bar_council_number: formData.bar_council_number,
        };

    try {
      const endpoint = userType === "client" 
        ? "/auth/client-register/" 
        : "/auth/advocate-register/";
      const response = await axiosInstance.post(endpoint, data);

      alert(response.data.message || "Registration successful!");
      navigate('/login'); 
    } catch (err) {
      console.error('Registration error:', err);
      const backendErrors = err.response?.data || {};
      const formattedErrors = {};

      Object.keys(backendErrors).forEach((key) => {
        const value = backendErrors[key];
        formattedErrors[key] = Array.isArray(value) ? value.join(" ") : value;
      });

      setErrors(formattedErrors);
    }
  };

  const renderInput = ({ label, id, type, placeholder }) => (
    <div key={id} className="flex flex-col">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        id={id}
        type={type}
        required
        value={formData[id]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full mt-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black transition ${
          errors[id] ? "border-red-500" : "border-gray-200"
        }`}
      />
      {errors[id] && <p className="text-red-600 text-sm mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-100 to-white p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">Create Account</h1>
        <p className="text-center text-gray-500 mb-6">Join as a Client or Advocate</p>

        {/* User type toggle */}
        <div className="flex gap-2 mb-6 rounded-full bg-gray-100 p-1">
          {["client", "advocate"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleUserTypeChange(type)}
              className={`flex-1 py-2 rounded-full font-medium transition-all ${
                userType === type ? "bg-black text-white" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderInput({ label: "Full Name", id: "fullName", type: "text" })}
            {renderInput({ label: "Email Address", id: "email", type: "email" })}
          </div>

          {/* Advocate-specific fields */}
          {userType === "advocate" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput({ label: "Phone Number", id: "phone_number", type: "tel" })}
              {renderInput({ label: "Bar Council Number", id: "bar_council_number", type: "text" })}
            </div>
          )}

          {/* Password + Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderInput({ label: "Password", id: "password", type: "password" })}
            {renderInput({ label: "Confirm Password", id: "confirm_password", type: "password" })}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all mt-2"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-medium hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}
