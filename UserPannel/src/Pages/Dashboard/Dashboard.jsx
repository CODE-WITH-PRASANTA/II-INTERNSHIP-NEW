import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Briefcase,
  BookOpen,
  CheckCircle2,
  Award,
  ArrowRight,
  TrendingUp,
  FileText,
  GraduationCap,
  Megaphone
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  // 1. Stats Data
  const stats = [
    {
      title: 'APPLICATIONS',
      value: 2,
      subtitle: 'Total applied',
      trend: '↑ 100%',
      trendType: 'positive',
      icon: Briefcase,
      colorClass: 'stat-green',
      path: '/applications'
    },
    {
      title: 'ENROLLMENTS',
      value: 0,
      subtitle: 'Currently enrolled',
      trend: '→ 0%',
      trendType: 'neutral',
      icon: BookOpen,
      colorClass: 'stat-purple',
      path: '/browse-internships'
    },
    {
      title: 'COMPLETED',
      value: 0,
      subtitle: 'Internships finished',
      trend: '→ 0%',
      trendType: 'neutral',
      icon: CheckCircle2,
      colorClass: 'stat-blue',
      path: '/certificates'
    },
    {
      title: 'CERTIFICATES',
      value: 0,
      subtitle: 'Earned credentials',
      trend: '→ 0%',
      trendType: 'neutral',
      icon: Award,
      colorClass: 'stat-amber',
      path: '/certificates'
    },
  ];

  // 2. Recent Applications Data
  const recentApplications = [
    {
      id: 1,
      initial: 'S',
      title: 'ssajhsa',
      company: 'sabdn',
      status: 'Under Review',
      date: 'Aug 27, 2026',
    },
    {
      id: 2,
      initial: 'R',
      title: 'Research In Humanity Program',
      company: 'i3',
      status: 'Under Review',
      date: 'Aug 27, 2026',
    },
  ];

  return (
    <div className="dashboard-wrapper">
      
      {/* ================= HERO BANNER ================= */}
      <section className="dashboard-banner">
        <div className="banner-left-content">
          <div className="banner-badge">
            <span className="badge-pulse"></span>
            ACTIVE STUDENT PORTAL
          </div>
          <h1 className="banner-heading">
            Welcome back, Prasanta Kumar Khuntia! 👋
          </h1>
          <p className="banner-description">
            Track your applications, enrollments, and certificates from your personal dashboard.
          </p>
        </div>

        {/* Center/Right Illustration Graphic */}
        <div className="banner-illustration-area">
          <div className="floating-analytics-card">
            <div className="mini-chart-lines">
              <span className="bar b1"></span>
              <span className="bar b2"></span>
              <span className="bar b3"></span>
            </div>
            <TrendingUp size={16} className="text-emerald-500" />
          </div>

          <div className="illustration-avatar-group">
            <div className="avatar-student">
              <div className="avatar-head"></div>
              <div className="avatar-body"></div>
              <div className="avatar-laptop"></div>
            </div>
            <div className="verified-floating-badge">✓</div>
          </div>
        </div>

        {/* Action Button */}
        <div className="banner-action-box">
          <button 
            className="find-internships-btn"
            onClick={() => navigate('/browse-internships')}
          >
            <span>Find Internships</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ================= STATS COUNTERS ================= */}
      <section className="dashboard-stats-grid">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div 
              key={idx} 
              className="stat-card"
              onClick={() => navigate(stat.path)}
            >
              <div className={`stat-icon-wrapper ${stat.colorClass}`}>
                <Icon size={22} />
              </div>

              <div className="stat-info">
                <span className="stat-title">{stat.title}</span>
                <div className="stat-main-value">{stat.value}</div>
                <div className="stat-footer-row">
                  <span className="stat-subtitle">{stat.subtitle}</span>
                  <span className={`stat-trend-tag ${stat.trendType}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ================= MAIN TWO-COLUMN LAYOUT ================= */}
      <div className="dashboard-sections-layout">
        
        {/* LEFT COLUMN */}
        <div className="layout-left-column">
          
          {/* Card: Recent Applications */}
          <div className="content-card">
            <div className="card-header">
              <div className="card-title-wrap">
                <div className="card-header-icon green-icon">
                  <Briefcase size={18} />
                </div>
                <h3 className="card-title">Recent Applications</h3>
              </div>
              <button 
                className="card-view-all"
                onClick={() => navigate('/applications')}
              >
                <span>View all</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="applications-list">
              {recentApplications.map((app) => (
                <div key={app.id} className="application-item">
                  <div className="app-avatar-box">{app.initial}</div>
                  <div className="app-details">
                    <h4 className="app-job-title">{app.title}</h4>
                    <p className="app-company-name">{app.company}</p>
                  </div>
                  <div className="app-status-box">
                    <span className="status-pill yellow-pill">{app.status}</span>
                    <span className="app-date">{app.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card: Project Submissions & Feedback */}
          <div className="content-card">
            <div className="card-header">
              <div className="card-title-wrap">
                <div className="card-header-icon purple-icon">
                  <FileText size={18} />
                </div>
                <h3 className="card-title">Project Submissions & Feedback</h3>
              </div>
              <button 
                className="card-view-all"
                onClick={() => navigate('/id-cards')}
              >
                <span>Go to ID Cards</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="empty-state-container">
              <div className="empty-state-graphic project-graphic">
                <div className="graphic-sheet sheet-1"></div>
                <div className="graphic-sheet sheet-2"></div>
                <div className="graphic-envelope">✉</div>
              </div>
              <div className="empty-state-text">
                <h4>No project submissions yet</h4>
                <p>Your project submissions and feedback will appear here.</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="layout-right-column">
          
          {/* Card: Active Enrollments */}
          <div className="content-card">
            <div className="card-header">
              <div className="card-title-wrap">
                <div className="card-header-icon blue-icon">
                  <GraduationCap size={18} />
                </div>
                <h3 className="card-title">Active Enrollments</h3>
              </div>
              <button 
                className="card-view-all"
                onClick={() => navigate('/browse-internships')}
              >
                <span>View all</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="empty-horizontal-card">
              <div className="empty-info-text">
                <h4>No enrollments yet.</h4>
                <p>Explore internships and start learning.</p>
              </div>
              <div className="empty-vector-box purple-bag-vector">💼</div>
            </div>
          </div>

          {/* Card: Certificates */}
          <div className="content-card">
            <div className="card-header">
              <div className="card-title-wrap">
                <div className="card-header-icon amber-icon">
                  <Award size={18} />
                </div>
                <h3 className="card-title">Certificates</h3>
              </div>
              <button 
                className="card-view-all"
                onClick={() => navigate('/certificates')}
              >
                <span>View all</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="empty-horizontal-card">
              <div className="empty-info-text">
                <h4>No certificates earned yet.</h4>
                <p>Complete internships to earn recognized certificates.</p>
              </div>
              <div className="empty-vector-box certificate-vector">📜</div>
            </div>
          </div>

          {/* Card: Announcements */}
          <div className="content-card">
            <div className="card-header">
              <div className="card-title-wrap">
                <div className="card-header-icon green-icon">
                  <Megaphone size={18} />
                </div>
                <h3 className="card-title">Announcements</h3>
              </div>
              <button 
                className="card-view-all"
                onClick={() => navigate('/notifications')}
              >
                <span>View all</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="announcement-banner-card">
              <div className="announcement-icon-bubble">
                <Megaphone size={18} />
              </div>
              <div className="announcement-content">
                <div className="announcement-top-row">
                  <h4 className="announcement-title">New Internship Opportunities Available!</h4>
                  <span className="announcement-tag">New</span>
                </div>
                <span className="announcement-date">Aug 25, 2026</span>
                <p className="announcement-desc">
                  Check out the latest internships posted this week.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;