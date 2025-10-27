import React, { useState } from 'react';
import { Search, Bell, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold text-black">Welcome back, Advocate</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your cases today</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          {/* Search */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search cases, clients..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black w-64"
            />
          </div>

          {/* Notifications */}
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Avatar with Hover Menu */}
          <div
            className="relative"
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer">
              AK
            </div>

            {/* Hover Profile Menu */}
            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    AK
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Adv. Akshay Kumar</h3>
                    <p className="text-xs text-gray-500">Civil Lawyer</p>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <button
                    onClick={() => navigate('/advocate-profile')}
                    className="flex items-center gap-2 text-gray-700 hover:text-black w-full text-left"
                  >
                    <User className="w-4 h-4" /> View Profile
                  </button>
                  <button
                    onClick={() => alert('Logging out...')}
                    className="flex items-center gap-2 text-gray-700 hover:text-black w-full text-left"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
