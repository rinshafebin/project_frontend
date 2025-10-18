import React from 'react';
import { BarChart3, Briefcase, Users, MessageSquare, Calendar, FileText, Bell, Settings } from 'lucide-react';
import NavigationItem from './NavigationItem';

export default function Sidebar({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab }) {
  return (
    <aside className={`fixed lg:sticky top-0 left-0 h-screen bg-white shadow-lg z-30 transition-transform duration-300 
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} w-64 p-4 overflow-y-auto`}>
      <nav className="space-y-2 mt-4">
        <NavigationItem icon={BarChart3} label="Dashboard" tab="dashboard" {...{activeTab, setActiveTab}} />
        <NavigationItem icon={Briefcase} label="Cases" tab="cases" {...{activeTab, setActiveTab}} />
        <NavigationItem icon={Users} label="Clients" tab="clients" {...{activeTab, setActiveTab}} />
        <NavigationItem icon={MessageSquare} label="Messages" tab="messages" {...{activeTab, setActiveTab}} badge="3" />
        <NavigationItem icon={Calendar} label="Calendar" tab="calendar" {...{activeTab, setActiveTab}} />
        <NavigationItem icon={FileText} label="Documents" tab="documents" {...{activeTab, setActiveTab}} />
        <NavigationItem icon={Bell} label="Reminders" tab="reminders" {...{activeTab, setActiveTab}} />
        <NavigationItem icon={Settings} label="Settings" tab="settings" {...{activeTab, setActiveTab}} />
      </nav>
    </aside>
  );
}
