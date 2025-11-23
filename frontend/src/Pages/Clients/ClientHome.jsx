import React, { useState } from 'react';
import { 
  Search, MessageSquare, FileText, Calendar, CreditCard, Bot, Shield, 
  Menu, X, User, Bell, ChevronRight, Star, MapPin, Briefcase, Filter,
  Upload, Download, Eye, Lock, Send, Paperclip, CheckCircle, Clock,
  AlertCircle, DollarSign, Check, Phone, Mail, Video, MoreVertical,
  Trash2, Edit, Info, ArrowLeft, Users, TrendingUp, Award, Scale
} from 'lucide-react';

// ==================== HEADER COMPONENT ====================
export const Header = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-2xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Scale className="w-8 h-8 text-white" />
            <div>
              <span className="text-2xl font-bold tracking-tight">LEGAL</span>
              <span className="text-2xl font-light">PRO</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1">
            {['home', 'cases', 'chat'].map(item => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`px-4 py-2 rounded font-medium transition-all ${
                  activeSection === item
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-full transition-all">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={() => setActiveSection('profile')}
              className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center font-bold hover:bg-gray-200 transition-all"
            >
              U
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="px-4 py-2 space-y-1">
            {['home', 'cases', 'chat', 'hearings', 'payments'].map(item => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded transition-all ${
                  activeSection === item
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// ==================== HERO SECTION COMPONENT ====================
export const HeroSection = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 rounded-2xl p-8 mb-8 text-white shadow-2xl">
      <div className="flex items-center space-x-3 mb-4">
        <Scale className="w-12 h-12" />
        <div>
          <h1 className="text-4xl font-bold">Find Your Legal Expert</h1>
          <p className="text-gray-400 mt-1">Professional advocates at your service</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-2 flex items-center shadow-lg mt-6">
        <Search className="w-6 h-6 text-gray-400 ml-2" />
        <input
          type="text"
          placeholder="Search by advocate name, specialization, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-3 text-black outline-none"
        />
        <button 
          onClick={onSearch}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
};

// ==================== ADVOCATE CARD COMPONENT ====================
export const AdvocateCard = ({ advocate, onViewProfile, onChat }) => {
  return (
    <div className="bg-white border-2 border-black rounded-xl shadow-lg hover:shadow-2xl transition-all p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
          {advocate.initials}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-black">{advocate.name}</h3>
          <p className="text-gray-700 font-medium">{advocate.specialization}</p>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-black fill-current" />
            <span className="ml-1 text-sm text-gray-600">{advocate.rating} rating</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-center text-gray-700">
          <Briefcase className="w-4 h-4 mr-2" />
          <span className="text-sm">{advocate.experience} years experience</span>
        </div>
        <div className="flex items-center text-gray-700">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{advocate.location}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Award className="w-4 h-4 mr-2" />
          <span className="text-sm">{advocate.cases} cases handled</span>
        </div>
      </div>

      <div className="flex space-x-3">
        <button 
          onClick={() => onViewProfile(advocate)}
          className="flex-1 bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-all"
        >
          View Profile
        </button>
        <button 
          onClick={() => onChat(advocate)}
          className="px-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition-all"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// ==================== ADVOCATE SEARCH COMPONENT ====================
export const AdvocateSearch = ({ onSelectAdvocate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const mockAdvocates = [
    { id: 1, name: "Adv. Rajesh Kumar", initials: "RK", specialization: "Criminal Law", experience: 15, location: "Delhi", rating: 4.8, cases: 250 },
    { id: 2, name: "Adv. Priya Sharma", initials: "PS", specialization: "Family Law", experience: 10, location: "Mumbai", rating: 4.9, cases: 180 },
    { id: 3, name: "Adv. Amit Patel", initials: "AP", specialization: "Corporate Law", experience: 12, location: "Bangalore", rating: 4.7, cases: 320 },
    { id: 4, name: "Adv. Sneha Reddy", initials: "SR", specialization: "Civil Law", experience: 8, location: "Hyderabad", rating: 4.6, cases: 150 },
    { id: 5, name: "Adv. Vikram Singh", initials: "VS", specialization: "Property Law", experience: 20, location: "Delhi", rating: 4.9, cases: 400 },
    { id: 6, name: "Adv. Meera Iyer", initials: "MI", specialization: "Consumer Law", experience: 7, location: "Chennai", rating: 4.5, cases: 120 },
  ];

  const filteredAdvocates = mockAdvocates.filter(advocate => {
    const matchesSearch = advocate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         advocate.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    if (selectedFilter === 'all') return matchesSearch;
    return matchesSearch && advocate.specialization.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <div className="space-y-6">
      <HeroSection 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onSearch={() => {}}
      />

      <div className="flex items-center space-x-4 overflow-x-auto pb-2">
        <div className="flex items-center space-x-2 text-black">
          <Filter className="w-5 h-5" />
          <span className="font-semibold whitespace-nowrap">Filter:</span>
        </div>
        {['all', 'criminal', 'family', 'corporate', 'civil', 'property'].map(filter => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all border-2 ${
              selectedFilter === filter
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-black'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAdvocates.map(advocate => (
          <AdvocateCard 
            key={advocate.id}
            advocate={advocate}
            onViewProfile={onSelectAdvocate}
            onChat={(adv) => {
              onSelectAdvocate(adv);
            }}
          />
        ))}
      </div>

      {filteredAdvocates.length === 0 && (
        <div className="text-center py-12 bg-white border-2 border-black rounded-xl">
          <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-black mb-2">No advocates found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

// ==================== CASE CARD COMPONENT ====================
export const CaseCard = ({ caseItem }) => {
  const getStatusStyle = (status) => {
    switch(status) {
      case 'active': return 'bg-black text-white';
      case 'pending': return 'bg-gray-300 text-black';
      case 'completed': return 'bg-gray-700 text-white';
      default: return 'bg-gray-200 text-black';
    }
  };

  return (
    <div className="bg-white border-2 border-black rounded-xl shadow-lg hover:shadow-2xl transition-all p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-black">{caseItem.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{caseItem.advocate}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(caseItem.status)}`}>
          {caseItem.status.toUpperCase()}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span className="font-semibold">Progress</span>
          <span className="font-bold">{caseItem.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 border border-gray-300">
          <div 
            className="bg-black h-full rounded-full transition-all"
            style={{ width: `${caseItem.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-center text-gray-700 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Next: {caseItem.nextHearing || 'Not scheduled'}</span>
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <FileText className="w-4 h-4 mr-2" />
          <span>{caseItem.documents} documents</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all font-medium">
          View Details
        </button>
        <button className="px-4 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition-all border border-black">
          <Upload className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// ==================== CASE MANAGEMENT COMPONENT ====================
export const CaseManagement = () => {
  const cases = [
    { id: 1, title: "Property Dispute Case", advocate: "Adv. Rajesh Kumar", status: "active", progress: 65, nextHearing: "2025-12-01", documents: 8 },
    { id: 2, title: "Divorce Settlement", advocate: "Adv. Priya Sharma", status: "pending", progress: 30, nextHearing: "2025-11-28", documents: 5 },
    { id: 3, title: "Contract Violation", advocate: "Adv. Amit Patel", status: "completed", progress: 100, nextHearing: null, documents: 12 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-black">My Cases</h2>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold border-2 border-black">
          + New Case
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black text-white rounded-xl p-6 border-2 border-black">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Cases</p>
              <p className="text-3xl font-bold mt-1">1</p>
            </div>
            <TrendingUp className="w-10 h-10" />
          </div>
        </div>
        <div className="bg-white border-2 border-black rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending</p>
              <p className="text-3xl font-bold mt-1 text-black">1</p>
            </div>
            <Clock className="w-10 h-10 text-black" />
          </div>
        </div>
        <div className="bg-gray-200 border-2 border-black rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed</p>
              <p className="text-3xl font-bold mt-1 text-black">1</p>
            </div>
            <CheckCircle className="w-10 h-10 text-black" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cases.map(caseItem => (
          <CaseCard key={caseItem.id} caseItem={caseItem} />
        ))}
      </div>
    </div>
  );
};

// ==================== DOCUMENT UPLOAD COMPONENT ====================
export const DocumentUpload = () => {
  const documents = [
    { id: 1, name: "Contract_Agreement.pdf", size: "2.4 MB", uploadedAt: "2025-11-20", status: "verified" },
    { id: 2, name: "Property_Deed.pdf", size: "1.8 MB", uploadedAt: "2025-11-21", status: "pending" },
    { id: 3, name: "Evidence_Photos.zip", size: "5.2 MB", uploadedAt: "2025-11-22", status: "verified" },
  ];

  return (
    <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-black mb-6">Case Documents</h3>

      <div className="border-4 border-dashed border-gray-400 rounded-xl p-8 text-center mb-6 hover:border-black transition-all cursor-pointer bg-gray-50">
        <Upload className="w-16 h-16 text-black mx-auto mb-4" />
        <p className="text-black font-bold mb-2 text-lg">Drop files here or click to upload</p>
        <p className="text-sm text-gray-600">Supports: PDF, DOC, JPG, PNG (Max 10MB)</p>
        <div className="flex items-center justify-center mt-4 text-xs text-gray-700 font-semibold">
          <Lock className="w-4 h-4 mr-1" />
          <span>End-to-end encrypted</span>
        </div>
      </div>

      <div className="space-y-3">
        {documents.map(doc => (
          <div key={doc.id} className="flex items-center justify-between p-4 border-2 border-black rounded-lg hover:bg-gray-50 transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-black">{doc.name}</p>
                <p className="text-sm text-gray-600">{doc.size} • {doc.uploadedAt}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {doc.status === 'verified' ? (
                <CheckCircle className="w-6 h-6 text-black" />
              ) : (
                <Clock className="w-6 h-6 text-gray-500" />
              )}
              <button className="p-2 hover:bg-gray-200 rounded-lg border border-gray-300">
                <Eye className="w-5 h-5 text-black" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded-lg border border-gray-300">
                <Download className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== CHAT COMPONENT ====================
export const SecureChat = ({ advocate }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'advocate', text: 'Hello! I have reviewed your case documents.', time: '10:30 AM' },
    { id: 2, sender: 'user', text: 'Thank you. What are our options?', time: '10:32 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { 
        id: messages.length + 1, 
        sender: 'user', 
        text: newMessage, 
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white border-2 border-black rounded-xl shadow-lg flex flex-col h-[600px]">
      <div className="p-4 bg-black text-white flex items-center justify-between rounded-t-xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold">
            {advocate?.initials || 'A'}
          </div>
          <div>
            <h3 className="font-bold">{advocate?.name || 'Advocate'}</h3>
            <span className="text-xs text-gray-300 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Online
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-all">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-all">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md ${
              msg.sender === 'user' 
                ? 'bg-black text-white' 
                : 'bg-white text-black border-2 border-gray-300'
            } rounded-2xl px-4 py-3 shadow-md`}>
              <p className="font-medium">{msg.text}</p>
              <span className={`text-xs ${msg.sender === 'user' ? 'text-gray-400' : 'text-gray-500'} mt-1 block`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-2 bg-gray-900 text-white border-t-2 border-black">
        <div className="flex items-center text-xs">
          <Lock className="w-3 h-3 mr-1" />
          <span>End-to-end encrypted messaging</span>
        </div>
      </div>

      <div className="p-4 border-t-2 border-black bg-white rounded-b-xl">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-200 rounded-lg border border-gray-300 transition-all">
            <Paperclip className="w-5 h-5 text-black" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 border-2 border-black rounded-lg outline-none focus:ring-2 focus:ring-black"
          />
          <button 
            onClick={sendMessage}
            className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN APP ====================
const ClientHome = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedAdvocate, setSelectedAdvocate] = useState(null);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <AdvocateSearch onSelectAdvocate={setSelectedAdvocate} />;
      case 'cases':
        return <CaseManagement />;
      case 'documents':
        return <DocumentUpload />;
      case 'chat':
        return <SecureChat advocate={selectedAdvocate} />;
      default:
        return <AdvocateSearch onSelectAdvocate={setSelectedAdvocate} />;
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