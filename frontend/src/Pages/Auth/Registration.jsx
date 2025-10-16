import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Registration() {
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
        <div className="min-h-screen flex justify-center items-center bg-white p-4">
            <div className="w-full max-w-lg bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center text-black mb-2">
                    Create Account
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Join us as a Client or Advocate
                </p>

                {/* User Type Buttons */}
                <div className="flex gap-3 mb-6">
                    <button
                        onClick={() => handleUserTypeChange("client")}
                        className={`flex-1 py-3 rounded-lg font-semibold transition-all ${userType === "client"
                                ? "bg-black text-white"
                                : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        Client
                    </button>
                    <button
                        onClick={() => handleUserTypeChange("advocate")}
                        className={`flex-1 py-3 rounded-lg font-semibold transition-all ${userType === "advocate"
                                ? "bg-black text-white"
                                : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        Advocate
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    </div>

                    {/* Advocate Fields */}
                    {userType === "advocate" && (
                        <>
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
                                    className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
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
                                    className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
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
                                    className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
                                />
                            </div>
                        </>
                    )}

                    <button type="submit" className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all mt-4" >
                        Register
                    </button>
                </form>

                <p className="text-center text-gray-600 text-sm mt-5">
                    Already have an account?{" "}
                    <Link to="/login" className="text-black font-semibold hover:underline" >
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}
