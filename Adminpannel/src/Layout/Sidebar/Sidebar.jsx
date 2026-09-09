import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Activity,
  Layers,
  Briefcase,
  Handshake,
  FileText,
  Image as ImageIcon,
  Star,
  Bell,
  Heart,
  Headphones,
  Settings,
  ChevronsUpDown,
  ArrowLeftToLine
} from 'lucide-react';
import './Sidebar.css';

const menuGroups = [
  {
    title: 'Platform Governance',
    items: [
      { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { id: 'user-accounts', label: 'User Accounts', path: '/user-accounts', icon: Users },
      { id: 'registrations', label: 'Registrations', path: '/registrations', icon: GraduationCap },
    ],
  },
  {
    title: 'Internships & Jobs',
    items: [
      { id: 'internships', label: 'Internships', path: '/internships', icon: Activity },
      { id: 'immersion-programs', label: 'Immersion Programs', path: '/immersion-programs', icon: Layers },
      { id: 'recruitment-openings', label: 'Recruitment Openings', path: '/recruitment-openings', icon: Briefcase },
      { id: 'partners-onboard', label: 'Partners Onboard', path: '/partners-onboard', icon: Handshake },
    ],
  },
  {
    title: 'CMS & Moderation',
    items: [
      { id: 'blogs-board', label: 'Blogs Board', path: '/blogs-board', icon: FileText },
      { id: 'media-desk', label: 'Media Desk', path: '/media-desk', icon: ImageIcon },
      { id: 'reviews-moderation', label: 'Reviews Moderation', path: '/reviews-moderation', icon: Star },
      { id: 'notice-board', label: 'Notice Board', path: '/notice-board', icon: Bell },
    ],
  },
  {
    title: 'Finance & Support',
    items: [
      { id: 'donation-logs', label: 'Donation Logs', path: '/donation-logs', icon: Heart },
      { id: 'support-tickets', label: 'Support Tickets', path: '/support-tickets', icon: Headphones },
    ],
  },
  {
    title: 'Account',
    items: [
      { id: 'settings', label: 'Settings', path: '/settings', icon: Settings },
    ],
  },
];

const Sidebar = ({ isCollapsed, isMobileOpen, onClose, onToggleCollapse }) => {
  return (
    <aside className={`custom-sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
      {/* Top Brand Title Section (No White Box) */}
      <div className="sidebar-header">
        <div className="brand-header-wrap">
          <div className="brand-symbol">
            <span>I</span>
            <span className="brand-accent">3</span>
          </div>
          <div className="brand-title-group">
            <span className="brand-subtitle">INTERNATIONAL INSTITUTE OF</span>
            <span className="brand-main-title">INTERNSHIP</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="sidebar-menu-scroll">
        {menuGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="menu-group">
            {!isCollapsed && <span className="group-title">{group.title}</span>}
            <ul className="nav-list">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      title={isCollapsed ? item.label : undefined}
                    >
                      <Icon size={18} className="nav-icon" />
                      {!isCollapsed && <span className="nav-label">{item.label}</span>}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Profile & Collapse */}
      <div className="sidebar-footer">
        <div className="user-profile-card">
          <div className="user-avatar">S</div>
          {!isCollapsed && (
            <div className="user-info">
              <div className="user-name">System Admin</div>
              <div className="user-email">superadmin@hilux.com</div>
            </div>
          )}
          {!isCollapsed && <ChevronsUpDown size={16} className="profile-dropdown-icon" />}
        </div>

        <button 
          className="collapse-toggle-btn" 
          onClick={onToggleCollapse}
          type="button"
        >
          <ArrowLeftToLine size={18} className={`collapse-icon ${isCollapsed ? 'rotated' : ''}`} />
          {!isCollapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;