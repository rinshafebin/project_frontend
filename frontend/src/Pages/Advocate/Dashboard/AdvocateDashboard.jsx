import React from 'react';
import { FaFileAlt, FaUsers, FaUserTie, FaBell, FaCommentDots } from 'react-icons/fa';

const AdvocateDashboard = () => {
  const modules = [
    {
      title: 'Case Management',
      description: 'Add, edit, and track your cases. Upload documents and set hearing dates.',
      icon: <FaFileAlt size={24} />,
      link: '/advocate/cases',
    },
    {
      title: 'Client Interaction',
      description: 'View client profiles, send/receive messages, and update case progress.',
      icon: <FaCommentDots size={24} />,
      link: '/advocate/clients',
    },
    {
      title: 'Profile Management',
      description: 'Manage your profile, experience, specialization, and contact info.',
      icon: <FaUserTie size={24} />,
      link: '/advocate/profile',
    },
    {
      title: 'Team Collaboration',
      description: 'Add junior lawyers or team members to assist in cases and share documents.',
      icon: <FaUsers size={24} />,
      link: '/advocate/team',
    },
    {
      title: 'Reminders & Notifications',
      description: 'Automatic reminders for hearings and notifications for client messages.',
      icon: <FaBell size={24} />,
      link: '/advocate/notifications',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Advocate Dashboard</h1>
        <nav className="flex flex-col gap-3">
          {modules.map((module) => (
            <a
              key={module.title}
              href={module.link}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              {module.icon}
              <span>{module.title}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">Welcome, Advocate</h2>
        <p className="text-gray-700 mb-8">
          Access and manage your cases, clients, and team from here.
        </p>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.title}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {module.icon}
                <h3 className="text-xl font-semibold">{module.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <a
                href={module.link}
                className="text-black font-medium hover:underline"
              >
                Go to {module.title}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdvocateDashboard;
