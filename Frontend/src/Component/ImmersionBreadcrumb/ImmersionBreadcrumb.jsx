import React from 'react';
import './ImmersionBreadcrumb.css';

import breadcrumbImage from '../../assets/F-img.webp';
// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const ImmersionBreadcrumb = () => {
  return (
    <section className="ImmersionBreadcrumb-wrapper">
      <div className="ImmersionBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="ImmersionBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="ImmersionBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="ImmersionBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="ImmersionBreadcrumb-tag-wrapper">
              <span className="ImmersionBreadcrumb-dot ImmersionBreadcrumb-dot--one" />
              {/* Dot 1: Floats Up-to-Down */}
              <span className="ImmersionBreadcrumb-dot ImmersionBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="ImmersionBreadcrumb-dot ImmersionBreadcrumb-dot--two" />

              <div className="ImmersionBreadcrumb-tag">
                <span className="ImmersionBreadcrumb-tag-icon">✨</span>
                <span className="ImmersionBreadcrumb-tag-text">Experience & Learning</span>
              </div>
            </div>

            {/* Main Title with Flowing Gradient Shimmer Animation */}
            <h1 className="ImmersionBreadcrumb-title">
              <span className="ImmersionBreadcrumb-title-line">Immersion</span>
              <span className="ImmersionBreadcrumb-title-line">Program</span>
                <span className="ImmersionBreadcrumb-tag-text">Experiential Learning</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="ImmersionBreadcrumb-title">
              <span className="ImmersionBreadcrumb-title-line">Immersion &</span>
              <span className="ImmersionBreadcrumb-title-line ImmersionBreadcrumb-title-highlight">Internships</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="ImmersionBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="ImmersionBreadcrumb-nav-item">
                <span className="ImmersionBreadcrumb-home-icon">🏠</span>
                <a href="/" className="ImmersionBreadcrumb-link">Home</a>
              </span>
              <span className="ImmersionBreadcrumb-separator">/</span>
              <span className="ImmersionBreadcrumb-nav-item">
                <a href="/programs" className="ImmersionBreadcrumb-link">Programs</a>
                <a href="/about" className="ImmersionBreadcrumb-link">About Us</a>
              </span>
              <span className="ImmersionBreadcrumb-separator">/</span>
              <span className="ImmersionBreadcrumb-active">Immersion</span>
            </nav>

            {/* Description Text */}
            <p className="ImmersionBreadcrumb-description">
              Dive deep into intensive, hands-on learning experiences designed to bridge foundational theory with practical industry expertise and real-world mastery.
            </p>
          </div>

          {/* Right Column: Rounded Frame, Yellow Badge & Foreground Image */}
          <div className="ImmersionBreadcrumb-media-col">
            <div className="ImmersionBreadcrumb-frame">
              {/* Rotated yellow accent badge */}
              Experience real-world training with our purposeful, structured, and skill-based immersion programs.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="ImmersionBreadcrumb-media-col">
            <div className="ImmersionBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="ImmersionBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Immersion Program Experience" 
                alt="Students collaborating with laptop" 
                className="ImmersionBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="ImmersionBreadcrumb-wave-curve">
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

export default ImmersionBreadcrumb;