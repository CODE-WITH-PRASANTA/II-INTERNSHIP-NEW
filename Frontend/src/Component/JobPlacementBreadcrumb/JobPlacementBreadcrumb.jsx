import React from 'react';
import './JobPlacementBreadcrumb.css';

// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const JobPlacementBreadcrumb = () => {
  return (
    <section className="JobPlacementBreadcrumb-wrapper">
      <div className="JobPlacementBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="JobPlacementBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="JobPlacementBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="JobPlacementBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="JobPlacementBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="JobPlacementBreadcrumb-dot JobPlacementBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="JobPlacementBreadcrumb-dot JobPlacementBreadcrumb-dot--two" />

              <div className="JobPlacementBreadcrumb-tag">
                <span className="JobPlacementBreadcrumb-tag-icon">✨</span>
                <span className="JobPlacementBreadcrumb-tag-text">CAREER OPPORTUNITIES</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="JobPlacementBreadcrumb-title">
              <span className="JobPlacementBreadcrumb-title-line">Job</span>
              <span className="JobPlacementBreadcrumb-title-line">Placement</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="JobPlacementBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="JobPlacementBreadcrumb-nav-item">
                <span className="JobPlacementBreadcrumb-home-icon">🏠</span>
                <a href="/" className="JobPlacementBreadcrumb-link">Home</a>
              </span>
              <span className="JobPlacementBreadcrumb-separator">/</span>
              <span className="JobPlacementBreadcrumb-nav-item">
                <a href="/placements" className="JobPlacementBreadcrumb-link">Placements</a>
              </span>
              <span className="JobPlacementBreadcrumb-separator">/</span>
              <span className="JobPlacementBreadcrumb-active">Job Placement</span>
            </nav>

            {/* Description Text */}
            <p className="JobPlacementBreadcrumb-description">
              Discover exciting career opportunities with our partnered placement companies. Find your perfect role and send your interest today!
            </p>
          </div>

          {/* Right Column: Custom Rounded Frame Container */}
          <div className="JobPlacementBreadcrumb-media-col">
            <div className="JobPlacementBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="JobPlacementBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Job Placement" 
                className="JobPlacementBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="JobPlacementBreadcrumb-wave-curve">
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

export default JobPlacementBreadcrumb;