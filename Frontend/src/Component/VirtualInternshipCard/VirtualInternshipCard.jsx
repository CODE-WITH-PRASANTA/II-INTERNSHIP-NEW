import React, { useState } from 'react';
import './VirtualInternshipCard.css';

// React Icons matching reference design exactly
import { 
  FiSearch, 
  FiFilter, 
  FiBriefcase, 
  FiClock, 
  FiDollarSign, 
  FiCheckCircle, 
  FiLayers, 
  FiCode, 
  FiSend, 
  FiShare2, 
  FiGrid, 
  FiList 
} from 'react-icons/fi';

const virtualData = [
  {
    id: 1,
    title: "Frontend Engineering with React & Next.js",
    tags: [
      { text: "VIRTUAL INTERNSHIP", type: "blue" },
      { text: "VIRTUAL", type: "green" }
    ],
    description: "Master modern frontend engineering concepts including Server Components, state management, and SSR.",
    projectFocus: "SaaS Dashboard with Rich Charts",
    keyModules: [
      "React Deep Dive", 
      "Next.js App Router", 
      "State Management", 
      "Tailwind CSS & Styling"
    ],
    toolsTech: ["React", "Next.js", "Tailwind CSS", "Vite", "ESLint"],
    duration: "6 Weeks"
  }
];

const VirtualInternshipCard = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="VirtualInternshipCard-wrapper">
      <div className="VirtualInternshipCard-container">
        
        {/* Left Sidebar Filters */}
        <aside className="VirtualInternshipCard-sidebar">
          
          {/* Quick Search Box */}
          <div className="VirtualInternshipCard-filter-box">
            <h3 className="VirtualInternshipCard-filter-title">Quick Search</h3>
            <div className="VirtualInternshipCard-search-input-wrapper">
              <FiSearch className="VirtualInternshipCard-search-icon" />
              <input 
                type="text" 
                className="VirtualInternshipCard-search-input"
                placeholder="e.g. Software Engineer" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Options */}
          <div className="VirtualInternshipCard-filter-box">
            <div className="VirtualInternshipCard-filter-header">
              <div className="VirtualInternshipCard-filter-header-left">
                <FiFilter className="VirtualInternshipCard-filter-main-icon" />
                <span className="VirtualInternshipCard-filter-header-title">Filters</span>
              </div>
              <button className="VirtualInternshipCard-clear-btn" type="button">CLEAR ALL</button>
            </div>

            {/* Domain Group */}
            <div className="VirtualInternshipCard-filter-group">
              <div className="VirtualInternshipCard-group-title">
                <FiBriefcase className="VirtualInternshipCard-group-icon" />
                <span>Domain</span>
              </div>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>Engineering</span>
              </label>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>Design</span>
              </label>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>Marketing</span>
              </label>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>Data Science</span>
              </label>
            </div>

            <hr className="VirtualInternshipCard-divider" />

            {/* Duration Group */}
            <div className="VirtualInternshipCard-filter-group">
              <div className="VirtualInternshipCard-group-title">
                <FiClock className="VirtualInternshipCard-group-icon" />
                <span>Duration</span>
              </div>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>1-2 Months</span>
              </label>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>3-4 Months</span>
              </label>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>6 Months</span>
              </label>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>Flexible</span>
              </label>
            </div>

            <hr className="VirtualInternshipCard-divider" />

            {/* Stipend Group */}
            <div className="VirtualInternshipCard-filter-group">
              <div className="VirtualInternshipCard-group-title">
                <FiDollarSign className="VirtualInternshipCard-group-icon stipend-icon" />
                <span>Stipend</span>
              </div>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>Paid</span>
              </label>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>Unpaid</span>
              </label>
              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" /> <span>Performance Based</span>
              </label>
            </div>

          </div>

        </aside>

        {/* Main Content */}
        <main className="VirtualInternshipCard-content">
          
          {/* Content Header & Toggle Buttons */}
          <div className="VirtualInternshipCard-content-header">
            <div>
              <h2 className="VirtualInternshipCard-main-heading">
                Showing {virtualData.length} Internships
              </h2>
              <p className="VirtualInternshipCard-sub-heading">
                Explore the latest opportunities that match your profile.
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="VirtualInternshipCard-view-toggle">
              <button 
                className={`VirtualInternshipCard-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                type="button"
              >
                <FiGrid /> <span>Grid</span>
              </button>
              <button 
                className={`VirtualInternshipCard-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                type="button"
              >
                <FiList /> <span>List</span>
              </button>
            </div>
          </div>

          {/* Internship Card List */}
          <div className={`VirtualInternshipCard-list-container ${viewMode}`}>
            {virtualData.map((item) => (
              <div key={item.id} className={`VirtualInternshipCard-item ${viewMode}`}>
                
                {/* Title & Badge */}
                <div className="VirtualInternshipCard-item-header">
                  <div className="VirtualInternshipCard-briefcase-badge">
                    <FiBriefcase />
                  </div>
                  <div className="VirtualInternshipCard-title-block">
                    <h3 className="VirtualInternshipCard-item-title">{item.title}</h3>
                    <div className="VirtualInternshipCard-tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className={`VirtualInternshipCard-tag-pill ${tag.type}`}>
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Main Info */}
                <div className="VirtualInternshipCard-item-body">
                  <p className="VirtualInternshipCard-item-description">{item.description}</p>

                  {/* Project Focus */}
                  <div className="VirtualInternshipCard-focus-box">
                    <div className="VirtualInternshipCard-section-label focus">
                      <FiCheckCircle className="VirtualInternshipCard-section-icon" />
                      <span>PROJECT FOCUS</span>
                    </div>
                    <div className="VirtualInternshipCard-focus-title">{item.projectFocus}</div>
                  </div>

                  {/* Key Modules */}
                  <div className="VirtualInternshipCard-section-block">
                    <div className="VirtualInternshipCard-section-label modules">
                      <FiLayers className="VirtualInternshipCard-section-icon" />
                      <span>KEY MODULES</span>
                    </div>
                    <div className="VirtualInternshipCard-pills-wrap">
                      {item.keyModules.map((module, idx) => (
                        <span key={idx} className="VirtualInternshipCard-module-pill">{module}</span>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Tech */}
                  <div className="VirtualInternshipCard-section-block">
                    <div className="VirtualInternshipCard-section-label tools">
                      <FiCode className="VirtualInternshipCard-section-icon" />
                      <span>TOOLS & TECH</span>
                    </div>
                    <div className="VirtualInternshipCard-pills-wrap">
                      {item.toolsTech.map((tool, idx) => (
                        <span key={idx} className="VirtualInternshipCard-tech-pill">{tool}</span>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="VirtualInternshipCard-duration-block">
                    <FiClock className="VirtualInternshipCard-duration-icon" />
                    <span className="VirtualInternshipCard-duration-label">DURATION:</span>
                    <span className="VirtualInternshipCard-duration-value">{item.duration}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="VirtualInternshipCard-item-footer">
                  <button className="VirtualInternshipCard-btn-view" type="button">
                    View Detail
                  </button>
                  <button className="VirtualInternshipCard-btn-interest" type="button">
                    <span>Interest Send</span>
                    <FiSend className="VirtualInternshipCard-send-icon" />
                  </button>
                  <button className="VirtualInternshipCard-btn-share" type="button" aria-label="Share">
                    <FiShare2 />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default VirtualInternshipCard;