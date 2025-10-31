import React, { useState } from 'react'
import { Briefcase, Calendar, FileText, Users } from 'lucide-react'
import Sidebar from '../../Components/Layout/Advocate/Sidebar'
import Header from '../../Components/Layout/Advocate/Header'
import StatsGrid from '../../Components/Layout/Advocate/StatsGrid'
import ActiveCases from '../Advocate/ActiveCases'
import UpcomingHearings from './UpcomingHearings'
import QuickActions from './QuickActions'
import RecentMessages from './RecentMessages'

export default function AdvocateDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Active Cases', value: '24', icon: Briefcase, color: 'from-blue-500 to-indigo-600', change: '+3 this week' },
    { label: 'Upcoming Hearings', value: '8', icon: Calendar, color: 'from-purple-500 to-pink-500', change: '3 this week' },
    { label: 'Pending Documents', value: '12', icon: FileText, color: 'from-amber-400 to-amber-600', change: '5 urgent' },
    { label: 'Total Clients', value: '47', icon: Users, color: 'from-green-400 to-teal-500', change: '+2 new' },
  ]

  const upcomingHearings = [
    { id: 1, case: 'State vs. Kumar', client: 'Rajesh Kumar', date: '2025-10-28', time: '10:30 AM', court: 'District Court', type: 'Civil', priority: 'high' },
    { id: 2, case: 'Property Dispute - Sharma', client: 'Priya Sharma', date: '2025-10-29', time: '02:00 PM', court: 'High Court', type: 'Property', priority: 'medium' },
    { id: 3, case: 'Corporate Agreement Case', client: 'Tech Solutions Ltd', date: '2025-10-30', time: '11:00 AM', court: 'Civil Court', type: 'Corporate', priority: 'high' },
  ]

  const activeCases = [
    { id: 1, title: 'Intellectual Property Dispute', caseNo: 'IP/2025/001', client: 'Innovate Inc', status: 'In Progress', nextHearing: '2025-11-05', priority: 'high', category: 'IP Law' },
    { id: 2, title: 'Employment Contract Case', caseNo: 'EMP/2025/042', client: 'Sarah Johnson', status: 'Document Review', nextHearing: '2025-11-12', priority: 'medium', category: 'Labor Law' },
    { id: 3, title: 'Real Estate Transaction', caseNo: 'RE/2025/089', client: 'Green Developers', status: 'Negotiation', nextHearing: '2025-11-08', priority: 'high', category: 'Property Law' },
    { id: 4, title: 'Corporate Merger Advisory', caseNo: 'CORP/2025/023', client: 'Tech Ventures Ltd', status: 'Due Diligence', nextHearing: '2025-11-15', priority: 'medium', category: 'Corporate Law' },
  ]

  const recentMessages = [
    { id: 1, sender: 'Rajesh Kumar', message: 'Thank you for the update on my case. When is the next hearing?', time: '10 mins ago', unread: true, avatar: 'RK', type: 'client' },
    { id: 2, sender: 'Priya Sharma', message: 'I have sent the additional documents you requested.', time: '1 hour ago', unread: true, avatar: 'PS', type: 'client' },
    { id: 3, sender: 'Junior Advocate - Amit', message: 'Draft petition ready for your review.', time: '2 hours ago', unread: false, avatar: 'AA', type: 'team' },
    { id: 4, sender: 'Tech Solutions Ltd', message: 'Can we schedule a meeting this week?', time: '5 hours ago', unread: false, avatar: 'TS', type: 'client' },
    { id: 5, sender: 'Sarah Johnson', message: 'Got it, thanks for clarifying the legal terms.', time: '1 day ago', unread: false, avatar: 'SJ', type: 'client' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-7xl mx-auto">
              {/* Stats Section */}
              <StatsGrid stats={stats} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <UpcomingHearings upcomingHearings={upcomingHearings} />

                <div className="space-y-6">
                  <QuickActions />
                  <RecentMessages recentMessages={recentMessages} />
                </div>
              </div>

              <div className="mt-6">
                <ActiveCases activeCases={activeCases} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
