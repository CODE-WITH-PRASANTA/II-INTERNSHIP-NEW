import React, { useState, useRef, useEffect } from "react";
import "./Internships.css";

const InternshipsIcons = {
  Activity: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ), 
  Clock: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Building: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" />
    </svg>
  ),
  Laptop: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  Search: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Plus: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  MoreHorizontal: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
    </svg>
  ),
  Eye: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00966d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Users: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Edit: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  Trash: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  ),
  AlertTriangle: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Briefcase: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#007a55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Calendar: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  MapPin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Sparkles: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#007a55" strokeWidth="2">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  ),
  FileText: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  Layers: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  DollarSign: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Close: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Grid: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  ),
  Download: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  CheckCircle: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  XCircle: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  )
};

const initialInternships = [
  {
    id: "IN2026II81462",
    title: "FUTURE YUVA 2050: Internship-cum-Skill Enhancement Programme",
    subtitle: "International Institute of Internship",
    type: "PAID",
    creator: "SUPER_ADMIN",
    mentor: "Senior Instructor",
    duration: "7 Days (60 Hrs.) • ₹7,693",
    location: "Heartfulness Training Centre, Valsad, Gujarat",
    mode: "OFFLINE",
    status: "APPROVED"
  }
];

const dummyApplications = [
  {
    id: "APP-2026-001",
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 98765 43210",
    college: "IIT Bombay",
    course: "B.Tech Computer Science (4th Year)",
    appliedDate: "Oct 02, 2026",
    status: "Shortlisted"
  },
  {
    id: "APP-2026-002",
    name: "Pooja Patel",
    email: "pooja.patel@example.com",
    phone: "+91 98220 12345",
    college: "IIIT Hyderabad",
    course: "M.Tech Data Science (2nd Year)",
    appliedDate: "Oct 04, 2026",
    status: "Under Review"
  },
  {
    id: "APP-2026-003",
    name: "Rohan Verma",
    email: "rohan.v@example.com",
    phone: "+91 99341 55678",
    college: "NIT Trichy",
    course: "B.Tech IT (3rd Year)",
    appliedDate: "Oct 06, 2026",
    status: "Approved"
  },
  {
    id: "APP-2026-004",
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    phone: "+91 97112 34890",
    college: "BITS Pilani",
    course: "B.E. Electrical & Electronics",
    appliedDate: "Oct 08, 2026",
    status: "Rejected"
  }
];

const defaultEditDescription = `FUTURE YUVA 2050
Internship-cum-Skill Enhancement Programme
(भविष्य पुराण से भविष्य निर्माण तक)

सात दिवसीय, आवासीय आध्यात्मिक+वैज्ञानिक दृष्टिकोण+ UGC मानदंडों पर आधारित
आध्यात्मिक दृष्टि • Artificial Intelligence • Future Skills • Youth Leadership

“पुराणों की दृष्टि से भविष्य को समझें, AI की शक्ति से भविष्य को गढ़ें।”

~ कार्यक्रम दिनांक: 15 से 21 दिसंबर 2026
~ कार्यक्रम स्थल: हार्टफुलनेस प्रशिक्षण केंद्र, वलसाड़, गुजरात, भारत
~ पात्रता: अध्ययनरत/सफल स्नातक व स्नातकोत्तर विद्यार्थी/जिज्ञासु
~ क्रेडिट: 2 (60 घंटा)
~ सीट: 60

ऑनलाइन पंजीकरण लिंक: www.iiinternship.in
व्यवस्था शुल्क: आवास+भोजन+अन्य सुविधा हेतु शुल्क मात्र 7,693/- रुपए।`;

const Internships = () => {
  const [internshipsList, setInternshipsList] = useState(initialInternships);
  const [activeTab, setActiveTab] = useState("running");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Track open dropdown by item ID
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isApplicationsModalOpen, setIsApplicationsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const [appSearchTerm, setAppSearchTerm] = useState("");
  const [appFilterStatus, setAppFilterStatus] = useState("ALL");

  const [editModules, setEditModules] = useState(["AI"]);
  const [editSkills, setEditSkills] = useState([
    "प्रतिभागियों के लिए कंप्यूटर का बेसिक ज्ञान होना अनिवार्य है।"
  ]);

  const dropdownContainerRef = useRef(null);

  // Close menus on outside click or Escape
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(e.target)) {
        setOpenDropdownId(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenDropdownId(null);
        setIsCreateModalOpen(false);
        setIsDetailsModalOpen(false);
        setIsApplicationsModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scroll when modals are open
  useEffect(() => {
    const isAnyModalOpen =
      isCreateModalOpen ||
      isDetailsModalOpen ||
      isApplicationsModalOpen ||
      isEditModalOpen ||
      isDeleteModalOpen;

    document.body.style.overflow = isAnyModalOpen ? "hidden" : "unset";
  }, [
    isCreateModalOpen,
    isDetailsModalOpen,
    isApplicationsModalOpen,
    isEditModalOpen,
    isDeleteModalOpen
  ]);

  const tabs = [
    { id: "running", label: "Running Internships", icon: <InternshipsIcons.Activity /> },
    { id: "pending", label: "Pending Internships", icon: <InternshipsIcons.Clock /> },
    { id: "oncampus", label: "On Campus Internships", icon: <InternshipsIcons.Building /> },
    { id: "virtual", label: "Virtual Internships", icon: <InternshipsIcons.Laptop /> }
  ];

  const filteredInternships = internshipsList.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      item.id.toLowerCase().includes(term) ||
      item.location.toLowerCase().includes(term) ||
      item.subtitle.toLowerCase().includes(term)
    );
  });

  const filteredApplications = dummyApplications.filter((app) => {
    const term = appSearchTerm.toLowerCase();
    const matchesSearch =
      app.name.toLowerCase().includes(term) ||
      app.email.toLowerCase().includes(term) ||
      app.college.toLowerCase().includes(term) ||
      app.id.toLowerCase().includes(term);
    const matchesStatus =
      appFilterStatus === "ALL" || app.status.toUpperCase() === appFilterStatus.toUpperCase();
    return matchesSearch && matchesStatus;
  });

  const confirmDeleteInternship = () => {
    if (selectedInternship) {
      setInternshipsList((prev) => prev.filter((item) => item.id !== selectedInternship.id));
    }
    setIsDeleteModalOpen(false);
    setSelectedInternship(null);
  };

  const handleActionClick = (actionType, item) => {
    setSelectedInternship(item);
    setOpenDropdownId(null);
    if (actionType === "details") setIsDetailsModalOpen(true);
    if (actionType === "applications") setIsApplicationsModalOpen(true);
    if (actionType === "edit") setIsEditModalOpen(true);
    if (actionType === "delete") setIsDeleteModalOpen(true);
  };

  return (
    <div className="internships-root" ref={dropdownContainerRef}>
      {/* Top Header */}
      <div className="internships-header">
        <h1 className="internships-header-title">Internships Management</h1>
        <p className="internships-header-subtitle">
          Manage, inspect, and evaluate active cohort listings and applicants across running and virtual programs.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="internships-tabs-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`internships-tab-button ${activeTab === tab.id ? "internships-tab-button-active" : ""}`}
            onClick={() => {
              setActiveTab(tab.id);
              setOpenDropdownId(null);
            }}
          >
            <span className="internships-tab-button-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Search Toolbar */}
      <div className="internships-toolbar">
        <div className="internships-search-field">
          <InternshipsIcons.Search />
          <input
            type="text"
            placeholder="Search by ID, title, company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button type="button" className="internships-btn-add" onClick={() => setIsCreateModalOpen(true)}>
          <InternshipsIcons.Plus />
          <span>Add New Internship</span>
        </button>
      </div>

      {/* Data Table */}
      <div className="internships-table-container">
        <table className="internships-table">
          <thead>
            <tr>
              <th>INTERNSHIP ID</th>
              <th>OPPORTUNITY TITLE</th>
              <th>CATEGORY / TYPE</th>
              <th>CREATED BY / MENTOR</th>
              <th>DURATION / PRICING</th>
              <th>LOCATION / MODE</th>
              <th>APPROVAL STATUS</th>
              <th className="internships-table-th-actions">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {activeTab === "running" && filteredInternships.length > 0 ? (
              filteredInternships.map((item) => {
                const isOpen = openDropdownId === item.id;
                return (
                  <tr key={item.id} className={isOpen ? "row-highlighted" : ""}>
                    <td>
                      <span className="internships-badge-id">{item.id}</span>
                    </td>
                    <td>
                      <div className="internships-opp-title">{item.title}</div>
                      <div className="internships-opp-subtitle">{item.subtitle}</div>
                    </td>
                    <td>
                      <span className="internships-badge-type">{item.type}</span>
                    </td>
                    <td>
                      <div>
                        <span className="internships-badge-creator">{item.creator}</span>
                      </div>
                      <div className="internships-opp-mentor">Mentor: {item.mentor}</div>
                    </td>
                    <td>
                      <div className="internships-cell-text">{item.duration}</div>
                    </td>
                    <td>
                      <div className="internships-cell-text">{item.location}</div>
                      <div className="internships-cell-subtext">({item.mode})</div>
                    </td>
                    <td>
                      <span className="internships-badge-status-approved">{item.status}</span>
                    </td>
                    <td className="internships-table-actions-cell">
                      <button
                        type="button"
                        className={`internships-btn-action-trigger ${isOpen ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdownId(isOpen ? null : item.id);
                        }}
                        aria-label="Actions"
                        aria-expanded={isOpen}
                      >
                        <InternshipsIcons.MoreHorizontal />
                      </button>

                      {/* Backdrop for mobile drawer dismiss */}
                      {isOpen && (
                        <div 
                          className="internships-dropdown-backdrop" 
                          onClick={() => setOpenDropdownId(null)} 
                        />
                      )}

                      {/* Dropdown Menu / Mobile Bottom Sheet */}
                      <div className={`internships-dropdown-menu ${isOpen ? "internships-dropdown-menu-open" : ""}`}>
                        <div className="internships-mobile-drag-handle" />
                        <div className="internships-mobile-menu-header">
                          <span className="internships-badge-id">{item.id}</span>
                          <button 
                            type="button" 
                            className="internships-mobile-close-action"
                            onClick={() => setOpenDropdownId(null)}
                          >
                            <InternshipsIcons.Close />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="internships-dropdown-item"
                          onClick={() => handleActionClick("details", item)}
                        >
                          <InternshipsIcons.Eye />
                          <span>View Full Details</span>
                        </button>
                        <button
                          type="button"
                          className="internships-dropdown-item"
                          onClick={() => handleActionClick("applications", item)}
                        >
                          <InternshipsIcons.Users />
                          <span>View Applications</span>
                        </button>
                        <button
                          type="button"
                          className="internships-dropdown-item"
                          onClick={() => handleActionClick("edit", item)}
                        >
                          <InternshipsIcons.Edit />
                          <span>Edit Internship</span>
                        </button>
                        <button
                          type="button"
                          className="internships-dropdown-item internships-dropdown-item-danger"
                          onClick={() => handleActionClick("delete", item)}
                        >
                          <InternshipsIcons.Trash />
                          <span>Delete Internship</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className="internships-table-empty">
                  <div className="internships-empty-wrap">
                    <InternshipsIcons.Grid />
                    <span>No internships found in this section.</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {isDeleteModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsDeleteModalOpen(false)}>
          <div className="internships-modal-dialog internships-delete-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="internships-delete-modal-body">
              <div className="internships-delete-icon-wrapper">
                <InternshipsIcons.AlertTriangle />
              </div>
              <h3 className="internships-delete-title">Delete Internship Posting?</h3>
              <p className="internships-delete-text">
                Are you sure you want to delete <strong>{selectedInternship?.title || "this internship"}</strong> (ID:{" "}
                <span className="internships-delete-id-tag">{selectedInternship?.id}</span>)?
                This action cannot be undone.
              </p>
            </div>
            <div className="internships-delete-modal-footer">
              <button type="button" className="internships-btn-cancel" onClick={() => setIsDeleteModalOpen(false)}>
                Keep Internship
              </button>
              <button type="button" className="internships-btn-delete-confirm" onClick={confirmDeleteInternship}>
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {isEditModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsEditModalOpen(false)}>
          <div className="internships-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="internships-modal-header">
              <div>
                <h2 className="internships-modal-header-title">Super Admin: Edit Running Internship</h2>
                <p className="internships-modal-header-subtitle">
                  Modify details, instructor credentials, and syllabus information.
                </p>
              </div>
              <button
                type="button"
                className="internships-modal-close-btn"
                onClick={() => setIsEditModalOpen(false)}
                aria-label="Close"
              >
                <InternshipsIcons.Close />
              </button>
            </div>

            <div className="internships-modal-body">
              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.Briefcase />
                  <span className="internships-form-section-title">Basic Information</span>
                </div>
                <div className="internships-form-grid">
                  <div className="internships-field-group internships-col-span-2">
                    <label>INTERNSHIP TITLE *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Briefcase />
                      <input
                        type="text"
                        defaultValue={selectedInternship?.title || "FUTURE YUVA 2050"}
                        className="internships-input-highlighted"
                      />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>COMPANY / ORGANIZATION *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Building />
                      <input type="text" defaultValue="International Institute of Internship" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>MODE *</label>
                    <div className="internships-select-box">
                      <select defaultValue="Offline (In-Person)">
                        <option>Offline (In-Person)</option>
                        <option>Online (Virtual)</option>
                        <option>Hybrid</option>
                      </select>
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>LOCATION *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.MapPin />
                      <input type="text" defaultValue="Valsad, Gujarat, India" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>DURATION *</label>
                    <div className="internships-input-box">
                      <InternshipsIcons.Clock />
                      <input type="text" defaultValue="7 Days (60 Hrs.)" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.DollarSign />
                  <span className="internships-form-section-title">Fee & Pricing</span>
                </div>
                <div className="internships-form-grid">
                  <div className="internships-field-group">
                    <label>INTERNSHIP TYPE *</label>
                    <div className="internships-select-box">
                      <select defaultValue="Paid">
                        <option>Paid</option>
                        <option>Free</option>
                        <option>Stipend</option>
                      </select>
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>ENROLLMENT FEE (INR) *</label>
                    <div className="internships-input-box">
                      <span className="internships-currency-sym">₹</span>
                      <input type="text" defaultValue="7693" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="internships-form-section">
                <div className="internships-form-section-header">
                  <InternshipsIcons.FileText />
                  <span className="internships-form-section-title">Description</span>
                </div>
                <div className="internships-editor-wrapper">
                  <textarea
                    className="internships-editor-textarea internships-editor-textarea-large"
                    defaultValue={defaultEditDescription}
                  />
                </div>
              </div>
            </div>

            <div className="internships-modal-footer">
              <button type="button" className="internships-btn-cancel" onClick={() => setIsEditModalOpen(false)}>
                Cancel
              </button>
              <button
                type="button"
                className="internships-btn-submit"
                onClick={() => {
                  alert("Internship updated successfully!");
                  setIsEditModalOpen(false);
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* APPLICATIONS MODAL */}
      {isApplicationsModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsApplicationsModalOpen(false)}>
          <div className="internships-modal-dialog internships-applications-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="internships-modal-header">
              <div>
                <div className="internships-app-header-title-row">
                  <h2 className="internships-modal-header-title">Applications Received</h2>
                  <span className="internships-badge-id">{selectedInternship?.id}</span>
                </div>
                <p className="internships-modal-header-subtitle">
                  Cohort: {selectedInternship?.title}
                </p>
              </div>
              <button
                type="button"
                className="internships-modal-close-btn"
                onClick={() => setIsApplicationsModalOpen(false)}
                aria-label="Close"
              >
                <InternshipsIcons.Close />
              </button>
            </div>

            <div className="internships-modal-body">
              <div className="internships-app-stats-strip">
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number">{dummyApplications.length}</span>
                  <span className="internships-app-stat-tag">Total</span>
                </div>
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number stat-green">1</span>
                  <span className="internships-app-stat-tag">Approved</span>
                </div>
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number stat-indigo">1</span>
                  <span className="internships-app-stat-tag">Shortlisted</span>
                </div>
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number stat-amber">1</span>
                  <span className="internships-app-stat-tag">Under Review</span>
                </div>
                <div className="internships-app-stat-tile">
                  <span className="internships-app-stat-number stat-red">1</span>
                  <span className="internships-app-stat-tag">Rejected</span>
                </div>
              </div>

              <div className="internships-app-controls-bar">
                <div className="internships-app-search-wrap">
                  <InternshipsIcons.Search />
                  <input
                    type="text"
                    placeholder="Filter by name, email, college..."
                    value={appSearchTerm}
                    onChange={(e) => setAppSearchTerm(e.target.value)}
                  />
                </div>

                <div className="internships-app-filters-right">
                  <select
                    className="internships-app-filter-select"
                    value={appFilterStatus}
                    onChange={(e) => setAppFilterStatus(e.target.value)}
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="SHORTLISTED">Shortlisted</option>
                    <option value="UNDER REVIEW">Under Review</option>
                    <option value="APPROVED">Approved</option>
                    <option value="REJECTED">Rejected</option>
                  </select>

                  <button
                    type="button"
                    className="internships-app-btn-export"
                    onClick={() => alert("Downloading applications CSV...")}
                  >
                    <InternshipsIcons.Download />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              <div className="internships-app-table-wrapper">
                <table className="internships-app-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>CANDIDATE</th>
                      <th>COLLEGE</th>
                      <th>DATE</th>
                      <th>STATUS</th>
                      <th className="internships-table-th-actions">REVIEW ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.length > 0 ? (
                      filteredApplications.map((candidate) => (
                        <tr key={candidate.id}>
                          <td>
                            <span className="internships-app-id-tag">{candidate.id}</span>
                          </td>
                          <td>
                            <div className="internships-app-cand-name">{candidate.name}</div>
                            <div className="internships-app-cand-contact">{candidate.email}</div>
                          </td>
                          <td>
                            <div className="internships-app-college-name">{candidate.college}</div>
                            <div className="internships-app-course-name">{candidate.course}</div>
                          </td>
                          <td>
                            <span className="internships-app-date">{candidate.appliedDate}</span>
                          </td>
                          <td>
                            <span className={`internships-app-status-badge status-${candidate.status.toLowerCase().replace(/\s+/g, "-")}`}>
                              {candidate.status}
                            </span>
                          </td>
                          <td className="internships-table-actions-cell">
                            <div className="internships-app-row-actions">
                              <button
                                type="button"
                                className="internships-app-btn-status btn-approve"
                                onClick={() => alert(`Approved ${candidate.id}`)}
                              >
                                <InternshipsIcons.CheckCircle />
                                <span>Accept</span>
                              </button>
                              <button
                                type="button"
                                className="internships-app-btn-status btn-reject"
                                onClick={() => alert(`Rejected ${candidate.id}`)}
                              >
                                <InternshipsIcons.XCircle />
                                <span>Reject</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="internships-table-empty">
                          No applications match current filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="internships-modal-footer">
              <button type="button" className="internships-btn-cancel" onClick={() => setIsApplicationsModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULL DETAILS MODAL */}
      {isDetailsModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsDetailsModalOpen(false)}>
          <div className="internships-modal-dialog internships-details-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="internships-modal-header">
              <div>
                <h2 className="internships-modal-header-title">Internship Specifications</h2>
                <p className="internships-modal-header-subtitle">
                  ID: {selectedInternship?.id}
                </p>
              </div>
              <button
                type="button"
                className="internships-modal-close-btn"
                onClick={() => setIsDetailsModalOpen(false)}
                aria-label="Close"
              >
                <InternshipsIcons.Close />
              </button>
            </div>

            <div className="internships-modal-body">
              <div className="internships-payload-hero-card">
                <div className="internships-payload-hero-top">
                  <div>
                    <h3 className="internships-payload-title">{selectedInternship?.title}</h3>
                    <p className="internships-payload-subtitle">{selectedInternship?.subtitle}</p>
                  </div>
                  <div className="internships-payload-hero-right">
                    <span className="internships-badge-running">{selectedInternship?.mode}</span>
                    <span className="internships-payload-pricing-value">₹7,693</span>
                  </div>
                </div>

                <div className="internships-payload-stats-grid">
                  <div className="internships-payload-stat-item">
                    <span className="internships-payload-stat-label">Duration</span>
                    <span className="internships-payload-stat-value">7 Days (60 Hrs.)</span>
                  </div>
                  <div className="internships-payload-stat-item">
                    <span className="internships-payload-stat-label">Location</span>
                    <span className="internships-payload-stat-value">{selectedInternship?.location}</span>
                  </div>
                  <div className="internships-payload-stat-item">
                    <span className="internships-payload-stat-label">Start Date</span>
                    <span className="internships-payload-stat-value">Dec 15, 2026</span>
                  </div>
                  <div className="internships-payload-stat-item">
                    <span className="internships-payload-stat-label">Credits</span>
                    <span className="internships-payload-stat-value">2 (UGC Recognized)</span>
                  </div>
                </div>
              </div>

              <div className="internships-payload-section-card">
                <div className="internships-payload-card-title">
                  <InternshipsIcons.FileText />
                  <span>Program Description</span>
                </div>
                <div className="internships-payload-desc-box">
                  <p>{defaultEditDescription}</p>
                </div>
              </div>
            </div>

            <div className="internships-modal-footer">
              <button type="button" className="internships-btn-cancel" onClick={() => setIsDetailsModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE NEW INTERNSHIP MODAL */}
      {isCreateModalOpen && (
        <div className="internships-modal-overlay" onClick={() => setIsCreateModalOpen(false)}>
          <div className="internships-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="internships-modal-header">
              <div>
                <h2 className="internships-modal-header-title">Create Internship</h2>
                <p className="internships-modal-header-subtitle">Post a new program offering</p>
              </div>
              <button
                type="button"
                className="internships-modal-close-btn"
                onClick={() => setIsCreateModalOpen(false)}
                aria-label="Close"
              >
                <InternshipsIcons.Close />
              </button>
            </div>

            <div className="internships-modal-body">
              <div className="internships-form-section">
                <div className="internships-form-grid">
                  <div className="internships-field-group internships-col-span-2">
                    <label>INTERNSHIP TITLE *</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. Advanced AI Systems Practicum" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>DURATION *</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. 8 Weeks" />
                    </div>
                  </div>

                  <div className="internships-field-group">
                    <label>LOCATION *</label>
                    <div className="internships-input-box">
                      <input type="text" placeholder="E.g. Mumbai / Hybrid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="internships-modal-footer">
              <button type="button" className="internships-btn-cancel" onClick={() => setIsCreateModalOpen(false)}>
                Cancel
              </button>
              <button
                type="button"
                className="internships-btn-submit"
                onClick={() => {
                  alert("Created successfully!");
                  setIsCreateModalOpen(false);
                }}
              >
                Publish Program
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships;