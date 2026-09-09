import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  ChevronDown, 
  Command,
  Home, 
  ChevronRight,
  User,
  Settings,
  LogOut,
  Sparkles
} from 'lucide-react';
import './Topbar.css';

const Topbar = ({ toggleSidebar, pageTitle = "Registrations" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [unreadCount] = useState(3);

  return (
    <header className="topbar-container-3d">
      {/* Left Section: 3D Toggle & Breadcrumb */}
      <div className="topbar-left-3d">
        <button 
          className="btn-3d-tactile toggle-btn-3d" 
          onClick={toggleSidebar} 
          title="Toggle Navigation"
          type="button"
        >
          <Menu size={18} />
        </button>

        <div className="breadcrumb-3d-capsule">
          <div className="crumb-segment">
            <Home size={13} className="crumb-ico" />
            <span>Portal</span>
          </div>
          <ChevronRight size={12} className="crumb-divider" />
          <div className="crumb-segment active-segment">
            <span>{pageTitle}</span>
          </div>
        </div>
      </div>

      {/* Center: 3D Inset Carved Search Bar */}
      <div className="topbar-center-3d">
        <div className="search-inset-box">
          <Search size={16} className="search-ico-3d" />
          <input 
            type="text" 
            placeholder="Search candidates, applications, logs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input-3d"
          />
          <div className="badge-3d-shortcut">
            <Command size={10} />
            <span>K</span>
          </div>
        </div>
      </div>

      {/* Right: 3D Controls & User Profile */}
      <div className="topbar-right-3d">
        {/* Status Pill with 3D Depth */}
        <div className="status-pill-3d">
          <span className="pulsing-core"></span>
          <span className="pill-text">Super Admin</span>
        </div>

        {/* 3D Embossed Notification Button */}
        <button className="btn-3d-tactile icon-btn-3d" title="Notifications" type="button">
          <Bell size={17} />
          {unreadCount > 0 && <span className="badge-notification-3d">{unreadCount}</span>}
        </button>

        <div className="groove-separator"></div>

        {/* 3D Profile Card Menu */}
        <div className="profile-wrapper-3d">
          <button 
            className="btn-3d-profile"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            type="button"
          >
            <div className="avatar-cube-3d">
              <span>S</span>
            </div>
            <div className="profile-identity">
              <span className="admin-name">System Admin</span>
              <span className="admin-role">Super Access</span>
            </div>
            <ChevronDown size={14} className={`chevron-3d ${isProfileOpen ? 'rotate' : ''}`} />
          </button>

          {/* 3D Elevated Dropdown */}
          {isProfileOpen && (
            <>
              <div className="backdrop-click-mask" onClick={() => setIsProfileOpen(false)} />
              <div className="dropdown-panel-3d">
                <div className="panel-header-3d">
                  <span className="hdr-name">System Admin</span>
                  <span className="hdr-email">superadmin@hilux.com</span>
                </div>
                
                <div className="panel-actions-3d">
                  <a href="#profile" className="item-action-3d" onClick={() => setIsProfileOpen(false)}>
                    <User size={15} /> My Profile
                  </a>
                  <a href="#settings" className="item-action-3d" onClick={() => setIsProfileOpen(false)}>
                    <Settings size={15} /> Settings
                  </a>
                  <div className="groove-horizontal"></div>
                  <button className="item-action-3d logout-3d" onClick={() => setIsProfileOpen(false)}>
                    <LogOut size={15} /> Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;