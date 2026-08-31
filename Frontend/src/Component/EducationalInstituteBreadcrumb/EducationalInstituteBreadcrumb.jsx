import React from 'react';
import './EducationalInstituteBreadcrumb.css';

// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const EducationalInstituteBreadcrumb = () => {
  return (
    <section className="EducationalInstituteBreadcrumb-wrapper">
      <div className="EducationalInstituteBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="EducationalInstituteBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="EducationalInstituteBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="EducationalInstituteBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="EducationalInstituteBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="EducationalInstituteBreadcrumb-dot EducationalInstituteBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="EducationalInstituteBreadcrumb-dot EducationalInstituteBreadcrumb-dot--two" />

              <div className="EducationalInstituteBreadcrumb-tag">
                <span className="EducationalInstituteBreadcrumb-tag-icon">✨</span>
                <span className="EducationalInstituteBreadcrumb-tag-text">ACADEMIC PARTNERS</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="EducationalInstituteBreadcrumb-title">
              <span className="EducationalInstituteBreadcrumb-title-line">Educational</span>
              <span className="EducationalInstituteBreadcrumb-title-line">Institutes</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="EducationalInstituteBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="EducationalInstituteBreadcrumb-nav-item">
                <span className="EducationalInstituteBreadcrumb-home-icon">🏠</span>
                <a href="/" className="EducationalInstituteBreadcrumb-link">Home</a>
              </span>
              <span className="EducationalInstituteBreadcrumb-separator">/</span>
              <span className="EducationalInstituteBreadcrumb-nav-item">
                <a href="/partners" className="EducationalInstituteBreadcrumb-link">Partners</a>
              </span>
              <span className="EducationalInstituteBreadcrumb-separator">/</span>
              <span className="EducationalInstituteBreadcrumb-active">Educational Institutes</span>
            </nav>

            {/* Description Text */}
            <p className="EducationalInstituteBreadcrumb-description">
              Explore our partnered educational institutes that strive for academic excellence and innovation. Discover their accreditations, campuses, and more.
            </p>
          </div>

          {/* Right Column: Custom Rounded Frame Container */}
          <div className="EducationalInstituteBreadcrumb-media-col">
            <div className="EducationalInstituteBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="EducationalInstituteBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Educational Institutes" 
                className="EducationalInstituteBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="EducationalInstituteBreadcrumb-wave-curve">
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

export default EducationalInstituteBreadcrumb;