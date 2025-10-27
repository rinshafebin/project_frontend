import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save, Camera } from 'lucide-react';

export default function ClientProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [clientData, setClientData] = useState({
    username: 'rajesh_kumar',
    email: 'rajesh@email.com',
    fullname: 'Rajesh Kumar',
    phoneNumber: '+91 98765 43210',
    address: 'Building 12, Sector 45, Mumbai, Maharashtra - 400001',
    profilePicture: null,
    role: 'Client',
    joinedDate: 'May 2024',
    activeCases: 3,
    completedCases: 5
  });

  return (
    <div className="max-w-6xl mx-auto">

      {/* Profile Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl">
                {clientData.fullname.charAt(0)}
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full hover:bg-gray-800">
                  <Camera className="w-4 h-4" />
                </button>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">{clientData.fullname}</h1>
              <p className="text-gray-600 mb-1">@{clientData.username}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Joined {clientData.joinedDate}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
              isEditing
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4" />
                Save Changes
              </>
            ) : (
              <>
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </>
            )}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-black">{clientData.activeCases}</p>
            <p className="text-sm text-gray-600">Active Cases</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-black">{clientData.completedCases}</p>
            <p className="text-sm text-gray-600">Completed Cases</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-black">{clientData.activeCases + clientData.completedCases}</p>
            <p className="text-sm text-gray-600">Total Cases</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
        <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
          <User className="w-6 h-6" />
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={clientData.fullname}
                onChange={(e) => setClientData({ ...clientData, fullname: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            ) : (
              <p className="text-gray-900">{clientData.fullname}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="flex items-center gap-2 text-gray-900">
              <Mail className="w-4 h-4 text-gray-400" />
              <span>{clientData.email}</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            {isEditing ? (
              <input
                type="text"
                value={clientData.phoneNumber}
                onChange={(e) => setClientData({ ...clientData, phoneNumber: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            ) : (
              <div className="flex items-center gap-2 text-gray-900">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{clientData.phoneNumber}</span>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <p className="text-gray-900">@{clientData.username}</p>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          Address
        </h2>
        {isEditing ? (
          <textarea
            value={clientData.address}
            onChange={(e) => setClientData({ ...clientData, address: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        ) : (
          <p className="text-gray-900">{clientData.address}</p>
        )}
      </div>
    </div>
  );
}
