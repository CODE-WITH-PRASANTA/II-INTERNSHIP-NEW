import React from 'react';
import './VirtualInternshipBreadcrumb.css';

// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const VirtualInternshipBreadcrumb = () => {
  return (
    <section className="VirtualInternshipBreadcrumb-wrapper">
      <div className="VirtualInternshipBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="VirtualInternshipBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="VirtualInternshipBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="VirtualInternshipBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="VirtualInternshipBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="VirtualInternshipBreadcrumb-dot VirtualInternshipBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="VirtualInternshipBreadcrumb-dot VirtualInternshipBreadcrumb-dot--two" />

              <div className="VirtualInternshipBreadcrumb-tag">
                <span className="VirtualInternshipBreadcrumb-tag-icon">🌐</span>
                <span className="VirtualInternshipBreadcrumb-tag-text">WORK FROM ANYWHERE</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="VirtualInternshipBreadcrumb-title">
              <span className="VirtualInternshipBreadcrumb-title-line">Virtual</span>
              <span className="VirtualInternshipBreadcrumb-title-line">Internships</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="VirtualInternshipBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="VirtualInternshipBreadcrumb-nav-item">
                <span className="VirtualInternshipBreadcrumb-home-icon">🏠</span>
                <a href="/" className="VirtualInternshipBreadcrumb-link">Home</a>
              </span>
              <span className="VirtualInternshipBreadcrumb-separator">/</span>
              <span className="VirtualInternshipBreadcrumb-nav-item">
                <a href="/internships" className="VirtualInternshipBreadcrumb-link">Internships</a>
              </span>
              <span className="VirtualInternshipBreadcrumb-separator">/</span>
              <span className="VirtualInternshipBreadcrumb-active">Virtual Internships</span>
            </nav>

            {/* Description Text */}
            <p className="VirtualInternshipBreadcrumb-description">
              Gain global experience from the comfort of your home. Connect with international teams and work on remote projects.
            </p>
          </div>

          {/* Right Column: Custom Rounded Frame Container */}
          <div className="VirtualInternshipBreadcrumb-media-col">
            <div className="VirtualInternshipBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="VirtualInternshipBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Virtual Internships" 
                className="VirtualInternshipBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="VirtualInternshipBreadcrumb-wave-curve">
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

export default VirtualInternshipBreadcrumb;