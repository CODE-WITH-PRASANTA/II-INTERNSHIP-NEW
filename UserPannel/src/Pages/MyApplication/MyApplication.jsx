import React, { useState, useRef, useEffect } from 'react';
import { 
  FiBriefcase, 
  FiClock, 
  FiCheckCircle, 
  FiXCircle, 
  FiFilter, 
  FiSearch, 
  FiChevronDown, 
  FiChevronUp,
  FiDownload, 
  FiGrid, 
  FiList, 
  FiMapPin, 
  FiCalendar, 
  FiMoreVertical,
  FiEdit,
  FiTrash2,
  FiRefreshCw,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiUser
} from 'react-icons/fi';
import './MyApplication.css';

const initialApplications = [
  {
    id: 1,
    internshipId: 'IN2026IC82168',
    applicationId: '26RBV80844',
    internshipName: 'Software',
    address: 'Hostel 4, IIIT Campus, District Test, State Test',
    type: 'Paid',
    mode: 'In-Office',
    studentName: 'Test Student',
    appliedDate: '11 Aug 2026',
    status: 'Approved'
  },
  {
    id: 2,
    internshipId: 'IN2026IT57463',
    applicationId: '26NT077702',
    internshipName: 'Smart Web Developer Internship- Coding To Career.',
    address: 'Hostel 4, IIIT Campus, District Test, State Test',
    type: 'Paid',
    mode: 'In-Office',
    studentName: 'Test Student',
    appliedDate: '11 Aug 2026',
    status: 'Approved'
  },
  {
    id: 3,
    internshipId: 'IN2026IC47885',
    applicationId: '26RSM72706',
    internshipName: 'sdhkkdsknfds,nbls',
    address: 'Hostel 4, IIIT Campus, District Test, State Test',
    type: 'Stipend',
    mode: 'In-Office',
    studentName: 'Test Student',
    appliedDate: '29 Jul 2026',
    status: 'Approved'
  },
  {
    id: 4,
    internshipId: 'IN2026SA60096',
    applicationId: '26YUJ31023',
    internshipName: 'ssajhsa',
    address: 'Hostel 4, IIIT Campus, District Test, State Test',
    type: 'Free',
    mode: 'In-Office',
    studentName: 'Test Student',
    appliedDate: '24 Jul 2026',
    status: 'Under Review'
  },
  {
    id: 5,
    internshipId: 'IN2026HTB1251',
    applicationId: '26PBU44842',
    internshipName: 'Cloud Computing & DevOps Practice',
    address: 'Hostel 4, IIIT Campus, District Test, State Test',
    type: 'Free',
    mode: 'Virtual',
    studentName: 'Test Student',
    appliedDate: '17 Jul 2026',
    status: 'Approved'
  },
  {
    id: 6,
    internshipId: 'IN2026HTB4132',
    applicationId: '26SEN28121',
    internshipName: 'Full Stack Web Development (Free Tier)',
    address: 'Hostel 4, IIIT Campus, District Test, State Test',
    type: 'Free',
    mode: 'In-Office',
    studentName: 'Test Student',
    appliedDate: '14 Jul 2026',
    status: 'Approved'
  }
];

const MyApplication = () => {
  const [applications, setApplications] = useState(initialApplications);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('list');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Adjust limit per page as needed

  // Popover Toggles
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
  const [activeActionMenuId, setActiveActionMenuId] = useState(null);

  // Status Filter State
  const [statusFilters, setStatusFilters] = useState({
    Approved: true,
    'Under Review': true,
    Rejected: true
  });

  // Column Visibility State
  const [columns, setColumns] = useState({
    internshipId: true,
    applicationId: true,
    internshipName: true,
    address: true,
    typeMode: true,
    studentName: true,
    appliedDate: true,
    status: true,
    action: true
  });

  const [editingItem, setEditingItem] = useState(null);

  const filterRef = useRef(null);
  const columnsRef = useRef(null);
  const actionMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
      if (columnsRef.current && !columnsRef.current.contains(event.target)) {
        setShowColumnsDropdown(false);
      }
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target)) {
        setActiveActionMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter Logic
  const filteredApplications = applications.filter((app) => {
    const matchesSearch = 
      app.internshipId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.applicationId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.internshipName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.studentName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilters[app.status];

    return matchesSearch && matchesStatus;
  });

  // Pagination Calculations
  const totalItems = filteredApplications.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentApplications = filteredApplications.slice(indexOfFirstItem, indexOfLastItem);

  const startCount = totalItems === 0 ? 0 : indexOfFirstItem + 1;
  const endCount = Math.min(indexOfLastItem, totalItems);

  // Reset page number on search or filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilters]);

  // Handlers
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleStatusFilterChange = (status) => {
    setStatusFilters(prev => ({ ...prev, [status]: !prev[status] }));
  };

  const handleColumnToggle = (columnKey) => {
    setColumns(prev => ({ ...prev, [columnKey]: !prev[columnKey] }));
  };

  const handleRefresh = () => {
    setApplications(initialApplications);
    setSearchTerm('');
    setStatusFilters({ Approved: true, 'Under Review': true, Rejected: true });
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      setApplications(prev => prev.filter(app => app.id !== id));
      setActiveActionMenuId(null);
    }
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    setApplications(prev => prev.map(app => app.id === editingItem.id ? editingItem : app));
    setEditingItem(null);
  };

  const handleExportCSV = () => {
    const headers = ["Internship ID", "Application ID", "Internship Name", "Address", "Type", "Mode", "Student Name", "Applied Date", "Status"];
    const rows = filteredApplications.map(app => [
      `"${app.internshipId}"`,
      `"${app.applicationId}"`,
      `"${app.internshipName}"`,
      `"${app.address}"`,
      `"${app.type}"`,
      `"${app.mode}"`,
      `"${app.studentName}"`,
      `"${app.appliedDate}"`,
      `"${app.status}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "My_Applications.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="MyApplication-container">
      {/* Header with Custom Right Illustration */}
      <div className="MyApplication-header">
        <div className="MyApplication-header-left">
          <h1>My Applications</h1>
          <p>Review the status of all your internship applications.</p>
        </div>
        
        <div className="MyApplication-header-illustration">
          <div className="illustration-card card-back">
            <span className="avatar-circle"><FiUser /></span>
            <div className="card-skeleton">
              <span className="line long"></span>
              <span className="line short"></span>
            </div>
          </div>
          <div className="illustration-card card-front">
            <span className="avatar-circle"><FiUser /></span>
            <div className="card-skeleton">
              <span className="line long"></span>
              <span className="line short"></span>
            </div>
          </div>
          <div className="illustration-badge">
            <FiCheckCircle />
          </div>
          <span className="dot dot-green"></span>
          <span className="dot dot-blue"></span>
          <span className="dot dot-coral"></span>
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="MyApplication-stats-grid">
        <div className="MyApplication-stat-card">
          <div className="MyApplication-stat-icon MyApplication-icon-total">
            <FiBriefcase />
          </div>
          <div className="MyApplication-stat-info">
            <span className="MyApplication-stat-value">{applications.length}</span>
            <span className="MyApplication-stat-label">Total Applications</span>
            <span className="MyApplication-stat-sub">All time applications</span>
          </div>
        </div>

        <div className="MyApplication-stat-card">
          <div className="MyApplication-stat-icon MyApplication-icon-review">
            <FiClock />
          </div>
          <div className="MyApplication-stat-info">
            <span className="MyApplication-stat-value">{applications.filter(a => a.status === 'Under Review').length}</span>
            <span className="MyApplication-stat-label">Under Review</span>
            <span className="MyApplication-stat-sub">Applications being reviewed</span>
          </div>
        </div>

        <div className="MyApplication-stat-card">
          <div className="MyApplication-stat-icon MyApplication-icon-approved">
            <FiCheckCircle />
          </div>
          <div className="MyApplication-stat-info">
            <span className="MyApplication-stat-value">{applications.filter(a => a.status === 'Approved').length}</span>
            <span className="MyApplication-stat-label">Approved</span>
            <span className="MyApplication-stat-sub">Applications approved</span>
          </div>
        </div>

        <div className="MyApplication-stat-card">
          <div className="MyApplication-stat-icon MyApplication-icon-rejected">
            <FiXCircle />
          </div>
          <div className="MyApplication-stat-info">
            <span className="MyApplication-stat-value">{applications.filter(a => a.status === 'Rejected').length}</span>
            <span className="MyApplication-stat-label">Rejected</span>
            <span className="MyApplication-stat-sub">Applications rejected</span>
          </div>
        </div>
      </div>

      {/* Toolbar / Actions Bar */}
      <div className="MyApplication-toolbar">
        <div className="MyApplication-toolbar-left">
          <div className="MyApplication-dropdown-wrapper" ref={filterRef}>
            <button 
              className={`MyApplication-btn-filter ${showFilterDropdown ? 'active' : ''}`}
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <FiFilter /> Filters
            </button>

            {showFilterDropdown && (
              <div className="MyApplication-popover MyApplication-filter-popover">
                <div className="MyApplication-popover-header">
                  <strong>Filter by Status</strong>
                  <button onClick={() => setShowFilterDropdown(false)}><FiX /></button>
                </div>
                <div className="MyApplication-filter-options">
                  {['Approved', 'Under Review', 'Rejected'].map((status) => (
                    <label key={status} className="MyApplication-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={statusFilters[status]} 
                        onChange={() => handleStatusFilterChange(status)}
                      />
                      <span>{status}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="MyApplication-search-box">
            <FiSearch className="MyApplication-search-icon" />
            <input 
              type="text" 
              placeholder="Search by ID, internship or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="MyApplication-search-clear" onClick={() => setSearchTerm('')}>
                <FiX />
              </button>
            )}
          </div>
        </div>

        <div className="MyApplication-toolbar-right">
          <button className="MyApplication-btn-icon" onClick={handleRefresh} title="Refresh Table">
            <FiRefreshCw />
          </button>

          <div className="MyApplication-dropdown-wrapper" ref={columnsRef}>
            <button 
              className="MyApplication-btn-secondary"
              onClick={() => setShowColumnsDropdown(!showColumnsDropdown)}
            >
              {showColumnsDropdown ? <FiChevronUp /> : <FiChevronDown />} View Columns <FiChevronDown />
            </button>

            {showColumnsDropdown && (
              <div className="MyApplication-popover MyApplication-columns-popover">
                <div className="MyApplication-popover-header">
                  <strong>Toggle Columns</strong>
                  <button onClick={() => setShowColumnsDropdown(false)}><FiX /></button>
                </div>
                <div className="MyApplication-column-options">
                  {Object.keys(columns).map((colKey) => (
                    <label key={colKey} className="MyApplication-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={columns[colKey]} 
                        onChange={() => handleColumnToggle(colKey)}
                      />
                      <span>{colKey.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className="MyApplication-btn-secondary" onClick={handleExportCSV}>
            <FiDownload /> Export
          </button>

          <div className="MyApplication-view-toggle">
            <button 
              className={`MyApplication-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <FiGrid />
            </button>
            <button 
              className={`MyApplication-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <FiList />
            </button>
          </div>
        </div>
      </div>

      {/* Table / Grid Content View */}
      {viewMode === 'list' ? (
        <div className="MyApplication-table-wrapper">
          <table className="MyApplication-table">
            <thead>
              <tr>
                {columns.internshipId && <th>INTERNSHIP ID</th>}
                {columns.applicationId && <th>APPLICATION ID</th>}
                {columns.internshipName && <th>INTERNSHIP NAME</th>}
                {columns.address && <th>ADDRESS</th>}
                {columns.typeMode && <th>TYPE & MODE</th>}
                {columns.studentName && <th>STUDENT NAME</th>}
                {columns.appliedDate && <th>APPLIED DATE</th>}
                {columns.status && <th>STATUS</th>}
                {columns.action && <th>ACTION</th>}
              </tr>
            </thead>
            <tbody>
              {currentApplications.length > 0 ? (
                currentApplications.map((app) => (
                  <tr key={app.id}>
                    {columns.internshipId && (
                      <td>
                        <span className="MyApplication-pill MyApplication-pill-green">{app.internshipId}</span>
                      </td>
                    )}
                    {columns.applicationId && (
                      <td>
                        <span className="MyApplication-pill MyApplication-pill-purple">{app.applicationId}</span>
                      </td>
                    )}
                    {columns.internshipName && (
                      <td className="MyApplication-col-name">{app.internshipName}</td>
                    )}
                    {columns.address && (
                      <td className="MyApplication-col-address">
                        <FiMapPin className="MyApplication-inline-icon" />
                        <span>{app.address}</span>
                      </td>
                    )}
                    {columns.typeMode && (
                      <td>
                        <div className="MyApplication-tag-group">
                          <span className={`MyApplication-tag MyApplication-tag-${app.type.toLowerCase()}`}>{app.type}</span>
                          <span className="MyApplication-tag MyApplication-tag-mode">{app.mode}</span>
                        </div>
                      </td>
                    )}
                    {columns.studentName && <td><strong>{app.studentName}</strong></td>}
                    {columns.appliedDate && (
                      <td>
                        <div className="MyApplication-date-cell">
                          <FiCalendar /> {app.appliedDate}
                        </div>
                      </td>
                    )}
                    {columns.status && (
                      <td>
                        <span className={`MyApplication-status-badge MyApplication-status-${app.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {app.status === 'Approved' && <FiCheckCircle />}
                          {app.status === 'Under Review' && <FiClock />}
                          {app.status === 'Rejected' && <FiXCircle />}
                          {app.status}
                        </span>
                      </td>
                    )}
                    {columns.action && (
                      <td className="MyApplication-col-action">
                        <div className="MyApplication-action-wrapper" ref={activeActionMenuId === app.id ? actionMenuRef : null}>
                          <button 
                            className="MyApplication-btn-action" 
                            onClick={() => setActiveActionMenuId(activeActionMenuId === app.id ? null : app.id)}
                          >
                            <FiMoreVertical />
                          </button>
                          {activeActionMenuId === app.id && (
                            <div className="MyApplication-action-menu">
                              <button onClick={() => { setEditingItem(app); setActiveActionMenuId(null); }}>
                                <FiEdit /> Edit
                              </button>
                              <button className="delete" onClick={() => handleDelete(app.id)}>
                                <FiTrash2 /> Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="MyApplication-no-data">
                    No applications found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="MyApplication-grid-wrapper">
          {currentApplications.map((app) => (
            <div key={app.id} className="MyApplication-grid-card">
              <div className="MyApplication-grid-card-header">
                <div>
                  <span className="MyApplication-pill MyApplication-pill-green">{app.internshipId}</span>
                  <span className="MyApplication-pill MyApplication-pill-purple">{app.applicationId}</span>
                </div>
                <span className={`MyApplication-status-badge MyApplication-status-${app.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {app.status}
                </span>
              </div>
              <h3 className="MyApplication-grid-card-title">{app.internshipName}</h3>
              <p className="MyApplication-grid-card-address">
                <FiMapPin /> {app.address}
              </p>
              <div className="MyApplication-tag-group" style={{ marginBottom: '12px' }}>
                <span className={`MyApplication-tag MyApplication-tag-${app.type.toLowerCase()}`}>{app.type}</span>
                <span className="MyApplication-tag MyApplication-tag-mode">{app.mode}</span>
              </div>
              <div className="MyApplication-grid-card-footer">
                <span><FiCalendar /> {app.appliedDate}</span>
                <div className="MyApplication-action-wrapper" ref={activeActionMenuId === app.id ? actionMenuRef : null}>
                  <button 
                    className="MyApplication-btn-action"
                    onClick={() => setActiveActionMenuId(activeActionMenuId === app.id ? null : app.id)}
                  >
                    <FiMoreVertical />
                  </button>
                  {activeActionMenuId === app.id && (
                    <div className="MyApplication-action-menu">
                      <button onClick={() => { setEditingItem(app); setActiveActionMenuId(null); }}>
                        <FiEdit /> Edit
                      </button>
                      <button className="delete" onClick={() => handleDelete(app.id)}>
                        <FiTrash2 /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dynamic Pagination Footer */}
      <div className="MyApplication-footer">
        <span className="MyApplication-footer-count">
          Showing {startCount} to {endCount} of {totalItems} applications
        </span>
        <div className="MyApplication-pagination">
          <button 
            className="MyApplication-page-btn" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiChevronLeft /> Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
            <button
              key={pageNum}
              className={`MyApplication-page-num ${currentPage === pageNum ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNum)}
            >
              {pageNum}
            </button>
          ))}

          <button 
            className="MyApplication-page-btn" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Edit Application Modal */}
      {editingItem && (
        <div className="MyApplication-modal-overlay">
          <div className="MyApplication-modal">
            <div className="MyApplication-modal-header">
              <h2>Edit Application</h2>
              <button onClick={() => setEditingItem(null)}><FiX /></button>
            </div>
            <form onSubmit={handleEditSave} className="MyApplication-modal-form">
              <label>
                Internship Name
                <input 
                  type="text" 
                  value={editingItem.internshipName} 
                  onChange={(e) => setEditingItem({ ...editingItem, internshipName: e.target.value })}
                  required
                />
              </label>
              <label>
                Address
                <input 
                  type="text" 
                  value={editingItem.address} 
                  onChange={(e) => setEditingItem({ ...editingItem, address: e.target.value })}
                  required
                />
              </label>
              <label>
                Status
                <select 
                  value={editingItem.status} 
                  onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                >
                  <option value="Approved">Approved</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </label>
              <div className="MyApplication-modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setEditingItem(null)}>Cancel</button>
                <button type="submit" className="btn-save">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApplication;