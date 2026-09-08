import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  FiList,
  FiX,
  FiCheck
} from 'react-icons/fi';

const virtualData = [
  {
    id: 1,
    title: "Frontend Engineering with React & Next.js",
    tags: [
      { text: "VIRTUAL INTERNSHIP", type: "blue" },
      { text: "VIRTUAL", type: "green" }
    ],
    description:
      "Master modern frontend engineering concepts including Server Components, state management, and SSR.",
    projectFocus: "SaaS Dashboard with Rich Charts",
    keyModules: [
      "React Deep Dive",
      "Next.js App Router",
      "State Management",
      "Tailwind CSS & Styling"
    ],
    toolsTech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "ESLint"
    ],
    duration: "6 Weeks"
  }
];

const VirtualInternshipCard = () => {
  // Navigation
  const navigate = useNavigate();

  // View and Search State
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Toast / Copy Feedback State
  const [toastMessage, setToastMessage] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    education: '',
    mobile: '',
    email: ''
  });

  // Open Interest Modal
  const handleOpenModal = (item) => {
    setSelectedInternship(item);
    setIsModalOpen(true);
  };

  // Close Interest Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Form Input Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      'Submitted Interest for:',
      selectedInternship?.title,
      formData
    );

    handleCloseModal();

    // Optional success message
    setToastMessage('Interest sent successfully!');

    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  // Share Handler with Native Share & Copy Fallback
  const handleShare = async (item) => {
    const shareData = {
      title: item.title,
      text: `Check out this Virtual Internship program: ${item.title}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);

        setCopiedId(item.id);
        setToastMessage('Link copied to clipboard!');

        setTimeout(() => {
          setCopiedId(null);
          setToastMessage('');
        }, 2500);
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    }
  };

  // Filter internships based on search
  const filteredData = virtualData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="VirtualInternshipCard-wrapper">
      <div className="VirtualInternshipCard-container">

        {/* Left Sidebar Filters */}
        <aside className="VirtualInternshipCard-sidebar">

          {/* Quick Search Box */}
          <div className="VirtualInternshipCard-filter-box">
            <h3 className="VirtualInternshipCard-filter-title">
              Quick Search
            </h3>

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

                <span className="VirtualInternshipCard-filter-header-title">
                  Filters
                </span>
              </div>

              <button
                className="VirtualInternshipCard-clear-btn"
                type="button"
                onClick={() => setSearchTerm('')}
              >
                CLEAR ALL
              </button>

            </div>

            {/* Domain Group */}
            <div className="VirtualInternshipCard-filter-group">

              <div className="VirtualInternshipCard-group-title">
                <FiBriefcase className="VirtualInternshipCard-group-icon" />
                <span>Domain</span>
              </div>

              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" />
                <span>Engineering</span>
              </label>

              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" />
                <span>Design</span>
              </label>

              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" />
                <span>Marketing</span>
              </label>

              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" />
                <span>Data Science</span>
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
                <input type="checkbox" />
                <span>1-2 Months</span>
              </label>

              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" />
                <span>3-4 Months</span>
              </label>

              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" />
                <span>6 Months</span>
              </label>

              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" />
                <span>Flexible</span>
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
                <input type="checkbox" />
                <span>Paid</span>
              </label>

              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" />
                <span>Unpaid</span>
              </label>

              <label className="VirtualInternshipCard-checkbox-label">
                <input type="checkbox" />
                <span>Performance Based</span>
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
                Showing {filteredData.length} Internships
              </h2>

              <p className="VirtualInternshipCard-sub-heading">
                Explore the latest opportunities that match your profile.
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="VirtualInternshipCard-view-toggle">

              <button
                className={`VirtualInternshipCard-toggle-btn ${
                  viewMode === 'grid' ? 'active' : ''
                }`}
                onClick={() => setViewMode('grid')}
                type="button"
              >
                <FiGrid />
                <span>Grid</span>
              </button>

              <button
                className={`VirtualInternshipCard-toggle-btn ${
                  viewMode === 'list' ? 'active' : ''
                }`}
                onClick={() => setViewMode('list')}
                type="button"
              >
                <FiList />
                <span>List</span>
              </button>

            </div>
          </div>

          {/* Internship Card List */}
          <div
            className={`VirtualInternshipCard-list-container ${viewMode}`}
          >
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div
                  key={item.id}
                  className={`VirtualInternshipCard-item ${viewMode}`}
                >

                  {/* Title & Badge */}
                  <div className="VirtualInternshipCard-item-header">

                    <div className="VirtualInternshipCard-briefcase-badge">
                      <FiBriefcase />
                    </div>

                    <div className="VirtualInternshipCard-title-block">

                      <h3 className="VirtualInternshipCard-item-title">
                        {item.title}
                      </h3>

                      <div className="VirtualInternshipCard-tags">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`VirtualInternshipCard-tag-pill ${tag.type}`}
                          >
                            {tag.text}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Card Main Info */}
                  <div className="VirtualInternshipCard-item-body">

                    <p className="VirtualInternshipCard-item-description">
                      {item.description}
                    </p>

                    {/* Project Focus */}
                    <div className="VirtualInternshipCard-focus-box">

                      <div className="VirtualInternshipCard-section-label focus">
                        <FiCheckCircle className="VirtualInternshipCard-section-icon" />
                        <span>PROJECT FOCUS</span>
                      </div>

                      <div className="VirtualInternshipCard-focus-title">
                        {item.projectFocus}
                      </div>

                    </div>

                    {/* Key Modules */}
                    <div className="VirtualInternshipCard-section-block">

                      <div className="VirtualInternshipCard-section-label modules">
                        <FiLayers className="VirtualInternshipCard-section-icon" />
                        <span>KEY MODULES</span>
                      </div>

                      <div className="VirtualInternshipCard-pills-wrap">
                        {item.keyModules.map((module, idx) => (
                          <span
                            key={idx}
                            className="VirtualInternshipCard-module-pill"
                          >
                            {module}
                          </span>
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
                          <span
                            key={idx}
                            className="VirtualInternshipCard-tech-pill"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Duration */}
                    <div className="VirtualInternshipCard-duration-block">

                      <FiClock className="VirtualInternshipCard-duration-icon" />

                      <span className="VirtualInternshipCard-duration-label">
                        DURATION:
                      </span>

                      <span className="VirtualInternshipCard-duration-value">
                        {item.duration}
                      </span>

                    </div>

                  </div>

                  {/* Action Buttons */}
                  <div className="VirtualInternshipCard-item-footer">

                    {/* VIEW DETAIL */}
                    <button
                      className="VirtualInternshipCard-btn-view"
                      type="button"
                      onClick={() =>
                        navigate('/virtualviewdetails')
                      }
                    >
                      View Detail
                    </button>

                    {/* INTEREST SEND */}
                    <button
                      className="VirtualInternshipCard-btn-interest"
                      type="button"
                      onClick={() => handleOpenModal(item)}
                    >
                      <span>Interest Send</span>
                      <FiSend className="VirtualInternshipCard-send-icon" />
                    </button>

                    {/* SHARE */}
                    <button
                      className={`VirtualInternshipCard-btn-share ${
                        copiedId === item.id ? 'copied' : ''
                      }`}
                      type="button"
                      aria-label="Share"
                      onClick={() => handleShare(item)}
                    >
                      {copiedId === item.id ? (
                        <FiCheck />
                      ) : (
                        <FiShare2 />
                      )}
                    </button>

                  </div>

                </div>
              ))
            ) : (
              <div className="VirtualInternshipCard-no-results">
                No internships found.
              </div>
            )}
          </div>

        </main>
      </div>

      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="VirtualInternshipCard-toast">
          <FiCheck className="VirtualInternshipCard-toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Interest Modal */}
      <div
        className={`VirtualInternshipCard-modal-overlay ${
          isModalOpen ? 'show' : ''
        }`}
        onClick={handleCloseModal}
      >
        <div
          className="VirtualInternshipCard-modal-container"
          onClick={(e) => e.stopPropagation()}
        >

          {/* Header */}
          <div className="VirtualInternshipCard-modal-header">

            <div>
              <h2 className="VirtualInternshipCard-modal-title">
                Interest Send
              </h2>

              <p className="VirtualInternshipCard-modal-subtitle">
                Express your interest in the "
                {selectedInternship?.title || 'selected'}
                " program.
              </p>
            </div>

            <button
              type="button"
              className="VirtualInternshipCard-modal-close-btn"
              onClick={handleCloseModal}
            >
              <FiX />
            </button>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="VirtualInternshipCard-modal-form"
          >

            {/* Name */}
            <div className="VirtualInternshipCard-form-group">

              <label className="VirtualInternshipCard-input-label">
                NAME *
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="VirtualInternshipCard-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

            </div>

            {/* Address */}
            <div className="VirtualInternshipCard-form-group">

              <label className="VirtualInternshipCard-input-label">
                ADDRESS *
              </label>

              <input
                type="text"
                name="address"
                placeholder="Enter your full address"
                className="VirtualInternshipCard-input"
                value={formData.address}
                onChange={handleInputChange}
                required
              />

            </div>

            {/* Education */}
            <div className="VirtualInternshipCard-form-group">

              <label className="VirtualInternshipCard-input-label">
                EDUCATION *
              </label>

              <div className="VirtualInternshipCard-select-wrapper">

                <select
                  name="education"
                  className="VirtualInternshipCard-select"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select education level
                  </option>

                  <option value="High School">
                    High School
                  </option>

                  <option value="Undergraduate">
                    Undergraduate (B.Tech / B.Sc / B.A)
                  </option>

                  <option value="Postgraduate">
                    Postgraduate (M.Tech / M.Sc / MCA)
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

              </div>

            </div>

            {/* Mobile & Email */}
            <div className="VirtualInternshipCard-form-row">

              <div className="VirtualInternshipCard-form-group flex-half">

                <label className="VirtualInternshipCard-input-label">
                  MOBILE NO. *
                </label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="+91 xxxxxxxxxx"
                  className="VirtualInternshipCard-input"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />

              </div>

              <div className="VirtualInternshipCard-form-group flex-half">

                <label className="VirtualInternshipCard-input-label">
                  EMAIL ID *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="VirtualInternshipCard-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="VirtualInternshipCard-submit-action"
            >
              Interest Send
            </button>

          </form>

        </div>
      </div>

    </div>
  );
};

export default VirtualInternshipCard;