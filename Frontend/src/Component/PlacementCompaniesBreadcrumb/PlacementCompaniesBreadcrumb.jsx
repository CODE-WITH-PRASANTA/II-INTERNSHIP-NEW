import React from 'react';
import './PlacementCompaniesBreadcrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const PlacementCompaniesBreadcrumb = () => {
  return (
    <section className="PlacementCompaniesBreadcrumb-wrapper">
      <div className="PlacementCompaniesBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="PlacementCompaniesBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="PlacementCompaniesBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="PlacementCompaniesBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="PlacementCompaniesBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="PlacementCompaniesBreadcrumb-dot PlacementCompaniesBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="PlacementCompaniesBreadcrumb-dot PlacementCompaniesBreadcrumb-dot--two" />

              <div className="PlacementCompaniesBreadcrumb-tag">
                <span className="PlacementCompaniesBreadcrumb-tag-icon">✨</span>
                <span className="PlacementCompaniesBreadcrumb-tag-text">Our Story</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="PlacementCompaniesBreadcrumb-title">
              <span className="PlacementCompaniesBreadcrumb-title-line">Job Placement</span>
              
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="PlacementCompaniesBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="PlacementCompaniesBreadcrumb-nav-item">
                <span className="PlacementCompaniesBreadcrumb-home-icon">🏠</span>
                <a href="/" className="PlacementCompaniesBreadcrumb-link">Home</a>
              </span>
              <span className="PlacementCompaniesBreadcrumb-separator">/</span>
              <span className="PlacementCompaniesBreadcrumb-nav-item">
                <a href="/about" className="PlacementCompaniesBreadcrumb-link">About Us</a>
              </span>
              <span className="PlacementCompaniesBreadcrumb-separator">/</span>
              <span className="PlacementCompaniesBreadcrumb-active">Organization History</span>
            </nav>

            {/* Description Text */}
            <p className="PlacementCompaniesBreadcrumb-description">
              Discover exciting career opportunities with our partnered placement companies. Find your perfect role and send your interest today!
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="PlacementCompaniesBreadcrumb-media-col">
            <div className="PlacementCompaniesBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="PlacementCompaniesBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Organization History Students" 
                className="PlacementCompaniesBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="PlacementCompaniesBreadcrumb-wave-curve">
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

export default PlacementCompaniesBreadcrumb;