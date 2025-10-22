import React, { useState } from 'react';
import { Input, Select, Textarea } from './components/Form';

const CaseForm = () => {
  const [formData, setFormData] = useState({
    caseTitle: '',
    caseType: '',
    client: '',
    court: '',
    judge: '',
    filingDate: '',
    priority: 'Medium',
    status: 'Pending',
    description: '',
    opposingParty: '',
    opposingCounsel: '',
  });

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Case created successfully!');
  };

  const handleSaveDraft = () => {
    console.log('Draft saved:', formData);
    alert('Draft saved!');
  };

  const handleCancel = () =>
    setFormData({
      caseTitle: '',
      caseType: '',
      client: '',
      court: '',
      judge: '',
      filingDate: '',
      priority: 'Medium',
      status: 'Pending',
      description: '',
      opposingParty: '',
      opposingCounsel: '',
    });

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          <button className="text-black hover:underline mb-4 flex items-center gap-2">
            ← Back to Cases
          </button>
          <h1 className="text-3xl font-bold text-black">Create New Case</h1>
          <p className="text-gray-600 mt-1">Fill in the case details below</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-black">Basic Information</h2>
            <Input
              label="Case Title"
              required
              value={formData.caseTitle}
              onChange={handleChange('caseTitle')}
              placeholder="Property Dispute - Mumbai"
            />
            <Select
              label="Case Type"
              required
              value={formData.caseType}
              onChange={handleChange('caseType')}
              options={[
                { value: '', label: 'Select Case Type' },
                { value: 'Civil', label: 'Civil' },
                { value: 'Criminal', label: 'Criminal' },
                { value: 'Commercial', label: 'Commercial' },
                { value: 'Family', label: 'Family' },
                { value: 'IP', label: 'Intellectual Property' },
                { value: 'Labor', label: 'Labor' },
                { value: 'Tax', label: 'Tax' },
                { value: 'Other', label: 'Other' },
              ]}
            />
            <Select
              label="Client"
              required
              value={formData.client}
              onChange={handleChange('client')}
              options={[
                { value: '', label: 'Select Client' },
                { value: 'priya-sharma', label: 'Priya Sharma' },
                { value: 'amit-patel', label: 'Amit Patel' },
              ]}
            />
            <Select
              label="Priority"
              required
              value={formData.priority}
              onChange={handleChange('priority')}
              options={[
                { value: 'Low', label: 'Low' },
                { value: 'Medium', label: 'Medium' },
                { value: 'High', label: 'High' },
              ]}
            />
            <Select
              label="Status"
              required
              value={formData.status}
              onChange={handleChange('status')}
              options={[
                { value: 'Pending', label: 'Pending' },
                { value: 'Active', label: 'Active' },
                { value: 'On Hold', label: 'On Hold' },
                { value: 'Closed', label: 'Closed' },
              ]}
            />
            <Input
              label="Filing Date"
              required
              type="date"
              value={formData.filingDate}
              onChange={handleChange('filingDate')}
            />
          </div>

          {/* Court Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-black">Court Information</h2>
            <Input
              label="Court Name"
              required
              value={formData.court}
              onChange={handleChange('court')}
            />
            <Input
              label="Judge Name"
              value={formData.judge}
              onChange={handleChange('judge')}
            />
          </div>

          {/* Opposing Party */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-black">Opposing Party</h2>
            <Input
              label="Opposing Party Name"
              value={formData.opposingParty}
              onChange={handleChange('opposingParty')}
            />
            <Input
              label="Opposing Counsel"
              value={formData.opposingCounsel}
              onChange={handleChange('opposingCounsel')}
            />
          </div>

          {/* Description */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-black">Case Description</h2>
            <Textarea
              label="Description"
              required
              rows={6}
              value={formData.description}
              onChange={handleChange('description')}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 border border-gray-300 text-black rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveDraft}
              className="px-6 py-3 border border-black text-black rounded-lg hover:bg-gray-50"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Create Case
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseForm;
