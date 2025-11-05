import React, { useState } from "react";
import { Bell, Check, CheckCheck, Trash2, Filter, Briefcase, Calendar, FileText, Users, MessageSquare } from "lucide-react";
import Sidebar from "../../../Components/Layout/Advocate/Sidebar";
import Header from "../../../Components/Layout/Advocate/Header";

export default function NotificationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filter, setFilter] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "case",
      icon: Briefcase,
      title: "Case Update",
      message: "New development in Intellectual Property Dispute case",
      time: "5 mins ago",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      type: "hearing",
      icon: Calendar,
      title: "Hearing Reminder",
      message: "State vs. Kumar hearing tomorrow at 10:30 AM",
      time: "1 hour ago",
      read: false,
      priority: "high",
    },
    {
      id: 3,
      type: "message",
      icon: MessageSquare,
      title: "New Message",
      message: "Rajesh Kumar sent you a message",
      time: "2 hours ago",
      read: false,
      priority: "medium",
    },
    {
      id: 4,
      type: "document",
      icon: FileText,
      title: "Document Uploaded",
      message: "Client Agreement.docx has been uploaded",
      time: "3 hours ago",
      read: true,
      priority: "low",
    },
    {
      id: 5,
      type: "case",
      icon: Briefcase,
      title: "Case Assigned",
      message: "New case assigned: Real Estate Transaction",
      time: "5 hours ago",
      read: true,
      priority: "medium",
    },
    {
      id: 6,
      type: "team",
      icon: Users,
      title: "Team Update",
      message: "Amit Verma completed document review",
      time: "1 day ago",
      read: true,
      priority: "low",
    },
    {
      id: 7,
      type: "hearing",
      icon: Calendar,
      title: "Hearing Completed",
      message: "Property Dispute - Sharma hearing completed",
      time: "2 days ago",
      read: true,
      priority: "low",
    },
    {
      id: 8,
      type: "document",
      icon: FileText,
      title: "Document Pending",
      message: "5 documents require your signature",
      time: "2 days ago",
      read: true,
      priority: "medium",
    },
  ];

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "all") return true;
    if (filter === "unread") return !notif.read;
    return notif.type === filter;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Bell className="w-6 h-6" />
                    Notifications
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition flex items-center gap-2 text-sm">
                    <CheckCheck className="w-4 h-4" />
                    Mark All Read
                  </button>
                  <button className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition flex items-center gap-2 text-sm">
                    <Trash2 className="w-4 h-4" />
                    Clear All
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-2 shadow-sm mb-6">
                <div className="flex gap-2 overflow-x-auto">
                  {[
                    { id: "all", label: "All", icon: Bell },
                    { id: "unread", label: "Unread", icon: MessageSquare },
                    { id: "case", label: "Cases", icon: Briefcase },
                    { id: "hearing", label: "Hearings", icon: Calendar },
                    { id: "document", label: "Documents", icon: FileText },
                    { id: "team", label: "Team", icon: Users },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setFilter(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
                        filter === tab.id
                          ? "bg-black text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notifications List */}
              <div className="space-y-3">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notif) => {
                    const IconComponent = notif.icon;
                    return (
                      <div
                        key={notif.id}
                        className={`bg-white/80 backdrop-blur-sm rounded-2xl border p-5 hover:shadow-md transition cursor-pointer ${
                          notif.read ? "border-gray-100" : "border-blue-200 bg-blue-50/30"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              notif.read
                                ? "bg-gray-100"
                                : "bg-gradient-to-br from-black to-gray-700"
                            }`}
                          >
                            <IconComponent
                              className={`w-5 h-5 ${notif.read ? "text-gray-600" : "text-white"}`}
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-gray-900">{notif.title}</h3>
                                {!notif.read && (
                                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                )}
                              </div>
                              <span className="text-xs text-gray-500 whitespace-nowrap">
                                {notif.time}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{notif.message}</p>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs px-2 py-1 rounded-full font-medium ${
                                  notif.priority === "high"
                                    ? "bg-red-100 text-red-700"
                                    : notif.priority === "medium"
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-green-100 text-green-700"
                                }`}
                              >
                                {notif.priority}
                              </span>
                              {!notif.read && (
                                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                                  Mark as read
                                </button>
                              )}
                            </div>
                          </div>

                          <button className="p-2 hover:bg-gray-100 rounded-lg transition flex-shrink-0">
                            <Trash2 className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-12 text-center">
                    <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-medium">No notifications</p>
                    <p className="text-gray-400 text-sm mt-1">
                      You're all caught up!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}