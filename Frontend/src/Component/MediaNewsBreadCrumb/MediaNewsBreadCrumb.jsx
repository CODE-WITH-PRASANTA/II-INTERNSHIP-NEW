import React from 'react';
import './MediaNewsBreadCrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const MediaNewsBreadCrumb = () => {
  return (
    <section className="MediaNewsBreadCrumb-wrapper">
      <div className="MediaNewsBreadCrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="MediaNewsBreadCrumb-grid-bg" />

        {/* Content Section */}
        <div className="MediaNewsBreadCrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="MediaNewsBreadCrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="MediaNewsBreadCrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="MediaNewsBreadCrumb-dot MediaNewsBreadCrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="MediaNewsBreadCrumb-dot MediaNewsBreadCrumb-dot--two" />

              <div className="MediaNewsBreadCrumb-tag">
                <span className="MediaNewsBreadCrumb-tag-icon">✨</span>
                <span className="MediaNewsBreadCrumb-tag-text">Our Story</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="MediaNewsBreadCrumb-title">
              <span className="MediaNewsBreadCrumb-title-line">Newspaper Mentions</span>
              
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="MediaNewsBreadCrumb-nav" aria-label="Breadcrumb">
              <span className="MediaNewsBreadCrumb-nav-item">
                <span className="MediaNewsBreadCrumb-home-icon">🏠</span>
                <a href="/" className="MediaNewsBreadCrumb-link">Home</a>
              </span>
              <span className="MediaNewsBreadCrumb-separator">/</span>
              <span className="MediaNewsBreadCrumb-nav-item">
                <a href="/about" className="MediaNewsBreadCrumb-link">About Us</a>
              </span>
              <span className="MediaNewsBreadCrumb-separator">/</span>
              <span className="MediaNewsBreadCrumb-active">Organization History</span>
            </nav>

            {/* Description Text */}
            <p className="MediaNewsBreadCrumb-description">
              Discover our impact across various print publications and recognized newspapers.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="MediaNewsBreadCrumb-media-col">
            <div className="MediaNewsBreadCrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="MediaNewsBreadCrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Organization History Students" 
                className="MediaNewsBreadCrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="MediaNewsBreadCrumb-wave-curve">
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

export default MediaNewsBreadCrumb;