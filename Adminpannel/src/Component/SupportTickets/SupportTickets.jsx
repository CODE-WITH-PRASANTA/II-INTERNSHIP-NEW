import React, { useState } from 'react';
import { 
  FiHome, 
  FiFolder, 
  FiHeadphones, 
  FiFilter, 
  FiSearch, 
  FiMessageSquare, 
  FiChevronDown, 
  FiX, 
  FiSend,
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight
} from 'react-icons/fi';
import './SupportTickets.css';

const initialTickets = [
  { id: 1, subject: 'hhh', senderName: 'Test Student', senderEmail: 'student@hilux.com', status: 'OPEN', submittedDate: '29 Aug 2026' },
  { id: 2, subject: 'RAMAN SINGH', senderName: 'Dr. Avishek Kumar', senderEmail: 'dbmsonline2024@gmail.com', status: 'RESOLVED', submittedDate: '29 Aug 2026' },
  { id: 3, subject: 'Unable to access live sessions links', senderName: 'Test Student', senderEmail: 'student@hilux.com', status: 'RESOLVED', submittedDate: '4 Aug 2026' },
  { id: 4, subject: 'Unable to access live sessions links', senderName: 'Test Student', senderEmail: 'student@hilux.com', status: 'RESOLVED', submittedDate: '3 Aug 2026' },
  { id: 5, subject: 'Unable to access live sessions links', senderName: 'Test Student', senderEmail: 'student@hilux.com', status: 'RESOLVED', submittedDate: '1 Aug 2026' },
  { id: 6, subject: 'URGENT', senderName: 'Senior Instructor', senderEmail: 'instructor@hilux.com', status: 'RESOLVED', submittedDate: '1 Aug 2026' },
  { id: 7, subject: 'fggdgfh', senderName: 'Senior Instructor', senderEmail: 'instructor@hilux.com', status: 'RESOLVED', submittedDate: '25 Jul 2026' },
  { id: 8, subject: 'Regarding int Subject', senderName: 'Senior Instructor', senderEmail: 'instructor@hilux.com', status: 'OPEN', submittedDate: '24 Jul 2026' },
  { id: 9, subject: 'Unable to access live sessions links', senderName: 'Test Student', senderEmail: 'student@hilux.com', status: 'RESOLVED', submittedDate: '24 Jul 2026' },
  { id: 10, subject: 'Regarding Internship', senderName: 'Avishek Kumar`', senderEmail: 'jaihindtendua@gmail.com', status: 'OPEN', submittedDate: '21 Jul 2026' },
  { id: 11, subject: 'Payment confirmation issue', senderName: 'Rahul Verma', senderEmail: 'rahul@example.com', status: 'OPEN', submittedDate: '18 Jul 2026' },
  { id: 12, subject: 'Certificate generation failed', senderName: 'Ananya Sharma', senderEmail: 'ananya@example.com', status: 'RESOLVED', submittedDate: '15 Jul 2026' },
  { id: 13, subject: 'Video playback error on Chrome', senderName: 'Test Student', senderEmail: 'student@hilux.com', status: 'OPEN', submittedDate: '10 Jul 2026' }
];

const SupportTickets = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Status Change Handler
  const handleStatusChange = (id, newStatus) => {
    setTickets(prev =>
      prev.map(t => (t.id === id ? { ...t, status: newStatus.toUpperCase() } : t))
    );
  };

  // Search & Filter Handler
  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch =
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.senderEmail.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' || ticket.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate Pagination Slices
  const totalPages = Math.ceil(filteredTickets.length / rowsPerPage) || 1;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirstRow, indexOfLastRow);

  // Pagination Control Handlers
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to page 1 when rows per page changes
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on new search
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  // Popup Handlers
  const handleOpenReplyModal = (ticket) => {
    setSelectedTicket(ticket);
    setReplyMessage('');
  };

  const handleCloseReplyModal = () => {
    setSelectedTicket(null);
  };

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;

    handleStatusChange(selectedTicket.id, 'RESOLVED');
    handleCloseReplyModal();
  };

  return (
    <div className="support-tickets-container">
      {/* Breadcrumbs */}
      <nav className="support-tickets-breadcrumb">
        <span className="support-tickets-breadcrumb-item">
          <FiHome className="support-tickets-breadcrumb-icon" /> Home
        </span>
        <span className="support-tickets-breadcrumb-separator">&gt;</span>
        <span className="support-tickets-breadcrumb-item">
          <FiFolder className="support-tickets-breadcrumb-icon" /> Super Admin
        </span>
        <span className="support-tickets-breadcrumb-separator">&gt;</span>
        <span className="support-tickets-breadcrumb-item support-tickets-breadcrumb-active">
          <FiHeadphones className="support-tickets-breadcrumb-icon" /> Support Tickets
        </span>
      </nav>

      {/* Header */}
      <div className="support-tickets-header">
        <h1>Support Tickets Queue</h1>
        <p>Manage platform support queries from users — update statuses, send replies, and close resolved issues.</p>
      </div>

      {/* Toolbar */}
      <div className="support-tickets-toolbar">
        <button 
          className={`support-tickets-filter-btn ${showFilterPanel ? 'active' : ''}`}
          onClick={() => setShowFilterPanel(!showFilterPanel)}
        >
          <FiFilter className="support-tickets-btn-icon" /> Show Filters
        </button>

        <div className="support-tickets-search-wrapper">
          <FiSearch className="support-tickets-search-icon" />
          <input
            type="text"
            placeholder="Search by subject or user"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Filter Panel */}
      {showFilterPanel && (
        <div className="support-tickets-filter-panel">
          <div className="support-tickets-filter-group">
            <label>FILTER BY STATUS</label>
            <div className="support-tickets-select-wrapper">
              <select value={statusFilter} onChange={handleStatusFilterChange}>
                <option value="ALL">All Statuses</option>
                <option value="OPEN">Open Only</option>
                <option value="RESOLVED">Resolved Only</option>
              </select>
              <FiChevronDown className="support-tickets-select-arrow" />
            </div>
          </div>
        </div>
      )}

      {/* Card & Table */}
      <div className="support-tickets-card">
        <div className="support-tickets-table-wrapper">
          <table className="support-tickets-table">
            <thead>
              <tr>
                <th>SUBJECT</th>
                <th>FROM</th>
                <th>STATUS</th>
                <th>UPDATE STATUS</th>
                <th>SUBMITTED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentTickets.length > 0 ? (
                currentTickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="support-tickets-subject">{ticket.subject}</td>
                    <td>
                      <div className="support-tickets-sender">
                        <span className="support-tickets-sender-name">{ticket.senderName}</span>
                        <span className="support-tickets-sender-email">{ticket.senderEmail}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`support-tickets-badge ${ticket.status.toLowerCase()}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td>
                      <div className="support-tickets-select-wrapper">
                        <select
                          className="support-tickets-status-select"
                          value={ticket.status === 'OPEN' ? 'Open' : 'Resolved'}
                          onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                        >
                          <option value="Open">Open</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                        <FiChevronDown className="support-tickets-select-arrow" />
                      </div>
                    </td>
                    <td className="support-tickets-date">{ticket.submittedDate}</td>
                    <td>
                      <button 
                        className="support-tickets-reply-btn"
                        onClick={() => handleOpenReplyModal(ticket)}
                      >
                        <FiMessageSquare className="support-tickets-reply-icon" /> Reply
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="support-tickets-empty">
                    No tickets found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Working Pagination Footer */}
        <div className="support-tickets-pagination">
          <div className="support-tickets-rows-per-page">
            <span>Rows per page</span>
            <div className="support-tickets-select-wrapper mini">
              <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              <FiChevronDown className="support-tickets-select-arrow" />
            </div>
          </div>

          <div className="support-tickets-pagination-controls">
            <span className="support-tickets-page-info">
              Page {currentPage} of {totalPages}
            </span>
            <div className="support-tickets-nav-buttons">
              <button 
                className="support-tickets-nav-btn" 
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <FiChevronsLeft />
              </button>
              <button 
                className="support-tickets-nav-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FiChevronLeft />
              </button>
              <button 
                className="support-tickets-nav-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <FiChevronRight />
              </button>
              <button 
                className="support-tickets-nav-btn" 
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                <FiChevronsRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reply Modal */}
      {selectedTicket && (
        <div className="support-tickets-modal-overlay" onClick={handleCloseReplyModal}>
          <div className="support-tickets-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="support-tickets-modal-header">
              <h2>Reply to Support Query</h2>
              <button className="support-tickets-close-btn" onClick={handleCloseReplyModal}>
                <FiX />
              </button>
            </div>

            <div className="support-tickets-modal-body">
              <div className="support-tickets-meta-row">
                <strong>Subject:</strong> {selectedTicket.subject}
              </div>
              <div className="support-tickets-meta-row">
                <strong>From:</strong> {selectedTicket.senderName} ({selectedTicket.senderEmail})
              </div>

              <form onSubmit={handleSendReply} className="support-tickets-reply-form">
                <label>YOUR RESPONSE MESSAGE</label>
                <textarea
                  rows="5"
                  placeholder="Type your official reply here..."
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  required
                />

                <div className="support-tickets-modal-actions">
                  <button type="button" className="support-tickets-btn-cancel" onClick={handleCloseReplyModal}>
                    Cancel
                  </button>
                  <button type="submit" className="support-tickets-btn-send">
                    <FiSend /> Send Reply & Mark Resolved
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportTickets;