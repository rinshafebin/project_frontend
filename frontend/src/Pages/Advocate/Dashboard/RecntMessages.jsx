import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function RecentMessages() {
  const messages = [
    { client: 'Raj Kumar', message: 'When is the next hearing date?', time: '2 hours ago', unread: true },
    { client: 'Anjali Sharma', message: 'I have new documents to share', time: '5 hours ago', unread: true },
    { client: 'Priya Mehta', message: 'Thank you for the update', time: '1 day ago', unread: false }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-purple-600" /> Recent Messages
        </h2>
      </div>
      <div className="p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer ${msg.unread ? 'bg-blue-50' : 'bg-gray-50'}`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm">{msg.client}</p>
                  {msg.unread && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                </div>
                <p className="text-sm text-gray-600 mt-1">{msg.message}</p>
                <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
