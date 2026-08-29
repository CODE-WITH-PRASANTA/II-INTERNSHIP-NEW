import React from 'react';
import './TrainingSupportBreadcrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const TrainingSupportBreadcrumb = () => {
  return (
    <section className="TrainingSupportBreadcrumb-wrapper">
      <div className="TrainingSupportBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="TrainingSupportBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="TrainingSupportBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="TrainingSupportBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="TrainingSupportBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="TrainingSupportBreadcrumb-dot TrainingSupportBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="TrainingSupportBreadcrumb-dot TrainingSupportBreadcrumb-dot--two" />

              <div className="TrainingSupportBreadcrumb-tag">
                <span className="TrainingSupportBreadcrumb-tag-icon">✨</span>
                <span className="TrainingSupportBreadcrumb-tag-text">Our Story</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="TrainingSupportBreadcrumb-title">
              <span className="TrainingSupportBreadcrumb-title-line">
Training & Technical Support</span>
              
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="TrainingSupportBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="TrainingSupportBreadcrumb-nav-item">
                <span className="TrainingSupportBreadcrumb-home-icon">🏠</span>
                <a href="/" className="TrainingSupportBreadcrumb-link">Home</a>
              </span>
              <span className="TrainingSupportBreadcrumb-separator">/</span>
              <span className="TrainingSupportBreadcrumb-nav-item">
                <a href="/about" className="TrainingSupportBreadcrumb-link">About Us</a>
              </span>
              <span className="TrainingSupportBreadcrumb-separator">/</span>
              <span className="TrainingSupportBreadcrumb-active">Organization History</span>
            </nav>

            {/* Description Text */}
            <p className="TrainingSupportBreadcrumb-description">
              Connect with our partnered agencies providing robust training and technical support to elevate your career and skills.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="TrainingSupportBreadcrumb-media-col">
            <div className="TrainingSupportBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="TrainingSupportBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Organization History Students" 
                className="TrainingSupportBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="TrainingSupportBreadcrumb-wave-curve">
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

export default TrainingSupportBreadcrumb;