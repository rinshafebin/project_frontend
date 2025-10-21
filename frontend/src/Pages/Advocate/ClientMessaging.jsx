import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ClientMessaging({ client }) {
  const [messages, setMessages] = useState([
    { sender: 'client', text: 'Hello, when is the next hearing?', time: '10:30 AM' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'advocate', text: input, time: new Date().toLocaleTimeString() }]);
    setInput('');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Chat with {client}</h3>
      <div className="h-64 overflow-y-auto border border-gray-200 rounded-lg p-4 mb-4 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'advocate' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-lg ${msg.sender === 'advocate' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-800'}`}>
              <p className="text-sm">{msg.text}</p>
              <span className="text-xs text-gray-500 mt-1 block text-right">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
          <Send className="w-4 h-4" /> Send
        </button>
      </div>
    </div>
  );
}
