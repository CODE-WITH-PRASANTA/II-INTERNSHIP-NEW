import React from 'react';
import './MediaVideoBreadcrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const MediaVideoBreadcrumb = () => {
  return (
    <section className="MediaVideoBreadcrumb-wrapper">
      <div className="MediaVideoBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="MediaVideoBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="MediaVideoBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="MediaVideoBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="MediaVideoBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="MediaVideoBreadcrumb-dot MediaVideoBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="MediaVideoBreadcrumb-dot MediaVideoBreadcrumb-dot--two" />

              <div className="MediaVideoBreadcrumb-tag">
                <span className="MediaVideoBreadcrumb-tag-icon">✨</span>
                <span className="MediaVideoBreadcrumb-tag-text">Our Story</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="MediaVideoBreadcrumb-title">
              <span className="MediaVideoBreadcrumb-title-line">Video Coverage</span>
             
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="MediaVideoBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="MediaVideoBreadcrumb-nav-item">
                <span className="MediaVideoBreadcrumb-home-icon">🏠</span>
                <a href="/" className="MediaVideoBreadcrumb-link">Home</a>
              </span>
              <span className="MediaVideoBreadcrumb-separator">/</span>
              <span className="MediaVideoBreadcrumb-nav-item">
                <a href="/about" className="MediaVideoBreadcrumb-link">About Us</a>
              </span>
              <span className="MediaVideoBreadcrumb-separator">/</span>
              <span className="MediaVideoBreadcrumb-active">Organization History</span>
            </nav>

            {/* Description Text */}
            <p className="MediaVideoBreadcrumb-description">
        Watch highlights, interviews, and stories from the people who make it all happen.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="MediaVideoBreadcrumb-media-col">
            <div className="MediaVideoBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="MediaVideoBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Organization History Students" 
                className="MediaVideoBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="MediaVideoBreadcrumb-wave-curve">
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

export default MediaVideoBreadcrumb;