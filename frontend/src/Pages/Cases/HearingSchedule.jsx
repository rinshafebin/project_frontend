import React, { useState } from "react";

// Helper constants
const priorityColors = {
  High: "bg-red-100 text-red-800 border-red-300",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-300",
  Low: "bg-green-100 text-green-800 border-green-300",
};

const typeColors = {
  "Case Hearing": "bg-blue-100 text-blue-800",
  "Final Arguments": "bg-purple-100 text-purple-800",
  Mediation: "bg-green-100 text-green-800",
  "Status Update": "bg-gray-100 text-gray-800",
  "First Hearing": "bg-orange-100 text-orange-800",
};

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

// Components
const HearingCard = ({ hearing }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
      {/* Date Badge */}
      <div className="flex-shrink-0 w-20 text-center">
        <div className="bg-black text-white rounded-lg p-3">
          <p className="text-2xl font-bold">{new Date(hearing.date).getDate()}</p>
          <p className="text-xs uppercase">
            {new Date(hearing.date).toLocaleString("default", { month: "short" })}
          </p>
        </div>
      </div>

      {/* Hearing Details */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-semibold text-gray-600">{hearing.caseId}</span>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full border ${priorityColors[hearing.priority]}`}
              >
                {hearing.priority}
              </span>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${typeColors[hearing.type]}`}
              >
                {hearing.type}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-black">{hearing.caseTitle}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">🕐 Time:</span>
            <span className="text-black font-medium">{hearing.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">⚖️ Judge:</span>
            <span className="text-black">{hearing.judge}</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:col-span-2">
            <span className="text-gray-600">🏛️ Court:</span>
            <span className="text-black">{hearing.court}</span>
          </div>
        </div>

        {hearing.notes && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
            <p className="text-sm text-black">
              <span className="font-medium">Notes:</span> {hearing.notes}
            </p>
          </div>
        )}

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm">
            View Case
          </button>
          <button className="px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-50 text-sm">
            Reschedule
          </button>
          <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 text-sm">
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  </div>
);

const PastHearingRow = ({ hearing }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-6 py-4 whitespace-nowrap">
      <span className="text-sm text-black font-medium">{formatDate(hearing.date)}</span>
      <p className="text-xs text-gray-600">{hearing.time}</p>
    </td>
    <td className="px-6 py-4">
      <p className="text-sm font-medium text-black">{hearing.caseTitle}</p>
      <p className="text-xs text-gray-600">{hearing.caseId}</p>
    </td>
    <td className="px-6 py-4">
      <span className="text-sm text-black">{hearing.court}</span>
    </td>
    <td className="px-6 py-4">
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${typeColors[hearing.type]}`}
      >
        {hearing.type}
      </span>
    </td>
    <td className="px-6 py-4">
      <span className="text-sm text-black">{hearing.outcome}</span>
    </td>
    <td className="px-6 py-4">
      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
        {hearing.status}
      </span>
    </td>
  </tr>
);

const HearingSchedule = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [viewMode, setViewMode] = useState("upcoming");

  const upcomingHearings = [
    // ...same data as before
  ];
  const pastHearings = [
    // ...same data as before
  ];

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-black">Hearing Schedule</h1>
            <p className="text-gray-600 mt-1">Manage your court hearings</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2"
          >
            <span>➕</span>
            <span>Schedule Hearing</span>
          </button>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setViewMode("upcoming")}
            className={`px-4 py-3 font-medium transition-colors ${
              viewMode === "upcoming"
                ? "text-black border-b-2 border-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Upcoming ({upcomingHearings.length})
          </button>
          <button
            onClick={() => setViewMode("past")}
            className={`px-4 py-3 font-medium transition-colors ${
              viewMode === "past"
                ? "text-black border-b-2 border-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Past ({pastHearings.length})
          </button>
        </div>

        {/* Render Views */}
        {viewMode === "upcoming" && upcomingHearings.map((h) => <HearingCard key={h.id} hearing={h} />)}

        {viewMode === "past" && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th>Date</th>
                    <th>Case</th>
                    <th>Court</th>
                    <th>Type</th>
                    <th>Outcome</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pastHearings.map((h) => <PastHearingRow key={h.id} hearing={h} />)}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Hearing Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal content same as your original code */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HearingSchedule;
