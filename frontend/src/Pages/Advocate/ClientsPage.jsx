import React from 'react';
import { User } from 'lucide-react';

export default function ClientsPage({ clients = [] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.length ? (
          clients.map((client) => (
            <div key={client.id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.email}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{client.cases} Active Cases</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No clients found.</p>
        )}
      </div>
    </div>
  );
}
