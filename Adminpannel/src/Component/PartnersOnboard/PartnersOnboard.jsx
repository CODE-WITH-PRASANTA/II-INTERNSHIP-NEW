import React, { useState } from 'react';
import { 
  FiHome, FiFolder, FiBriefcase, FiFilter, 
  FiSearch, FiPlus, FiX, FiMoreVertical, FiTable, FiCheckCircle
} from 'react-icons/fi';
import './PartnersOnboard.css';

// Initial Dummy Data per Category
const initialData = {
  placement: [
    {
      id: 1,
      name: 'Hilux Technologies',
      location: 'Noida, Sector 62',
      domain: 'IT & Software Development',
      nature: 'Full Time'
    },
    {
      id: 2,
      name: 'DBMS Online',
      location: 'Delhi, Connaught Place',
      domain: 'Database & Cloud Solutions',
      nature: 'Field Work'
    }
  ],
  educational: [
    {
      id: 1,
      name: 'IIT Delhi',
      location: 'Hauz Khas, New Delhi',
      naacGrade: 'A++'
    },
    {
      id: 2,
      name: 'Amity University',
      location: 'Noida, Uttar Pradesh',
      naacGrade: 'A+'
    }
  ],
  training: [
    {
      id: 1,
      name: 'TechSkill Academy',
      location: 'Bengaluru, Karnataka',
      services: 'Full-Stack Web Dev, Data Science'
    },
    {
      id: 2,
      name: 'Corporate SkillHub',
      location: 'Hyderabad, Telangana',
      services: 'Soft Skills, DevOps & Cloud'
    }
  ]
};

const PartnersOnboard = () => {
  const [activeTab, setActiveTab] = useState('placement'); // 'placement' | 'educational' | 'training'
  const [partnersData, setPartnersData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    partnerName: '',
    websiteUrl: '',
    addressLocation: '',
    postOpportunity: '',
    jobNature: '',
    fieldOfEmployment: '',
    minQualification: '',
    skills: '',
    staffStrength: '',
    logoImage: null,
    highlightPhoto: null
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRegisterPartner = (e) => {
    e.preventDefault();
    
    // Add to placement list as default
    const newPartner = {
      id: Date.now(),
      name: formData.partnerName || 'New Partner',
      location: formData.addressLocation || 'Remote',
      domain: formData.fieldOfEmployment || 'General',
      nature: formData.jobNature || 'Full Time',
      naacGrade: 'A+',
      services: 'Skill Development'
    };

    setPartnersData((prev) => ({
      ...prev,
      [activeTab]: [newPartner, ...prev[activeTab]]
    }));

    setIsModalOpen(false);
    setFormData({
      partnerName: '',
      websiteUrl: '',
      addressLocation: '',
      postOpportunity: '',
      jobNature: '',
      fieldOfEmployment: '',
      minQualification: '',
      skills: '',
      staffStrength: '',
      logoImage: null,
      highlightPhoto: null
    });
  };

  // Filter partners based on search input
  const currentPartners = partnersData[activeTab].filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      (item.domain && item.domain.toLowerCase().includes(query)) ||
      (item.naacGrade && item.naacGrade.toLowerCase().includes(query)) ||
      (item.services && item.services.toLowerCase().includes(query))
    );
  });

  return (
    <div className="PartnersOnboard-container">
      {/* Breadcrumb Header */}
      <div className="PartnersOnboard-breadcrumb">
        <span className="PartnersOnboard-breadcrumb-item"><FiHome /> Home</span>
        <span className="PartnersOnboard-breadcrumb-sep">&gt;</span>
        <span className="PartnersOnboard-breadcrumb-item"><FiFolder /> Super Admin</span>
        <span className="PartnersOnboard-breadcrumb-sep">&gt;</span>
        <span className="PartnersOnboard-breadcrumb-item active"><FiBriefcase /> Partners Onboard</span>
      </div>

      {/* Header Bar */}
      <div className="PartnersOnboard-header">
        <div>
          <h1 className="PartnersOnboard-title">Partners Onboarding Board</h1>
          <p className="PartnersOnboard-subtitle">
            Manage onboarding partner catalogs across Placement, Educational, and Training support domains.
          </p>
        </div>
        <button className="PartnersOnboard-btn-primary" onClick={() => setIsModalOpen(true)}>
          <FiPlus /> Onboard Partner
        </button>
      </div>

      {/* Tabs Row */}
      <div className="PartnersOnboard-tabs">
        <button 
          className={`PartnersOnboard-tab ${activeTab === 'placement' ? 'active' : ''}`}
          onClick={() => setActiveTab('placement')}
        >
          Job Placement
        </button>
        <button 
          className={`PartnersOnboard-tab ${activeTab === 'educational' ? 'active' : ''}`}
          onClick={() => setActiveTab('educational')}
        >
          Educational Institutes
        </button>
        <button 
          className={`PartnersOnboard-tab ${activeTab === 'training' ? 'active' : ''}`}
          onClick={() => setActiveTab('training')}
        >
          Training Support
        </button>
      </div>

      {/* Action Controls */}
      <div className="PartnersOnboard-controls">
        <button 
          className={`PartnersOnboard-btn-filter ${showFilterDrawer ? 'active' : ''}`}
          onClick={() => setShowFilterDrawer(!showFilterDrawer)}
        >
          <FiFilter /> Show Filters
        </button>

        <div className="PartnersOnboard-search-wrapper">
          <FiSearch className="PartnersOnboard-search-icon" />
          <input 
            type="text" 
            placeholder="Search partners..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Collapsible Filter Bar */}
      {showFilterDrawer && (
        <div className="PartnersOnboard-filter-drawer">
          <div className="PartnersOnboard-filter-group">
            <label>Location Filter</label>
            <input type="text" placeholder="Filter by city/state..." />
          </div>
          <div className="PartnersOnboard-filter-group">
            <label>Status Filter</label>
            <select>
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="PartnersOnboard-table-wrapper">
        <table className="PartnersOnboard-table">
          <thead>
            {activeTab === 'placement' && (
              <tr>
                <th>PARTNER NAME</th>
                <th>LOCATION</th>
                <th>DOMAIN FIELD</th>
                <th>JOB NATURE</th>
                <th style={{ textAlign: 'right' }}>ACTIONS</th>
              </tr>
            )}
            {activeTab === 'educational' && (
              <tr>
                <th>PARTNER NAME</th>
                <th>LOCATION</th>
                <th>NAAC GRADE</th>
                <th style={{ textAlign: 'right' }}>ACTIONS</th>
              </tr>
            )}
            {activeTab === 'training' && (
              <tr>
                <th>PARTNER NAME</th>
                <th>LOCATION</th>
                <th>SERVICES PROVIDED</th>
                <th style={{ textAlign: 'right' }}>ACTIONS</th>
              </tr>
            )}
          </thead>
          <tbody>
            {currentPartners.length > 0 ? (
              currentPartners.map((item) => (
                <tr key={item.id}>
                  <td className="PartnersOnboard-td-name">{item.name}</td>
                  <td>{item.location}</td>
                  {activeTab === 'placement' && (
                    <>
                      <td>{item.domain}</td>
                      <td><span className="PartnersOnboard-tag">{item.nature}</span></td>
                    </>
                  )}
                  {activeTab === 'educational' && (
                    <td><span className="PartnersOnboard-grade">{item.naacGrade}</span></td>
                  )}
                  {activeTab === 'training' && (
                    <td>{item.services}</td>
                  )}
                  <td style={{ textAlign: 'right' }}>
                    <button className="PartnersOnboard-action-btn"><FiMoreVertical /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="PartnersOnboard-no-results">
                  <div className="PartnersOnboard-empty-state">
                    <FiTable className="empty-icon" />
                    <span>No results found.</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Register Partner Profile Popup Modal */}
      {isModalOpen && (
        <div className="PartnersOnboard-modal-backdrop">
          <div className="PartnersOnboard-modal">
            <div className="PartnersOnboard-modal-header">
              <div>
                <h2>Register Partner Profile</h2>
                <p>Add or update onboarding partner catalog details.</p>
              </div>
              <button className="PartnersOnboard-modal-close" onClick={() => setIsModalOpen(false)}>
                <FiX />
              </button>
            </div>

            <form onSubmit={handleRegisterPartner} className="PartnersOnboard-modal-body">
              <div className="PartnersOnboard-form-grid">
                <div className="PartnersOnboard-form-group">
                  <label>Partner Name *</label>
                  <input 
                    type="text" 
                    name="partnerName" 
                    required 
                    value={formData.partnerName} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="PartnersOnboard-form-group">
                  <label>Website URL</label>
                  <input 
                    type="url" 
                    name="websiteUrl" 
                    placeholder="https://example.com" 
                    value={formData.websiteUrl} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="PartnersOnboard-form-group full-width">
                  <label>Address Location *</label>
                  <input 
                    type="text" 
                    name="addressLocation" 
                    required 
                    value={formData.addressLocation} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="PartnersOnboard-form-group">
                  <label>Post Opportunity</label>
                  <input 
                    type="text" 
                    name="postOpportunity" 
                    placeholder="e.g. Trainee Engineer" 
                    value={formData.postOpportunity} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="PartnersOnboard-form-group">
                  <label>Job Nature</label>
                  <input 
                    type="text" 
                    name="jobNature" 
                    placeholder="e.g. Full Time" 
                    value={formData.jobNature} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="PartnersOnboard-form-group">
                  <label>Field of Employment</label>
                  <input 
                    type="text" 
                    name="fieldOfEmployment" 
                    placeholder="e.g. IT & Software Development" 
                    value={formData.fieldOfEmployment} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="PartnersOnboard-form-group">
                  <label>Min Qualification</label>
                  <input 
                    type="text" 
                    name="minQualification" 
                    placeholder="e.g. B.Tech CSE" 
                    value={formData.minQualification} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="PartnersOnboard-form-group">
                  <label>Skills (Comma-separated)</label>
                  <input 
                    type="text" 
                    name="skills" 
                    placeholder="React, Node.js, SQL" 
                    value={formData.skills} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="PartnersOnboard-form-group">
                  <label>Staff Strength</label>
                  <input 
                    type="text" 
                    name="staffStrength" 
                    placeholder="e.g. 500+" 
                    value={formData.staffStrength} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="PartnersOnboard-form-group">
                  <label>Partner Logo Image</label>
                  <input 
                    type="file" 
                    name="logoImage" 
                    onChange={handleInputChange} 
                    className="file-input"
                  />
                </div>
                <div className="PartnersOnboard-form-group">
                  <label>Highlight Display Photo</label>
                  <input 
                    type="file" 
                    name="highlightPhoto" 
                    onChange={handleInputChange} 
                    className="file-input"
                  />
                </div>
              </div>

              <div className="PartnersOnboard-modal-footer">
                <button type="button" className="PartnersOnboard-btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="PartnersOnboard-btn-primary">
                  Register Partner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnersOnboard;