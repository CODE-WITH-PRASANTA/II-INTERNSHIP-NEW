import React from 'react';
import './RunningInternshipBreadcrumb.css';

// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const RunningInternshipBreadcrumb = () => {
  return (
    <section className="RunningInternshipBreadcrumb-wrapper">
      <div className="RunningInternshipBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="RunningInternshipBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="RunningInternshipBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="RunningInternshipBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="RunningInternshipBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="RunningInternshipBreadcrumb-dot RunningInternshipBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="RunningInternshipBreadcrumb-dot RunningInternshipBreadcrumb-dot--two" />

              <div className="RunningInternshipBreadcrumb-tag">
                <span className="RunningInternshipBreadcrumb-tag-icon">⚡</span>
                <span className="RunningInternshipBreadcrumb-tag-text">ROLLING ADMISSIONS</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="RunningInternshipBreadcrumb-title">
              <span className="RunningInternshipBreadcrumb-title-line">Running Internships</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="RunningInternshipBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="RunningInternshipBreadcrumb-nav-item">
                <span className="RunningInternshipBreadcrumb-home-icon">🏠</span>
                <a href="/" className="RunningInternshipBreadcrumb-link">Home</a>
              </span>
              <span className="RunningInternshipBreadcrumb-separator">/</span>
              <span className="RunningInternshipBreadcrumb-nav-item">
                <a href="/internships" className="RunningInternshipBreadcrumb-link">Internships</a>
              </span>
              <span className="RunningInternshipBreadcrumb-separator">/</span>
              <span className="RunningInternshipBreadcrumb-active">Running Internships</span>
            </nav>

            {/* Description Text */}
            <p className="RunningInternshipBreadcrumb-description">
              Join our ongoing rolling internship programs. Flexible start dates designed for students and professionals looking to upskill anytime.
            </p>
          </div>

          {/* Right Column: Custom Rounded Frame Container */}
          <div className="RunningInternshipBreadcrumb-media-col">
            <div className="RunningInternshipBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="RunningInternshipBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Running Internships" 
                className="RunningInternshipBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="RunningInternshipBreadcrumb-wave-curve">
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

export default RunningInternshipBreadcrumb;