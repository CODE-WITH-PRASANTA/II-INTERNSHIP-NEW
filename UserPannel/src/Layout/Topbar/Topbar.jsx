import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  Home,
  ChevronRight,
  Search,
  Bell,
  ChevronDown,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Sparkles
} from 'lucide-react';
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

// 🔹 Dummy User Data
const dummyUser = {
  name: 'Alex Johnson',
  role: 'Frontend Intern',
  email: 'alex.johnson@studentportal.io',
  avatarInitial: 'A',
  unreadNotifications: 3
};

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentTitle = routeTitleMap[location.pathname] || 'Dashboard';

  // बाहर कहीं भी क्लिक करने पर ड्रॉपडाउन अपने आप बंद हो जाएगा
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleLogout = () => {
    setIsProfileMenuOpen(false);
    alert('Logged out successfully!');
  };

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

        {/* Notification Bell (Click to navigate) */}
        <button
          className="notification-btn"
          aria-label="Notifications"
          onClick={() => navigate('/notifications')}
          title="View Notifications"
        >
          <Bell size={20} />
          {dummyUser.unreadNotifications > 0 && (
            <span className="notification-badge">{dummyUser.unreadNotifications}</span>
          )}
        </button>

        {/* Divider */}
        <div className="topbar-divider"></div>

        {/* Interactive Profile Dropdown Section */}
        <div className="profile-dropdown-wrapper" ref={dropdownRef}>
          <div
            className={`topbar-profile-section ${isProfileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            role="button"
            tabIndex={0}
          >
            <div className="profile-text">
              <span className="profile-user-name">{dummyUser.name}</span>
              <span className="profile-user-role">{dummyUser.role}</span>
            </div>
            <div className="profile-avatar">{dummyUser.avatarInitial}</div>
            <ChevronDown
              size={14}
              className={`profile-dropdown-icon ${isProfileMenuOpen ? 'rotate-icon' : ''}`}
            />
          </div>

          {/* Profile Dropdown Menu */}
          {isProfileMenuOpen && (
            <div className="profile-dropdown-menu">
              <div className="dropdown-user-header">
                <div className="dropdown-avatar">{dummyUser.avatarInitial}</div>
                <div className="dropdown-user-info">
                  <p className="dropdown-user-name">{dummyUser.name}</p>
                  <p className="dropdown-user-email">{dummyUser.email}</p>
                </div>
              </div>

              <div className="dropdown-divider"></div>

              <div className="dropdown-menu-list">
                <button
                  className="dropdown-item"
                  onClick={() => {
                    navigate('/profile');
                    setIsProfileMenuOpen(false);
                  }}
                >
                  <User size={16} className="dropdown-item-icon" />
                  <span>My Profile</span>
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => {
                    navigate('/id-cards');
                    setIsProfileMenuOpen(false);
                  }}
                >
                  <Sparkles size={16} className="dropdown-item-icon" />
                  <span>My ID Card</span>
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => {
                    navigate('/settings');
                    setIsProfileMenuOpen(false);
                  }}
                >
                  <Settings size={16} className="dropdown-item-icon" />
                  <span>Settings</span>
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => {
                    navigate('/help-center');
                    setIsProfileMenuOpen(false);
                  }}
                >
                  <HelpCircle size={16} className="dropdown-item-icon" />
                  <span>Help Center</span>
                </button>
              </div>

              <div className="dropdown-divider"></div>

              <button className="dropdown-item logout-btn" onClick={handleLogout}>
                <LogOut size={16} className="dropdown-item-icon" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;