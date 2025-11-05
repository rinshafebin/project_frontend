import React, { useState } from "react";
import { Bell, Search, User, LogOut, MessageSquare, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 px-8 py-4 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Greeting Section */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Welcome back, Advocate
          </h1>
          <p className="text-sm text-gray-600">
            Here's what's happening with your cases today
          </p>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative hidden md:block">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search cases, clients..."
              className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-64 bg-white transition"
            />
          </div>

          {/* Message Button */}
          <button
            onClick={() => navigate("/advocate/messages")}
            className="p-2.5 rounded-xl hover:bg-gray-100 transition relative"
            aria-label="Messages"
          >
            <MessageSquare className="w-5 h-5 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white" />
          </button>

          {/* Notifications Button */}
          <button
            onClick={() => navigate("/advocate/notifications")}
            className="p-2.5 rounded-xl hover:bg-gray-100 transition relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              onBlur={() => setTimeout(() => setShowProfile(false), 200)}
              className="w-10 h-10 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer ring-2 ring-gray-200 hover:ring-gray-300 shadow-sm transition"
            >
              AK
            </button>

            {/* Dropdown Menu */}
            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                {/* Profile Info */}
                <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-gradient-to-br from-gray-50 to-white">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-black to-gray-700 flex items-center justify-center text-white font-semibold shadow-sm">
                    AK
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Adv. Akshay Kumar
                    </div>
                    <div className="text-xs text-gray-600">Civil Lawyer</div>
                  </div>
                </div>

                {/* Dropdown Buttons */}
                <div className="p-2">
                  <button
                    onClick={() => {
                      navigate("/advocate/profile");
                      setShowProfile(false);
                    }}
                    className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-900 font-medium">View Profile</span>
                  </button>

                  <button
                    onClick={() => {
                      navigate("/advocate/settings");
                      setShowProfile(false);
                    }}
                    className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Settings className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-900 font-medium">Settings</span>
                  </button>

                  <div className="my-2 border-t border-gray-100"></div>

                  <button
                    onClick={() => {
                      // Handle logout logic
                      setShowProfile(false);
                    }}
                    className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 transition text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">Logout</span>
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