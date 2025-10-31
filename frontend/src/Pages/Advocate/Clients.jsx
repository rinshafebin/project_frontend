import React from 'react'
import { User, Mail, Phone } from 'lucide-react'

export default function Clients() {
  const clients = [
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', phone: '+91 98765 43210' },
    { id: 2, name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 99887 66554' },
    { id: 3, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+1 555 1122' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Clients</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map(client => (
          <div key={client.id} className="p-5 bg-white/80 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <User className="w-8 h-8 text-indigo-600" />
              <h2 className="font-semibold text-gray-900">{client.name}</h2>
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-2"><Mail className="w-4 h-4" /> {client.email}</div>
            <div className="text-sm text-gray-600 flex items-center gap-2"><Phone className="w-4 h-4" /> {client.phone}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
