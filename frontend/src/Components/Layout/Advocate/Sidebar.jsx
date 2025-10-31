import React from "react"
import {
  Scale,
  Menu,
  X,
  TrendingUp,
  Briefcase,
  Users,
  Calendar,
  FileText,
  Settings,
} from "lucide-react"

/**
 * Sidebar Component
 * Props:
 * - sidebarOpen (boolean): whether sidebar is expanded
 * - setSidebarOpen (function): toggles sidebar state
 * - activeTab (string): currently selected tab ID
 * - setActiveTab (function): sets the active tab
 */
export default function Sidebar({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab }) {
  const items = [
    { id: "overview", icon: TrendingUp, label: "Overview" },
    { id: "cases", icon: Briefcase, label: "My Cases" },
    { id: "clients", icon: Users, label: "Clients" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "documents", icon: FileText, label: "Documents" },
    { id: "team", icon: Users, label: "Team" },
  ]

  return (
    <aside
      className={`flex flex-col ${
        sidebarOpen ? "w-72" : "w-20"
      } bg-gradient-to-b from-gray-950 to-gray-900 text-white transition-all duration-300 shadow-xl z-20`}
    >
      {/* Header */}
      <div className="px-6 py-5 flex items-center justify-between border-b border-gray-800">
        {sidebarOpen && (
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8 text-white opacity-95" />
            <div>
              <div className="text-lg font-bold leading-none tracking-wide">LegalPro</div>
              <div className="text-xs text-gray-400">Advocate Dashboard</div>
            </div>
          </div>
        )}

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
          className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group ${
              activeTab === item.id
                ? "bg-white/10 backdrop-blur-sm"
                : "hover:bg-white/5"
            }`}
          >
            <item.icon
              className={`w-5 h-5 text-white opacity-95 group-hover:scale-105 transition-transform duration-150`}
            />
            {sidebarOpen && (
              <span className="font-medium text-sm text-white truncate">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition">
          <Settings className="w-5 h-5" />
          {sidebarOpen && <span className="text-sm">Settings</span>}
        </button>
      </div>
    </aside>
  )
}
