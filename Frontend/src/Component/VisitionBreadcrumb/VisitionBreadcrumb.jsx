import React from 'react';
import './VisitionBreadcrumb.css';

// Import your local asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const VisitionBreadcrumb = () => {
  return (
    <section className="VisitionBreadcrumb-wrapper">
      <div className="VisitionBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="VisitionBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="VisitionBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="VisitionBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="VisitionBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="VisitionBreadcrumb-dot VisitionBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="VisitionBreadcrumb-dot VisitionBreadcrumb-dot--two" />

              <div className="VisitionBreadcrumb-tag">
                <span className="VisitionBreadcrumb-tag-icon">✨</span>
                <span className="VisitionBreadcrumb-tag-text">Our Goals</span>
              </div>
            </div>

            {/* Main Title with Flowing White-to-Yellow Shimmer Animation */}
            <h1 className="VisitionBreadcrumb-title">
              <span className="VisitionBreadcrumb-title-line">Vision &amp; Mission</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="VisitionBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="VisitionBreadcrumb-nav-item">
                <span className="VisitionBreadcrumb-home-icon">🏠</span>
                <a href="/" className="VisitionBreadcrumb-link">Home</a>
              </span>
              <span className="VisitionBreadcrumb-separator">/</span>
              <span className="VisitionBreadcrumb-nav-item">
                <a href="/about" className="VisitionBreadcrumb-link">About Us</a>
              </span>
              <span className="VisitionBreadcrumb-separator">/</span>
              <span className="VisitionBreadcrumb-active">Vision &amp; Mission</span>
            </nav>

            {/* Description Text */}
            <p className="VisitionBreadcrumb-description">
              Shaping Futures Through Experience &amp; Purpose. Bridging the gap between education and the real world of work.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="VisitionBreadcrumb-media-col">
            <div className="VisitionBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="VisitionBreadcrumb-yellow-badge" />
              
              {/* Foreground Student Cutout Image */}
              <img 
                src={breadcrumbImage} 
                alt="Vision and Mission Students" 
                className="VisitionBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="VisitionBreadcrumb-wave-curve">
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

export default VisitionBreadcrumb;