import React, { useState } from 'react';
import './Footer.css';

// Import your custom local logo asset
import logoImage from '../../assets/logo.webp';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="Footer-wrapper">
      <div className="Footer-container">
        {/* Main Content Grid */}
        <div className="Footer-main-grid">
          
          {/* Column 1: Brand Info & Accreditation */}
          <div className="Footer-col Footer-col--brand">
            <div className="Footer-logo-card">
              <img 
                src={logoImage} 
                alt="International Institute of Internship" 
                className="Footer-logo-img" 
              />
            </div>
            
            <p className="Footer-brand-desc">
              We empower learners worldwide with top-tier education, practical skills, and interactive live classes to achieve your career goals.
            </p>

            <div className="Footer-divider" />

            <div className="Footer-accreditation">
              <span className="Footer-powered-by">POWERED BY</span>
              <h4 className="Footer-trust-name">DPKHRC Trust</h4>
              <p className="Footer-trust-iso">An ISO 21001:2018 Certified Research Institution</p>
              <ul className="Footer-trust-list">
                <li>Registered Under Indian Trust Act, 1882, Government of India</li>
                <li>Registered Under Niti Aayog, Government of India</li>
                <li>Registered Under 12A & 80G Under Income Tax Department, Ministry of Finance, Government of India</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="Footer-col Footer-col--links">
            <h3 className="Footer-col-title">Quick Links</h3>
            <ul className="Footer-link-list">
              <li><a href="/" className="Footer-nav-link">Home</a></li>
              <li><a href="/about" className="Footer-nav-link">About</a></li>
              <li><a href="/gallery" className="Footer-nav-link">Gallery</a></li>
              <li><a href="/success-story" className="Footer-nav-link">Success Story</a></li>
              <li><a href="/faqs" className="Footer-nav-link">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Get In Touch & Newsletter */}
          <div className="Footer-col Footer-col--contact">
            <h3 className="Footer-col-title">Get In Touch</h3>
            
            <div className="Footer-contact-list">
              <div className="Footer-contact-item">
                <div className="Footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="Footer-contact-text">BCC Greens, Deva Road, Lucknow, UP, India</span>
              </div>

              <div className="Footer-contact-item">
                <div className="Footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="Footer-contact-text">Thekma, Azamgarh, UP, India</span>
              </div>

              <div className="Footer-contact-item">
                <div className="Footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="Footer-contact-text">Jaihind Tendua, Aurangabad, Bihar</span>
              </div>

              <div className="Footer-contact-item">
                <div className="Footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a href="mailto:i3.office2025@gmail.com" className="Footer-contact-link">
                  i3.office2025@gmail.com
                </a>
              </div>

              <div className="Footer-contact-item">
                <div className="Footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a href="tel:+919472351693" className="Footer-contact-link">
                  +91 9472351693
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="Footer-newsletter">
              <h4 className="Footer-newsletter-title">Sign Up for Updates</h4>
              <form onSubmit={handleSubmit} className="Footer-form">
                <div className="Footer-input-pill">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email here"
                    className="Footer-input"
                  />
                  <button type="submit" className="Footer-submit-btn">
                    <span>Submit</span>
                    <span className="Footer-submit-icon-wrap">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="Footer-bottom">
          <p className="Footer-copyright">
            <span className="Footer-copy-symbol">©</span> 2026 International Institute of Internship™ All Rights Reserved.
          </p>
          <div className="Footer-legal-links">
            <a href="/privacy-policy" className="Footer-legal-link">Privacy Policy</a>
            <a href="/internship-policy" className="Footer-legal-link">Internship Policy</a>
            <a href="/terms-and-conditions" className="Footer-legal-link">Terms & Conditions</a>
            <a href="/refund-policy" className="Footer-legal-link">Refund Policy</a>
            <a href="/other-policies" className="Footer-legal-link">Other Policies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;