import React, { useState, useMemo, useEffect, useRef } from 'react';
import './ImmersionPrograms.css';

// Initial Data matching reference images
const INITIAL_PROGRAMS = [
  {
    id: 'IM2026CN00514',
    title: 'Cloud Native Architectures Boot...',
    fullTitle: 'Cloud Native Architectures Boot Camp',
    category: 'EDUCATION IMMERSION',
    location: 'Delhi NCR',
    duration: '6 Week',
    fees: 'Free',
    numericFee: 0,
    status: 'active',
    instructor: 'Senior Instructor',
    description: 'Hands-on immersion program with Kubernetes, AWS, and Microservices.',
    facilities: [
      'Ashram accommodation',
      'Strictly vegetarian Satvik meals',
      'Yoga mats and instruction guide',
      'Guided visits to spiritual landmarks'
    ],
    benefits: [
      'Holistic wellness and stress management',
      'Deep understanding of Indian spiritual heritage',
      'Spiritual & Mindfulness Certificate',
      'Daily practice guidelines for post-program'
    ]
  },
  {
    id: 'IM2026RL80098',
    title: 'Rural Livelihoods & Enterprise I...',
    fullTitle: 'Rural Livelihoods & Enterprise Immersion',
    category: 'RURAL DEVELOPMENT IMMERSION',
    location: 'Rajasthan / Madhya Pradesh',
    duration: '3 Weeks',
    fees: '₹5,000',
    numericFee: 5000,
    status: 'active',
    instructor: 'Dr. Ramesh Sharma',
    description: 'Explore grassroots sustainable rural enterprise development and microfinance self-help groups.',
    facilities: ['Field stay in verified village homestays', 'Local transport', 'Translation support'],
    benefits: ['Field research credentials', 'Government NGO interaction certificate', 'Mentorship']
  },
  {
    id: 'IM2026VL68632',
    title: 'Village Life & Culture Immersion',
    fullTitle: 'Village Life & Culture Immersion',
    category: 'VILLAGE IMMERSION',
    location: 'Uttarakhand Himalayan Villages',
    duration: '2 Weeks',
    fees: '₹4,000',
    numericFee: 4000,
    status: 'active',
    instructor: 'Sunita Rawat',
    description: 'Immerse into Himalayan agrarian lifestyles, organic terrace farming, and indigenous customs.',
    facilities: ['Eco-cottage accommodation', 'Local organic cuisine', 'Trekking gear'],
    benefits: ['Cultural preservation diploma', 'Environmental sustainability credit']
  },
  {
    id: 'IM2026CE30721',
    title: 'Community Empowerment & So...',
    fullTitle: 'Community Empowerment & Social Action',
    category: 'SOCIAL WORK IMMERSION',
    location: 'Delhi NCR / Maharashtra Urban Slums',
    duration: '4 Weeks',
    fees: '₹4,500',
    numericFee: 4500,
    status: 'active',
    instructor: 'Pooja Kulkarni',
    description: 'Work with grassroot welfare organizations on urban migration, sanitation, and literacy.',
    facilities: ['Community center base', 'Local transit passes', 'Field materials'],
    benefits: ['Social audit experience', 'NGO recommendation letter', 'Accredited certificate']
  },
  {
    id: 'IM2026SR65717',
    title: 'Socio-Economic Research & Pol...',
    fullTitle: 'Socio-Economic Research & Policy Analytics',
    category: 'RESEARCH IMMERSION',
    location: 'Hybrid / Partner Academic Centers',
    duration: '6 Weeks',
    fees: '₹6,000',
    numericFee: 6000,
    status: 'active',
    instructor: 'Prof. Arvind Nambiar',
    description: 'Deep dive into real-time quantitative survey design, field pilot data, and public policy formulation.',
    facilities: ['Lab access', 'Stata/R licenses provided', 'Survey allowances'],
    benefits: ['Co-authorship opportunities', 'Policy brief portfolio item']
  },
  {
    id: 'IM2026GG35039',
    title: 'Grassroots Governance & Panc...',
    fullTitle: 'Grassroots Governance & Panchayat Admin',
    category: 'GOVERNANCE/POLICY IMMERSION',
    location: 'District Headquarters in Uttar Pradesh / Bihar',
    duration: '3 Weeks',
    fees: '₹5,500',
    numericFee: 5500,
    status: 'active',
    instructor: 'Anand Prakash, IAS (Retd.)',
    description: 'Practical analysis of Gram Sabha decision cycles, rural schemes implementation, and e-governance.',
    facilities: ['Collectorate guest house stay', 'Field inspection transport', 'Daily field stipend'],
    benefits: ['Public administration credentials', 'Official project portfolio']
  },
  {
    id: 'IM2026PE30600',
    title: 'Primary Education & Creative L...',
    fullTitle: 'Primary Education & Creative Learning Pedagogy',
    category: 'EDUCATION IMMERSION',
    location: 'Rural Karnataka / Tamil Nadu',
    duration: '4 Weeks',
    fees: '₹4,000',
    numericFee: 4000,
    status: 'active',
    instructor: 'Meenakshi Sundaram',
    description: 'Hands-on pedagogy training inside vernacular government schools developing experimental curricula.',
    facilities: ['Hostel facilities', 'Teaching aid toolkits', 'Meals included'],
    benefits: ['Education reform training badge', 'Pedagogical certification']
  },
  {
    id: 'IM2026PH11595',
    title: 'Public Health & Rural Medical C...',
    fullTitle: 'Public Health & Rural Medical Clinics Outreach',
    category: 'HEALTH & MEDICINE IMMERSION',
    location: 'Primary Health Centers in Gujarat / Kerala',
    duration: '4 Weeks',
    fees: '₹6,000',
    numericFee: 6000,
    status: 'active',
    instructor: 'Dr. Mathew Thomas',
    description: 'Observe clinical healthcare delivery, vaccination drives, and telemedicine in sub-district centers.',
    facilities: ['Hospital quarters stay', 'Medical aprons & kits', 'Sanitized commuting'],
    benefits: ['Public health clinical hours', 'Global health credential']
  },
  {
    id: 'IM2026EF75897',
    title: 'Ecology, Forestry & Sustainable...',
    fullTitle: 'Ecology, Forestry & Sustainable Agroforestry',
    category: 'NATURE & ENVIRONMENT IMMERSION',
    location: 'Western Ghats / Eco-farms in Himachal Pradesh',
    duration: '2 Weeks',
    fees: '₹5,000',
    numericFee: 5000,
    status: 'active',
    instructor: 'Kavita Menon',
    description: 'Field botany, soil conservation techniques, permaculture systems, and forest canopy study.',
    facilities: ['Eco-tents', 'Organic meals', 'Field binoculars and field guide'],
    benefits: ['Forest ecology certification', 'Hands-on agroforestry credit']
  },
  {
    id: 'IM2026HY86383',
    title: 'Heritage, Yoga & Spiritual Mindf...',
    fullTitle: 'Heritage, Yoga & Spiritual Mindfulness Retreat',
    category: 'SPIRITUAL IMMERSION',
    location: 'Rishikesh / Varanasi',
    duration: '1 Week',
    fees: '₹7,500',
    numericFee: 7500,
    status: 'active',
    instructor: 'Acharya Shankaran',
    description: 'Traditional Vedic philosophy, morning meditation, Sanskrit chants, and sacred architecture tours.',
    facilities: ['Ashram riverside stay', 'Sattvic Ayurvedic dining', 'Personal yoga kit'],
    benefits: ['Yoga Alliance accredited module', 'Mindfulness practitioner status']
  },
  {
    id: 'IM2026VI04775',
    title: 'Village Immersion',
    fullTitle: 'Village Immersion Program - Eastern UP',
    category: 'VILLAGE IMMERSION',
    location: 'Thekma, Azamgarh, UP',
    duration: '1 Month',
    fees: 'Free',
    numericFee: 0,
    status: 'upcoming',
    instructor: 'Virendra Singh',
    description: 'Upcoming exploration of rural agricultural economies and smallholder farmer empowerment.',
    facilities: ['Community stay', 'Bicycle allowance', 'Local cuisine'],
    benefits: ['Field diploma', 'Direct rural exposure certificate']
  },
  {
    id: 'IM2026SD97969',
    title: 'sdasadasf',
    fullTitle: 'Sustainable Urban Planning & Smart Transit',
    category: 'GOVERNANCE/POLICY IMMERSION',
    location: 'Delhi NCR',
    duration: '6 Week',
    fees: 'Free',
    numericFee: 0,
    status: 'upcoming',
    instructor: 'Deepak Saxena',
    description: 'Policy framework implementation study for multi-modal urban transit nodes.',
    facilities: ['Metro research passes', 'City library access'],
    benefits: ['Urban policy certificate']
  },
  {
    id: 'IM2026HG00256',
    title: 'hggghgg',
    fullTitle: 'Higher Secondary Digital Literacy Initiative',
    category: 'EDUCATION IMMERSION',
    location: 'ddddddddd',
    duration: '1 Month',
    fees: '₹4',
    numericFee: 4,
    status: 'upcoming',
    instructor: 'Instructor X',
    description: 'Community tech teaching project.',
    facilities: ['Tablet workstation access'],
    benefits: ['Digital educator credential']
  }
];

const CATEGORIES_LIST = [
  'Education Immersion',
  'Ggh',
  'Governance/Policy Immersion',
  'Health & Medicine Immersion',
  'NGO Field Immersion',
  'Nature & Environment Immer...',
  'Other',
  'Research Immersion',
  'Rural Development Immersion',
  'Social Work Immersion',
  'Spiritual Immersion',
  'Village Immersion'
];

const ImmersionPrograms = () => {
  // States
  const [programs, setPrograms] = useState(INITIAL_PROGRAMS);
  const [activeTab, setActiveTab] = useState('active'); // 'active' | 'upcoming' | 'completed'
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modals state
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openProgramModal, setOpenProgramModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openApplicationsModal, setOpenApplicationsModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Dropdown menu state
  const [activeMenuId, setActiveMenuId] = useState(null);
  const menuRef = useRef(null);

  // Form states
  const [newCategoryName, setNewCategoryName] = useState('');
  const [programForm, setProgramForm] = useState({
    title: '',
    location: '',
    duration: '',
    category: '',
    fees: '',
    instructor: '',
    description: '',
    facilities: '',
    benefits: ''
  });

  // Handle outside click for 3-dot dropdown menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Category filter toggling
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  // Filter logic
  const filteredPrograms = useMemo(() => {
    return programs.filter((prog) => {
      if (prog.status !== activeTab) return false;

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesId = prog.id.toLowerCase().includes(q);
        const matchesTitle = (prog.title + ' ' + (prog.fullTitle || '')).toLowerCase().includes(q);
        const matchesCat = prog.category.toLowerCase().includes(q);
        const matchesLoc = prog.location.toLowerCase().includes(q);
        if (!matchesId && !matchesTitle && !matchesCat && !matchesLoc) return false;
      }

      if (selectedCategories.length > 0) {
        const matchesCat = selectedCategories.some((cat) => {
          const cleanCat = cat.replace('...', '').toLowerCase().trim();
          return prog.category.toLowerCase().includes(cleanCat);
        });
        if (!matchesCat) return false;
      }

      return true;
    });
  }, [programs, activeTab, searchQuery, selectedCategories]);

  // Pagination logic
  const totalPages = Math.max(1, Math.ceil(filteredPrograms.length / rowsPerPage));
  const displayedPrograms = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredPrograms.slice(start, start + rowsPerPage);
  }, [filteredPrograms, currentPage, rowsPerPage]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setActiveMenuId(null);
  };

  // Form submit actions
  const handleCreateCategory = (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    CATEGORIES_LIST.push(newCategoryName.trim());
    setNewCategoryName('');
    setOpenCategoryModal(false);
  };

  const handleCreateProgram = (e) => {
    e.preventDefault();
    if (!programForm.title.trim()) return;

    const newProg = {
      id: `IM2026${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      title: programForm.title.length > 32 ? programForm.title.substring(0, 30) + '...' : programForm.title,
      fullTitle: programForm.title,
      category: (programForm.category || 'Education Immersion').toUpperCase(),
      location: programForm.location || 'Delhi NCR',
      duration: programForm.duration || '4 Weeks',
      fees: programForm.fees && Number(programForm.fees) > 0 ? `₹${Number(programForm.fees).toLocaleString('en-IN')}` : 'Free',
      numericFee: Number(programForm.fees) || 0,
      status: activeTab === 'completed' ? 'active' : activeTab,
      instructor: programForm.instructor || 'Senior Instructor',
      description: programForm.description || 'Immersion program specifications.',
      facilities: programForm.facilities
        ? programForm.facilities.split(',').map((s) => s.trim())
        : ['Accommodation provided', 'Study kit'],
      benefits: programForm.benefits
        ? programForm.benefits.split(',').map((s) => s.trim())
        : ['Certification', 'Mentorship']
    };

    setPrograms([newProg, ...programs]);
    setProgramForm({
      title: '',
      location: '',
      duration: '',
      category: '',
      fees: '',
      instructor: '',
      description: '',
      facilities: '',
      benefits: ''
    });
    setOpenProgramModal(false);
  };

  const handleDeleteProgram = (id) => {
    setPrograms((prev) => prev.filter((p) => p.id !== id));
    setActiveMenuId(null);
  };

  return (
    <div className="ImmersionPrograms-container">
      {/* Header */}
      <header className="ImmersionPrograms-header">
        <div className="ImmersionPrograms-header__titles">
          <h1 className="ImmersionPrograms-header__title">Immersion Programs Catalog</h1>
          <p className="ImmersionPrograms-header__subtitle">
            Manage your available immersion programs — view, publish new offerings, edit, or delete them.
          </p>
        </div>

        <div className="ImmersionPrograms-header__actions">
          <button
            type="button"
            className="ImmersionPrograms-btn ImmersionPrograms-btn--category"
            onClick={() => setOpenCategoryModal(true)}
          >
            <span className="ImmersionPrograms-btn__icon">+</span> Add Category
          </button>
          <button
            type="button"
            className="ImmersionPrograms-btn ImmersionPrograms-btn--program"
            onClick={() => setOpenProgramModal(true)}
          >
            <span className="ImmersionPrograms-btn__icon">+</span> Add Program
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="ImmersionPrograms-tabs" aria-label="Immersion Status Tabs">
        <button
          type="button"
          className={`ImmersionPrograms-tabs__item ${activeTab === 'active' ? 'ImmersionPrograms-tabs__item--active' : ''}`}
          onClick={() => handleTabSwitch('active')}
        >
          <svg className="ImmersionPrograms-tabs__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          <span>Active Immersions</span>
        </button>

        <button
          type="button"
          className={`ImmersionPrograms-tabs__item ${activeTab === 'upcoming' ? 'ImmersionPrograms-tabs__item--active' : ''}`}
          onClick={() => handleTabSwitch('upcoming')}
        >
          <svg className="ImmersionPrograms-tabs__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Upcoming Immersions</span>
        </button>

        <button
          type="button"
          className={`ImmersionPrograms-tabs__item ${activeTab === 'completed' ? 'ImmersionPrograms-tabs__item--active' : ''}`}
          onClick={() => handleTabSwitch('completed')}
        >
          <svg className="ImmersionPrograms-tabs__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Completed Immersions</span>
        </button>
      </nav>

      {/* Main Container Layout */}
      <div className="ImmersionPrograms-content">
        {/* Left Filter Sidebar */}
        {showFilters && (
          <aside className="ImmersionPrograms-sidebar">
            <h3 className="ImmersionPrograms-sidebar__heading">Category</h3>
            <div className="ImmersionPrograms-sidebar__list">
              {CATEGORIES_LIST.map((category) => (
                <label key={category} className="ImmersionPrograms-sidebar__item">
                  <input
                    type="checkbox"
                    className="ImmersionPrograms-sidebar__checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                  />
                  <span className="ImmersionPrograms-sidebar__text">{category}</span>
                </label>
              ))}
            </div>
          </aside>
        )}

        {/* Right Table Section */}
        <main className="ImmersionPrograms-main">
          {/* Controls Bar */}
          <div className="ImmersionPrograms-controls">
            <button
              type="button"
              className="ImmersionPrograms-controls__btn-filter"
              onClick={() => setShowFilters((prev) => !prev)}
            >
              <svg className="ImmersionPrograms-controls__filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            </button>

            <div className="ImmersionPrograms-controls__search">
              <svg className="ImmersionPrograms-controls__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="ImmersionPrograms-controls__search-input"
                placeholder="Search by ID, title, category or location"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          {/* Table or Empty State */}
          {displayedPrograms.length === 0 ? (
            <div className="ImmersionPrograms-empty">
              <svg className="ImmersionPrograms-empty__icon" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <p className="ImmersionPrograms-empty__text">No results found.</p>
            </div>
          ) : (
            <div className="ImmersionPrograms-table-responsive">
              <table className="ImmersionPrograms-table">
                <thead>
                  <tr className="ImmersionPrograms-table__header-row">
                    <th style={{ width: '18%' }}>IMMERSION PROGRAM ID</th>
                    <th style={{ width: '32%' }}>PROGRAM TITLE</th>
                    <th style={{ width: '26%' }}>LOCATION</th>
                    <th style={{ width: '12%' }}>DURATION</th>
                    <th style={{ width: '8%' }}>FEES</th>
                    <th style={{ width: '4%', textAlign: 'center' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {displayedPrograms.map((prog) => (
                    <tr key={prog.id} className="ImmersionPrograms-table__body-row">
                      {/* ID Badge */}
                      <td className="ImmersionPrograms-table__cell-id">
                        <span className="ImmersionPrograms-badge-id">{prog.id}</span>
                      </td>

                      {/* Title & Category */}
                      <td className="ImmersionPrograms-table__cell-title">
                        <div className="ImmersionPrograms-title-text" title={prog.fullTitle || prog.title}>
                          {prog.title}
                        </div>
                        <div className="ImmersionPrograms-category-tag">{prog.category}</div>
                      </td>

                      {/* Location */}
                      <td className="ImmersionPrograms-table__cell-location">{prog.location}</td>

                      {/* Duration */}
                      <td className="ImmersionPrograms-table__cell-duration">{prog.duration}</td>

                      {/* Fees */}
                      <td className="ImmersionPrograms-table__cell-fees">
                        <span className="ImmersionPrograms-fees-text">{prog.fees}</span>
                      </td>

                      {/* Action Menu */}
                      <td className="ImmersionPrograms-table__cell-actions">
                        <div className="ImmersionPrograms-menu-container">
                          <button
                            type="button"
                            className="ImmersionPrograms-menu-trigger"
                            onClick={() =>
                              setActiveMenuId((prev) => (prev === prog.id ? null : prog.id))
                            }
                            aria-label="Actions"
                          >
                            •••
                          </button>

                          {activeMenuId === prog.id && (
                            <div className="ImmersionPrograms-menu-dropdown" ref={menuRef}>
                              <button
                                type="button"
                                className="ImmersionPrograms-menu-dropdown__item"
                                onClick={() => {
                                  setSelectedProgram(prog);
                                  setOpenDetailsModal(true);
                                  setActiveMenuId(null);
                                }}
                              >
                                View full details
                              </button>
                              <button
                                type="button"
                                className="ImmersionPrograms-menu-dropdown__item"
                                onClick={() => {
                                  setSelectedProgram(prog);
                                  setOpenApplicationsModal(true);
                                  setActiveMenuId(null);
                                }}
                              >
                                View application
                              </button>
                              <button
                                type="button"
                                className="ImmersionPrograms-menu-dropdown__item"
                                onClick={() => {
                                  setProgramForm({
                                    title: prog.fullTitle || prog.title,
                                    location: prog.location,
                                    duration: prog.duration,
                                    category: prog.category,
                                    fees: prog.numericFee?.toString() || '0',
                                    instructor: prog.instructor || '',
                                    description: prog.description || '',
                                    facilities: prog.facilities ? prog.facilities.join(', ') : '',
                                    benefits: prog.benefits ? prog.benefits.join(', ') : ''
                                  });
                                  setOpenProgramModal(true);
                                  setActiveMenuId(null);
                                }}
                              >
                                Edit program
                              </button>
                              <button
                                type="button"
                                className="ImmersionPrograms-menu-dropdown__item ImmersionPrograms-menu-dropdown__item--delete"
                                onClick={() => handleDeleteProgram(prog.id)}
                              >
                                Delete program
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination Controls */}
          {filteredPrograms.length > 0 && (
            <footer className="ImmersionPrograms-pagination">
              <div className="ImmersionPrograms-pagination__rows">
                <span className="ImmersionPrograms-pagination__label">Rows per page</span>
                <select
                  className="ImmersionPrograms-pagination__select"
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>

              <div className="ImmersionPrograms-pagination__nav">
                <span className="ImmersionPrograms-pagination__page-info">
                  Page {currentPage} of {totalPages}
                </span>
                <div className="ImmersionPrograms-pagination__buttons">
                  <button
                    type="button"
                    className="ImmersionPrograms-pagination__arrow"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(1)}
                    title="First Page"
                  >
                    «
                  </button>
                  <button
                    type="button"
                    className="ImmersionPrograms-pagination__arrow"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    title="Previous Page"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="ImmersionPrograms-pagination__arrow"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    title="Next Page"
                  >
                    ›
                  </button>
                  <button
                    type="button"
                    className="ImmersionPrograms-pagination__arrow"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                    title="Last Page"
                  >
                    »
                  </button>
                </div>
              </div>
            </footer>
          )}
        </main>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODAL 1: Create Immersion Category                            */}
      {/* ------------------------------------------------------------- */}
      {openCategoryModal && (
        <div className="ImmersionPrograms-modal-overlay" onClick={() => setOpenCategoryModal(false)}>
          <div
            className="ImmersionPrograms-modal-box ImmersionPrograms-modal-box--sm"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="ImmersionPrograms-modal-header">
              <h2 className="ImmersionPrograms-modal-title">Create Immersion Category</h2>
              <button
                type="button"
                className="ImmersionPrograms-modal-close"
                onClick={() => setOpenCategoryModal(false)}
              >
                ✕
              </button>
            </div>
            <p className="ImmersionPrograms-modal-subtitle">
              Add a new domain category for immersion program organization.
            </p>

            <form onSubmit={handleCreateCategory}>
              <div className="ImmersionPrograms-form-group">
                <label className="ImmersionPrograms-form-label">Category Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rural Development Immersion"
                  className="ImmersionPrograms-form-input"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="ImmersionPrograms-modal-actions">
                <button
                  type="button"
                  className="ImmersionPrograms-modal-btn ImmersionPrograms-modal-btn--cancel"
                  onClick={() => setOpenCategoryModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ImmersionPrograms-modal-btn ImmersionPrograms-modal-btn--submit"
                >
                  Create Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL 2: Create / Edit Immersion Program                      */}
      {/* ------------------------------------------------------------- */}
      {openProgramModal && (
        <div className="ImmersionPrograms-modal-overlay" onClick={() => setOpenProgramModal(false)}>
          <div
            className="ImmersionPrograms-modal-box ImmersionPrograms-modal-box--lg"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="ImmersionPrograms-modal-header">
              <h2 className="ImmersionPrograms-modal-title">Create Immersion Program</h2>
              <button
                type="button"
                className="ImmersionPrograms-modal-close"
                onClick={() => setOpenProgramModal(false)}
              >
                ✕
              </button>
            </div>
            <p className="ImmersionPrograms-modal-subtitle">
              Fill out the fields to publish this program catalog.
            </p>

            <form onSubmit={handleCreateProgram} className="ImmersionPrograms-modal-scroll">
              <div className="ImmersionPrograms-form-group">
                <label className="ImmersionPrograms-form-label">PROGRAM TITLE *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cloud Native Architectures Boot Camp"
                  className="ImmersionPrograms-form-input"
                  value={programForm.title}
                  onChange={(e) => setProgramForm({ ...programForm, title: e.target.value })}
                />
              </div>

              <div className="ImmersionPrograms-form-grid">
                <div className="ImmersionPrograms-form-group">
                  <label className="ImmersionPrograms-form-label">LOCATION *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi NCR"
                    className="ImmersionPrograms-form-input"
                    value={programForm.location}
                    onChange={(e) => setProgramForm({ ...programForm, location: e.target.value })}
                  />
                </div>
                <div className="ImmersionPrograms-form-group">
                  <label className="ImmersionPrograms-form-label">DURATION *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 6 Weeks"
                    className="ImmersionPrograms-form-input"
                    value={programForm.duration}
                    onChange={(e) => setProgramForm({ ...programForm, duration: e.target.value })}
                  />
                </div>
              </div>

              <div className="ImmersionPrograms-form-grid">
                <div className="ImmersionPrograms-form-group">
                  <label className="ImmersionPrograms-form-label">CATEGORY *</label>
                  <select
                    className="ImmersionPrograms-form-input ImmersionPrograms-form-select"
                    value={programForm.category}
                    onChange={(e) => setProgramForm({ ...programForm, category: e.target.value })}
                  >
                    <option value="">Select Category...</option>
                    {CATEGORIES_LIST.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="ImmersionPrograms-form-group">
                  <label className="ImmersionPrograms-form-label">FEES (INR) *</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="ImmersionPrograms-form-input"
                    value={programForm.fees}
                    onChange={(e) => setProgramForm({ ...programForm, fees: e.target.value })}
                  />
                </div>
              </div>

              <div className="ImmersionPrograms-form-group">
                <label className="ImmersionPrograms-form-label">ASSIGNED INSTRUCTOR</label>
                <select
                  className="ImmersionPrograms-form-input ImmersionPrograms-form-select"
                  value={programForm.instructor}
                  onChange={(e) => setProgramForm({ ...programForm, instructor: e.target.value })}
                >
                  <option value="">Select Instructor (Optional)...</option>
                  <option value="Senior Instructor">Senior Instructor</option>
                  <option value="Dr. Ramesh Sharma">Dr. Ramesh Sharma</option>
                  <option value="Prof. Arvind Nambiar">Prof. Arvind Nambiar</option>
                  <option value="Acharya Shankaran">Acharya Shankaran</option>
                </select>
              </div>

              {/* Rich Text Editor Toolbar Mockup */}
              <div className="ImmersionPrograms-form-group">
                <label className="ImmersionPrograms-form-label">DESCRIPTION *</label>
                <div className="ImmersionPrograms-editor">
                  <div className="ImmersionPrograms-editor__toolbar">
                    <button type="button" className="ImmersionPrograms-editor__tool">B</button>
                    <button type="button" className="ImmersionPrograms-editor__tool" style={{ fontStyle: 'italic' }}>I</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">H₂</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">H₃</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">P</button>
                    <span className="ImmersionPrograms-editor__sep">|</span>
                    <button type="button" className="ImmersionPrograms-editor__tool">☰</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">☲</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">❝❞</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">&lt;&gt;</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">—</button>
                    <span className="ImmersionPrograms-editor__sep">|</span>
                    <button type="button" className="ImmersionPrograms-editor__tool">🔗</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">Tₓ</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">↺</button>
                    <button type="button" className="ImmersionPrograms-editor__tool">↻</button>
                    <span className="ImmersionPrograms-editor__html">&lt;&gt; HTML</span>
                  </div>
                  <textarea
                    rows={5}
                    placeholder="Write your article..."
                    className="ImmersionPrograms-editor__area"
                    value={programForm.description}
                    onChange={(e) => setProgramForm({ ...programForm, description: e.target.value })}
                  />
                  <div className="ImmersionPrograms-editor__hint">
                    Tip: Use toolbar or keyboard shortcuts — Ctrl+B Bold, Ctrl+I Italic. Switch to HTML view for raw editing.
                  </div>
                </div>
              </div>

              <div className="ImmersionPrograms-form-group">
                <label className="ImmersionPrograms-form-label">FACILITIES (COMMA-SEPARATED)</label>
                <input
                  type="text"
                  placeholder="Accommodation, Field Guide, Special Equipment"
                  className="ImmersionPrograms-form-input"
                  value={programForm.facilities}
                  onChange={(e) => setProgramForm({ ...programForm, facilities: e.target.value })}
                />
              </div>

              <div className="ImmersionPrograms-form-group">
                <label className="ImmersionPrograms-form-label">BENEFITS (COMMA-SEPARATED)</label>
                <input
                  type="text"
                  placeholder="Curriculum credits, Industry Exposure, Certification"
                  className="ImmersionPrograms-form-input"
                  value={programForm.benefits}
                  onChange={(e) => setProgramForm({ ...programForm, benefits: e.target.value })}
                />
              </div>

              <div className="ImmersionPrograms-modal-actions ImmersionPrograms-modal-actions--border">
                <button
                  type="button"
                  className="ImmersionPrograms-modal-btn ImmersionPrograms-modal-btn--cancel"
                  onClick={() => setOpenProgramModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ImmersionPrograms-modal-btn ImmersionPrograms-modal-btn--submit"
                >
                  Create Program
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL 3: Program Catalog Details                              */}
      {/* ------------------------------------------------------------- */}
      {openDetailsModal && selectedProgram && (
        <div className="ImmersionPrograms-modal-overlay" onClick={() => setOpenDetailsModal(false)}>
          <div
            className="ImmersionPrograms-modal-box ImmersionPrograms-modal-box--details"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="ImmersionPrograms-modal-header">
              <div className="ImmersionPrograms-details-title-row">
                <svg className="ImmersionPrograms-details-info-icon" viewBox="0 0 24 24" fill="none" stroke="#008F68" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <h2 className="ImmersionPrograms-modal-title">Program Catalog Details</h2>
              </div>
              <button
                type="button"
                className="ImmersionPrograms-modal-close"
                onClick={() => setOpenDetailsModal(false)}
              >
                ✕
              </button>
            </div>
            <p className="ImmersionPrograms-modal-subtitle">
              View full specifications of the published immersion program catalog.
            </p>

            <div className="ImmersionPrograms-modal-scroll">
              {/* Program Overview Banner */}
              <div className="ImmersionPrograms-card-banner">
                <div className="ImmersionPrograms-card-banner__badges">
                  <span className="ImmersionPrograms-badge-category">{selectedProgram.category}</span>
                  <span className="ImmersionPrograms-badge-active">
                    {selectedProgram.status ? selectedProgram.status.toUpperCase() : 'ACTIVE'}
                  </span>
                </div>
                <h3 className="ImmersionPrograms-card-banner__name">
                  {selectedProgram.fullTitle || selectedProgram.title}
                </h3>
              </div>

              {/* 2x2 Specifications Grid */}
              <div className="ImmersionPrograms-specs-grid">
                <div className="ImmersionPrograms-spec-card">
                  <div className="ImmersionPrograms-spec-card__icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#64748B" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="ImmersionPrograms-spec-card__label">LOCATION</div>
                    <div className="ImmersionPrograms-spec-card__value">{selectedProgram.location}</div>
                  </div>
                </div>

                <div className="ImmersionPrograms-spec-card">
                  <div className="ImmersionPrograms-spec-card__icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#64748B" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <div className="ImmersionPrograms-spec-card__label">DURATION / PERIOD</div>
                    <div className="ImmersionPrograms-spec-card__value">{selectedProgram.duration}</div>
                  </div>
                </div>

                <div className="ImmersionPrograms-spec-card">
                  <div className="ImmersionPrograms-spec-card__icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#008F68" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <div className="ImmersionPrograms-spec-card__label">PROGRAM FEES</div>
                    <div className="ImmersionPrograms-spec-card__value ImmersionPrograms-spec-card__value--green">
                      {selectedProgram.fees}
                    </div>
                  </div>
                </div>

                <div className="ImmersionPrograms-spec-card">
                  <div className="ImmersionPrograms-spec-card__icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#64748B" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <div className="ImmersionPrograms-spec-card__label">INSTRUCTOR PROFILE</div>
                    <div className="ImmersionPrograms-spec-card__value">{selectedProgram.instructor || 'Senior Instructor'}</div>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="ImmersionPrograms-section-block">
                <div className="ImmersionPrograms-section-heading">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1E293B" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <h4>DESCRIPTION</h4>
                </div>
                <div className="ImmersionPrograms-description-box">
                  {selectedProgram.description || 'Hands-on immersion program with Kubernetes, AWS, and Microservices.'}
                </div>
              </div>

              {/* Facilities & Benefits Lists */}
              <div className="ImmersionPrograms-features-grid">
                <div>
                  <div className="ImmersionPrograms-section-heading">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1E293B" strokeWidth="2">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                    <h4>FACILITIES PROVIDED</h4>
                  </div>
                  <div className="ImmersionPrograms-list-card">
                    <ul className="ImmersionPrograms-bullet-list">
                      {(selectedProgram.facilities || []).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="ImmersionPrograms-section-heading">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1E293B" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <h4>PROGRAM BENEFITS</h4>
                  </div>
                  <div className="ImmersionPrograms-list-card">
                    <ul className="ImmersionPrograms-bullet-list">
                      {(selectedProgram.benefits || []).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL 4: View Enrolled Applications                           */}
      {/* ------------------------------------------------------------- */}
      {openApplicationsModal && selectedProgram && (
        <div className="ImmersionPrograms-modal-overlay" onClick={() => setOpenApplicationsModal(false)}>
          <div
            className="ImmersionPrograms-modal-box ImmersionPrograms-modal-box--lg"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="ImmersionPrograms-modal-header">
              <h2 className="ImmersionPrograms-modal-title">Enrolled Applications</h2>
              <button
                type="button"
                className="ImmersionPrograms-modal-close"
                onClick={() => setOpenApplicationsModal(false)}
              >
                ✕
              </button>
            </div>
            <p className="ImmersionPrograms-modal-subtitle">
              Candidates who have applied for <strong>{selectedProgram.fullTitle || selectedProgram.title}</strong>
            </p>

            <div className="ImmersionPrograms-modal-scroll">
              <table className="ImmersionPrograms-table" style={{ marginTop: '10px' }}>
                <thead>
                  <tr className="ImmersionPrograms-table__header-row">
                    <th>APPLICANT</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ImmersionPrograms-table__body-row">
                    <td><strong>Rohan Verma</strong></td>
                    <td>rohan.v@example.com</td>
                    <td><span className="ImmersionPrograms-badge-active">VERIFIED</span></td>
                    <td>2026-08-12</td>
                  </tr>
                  <tr className="ImmersionPrograms-table__body-row">
                    <td><strong>Ananya Sen</strong></td>
                    <td>ananya.sen@univ.edu</td>
                    <td><span className="ImmersionPrograms-badge-category">PENDING REVIEW</span></td>
                    <td>2026-08-15</td>
                  </tr>
                  <tr className="ImmersionPrograms-table__body-row">
                    <td><strong>Karthik Reddy</strong></td>
                    <td>karthik.r@techcorp.in</td>
                    <td><span className="ImmersionPrograms-badge-active">APPROVED</span></td>
                    <td>2026-08-18</td>
                  </tr>
                </tbody>
              </table>

              <div className="ImmersionPrograms-modal-actions ImmersionPrograms-modal-actions--border" style={{ marginTop: '24px' }}>
                <button
                  type="button"
                  className="ImmersionPrograms-modal-btn ImmersionPrograms-modal-btn--cancel"
                  onClick={() => setOpenApplicationsModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImmersionPrograms;