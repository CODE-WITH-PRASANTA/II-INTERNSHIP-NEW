import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutGrid,
  Search,
  ClipboardList,
  CreditCard,
  Award,
  Bell,
  Wallet,
  User,
  Settings,
  HelpCircle,
  Headphones,
  ChevronDown,
  ArrowLeft,
  ChevronRight,
  Menu
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, setIsCollapsed, mobileOpen, setMobileOpen }) => {
  const location = useLocation();

  const menuSections = [
    {
      title: 'MAIN MENU',
      items: [
        { path: '/', label: 'Dashboard', icon: LayoutGrid },
        { path: '/browse-internships', label: 'Browse Internships', icon: Search },
        { path: '/applications', label: 'My Applications', icon: ClipboardList },
      ],
    },
    {
      title: 'LEARNING',
      items: [
        { path: '/id-cards', label: 'ID Cards', icon: CreditCard },
        { path: '/certificates', label: 'Certificates', icon: Award },
      ],
    },
    {
      title: 'ACCOUNT',
      items: [
        { path: '/notifications', label: 'Notifications', icon: Bell, badge: 3 },
        { path: '/payments', label: 'Payments', icon: Wallet },
        { path: '/profile', label: 'Profile', icon: User },
        { path: '/settings', label: 'Settings', icon: Settings },
      ],
    },
    {
      title: 'SUPPORT',
      items: [
        { path: '/help-center', label: 'Help Center', icon: HelpCircle },
        { path: '/contact-support', label: 'Contact Support', icon: Headphones },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button 
        className="mobile-toggle-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle Navigation"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="mobile-backdrop" 
          onClick={() => setMobileOpen(false)} 
        />
      )}

      {/* Sidebar Container */}
      <aside className={`sidebar-container ${isCollapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        
        {/* Header Section: Logo + Always Visible Toggle Button */}
        <div className="sidebar-header">
          {!isCollapsed ? (
            <>
              <div className="logo-badge">
                <div className="logo-inner">
                  <span className="logo-text">i3</span>
                </div>
              </div>

              <div className="brand-info">
                <span className="brand-subtitle">International Institute of</span>
                <span className="brand-title">Internship</span>
                <span className="brand-tagline">Learn Today, Lead Tomorrow</span>
              </div>

              {/* Toggle Button in Expanded Mode */}
              <button 
                className="sidebar-header-toggle"
                onClick={() => setIsCollapsed(true)}
                title="Collapse Sidebar"
              >
                <Menu size={18} />
              </button>
            </>
          ) : (
            /* Toggle Button in Collapsed Mode (Top Center) */
            <button 
              className="sidebar-header-toggle collapsed-toggle"
              onClick={() => setIsCollapsed(false)}
              title="Expand Sidebar"
            >
              <Menu size={20} />
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <div className="sidebar-menu">
          {menuSections.map((section, idx) => (
            <div key={idx} className="menu-group">
              {!isCollapsed && <div className="group-title">{section.title}</div>}

              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    title={isCollapsed ? item.label : undefined}
                    className={`nav-item ${isActive ? 'active' : ''}`}
                  >
                    <Icon className="nav-icon" size={19} />
                    
                    {!isCollapsed && (
                      <span className="nav-label">{item.label}</span>
                    )}

                    {item.badge && (
                      <span className={`badge ${isCollapsed ? 'badge-collapsed' : ''}`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="sidebar-footer">
          <div className="user-card" onClick={() => isCollapsed && setIsCollapsed(false)}>
            <div className="user-avatar">P</div>
            {!isCollapsed && (
              <>
                <div className="user-details">
                  <p className="user-name">Prasanta Kumar Khuntia</p>
                  <p className="user-email">pk@gmail.com</p>
                </div>
                <ChevronDown className="user-chevron" size={15} />
              </>
            )}
          </div>

          {/* Bottom Expand / Collapse Button */}
          <button
            className="collapse-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight size={18} />
            ) : (
              <>
                <ArrowLeft size={15} />
                <span className="collapse-text">Collapse Sidebar</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;