import React, { useState } from "react";
import { Lock, Shield, Settings, Bell, Globe, Calendar, Palette } from "lucide-react";
import Sidebar from "../../../Components/Layout/Advocate/Sidebar";
import Header from "../../../Components/Layout/Advocate/Header";

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    caseUpdates: true,
    hearingReminders: true,
    clientMessages: true,
  });

  const [preferences, setPreferences] = useState({
    language: "English",
    timezone: "IST (UTC+5:30)",
    dateFormat: "DD/MM/YYYY",
    theme: "Light",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
                <p className="text-sm text-gray-600 mt-1">Manage your account preferences and security</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notifications
                  </h3>
                  <div className="space-y-4">
                    {[
                      { key: "email", title: "Email Notifications", desc: "Receive updates via email" },
                      { key: "sms", title: "SMS Notifications", desc: "Receive updates via SMS" },
                      { key: "push", title: "Push Notifications", desc: "Receive push notifications" },
                      { divider: true },
                      { key: "caseUpdates", title: "Case Updates", desc: "Notify about case changes" },
                      { key: "hearingReminders", title: "Hearing Reminders", desc: "Remind about hearings" },
                      { key: "clientMessages", title: "Client Messages", desc: "Notify about new messages" },
                    ].map((item, idx) =>
                      item.divider ? (
                        <div key={idx} className="border-t border-gray-200 my-4"></div>
                      ) : (
                        <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div>
                            <p className="font-medium text-gray-900">{item.title}</p>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={notifications[item.key]}
                              onChange={(e) =>
                                setNotifications({ ...notifications, [item.key]: e.target.checked })
                              }
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                          </label>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Preferences
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          Language
                        </label>
                        <select
                          value={preferences.language}
                          onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                        >
                          <option>English</option>
                          <option>Hindi</option>
                          <option>Tamil</option>
                          <option>Telugu</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          Timezone
                        </label>
                        <select
                          value={preferences.timezone}
                          onChange={(e) => setPreferences({ ...preferences, timezone: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                        >
                          <option>IST (UTC+5:30)</option>
                          <option>PST (UTC-8:00)</option>
                          <option>EST (UTC-5:00)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Date Format
                        </label>
                        <select
                          value={preferences.dateFormat}
                          onChange={(e) => setPreferences({ ...preferences, dateFormat: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                        >
                          <option>DD/MM/YYYY</option>
                          <option>MM/DD/YYYY</option>
                          <option>YYYY-MM-DD</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <Palette className="w-4 h-4" />
                          Theme
                        </label>
                        <select
                          value={preferences.theme}
                          onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                        >
                          <option>Light</option>
                          <option>Dark</option>
                          <option>Auto</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Security
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition text-left flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Change Password</p>
                          <p className="text-sm text-gray-600">Update your password</p>
                        </div>
                        <Lock className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition text-left flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Two-Factor Auth</p>
                          <p className="text-sm text-gray-600">Add extra security</p>
                        </div>
                        <Shield className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition text-left flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Active Sessions</p>
                          <p className="text-sm text-gray-600">Manage logged devices</p>
                        </div>
                        <Settings className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}