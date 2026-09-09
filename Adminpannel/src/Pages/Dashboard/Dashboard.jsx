import React from 'react';
import { 
  Users, 
  Briefcase, 
  Star, 
  Heart, 
  Headphones, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2,
  Sparkles 
} from 'lucide-react';
import './Dashboard.css';

const statsData = [
  {
    id: 'users',
    title: 'TOTAL PLATFORM USERS',
    value: '97',
    desc: 'Registered users on platform',
    growth: '+12% this week',
    actionText: 'Manage Queue',
    icon: Users,
    theme: 'blue',
  },
  {
    id: 'internships',
    title: 'PENDING INTERNSHIPS',
    value: '0',
    desc: 'Internship postings awaiting review',
    badge: 'Up to date',
    actionText: 'Manage Queue',
    icon: Briefcase,
    theme: 'emerald',
  },
  {
    id: 'testimonials',
    title: 'TESTIMONIALS PENDING',
    value: '0',
    desc: 'User reviews pending approval',
    badge: 'Cleared',
    actionText: 'Manage Queue',
    icon: Star,
    theme: 'purple',
  },
  {
    id: 'donations',
    title: 'DONATION FUNDS RAISED',
    value: '₹5,007',
    desc: 'Total logged support donations',
    growth: '+ ₹1,200 today',
    actionText: 'Manage Queue',
    icon: Heart,
    theme: 'rose',
  },
  {
    id: 'tickets',
    title: 'ACTIVE SUPPORT TICKETS',
    value: '0',
    desc: 'Open issues needing response',
    badge: 'No backlog',
    actionText: 'Manage Queue',
    icon: Headphones,
    theme: 'amber',
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Banner Section */}
      <section className="dashboard-hero-banner">
        <div className="hero-badge">
          <Sparkles size={14} /> Live System Overview
        </div>
        <h1 className="hero-title">Super Admin Command Center</h1>
        <p className="hero-description">
          Real-time management for IIInternship platform governance, user pipelines, and moderation queues.
        </p>
      </section>

      {/* 5 Dynamic Cards Grid */}
      <section className="metrics-grid">
        {statsData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className={`metric-card card-theme-${item.theme}`}>
              <div className="metric-header">
                <span className="metric-title">{item.title}</span>
                <div className="metric-icon-box">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
              </div>

              <div className="metric-body">
                <span className="metric-number">{item.value}</span>
                {item.growth && <span className="tag tag-growth">{item.growth}</span>}
                {item.badge && <span className="tag tag-status">{item.badge}</span>}
              </div>

              <p className="metric-description">{item.desc}</p>

              <hr className="metric-divider" />

              <div className="metric-footer">
                <button type="button" className="metric-action-btn">
                  <span>{item.actionText}</span>
                  <ArrowUpRight size={16} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Queue Panel */}
      <section className="pending-queue-card">
        <div className="queue-header">
          <div className="queue-info">
            <div className="queue-icon-wrapper">
              <Briefcase size={20} />
            </div>
            <div className="queue-text">
              <h3 className="queue-title">Pending Internship Approvals</h3>
              <p className="queue-subtitle">Instructor-posted internships waiting to go live.</p>
            </div>
          </div>
          <span className="queue-status-badge">
            <Clock size={14} /> 0 Awaiting Approval
          </span>
        </div>

        <div className="queue-empty-state">
          <CheckCircle2 size={32} className="empty-state-icon" />
          <p className="empty-state-text">All internship approvals are currently cleared and up to date!</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;