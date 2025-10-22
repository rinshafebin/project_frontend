import React, { useState } from 'react';
import { Scale, Menu } from 'lucide-react';
import Sidebar from '../../../Components/Layout/Advocate/Sidebar';
import Header from '../../../Components/Layout/Advocate/Header';
import StatsSection from '../../../Components/Layout/Advocate/StatsSection';
import UpcomingHearings from './UpcomingHearings';
import RecentMessages from './RecntMessages';
import ActiveCases from './ActiveCases';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');

  // Define the navigation items here
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Scale },
    { id: 'cases', label: 'Cases', icon: Scale },
    { id: 'clients', label: 'Clients', icon: Scale, badge: 3 },
    { id: 'messages', label: 'Messages', icon: Scale },
    { id: 'documents', label: 'Documents', icon: Scale },
    { id: 'team', label: 'Team', icon: Scale },
    { id: 'profile', label: 'Clients', icon: Scale, badge: 3 },
    { id: 'settign', label: 'Messages', icon: Scale },
    

  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeView={activeView}
        setActiveView={setActiveView}
        navigationItems={navigationItems}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8 space-y-6">
          <StatsSection />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <UpcomingHearings />
            <RecentMessages />
          </div>
          <ActiveCases />
        </main>
      </div>
    </div>
  );
}
