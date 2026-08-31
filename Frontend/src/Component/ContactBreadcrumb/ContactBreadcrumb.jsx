import React from 'react';
import './ContactBreadcrumb.css';

// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const ContactBreadcrumb = () => {
  return (
    <section className="ContactBreadcrumb-wrapper">
      <div className="ContactBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="ContactBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="ContactBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="ContactBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="ContactBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="ContactBreadcrumb-dot ContactBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="ContactBreadcrumb-dot ContactBreadcrumb-dot--two" />

              <div className="ContactBreadcrumb-tag">
                <span className="ContactBreadcrumb-tag-icon">💬</span>
                <span className="ContactBreadcrumb-tag-text">WE'RE HERE TO HELP</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="ContactBreadcrumb-title">
              <span className="ContactBreadcrumb-title-line">Get In Touch</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="ContactBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="ContactBreadcrumb-nav-item">
                <span className="ContactBreadcrumb-home-icon">🏠</span>
                <a href="/" className="ContactBreadcrumb-link">Home</a>
              </span>
              <span className="ContactBreadcrumb-separator">/</span>
              <span className="ContactBreadcrumb-active">Contact Us</span>
            </nav>

            {/* Description Text */}
            <p className="ContactBreadcrumb-description">
              We'd love to hear from you! Whether you have a question about our internship programs, pricing, partnerships, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          {/* Right Column: Custom Rounded Frame Container */}
          <div className="ContactBreadcrumb-media-col">
            <div className="ContactBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="ContactBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Get In Touch" 
                className="ContactBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="ContactBreadcrumb-wave-curve">
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

export default ContactBreadcrumb;