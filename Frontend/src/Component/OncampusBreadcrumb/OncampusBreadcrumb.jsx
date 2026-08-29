import React from 'react';
import './OncampusBreadcrumb.css';
import { FiSpeaker } from 'react-icons/fi';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const OncampusBreadcrumb = () => {
  return (
    <section className="OncampusBreadcrumb-wrapper">
      <div className="OncampusBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="OncampusBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="OncampusBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="OncampusBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="OncampusBreadcrumb-tag-wrapper">
              {/* Floating Dots */}
              <span className="OncampusBreadcrumb-dot OncampusBreadcrumb-dot--one" />
              <span className="OncampusBreadcrumb-dot OncampusBreadcrumb-dot--two" />

              <div className="OncampusBreadcrumb-tag">
                <FiSpeaker className="OncampusBreadcrumb-tag-icon" />
                <span className="OncampusBreadcrumb-tag-text">University Placements</span>
              </div>
            </div>

            {/* Main Title matching reference layout */}
            <h1 className="OncampusBreadcrumb-title">
              <span className="OncampusBreadcrumb-title-line">On-Campus Internships</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="OncampusBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="OncampusBreadcrumb-nav-item">
                <span className="OncampusBreadcrumb-home-icon">🏠</span>
                <a href="/" className="OncampusBreadcrumb-link">Home</a>
              </span>
              <span className="OncampusBreadcrumb-separator">/</span>
              <span className="OncampusBreadcrumb-active">In The Media</span>
            </nav>

            {/* Description Text matching reference image */}
            <p className="OncampusBreadcrumb-description">
             Step straight from your college campus into the corporate world. Explore opportunities brought directly to your university.
            </p>
          </div>

          {/* Right Column: Frame & Image */}
          <div className="OncampusBreadcrumb-media-col">
            <div className="OncampusBreadcrumb-frame">
              <div className="OncampusBreadcrumb-yellow-badge" />
              <img 
                src={breadcrumbImage} 
                alt="In The Media Press Coverage" 
                className="OncampusBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="OncampusBreadcrumb-wave-curve">
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

export default OncampusBreadcrumb;