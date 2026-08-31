import React, { useState } from 'react';
import './Contactinformation.css';

const Contactinformation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Thank you! Your message has been sent successfully.');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <section className="contact-info-section">
      {/* 3D Ambient Glowing Depth Background Orbs */}
      <div className="contact-3d-bg-wrap">
        <div className="contact-3d-orb contact-3d-orb--1" />
        <div className="contact-3d-orb contact-3d-orb--2" />
        <div className="contact-3d-orb contact-3d-orb--3" />
        <div className="contact-3d-grid-texture" />
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="contact-toast-notification">
          <span className="toast-icon">✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="contact-info-container">
        
        {/* ================= LEFT SIDE: CONTACT INFO CARDS ================= */}
        <div className="contact-left-col">
          <div className="contact-header-block">
            <h2 className="contact-main-heading">Contact Information</h2>
            <p className="contact-sub-heading">
              Reach out to us through any of the channels below. We strive to respond to all inquiries within 24 hours.
            </p>
          </div>

          <div className="contact-cards-grid">
            {/* Card 1: Our Location */}
            <a 
              href="https://maps.google.com/?q=II+Internship+Tech+Park+Sector+62+Noida+India" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-feature-card"
            >
              <div className="contact-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="contact-card-title">Our Location</h3>
              <p className="contact-card-text">
                II Internship Tech Park, Sector 62,<br />Noida, India - 201309
              </p>
            </a>

            {/* Card 2: Email Us */}
            <a 
              href="mailto:i3.office2025@gmail.com" 
              className="contact-feature-card"
            >
              <div className="contact-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="contact-card-title">Email Us</h3>
              <p className="contact-card-text highlight-link">
                i3.office2025@gmail.com
              </p>
            </a>

            {/* Card 3: Call Us */}
            <a 
              href="tel:+919876543210" 
              className="contact-feature-card"
            >
              <div className="contact-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="contact-card-title">Call Us</h3>
              <p className="contact-card-text highlight-link">
                +91 98765 43210
              </p>
            </a>

            {/* Card 4: Working Hours */}
            <div className="contact-feature-card">
              <div className="contact-icon-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="contact-card-title">Working Hours</h3>
              <p className="contact-card-text">
                Mon - Sat: 9:00 AM to 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: SEND US A MESSAGE FORM ================= */}
        <div className="contact-right-col">
          <div className="contact-form-card">
            
            <div className="contact-form-header">
              <h2 className="contact-form-title">Send us a Message</h2>
              <p className="contact-form-subtitle">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-actual-form">
              {/* Row 1: Full Name & Email Address */}
              <div className="contact-form-dual-row">
                <div className="contact-input-field-group">
                  <label htmlFor="fullName">FULL NAME</label>
                  <div className="contact-input-wrapper">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-input-field-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <div className="contact-input-wrapper">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="contact-input-field-group">
                <label htmlFor="subject">SUBJECT</label>
                <div className="contact-input-wrapper">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="contact-input-field-group">
                <label htmlFor="message">MESSAGE</label>
                <div className="contact-input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="contact-send-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                <span className="contact-send-icon-badge">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </span>
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contactinformation;