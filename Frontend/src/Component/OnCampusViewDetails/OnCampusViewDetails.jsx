import React, { useState } from 'react';
import './OnCampusViewDetails.css';

// React Icons matching reference design exactly
import { 
  FiBriefcase, 
  FiSend, 
  FiShare2, 
  FiShield, 
  FiClock, 
  FiCheckCircle, 
  FiLayers, 
  FiCode,
  FiX
} from 'react-icons/fi';

// Imported Sparkles icon from Hi2 set to avoid Vite import errors
import { HiSparkles } from 'react-icons/hi2';

const OnCampusViewDetails = () => {
  // Modal State Management
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
    console.log("Submitting Interest Data:", formData);
    // Reset form and close modal
    setFormData({ name: '', address: '', education: '', mobile: '', email: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="OnCampusViewDetails-wrapper">
      <div className="OnCampusViewDetails-container">
        
        {/* Main Content (Left Column) */}
        <main className="OnCampusViewDetails-main-content">
          
          {/* Header Badges */}
          <div className="OnCampusViewDetails-tag-group">
            <span className="OnCampusViewDetails-tag green-tag">
              <FiBriefcase className="OnCampusViewDetails-tag-icon" />
              ON-CAMPUS
            </span>
            <span className="OnCampusViewDetails-tag orange-tag">
              <HiSparkles className="OnCampusViewDetails-tag-icon" />
              FREE OF COST
            </span>
            <span className="OnCampusViewDetails-tag blue-tag">
              ON_CAMPUS
            </span>
          </div>

          {/* Program Title */}
          <h1 className="OnCampusViewDetails-main-title">Machine</h1>

          {/* About Section */}
          <section className="OnCampusViewDetails-section">
            <h2 className="OnCampusViewDetails-section-title">About the Internship</h2>
            <h3 className="OnCampusViewDetails-sub-title">Website Development Internship Progra</h3>

            <div className="OnCampusViewDetails-details-list">
              <p className="OnCampusViewDetails-detail-item">
                <span className="OnCampusViewDetails-bold-label">Lead:</span> Learnify, Lucknow
              </p>
              <p className="OnCampusViewDetails-detail-item">
                <span className="OnCampusViewDetails-bold-label">Organized by:</span> International Institute of Internship, Thekma, Azamgarh
              </p>
              <p className="OnCampusViewDetails-detail-item">
                <span className="OnCampusViewDetails-bold-label">Internship Location:</span> Comptech Computer Centre, Sector-B, Gokul Nagar, Kol Bajbahadur, Azamgarh, Uttar Pradesh – 276001
              </p>
              <p className="OnCampusViewDetails-detail-item">
                <span className="OnCampusViewDetails-bold-label">Program Controller:</span> Santosh Pandey (Mobile: +91 94151 67495)
              </p>
              <p className="OnCampusViewDetails-detail-item">
                <span className="OnCampusViewDetails-bold-label">Duration:</span> 17 November 2025 – 21 December 2025 (30 Days / 100 Hours)
              </p>
              <p className="OnCampusViewDetails-detail-item">
                <span className="OnCampusViewDetails-bold-label">Target Group:</span> ITI, Polytechnic & Computer Science Undergraduate Students
              </p>
            </div>
          </section>

          <hr className="OnCampusViewDetails-divider" />

          {/* Objective Section */}
          <section className="OnCampusViewDetails-section">
            <h2 className="OnCampusViewDetails-section-title">Objective</h2>
            <p className="OnCampusViewDetails-paragraph">
              To equip students with practical skills to design, develop, and deploy responsive websites independently.
            </p>
          </section>

          <hr className="OnCampusViewDetails-divider" />

          {/* Module Section */}
          <section className="OnCampusViewDetails-section">
            <h2 className="OnCampusViewDetails-module-title">
              Module 1: Introduction to Web Development (10 Hours)
            </h2>
            <h4 className="OnCampusViewDetails-topics-heading">Topics Covered</h4>
            
            <ul className="OnCampusViewDetails-bullet-list">
              <li>Overview of Web Technologies (Front-end & Back-end)</li>
              <li>Understanding Client-Server Model</li>
              <li>Domain, Hosting & Website Structure</li>
              <li>VS Code, Chrome DevTools & GitHub Setup</li>
              <li>Introduction to HTML & CSS</li>
            </ul>
          </section>

          {/* Project Focus & Outcome */}
          <section className="OnCampusViewDetails-section">
            <div className="OnCampusViewDetails-heading-with-icon green-icon">
              <FiCheckCircle className="OnCampusViewDetails-icon-header" />
              <h3>Project Focus & Outcome</h3>
            </div>
            <p className="OnCampusViewDetails-outcome-text">Rela time pipline</p>
          </section>

          {/* Structure & Key Modules */}
          <section className="OnCampusViewDetails-section">
            <div className="OnCampusViewDetails-heading-with-icon green-icon">
              <FiLayers className="OnCampusViewDetails-icon-header" />
              <h3>Structure & Key Modules</h3>
            </div>
            <div className="OnCampusViewDetails-module-card">
              <span className="OnCampusViewDetails-module-number">1</span>
              <span className="OnCampusViewDetails-module-name">fsdsgfdh</span>
            </div>
          </section>

          {/* Tools & Technologies */}
          <section className="OnCampusViewDetails-section">
            <div className="OnCampusViewDetails-heading-with-icon orange-icon">
              <FiCode className="OnCampusViewDetails-icon-header" />
              <h3>Tools & Technologies</h3>
            </div>
            <div className="OnCampusViewDetails-tech-tags">
              <span className="OnCampusViewDetails-tech-pill">sadf</span>
              <span className="OnCampusViewDetails-tech-pill">wads</span>
              <span className="OnCampusViewDetails-tech-pill">adsa</span>
            </div>
          </section>

        </main>

        {/* Sidebar Actions & Overview (Right Column) */}
        <aside className="OnCampusViewDetails-sidebar">
          
          {/* Top Buttons */}
          <div className="OnCampusViewDetails-action-buttons">
            <button 
              className="OnCampusViewDetails-btn-express" 
              onClick={handleOpenModal}
              type="button"
            >
              <FiSend className="OnCampusViewDetails-btn-icon" />
              <span>Express Interest</span>
            </button>
            <button className="OnCampusViewDetails-btn-share" type="button">
              <FiShare2 className="OnCampusViewDetails-btn-icon" />
              <span>Share Internship</span>
            </button>
          </div>

          {/* Quick Overview Card */}
          <div className="OnCampusViewDetails-overview-card">
            <div className="OnCampusViewDetails-overview-header">
              <FiShield className="OnCampusViewDetails-overview-shield-icon" />
              <h3>Quick Overview</h3>
            </div>
            
            <hr className="OnCampusViewDetails-card-divider" />

            <div className="OnCampusViewDetails-overview-body">
              <div className="OnCampusViewDetails-duration-meta">
                <FiClock className="OnCampusViewDetails-clock-icon" />
                <span>Duration</span>
              </div>
              <div className="OnCampusViewDetails-duration-value">3 Months</div>

              <button 
                className="OnCampusViewDetails-btn-express-full" 
                onClick={handleOpenModal}
                type="button"
              >
                <FiSend className="OnCampusViewDetails-btn-icon" />
                <span>Express Interest Now</span>
              </button>
            </div>
          </div>

        </aside>

      </div>

      {/* Express Interest Modal Window */}
      <div 
        className={`OnCampusViewDetails-modal-overlay ${isModalOpen ? 'show' : ''}`}
        onClick={handleCloseModal}
      >
        <div 
          className="OnCampusViewDetails-modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="OnCampusViewDetails-modal-header">
            <div>
              <h2 className="OnCampusViewDetails-modal-title">Interest Send</h2>
              <p className="OnCampusViewDetails-modal-subtitle">
                Express your interest in the "Website Development Internship Program".
              </p>
            </div>
            <button 
              className="OnCampusViewDetails-modal-close-btn" 
              onClick={handleCloseModal}
              type="button"
            >
              <FiX />
            </button>
          </div>

          {/* Modal Form */}
          <form className="OnCampusViewDetails-modal-form" onSubmit={handleSubmitInterest}>
            
            <div className="OnCampusViewDetails-form-group">
              <label className="OnCampusViewDetails-form-label">NAME *</label>
              <input 
                type="text" 
                name="name"
                className="OnCampusViewDetails-form-input" 
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="OnCampusViewDetails-form-group">
              <label className="OnCampusViewDetails-form-label">ADDRESS *</label>
              <input 
                type="text" 
                name="address"
                className="OnCampusViewDetails-form-input" 
                placeholder="Enter your full address" 
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="OnCampusViewDetails-form-group">
              <label className="OnCampusViewDetails-form-label">EDUCATION *</label>
              <div className="OnCampusViewDetails-select-wrapper">
                <select 
                  name="education"
                  className="OnCampusViewDetails-form-select"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden>Select education level</option>
                  <option value="High School">High School</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Undergraduate (B.Tech / B.Sc / BCA)">Undergraduate (B.Tech / B.Sc / BCA)</option>
                  <option value="Postgraduate (M.Tech / M.Sc / MCA)">Postgraduate (M.Tech / M.Sc / MCA)</option>
                  <option value="Ph.D.">Ph.D.</option>
                </select>
              </div>
            </div>

            <div className="OnCampusViewDetails-form-row">
              <div className="OnCampusViewDetails-form-group">
                <label className="OnCampusViewDetails-form-label">MOBILE NO. *</label>
                <input 
                  type="tel" 
                  name="mobile"
                  className="OnCampusViewDetails-form-input" 
                  placeholder="+91 xxxxxxxxxx" 
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="OnCampusViewDetails-form-group">
                <label className="OnCampusViewDetails-form-label">EMAIL ID *</label>
                <input 
                  type="email" 
                  name="email"
                  className="OnCampusViewDetails-form-input" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="OnCampusViewDetails-modal-submit-btn">
              Interest Send
            </button>

          </form>
        </div>
      </div>

    </div>
  );
};

export default OnCampusViewDetails;