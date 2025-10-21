import React from "react";

const AdminDashboard = () => {
  const navItems = [
    { icon: "", label: "Dashboard", active: true },
    { icon: "", label: "User Management" },
    { icon: "", label: "Verifications" },
    { icon: "", label: "Case Monitoring" },
    { icon: "", label: "Security & Access" },
    { icon: "", label: "Chatbot Management" },
    { icon: "", label: "Reports & Analytics" },
    { icon: "", label: "System Backup" },
    { icon: "", label: "Settings" },
  ];

  const stats = [
    { label: "Total Users", value: "1,247", change: "+12 this week" },
    { label: "Advocates", value: "342", change: "+5 this week" },
    { label: "Cases", value: "578", change: "+8 this week" },
    { label: "Active Sessions", value: "129", change: "+3 this week" },
  ];

  return (
    <div className="dashboard" style={{ display: "flex", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", background: "#fafafa" }}>
      
      {/* Sidebar */}
      <aside className="sidebar" style={{ width: "260px", background: "#fff", borderRight: "1px solid #e5e5e5", padding: "30px 0", position: "fixed", height: "100vh", overflowY: "auto" }}>
        <div className="logo" style={{ fontSize: "24px", fontWeight: "700", padding: "0 30px", marginBottom: "10px" }}>CaseBridge</div>
        <div className="admin-badge" style={{ padding: "0 30px", fontSize: "12px", color: "#999", marginBottom: "40px" }}>ADMIN PANEL</div>
        <nav>
          {navItems.map((item, idx) => (
            <div key={idx} className={`nav-item ${item.active ? "active" : ""}`} style={{ padding: "14px 30px", color: item.active ? "#000" : "#666", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", fontWeight: item.active ? 500 : 400 }}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="user-section" style={{ padding: "20px 30px", borderTop: "1px solid #e5e5e5", position: "absolute", bottom: 0, width: "100%", background: "#fff" }}>
          <div className="user-info" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div className="avatar" style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>AD</div>
            <div className="user-details">
              <h4>Admin</h4>
              <p>System Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content" style={{ marginLeft: "260px", flex: 1, padding: "30px 40px" }}>
        
        {/* Header */}
        <div className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: 700 }}>Admin Dashboard</h1>
          <div className="header-actions">
            <button style={{ padding: "12px 24px", border: "2px solid #e5e5e5", borderRadius: "8px", fontSize: "14px", fontWeight: 600, marginRight: "10px", cursor: "pointer" }}>🔔 Alerts</button>
            <button style={{ padding: "12px 24px", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 600, background: "#000", color: "#fff", cursor: "pointer" }}>Generate Report</button>
          </div>
        </div>

        {/* Alert Box */}
        <div className="alert-box" style={{ background: "#fff", borderLeft: "4px solid #ff4444", padding: "20px", borderRadius: "8px", marginBottom: "30px" }}>
          <div className="alert-title" style={{ fontWeight: 600, marginBottom: "8px", color: "#ff4444" }}>⚠️ Pending Verifications</div>
          <p>You have 5 advocate applications waiting for verification and approval</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "25px", marginBottom: "40px" }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card" style={{ background: "#fff", padding: "25px", borderRadius: "12px", border: "1px solid #e5e5e5" }}>
              <div className="stat-label" style={{ fontSize: "13px", color: "#999", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>{stat.label}</div>
              <div className="stat-value" style={{ fontSize: "36px", fontWeight: 700, color: "#000" }}>{stat.value}</div>
              <div className="stat-change" style={{ fontSize: "13px", color: "#666", marginTop: "8px" }}>{stat.change}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
