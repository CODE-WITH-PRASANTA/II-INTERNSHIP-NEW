import React from 'react';
import './InternshipBreadcrumb.css';

// Update this path to match where your internship hero image is stored
import internshipImage from '../../assets/AboutUs-breadcrumb.webp';

const InternshipBreadcrumb = () => {
  return (
    <section className="InternshipBreadcrumb-wrapper">
      <div className="InternshipBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="InternshipBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="InternshipBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="InternshipBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="InternshipBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="InternshipBreadcrumb-dot InternshipBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="InternshipBreadcrumb-dot InternshipBreadcrumb-dot--two" />

              <div className="InternshipBreadcrumb-tag">
                <span className="InternshipBreadcrumb-tag-icon">🎓</span>
                <span className="InternshipBreadcrumb-tag-text">Experiential Learning</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="InternshipBreadcrumb-title">
              <span className="InternshipBreadcrumb-title-line">What is an</span>
              <span className="InternshipBreadcrumb-title-line InternshipBreadcrumb-title-highlight">Internship?</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="InternshipBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="InternshipBreadcrumb-nav-item">
                <span className="InternshipBreadcrumb-home-icon">🏠</span>
                <a href="/" className="InternshipBreadcrumb-link">Home</a>
              </span>
              <span className="InternshipBreadcrumb-separator">/</span>
              <span className="InternshipBreadcrumb-nav-item">
                <a href="/about" className="InternshipBreadcrumb-link">About Us</a>
              </span>
              <span className="InternshipBreadcrumb-separator">/</span>
              <span className="InternshipBreadcrumb-active">Internship</span>
            </nav>

            {/* Description Text */}
            <p className="InternshipBreadcrumb-description">
              Learn about the importance of internships in today's education system and how it builds your career.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="InternshipBreadcrumb-media-col">
            <div className="InternshipBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="InternshipBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={internshipImage} 
                alt="Students collaborating with laptop" 
                className="InternshipBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="InternshipBreadcrumb-wave-curve">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,40 C360,110 900,-20 1440,50 L1440,120 L0,120 Z" 
              fill="#ffffff" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default InternshipBreadcrumb;