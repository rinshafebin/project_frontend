import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from './Header';
import DashboardStats from './DashboardStats';
import UpcomingHearings from './UpcomingHearings';
import RecentMessages from './RecentMessages';
import ActiveCasesTable from './ActiveCasesTable';
import CaseCardGrid from './CaseCardGrid';
import Profile from './Profile';
import TeamManagement from './TeamManagement';

export default function AdvocateDashboard() {
  const [activeView, setActiveView] = useState('dashboard');

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'cases', label: 'Case Management' },
    { id: 'clients', label: 'Clients' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'messages', label: 'Messages' },
    { id: 'documents', label: 'Documents' },
    { id: 'team', label: 'Team' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' }
  ];

  const renderContent = () => {
    switch(activeView) {
      case 'dashboard': 
        return (
          <>
            <DashboardStats />
            <UpcomingHearings />
            <RecentMessages />
            <ActiveCasesTable />
          </>
        );
      case 'cases': return <CaseCardGrid />;
      case 'profile': return <Profile />;
      case 'team': return <TeamManagement />;
      default:
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <p className="text-black">This section is under development</p>
          </div>
        );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activeView={activeView} navigationItems={navigationItems} />
        <main className="flex-1 overflow-y-auto p-8 bg-white text-black">{renderContent()}</main>
      </div>
    </div>
  );
}
