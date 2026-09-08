import React, { useState } from 'react';
import './PlacementCompaniesCard.css';
import { 
  FiMapPin, 
  FiBriefcase, 
  FiClock, 
  FiGrid, 
  FiAward, 
  FiUsers, 
  FiGlobe, 
  FiSend,
  FiX
} from 'react-icons/fi';

const PlacementCompaniesCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Form field states matching your target design
  const [formData, setFormData] = useState({
    name: '',
    age: '18',
    address: '',
    mobile: '',
    email: '',
    qualification: '',
    skill: '',
    resume: null
  });

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

  const handleOpenModal = (company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting application for:', selectedCompany?.name, formData);
    handleCloseModal();
  };

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
                <button 
                  type="button" 
                  className="PlacementCompaniesCard-action-btn"
                  onClick={() => handleOpenModal(company)}
                >
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

      {/* Express Interest Modal */}
      <div 
        className={`PlacementCompaniesCard-modal-overlay ${isModalOpen ? 'show' : ''}`}
        onClick={handleCloseModal}
      >
        <div 
          className="PlacementCompaniesCard-modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="PlacementCompaniesCard-modal-header">
            <div>
              <h2 className="PlacementCompaniesCard-modal-title">Express Interest</h2>
              <p className="PlacementCompaniesCard-modal-subtitle">
                Apply for this opportunity at {selectedCompany ? selectedCompany.name : 'the company'}. Fill out all required fields.
              </p>
            </div>
            <button 
              type="button" 
              className="PlacementCompaniesCard-modal-close-btn"
              onClick={handleCloseModal}
            >
              <FiX />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="PlacementCompaniesCard-modal-form">
            
            {/* Name and Age Row */}
            <div className="PlacementCompaniesCard-form-row">
              <div className="PlacementCompaniesCard-form-group flex-wide">
                <label className="PlacementCompaniesCard-input-label">NAME *</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your full name" 
                  className="PlacementCompaniesCard-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="PlacementCompaniesCard-form-group flex-narrow">
                <label className="PlacementCompaniesCard-input-label">AGE *</label>
                <input 
                  type="text" 
                  name="age"
                  placeholder="18" 
                  className="PlacementCompaniesCard-input"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="PlacementCompaniesCard-form-group">
              <label className="PlacementCompaniesCard-input-label">ADDRESS *</label>
              <input 
                type="text" 
                name="address"
                placeholder="Enter your full address" 
                className="PlacementCompaniesCard-input"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Mobile and Email Row */}
            <div className="PlacementCompaniesCard-form-row">
              <div className="PlacementCompaniesCard-form-group flex-half">
                <label className="PlacementCompaniesCard-input-label">MOBILE *</label>
                <input 
                  type="text" 
                  name="mobile"
                  placeholder="+91 xxxxxxxxxx" 
                  className="PlacementCompaniesCard-input"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="PlacementCompaniesCard-form-group flex-half">
                <label className="PlacementCompaniesCard-input-label">EMAIL ID *</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="your.email@example.com" 
                  className="PlacementCompaniesCard-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Qualification */}
            <div className="PlacementCompaniesCard-form-group">
              <label className="PlacementCompaniesCard-input-label">QUALIFICATION *</label>
              <input 
                type="text" 
                name="qualification"
                placeholder="e.g. B.Tech in Computer Science" 
                className="PlacementCompaniesCard-input"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Skill */}
            <div className="PlacementCompaniesCard-form-group">
              <label className="PlacementCompaniesCard-input-label">SKILL</label>
              <input 
                type="text" 
                name="skill"
                placeholder="e.g. React, Node.js, Python" 
                className="PlacementCompaniesCard-input"
                value={formData.skill}
                onChange={handleInputChange}
              />
            </div>

            {/* Attached Resume */}
            <div className="PlacementCompaniesCard-form-group">
              <label className="PlacementCompaniesCard-input-label">ATTACHED RESUME *</label>
              <div className="PlacementCompaniesCard-file-box">
                <label htmlFor="modal-resume-upload" className="PlacementCompaniesCard-choose-file-btn">
                  Choose File
                </label>
                <input 
                  id="modal-resume-upload"
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="PlacementCompaniesCard-file-input-hidden"
                  required
                />
                <span className="PlacementCompaniesCard-file-status">
                  {formData.resume ? formData.resume.name : 'No file chosen'}
                </span>
              </div>
              <span className="PlacementCompaniesCard-file-hint">
                Upload PDF, DOC, or DOCX formats only. Max size 5MB.
              </span>
            </div>

            {/* Submit Button */}
            <button type="submit" className="PlacementCompaniesCard-submit-action">
              <span>Submit Application</span>
              <FiSend className="PlacementCompaniesCard-submit-icon" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default PlacementCompaniesCard;