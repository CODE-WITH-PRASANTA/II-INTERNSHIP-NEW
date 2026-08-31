import React from 'react';
import './DonateBreadcrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const DonateBreadcrumb = () => {
  return (
    <section className="DonateBreadcrumb-wrapper">
      <div className="DonateBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="DonateBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="DonateBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="DonateBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="DonateBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="DonateBreadcrumb-dot DonateBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="DonateBreadcrumb-dot DonateBreadcrumb-dot--two" />

              <div className="DonateBreadcrumb-tag">
                <span className="DonateBreadcrumb-tag-icon">💚</span>
                <span className="DonateBreadcrumb-tag-text">SUPPORT OUR MISSION</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="DonateBreadcrumb-title">
              <span className="DonateBreadcrumb-title-line">Make a Difference</span>
              <span className="DonateBreadcrumb-title-line">Today</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="DonateBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="DonateBreadcrumb-nav-item">
                <span className="DonateBreadcrumb-home-icon">🏠</span>
                <a href="/" className="DonateBreadcrumb-link">Home</a>
              </span>
              <span className="DonateBreadcrumb-separator">/</span>
              <span className="DonateBreadcrumb-nav-item">
                <a href="/about" className="DonateBreadcrumb-link">About Us</a>
              </span>
              <span className="DonateBreadcrumb-separator">/</span>
              <span className="DonateBreadcrumb-active">Support Our Mission</span>
            </nav>

            {/* Description Text */}
            <p className="DonateBreadcrumb-description">
              Your contribution helps us provide free internships and vital educational resources to underprivileged students. Together, we can empower the next generation of tech leaders.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="DonateBreadcrumb-media-col">
            <div className="DonateBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="DonateBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Support Our Mission" 
                className="DonateBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="DonateBreadcrumb-wave-curve">
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

export default DonateBreadcrumb;