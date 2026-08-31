import React from 'react';
import './TrainingSupportCard.css';
import { FiMapPin, FiBriefcase, FiExternalLink } from 'react-icons/fi';

const TrainingSupportCard = () => {
  const partnersData = [
    {
      id: 1,
      title: 'Learnify Consultancy LLP',
      image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&q=80&w=800',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=100',
      address: 'BCC Greens, Deva Road Lucknow, Uttar Pradesh',
      servicesProvided: 'N/A',
      websiteUrl: 'https://example.com',
    },
    {
      id: 2,
      title: 'Skill Up Solutions',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      logo: '',
      address: '101 Training Hub, Skill City, State - 110004',
      servicesProvided: 'N/A',
      websiteUrl: 'https://example.com',
    },
    {
      id: 3,
      title: 'Tech Innovators Pvt Ltd',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      logo: '',
      address: '789 Industrial Area, Tech City, State - 110003',
      servicesProvided: 'N/A',
      websiteUrl: 'https://example.com',
    },
  ];

  return (
    <section className="TrainingSupportCard-wrapper">
      <div className="TrainingSupportCard-container">
        
        {/* Section Header */}
        <div className="TrainingSupportCard-header">
          <h2 className="TrainingSupportCard-title">
            Training & Technical Support Partners
          </h2>
          <p className="TrainingSupportCard-subtitle">
            Collaborating with industry leaders to bring you cutting-edge technical support and
            <br className="TrainingSupportCard-br-desktop" /> training programs.
          </p>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="TrainingSupportCard-grid">
          {partnersData.map((partner) => (
            <div key={partner.id} className="TrainingSupportCard-card">
              
              {/* Card Banner Image & Logo Header */}
              <div className="TrainingSupportCard-image-wrapper">
                <img
                  src={partner.image}
                  alt={partner.title}
                  className="TrainingSupportCard-image"
                />
                <div className="TrainingSupportCard-image-overlay" />
                
                {/* Logo Box */}
                <div className="TrainingSupportCard-logo-box">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.title} logo`}
                      className="TrainingSupportCard-logo-img"
                    />
                  ) : null}
                </div>
                
                <h3 className="TrainingSupportCard-card-title">{partner.title}</h3>
              </div>

              {/* Card Body Details */}
              <div className="TrainingSupportCard-body">
                
                {/* Address Row */}
                <div className="TrainingSupportCard-info-row">
                  <div className="TrainingSupportCard-icon-badge">
                    <FiMapPin className="TrainingSupportCard-icon" />
                  </div>
                  <span className="TrainingSupportCard-info-text">
                    {partner.address}
                  </span>
                </div>

                {/* Services Provided Row */}
                <div className="TrainingSupportCard-info-row">
                  <div className="TrainingSupportCard-icon-badge">
                    <FiBriefcase className="TrainingSupportCard-icon" />
                  </div>
                  <div className="TrainingSupportCard-service-group">
                    <span className="TrainingSupportCard-label">SERVICES PROVIDED</span>
                    <span className="TrainingSupportCard-value">{partner.servicesProvided}</span>
                  </div>
                </div>

                {/* Visit Button */}
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="TrainingSupportCard-btn"
                >
                  <span>Visit Website</span>
                  <FiExternalLink className="TrainingSupportCard-btn-icon" />
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrainingSupportCard;