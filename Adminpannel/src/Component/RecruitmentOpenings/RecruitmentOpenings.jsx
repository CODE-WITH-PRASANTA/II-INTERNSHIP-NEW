import React, { useState } from 'react';
import { 
  FiHome, FiFolder, FiBriefcase, FiSearch, FiPlus, 
  FiMoreVertical, FiArrowLeft, FiGlobe, 
  FiMapPin, FiX, FiTrash2, FiEdit2, FiEye, FiDownload, FiFileText
} from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import * as XLSX from 'xlsx';
import './RecruitmentOpenings.css';

// Initial Postings Data
const initialPostings = [
  {
    id: '1',
    advtNo: 'i3/2026/04',
    advtDate: '2026-08-03',
    postName: 'Marketing Officer',
    nature: 'Field Work',
    company: 'DBMS Online',
    location: 'All India Level',
    closingDate: '2026-09-30',
    attachmentType: 'globe',
    status: 'Active',
    applicationsCount: 3
  },
  {
    id: '2',
    advtNo: 'II/2026/03',
    advtDate: '20-May-2026',
    postName: 'UI/UX Design Intern',
    nature: 'Full Time',
    company: 'Hilux Technologies',
    location: 'Remote',
    closingDate: '10-July-2026',
    attachmentType: 'doc',
    status: 'Active',
    applicationsCount: 2
  },
  {
    id: '3',
    advtNo: 'II/2026/02',
    advtDate: '18-May-2026',
    postName: 'Data Analytics Intern',
    nature: 'Hybrid',
    company: 'Hilux Technologies',
    location: 'Delhi Office, Connaught Place',
    closingDate: '05-July-2026',
    attachmentType: 'doc',
    status: 'Active',
    applicationsCount: 1
  },
  {
    id: '4',
    advtNo: 'II/2026/01',
    advtDate: '15-May-2026',
    postName: 'Software Engineering Intern',
    nature: 'Full Time',
    company: 'Hilux Technologies',
    location: 'Noida Campus, Sector 62',
    closingDate: '30-June-2026',
    attachmentType: 'doc',
    status: 'Active',
    applicationsCount: 0
  }
];

// Dummy Applications Data mapped by Posting ID
const dummyApplicationsData = {
  '1': [
    {
      candidateName: 'Aarav Sharma',
      applicationId: 'APP-2026-001',
      contactInfo: 'aarav.sharma@example.com | +91 9876543210',
      qualification: 'MBA (Marketing) - 2024',
      status: 'Under Review',
      appliedDate: '2026-08-10'
    },
    {
      candidateName: 'Priya Verma',
      applicationId: 'APP-2026-002',
      contactInfo: 'priya.v@example.com | +91 9812345678',
      qualification: 'BBA - 2023',
      status: 'Shortlisted',
      appliedDate: '2026-08-12'
    },
    {
      candidateName: 'Rohan Mehta',
      applicationId: 'APP-2026-003',
      contactInfo: 'rohan.m@example.com | +91 9711223344',
      qualification: 'PGDM Marketing - 2025',
      status: 'Submitted',
      appliedDate: '2026-08-15'
    }
  ],
  '2': [
    {
      candidateName: 'Ananya Roy',
      applicationId: 'APP-2026-004',
      contactInfo: 'ananya.roy@example.com | +91 9988776655',
      qualification: 'B.Des (Interaction Design)',
      status: 'Shortlisted',
      appliedDate: '2026-05-22'
    },
    {
      candidateName: 'Vikram Singh',
      applicationId: 'APP-2026-005',
      contactInfo: 'vikram.s@example.com | +91 9123456789',
      qualification: 'B.Tech CSE with UI/UX Cert.',
      status: 'Under Review',
      appliedDate: '2026-05-25'
    }
  ],
  '3': [
    {
      candidateName: 'Sneha Gupta',
      applicationId: 'APP-2026-006',
      contactInfo: 'sneha.g@example.com | +91 9345678901',
      qualification: 'B.Sc Statistics & Data Analytics',
      status: 'Submitted',
      appliedDate: '2026-05-20'
    }
  ]
};

const RecruitmentOpenings = () => {
  const [postings, setPostings] = useState(initialPostings);
  const [searchQuery, setSearchQuery] = useState('');
  const [appSearchQuery, setAppSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState('main'); // 'main' | 'applications'
  const [selectedPosting, setSelectedPosting] = useState(null);
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [formData, setFormData] = useState({
    advtNo: '',
    advtDate: '',
    postName: '',
    nature: '',
    company: '',
    location: '',
    closingDate: '',
    attachmentType: 'doc',
    status: 'Active'
  });

  const filteredPostings = postings.filter(item => 
    item.postName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.advtNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentApplications = selectedPosting ? (dummyApplicationsData[selectedPosting.id] || []) : [];

  const filteredApplications = currentApplications.filter(app =>
    app.candidateName.toLowerCase().includes(appSearchQuery.toLowerCase()) ||
    app.applicationId.toLowerCase().includes(appSearchQuery.toLowerCase()) ||
    app.contactInfo.toLowerCase().includes(appSearchQuery.toLowerCase()) ||
    app.qualification.toLowerCase().includes(appSearchQuery.toLowerCase()) ||
    app.status.toLowerCase().includes(appSearchQuery.toLowerCase())
  );

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setActiveDropdownId(activeDropdownId === id ? null : id);
  };

  const handleOpenAddModal = () => {
    setModalMode('add');
    setFormData({
      advtNo: '',
      advtDate: '',
      postName: '',
      nature: 'Field Work',
      company: '',
      location: '',
      closingDate: '',
      attachmentType: 'doc',
      status: 'Active'
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item) => {
    setModalMode('edit');
    setSelectedPosting(item);
    setFormData({ ...item });
    setActiveDropdownId(null);
    setIsModalOpen(true);
  };

  const handleViewApplications = (item) => {
    setSelectedPosting(item);
    setCurrentView('applications');
    setActiveDropdownId(null);
  };

  const handleDeletePosting = (id) => {
    setPostings(postings.filter(p => p.id !== id));
    setActiveDropdownId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (modalMode === 'add') {
      const newEntry = {
        ...formData,
        id: Date.now().toString(),
        applicationsCount: 0
      };
      setPostings([newEntry, ...postings]);
    } else {
      setPostings(postings.map(p => p.id === selectedPosting.id ? { ...p, ...formData } : p));
    }
    setIsModalOpen(false);
  };

  // Excel Export Handler
  const handleDownloadExcel = () => {
    const dataToExport = filteredApplications.length > 0 ? filteredApplications : currentApplications;
    
    if (dataToExport.length === 0) {
      alert('No application data available to download!');
      return;
    }

    // Format data for Excel
    const formattedData = dataToExport.map((item, index) => ({
      'S.No': index + 1,
      'Candidate Name': item.candidateName,
      'Application ID': item.applicationId,
      'Contact Info': item.contactInfo,
      'Qualification': item.qualification,
      'Status': item.status,
      'Applied Date': item.appliedDate
    }));

    try {
      // Create worksheet and workbook
      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications');

      // Save file
      const fileName = `${selectedPosting?.postName.replace(/\s+/g, '_')}_Applications.xlsx`;
      XLSX.writeFile(workbook, fileName);
    } catch (err) {
      // CSV Fallback if xlsx package isn't installed
      const headers = ['Candidate Name,Application ID,Contact Info,Qualification,Status,Applied Date'];
      const rows = dataToExport.map(app => 
        `"${app.candidateName}","${app.applicationId}","${app.contactInfo}","${app.qualification}","${app.status}","${app.appliedDate}"`
      );
      const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `${selectedPosting?.postName}_Applications.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="RecruitmentOpenings-container" onClick={() => setActiveDropdownId(null)}>
      {currentView === 'main' ? (
        <>
          {/* Top Breadcrumb */}
          <div className="RecruitmentOpenings-breadcrumb">
            <span className="RecruitmentOpenings-breadcrumb-item"><FiHome className="bc-icon" /> Home</span>
            <span className="RecruitmentOpenings-breadcrumb-separator">&gt;</span>
            <span className="RecruitmentOpenings-breadcrumb-item"><FiFolder className="bc-icon" /> Super Admin</span>
            <span className="RecruitmentOpenings-breadcrumb-separator">&gt;</span>
            <span className="RecruitmentOpenings-breadcrumb-item active"><FiBriefcase className="bc-icon" /> Recruitment Openings</span>
          </div>

          {/* Main Title Section */}
          <div className="RecruitmentOpenings-header">
            <div>
              <h1 className="RecruitmentOpenings-title">Recruitment Openings Governance</h1>
              <p className="RecruitmentOpenings-subtitle">
                Manage and broadcast your public recruitment notices and job opportunities.
              </p>
            </div>
            <button className="RecruitmentOpenings-btn-primary" onClick={handleOpenAddModal}>
              <FiPlus className="btn-icon" /> Add Job Posting
            </button>
          </div>

          {/* Filter Search */}
          <div className="RecruitmentOpenings-search-bar">
            <FiSearch className="RecruitmentOpenings-search-icon" />
            <input 
              type="text" 
              placeholder="Search by post, company, location, advt..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Postings Table */}
          <div className="RecruitmentOpenings-table-wrapper">
            <table className="RecruitmentOpenings-table">
              <thead>
                <tr>
                  <th>ADVT. NO. & DATE</th>
                  <th>NAME OF THE POST</th>
                  <th>COMPANY DETAILS</th>
                  <th>CLOSING DATE</th>
                  <th>ATTACHMENTS</th>
                  <th>STATUS</th>
                  <th style={{ width: '32px' }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredPostings.length > 0 ? (
                  filteredPostings.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="RecruitmentOpenings-td-bold">{item.advtNo}</div>
                        <div className="RecruitmentOpenings-td-sub">{item.advtDate}</div>
                      </td>
                      <td>
                        <div className="RecruitmentOpenings-td-bold">{item.postName}</div>
                        <div className="RecruitmentOpenings-td-sub">Nature: {item.nature}</div>
                      </td>
                      <td>
                        <div className="RecruitmentOpenings-td-bold">{item.company}</div>
                        <div className="RecruitmentOpenings-td-sub">{item.location}</div>
                      </td>
                      <td>
                        <div className="RecruitmentOpenings-td-bold-date">{item.closingDate}</div>
                      </td>
                      <td>
                        <div className="RecruitmentOpenings-attachment-icon">
                          {item.attachmentType === 'globe' ? (
                            <FiGlobe className="icon-emerald" />
                          ) : (
                            <HiOutlineDocumentText className="icon-indigo" />
                          )}
                        </div>
                      </td>
                      <td>
                        <span className={`RecruitmentOpenings-badge ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="RecruitmentOpenings-actions-cell">
                        <button 
                          className="RecruitmentOpenings-action-btn"
                          onClick={(e) => toggleDropdown(item.id, e)}
                        >
                          <FiMoreVertical />
                        </button>
                        
                        {/* Dropdown Popover */}
                        {activeDropdownId === item.id && (
                          <div className="RecruitmentOpenings-dropdown">
                            <button onClick={() => handleViewApplications(item)}>
                              <FiEye /> View Applications
                            </button>
                            <button onClick={() => handleOpenEditModal(item)}>
                              <FiEdit2 /> Edit Posting
                            </button>
                            <button onClick={() => handleDeletePosting(item.id)} className="delete-btn">
                              <FiTrash2 /> Delete Posting
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="RecruitmentOpenings-no-data">No job postings found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        /* Applications Detail View */
        <>
          <div className="RecruitmentOpenings-breadcrumb">
            <span className="RecruitmentOpenings-breadcrumb-item"><FiHome className="bc-icon" /> Home</span>
            <span className="RecruitmentOpenings-breadcrumb-separator">&gt;</span>
            <span className="RecruitmentOpenings-breadcrumb-item"><FiFolder className="bc-icon" /> Super Admin</span>
            <span className="RecruitmentOpenings-breadcrumb-separator">&gt;</span>
            <span className="RecruitmentOpenings-breadcrumb-item"><FiBriefcase className="bc-icon" /> Recruitment Openings</span>
            <span className="RecruitmentOpenings-breadcrumb-separator">&gt;</span>
            <span className="RecruitmentOpenings-breadcrumb-item"><FiFolder className="bc-icon" /> Cmse3nz3b0001ld04n4d62ukm</span>
            <span className="RecruitmentOpenings-breadcrumb-separator">&gt;</span>
            <span className="RecruitmentOpenings-breadcrumb-item active"><FiFileText className="bc-icon" /> My Applications</span>
          </div>

          <button className="RecruitmentOpenings-btn-back" onClick={() => setCurrentView('main')}>
            <FiArrowLeft /> Back to Recruitment
          </button>

          <div className="RecruitmentOpenings-app-header">
            <div className="RecruitmentOpenings-app-title-row">
              <h2>
                {selectedPosting?.postName} <span className="highlight-code">({selectedPosting?.advtNo})</span> — Applications
              </h2>
              <span className="RecruitmentOpenings-count-chip">
                👥 {currentApplications.length} Applications
              </span>
            </div>
            <p className="RecruitmentOpenings-subtitle">
              Monitor and manage active recruiter/candidate applications submitted for this job opening.
            </p>
            <div className="RecruitmentOpenings-app-meta">
              <span><FiBriefcase className="meta-icon" /> {selectedPosting?.company}</span>
              <span><FiMapPin className="meta-icon" /> {selectedPosting?.location}</span>
              <span><FiFolder className="meta-icon" /> {selectedPosting?.nature}</span>
            </div>
          </div>

          <div className="RecruitmentOpenings-app-bar">
            <div className="RecruitmentOpenings-search-bar wide">
              <FiSearch className="RecruitmentOpenings-search-icon" />
              <input 
                type="text" 
                placeholder="Search by candidate name, email, mobile, qualification..." 
                value={appSearchQuery}
                onChange={(e) => setAppSearchQuery(e.target.value)}
              />
            </div>
            <button className="RecruitmentOpenings-btn-outline" onClick={handleDownloadExcel}>
              <FiDownload /> Download Excel
            </button>
          </div>

          <div className="RecruitmentOpenings-table-wrapper">
            <table className="RecruitmentOpenings-table">
              <thead>
                <tr>
                  <th>CANDIDATE NAME</th>
                  <th>APPLICATION ID</th>
                  <th>CONTACT INFO</th>
                  <th>QUALIFICATION</th>
                  <th>STATUS</th>
                  <th>APPLIED DATE</th>
                  <th style={{ textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((app, index) => (
                    <tr key={index}>
                      <td>
                        <div className="RecruitmentOpenings-td-bold">{app.candidateName}</div>
                      </td>
                      <td>
                        <div className="RecruitmentOpenings-td-bold-date">{app.applicationId}</div>
                      </td>
                      <td>
                        <div className="RecruitmentOpenings-td-sub">{app.contactInfo}</div>
                      </td>
                      <td>
                        <div className="RecruitmentOpenings-td-bold">{app.qualification}</div>
                      </td>
                      <td>
                        <span className="RecruitmentOpenings-badge active">
                          {app.status}
                        </span>
                      </td>
                      <td>
                        <div className="RecruitmentOpenings-td-bold-date">{app.appliedDate}</div>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button className="RecruitmentOpenings-btn-outline" style={{ padding: '4px 8px', fontSize: '11px' }}>
                          <FiEye /> View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="RecruitmentOpenings-no-data">
                      No candidate applications found for this posting.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="RecruitmentOpenings-modal-overlay">
          <div className="RecruitmentOpenings-modal">
            <div className="RecruitmentOpenings-modal-header">
              <h3>{modalMode === 'add' ? 'Add Job Posting' : 'Edit Job Posting'}</h3>
              <button className="RecruitmentOpenings-modal-close" onClick={() => setIsModalOpen(false)}>
                <FiX />
              </button>
            </div>
            <form onSubmit={handleSubmitForm} className="RecruitmentOpenings-modal-form">
              <div className="RecruitmentOpenings-form-grid">
                <div className="RecruitmentOpenings-form-group">
                  <label>Advt. No.</label>
                  <input type="text" name="advtNo" required value={formData.advtNo} onChange={handleInputChange} />
                </div>
                <div className="RecruitmentOpenings-form-group">
                  <label>Advt. Date</label>
                  <input type="text" name="advtDate" required value={formData.advtDate} onChange={handleInputChange} />
                </div>
                <div className="RecruitmentOpenings-form-group">
                  <label>Name of the Post</label>
                  <input type="text" name="postName" required value={formData.postName} onChange={handleInputChange} />
                </div>
                <div className="RecruitmentOpenings-form-group">
                  <label>Nature of Work</label>
                  <input type="text" name="nature" required value={formData.nature} onChange={handleInputChange} />
                </div>
                <div className="RecruitmentOpenings-form-group">
                  <label>Company Details</label>
                  <input type="text" name="company" required value={formData.company} onChange={handleInputChange} />
                </div>
                <div className="RecruitmentOpenings-form-group">
                  <label>Location</label>
                  <input type="text" name="location" required value={formData.location} onChange={handleInputChange} />
                </div>
                <div className="RecruitmentOpenings-form-group">
                  <label>Closing Date</label>
                  <input type="text" name="closingDate" required value={formData.closingDate} onChange={handleInputChange} />
                </div>
                <div className="RecruitmentOpenings-form-group">
                  <label>Attachment Type</label>
                  <select name="attachmentType" value={formData.attachmentType} onChange={handleInputChange}>
                    <option value="doc">Document</option>
                    <option value="globe">Globe Link</option>
                  </select>
                </div>
              </div>

              <div className="RecruitmentOpenings-modal-actions">
                <button type="button" className="RecruitmentOpenings-btn-outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="RecruitmentOpenings-btn-primary">
                  {modalMode === 'add' ? 'Save Posting' : 'Update Posting'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruitmentOpenings;