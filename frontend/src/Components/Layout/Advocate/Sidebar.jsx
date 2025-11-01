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


import React, { useState } from 'react'
import { Briefcase, Calendar, FileText, Users, Scale, Menu, X, TrendingUp, Settings, Plus, Search, Filter, Clock, CheckCircle, Mail, Phone, Edit, Trash2, Eye, Download, Upload, Video, MessageSquare, Bell, Lock, Shield, User } from 'lucide-react'

// Sidebar Component
function Sidebar({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab }) {
  const items = [
    { id: "overview", icon: TrendingUp, label: "Overview" },
    { id: "cases", icon: Briefcase, label: "My Cases" },
    { id: "clients", icon: Users, label: "Clients" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "documents", icon: FileText, label: "Documents" },
    { id: "team", icon: Users, label: "Team" },
  ]

  return (
    <aside className={`flex flex-col ${sidebarOpen ? "w-72" : "w-20"} bg-gradient-to-b from-gray-950 to-gray-900 text-white transition-all duration-300 shadow-xl z-20`}>
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

      <nav className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group ${
              activeTab === item.id ? "bg-white/10 backdrop-blur-sm" : "hover:bg-white/5"
            }`}
          >
            <item.icon className="w-5 h-5 text-white opacity-95 group-hover:scale-105 transition-transform duration-150" />
            {sidebarOpen && <span className="font-medium text-sm text-white truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button 
          onClick={() => setActiveTab('settings')}
          className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
            activeTab === 'settings' ? 'bg-white/10' : 'hover:bg-white/5'
          }`}
        >
          <Settings className="w-5 h-5" />
          {sidebarOpen && <span className="text-sm">Settings</span>}
        </button>
      </div>
    </aside>
  )
}

// Header Component
function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Advocate</h1>
          <p className="text-sm text-gray-600">Manage your cases and clients efficiently</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
              AK
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Stats Grid Component
function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
          <div className="text-xs text-gray-500">{stat.change}</div>
        </div>
      ))}
    </div>
  )
}

// Overview Page
function OverviewPage() {
  const stats = [
    { label: 'Active Cases', value: '24', icon: Briefcase, color: 'from-blue-500 to-indigo-600', change: '+3 this week' },
    { label: 'Upcoming Hearings', value: '8', icon: Calendar, color: 'from-purple-500 to-pink-500', change: '3 this week' },
    { label: 'Pending Documents', value: '12', icon: FileText, color: 'from-amber-400 to-amber-600', change: '5 urgent' },
    { label: 'Total Clients', value: '47', icon: Users, color: 'from-green-400 to-teal-500', change: '+2 new' },
  ]

  const upcomingHearings = [
    { id: 1, case: 'State vs. Kumar', client: 'Rajesh Kumar', date: '2025-11-01', time: '10:30 AM', court: 'District Court', priority: 'high' },
    { id: 2, case: 'Property Dispute - Sharma', client: 'Priya Sharma', date: '2025-11-02', time: '02:00 PM', court: 'High Court', priority: 'medium' },
    { id: 3, case: 'Corporate Agreement Case', client: 'Tech Solutions Ltd', date: '2025-11-03', time: '11:00 AM', court: 'Civil Court', priority: 'high' },
  ]

  return (
    <div className="space-y-6">
      <StatsGrid stats={stats} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Hearings</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {upcomingHearings.map((hearing) => (
              <div key={hearing.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">{hearing.case}</h3>
                    <p className="text-sm text-gray-600">{hearing.client}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>{hearing.date}</span>
                      <span>{hearing.time}</span>
                      <span>{hearing.court}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    hearing.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {hearing.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Case document submitted</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">New message from client</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Cases Page
function CasesPage() {
  const cases = [
    { id: 1, title: 'Intellectual Property Dispute', caseNo: 'IP/2025/001', client: 'Innovate Inc', status: 'In Progress', nextHearing: '2025-11-05', priority: 'high', category: 'IP Law' },
    { id: 2, title: 'Employment Contract Case', caseNo: 'EMP/2025/042', client: 'Sarah Johnson', status: 'Document Review', nextHearing: '2025-11-12', priority: 'medium', category: 'Labor Law' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">My Cases</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Case
        </button>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
        {cases.map((c) => (
          <div key={c.id} className="p-5 border border-gray-200 rounded-xl hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
            <p className="text-sm text-gray-500">Case No: {c.caseNo}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Clients Page
function ClientsPage() {
  const clients = [
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh.kumar@email.com', phone: '+91 98765 43210', cases: 3, avatar: 'RK' },
    { id: 2, name: 'Priya Sharma', email: 'priya.sharma@email.com', phone: '+91 98765 43211', cases: 2, avatar: 'PS' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Clients</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Client
        </button>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div key={client.id} className="p-5 border border-gray-200 rounded-xl hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {client.avatar}
                </div>
                <h3 className="font-semibold text-gray-800">{client.name}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{client.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Calendar Page
function CalendarPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Calendar</h2>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-6">November 2025</h3>
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="aspect-square flex items-center justify-center text-sm rounded-lg hover:bg-gray-100 cursor-pointer">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Documents Page
function DocumentsPage() {
  const documents = [
    { id: 1, name: 'Case Brief.pdf', type: 'PDF', size: '2.4 MB', date: '2025-10-28' },
    { id: 2, name: 'Agreement.docx', type: 'DOCX', size: '156 KB', date: '2025-10-27' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Documents</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload
        </button>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-3">
        {documents.map((doc) => (
          <div key={doc.id} className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.type} • {doc.size}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Download className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Team Page
function TeamPage() {
  const team = [
    { id: 1, name: 'Amit Patel', role: 'Junior Advocate', email: 'amit@law.com', cases: 8, avatar: 'AP' },
    { id: 2, name: 'Sneha Reddy', role: 'Legal Assistant', email: 'sneha@law.com', cases: 5, avatar: 'SR' },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {team.map((member) => (
          <div key={member.id} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {member.avatar}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Settings Page
function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    caseUpdates: true,
    hearingReminders: true,
    clientMessages: true
  })

  const [preferences, setPreferences] = useState({
    language: 'English',
    timezone: 'IST',
    dateFormat: 'DD/MM/YYYY',
    theme: 'Light'
  })

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">SMS Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via SMS</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Push Notifications</p>
                <p className="text-sm text-gray-600">Receive push notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.push}
                  onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Case Updates</p>
                <p className="text-sm text-gray-600">Notify about case changes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.caseUpdates}
                  onChange={(e) => setNotifications({...notifications, caseUpdates: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Hearing Reminders</p>
                <p className="text-sm text-gray-600">Remind about hearings</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.hearingReminders}
                  onChange={(e) => setNotifications({...notifications, hearingReminders: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Client Messages</p>
                <p className="text-sm text-gray-600">Notify about new messages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.clientMessages}
                  onChange={(e) => setNotifications({...notifications, clientMessages: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select
                  value={preferences.language}
                  onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                <select
                  value={preferences.timezone}
                  onChange={(e) => setPreferences({...preferences, timezone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>IST (UTC+5:30)</option>
                  <option>PST (UTC-8:00)</option>
                  <option>EST (UTC-5:00)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                <select
                  value={preferences.dateFormat}
                  onChange={(e) => setPreferences({...preferences, dateFormat: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>DD/MM/YYYY</option>
                  <option>MM/DD/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                <select
                  value={preferences.theme}
                  onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>Auto</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Security</h3>
            <div className="space-y-3">
              <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-left flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Change Password</p>
                  <p className="text-sm text-gray-600">Update your password</p>
                </div>
                <Lock className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-left flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Two-Factor Auth</p>
                  <p className="text-sm text-gray-600">Add extra security</p>
                </div>
                <Shield className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-left flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Active Sessions</p>
                  <p className="text-sm text-gray-600">Manage logged devices</p>
                </div>
                <Settings className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main App
export default function AdvocateDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-7xl mx-auto">
              {activeTab === 'overview' && <OverviewPage />}
              {activeTab === 'cases' && <CasesPage />}
              {activeTab === 'clients' && <ClientsPage />}
              {activeTab === 'calendar' && <CalendarPage />}
              {activeTab === 'documents' && <DocumentsPage />}
              {activeTab === 'team' && <TeamPage />}
              {activeTab === 'settings' && <SettingsPage />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}