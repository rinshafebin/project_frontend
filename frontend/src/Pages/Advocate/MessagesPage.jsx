import React, { useState } from "react";
import { MessageSquare, Search, Send, Paperclip, Phone, Video, MoreVertical, ArrowLeft } from "lucide-react";
import Sidebar from "../../Components/Layout/Advocate/Sidebar";
import Header from "../../Components/Layout/Advocate/Header";

export default function MessagesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Rajesh Kumar",
      avatar: "RK",
      lastMessage: "Thank you for the update on my case.",
      time: "10 mins ago",
      unread: 2,
      online: true,
      type: "client",
    },
    {
      id: 2,
      name: "Priya Sharma",
      avatar: "PS",
      lastMessage: "I have sent the additional documents.",
      time: "1 hour ago",
      unread: 1,
      online: true,
      type: "client",
    },
    {
      id: 3,
      name: "Amit Verma (Team)",
      avatar: "AV",
      lastMessage: "Draft petition ready for your review.",
      time: "2 hours ago",
      unread: 0,
      online: false,
      type: "team",
    },
    {
      id: 4,
      name: "Tech Solutions Ltd",
      avatar: "TS",
      lastMessage: "Can we schedule a meeting this week?",
      time: "5 hours ago",
      unread: 0,
      online: false,
      type: "client",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      avatar: "SJ",
      lastMessage: "Got it, thanks for clarifying.",
      time: "1 day ago",
      unread: 0,
      online: false,
      type: "client",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Rajesh Kumar",
      content: "Hello, I wanted to check on the status of my case.",
      time: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Good morning! I've reviewed your case and we have a hearing scheduled for next week.",
      time: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Rajesh Kumar",
      content: "That's great news. What documents do I need to bring?",
      time: "10:35 AM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      content: "Please bring your ID proof, property documents, and the original agreement. I'll send you a detailed checklist via email.",
      time: "10:37 AM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Rajesh Kumar",
      content: "Thank you for the update on my case. I'll prepare everything.",
      time: "10:40 AM",
      isOwn: false,
    },
  ];

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentChat = conversations.find((c) => c.id === selectedChat);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message logic here
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-hidden p-8">
            <div className="max-w-7xl mx-auto h-full">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  Messages
                </h2>
              </div>

              <div className="grid grid-cols-12 gap-6 h-[calc(100vh-200px)]">
                {/* Conversations List */}
                <div className="col-span-12 lg:col-span-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                  <div className="p-4 border-b border-gray-100">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search conversations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    {filteredConversations.map((conv) => (
                      <button
                        key={conv.id}
                        onClick={() => setSelectedChat(conv.id)}
                        className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition border-b border-gray-100 ${
                          selectedChat === conv.id ? "bg-gray-50" : ""
                        }`}
                      >
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
                            {conv.avatar}
                          </div>
                          {conv.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-gray-900 text-sm truncate">
                              {conv.name}
                            </h3>
                            <span className="text-xs text-gray-500">{conv.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                            {conv.unread > 0 && (
                              <span className="ml-2 bg-black text-white text-xs font-medium px-2 py-0.5 rounded-full">
                                {conv.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chat Area */}
                <div className="col-span-12 lg:col-span-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                  {/* Chat Header */}
                  {currentChat && (
                    <>
                      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                            <ArrowLeft className="w-5 h-5" />
                          </button>
                          <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-700 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
                            {currentChat.avatar}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{currentChat.name}</h3>
                            <p className="text-xs text-gray-600">
                              {currentChat.online ? "Online" : "Offline"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                            <Phone className="w-5 h-5 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                            <Video className="w-5 h-5 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                            <MoreVertical className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                                msg.isOwn
                                  ? "bg-gradient-to-r from-black to-gray-800 text-white"
                                  : "bg-gray-100 text-gray-900"
                              }`}
                            >
                              <p className="text-sm">{msg.content}</p>
                              <p
                                className={`text-xs mt-1 ${
                                  msg.isOwn ? "text-gray-300" : "text-gray-500"
                                }`}
                              >
                                {msg.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Message Input */}
                      <div className="p-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                            <Paperclip className="w-5 h-5 text-gray-600" />
                          </button>
                          <input
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                          />
                          <button
                            onClick={handleSendMessage}
                            className="p-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:opacity-90 transition"
                          >
                            <Send className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}