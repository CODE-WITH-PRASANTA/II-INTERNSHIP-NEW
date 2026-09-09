import React, { useState } from "react";
import {
  FiHome,
  FiFolder,
  FiSettings,
  FiUser,
  FiLock,
  FiActivity,
  FiSave,
  FiEye,
  FiEyeOff,
  FiRefreshCw,
  FiShield,
  FiDatabase,
  FiMail,
  FiCpu,
  FiHardDrive,
  FiLayers,
  FiTerminal,
  FiServer,
  FiCheckCircle
} from "react-icons/fi";
import "./Settings.css";

const Settings = () => {
  // Navigation Tab State
  const [activeTab, setActiveTab] = useState("profile"); // 'profile' | 'security' | 'health'

  // Tab 1: Profile Information State (Fully Editable)
  const [profileData, setProfileData] = useState({
    email: "superadmin@hilux.com",
    role: "SUPER_ADMIN",
    displayName: "System Admin"
  });
  const [profileSaved, setProfileSaved] = useState(false);

  // Tab 2: Account Security State
  const [securityData, setSecurityData] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Tab 3: System Health Mock State
  const [lastChecked, setLastChecked] = useState("9/8/2026, 4:01:29 PM");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Handlers for Profile Tab
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (profileSaved) setProfileSaved(false);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  // Handlers for Security Tab
  const handleSecurityChange = (e) => {
    setSecurityData({ ...securityData, [e.target.name]: e.target.value });
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!securityData.newPassword) {
      alert("Please enter a new password.");
      return;
    }
    alert("Password updated successfully!");
    setSecurityData({ newPassword: "", confirmPassword: "" });
  };

  // Handlers for Health Tab
  const handleRefreshHealth = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const now = new Date();
      setLastChecked(now.toLocaleString());
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="settings-container">
      {/* Breadcrumb Navigation */}
      <nav className="settings-breadcrumb">
        <span className="settings-breadcrumb-item">
          <FiHome className="settings-breadcrumb-icon" /> Home
        </span>
        <span className="settings-breadcrumb-separator">&gt;</span>
        <span className="settings-breadcrumb-item">
          <FiFolder className="settings-breadcrumb-icon" /> Super Admin
        </span>
        <span className="settings-breadcrumb-separator">&gt;</span>
        <span className="settings-breadcrumb-item settings-breadcrumb-active">
          <FiSettings className="settings-breadcrumb-icon" /> Settings
        </span>
      </nav>

      {/* Page Title & Header Description */}
      <div className="settings-header">
        <h1>System Control & Settings</h1>
        <p>Configure admin profile details, update passwords, and check server metrics.</p>
      </div>

      {/* Main Content Layout */}
      <div className="settings-layout">
        {/* Left Vertical Navigation Sidebar */}
        <aside className="settings-sidebar">
          <button
            className={`settings-nav-button ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            <div className="settings-nav-icon-box">
              <FiUser className="settings-nav-icon" />
            </div>
            <div className="settings-nav-text">
              <span className="settings-nav-title">Profile Information</span>
              <span className="settings-nav-desc">Manage name, email & display settings</span>
            </div>
          </button>

          <button
            className={`settings-nav-button ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            <div className="settings-nav-icon-box">
              <FiLock className="settings-nav-icon" />
            </div>
            <div className="settings-nav-text">
              <span className="settings-nav-title">Account Security</span>
              <span className="settings-nav-desc">Update password & protect your account</span>
            </div>
          </button>

          <button
            className={`settings-nav-button ${activeTab === "health" ? "active" : ""}`}
            onClick={() => setActiveTab("health")}
          >
            <div className="settings-nav-icon-box">
              <FiActivity className="settings-nav-icon" />
            </div>
            <div className="settings-nav-text">
              <span className="settings-nav-title">System Health</span>
              <span className="settings-nav-desc">Monitor database and latency metrics</span>
            </div>
          </button>
        </aside>

        {/* Right Tab Content View Area */}
        <main className="settings-content-card">
          {/* TAB 1: PROFILE INFORMATION */}
          {activeTab === "profile" && (
            <div className="settings-tab-pane">
              <div className="settings-pane-header">
                <div className="settings-pane-icon-bg">
                  <FiUser />
                </div>
                <div>
                  <h2>Profile Information</h2>
                  <p>View and update your profile details</p>
                </div>
              </div>

              <form onSubmit={handleSaveProfile} className="settings-form">
                <div className="settings-form-group">
                  <label>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="settings-input"
                    placeholder="Enter email address"
                  />
                  <span className="settings-helper-text">Email cannot be changed without re-verification.</span>
                </div>

                <div className="settings-form-group">
                  <label>ROLE</label>
                  <input
                    type="text"
                    name="role"
                    value={profileData.role}
                    onChange={handleProfileChange}
                    className="settings-input"
                    placeholder="Enter role"
                  />
                </div>

                <div className="settings-form-group">
                  <label>DISPLAY NAME</label>
                  <input
                    type="text"
                    name="displayName"
                    value={profileData.displayName}
                    onChange={handleProfileChange}
                    className="settings-input"
                    placeholder="Enter display name"
                  />
                </div>

                <div className="settings-action-row">
                  <button type="submit" className="settings-primary-btn">
                    <FiSave className="settings-btn-icon" /> Save Changes
                  </button>
                  {profileSaved && (
                    <span className="settings-success-msg">
                      <FiCheckCircle /> Profile information saved!
                    </span>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: ACCOUNT SECURITY */}
          {activeTab === "security" && (
            <div className="settings-tab-pane">
              <div className="settings-pane-header">
                <div className="settings-pane-icon-bg">
                  <FiLock />
                </div>
                <div>
                  <h2>Change Password</h2>
                  <p>Keep your account secure with a strong password</p>
                </div>
              </div>

              <form onSubmit={handleUpdatePassword} className="settings-form">
                <div className="settings-form-group">
                  <label>NEW PASSWORD</label>
                  <div className="settings-password-wrapper">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      placeholder="••••••••"
                      value={securityData.newPassword}
                      onChange={handleSecurityChange}
                      className="settings-input"
                    />
                    <button
                      type="button"
                      className="settings-password-toggle"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                <div className="settings-form-group">
                  <label>CONFIRM NEW PASSWORD</label>
                  <div className="settings-password-wrapper">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={securityData.confirmPassword}
                      onChange={handleSecurityChange}
                      className="settings-input"
                    />
                    <button
                      type="button"
                      className="settings-password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="settings-primary-btn green-dark">
                  <FiShield className="settings-btn-icon" /> Update Password
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: SYSTEM HEALTH */}
          {activeTab === "health" && (
            <div className="settings-tab-pane">
              <div className="settings-pane-header flex-between">
                <div className="settings-header-left">
                  <div className="settings-pane-icon-bg">
                    <FiActivity />
                  </div>
                  <div>
                    <h2>System Health Status</h2>
                    <p>Monitor active services, memory usage, CPU load, and API performance</p>
                  </div>
                </div>
                <button
                  className={`settings-refresh-btn ${isRefreshing ? "spinning" : ""}`}
                  onClick={handleRefreshHealth}
                  title="Refresh System Metrics"
                >
                  <FiRefreshCw />
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="settings-metrics-grid four-cols">
                <div className="settings-metric-card text-center">
                  <span className="settings-metric-label">SYSTEM STATUS</span>
                  <div className="settings-metric-badge-container">
                    <span className="settings-badge-pill green">Healthy</span>
                  </div>
                </div>

                <div className="settings-metric-card text-center">
                  <span className="settings-metric-label">API LATENCY</span>
                  <span className="settings-metric-value-bold">2366 ms</span>
                </div>

                <div className="settings-metric-card text-center">
                  <span className="settings-metric-label">UPTIME</span>
                  <span className="settings-metric-value-bold">2d 0h 55m 51s</span>
                </div>

                <div className="settings-metric-card text-center">
                  <span className="settings-metric-label">APP VERSION</span>
                  <span className="settings-metric-value-bold">v0.1.0 (production)</span>
                </div>
              </div>

              {/* Service Connectivities */}
              <div className="settings-metrics-grid two-cols">
                <div className="settings-service-card">
                  <div className="settings-service-left">
                    <div className="settings-service-icon green-bg">
                      <FiDatabase />
                    </div>
                    <div>
                      <h4 className="settings-service-title">Database Connectivity</h4>
                      <p className="settings-service-desc">Prisma schema connectivity latency</p>
                    </div>
                  </div>
                  <div className="settings-service-right">
                    <span className="settings-badge-pill light-green">Connected</span>
                    <span className="settings-service-time">766 ms</span>
                  </div>
                </div>

                <div className="settings-service-card">
                  <div className="settings-service-left">
                    <div className="settings-service-icon blue-bg">
                      <FiMail />
                    </div>
                    <div>
                      <h4 className="settings-service-title">Email / SMTP Server</h4>
                      <p className="settings-service-desc">Nodemailer SMTP handshake check</p>
                    </div>
                  </div>
                  <div className="settings-service-right">
                    <span className="settings-badge-pill light-green">Active</span>
                    <span className="settings-service-time">Verified</span>
                  </div>
                </div>
              </div>

              {/* Hardware Metrics */}
              <div className="settings-metrics-grid two-cols">
                <div className="settings-status-box">
                  <div className="settings-box-title">
                    <FiCpu className="settings-box-icon orange" /> OS & CPU Status
                  </div>
                  <div className="settings-box-dual-row">
                    <div>
                      <span className="settings-sub-label">Platform</span>
                      <span className="settings-sub-value">Linux</span>
                    </div>
                    <div>
                      <span className="settings-sub-label">CPU Cores</span>
                      <span className="settings-sub-value">2 Cores</span>
                    </div>
                  </div>
                  <div className="settings-cpu-load-section">
                    <span className="settings-sub-label">CPU Load Average (1m / 5m / 15m)</span>
                    <div className="settings-cpu-load-pills">
                      <span>1m: 0.00</span>
                      <span>5m: 0.00</span>
                      <span>15m: 0.00</span>
                    </div>
                  </div>
                </div>

                <div className="settings-status-box">
                  <div className="settings-box-title">
                    <FiServer className="settings-box-icon blue" /> OS Memory Status
                  </div>
                  <div className="settings-box-flex-row">
                    <span className="settings-sub-label">Memory Usage</span>
                    <span className="settings-sub-value-bold">12.65%</span>
                  </div>
                  <div className="settings-progress-bar">
                    <div className="settings-progress-fill" style={{ width: "12.65%" }}></div>
                  </div>
                  <div className="settings-box-flex-row settings-progress-sub">
                    <span>Used: 1004.7 MB</span>
                    <span>Total: 7.75 GB</span>
                  </div>
                </div>
              </div>

              {/* Memory & Node Details */}
              <div className="settings-metrics-grid two-cols">
                <div className="settings-status-box">
                  <div className="settings-box-title">
                    <FiHardDrive className="settings-box-icon green" /> Filesystem Disk Space
                  </div>
                  <div className="settings-box-flex-row">
                    <span className="settings-sub-label">Disk Space Usage</span>
                    <span className="settings-sub-value-bold">15%</span>
                  </div>
                  <div className="settings-progress-bar">
                    <div className="settings-progress-fill green-fill" style={{ width: "15%" }}></div>
                  </div>
                  <div className="settings-box-flex-row settings-progress-sub">
                    <span>Used: 15G</span>
                    <span>Available: 82G (96G total)</span>
                  </div>
                </div>

                <div className="settings-status-box">
                  <div className="settings-box-title">
                    <FiLayers className="settings-box-icon purple" /> Node.js Process Memory
                  </div>
                  <div className="settings-grid-2x2">
                    <div>
                      <span className="settings-sub-label">RSS</span>
                      <span className="settings-sub-value">491.23 MB</span>
                    </div>
                    <div>
                      <span className="settings-sub-label">Heap Total</span>
                      <span className="settings-sub-value">258.24 MB</span>
                    </div>
                    <div>
                      <span className="settings-sub-label">Heap Used</span>
                      <span className="settings-sub-value">234.87 MB</span>
                    </div>
                    <div>
                      <span className="settings-sub-label">External</span>
                      <span className="settings-sub-value">8.43 MB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Footer */}
              <div className="settings-health-footer">
                <FiTerminal className="settings-terminal-icon" />
                <span>Node Version: v22.23.1</span>
                <span className="settings-dot">•</span>
                <span>Checked: {lastChecked}</span>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Settings;