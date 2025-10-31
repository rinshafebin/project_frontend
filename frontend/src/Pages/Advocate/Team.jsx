import React from 'react'
import { Users, Mail } from 'lucide-react'

export default function Team() {
  const members = [
    { id: 1, name: 'Amit Verma', role: 'Junior Advocate', email: 'amit@legalpro.com' },
    { id: 2, name: 'Neha Singh', role: 'Paralegal Assistant', email: 'neha@legalpro.com' },
    { id: 3, name: 'John Doe', role: 'Intern', email: 'john@legalpro.com' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <Users className="w-6 h-6 text-indigo-600" /> Team Members
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map(member => (
          <div key={member.id} className="p-5 bg-white/80 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-900">{member.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{member.role}</p>
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <Mail className="w-4 h-4" /> {member.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
