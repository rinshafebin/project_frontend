import React from 'react';

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input type="text" defaultValue="Adv. Arjun Menon" className="w-full border p-2 rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" defaultValue="arjun.menon@legaladv.com" className="w-full border p-2 rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <input type="text" defaultValue="+91 9876543210" className="w-full border p-2 rounded-lg" />
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Save Changes</button>
      </form>
    </div>
  );
}
