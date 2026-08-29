import React from 'react';
import './EducationalInstitutesCard.css';
import { FiMapPin, FiAward, FiExternalLink } from 'react-icons/fi';

const EducationalInstitutesCard = () => {
  const institutesData = [
    {
      id: 1,
      title: 'Global University',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      address: '456 University Ave, Scholar City, State - 110002',
      accreditation: 'A+',
      websiteUrl: 'https://example.com',
    },
    {
      id: 2,
      title: 'Sample Institute of Technology',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      address: '123 Education Hub, Knowledge City, State - 110001',
      accreditation: 'A++',
      websiteUrl: 'https://example.com',
    },
  ];

  return (
    <section className="EducationalInstitutesCard-wrapper">
      <div className="EducationalInstitutesCard-container">
        
        {/* Header Section */}
        <div className="EducationalInstitutesCard-header">
          <h2 className="EducationalInstitutesCard-title">
            Our Partnered Institutes
          </h2>
          <p className="EducationalInstitutesCard-subtitle">
            We collaborate with top-tier educational institutions to provide the best opportunities
            <br className="EducationalInstitutesCard-br-desktop" /> for students and professionals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="EducationalInstitutesCard-grid">
          {institutesData.map((item) => (
            <div key={item.id} className="EducationalInstitutesCard-card">
              
              {/* Card Image Header */}
              <div className="EducationalInstitutesCard-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="EducationalInstitutesCard-image"
                />
                <div className="EducationalInstitutesCard-image-overlay" />
                <div className="EducationalInstitutesCard-logo-box" />
                <h3 className="EducationalInstitutesCard-card-title">{item.title}</h3>
              </div>

              {/* Card Body */}
              <div className="EducationalInstitutesCard-body">
                
                {/* Address Row */}
                <div className="EducationalInstitutesCard-info-row">
                  <div className="EducationalInstitutesCard-icon-badge">
                    <FiMapPin className="EducationalInstitutesCard-icon" />
                  </div>
                  <span className="EducationalInstitutesCard-info-text">
                    {item.address}
                  </span>
                </div>

                {/* Accreditation Row */}
                <div className="EducationalInstitutesCard-info-row">
                  <div className="EducationalInstitutesCard-icon-badge">
                    <FiAward className="EducationalInstitutesCard-icon" />
                  </div>
                  <div className="EducationalInstitutesCard-accreditation-group">
                    <span className="EducationalInstitutesCard-label">NAAC ACCREDITATION</span>
                    <span className="EducationalInstitutesCard-grade">{item.accreditation}</span>
                  </div>
                </div>

                {/* Visit Button */}
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="EducationalInstitutesCard-btn"
                >
                  <span>Visit Website</span>
                  <FiExternalLink className="EducationalInstitutesCard-btn-icon" />
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationalInstitutesCard;