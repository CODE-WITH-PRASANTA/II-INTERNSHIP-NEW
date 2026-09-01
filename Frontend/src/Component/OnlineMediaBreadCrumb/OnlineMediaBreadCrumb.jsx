import React from 'react';
import './OnlineMediaBreadCrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const OnlineMediaBreadCrumb = () => {
  return (
    <section className="OnlineMediaBreadCrumb-wrapper">
      <div className="OnlineMediaBreadCrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="OnlineMediaBreadCrumb-grid-bg" />

        {/* Content Section */}
        <div className="OnlineMediaBreadCrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="OnlineMediaBreadCrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="OnlineMediaBreadCrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="OnlineMediaBreadCrumb-dot OnlineMediaBreadCrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="OnlineMediaBreadCrumb-dot OnlineMediaBreadCrumb-dot--two" />

              <div className="OnlineMediaBreadCrumb-tag">
                <span className="OnlineMediaBreadCrumb-tag-icon">✨</span>
                <span className="OnlineMediaBreadCrumb-tag-text">Our Story</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="OnlineMediaBreadCrumb-title">
              <span className="OnlineMediaBreadCrumb-title-line">Online Media</span>
             
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="OnlineMediaBreadCrumb-nav" aria-label="Breadcrumb">
              <span className="OnlineMediaBreadCrumb-nav-item">
                <span className="OnlineMediaBreadCrumb-home-icon">🏠</span>
                <a href="/" className="OnlineMediaBreadCrumb-link">Home</a>
              </span>
              <span className="OnlineMediaBreadCrumb-separator">/</span>
              <span className="OnlineMediaBreadCrumb-nav-item">
                <a href="/about" className="OnlineMediaBreadCrumb-link">About Us</a>
              </span>
              <span className="OnlineMediaBreadCrumb-separator">/</span>
              <span className="OnlineMediaBreadCrumb-active">Organization History</span>
            </nav>

            {/* Description Text */}
            <p className="OnlineMediaBreadCrumb-description">
              Explore our digital footprint and features across top blogs, portals, and online magazines.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="OnlineMediaBreadCrumb-media-col">
            <div className="OnlineMediaBreadCrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="OnlineMediaBreadCrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Organization History Students" 
                className="OnlineMediaBreadCrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="OnlineMediaBreadCrumb-wave-curve">
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

export default OnlineMediaBreadCrumb;