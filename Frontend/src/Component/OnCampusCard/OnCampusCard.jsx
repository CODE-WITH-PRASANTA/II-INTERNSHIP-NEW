import React, { useState } from 'react';
import './OnCampusCard.css';

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

const internshipData = [
  {
    id: 1,
    title: "Machine",
    tags: ["ON CAMPUS INTERNSHIP", "ON_CAMPUS"],
    description: "Website Development Internship Progra Lead: Learnify, Lucknow Organized by: International Institute of Internship...",
    projectFocus: "Rela time pipline",
    keyModules: ["fsdsgfdh"],
    toolsTech: ["sadf", "wads", "adsa"],
    duration: "3 Months"
  },
  {
    id: 2,
    title: "Advanced Robotics & Control Systems",
    tags: ["ON CAMPUS INTERNSHIP", "ON_CAMPUS"],
    description: "Learn to design, simulate and build robotic actuators and kinematic systems in our advanced lab.",
    projectFocus: "Autonomous Mobile Robot (AMR)",
    keyModules: ["Kinematics & Dynamics", "Actuators & Sensors", "ROS (Robot Operating System)", "Feedback Control"],
    toolsTech: ["ROS 2", "Gazebo", "Python", "MATLAB"],
    duration: "8 Weeks"
  },
  {
    id: 3,
    title: "IoT & Embedded Systems Lab Practice",
    tags: ["ON CAMPUS INTERNSHIP", "ON_CAMPUS"],
    description: "Hands-on lab training on microcontrollers, sensor integration, and RTOS fundamentals.",
    projectFocus: "Smart Home Automation Gateway",
    keyModules: ["Microcontrollers (8051/ESP32)", "RTOS Fundamentals", "Sensor Interfacing", "PCB Design"],
    toolsTech: ["KiCad", "Arduino IDE", "FreeRTOS", "Embedded C"],
    duration: "6 Weeks"
  }
];

const OnCampusCard = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="OnCampusCard-wrapper">
      <div className="OnCampusCard-container">
        
        {/* Left Sidebar Filters Section */}
        <aside className="OnCampusCard-sidebar">
          
          {/* Quick Search */}
          <div className="OnCampusCard-filter-box">
            <h3 className="OnCampusCard-filter-title">Quick Search</h3>
            <div className="OnCampusCard-search-input-wrapper">
              <FiSearch className="OnCampusCard-search-icon" />
              <input 
                type="text" 
                className="OnCampusCard-search-input"
                placeholder="e.g. Software Engineer" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filters Box */}
          <div className="OnCampusCard-filter-box">
            <div className="OnCampusCard-filter-header">
              <div className="OnCampusCard-filter-header-left">
                <FiFilter className="OnCampusCard-filter-main-icon" />
                <span className="OnCampusCard-filter-header-title">Filters</span>
              </div>
              <button className="OnCampusCard-clear-btn" type="button">CLEAR ALL</button>
            </div>

            {/* Domain Group */}
            <div className="OnCampusCard-filter-group">
              <div className="OnCampusCard-group-title">
                <FiBriefcase className="OnCampusCard-group-icon" />
                <span>Domain</span>
              </div>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>Engineering</span>
              </label>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>Design</span>
              </label>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>Marketing</span>
              </label>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>Data Science</span>
              </label>
            </div>

            <hr className="OnCampusCard-divider" />

            {/* Duration Group */}
            <div className="OnCampusCard-filter-group">
              <div className="OnCampusCard-group-title">
                <FiClock className="OnCampusCard-group-icon" />
                <span>Duration</span>
              </div>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>1-2 Months</span>
              </label>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>3-4 Months</span>
              </label>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>6 Months</span>
              </label>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>Flexible</span>
              </label>
            </div>

            <hr className="OnCampusCard-divider" />

            {/* Stipend Group */}
            <div className="OnCampusCard-filter-group">
              <div className="OnCampusCard-group-title">
                <FiDollarSign className="OnCampusCard-group-icon stipend-icon" />
                <span>Stipend</span>
              </div>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>Paid</span>
              </label>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>Unpaid</span>
              </label>
              <label className="OnCampusCard-checkbox-label">
                <input type="checkbox" /> <span>Performance Based</span>
              </label>
            </div>

          </div>

        </aside>

        {/* Main Content / Cards Section */}
        <main className="OnCampusCard-content">
          
          {/* Header Bar */}
          <div className="OnCampusCard-content-header">
            <div>
              <h2 className="OnCampusCard-main-heading">
                Showing {internshipData.length} Internships
              </h2>
              <p className="OnCampusCard-sub-heading">
                Explore the latest opportunities that match your profile.
              </p>
            </div>

            {/* Grid/List Toggle Control */}
            <div className="OnCampusCard-view-toggle">
              <button 
                className={`OnCampusCard-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                type="button"
              >
                <FiGrid /> <span>Grid</span>
              </button>
              <button 
                className={`OnCampusCard-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                type="button"
              >
                <FiList /> <span>List</span>
              </button>
            </div>
          </div>

          {/* Cards Layout Container */}
          <div className={`OnCampusCard-list-container ${viewMode}`}>
            {internshipData.map((item) => (
              <div key={item.id} className={`OnCampusCard-item ${viewMode}`}>
                
                {/* Top Title Bar */}
                <div className="OnCampusCard-item-header">
                  <div className="OnCampusCard-briefcase-badge">
                    <FiBriefcase />
                  </div>
                  <div className="OnCampusCard-title-block">
                    <h3 className="OnCampusCard-item-title">{item.title}</h3>
                    <div className="OnCampusCard-tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="OnCampusCard-tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Body Info */}
                <div className="OnCampusCard-item-body">
                  <p className="OnCampusCard-item-description">{item.description}</p>

                  {/* Project Focus Box */}
                  <div className="OnCampusCard-focus-box">
                    <div className="OnCampusCard-section-label focus">
                      <FiCheckCircle className="OnCampusCard-section-icon" />
                      <span>PROJECT FOCUS</span>
                    </div>
                    <div className="OnCampusCard-focus-title">{item.projectFocus}</div>
                  </div>

                  {/* Key Modules */}
                  <div className="OnCampusCard-section-block">
                    <div className="OnCampusCard-section-label">
                      <FiLayers className="OnCampusCard-section-icon" />
                      <span>KEY MODULES</span>
                    </div>
                    <div className="OnCampusCard-pills-wrap">
                      {item.keyModules.map((module, idx) => (
                        <span key={idx} className="OnCampusCard-module-pill">{module}</span>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Tech */}
                  <div className="OnCampusCard-section-block">
                    <div className="OnCampusCard-section-label tools">
                      <FiCode className="OnCampusCard-section-icon" />
                      <span>TOOLS & TECH</span>
                    </div>
                    <div className="OnCampusCard-pills-wrap">
                      {item.toolsTech.map((tool, idx) => (
                        <span key={idx} className="OnCampusCard-tech-pill">{tool}</span>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="OnCampusCard-duration-block">
                    <FiClock className="OnCampusCard-duration-icon" />
                    <span className="OnCampusCard-duration-label">DURATION:</span>
                    <span className="OnCampusCard-duration-value">{item.duration}</span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="OnCampusCard-item-footer">
                  <button className="OnCampusCard-btn-view" type="button">
                    View Detail
                  </button>
                  <button className="OnCampusCard-btn-interest" type="button">
                    <span>Interest Send</span>
                    <FiSend className="OnCampusCard-send-icon" />
                  </button>
                  <button className="OnCampusCard-btn-share" type="button" aria-label="Share">
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

export default OnCampusCard;