import React from 'react';
import './InternshipsRunningBreadcrumb.css';
import { FiZap } from 'react-icons/fi';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const InternshipsRunningBreadcrumb = () => {
  return (
    <section className="InternshipsRunningBreadcrumb-wrapper">
      <div className="InternshipsRunningBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="InternshipsRunningBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="InternshipsRunningBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="InternshipsRunningBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="InternshipsRunningBreadcrumb-tag-wrapper">
              {/* Floating Animation Dots */}
              <span className="InternshipsRunningBreadcrumb-dot InternshipsRunningBreadcrumb-dot--one" />
              <span className="InternshipsRunningBreadcrumb-dot InternshipsRunningBreadcrumb-dot--two" />

              <div className="InternshipsRunningBreadcrumb-tag">
                <FiZap className="InternshipsRunningBreadcrumb-tag-icon" />
                <span className="InternshipsRunningBreadcrumb-tag-text">ROLLING ADMISSIONS</span>
              </div>
            </div>

            {/* Main Title matching reference layout */}
            <h1 className="InternshipsRunningBreadcrumb-title">
              <span className="InternshipsRunningBreadcrumb-title-line">Running Internships</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="InternshipsRunningBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="InternshipsRunningBreadcrumb-nav-item">
                <span className="InternshipsRunningBreadcrumb-home-icon">🏠</span>
                <a href="/" className="InternshipsRunningBreadcrumb-link">Home</a>
              </span>
              <span className="InternshipsRunningBreadcrumb-separator">/</span>
              <span className="InternshipsRunningBreadcrumb-nav-item">
                <a href="/internships" className="InternshipsRunningBreadcrumb-link">Internships</a>
              </span>
              <span className="InternshipsRunningBreadcrumb-separator">/</span>
              <span className="InternshipsRunningBreadcrumb-active">Running Internships</span>
            </nav>

            {/* Description Text matching reference image */}
            <p className="InternshipsRunningBreadcrumb-description">
              Join our ongoing rolling internship programs. Flexible start dates designed for students and professionals looking to upskill anytime.
            </p>
          </div>

          {/* Right Column: Frame & Image */}
          <div className="InternshipsRunningBreadcrumb-media-col">
            <div className="InternshipsRunningBreadcrumb-frame">
              <div className="InternshipsRunningBreadcrumb-yellow-badge" />
              <img 
                src={breadcrumbImage} 
                alt="Running Internships Students" 
                className="InternshipsRunningBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Wave Cutout */}
        <div className="InternshipsRunningBreadcrumb-wave-curve">
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

export default InternshipsRunningBreadcrumb;