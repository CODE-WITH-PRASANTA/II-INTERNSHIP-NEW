import React from 'react';
import './RecruitmentBreadcrumb.css';

// अपनी इमेज का पाथ यहाँ एडजस्ट करें
import recruitmentImage from '../../assets/AboutUs-breadcrumb.webp';

const RecruitmentBreadcrumb = () => {
  return (
    <section className="RecruitmentBreadcrumb-wrapper">
      <div className="RecruitmentBreadcrumb-container">
        {/* Background Dot Texture Pattern */}
        <div className="RecruitmentBreadcrumb-grid-bg" />

        {/* Content Section */}
        <div className="RecruitmentBreadcrumb-content-grid">
          
          {/* Left Column: Text Details */}
          <div className="RecruitmentBreadcrumb-text-col">
            
            {/* Tag / Floating Sparkles */}
            <div className="RecruitmentBreadcrumb-tag-wrapper">
              <span className="RecruitmentBreadcrumb-dot RecruitmentBreadcrumb-dot--one" />
              <span className="RecruitmentBreadcrumb-dot RecruitmentBreadcrumb-dot--two" />
              <span className="RecruitmentBreadcrumb-sparkle">✦</span>
            </div>

            {/* Main Title */}
            <h1 className="RecruitmentBreadcrumb-title">
              <span className="RecruitmentBreadcrumb-title-line">Internship</span>
              <span className="RecruitmentBreadcrumb-title-line">Recruitment</span>
            </h1>

            {/* Description Text */}
            <p className="RecruitmentBreadcrumb-description">
              Aapke career ki shuruaat yahan se hoti hai! Join our Industrial Internship program to get hands-on experience, learn from industry experts, and work on real-world projects. Be a part of our next batch of interns.
            </p>
          </div>

          {/* Right Column: Media Section */}
          <div className="RecruitmentBreadcrumb-media-col">
            <div className="RecruitmentBreadcrumb-frame">
              {/* Yellow tilted badge inside the frame */}
              <div className="RecruitmentBreadcrumb-yellow-badge" />
              
              {/* Foreground Image */}
              <img 
                src={recruitmentImage} 
                alt="Internship Recruitment Students" 
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