import React, { useState, useEffect } from 'react';
import './HomeWorkshops.css';

import workshopImg from '../../assets/LearnAnytim.webp';

const HomeWorkshops = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <section className="home-workshops-section">
      <div className="home-workshops-container">
        
        {/* Left Column: Media Presentation */}
        <div className="home-workshops-media-column">
          {/* Animated Background Blob */}
          <div className="home-workshops-bg-blob"></div>

          {/* Dotted Grid Decoration */}
          <div className="home-workshops-dotted-pattern">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>

          {/* Floating Outline Ring */}
          <div className="home-workshops-outline-circle"></div>

          {/* Floating Tilted Live Class Badge */}
          <div className="home-workshops-live-badge">
            <span className="home-workshops-badge-dash top-dash"></span>
            <span className="home-workshops-badge-dash right-dash"></span>
            LIVE CLASS
          </div>

          {/* Main Image Wrapper */}
          <div className="home-workshops-image-wrapper">
            <img 
              src={workshopImg} 
              alt="Students collaborating in workshop" 
              className="home-workshops-main-img"
            />
            {/* Animated Play Button */}
            <button 
              className="home-workshops-play-btn" 
              type="button" 
              onClick={() => setIsVideoOpen(true)}
              aria-label="Play Workshop Preview"
            >
              <div className="home-workshops-play-pulse"></div>
              <div className="home-workshops-play-pulse-delayed"></div>
              <svg viewBox="0 0 24 24" fill="currentColor" className="home-workshops-play-icon">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="home-workshops-content-column">
          
          {/* Pill Badge */}
          <div className="home-workshops-pill-tag">Free Workshop</div>

          {/* Main Serif Heading */}
          <h2 className="home-workshops-heading">
            Join Our Free<br />Workshops
          </h2>

          {/* Description */}
          <p className="home-workshops-description">
            Edhen an unknown printer took a galley of type and scrambled it to
            make a type specimen bookas survived not only five centuries.
            Edhen an unknown printer took a galley of type and scrambled.
          </p>

          {/* Feature Grid */}
          <div className="home-workshops-features-grid">
            {/* Feature 1 */}
            <div className="home-workshops-feature-item">
              <div className="home-workshops-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="home-workshops-icon">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="home-workshops-feature-text">
                <h3>Smooth Virtual<br />Live Classes</h3>
                <p>Edhen an unknown printer Rtook galley of type scrambled.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="home-workshops-feature-item">
              <div className="home-workshops-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="home-workshops-icon">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="home-workshops-feature-text">
                <h3>99% Graduation<br />Complete</h3>
                <p>Edhen an unknown printer Rtook galley of type scrambled.</p>
              </div>
            </div>
          </div>

          {/* Interactive CTA Button */}
          <div className="home-workshops-cta-wrapper">
            <button className="home-workshops-cta-btn" type="button">
              <span>Quick Join Now</span>
              <div className="home-workshops-arrow-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="home-workshops-arrow-icon">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </button>
          </div>

        </div>

      </div>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div 
          className="home-workshops-modal-backdrop" 
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="home-workshops-modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="home-workshops-modal-close" 
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close Video"
            >
              &times;
            </button>
            <div className="home-workshops-video-frame-wrap">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Workshop Video Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeWorkshops;