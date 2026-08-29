import React from 'react';
import './TeamMemberBreadcrumb.css';

// Import your custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const TeamMemberBreadcrumb = () => {
  return (
    <section className="TeamMemberBreadcrumb-wrapper">
      <div className="TeamMemberBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="TeamMemberBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="TeamMemberBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="TeamMemberBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="TeamMemberBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="TeamMemberBreadcrumb-dot TeamMemberBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="TeamMemberBreadcrumb-dot TeamMemberBreadcrumb-dot--two" />

              <div className="TeamMemberBreadcrumb-tag">
                <span className="TeamMemberBreadcrumb-tag-icon">✨</span>
                <span className="TeamMemberBreadcrumb-tag-text">Our People</span>
              </div>
            </div>

            {/* Main Title with Flowing White-to-Yellow Shimmer Animation */}
            <h1 className="TeamMemberBreadcrumb-title">
              <span className="TeamMemberBreadcrumb-title-line">Team Members</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="TeamMemberBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="TeamMemberBreadcrumb-nav-item">
                <span className="TeamMemberBreadcrumb-home-icon">🏠</span>
                <a href="/" className="TeamMemberBreadcrumb-link">Home</a>
              </span>
              <span className="TeamMemberBreadcrumb-separator">/</span>
              <span className="TeamMemberBreadcrumb-nav-item">
                <a href="/about" className="TeamMemberBreadcrumb-link">About Us</a>
              </span>
              <span className="TeamMemberBreadcrumb-separator">/</span>
              <span className="TeamMemberBreadcrumb-active">Team Members</span>
            </nav>

            {/* Description Text */}
            <p className="TeamMemberBreadcrumb-description">
              Meet the passionate individuals and visionaries who are driving the mission of the International Institute of Internship.
            </p>
          </div>

          {/* Right Column: Green Rounded Frame, Yellow Badge & Student Image */}
          <div className="TeamMemberBreadcrumb-media-col">
            <div className="TeamMemberBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="TeamMemberBreadcrumb-yellow-badge" />
              
              {/* Foreground Student Cutout Image */}
              <img 
                src={breadcrumbImage} 
                alt="Team Members Students" 
                className="TeamMemberBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="TeamMemberBreadcrumb-wave-curve">
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

export default TeamMemberBreadcrumb;