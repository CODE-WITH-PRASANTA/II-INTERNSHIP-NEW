import React, { useState } from 'react';
import { 
  FiHome, 
  FiFolder, 
  FiBell, 
  FiInfo, 
  FiTarget, 
  FiMail, 
  FiSend, 
  FiTrash2, 
  FiChevronDown 
} from 'react-icons/fi';
import './NoticeBoard.css';

const NoticeBoard = () => {
  const initialAnnouncements = [
    {
      id: 1,
      title: 'Scheduled System Maintenance',
      content: 'The platform will undergo routine server upgrades on Sunday at 02:00 AM UTC. Expect around 30 minutes of downtime.',
      type: 'Platform Wide',
      audience: 'Everyone',
      userId: '',
      date: 'Sep 8, 2026',
    },
  ];

  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  // Form State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('Platform Wide');
  const [audience, setAudience] = useState('Everyone');
  const [userId, setUserId] = useState('');

  // Handle Compose Broadcast Submission
  const handleBroadcast = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newAnnouncement = {
      id: Date.now(),
      title,
      content,
      type,
      audience,
      userId: userId || 'N/A',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    handleClear();
  };

  // Reset Form Fields
  const handleClear = () => {
    setTitle('');
    setContent('');
    setType('Platform Wide');
    setAudience('Everyone');
    setUserId('');
  };

  // Delete Announcement
  const handleDelete = (id) => {
    setAnnouncements(announcements.filter((item) => item.id !== id));
  };

  return (
    <div className="notice-board-container">
      {/* Breadcrumb Navigation */}
      <nav className="notice-board-breadcrumb">
        <span className="notice-board-breadcrumb-item">
          <FiHome className="notice-board-breadcrumb-icon" /> Home
        </span>
        <span className="notice-board-breadcrumb-separator">&gt;</span>
        <span className="notice-board-breadcrumb-item">
          <FiFolder className="notice-board-breadcrumb-icon" /> Super Admin
        </span>
        <span className="notice-board-breadcrumb-separator">&gt;</span>
        <span className="notice-board-breadcrumb-item notice-board-breadcrumb-active">
          <FiBell className="notice-board-breadcrumb-icon" /> Notice Board
        </span>
      </nav>

      {/* Header Section */}
      <div className="notice-board-header">
        <h1>Notice Board Announcements</h1>
        <p>Create announcements and broadcast notifications targeted by user role or specific profiles.</p>
      </div>

      {/* Two-Column Grid Layout */}
      <div className="notice-board-grid">
        
        {/* Left Column: Active Announcements */}
        <div className="notice-board-left-column">
          <h2 className="notice-board-section-title">Active Announcements</h2>

          {announcements.length > 0 ? (
            <div className="notice-board-announcements-list">
              {announcements.map((item) => (
                <div key={item.id} className="notice-board-card">
                  <div className="notice-board-card-header">
                    <div>
                      <span className="notice-board-badge">{item.type}</span>
                      <h3 className="notice-board-card-title">{item.title}</h3>
                    </div>
                    <button 
                      className="notice-board-btn-delete"
                      onClick={() => handleDelete(item.id)}
                      title="Delete Announcement"
                      aria-label="Delete Announcement"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                  <p className="notice-board-card-body">{item.content}</p>
                  <div className="notice-board-card-footer">
                    <span><strong>Audience:</strong> {item.audience}</span>
                    {item.userId !== 'N/A' && <span><strong>User ID:</strong> {item.userId}</span>}
                    <span className="notice-board-card-date">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="notice-board-empty-card">
              <div className="notice-board-empty-icon-wrapper">
                <FiInfo className="notice-board-empty-icon" />
              </div>
              <h3>Notice Board is Empty</h3>
              <p>No broadcasts published yet. Use the composer form to post one.</p>
            </div>
          )}
        </div>

        {/* Right Column: Compose Announcement Form */}
        <div className="notice-board-right-column">
          <div className="notice-board-composer-card">
            
            {/* Form Header */}
            <div className="notice-board-composer-header">
              <div className="notice-board-composer-title-group">
                <FiBell className="notice-board-composer-bell-icon" />
                <div>
                  <h2>Compose Announcement</h2>
                  <p>Draft and send notice board feeds to students or instructors.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleBroadcast} className="notice-board-composer-form">
              
              {/* Notice Title / Headline */}
              <div className="notice-board-form-group">
                <label>NOTICE TITLE / HEADLINE</label>
                <input
                  type="text"
                  placeholder="Schedule Maintenance Update"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Notice Content / Message Body */}
              <div className="notice-board-form-group">
                <label>NOTICE CONTENT / MESSAGE BODY</label>
                <textarea
                  rows="4"
                  placeholder="Write the details of the announcement here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              {/* Target Announcement Type Segmented Toggle */}
              <div className="notice-board-form-group">
                <label className="notice-board-label-with-icon">
                  <FiTarget className="notice-board-field-icon" /> Target Announcement Type
                </label>
                <div className="notice-board-type-toggle">
                  {['Platform Wide', 'Internship', 'Immersion'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`notice-board-type-btn ${type === item ? 'active' : ''}`}
                      onClick={() => setType(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Audience Dropdown */}
              <div className="notice-board-form-group">
                <label className="notice-board-label-with-icon">
                  <FiTarget className="notice-board-field-icon" /> TARGET AUDIENCE
                </label>
                <div className="notice-board-select-wrapper">
                  <select
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                  >
                    <option value="Everyone">Everyone</option>
                    <option value="Students Only">Students Only</option>
                    <option value="Instructors Only">Instructors Only</option>
                  </select>
                  <FiChevronDown className="notice-board-select-icon" />
                </div>
              </div>

              {/* Target User ID (Optional) */}
              <div className="notice-board-form-group">
                <label className="notice-board-label-with-icon">
                  <FiMail className="notice-board-field-icon" /> TARGET USER ID (OPTIONAL)
                </label>
                <input
                  type="text"
                  placeholder="uuid-identifier-string"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              {/* Note Banner */}
              <div className="notice-board-note-box">
                <p>
                  <strong>Note:</strong> If Target Audience is "Everyone" and Specific User ID is blank, this announcement will be broadcast globally.
                </p>
              </div>

              {/* Form Action Buttons */}
              <div className="notice-board-form-actions">
                <button
                  type="button"
                  className="notice-board-btn-clear"
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button type="submit" className="notice-board-btn-broadcast">
                  <FiSend className="notice-board-btn-icon" /> Broadcast
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NoticeBoard;