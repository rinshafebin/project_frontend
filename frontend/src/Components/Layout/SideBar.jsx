import React from 'react';
import {
  LayoutDashboard,
  Folder,
  Users,
  Calendar,
  Users2,
  Bell,
  User,
  Settings,
  LogOut,
  X,
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: <Folder size={18} />, label: 'Cases', path: '/cases', active: false },
    { icon: <Users size={18} />, label: 'Clients', path: '/clients', active: false },
    { icon: <Calendar size={18} />, label: 'Calendar', path: '/calendar', active: false },
    { icon: <Users2 size={18} />, label: 'Team', path: '/team', active: false },
    { icon: <Bell size={18} />, label: 'Notifications', path: '/notifications', badge: 5, active: false },
    { icon: <User size={18} />, label: 'Profile', path: '/profile', active: false },
    { icon: <Settings size={18} />, label: 'Settings', path: '/settings', active: false },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">
              L
            </div>
            <span className="text-xl font-bold text-black">LegalHub</span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden text-black hover:bg-gray-100 p-1 rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4 overflow-y-auto h-[calc(100vh-64px)]">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-lg
                    transition-colors duration-200
                    ${item.active 
                      ? 'bg-black text-white' 
                      : 'text-black hover:bg-gray-100'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* User Profile Section */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <div className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={20} className="text-gray-700" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-black">Adv. Rajesh Kumar</p>
                  <p className="text-xs text-gray-600">Senior Advocate</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg text-left flex items-center gap-2">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
