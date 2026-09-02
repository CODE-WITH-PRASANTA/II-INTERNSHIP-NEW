import React from 'react';
import './ReadArticleBreadCrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const ReadArticleBreadCrumb = () => {
  return (
    <section className="ReadArticleBreadCrumb-wrapper">
      <div className="ReadArticleBreadCrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="ReadArticleBreadCrumb-grid-bg" />

        {/* Content Section */}
        <div className="ReadArticleBreadCrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="ReadArticleBreadCrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="ReadArticleBreadCrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="ReadArticleBreadCrumb-dot ReadArticleBreadCrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="ReadArticleBreadCrumb-dot ReadArticleBreadCrumb-dot--two" />

              <div className="ReadArticleBreadCrumb-tag">
                <span className="ReadArticleBreadCrumb-tag-icon">✨</span>
                <span className="ReadArticleBreadCrumb-tag-text">Our Story</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="ReadArticleBreadCrumb-title">
              <span className="ReadArticleBreadCrumb-title-line">IIInternship Spring 2026 Cohort: Launching</span>
              <span className="ReadArticleBreadCrumb-title-line">AI-Driven Warehouse Management Models</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="ReadArticleBreadCrumb-nav" aria-label="Breadcrumb">
              <span className="ReadArticleBreadCrumb-nav-item">
                <span className="ReadArticleBreadCrumb-home-icon">🏠</span>
                <a href="/" className="ReadArticleBreadCrumb-link">Home</a>
              </span>
              <span className="ReadArticleBreadCrumb-separator">/</span>
              <span className="ReadArticleBreadCrumb-nav-item">
                <a href="/about" className="ReadArticleBreadCrumb-link">About Us</a>
              </span>
              <span className="ReadArticleBreadCrumb-separator">/</span>
              <span className="ReadArticleBreadCrumb-active">Organization History</span>
            </nav>

            {/* Description Text */}
            <p className="ReadArticleBreadCrumb-description">
              
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="ReadArticleBreadCrumb-media-col">
            <div className="ReadArticleBreadCrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="ReadArticleBreadCrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Organization History Students" 
                className="ReadArticleBreadCrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="ReadArticleBreadCrumb-wave-curve">
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

export default ReadArticleBreadCrumb;