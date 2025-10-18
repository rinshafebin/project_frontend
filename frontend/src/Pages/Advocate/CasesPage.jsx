import React from 'react';
import CaseCard from '../components/CaseCard';

export default function CasesPage({ cases = [] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.length ? (
          cases.map((caseData) => <CaseCard key={caseData.id} caseData={caseData} />)
        ) : (
          <p className="text-gray-600">No cases found.</p>
        )}
      </div>
    </div>
  );
}
