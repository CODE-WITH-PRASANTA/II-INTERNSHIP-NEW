import React from 'react';
import './RecruitmentBreadcrumb.css';

// Custom local image asset
import breadcrumbImage from '../../assets/AboutUs-breadcrumb.webp';

const RecruitmentBreadcrumb = () => {
  return (
    <section className="RecruitmentBreadcrumb-wrapper">
      <div className="RecruitmentBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="RecruitmentBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="RecruitmentBreadcrumb-content-grid">
          
          {/* Left Column: Text & Breadcrumb Details */}
          <div className="RecruitmentBreadcrumb-text-col">
            
            {/* Tag Pill with Animated Floating Yellow Dots */}
            <div className="RecruitmentBreadcrumb-tag-wrapper">
              {/* Dot 1: Floats Up-to-Down */}
              <span className="RecruitmentBreadcrumb-dot RecruitmentBreadcrumb-dot--one" />
              {/* Dot 2: Floats Down-to-Up (Reverse) */}
              <span className="RecruitmentBreadcrumb-dot RecruitmentBreadcrumb-dot--two" />

              <div className="RecruitmentBreadcrumb-tag">
                <span className="RecruitmentBreadcrumb-tag-icon">✨</span>
                <span className="RecruitmentBreadcrumb-tag-text">JOIN OUR TEAM</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="RecruitmentBreadcrumb-title">
              <span className="RecruitmentBreadcrumb-title-line">Internship</span>
              <span className="RecruitmentBreadcrumb-title-line">Recruitment</span>
            </h1>

            {/* Breadcrumb Navigation Trail */}
            <nav className="RecruitmentBreadcrumb-nav" aria-label="Breadcrumb">
              <span className="RecruitmentBreadcrumb-nav-item">
                <span className="RecruitmentBreadcrumb-home-icon">🏠</span>
                <a href="/" className="RecruitmentBreadcrumb-link">Home</a>
              </span>
              <span className="RecruitmentBreadcrumb-separator">/</span>
              <span className="RecruitmentBreadcrumb-nav-item">
                <a href="/internships" className="RecruitmentBreadcrumb-link">Internships</a>
              </span>
              <span className="RecruitmentBreadcrumb-separator">/</span>
              <span className="RecruitmentBreadcrumb-active">Internship Recruitment</span>
            </nav>

            {/* Description Text */}
            <p className="RecruitmentBreadcrumb-description">
              Aapke career ki shuruaat yahan se hoti hai! Join our Industrial Internship program to get hands-on experience, learn from industry experts, and work on real-world projects. Be a part of our next batch of interns.
            </p>
          </div>

          {/* Right Column: Custom Rounded Frame Container */}
          <div className="RecruitmentBreadcrumb-media-col">
            <div className="RecruitmentBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="RecruitmentBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={breadcrumbImage} 
                alt="Internship Recruitment" 
                className="RecruitmentBreadcrumb-img"
              />
            </div>
          </div>

        </div>

        {/* Bottom Organic Wave Cutout */}
        <div className="RecruitmentBreadcrumb-wave-curve">
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

export default RecruitmentBreadcrumb;