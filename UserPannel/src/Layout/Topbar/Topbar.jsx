import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, ChevronRight, Search, Bell, ChevronDown } from 'lucide-react';
import './TopBar.css';

const routeTitleMap = {
  '/': 'Dashboard',
  '/browse-internships': 'Browse Internships',
  '/applications': 'My Applications',
  '/id-cards': 'ID Cards',
  '/certificates': 'Certificates',
  '/notifications': 'Notifications',
  '/payments': 'Payments',
  '/profile': 'Profile',
  '/settings': 'Settings',
  '/help-center': 'Help Center',
  '/contact-support': 'Contact Support',
};

const TopBar = () => {
  const location = useLocation();
  const currentTitle = routeTitleMap[location.pathname] || 'Dashboard';

  return (
    <header className="topbar-container">
      {/* Left: Breadcrumbs */}
      <div className="topbar-breadcrumb">
        <Link to="/" className="breadcrumb-link breadcrumb-home" title="Home">
          <Home size={16} />
          <span>Home</span>
        </Link>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span className="breadcrumb-segment">Student</span>
        <ChevronRight size={14} className="breadcrumb-separator" />
        <span className="breadcrumb-current">{currentTitle}</span>
      </div>

      {/* Right: Search, Notification & User Info */}
      <div className="topbar-right-controls">
        {/* Search Bar */}
        <div className="topbar-search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search internships, skills..."
            className="search-input"
          />
        </div>

        {/* Notification Bell */}
        <button className="notification-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>

        {/* Divider */}
        <div className="topbar-divider"></div>

        {/* Profile Details */}
        <div className="topbar-profile-section">
          <div className="profile-text">
            <span className="profile-user-name">Prasanta Kumar</span>
            <span className="profile-user-role">Student</span>
          </div>
          <div className="profile-avatar">P</div>
          <ChevronDown size={14} className="profile-dropdown-icon" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;