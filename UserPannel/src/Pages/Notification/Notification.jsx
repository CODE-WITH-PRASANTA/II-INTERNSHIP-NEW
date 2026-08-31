import React, { useState } from 'react';
import {
  Megaphone,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  User,
  CheckCheck,
  MoreHorizontal,
  Bell,
  Mail,
  Send,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import './Notification.css';

const Notification = () => {
  const [activeTab, setActiveTab] = useState('all');

  // नोटिफिकेशन डमी डेटा
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      code: 'NOT-24F40M',
      category: 'General',
      type: 'updates',
      title: 'Research in Humanity Program',
      description: 'I have more information regarding your application. Please check your application dashboard.',
      date: '1 Aug 2026',
      author: 'System Admin',
      time: '10:30 AM',
      isNew: true,
      isUnread: true,
      variant: 'blue',
      icon: Megaphone,
      graphicType: 'mail'
    },
    {
      id: 2,
      code: 'NOT-1785571263795-cnrkv7wu80000uo34apv8ui1ir',
      category: 'General',
      type: 'updates',
      title: 'FXBFXB',
      description: 'FXXBD DBDS SDGDS',
      date: '1 Aug 2026',
      author: 'Senior Instructor',
      time: '09:15 AM',
      isNew: true,
      isUnread: true,
      variant: 'orange',
      icon: FileText,
      graphicType: 'clipboard'
    },
    {
      id: 3,
      code: 'NOT-1785263559082',
      category: 'General',
      type: 'system',
      title: 'Aloo ka chalu bet kah gaye the',
      description: 'began ki tokari pe so rahe the',
      date: '29 Jul 2026',
      author: 'System Admin',
      time: '04:45 PM',
      isNew: true,
      isUnread: true,
      variant: 'green',
      icon: CheckCircle2,
      graphicType: 'chat'
    },
    {
      id: 4,
      code: 'II/2026/005',
      category: 'Guidelines',
      type: 'guidelines',
      title: 'Important Guidelines Update',
      description: 'Please review the updated internship guidelines for a better experience.',
      date: '28 Jul 2026',
      author: 'System Admin',
      time: '11:20 AM',
      isNew: true,
      isUnread: false,
      variant: 'amber',
      icon: ShieldCheck,
      graphicType: 'book'
    },
    {
      id: 5,
      code: 'SYS-889104',
      category: 'System',
      type: 'system',
      title: 'Scheduled System Maintenance Notice',
      description: 'The learning portal will undergo maintenance this Sunday from 2:00 AM to 4:00 AM IST.',
      date: '25 Jul 2026',
      author: 'Tech Support',
      time: '02:00 PM',
      isNew: false,
      isUnread: false,
      variant: 'green',
      icon: CheckCircle2,
      graphicType: 'chat'
    },
    {
      id: 6,
      code: 'GD-9921',
      category: 'Guidelines',
      type: 'guidelines',
      title: 'Code of Conduct & Attendance Rules',
      description: 'Ensure 85% attendance during the live mentoring sessions to be eligible for certification.',
      date: '20 Jul 2026',
      author: 'Program Director',
      time: '12:00 PM',
      isNew: false,
      isUnread: false,
      variant: 'amber',
      icon: ShieldCheck,
      graphicType: 'book'
    }
  ]);

  // Mark all as read function
  const handleMarkAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({ ...item, isNew: false, isUnread: false }))
    );
  };

  // Filter tabs calculation
  const totalAll = notifications.length;
  const totalUnread = notifications.filter((n) => n.isUnread).length;
  const totalUpdates = notifications.filter((n) => n.type === 'updates').length;
  const totalSystem = notifications.filter((n) => n.type === 'system').length;
  const totalGuidelines = notifications.filter((n) => n.type === 'guidelines').length;

  // Filtered Notifications list
  const filteredNotifications = notifications.filter((n) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return n.isUnread;
    if (activeTab === 'updates') return n.type === 'updates';
    if (activeTab === 'system') return n.type === 'system';
    if (activeTab === 'guidelines') return n.type === 'guidelines';
    return true;
  });

  // Render right illustration badge
  const renderIllustration = (type) => {
    switch (type) {
      case 'mail':
        return (
          <div className="vector-circle blue-theme">
            <div className="vector-envelope">
              <Mail size={28} className="vector-icon-blue" />
            </div>
          </div>
        );
      case 'clipboard':
        return (
          <div className="vector-circle orange-theme">
            <div className="vector-board">
              <div className="vector-clip-line"></div>
              <div className="vector-bell-mini">🔔</div>
            </div>
          </div>
        );
      case 'chat':
        return (
          <div className="vector-circle green-theme">
            <div className="vector-bubbles">
              <div className="chat-bubble-dark">
                <span>•••</span>
              </div>
              <div className="chat-bubble-light"></div>
            </div>
          </div>
        );
      case 'book':
        return (
          <div className="vector-circle amber-theme">
            <div className="vector-book">
              <BookOpen size={28} className="vector-icon-amber" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="notifications-container">
      {/* ================= HEADER SECTION ================= */}
      <div className="notifications-header">
        <div className="header-info">
          <h1 className="header-title">Notifications</h1>
          <p className="header-subtitle">
            Stay updated with your application and enrollment activity.
          </p>
        </div>

        {/* 3D Decorative Floating Elements Graphic */}
        <div className="header-graphic-area">
          <div className="party-confetti c1"></div>
          <div className="party-confetti c2"></div>
          <div className="party-confetti c3"></div>
          <div className="party-confetti c4"></div>

          <div className="floating-item flight-icon">
            <Send size={18} />
          </div>
          <div className="floating-item envelope-3d">
            <div className="mini-mail-seal"></div>
          </div>
          <div className="floating-item bell-3d">
            <Bell size={28} />
            <span className="bell-badge-count">3</span>
          </div>
          <div className="floating-item check-green">✓</div>
        </div>
      </div>

      {/* ================= TABS & CONTROLS ================= */}
      <div className="notifications-controls">
        <div className="filter-tabs-wrapper">
          <button
            onClick={() => setActiveTab('all')}
            className={`tab-btn ${activeTab === 'all' ? 'active-tab green-active' : ''}`}
          >
            <span>All Notifications</span>
            <span className="tab-counter-pill green-pill">{totalAll}</span>
          </button>

          <button
            onClick={() => setActiveTab('unread')}
            className={`tab-btn ${activeTab === 'unread' ? 'active-tab amber-active' : ''}`}
          >
            <span>Unread</span>
            <span className="tab-counter-pill amber-pill">{totalUnread}</span>
          </button>

          <button
            onClick={() => setActiveTab('updates')}
            className={`tab-btn ${activeTab === 'updates' ? 'active-tab blue-active' : ''}`}
          >
            <span>Updates</span>
            <span className="tab-counter-pill blue-pill">{totalUpdates}</span>
          </button>

          <button
            onClick={() => setActiveTab('system')}
            className={`tab-btn ${activeTab === 'system' ? 'active-tab purple-active' : ''}`}
          >
            <span>System</span>
            <span className="tab-counter-pill purple-pill">{totalSystem}</span>
          </button>

          <button
            onClick={() => setActiveTab('guidelines')}
            className={`tab-btn ${activeTab === 'guidelines' ? 'active-tab orange-active' : ''}`}
          >
            <span>Guidelines</span>
            <span className="tab-counter-pill orange-pill">{totalGuidelines}</span>
          </button>
        </div>

        {/* Mark All As Read Button */}
        <button className="mark-all-read-btn" onClick={handleMarkAllAsRead}>
          <CheckCheck size={16} />
          <span>Mark all as read</span>
        </button>
      </div>

      {/* ================= NOTIFICATIONS LIST ================= */}
      <div className="notifications-list">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notif) => {
            const Icon = notif.icon;

            return (
              <div
                key={notif.id}
                className={`notification-card border-${notif.variant} ${notif.isUnread ? 'unread-card' : ''}`}
              >
                {/* Left Side Strip Indicator & Icon */}
                <div className={`card-side-indicator bg-${notif.variant}-light`}>
                  <div className={`side-icon-box icon-${notif.variant}`}>
                    <Icon size={18} />
                  </div>
                </div>

                {/* Center Content */}
                <div className="card-center-content">
                  <div className="card-top-tags">
                    <span className="code-tag">{notif.code}</span>
                    <span className={`category-tag cat-${notif.category.toLowerCase()}`}>
                      {notif.category}
                    </span>
                    {notif.isNew && <span className="new-badge">New</span>}
                  </div>

                  <h3 className="notif-title">{notif.title}</h3>
                  <p className="notif-description">{notif.description}</p>

                  <div className="notif-meta">
                    <div className="meta-item">
                      <Calendar size={14} className="meta-icon" />
                      <span>{notif.date}</span>
                    </div>
                    <div className="meta-item">
                      <User size={14} className="meta-icon" />
                      <span>{notif.author}</span>
                    </div>
                    <span className="meta-dot">•</span>
                    <span className="meta-time">{notif.time}</span>
                  </div>
                </div>

                {/* Right Vector Illustration & Options */}
                <div className="card-right-aside">
                  {renderIllustration(notif.graphicType)}
                  <button className="card-options-btn" title="Options">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-notifications">
            <Bell size={40} className="empty-bell-icon" />
            <h3>No notifications in this category</h3>
            <p>You are all caught up! Check other tabs for more updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;