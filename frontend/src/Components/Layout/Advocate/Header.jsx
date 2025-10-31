import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Search, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate(); 

  return (
    <header className="bg-white/60 backdrop-blur-md border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Greeting Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome back, Advocate
          </h1>
          <p className="text-sm text-gray-500">
            Here's what's happening with your cases today
          </p>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search cases, clients..."
              className="pl-10 pr-4 py-2 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-white"
            />
          </div>

          {/* Notifications */}
          <button className="p-2 rounded-xl hover:bg-gray-100 transition relative">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
          </button>

          {/* Profile Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
          >
            {/* Avatar */}
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer ring-2 ring-white shadow">
              AK
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 z-50 overflow-hidden"
                >
                  {/* Profile Info */}
                  <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                      AK
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Adv. Akshay Kumar
                      </div>
                      <div className="text-xs text-gray-500">Civil Lawyer</div>
                    </div>
                  </div>

                  {/* Dropdown Buttons */}
                  <div className="p-3">
                    {/* ✅ Navigate to Advocate Profile Page */}
                    <button
                      onClick={() => navigate("/advocate-profile")}
                      className="w-full text-left flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <User className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">View Profile</span>
                    </button>

                    <button className="w-full text-left flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition">
                      <LogOut className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Logout</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
