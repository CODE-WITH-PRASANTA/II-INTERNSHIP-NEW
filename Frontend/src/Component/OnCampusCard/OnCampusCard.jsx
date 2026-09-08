import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  FiList,
  FiX
} from 'react-icons/fi';

const internshipData = [
  {
    id: 1,
    title: "Machine",
    tags: ["ON CAMPUS INTERNSHIP", "ON_CAMPUS"],
    description: "Website Development Internship Program Lead: Learnify, Lucknow Organized by: International Institute of Internship...",
    projectFocus: "Real time pipeline",
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
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [searchTerm, setSearchTerm] = useState('');

  // Modal State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    education: '',
    mobile: '',
    email: ''
  });

  const handleOpenModal = (programTitle) => {
    setSelectedProgram(programTitle);
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
    console.log("Submitting Interest Data:", { program: selectedProgram, ...formData });
    setFormData({ name: '', address: '', education: '', mobile: '', email: '' });
    setIsModalOpen(false);
  };

  // Web Share API Handler with Clipboard Fallback
  const handleShare = async (item) => {
    const shareData = {
      title: item.title,
      text: `Check out this internship program: ${item.title} (${item.duration})`,
      url: window.location.href, // Replace with dynamic URL if applicable (e.g., `${window.location.origin}/internships/${item.id}`)
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error("Error sharing:", err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    }
  };

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
                <button
  className="OnCampusCard-btn-view"
  type="button"
  onClick={() => navigate('/oncampusviewdetails')}
>
  View Detail
</button>
                  <button 
                    className="OnCampusCard-btn-interest" 
                    type="button"
                    onClick={() => handleOpenModal(item.title)}
                  >
                    <span>Interest Send</span>
                    <FiSend className="OnCampusCard-send-icon" />
                  </button>
                  <button 
                    className="OnCampusCard-btn-share" 
                    type="button" 
                    aria-label="Share"
                    onClick={() => handleShare(item)}
                  >
                    <FiShare2 />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </main>
      </div>

      {/* Smooth Animated Modal Overlay */}
      <div 
        className={`OnCampusCard-modal-overlay ${isModalOpen ? 'show' : ''}`}
        onClick={handleCloseModal}
      >
        <div 
          className="OnCampusCard-modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="OnCampusCard-modal-header">
            <div>
              <h2 className="OnCampusCard-modal-title">Interest Send</h2>
              <p className="OnCampusCard-modal-subtitle">
                Express your interest in the "{selectedProgram}" program.
              </p>
            </div>
            <button 
              className="OnCampusCard-modal-close-btn" 
              onClick={handleCloseModal}
              type="button"
            >
              <FiX />
            </button>
          </div>

          {/* Modal Form */}
          <form className="OnCampusCard-modal-form" onSubmit={handleSubmitInterest}>
            
            <div className="OnCampusCard-form-group">
              <label className="OnCampusCard-form-label">NAME *</label>
              <input 
                type="text" 
                name="name"
                className="OnCampusCard-form-input" 
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="OnCampusCard-form-group">
              <label className="OnCampusCard-form-label">ADDRESS *</label>
              <input 
                type="text" 
                name="address"
                className="OnCampusCard-form-input" 
                placeholder="Enter your full address" 
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="OnCampusCard-form-group">
              <label className="OnCampusCard-form-label">EDUCATION *</label>
              <div className="OnCampusCard-select-wrapper">
                <select 
                  name="education"
                  className="OnCampusCard-form-select"
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

            <div className="OnCampusCard-form-row">
              <div className="OnCampusCard-form-group">
                <label className="OnCampusCard-form-label">MOBILE NO. *</label>
                <input 
                  type="tel" 
                  name="mobile"
                  className="OnCampusCard-form-input" 
                  placeholder="+91 xxxxxxxxxx" 
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="OnCampusCard-form-group">
                <label className="OnCampusCard-form-label">EMAIL ID *</label>
                <input 
                  type="email" 
                  name="email"
                  className="OnCampusCard-form-input" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="OnCampusCard-modal-submit-btn">
              Interest Send
            </button>

          </form>
        </div>
      </div>

    </div>
  );
};

export default OnCampusCard;