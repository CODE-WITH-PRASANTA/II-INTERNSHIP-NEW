import React from 'react';
import './TechnicalSupportBreadcrumb.css';

// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const TechnicalSupportBreadcrumb = () => {
  return (
    <section className="TechnicalSupportBreadcrumb-wrapper">
      <div className="TechnicalSupportBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="TechnicalSupportBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="TechnicalSupportBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="TechnicalSupportBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="TechnicalSupportBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="TechnicalSupportBreadcrumb-dot TechnicalSupportBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="TechnicalSupportBreadcrumb-dot TechnicalSupportBreadcrumb-dot--two" />

              <div className="TechnicalSupportBreadcrumb-tag">
                <span className="TechnicalSupportBreadcrumb-tag-icon">✨</span>
                <span className="TechnicalSupportBreadcrumb-tag-text">SKILL DEVELOPMENT</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="TechnicalSupportBreadcrumb-title">
              <span className="TechnicalSupportBreadcrumb-title-line">Training & Technical</span>
              <span className="TechnicalSupportBreadcrumb-title-line">Support</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="TechnicalSupportBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="TechnicalSupportBreadcrumb-nav-item">
                <span className="TechnicalSupportBreadcrumb-home-icon">🏠</span>
                <a href="/" className="TechnicalSupportBreadcrumb-link">Home</a>
              </span>
              <span className="TechnicalSupportBreadcrumb-separator">/</span>
              <span className="TechnicalSupportBreadcrumb-nav-item">
                <a href="/partners" className="TechnicalSupportBreadcrumb-link">Partners</a>
              </span>
              <span className="TechnicalSupportBreadcrumb-separator">/</span>
              <span className="TechnicalSupportBreadcrumb-active">Technical Support</span>
            </nav>

            {/* Description Text */}
            <p className="TechnicalSupportBreadcrumb-description">
              Connect with our partnered agencies providing robust training and technical support to elevate your career and skills.
            </p>
          </div>

          {/* Right Column: Custom Rounded Frame Container */}
          <div className="TechnicalSupportBreadcrumb-media-col">
            <div className="TechnicalSupportBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="TechnicalSupportBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Training and Technical Support" 
                className="TechnicalSupportBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="TechnicalSupportBreadcrumb-wave-curve">
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

export default TechnicalSupportBreadcrumb;