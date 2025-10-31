import React from 'react'
import ActiveCases from '../components/ActiveCases'

export default function MyCases({ activeCases }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Cases</h1>
      <ActiveCases activeCases={activeCases} />
    </div>
  )
}
