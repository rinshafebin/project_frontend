import React, { useState } from 'react';
import { FaUser, FaGavel, FaCertificate, FaTrophy } from 'react-icons/fa';
import { AiOutlineUpload } from 'react-icons/ai';

// Reusable Input component
const InputField = ({ label, value, onChange, disabled, type = 'text', rows }) => (
  <div>
    <label className="block text-sm font-medium text-black mb-2">{label}</label>
    {type === 'textarea' ? (
      <textarea
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows || 3}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
      />
    )}
  </div>
);

// Stats Card
const StatCard = ({ value, label, color = 'text-black' }) => (
  <div className="text-center p-3 bg-gray-50 rounded-lg">
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
    <p className="text-xs text-gray-600">{label}</p>
  </div>
);

// Tab Button
const TabButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-3 font-medium whitespace-nowrap transition-colors ${
      active ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'
    } flex items-center gap-2`}
  >
    <Icon />
    {label}
  </button>
);

// Certificate Row
const CertificateRow = ({ cert }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-6 py-4 text-sm font-medium text-black">{cert.name}</td>
    <td className="px-6 py-4 text-sm text-gray-600">{cert.uploadDate}</td>
    <td className="px-6 py-4">
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          cert.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}
      >
        {cert.verified ? '✓ Verified' : 'Pending'}
      </span>
    </td>
    <td className="px-6 py-4 flex gap-2">
      <button className="text-sm text-black hover:underline">View</button>
      <button className="text-sm text-black hover:underline">Download</button>
    </td>
  </tr>
);

// Achievement Card
const AchievementCard = ({ achievement }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
      <FaTrophy />
    </div>
    <div className="flex-1">
      <div className="flex items-start justify-between mb-2">
        <div>
          <span className="text-sm font-semibold text-gray-600">{achievement.year}</span>
          <h3 className="text-lg font-semibold text-black">{achievement.title}</h3>
        </div>
      </div>
      <p className="text-sm text-gray-600">{achievement.description}</p>
    </div>
  </div>
);

const AdvocateProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  const [profileData, setProfileData] = useState({
    fullName: 'Adv. Rajesh Kumar',
    email: 'rajesh.kumar@lawfirm.com',
    phone: '+91 98765 43210',
    alternatePhone: '+91 98765 43220',
    address: '123 Law Street, Mumbai, Maharashtra 400001',
    barCouncilNumber: 'MH/12345/2020',
    dateOfEnrollment: '2020-01-15',
    specialization: 'Civil Law, Property Disputes',
    experience: '15 years',
    education: 'LLB, LLM',
    languages: 'English, Hindi, Marathi'
  });

  const stats = {
    totalCases: 48,
    activeCases: 32,
    wonCases: 38,
    clients: 156,
    experience: '15 years'
  };

  const certificates = [
    { id: 1, name: 'Bar Council Certificate.pdf', uploadDate: 'Jan 15, 2020', verified: true },
    { id: 2, name: 'LLM Degree.pdf', uploadDate: 'Jun 10, 2015', verified: true },
    { id: 3, name: 'Practice Certificate.pdf', uploadDate: 'Jan 15, 2020', verified: true },
  ];

  const achievements = [
    { year: '2024', title: 'Won landmark property dispute case', description: 'Successfully represented client in high-profile property case' },
    { year: '2023', title: 'Legal Excellence Award', description: 'Recognized for outstanding contribution to civil law' },
    { year: '2022', title: '100+ Cases Won', description: 'Milestone achievement in legal practice' },
  ];

  const handleChange = (field) => (e) => setProfileData({ ...profileData, [field]: e.target.value });
  const saveProfile = () => { alert('Profile updated successfully!'); setEditMode(false); };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: FaUser },
    { id: 'professional', label: 'Professional', icon: FaGavel },
    { id: 'certificates', label: 'Certificates', icon: FaCertificate },
    { id: 'achievements', label: 'Achievements', icon: FaTrophy },
  ];

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-5xl mb-3">
              <FaUser />
            </div>
            <button className="px-4 py-2 text-sm border border-black rounded-lg hover:bg-gray-50">Change Photo</button>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-black">{profileData.fullName}</h1>
                <p className="text-gray-600 mt-1">{profileData.specialization}</p>
                <p className="text-sm text-gray-500 mt-1">Bar Council No: {profileData.barCouncilNumber}</p>
              </div>
              <button 
                onClick={() => setEditMode(!editMode)}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                {editMode ? '✕ Cancel' : '✏️ Edit Profile'}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard value={stats.totalCases} label="Total Cases" />
              <StatCard value={stats.activeCases} label="Active Cases" color="text-green-600" />
              <StatCard value={stats.wonCases} label="Cases Won" color="text-blue-600" />
              <StatCard value={stats.clients} label="Clients" color="text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6 flex gap-1 overflow-x-auto">
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              icon={tab.icon}
              label={tab.label}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'personal' && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Full Name" value={profileData.fullName} onChange={handleChange('fullName')} disabled={!editMode} />
              <InputField label="Email" value={profileData.email} onChange={handleChange('email')} disabled={!editMode} type="email" />
              <InputField label="Phone Number" value={profileData.phone} onChange={handleChange('phone')} disabled={!editMode} type="tel" />
              <InputField label="Alternate Phone" value={profileData.alternatePhone} onChange={handleChange('alternatePhone')} disabled={!editMode} type="tel" />
              <InputField label="Address" value={profileData.address} onChange={handleChange('address')} disabled={!editMode} type="textarea" rows={3} />
              <InputField label="Languages" value={profileData.languages} onChange={handleChange('languages')} disabled={!editMode} />
              {editMode && (
                <div className="md:col-span-2 flex justify-end gap-3 mt-6">
                  <button onClick={() => setEditMode(false)} className="px-6 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50">Cancel</button>
                  <button onClick={saveProfile} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Save Changes</button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'professional' && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Bar Council Number" value={profileData.barCouncilNumber} onChange={handleChange('barCouncilNumber')} disabled={!editMode} />
              <InputField label="Date of Enrollment" value={profileData.dateOfEnrollment} onChange={handleChange('dateOfEnrollment')} disabled={!editMode} type="date" />
              <InputField label="Specialization" value={profileData.specialization} onChange={handleChange('specialization')} disabled={!editMode} />
              <InputField label="Experience" value={profileData.experience} onChange={handleChange('experience')} disabled={!editMode} />
              <InputField label="Education" value={profileData.education} onChange={handleChange('education')} disabled={!editMode} />
              {editMode && (
                <div className="md:col-span-2 flex justify-end gap-3 mt-6">
                  <button onClick={() => setEditMode(false)} className="px-6 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50">Cancel</button>
                  <button onClick={saveProfile} className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">Save Changes</button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-black">Certificates & Documents</h2>
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-1"><AiOutlineUpload /> Upload Certificate</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Certificate Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Upload Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {certificates.map(cert => <CertificateRow key={cert.id} cert={cert} />)}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-4">
              {achievements.map((ach, idx) => <AchievementCard key={idx} achievement={ach} />)}
              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-black hover:bg-gray-50">➕ Add Achievement</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvocateProfile;
