import React, { useState, useEffect } from "react";
import createAxiosInstance from "../../Api/axiosInstance";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Edit2,
  Save,
  Camera,
  Briefcase,
} from "lucide-react";

const authApi = createAxiosInstance("auth");

export default function AdvocateProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [advocateData, setAdvocateData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone_number: "",
    profile_picture: null,
    office_address: "",
    bar_council_number: "",
    specialization: "",
    years_of_experience: 0,
    educational_qualification: "",
    languages: "",
    bio: "",
    certificates: null,
  });

  const [dashboardData, setDashboardData] = useState({
    total_cases: 0,
    active_cases: 0,
    completed_cases: 0,
    won_cases: 0,
    lost_cases: 0,
    win_rate: 0,
    total_clients: 0,
    upcoming_hearings: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, dashboardRes] = await Promise.all([
          authApi.get("/auth/advocate-profile/"),
          authApi.get("/auth/dashboard/"),
        ]);

        if (profileRes.data?.success && profileRes.data.profile) {
          setAdvocateData((prev) => ({
            ...prev,
            ...profileRes.data.profile,
          }));
        }

        setDashboardData(dashboardRes.data);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      const payload = {
        phone_number: advocateData.phone_number,
        office_address: advocateData.office_address,
        bar_council_number: advocateData.bar_council_number,
        specialization: advocateData.specialization,
        years_of_experience: advocateData.years_of_experience,
        educational_qualification: advocateData.educational_qualification,
        languages: advocateData.languages,
        bio: advocateData.bio,
      };

      const res = await axiosInstance.put("/auth/advocate-profile/", payload);

      if (res.data && res.data.success) {
        setAdvocateData({ ...advocateData, ...res.data.profile });
        setIsEditing(false);
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile");
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("certificates", file);

    try {
      const res = await axiosInstance.put("/auth/advocate-profile/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data && res.data.success) {
        setAdvocateData({
          ...advocateData,
          certificates: res.data.profile.certificates,
        });
        alert("File uploaded successfully!");
      } else {
        alert("Failed to upload file");
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Failed to upload file");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg font-medium">Loading profile...</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                {advocateData.profile_picture ? (
                  <img
                    src={advocateData.profile_picture}
                    alt="Profile"
                    className="w-32 h-32 object-cover rounded-2xl shadow-xl ring-4 ring-gray-100"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-4xl shadow-xl ring-4 ring-gray-100">
                    {advocateData.fullname
                      ? advocateData.fullname.charAt(0)
                      : "A"}
                  </div>
                )}
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-black text-white p-3 rounded-full hover:bg-gray-800 shadow-lg cursor-pointer">
                    <Camera className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                )}
              </div>

              <div>
                <h1 className="text-4xl font-bold text-black mb-2">
                  {advocateData.fullname}
                </h1>
                <p className="text-gray-500 mb-2 font-medium">
                  @{advocateData.username}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    <span>{advocateData.years_of_experience} years exp</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-md transition-all ${
                isEditing
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-black text-white hover:bg-gray-900"
              }`}
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4" />
                  Save
                </>
              ) : (
                <>
                  <Edit2 className="w-4 h-4" />
                  Edit
                </>
              )}
            </button>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mb-6">
            <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500">Total Cases</h4>
              <p className="text-2xl font-bold text-blue-700">
                {dashboardData.total_cases}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500">Active</h4>
              <p className="text-2xl font-bold text-green-700">
                {dashboardData.active_cases}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500">Completed</h4>
              <p className="text-2xl font-bold text-gray-700">
                {dashboardData.completed_cases}
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500">Clients</h4>
              <p className="text-2xl font-bold text-yellow-700">
                {dashboardData.total_clients}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500">Win Rate</h4>
              <p className="text-2xl font-bold text-purple-700">
                {dashboardData.win_rate}%
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-500">Lost</h4>
              <p className="text-2xl font-bold text-red-700">
                {dashboardData.lost_cases}
              </p>
            </div>
          </div>
        </div>

        {/* --- Rest of Profile Sections (unchanged UI) --- */}
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
            <div className="p-2 bg-black rounded-lg">
              <User className="w-5 h-5 text-white" />
            </div>
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Email
              </label>
              <div className="flex items-center gap-3 text-gray-900">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="font-medium">{advocateData.email}</span>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={advocateData.phone_number}
                  onChange={(e) =>
                    setAdvocateData({
                      ...advocateData,
                      phone_number: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                />
              ) : (
                <div className="flex items-center gap-3 text-gray-900">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">
                    {advocateData.phone_number}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Professional Info */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
            <div className="p-2 bg-black rounded-lg">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            Professional Information
          </h2>

          {/* Bar Council */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Bar Council Number
            </label>
            {isEditing ? (
              <input
                type="text"
                value={advocateData.bar_council_number}
                onChange={(e) =>
                  setAdvocateData({
                    ...advocateData,
                    bar_council_number: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            ) : (
              <p className="font-mono text-gray-900">
                {advocateData.bar_council_number}
              </p>
            )}
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Years of Experience
            </label>
            {isEditing ? (
              <input
                type="number"
                value={advocateData.years_of_experience}
                onChange={(e) =>
                  setAdvocateData({
                    ...advocateData,
                    years_of_experience: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            ) : (
              <p className="font-medium text-gray-900">
                {advocateData.years_of_experience} years
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
