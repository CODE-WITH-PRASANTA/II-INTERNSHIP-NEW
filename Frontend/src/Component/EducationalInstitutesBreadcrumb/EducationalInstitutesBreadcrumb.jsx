import React from 'react';
import './EducationalInstitutesBreadcrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const EducationalInstitutesBreadcrumb = () => {
  return (
    <section className="EducationalInstitutesBreadcrumb-wrapper">
      <div className="EducationalInstitutesBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="EducationalInstitutesBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="EducationalInstitutesBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="EducationalInstitutesBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="EducationalInstitutesBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="EducationalInstitutesBreadcrumb-dot EducationalInstitutesBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="EducationalInstitutesBreadcrumb-dot EducationalInstitutesBreadcrumb-dot--two" />

              <div className="EducationalInstitutesBreadcrumb-tag">
                <span className="EducationalInstitutesBreadcrumb-tag-icon">✨</span>
                <span className="EducationalInstitutesBreadcrumb-tag-text">Our Network</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="EducationalInstitutesBreadcrumb-title">
              <span className="EducationalInstitutesBreadcrumb-title-line">Educational</span>
              <span className="EducationalInstitutesBreadcrumb-title-line">Institutes</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="EducationalInstitutesBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="EducationalInstitutesBreadcrumb-nav-item">
                <span className="EducationalInstitutesBreadcrumb-home-icon">🏠</span>
                <a href="/" className="EducationalInstitutesBreadcrumb-link">Home</a>
              </span>
              <span className="EducationalInstitutesBreadcrumb-separator">/</span>
              <span className="EducationalInstitutesBreadcrumb-nav-item">
                <a href="/about" className="EducationalInstitutesBreadcrumb-link">About Us</a>
              </span>
              <span className="EducationalInstitutesBreadcrumb-separator">/</span>
              <span className="EducationalInstitutesBreadcrumb-active">Educational Institutes</span>
            </nav>

            {/* Description Text matching reference image */}
            <p className="EducationalInstitutesBreadcrumb-description">
              Explore our partnered educational institutes that strive for academic excellence and innovation. Discover their accreditations, campuses, and more.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="EducationalInstitutesBreadcrumb-media-col">
            <div className="EducationalInstitutesBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="EducationalInstitutesBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Educational Institutes Students" 
                className="EducationalInstitutesBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="EducationalInstitutesBreadcrumb-wave-curve">
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

export default EducationalInstitutesBreadcrumb;