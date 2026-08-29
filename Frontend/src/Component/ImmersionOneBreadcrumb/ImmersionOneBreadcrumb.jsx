import React from 'react';
import './ImmersionOneBreadcrumb.css';

import breadcrumbImage from '../../assets/F-img.webp';

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
            
            {/* Tag Pill with Animated Floating Dots */}
            <div className="ImmersionOneBreadcrumb-tag-wrapper">
              <span className="ImmersionOneBreadcrumb-dot ImmersionOneBreadcrumb-dot--one" />
              <span className="ImmersionOneBreadcrumb-dot ImmersionOneBreadcrumb-dot--two" />

              <div className="ImmersionOneBreadcrumb-tag">
                <span className="ImmersionOneBreadcrumb-tag-icon">✨</span>
                <span className="ImmersionOneBreadcrumb-tag-text">Experiential Learning</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="ImmersionOneBreadcrumb-title">
              <span className="ImmersionOneBreadcrumb-title-line">Immersion &amp;</span>
              <span className="ImmersionOneBreadcrumb-title-line ImmersionOneBreadcrumb-title-highlight">
                Internships
              </span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="ImmersionOneBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="ImmersionOneBreadcrumb-nav-item">
                <span className="ImmersionOneBreadcrumb-home-icon">🏠</span>
                <a href="/" className="ImmersionOneBreadcrumb-link">Home</a>
              </span>
              <span className="ImmersionOneBreadcrumb-separator">/</span>
              <span className="ImmersionOneBreadcrumb-nav-item">
                <a href="/programs" className="ImmersionOneBreadcrumb-link">Programs</a>
              </span>
              <span className="ImmersionOneBreadcrumb-separator">/</span>
              <span className="ImmersionOneBreadcrumb-active" aria-current="page">Immersion</span>
            </nav>

            {/* Description Text */}
            <p className="ImmersionOneBreadcrumb-description">
              Dive deep into intensive, hands-on learning experiences designed to bridge 
              foundational theory with practical industry expertise and real-world mastery.
            </p>
          </div>

          {/* Right Column: Rounded Frame, Accent Badge & Foreground Image */}
          <div className="ImmersionOneBreadcrumb-media-col">
            <div className="ImmersionOneBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="ImmersionOneBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Students collaborating with laptop" 
                className="ImmersionOneBreadcrumb-img"
                loading="eager"
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