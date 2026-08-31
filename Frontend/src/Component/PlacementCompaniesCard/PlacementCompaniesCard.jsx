import React from 'react';
import './PlacementCompaniesCard.css';
import { 
  FiMapPin, 
  FiBriefcase, 
  FiClock, 
  FiGrid, 
  FiAward, 
  FiUsers, 
  FiGlobe, 
  FiSend 
} from 'react-icons/fi';

const PlacementCompaniesCard = () => {
  const companiesData = [
    {
      id: 1,
      name: 'Global Finance Services',
      location: 'Financial District, State - 110006',
      postOpportunity: 'Financial Analyst',
      jobNature: 'FULL TIME',
      fieldOfEmployment: 'FINANCE & ACCOUNTING',
      minQualification: 'MBA Finance / CA',
      skills: ['Financial Modeling', 'Excel', 'Data Analysis'],
      staffStrength: '2000+',
      websiteUrl: 'https://example.com',
    },
    {
      id: 2,
      name: 'Tech Corp Innovations',
      location: 'Cyber City, Phase 1, State - 110005',
      postOpportunity: 'Software Engineer',
      jobNature: 'FULL TIME',
      fieldOfEmployment: 'IT / SOFTWARE DEVELOPME...',
      minQualification: 'B.Tech / MCA',
      skills: ['React', 'Node.js', 'TypeScript'],
      staffStrength: '500+',
      websiteUrl: 'https://example.com',
    },
    {
      id: 3,
      name: 'Apex Healthcare Labs',
      location: 'Medi Park, Sector 4, State - 110008',
      postOpportunity: 'Research Associate',
      jobNature: 'FULL TIME',
      fieldOfEmployment: 'BIOTECH & PHARMA',
      minQualification: 'M.Sc / M.Pharm',
      skills: ['Clinical Trials', 'Data Analysis', 'Pharma Tech'],
      staffStrength: '1200+',
      websiteUrl: 'https://example.com',
    },
  ];

  return (
    <section className="PlacementCompaniesCard-wrapper">
      <div className="PlacementCompaniesCard-container">
        
        {/* Header Section */}
        <div className="PlacementCompaniesCard-header">
          <h2 className="PlacementCompaniesCard-title">
            Job Placement Companies
          </h2>
          <p className="PlacementCompaniesCard-subtitle">
            Find the perfect job opportunity. Browse through our partnered companies and send
            <br className="PlacementCompaniesCard-br-desktop" /> your interest to kickstart your career.
          </p>
        </div>

        {/* Cards Grid (3 Components) */}
        <div className="PlacementCompaniesCard-grid">
          {companiesData.map((company) => (
            <div key={company.id} className="PlacementCompaniesCard-card">
              
              {/* Card Top / Header */}
              <div className="PlacementCompaniesCard-card-header">
                <div className="PlacementCompaniesCard-logo-box" />
                <div className="PlacementCompaniesCard-header-text">
                  <span className="PlacementCompaniesCard-meta-label">
                    COMPANY/ORGANISATION & ADDRESS
                  </span>
                  <h3 className="PlacementCompaniesCard-company-name">
                    {company.name}
                  </h3>
                  <div className="PlacementCompaniesCard-location">
                    <FiMapPin className="PlacementCompaniesCard-pin-icon" />
                    <span>{company.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Main Content */}
              <div className="PlacementCompaniesCard-card-body">
                
                {/* 2x2 Field Grid */}
                <div className="PlacementCompaniesCard-details-grid">
                  
                  {/* Post Opportunity */}
                  <div className="PlacementCompaniesCard-field-group">
                    <span className="PlacementCompaniesCard-field-label">
                      POST OPPORTUNITY
                    </span>
                    <div className="PlacementCompaniesCard-pill PlacementCompaniesCard-pill--green">
                      <FiBriefcase className="PlacementCompaniesCard-pill-icon" />
                      <span>{company.postOpportunity}</span>
                    </div>
                  </div>

                  {/* Job Nature */}
                  <div className="PlacementCompaniesCard-field-group">
                    <span className="PlacementCompaniesCard-field-label">
                      JOB NATURE
                    </span>
                    <div className="PlacementCompaniesCard-pill PlacementCompaniesCard-pill--blue">
                      <FiClock className="PlacementCompaniesCard-pill-icon" />
                      <span>{company.jobNature}</span>
                    </div>
                  </div>

                  {/* Field of Employment */}
                  <div className="PlacementCompaniesCard-field-group">
                    <span className="PlacementCompaniesCard-field-label">
                      FIELD OF EMPLOYMENT
                    </span>
                    <div className="PlacementCompaniesCard-pill PlacementCompaniesCard-pill--purple">
                      <FiGrid className="PlacementCompaniesCard-pill-icon" />
                      <span>{company.fieldOfEmployment}</span>
                    </div>
                  </div>

                  {/* Min Qualification */}
                  <div className="PlacementCompaniesCard-field-group">
                    <span className="PlacementCompaniesCard-field-label">
                      MIN QUALIFICATION
                    </span>
                    <div className="PlacementCompaniesCard-pill PlacementCompaniesCard-pill--orange">
                      <FiAward className="PlacementCompaniesCard-pill-icon" />
                      <span>{company.minQualification}</span>
                    </div>
                  </div>

                </div>

                {/* Skill Required */}
                <div className="PlacementCompaniesCard-skills-section">
                  <span className="PlacementCompaniesCard-field-label">
                    SKILL REQUIRED
                  </span>
                  <div className="PlacementCompaniesCard-skills-list">
                    {company.skills.map((skill, index) => (
                      <span key={index} className="PlacementCompaniesCard-skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Meta Row: Staff & Website */}
                <div className="PlacementCompaniesCard-footer-meta">
                  <div className="PlacementCompaniesCard-staff-group">
                    <span className="PlacementCompaniesCard-field-label">
                      TOTAL STAFF STRENGTH
                    </span>
                    <div className="PlacementCompaniesCard-staff-val">
                      <FiUsers className="PlacementCompaniesCard-staff-icon" />
                      <span>{company.staffStrength}</span>
                    </div>
                  </div>

                  <div className="PlacementCompaniesCard-website-group">
                    <span className="PlacementCompaniesCard-field-label PlacementCompaniesCard-align-right">
                      WEBSITE
                    </span>
                    <a
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="PlacementCompaniesCard-visit-btn"
                    >
                      <FiGlobe />
                      <span>Visit Link</span>
                    </a>
                  </div>
                </div>

                {/* Action Submit Button */}
                <button type="button" className="PlacementCompaniesCard-action-btn">
                  <span>Interest Send</span>
                  <div className="PlacementCompaniesCard-send-circle">
                    <FiSend />
                  </div>
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlacementCompaniesCard;