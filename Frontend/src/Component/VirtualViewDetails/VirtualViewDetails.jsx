import React, { useState } from 'react';
import './VirtualViewDetails.css';

// React Icons matching reference design exactly
import { 
  FiMonitor, 
  FiSend, 
  FiShare2, 
  FiShield, 
  FiClock, 
  FiCheckCircle, 
  FiLayers, 
  FiCode,
  FiBookOpen,
  FiCoffee,
  FiAward,
  FiX
} from 'react-icons/fi';

import { HiSparkles } from 'react-icons/hi2';

const VirtualViewDetails = () => {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    education: '',
    mobile: '',
    email: ''
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitInterest = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully:", formData);
    // Reset form after submission
    setFormData({ name: '', address: '', education: '', mobile: '', email: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="VirtualViewDetails-wrapper">
      <div className="VirtualViewDetails-container">
        
        {/* Main Content Column */}
        <main className="VirtualViewDetails-main-content">
          
          {/* Header Tag Badges */}
          <div className="VirtualViewDetails-tag-group">
            <span className="VirtualViewDetails-tag green-tag">
              <FiMonitor className="VirtualViewDetails-tag-icon" />
              VIRTUAL
            </span>
            <span className="VirtualViewDetails-tag orange-tag">
              <HiSparkles className="VirtualViewDetails-tag-icon" />
              FREE OF COST
            </span>
            <span className="VirtualViewDetails-tag blue-tag">
              VIRTUAL
            </span>
          </div>

          {/* Program Title */}
          <h1 className="VirtualViewDetails-main-title">
            Frontend Engineering with React & Next.js
          </h1>

          {/* About Section */}
          <section className="VirtualViewDetails-section">
            <h2 className="VirtualViewDetails-section-title">About the Internship</h2>
            <p className="VirtualViewDetails-paragraph">
              Master modern frontend engineering concepts including Server Components, state management, and SSR.
            </p>
          </section>

          {/* Project Focus & Outcome */}
          <section className="VirtualViewDetails-section">
            <div className="VirtualViewDetails-heading-with-icon green-icon">
              <FiCheckCircle className="VirtualViewDetails-icon-header" />
              <h3>Project Focus & Outcome</h3>
            </div>
            <p className="VirtualViewDetails-outcome-text">
              SaaS Dashboard with Rich Charts
            </p>
          </section>

          {/* Structure & Key Modules */}
          <section className="VirtualViewDetails-section">
            <div className="VirtualViewDetails-heading-with-icon green-icon">
              <FiLayers className="VirtualViewDetails-icon-header" />
              <h3>Structure & Key Modules</h3>
            </div>
            
            <div className="VirtualViewDetails-modules-grid">
              <div className="VirtualViewDetails-module-card">
                <span className="VirtualViewDetails-module-number">1</span>
                <span className="VirtualViewDetails-module-name">React Deep Dive</span>
              </div>
              <div className="VirtualViewDetails-module-card">
                <span className="VirtualViewDetails-module-number">2</span>
                <span className="VirtualViewDetails-module-name">Next.js App Router</span>
              </div>
              <div className="VirtualViewDetails-module-card">
                <span className="VirtualViewDetails-module-number">3</span>
                <span className="VirtualViewDetails-module-name">State Management</span>
              </div>
              <div className="VirtualViewDetails-module-card">
                <span className="VirtualViewDetails-module-number">4</span>
                <span className="VirtualViewDetails-module-name">Tailwind CSS & Styling</span>
              </div>
            </div>
          </section>

          {/* Dual Columns Section: Tools & Prerequisites */}
          <div className="VirtualViewDetails-two-column-grid">
            
            {/* Tools & Technologies */}
            <section className="VirtualViewDetails-section">
              <div className="VirtualViewDetails-heading-with-icon orange-icon">
                <FiCode className="VirtualViewDetails-icon-header" />
                <h3>Tools & Technologies</h3>
              </div>
              <div className="VirtualViewDetails-tech-tags">
                <span className="VirtualViewDetails-tech-pill">React</span>
                <span className="VirtualViewDetails-tech-pill">Next.js</span>
                <span className="VirtualViewDetails-tech-pill">Tailwind CSS</span>
                <span className="VirtualViewDetails-tech-pill">Vite</span>
                <span className="VirtualViewDetails-tech-pill">ESLint</span>
              </div>
            </section>

            {/* Skills & Prerequisites */}
            <section className="VirtualViewDetails-section">
              <div className="VirtualViewDetails-heading-with-icon green-icon">
                <FiBookOpen className="VirtualViewDetails-icon-header" />
                <h3>Skills & Prerequisites</h3>
              </div>
              <div className="VirtualViewDetails-tech-tags">
                <span className="VirtualViewDetails-tech-pill">HTML/CSS</span>
                <span className="VirtualViewDetails-tech-pill">JavaScript basics</span>
              </div>
            </section>

          </div>

          {/* Dual Columns Section: Facilities & Career Scope */}
          <div className="VirtualViewDetails-two-column-grid">
            
            {/* Facilities & Benefits */}
            <section className="VirtualViewDetails-section">
              <div className="VirtualViewDetails-heading-with-icon orange-icon">
                <FiCoffee className="VirtualViewDetails-icon-header" />
                <h3>Facilities & Benefits</h3>
              </div>
              <div className="VirtualViewDetails-feature-box orange-box">
                <div className="VirtualViewDetails-feature-icon-wrapper orange-icon-bg">
                  <HiSparkles />
                </div>
                <span>Virtual mentorship sessions, community Slack</span>
              </div>
            </section>

            {/* Career Scope & Placements */}
            <section className="VirtualViewDetails-section">
              <div className="VirtualViewDetails-heading-with-icon green-icon">
                <FiAward className="VirtualViewDetails-icon-header" />
                <h3>Career Scope & Placements</h3>
              </div>
              <div className="VirtualViewDetails-feature-box green-box">
                <div className="VirtualViewDetails-feature-icon-wrapper green-icon-bg">
                  <FiCheckCircle />
                </div>
                <span>Portfolio building, remote job references</span>
              </div>
            </section>

          </div>

        </main>

        {/* Sidebar Column */}
        <aside className="VirtualViewDetails-sidebar">
          
          {/* Action Buttons */}
          <div className="VirtualViewDetails-action-buttons">
            <button 
              className="VirtualViewDetails-btn-express" 
              onClick={handleOpenModal}
              type="button"
            >
              <FiSend className="VirtualViewDetails-btn-icon" />
              <span>Express Interest</span>
            </button>
            <button className="VirtualViewDetails-btn-share" type="button">
              <FiShare2 className="VirtualViewDetails-btn-icon" />
              <span>Share Internship</span>
            </button>
          </div>

          {/* Quick Overview Card */}
          <div className="VirtualViewDetails-overview-card">
            <div className="VirtualViewDetails-overview-header">
              <FiShield className="VirtualViewDetails-overview-shield-icon" />
              <h3>Quick Overview</h3>
            </div>
            
            <hr className="VirtualViewDetails-card-divider" />

            <div className="VirtualViewDetails-overview-body">
              <div className="VirtualViewDetails-duration-meta">
                <FiClock className="VirtualViewDetails-clock-icon" />
                <span>Duration</span>
              </div>
              <div className="VirtualViewDetails-duration-value">6 Weeks</div>

              <button 
                className="VirtualViewDetails-btn-express-full" 
                onClick={handleOpenModal}
                type="button"
              >
                <FiSend className="VirtualViewDetails-btn-icon" />
                <span>Express Interest Now</span>
              </button>
            </div>
          </div>

        </aside>

      </div>

      {/* Smooth Express Interest Modal */}
      <div 
        className={`VirtualViewDetails-modal-overlay ${isModalOpen ? 'show' : ''}`}
        onClick={handleCloseModal}
      >
        <div 
          className="VirtualViewDetails-modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="VirtualViewDetails-modal-header">
            <div>
              <h2 className="VirtualViewDetails-modal-title">Interest Send</h2>
              <p className="VirtualViewDetails-modal-subtitle">
                Express your interest in the "Frontend Engineering with React & Next.js" program.
              </p>
            </div>
            <button 
              className="VirtualViewDetails-modal-close-btn" 
              onClick={handleCloseModal}
              type="button"
              aria-label="Close modal"
            >
              <FiX />
            </button>
          </div>

          {/* Form */}
          <form className="VirtualViewDetails-modal-form" onSubmit={handleSubmitInterest}>
            <div className="VirtualViewDetails-form-group">
              <label className="VirtualViewDetails-form-label">NAME *</label>
              <input 
                type="text" 
                name="name"
                className="VirtualViewDetails-form-input" 
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="VirtualViewDetails-form-group">
              <label className="VirtualViewDetails-form-label">ADDRESS *</label>
              <input 
                type="text" 
                name="address"
                className="VirtualViewDetails-form-input" 
                placeholder="Enter your full address" 
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="VirtualViewDetails-form-group">
              <label className="VirtualViewDetails-form-label">EDUCATION *</label>
              <div className="VirtualViewDetails-select-wrapper">
                <select 
                  name="education"
                  className="VirtualViewDetails-form-select"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden>Select education level</option>
                  <option value="High School">High School</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Undergraduate">Undergraduate (B.Tech / B.Sc / BCA)</option>
                  <option value="Postgraduate">Postgraduate (M.Tech / M.Sc / MCA)</option>
                </select>
              </div>
            </div>

            <div className="VirtualViewDetails-form-row">
              <div className="VirtualViewDetails-form-group">
                <label className="VirtualViewDetails-form-label">MOBILE NO. *</label>
                <input 
                  type="tel" 
                  name="mobile"
                  className="VirtualViewDetails-form-input" 
                  placeholder="+91 xxxxxxxxxx" 
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="VirtualViewDetails-form-group">
                <label className="VirtualViewDetails-form-label">EMAIL ID *</label>
                <input 
                  type="email" 
                  name="email"
                  className="VirtualViewDetails-form-input" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="VirtualViewDetails-modal-submit-btn">
              Interest Send
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default VirtualViewDetails;