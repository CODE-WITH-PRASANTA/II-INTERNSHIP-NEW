import React from 'react';
import './MediaPhotosBreadCrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const MediaPhotosBreadCrumb = () => {
  return (
    <section className="MediaPhotosBreadCrumb-wrapper">
      <div className="MediaPhotosBreadCrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="MediaPhotosBreadCrumb-grid-bg" />

        {/* Content Section */}
        <div className="MediaPhotosBreadCrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="MediaPhotosBreadCrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="MediaPhotosBreadCrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="MediaPhotosBreadCrumb-dot MediaPhotosBreadCrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="MediaPhotosBreadCrumb-dot MediaPhotosBreadCrumb-dot--two" />

              <div className="MediaPhotosBreadCrumb-tag">
                <span className="MediaPhotosBreadCrumb-tag-icon">✨</span>
                <span className="MediaPhotosBreadCrumb-tag-text">Our Story</span>
              </div>
            </div>

            {/* Main Title with Running/Flowing White-to-Yellow Gradient Animation */}
            <h1 className="MediaPhotosBreadCrumb-title">
              <span className="MediaPhotosBreadCrumb-title-line">Photo Gallery</span>
      
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="MediaPhotosBreadCrumb-nav" aria-label="Breadcrumb">
              <span className="MediaPhotosBreadCrumb-nav-item">
                <span className="MediaPhotosBreadCrumb-home-icon">🏠</span>
                <a href="/" className="MediaPhotosBreadCrumb-link">Home</a>
              </span>
              <span className="MediaPhotosBreadCrumb-separator">/</span>
              <span className="MediaPhotosBreadCrumb-nav-item">
                <a href="/about" className="MediaPhotosBreadCrumb-link">About Us</a>
              </span>
              <span className="MediaPhotosBreadCrumb-separator">/</span>
              <span className="MediaPhotosBreadCrumb-active">Organization History</span>
            </nav>

            {/* Description Text */}
            <p className="MediaPhotosBreadCrumb-description">
              A visual journey through our events, campus drives, and vibrant community.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="MediaPhotosBreadCrumb-media-col">
            <div className="MediaPhotosBreadCrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="MediaPhotosBreadCrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Organization History Students" 
                className="MediaPhotosBreadCrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="MediaPhotosBreadCrumb-wave-curve">
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

export default MediaPhotosBreadCrumb;