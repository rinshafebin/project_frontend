import React from 'react';

const CaseList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('All');
  const [priorityFilter, setPriorityFilter] = React.useState('All');

  const cases = [
    { 
      id: 'C-2024-045', 
      title: 'Property Dispute - Mumbai', 
      client: 'Priya Sharma', 
      type: 'Civil',
      status: 'Active', 
      priority: 'High', 
      nextHearing: 'Jan 25, 2025',
      filingDate: 'Dec 10, 2024',
      court: 'District Court, Mumbai'
    },
    { 
      id: 'C-2024-044', 
      title: 'Contract Breach - Delhi', 
      client: 'Amit Patel', 
      type: 'Commercial',
      status: 'Active', 
      priority: 'Medium', 
      nextHearing: 'Jan 28, 2025',
      filingDate: 'Dec 8, 2024',
      court: 'High Court, Delhi'
    },
    { 
      id: 'C-2024-043', 
      title: 'Divorce Case - Chennai', 
      client: 'Sarah Johnson', 
      type: 'Family',
      status: 'Pending', 
      priority: 'Low', 
      nextHearing: 'Feb 5, 2025',
      filingDate: 'Dec 5, 2024',
      court: 'Family Court, Chennai'
    },
    { 
      id: 'C-2024-042', 
      title: 'Criminal Defense - Delhi', 
      client: 'Rahul Verma', 
      type: 'Criminal',
      status: 'Active', 
      priority: 'High', 
      nextHearing: 'Jan 22, 2025',
      filingDate: 'Nov 28, 2024',
      court: 'Sessions Court, Delhi'
    },
    { 
      id: 'C-2024-041', 
      title: 'Intellectual Property - Bangalore', 
      client: 'Tech Solutions Ltd', 
      type: 'IP',
      status: 'Active', 
      priority: 'Medium', 
      nextHearing: 'Feb 1, 2025',
      filingDate: 'Nov 25, 2024',
      court: 'High Court, Karnataka'
    },
    { 
      id: 'C-2024-040', 
      title: 'Employment Dispute - Mumbai', 
      client: 'Neha Kapoor', 
      type: 'Labor',
      status: 'Closed', 
      priority: 'Low', 
      nextHearing: '-',
      filingDate: 'Nov 20, 2024',
      court: 'Labor Court, Mumbai'
    },
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-300';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-300';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Closed': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const filteredCases = cases.filter(caseItem => {
    const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || caseItem.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || caseItem.priority === priorityFilter;
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
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm">
            New Case
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search by case ID, title, or client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option>All</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Closed</option>
            </select>

            {/* Priority Filter */}
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCases.map((caseItem) => (
            <div key={caseItem.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-gray-600">{caseItem.id}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(caseItem.status)}`}>
                      {caseItem.status}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(caseItem.priority)}`}>
                      {caseItem.priority}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black">{caseItem.title}</h3>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">Client:</span>
                  <span className="text-black font-medium">{caseItem.client}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">Type:</span>
                  <span className="text-black">{caseItem.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">Court:</span>
                  <span className="text-black">{caseItem.court}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">Filing Date:</span>
                  <span className="text-black">{caseItem.filingDate}</span>
                </div>
                {caseItem.nextHearing !== '-' && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">Next Hearing:</span>
                    <span className="text-black font-medium">{caseItem.nextHearing}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button className="flex-1 px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-50 text-sm">
                  View Details
                </button>
                <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 text-sm">
                  Document
                </button>
                <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 text-sm">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No cases found</p>
            <p className="text-sm text-gray-500 mt-2">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Showing {filteredCases.length} of {cases.length} cases
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              Previous
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseList;
