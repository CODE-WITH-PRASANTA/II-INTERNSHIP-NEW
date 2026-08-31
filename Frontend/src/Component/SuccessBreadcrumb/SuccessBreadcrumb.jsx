import React from 'react';
import './SuccessBreadcrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const SuccessBreadcrumb = () => {
  return (
    <section className="SuccessBreadcrumb-wrapper">
      <div className="SuccessBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="SuccessBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="SuccessBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="SuccessBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="SuccessBreadcrumb-tag-wrapper">
              {/* Floating Animation Dots */}
              <span className="SuccessBreadcrumb-dot SuccessBreadcrumb-dot--one" />
              <span className="SuccessBreadcrumb-dot SuccessBreadcrumb-dot--two" />

              <div className="SuccessBreadcrumb-tag">
                <span className="SuccessBreadcrumb-tag-icon">🏆</span>
                <span className="SuccessBreadcrumb-tag-text">PROVEN TRACK RECORD</span>
              </div>
            </div>

            {/* Main Title with Running Gradient Animation */}
            <h1 className="SuccessBreadcrumb-title">
              <span className="SuccessBreadcrumb-title-line">Success Stories</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="SuccessBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="SuccessBreadcrumb-nav-item">
                <span className="SuccessBreadcrumb-home-icon">🏠</span>
                <a href="/" className="SuccessBreadcrumb-link">Home</a>
              </span>
              <span className="SuccessBreadcrumb-separator">/</span>
              <span className="SuccessBreadcrumb-nav-item">
                <a href="/about" className="SuccessBreadcrumb-link">About Us</a>
              </span>
              <span className="SuccessBreadcrumb-separator">/</span>
              <span className="SuccessBreadcrumb-active">Success Stories</span>
            </nav>

            {/* Description Text */}
            <p className="SuccessBreadcrumb-description">
              Transforming lives, one career at a time. Read how our internship programs have helped students launch their dream careers at top companies.
            </p>

            {/* CTA Button */}
            <div className="SuccessBreadcrumb-cta-wrapper">
              <a href="#start" className="SuccessBreadcrumb-cta-btn">
                <span>Start Your Journey</span>
                <span className="SuccessBreadcrumb-cta-arrow">→</span>
              </a>
            </div>

          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="SuccessBreadcrumb-media-col">
            <div className="SuccessBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="SuccessBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Success Stories Students" 
                className="SuccessBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="SuccessBreadcrumb-wave-curve">
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

export default SuccessBreadcrumb;