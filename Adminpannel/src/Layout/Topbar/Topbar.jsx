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
  CheckCheck,
  Trash2,
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import './Topbar.css';

// Initial Dummy Notifications
const initialNotifications = [
  {
    id: 1,
    title: "New Registration",
    message: "John Doe registered as a new applicant.",
    time: "5m ago",
    read: false,
    type: "info"
  },
  {
    id: 2,
    title: "Verification Approved",
    message: "Document verification completed for ID #4829.",
    time: "1h ago",
    read: false,
    type: "success"
  },
  {
    id: 3,
    title: "System Maintenance",
    message: "Scheduled maintenance tonight at 11 PM UTC.",
    time: "3h ago",
    read: false,
    type: "warning"
  },
  {
    id: 4,
    title: "Profile Updated",
    message: "Super Admin privileges updated successfully.",
    time: "1d ago",
    read: true,
    type: "info"
  }
];

const Topbar = ({ toggleSidebar, pageTitle = "Registrations" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'unread'

  // Calculate unread count dynamically
  const unreadCount = notifications.filter(n => !n.read).length;

  // Notification Action Handlers
  const toggleNotificationRead = (id) => {
    setNotifications(prev =>
      prev.map(item => item.id === id ? { ...item, read: !item.read } : item)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(item => ({ ...item, read: true })));
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(item => item.id !== id));
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === 'unread') return !n.read;
    return true;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={16} className="notif-ico success" />;
      case 'warning':
        return <AlertTriangle size={16} className="notif-ico warning" />;
      default:
        return <Info size={16} className="notif-ico info" />;
    }
  };

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

        {/* 3D Embossed Notification Button & Panel Container */}
        <div className="notification-wrapper-3d">
          <button 
            className={`btn-3d-tactile icon-btn-3d ${isNotificationOpen ? 'active' : ''}`}
            title="Notifications" 
            type="button"
            onClick={() => {
              setIsNotificationOpen(!isNotificationOpen);
              setIsProfileOpen(false);
            }}
          >
            <Bell size={17} />
            {unreadCount > 0 && <span className="badge-notification-3d">{unreadCount}</span>}
          </button>

          {/* 3D Elevated Notification Dropdown */}
          {isNotificationOpen && (
            <>
              <div className="backdrop-click-mask" onClick={() => setIsNotificationOpen(false)} />
              <div className="dropdown-panel-3d notif-panel-3d">
                <div className="notif-header-3d">
                  <div className="notif-title-row">
                    <span className="notif-heading">Notifications</span>
                    {unreadCount > 0 && (
                      <button className="btn-mark-all" onClick={markAllAsRead}>
                        <CheckCheck size={14} /> Mark all read
                      </button>
                    )}
                  </div>
                  
                  {/* Tabs */}
                  <div className="notif-tabs">
                    <button 
                      className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                      onClick={() => setActiveTab('all')}
                    >
                      All ({notifications.length})
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'unread' ? 'active' : ''}`}
                      onClick={() => setActiveTab('unread')}
                    >
                      Unread ({unreadCount})
                    </button>
                  </div>
                </div>

                {/* Notification Items List */}
                <div className="notif-body-3d">
                  {filteredNotifications.length === 0 ? (
                    <div className="notif-empty">
                      <span>No notifications found</span>
                    </div>
                  ) : (
                    filteredNotifications.map((notif) => (
                      <div 
                        key={notif.id} 
                        className={`notif-item-3d ${!notif.read ? 'unread' : ''}`}
                        onClick={() => toggleNotificationRead(notif.id)}
                      >
                        <div className="notif-icon-wrapper">
                          {getTypeIcon(notif.type)}
                        </div>
                        <div className="notif-content">
                          <div className="notif-item-header">
                            <span className="notif-item-title">{notif.title}</span>
                            <span className="notif-time">{notif.time}</span>
                          </div>
                          <p className="notif-item-msg">{notif.message}</p>
                        </div>
                        <button 
                          className="btn-delete-notif" 
                          title="Delete"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeNotification(notif.id);
                          }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="groove-separator"></div>

        {/* 3D Profile Card Menu */}
        <div className="profile-wrapper-3d">
          <button 
            className="btn-3d-profile"
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsNotificationOpen(false);
            }}
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