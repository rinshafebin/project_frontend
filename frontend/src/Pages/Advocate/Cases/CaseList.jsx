import React from 'react';
import CaseCard from '../../../Components/Common/CaseCard';

const CaseList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('All');
  const [priorityFilter, setPriorityFilter] = React.useState('All');

  const cases = [
    { id: 'C-2024-045', title: 'Property Dispute - Mumbai', client: 'Priya Sharma', type: 'Civil', status: 'Active', priority: 'High', nextHearing: 'Jan 25, 2025', filingDate: 'Dec 10, 2024', court: 'District Court, Mumbai' },
    { id: 'C-2024-044', title: 'Contract Breach - Delhi', client: 'Amit Patel', type: 'Commercial', status: 'Active', priority: 'Medium', nextHearing: 'Jan 28, 2025', filingDate: 'Dec 8, 2024', court: 'High Court, Delhi' },
    { id: 'C-2024-043', title: 'Divorce Case - Chennai', client: 'Sarah Johnson', type: 'Family', status: 'Pending', priority: 'Low', nextHearing: 'Feb 5, 2025', filingDate: 'Dec 5, 2024', court: 'Family Court, Chennai' },
    { id: 'C-2024-042', title: 'Criminal Defense - Delhi', client: 'Rahul Verma', type: 'Criminal', status: 'Active', priority: 'High', nextHearing: 'Jan 22, 2025', filingDate: 'Nov 28, 2024', court: 'Sessions Court, Delhi' },
    { id: 'C-2024-041', title: 'Intellectual Property - Bangalore', client: 'Tech Solutions Ltd', type: 'IP', status: 'Active', priority: 'Medium', nextHearing: 'Feb 1, 2025', filingDate: 'Nov 25, 2024', court: 'High Court, Karnataka' },
    { id: 'C-2024-040', title: 'Employment Dispute - Mumbai', client: 'Neha Kapoor', type: 'Labor', status: 'Closed', priority: 'Low', nextHearing: '-', filingDate: 'Nov 20, 2024', court: 'Labor Court, Mumbai' },
  ];

  const filteredCases = cases.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || c.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-black">Cases</h1>
            <p className="text-gray-600 mt-1">Manage all your legal cases</p>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
            + New Case
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search by case ID, title, or client..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
              <option>All</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Closed</option>
            </select>
            <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCases.map(c => <CaseCard key={c.id} caseItem={c} />)}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No cases found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseList;
