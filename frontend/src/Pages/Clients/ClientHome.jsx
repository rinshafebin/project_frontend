import React, { useState } from 'react';
import { Header } from '../../Components/Layout/Client/Header';
import { AdvocateSearch } from '../../Components/Layout/Client/AdvocateSearch';
import { CaseManagement } from '../../Components/Layout/Client/CaseManagement';
import { DocumentUpload } from '../../Components/Layout/Client/DocumentUpload'; 
import { Bot, Shield, Search, FileText, Upload, MessageSquare } from 'lucide-react';

const ClientHome = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedAdvocate, setSelectedAdvocate] = useState(null);

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <AdvocateSearch onSelectAdvocate={setSelectedAdvocate} />;
      case 'cases': return <CaseManagement />;
      case 'documents': return <DocumentUpload />;
      case 'chat': return <SecureChat advocate={selectedAdvocate} />;
      default: return <AdvocateSearch onSelectAdvocate={setSelectedAdvocate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="bg-white border-b-2 border-gray-300 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto">
            {[
              { id: 'home', label: 'Search', icon: Search },
              { id: 'cases', label: 'Cases', icon: FileText },
              { id: 'documents', label: 'Documents', icon: Upload },
              { id: 'chat', label: 'Messages', icon: MessageSquare },
            ].map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-3 border-b-2 whitespace-nowrap transition-all font-semibold ${
                    activeSection === item.id
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-black'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      {/* Floating Buttons */}
      <button 
        className="fixed bottom-6 right-6 w-16 h-16 bg-black text-white rounded-full shadow-2xl hover:bg-gray-800 transition-all flex items-center justify-center z-50 border-2 border-white"
      >
        <Bot className="w-7 h-7" />
      </button>

      <div className="fixed bottom-6 left-6 bg-black text-white rounded-lg shadow-2xl px-4 py-3 flex items-center space-x-2 border-2 border-white">
        <Shield className="w-5 h-5" />
        <span className="text-sm font-bold">Secure &amp; Encrypted</span>
      </div>
    </div>
  );
};

export default ClientHome;
