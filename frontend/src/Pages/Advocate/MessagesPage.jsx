import React from 'react';

export default function MessagesPage({ messages = [] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Messages</h2>
      <div className="space-y-4">
        {messages.length ? (
          messages.map((msg, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{msg.sender}</p>
                <p className="text-gray-600 text-sm">{msg.content}</p>
              </div>
              <span className="text-gray-500 text-xs">{msg.time}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No messages found.</p>
        )}
      </div>
    </div>
  );
}
