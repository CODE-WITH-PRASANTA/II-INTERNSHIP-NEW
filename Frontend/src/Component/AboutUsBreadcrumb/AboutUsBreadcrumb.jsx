import React from 'react';
import './AboutUsBreadcrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const AboutUsBreadcrumb = () => {
  return (
    <section className="AboutUsBreadcrumb-wrapper">
      <div className="AboutUsBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="AboutUsBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="AboutUsBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="AboutUsBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="AboutUsBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="AboutUsBreadcrumb-dot AboutUsBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="AboutUsBreadcrumb-dot AboutUsBreadcrumb-dot--two" />

              <div className="AboutUsBreadcrumb-tag">
                <span className="AboutUsBreadcrumb-tag-icon">✨</span>
                <span className="AboutUsBreadcrumb-tag-text">Our Story</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="AboutUsBreadcrumb-title">
              <span className="AboutUsBreadcrumb-title-line">Organization</span>
              <span className="AboutUsBreadcrumb-title-line">History</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="AboutUsBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="AboutUsBreadcrumb-nav-item">
                <span className="AboutUsBreadcrumb-home-icon">🏠</span>
                <a href="/" className="AboutUsBreadcrumb-link">Home</a>
              </span>
              <span className="AboutUsBreadcrumb-separator">/</span>
              <span className="AboutUsBreadcrumb-nav-item">
                <a href="/about" className="AboutUsBreadcrumb-link">About Us</a>
              </span>
              <span className="AboutUsBreadcrumb-separator">/</span>
              <span className="AboutUsBreadcrumb-active">Organization History</span>
            </nav>

            {/* Description Text */}
            <p className="AboutUsBreadcrumb-description">
              The International Institute has built a strong reputation through its commitment to excellence, advanced training programs, and student-focused growth over the years.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="AboutUsBreadcrumb-media-col">
            <div className="AboutUsBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="AboutUsBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Organization History Students" 
                className="AboutUsBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="AboutUsBreadcrumb-wave-curve">
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

export default AboutUsBreadcrumb;