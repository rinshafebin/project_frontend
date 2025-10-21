import { useState } from 'react';
import { Scale, BarChart3, Briefcase, Users, Calendar, MessageSquare, FileText, User, Settings, Menu, X } from 'lucide-react';

export default function Sidebar({ activeView, setActiveView }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'cases', label: 'Case Management', icon: Briefcase },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 2 },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className={(sidebarOpen ? 'w-64' : 'w-20') + ' bg-white text-black border-r border-gray-200 transition-all duration-300 flex flex-col'}>
      <div className="p-6 border-b border-gray-200">
        {sidebarOpen ? (
          <div className="flex items-center gap-3">
            <Scale className="w-8 h-8" />
            <div>
              <h1 className="font-bold text-lg">LegalDesk</h1>
              <p className="text-xs text-gray-500">Case Management</p>
            </div>
          </div>
        ) : (
          <Scale className="w-8 h-8 mx-auto" />
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ' + (activeView === item.id ? 'bg-gray-200' : 'hover:bg-gray-100')}
            >
              <IconComponent className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
              {sidebarOpen && item.badge && (
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-4 border-t border-gray-200 hover:bg-gray-100 transition"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  );
}
