import React, { useState, useEffect } from 'react';
import { Scale, FileText, MessageSquare, Bell, Shield, TrendingUp, ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landingpage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <FileText className="w-6 h-6" />, title: "Submit Your Case", description: "Clients submit their legal cases through our secure platform. Advocates receive notifications and can review case details immediately." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Track Progress", description: "Monitor case updates in real-time while advocates update case status, milestones, and next steps throughout the legal process." },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Communicate Securely", description: "Built-in encrypted messaging enables direct communication between clients and advocates, ensuring confidential discussions." },
    { icon: <Shield className="w-6 h-6" />, title: "Manage Cases & Evidence", description: "Efficiently manage case documents and evidence while clients can view and upload supporting materials through a centralized system." },
    { icon: <Bell className="w-6 h-6" />, title: "Track Court Dates", description: "Receive automated alerts for upcoming court dates, deadlines, and important case milestones." },
    { icon: <Scale className="w-6 h-6" />, title: "Access Dashboard", description: "Comprehensive dashboard provides complete overview of all cases, historical records, and analytics with end-to-end encryption." }
  ];

  const testimonials = [
    { text: "CaseBridge made it incredibly easy to manage my legal case. The real-time updates and secure communication gave me peace of mind throughout the entire process.", author: "Sarah Johnson", role: "Client" },
    { text: "As an advocate, this platform has streamlined my workflow significantly. Managing multiple cases, documents, and client communications has never been easier.", author: "Advocate Rajesh Kumar", role: "Legal Advocate" },
    { text: "The transparency and ease of tracking my case progress was impressive. CaseBridge truly understands what clients need from a legal platform.", author: "Michael Chen", role: "Client" }
  ];

  const stats = [
    { number: "10K+", label: "Active Cases" },
    { number: "5K+", label: "Advocates" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-black" />
              <span className="text-2xl font-bold text-black">CaseBridge</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className="px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-700 hover:shadow-lg hover:scale-105 transition-all">Login</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top">
              <Link to="/login" className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-700 transition-all flex items-center justify-center">Login</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-8">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-black">Trusted by 10,000+ users</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black leading-tight">Connect with Legal Advocates</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">Streamline your legal case management with secure communication, document sharing, and real-time updates between clients and advocates.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register" className="group px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-700 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
              Get Started as Client
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/register" className="px-8 py-4 bg-white text-black rounded-lg font-semibold border-2 border-black hover:bg-gray-700 hover:text-white hover:scale-105 transition-all">Join as Advocate</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-gray-700 hover:shadow-lg transition-all">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">How CaseBridge Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A seamless workflow designed for efficiency and transparency</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`group p-8 rounded-xl border-2 bg-white transition-all duration-500 hover:shadow-xl hover:scale-105 ${activeStep === index ? 'border-black shadow-xl scale-105' : 'border-gray-200 hover:border-gray-700'}`}>
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all ${activeStep === index ? 'bg-black text-white' : 'bg-gray-100 text-black group-hover:bg-gray-700 group-hover:text-white'}`}>
                  {feature.icon}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-5xl font-bold text-gray-200 transition-colors">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">About CaseBridge</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="border border-gray-200 p-8 rounded-xl hover:border-gray-700 hover:shadow-lg transition-all">
              CaseBridge is a cutting-edge legal technology platform designed to bridge the gap between clients seeking legal assistance and qualified advocates. We understand that navigating the legal system can be complex and overwhelming.
            </p>
            <p className="border border-gray-200 p-8 rounded-xl hover:border-gray-700 hover:shadow-lg transition-all">
              Our platform simplifies legal case management by providing a secure, transparent, and efficient environment where clients and advocates can collaborate seamlessly. With advanced encryption, real-time updates, and intuitive tools, CaseBridge empowers both parties to focus on what matters most—achieving successful legal outcomes.
            </p>
            <p className="border border-gray-200 p-8 rounded-xl hover:border-gray-700 hover:shadow-lg transition-all">
              Built with security and user experience at its core, CaseBridge is transforming how legal services are delivered in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="group p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-5xl text-gray-300 mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black group-hover:bg-gray-700 transition-colors flex items-center justify-center text-white font-bold text-lg">{t.author.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-black">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-gray-300 mb-10">Join thousands of clients and advocates using CaseBridge today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="group px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-700 hover:text-white hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Register as Client
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/register"
              className="px-8 py-4 bg-black text-white rounded-lg font-semibold border-2 border-white hover:bg-gray-700 hover:text-white hover:scale-105 transition-all flex items-center justify-center"
            >
              Register as Advocate
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

    </div>
  );
}
