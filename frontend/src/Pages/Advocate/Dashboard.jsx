import React from "react";
import Sidebar from "../../Components/Navbar";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        {/* Header */}
        <div className="header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <button className="btn btn-secondary">🔔 Notifications</button>
            <button className="btn btn-primary">+ New Case</button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Active Cases</div>
            <div className="stat-value">24</div>
            <div className="stat-change">+3 from last month</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Pending Cases</div>
            <div className="stat-value">8</div>
            <div className="stat-change">2 require attention</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Closed Cases</div>
            <div className="stat-value">156</div>
            <div className="stat-change">89% success rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Clients</div>
            <div className="stat-value">87</div>
            <div className="stat-change">+5 this month</div>
          </div>
        </div>

        {/* Recent Cases */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Recent Cases</h2>
            <button className="btn btn-secondary">View All</button>
          </div>

          <div className="tabs">
            <div className="tab active">All Cases</div>
            <div className="tab">Active</div>
            <div className="tab">Pending</div>
            <div className="tab">Closed</div>
          </div>

          <div className="case-list">
            <div className="case-item">
              <div className="case-info">
                <h3>Property Dispute - Sharma vs Kumar</h3>
                <div className="case-meta">
                  <span>📅 Next Hearing: Oct 15, 2025</span>
                  <span>👤 Client: Rajesh Sharma</span>
                  <span>📍 District Court</span>
                </div>
              </div>
              <div className="case-actions">
                <span className="status-badge status-active">Active</span>
                <button className="icon-btn">👁️</button>
                <button className="icon-btn">✏️</button>
              </div>
            </div>

            <div className="case-item">
              <div className="case-info">
                <h3>Divorce Petition - Verma Family</h3>
                <div className="case-meta">
                  <span>📅 Next Hearing: Oct 18, 2025</span>
                  <span>👤 Client: Priya Verma</span>
                  <span>📍 Family Court</span>
                </div>
              </div>
              <div className="case-actions">
                <span className="status-badge status-pending">Pending</span>
                <button className="icon-btn">👁️</button>
                <button className="icon-btn">✏️</button>
              </div>
            </div>

            <div className="case-item">
              <div className="case-info">
                <h3>Criminal Defense - State vs Mehta</h3>
                <div className="case-meta">
                  <span>📅 Next Hearing: Oct 20, 2025</span>
                  <span>👤 Client: Anil Mehta</span>
                  <span>📍 Sessions Court</span>
                </div>
              </div>
              <div className="case-actions">
                <span className="status-badge status-active">Active</span>
                <button className="icon-btn">👁️</button>
                <button className="icon-btn">✏️</button>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Hearings */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Upcoming Hearings</h2>
            <button className="btn btn-secondary">View Calendar</button>
          </div>

          <div className="case-list">
            <div className="case-item">
              <div className="case-info">
                <h3>Property Dispute - Sharma vs Kumar</h3>
                <div className="case-meta">
                  <span>⏰ Oct 15, 2025 - 10:00 AM</span>
                  <span>📍 District Court, Room 3</span>
                </div>
              </div>
              <div className="case-actions">
                <button className="btn btn-secondary">Set Reminder</button>
              </div>
            </div>

            <div className="case-item">
              <div className="case-info">
                <h3>Divorce Petition - Verma Family</h3>
                <div className="case-meta">
                  <span>⏰ Oct 18, 2025 - 2:30 PM</span>
                  <span>📍 Family Court, Room 1</span>
                </div>
              </div>
              <div className="case-actions">
                <button className="btn btn-secondary">Set Reminder</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Recent Messages</h2>
            <button className="btn btn-secondary">View All</button>
          </div>

          <div className="case-list">
            <div className="case-item">
              <div className="case-info">
                <h3>Rajesh Sharma</h3>
                <div className="case-meta">
                  <span>Please review the latest documents I uploaded...</span>
                </div>
              </div>
              <div className="case-actions">
                <span style={{ fontSize: "12px", color: "#999" }}>2 hours ago</span>
                <button className="btn btn-primary">Reply</button>
              </div>
            </div>

            <div className="case-item">
              <div className="case-info">
                <h3>Priya Verma</h3>
                <div className="case-meta">
                  <span>When is the next hearing scheduled?</span>
                </div>
              </div>
              <div className="case-actions">
                <span style={{ fontSize: "12px", color: "#999" }}>5 hours ago</span>
                <button className="btn btn-primary">Reply</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
