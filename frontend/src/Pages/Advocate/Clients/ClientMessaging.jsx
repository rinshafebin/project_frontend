import React, { useState, useMemo } from "react";

// Reusable Components
const ClientItem = ({ client, selected, onClick }) => (
  <div
    onClick={() => onClick(client.id)}
    className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
      selected ? "bg-gray-100" : "hover:bg-gray-50"
    }`}
  >
    <div className="flex items-start gap-3">
      <div className="relative">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
          👤
        </div>
        {client.online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-black truncate">{client.name}</h3>
          <span className="text-xs text-gray-500">{client.time}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{client.lastMessage}</p>
      </div>
      {client.unread > 0 && (
        <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-semibold">
          {client.unread}
        </div>
      )}
    </div>
  </div>
);

const MessageBubble = ({ msg }) => (
  <div className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-xs lg:max-w-md rounded-lg p-3 ${
        msg.sender === "you" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <p className="text-sm">{msg.text}</p>
      <p className={`text-xs mt-1 ${msg.sender === "you" ? "text-gray-300" : "text-gray-500"}`}>
        {msg.time}
      </p>
    </div>
  </div>
);

const ChatHeader = ({ client }) => (
  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          👤
        </div>
        {client.online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div>
        <h2 className="font-semibold text-black">{client.name}</h2>
        <p className="text-xs text-gray-600">{client.online ? "Online" : "Offline"}</p>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="p-2 hover:bg-gray-100 rounded-lg">📞</button>
      <button className="p-2 hover:bg-gray-100 rounded-lg">📹</button>
      <button className="p-2 hover:bg-gray-100 rounded-lg">⋮</button>
    </div>
  </div>
);

const ClientMessaging = () => {
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const clients = [
    { id: 1, name: "Priya Sharma", lastMessage: "Thank you for the update", time: "2 hours ago", unread: 2, online: true },
    { id: 2, name: "Amit Patel", lastMessage: "When is the next hearing?", time: "5 hours ago", unread: 0, online: false },
    { id: 3, name: "Sarah Johnson", lastMessage: "I have sent the documents", time: "1 day ago", unread: 1, online: true },
    { id: 4, name: "Rahul Verma", lastMessage: "Can we schedule a meeting?", time: "2 days ago", unread: 0, online: false },
  ];

  const messages = {
    1: [
      { id: 1, sender: "client", text: "Good morning! I wanted to check on the case status.", time: "9:00 AM" },
      { id: 2, sender: "you", text: "Good morning! The hearing has been scheduled for Jan 25, 2025.", time: "9:15 AM" },
      { id: 7, sender: "client", text: "Thank you for the update", time: "10:10 AM" },
    ],
    2: [
      { id: 1, sender: "client", text: "Hello, when is the next hearing?", time: "Yesterday 3:00 PM" },
      { id: 2, sender: "you", text: "The next hearing is on Jan 28, 2025 at 2:30 PM.", time: "Yesterday 3:15 PM" },
    ],
  };

  const selectedClient = useMemo(() => clients.find(c => c.id === selectedClientId), [selectedClientId, clients]);

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sendMessage = () => {
    if (messageText.trim()) {
      alert(`Message sent: ${messageText}`);
      setMessageText("");
    }
  };

  return (
    <div className="h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-full md:w-96 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-black mb-4">Messages</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredClients.map(client => (
            <ClientItem
              key={client.id}
              client={client}
              selected={selectedClientId === client.id}
              onClick={setSelectedClientId}
            />
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedClient ? (
          <>
            <ChatHeader client={selectedClient} />
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {(messages[selectedClientId] || []).map(msg => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">📎</button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">😊</button>
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  onClick={sendMessage}
                  className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💬</div>
              <h2 className="text-2xl font-semibold text-black mb-2">Select a Client</h2>
              <p className="text-gray-600">Choose a client from the list to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientMessaging;
