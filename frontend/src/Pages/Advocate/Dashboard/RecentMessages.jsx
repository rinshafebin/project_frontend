import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

export default function RecentMessages({ recentMessages }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black flex items-center gap-2">
          <MessageSquare className="w-6 h-6" /> Recent Messages
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {recentMessages.map(msg => (
          <div key={msg.id} className={`flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer ${msg.unread ? 'bg-blue-50' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 ${
              msg.type === 'client' ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-green-500 to-teal-600'
            }`}>
              {msg.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className={`text-sm font-semibold ${msg.unread ? 'text-black' : 'text-gray-700'}`}>
                  {msg.sender}
                </h4>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              <p className={`text-sm truncate ${msg.unread ? 'text-gray-700 font-medium' : 'text-gray-600'}`}>
                {msg.message}
              </p>
              {msg.unread && <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>}
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2">
        <Send className="w-4 h-4" /> Compose Message
      </button>
    </div>
  );
}
