import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {  label: "Dashboard", to: "/dashboard" },
    {  label: "Cases", to: "/cases" },
    { label: "Clients", to: "/clients" },
    { label: "Calendar", to: "/calendar" },
    { icon: "💬", label: "Messages", to: "/messages" },
    { icon: "📄", label: "Documents", to: "/documents" },
    { icon: "👨‍⚖️", label: "Team", to: "/team" },
    { icon: "📈", label: "Analytics", to: "/analytics" },
    { icon: "⚙️", label: "Settings", to: "/settings" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">CaseBridge</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-all"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
            AK
          </div>
          <div className="hidden sm:flex flex-col">
            <h4 className="text-sm font-bold">Adv. Kumar</h4>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>
        </div>
      </div>
    </header>
  );
}
