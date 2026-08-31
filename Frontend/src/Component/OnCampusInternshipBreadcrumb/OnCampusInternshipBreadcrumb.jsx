import React from 'react';
import './OnCampusInternshipBreadcrumb.css';

// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const OnCampusInternshipBreadcrumb = () => {
  return (
    <section className="OnCampusInternshipBreadcrumb-wrapper">
      <div className="OnCampusInternshipBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="OnCampusInternshipBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="OnCampusInternshipBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="OnCampusInternshipBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="OnCampusInternshipBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="OnCampusInternshipBreadcrumb-dot OnCampusInternshipBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="OnCampusInternshipBreadcrumb-dot OnCampusInternshipBreadcrumb-dot--two" />

              <div className="OnCampusInternshipBreadcrumb-tag">
                <span className="OnCampusInternshipBreadcrumb-tag-icon">🎓</span>
                <span className="OnCampusInternshipBreadcrumb-tag-text">UNIVERSITY PLACEMENTS</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="OnCampusInternshipBreadcrumb-title">
              <span className="OnCampusInternshipBreadcrumb-title-line">On-Campus</span>
              <span className="OnCampusInternshipBreadcrumb-title-line">Internships</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="OnCampusInternshipBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="OnCampusInternshipBreadcrumb-nav-item">
                <span className="OnCampusInternshipBreadcrumb-home-icon">🏠</span>
                <a href="/" className="OnCampusInternshipBreadcrumb-link">Home</a>
              </span>
              <span className="OnCampusInternshipBreadcrumb-separator">/</span>
              <span className="OnCampusInternshipBreadcrumb-nav-item">
                <a href="/internships" className="OnCampusInternshipBreadcrumb-link">Internships</a>
              </span>
              <span className="OnCampusInternshipBreadcrumb-separator">/</span>
              <span className="OnCampusInternshipBreadcrumb-active">On-Campus Internships</span>
            </nav>

            {/* Description Text */}
            <p className="OnCampusInternshipBreadcrumb-description">
              Step straight from your college campus into the corporate world. Explore opportunities brought directly to your university.
            </p>
          </div>

          {/* Right Column: Custom Rounded Frame Container */}
          <div className="OnCampusInternshipBreadcrumb-media-col">
            <div className="OnCampusInternshipBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="OnCampusInternshipBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="On-Campus Internships" 
                className="OnCampusInternshipBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="OnCampusInternshipBreadcrumb-wave-curve">
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

export default OnCampusInternshipBreadcrumb;