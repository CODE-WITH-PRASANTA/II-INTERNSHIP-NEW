import React from 'react';
import './ImmersionOneBreadcrumb.css';

// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const ImmersionOneBreadcrumb = () => {
  return (
    <section className="ImmersionOneBreadcrumb-wrapper">
      <div className="ImmersionOneBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="ImmersionOneBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="ImmersionOneBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="ImmersionOneBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="ImmersionOneBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="ImmersionOneBreadcrumb-dot ImmersionOneBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="ImmersionOneBreadcrumb-dot ImmersionOneBreadcrumb-dot--two" />

              <div className="ImmersionOneBreadcrumb-tag">
                <span className="ImmersionOneBreadcrumb-tag-icon">🚀</span>
                <span className="ImmersionOneBreadcrumb-tag-text">ACCELERATE YOUR CAREER</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="ImmersionOneBreadcrumb-title">
              <span className="ImmersionOneBreadcrumb-title-line">Industry Immersion</span>
              <span className="ImmersionOneBreadcrumb-title-line">Program</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="ImmersionOneBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="ImmersionOneBreadcrumb-nav-item">
                <span className="ImmersionOneBreadcrumb-home-icon">🏠</span>
                <a href="/" className="ImmersionOneBreadcrumb-link">Home</a>
              </span>
              <span className="ImmersionOneBreadcrumb-separator">/</span>
              <span className="ImmersionOneBreadcrumb-nav-item">
                <a href="/immersion" className="ImmersionOneBreadcrumb-link">Immersion</a>
              </span>
              <span className="ImmersionOneBreadcrumb-separator">/</span>
              <span className="ImmersionOneBreadcrumb-active">Industry Immersion Program</span>
            </nav>

            {/* Description Text */}
            <p className="ImmersionOneBreadcrumb-description">
              Dive deep into real-world tech. Experience a corporate environment, work on live industry projects, and bridge the gap between academic learning and professional mastery.
            </p>
          </div>

          {/* Right Column: Custom Rounded Frame Container */}
          <div className="ImmersionOneBreadcrumb-media-col">
            <div className="ImmersionOneBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="ImmersionOneBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Industry Immersion Program" 
                className="ImmersionOneBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="ImmersionOneBreadcrumb-wave-curve">
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

export default ImmersionOneBreadcrumb;