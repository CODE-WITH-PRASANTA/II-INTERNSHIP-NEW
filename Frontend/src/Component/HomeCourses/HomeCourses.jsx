import React from 'react';
import './HomeCourses.css';

import heroStudentsImg from '../../assets/HeroStudent.webp';

const HomeCourses = () => {
  const tickerItems = [
    '56+ Wonderful Awards',
    '5000+ Members',
    'Expert Mentors',
    'Online Certifications',
    '2500+ Online Courses',
    'Top Instructors'
  ];

  const handleFindCourses = () => {
    // Scrolls smoothly down to the courses list or triggers course search
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#courses';
    }
  };

  return (
    <section className="home-courses-container">
      {/* Background Decorative Sparkles & Ambient Glows */}
      <div className="home-courses-bg-glow home-courses-bg-glow--top-left"></div>
      <div className="home-courses-bg-glow home-courses-bg-glow--center-right"></div>

      <span className="home-courses-sparkle home-courses-sparkle--1">✦</span>
      <span className="home-courses-sparkle home-courses-sparkle--2">✦</span>
      <span className="home-courses-sparkle home-courses-sparkle--3">✦</span>

      <div className="home-courses-wrapper">
        {/* Left Column: Hero Content */}
        <div className="home-courses-text-col">
          {/* Trust Badge */}
          <div className="home-courses-trust-badge">
            <span className="home-courses-trust-badge-icon">★</span>
            <span>Trusted by <strong>50,000+</strong> Students Worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="home-courses-title">
            Get <span className="home-courses-title-highlight">2500+</span><br />
            Best Online<br />
            Courses From <span className="home-courses-title-underline">II</span><br />
            Internships
          </h1>

          {/* Subtitle */}
          <p className="home-courses-subtitle">
            Best online education platforms offer flexible learning, 
            quality courses, and expert instructors.
          </p>

          {/* CTA & Social Proof Row */}
          <div className="home-courses-cta-row">
            <button 
              className="home-courses-cta-btn" 
              onClick={handleFindCourses}
              aria-label="Find Courses"
            >
              <span>Find Courses</span>
              <span className="home-courses-cta-btn-arrow">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>

            <div className="home-courses-proof">
              <span className="home-courses-proof-label">250+ Instructors</span>
              <div className="home-courses-avatar-group">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                  alt="Instructor 1" 
                  className="home-courses-avatar-img" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
                  alt="Instructor 2" 
                  className="home-courses-avatar-img" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" 
                  alt="Instructor 3" 
                  className="home-courses-avatar-img" 
                />
                <div className="home-courses-avatar-img home-courses-avatar-plus">+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="home-courses-visual-col">
          {/* Decorative Background Shapes */}
          <div className="home-courses-geometric-shape"></div>
          <div className="home-courses-ring home-courses-ring--inner"></div>
          <div className="home-courses-ring home-courses-ring--outer"></div>
          <div className="home-courses-dotted-pattern"></div>

          {/* Cutout Student Image */}
          <div className="home-courses-image-frame">
            <img 
              src={heroStudentsImg} 
              alt="Students learning together" 
              className="home-courses-student-img" 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </div>

          {/* Glassmorphic Rating Card */}
          <div className="home-courses-rating-card">
            <div className="home-courses-rating-star">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="home-courses-rating-info">
              <span className="home-courses-rating-score">4.9/5</span>
              <span className="home-courses-rating-text">Top Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker Section with Yellow Ribbon & Green Base */}
      <div className="home-courses-ticker-section">
        {/* Yellow Floating Angled Ribbon */}
        <div className="home-courses-ticker-wrapper home-courses-ticker-wrapper--yellow">
          <div className="home-courses-ticker-track">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <div key={idx} className="home-courses-ticker-item">
                <span className="home-courses-ticker-star">★</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Green Base Strip */}
        <div className="home-courses-ticker-base-green"></div>
      </div>
    </section>
  );
};

export default HomeCourses;