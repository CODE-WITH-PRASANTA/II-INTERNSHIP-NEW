import React, { useState, useRef, useEffect } from 'react';
import { 
  FiBriefcase, 
  FiGift, 
  FiStar, 
  FiTv, 
  FiFilter, 
  FiGrid, 
  FiList, 
  FiBookmark, 
  FiChevronDown, 
  FiTag, 
  FiX, 
  FiMapPin 
} from 'react-icons/fi';
import './BrowseInternships.css';

const initialInternships = [
  {
    id: 1,
    code: 'IN2026T327328',
    title: 'Research In Humanity Program',
    company: 'I3',
    badges: [
      { text: 'FULL TIME', type: 'purple' },
      { text: 'FREE OF COST', type: 'green' },
      { text: 'NR', type: 'orange' },
      { text: 'HUMANITY', type: 'cyan' }
    ],
    description: 'fsbv et EFWR wt4 v4wtt wrtrt trgr ar&nbsp;जववाद जस से जीव&nbsp;देवी विश्वास है व पूची है इस बहस&nbsp;वेयाक नाहि&nbsp;',
    fee: 'Free',
    status: 'apply',
    saved: false,
    category: 'Humanity',
    mode: 'Full Time',
    date: '2026-08-30'
  },
  {
    id: 2,
    code: 'IN2026T157463',
    title: 'Smart Web Developer Internship- Coding To Careers',
    company: 'International Institute of Internship',
    badges: [
      { text: 'FULL TIME', type: 'purple' },
      { text: 'BY PAYING FEES', type: 'green' },
      { text: 'RESIDENTIAL', type: 'orange' },
      { text: 'COMPUTER SCIENCE', type: 'cyan' }
    ],
    description: 'Website Development Internship Program Lead: Learnify, Lucknow Organized by: International Institute of Internship, Thekma, Azamgarh Internship Location: Comptech Computer...',
    fee: '₹1',
    status: 'enrolled',
    saved: false,
    category: 'Computer Science',
    mode: 'Full Time',
    date: '2026-08-28'
  },
  {
    id: 3,
    code: 'IN2026TC82168',
    title: 'software',
    company: 'IIIT Center of Excellence',
    badges: [
      { text: 'FULL TIME', type: 'purple' },
      { text: 'BY PAYING FEES', type: 'green' },
      { text: 'NON-RESIDENTIAL', type: 'orange' },
      { text: 'ENGINEERING', type: 'cyan' }
    ],
    description: 'sanjknmf dsnfkldsflkmf n kldslkfllsdkf',
    fee: '₹1',
    status: 'enrolled',
    saved: true,
    category: 'Engineering',
    mode: 'Full Time',
    date: '2026-08-25'
  },
  {
    id: 4,
    code: 'IN2026TC47885',
    title: 'sdhkkdsknfds,nbls',
    company: 'IIIT Center of Excellence',
    badges: [
      { text: 'FULL TIME', type: 'purple' },
      { text: 'STIPEND', type: 'green' },
      { text: 'NON-RESIDENTIAL', type: 'orange' },
      { text: 'ENGINEERING', type: 'cyan' }
    ],
    description: 'dwasdadsafdsfdsfsdfsdfsdffd',
    fee: 'Free',
    status: 'enrolled',
    saved: false,
    category: 'Engineering',
    mode: 'Full Time',
    date: '2026-08-20'
  },
  {
    id: 5,
    code: 'IN2026SA60096',
    title: 'ssajhsa',
    company: 'sabdn',
    badges: [
      { text: 'FULL TIME', type: 'purple' },
      { text: 'FREE OF COST', type: 'green' },
      { text: 'NON-RESIDENTIAL', type: 'orange' },
      { text: 'JHDASJHD', type: 'cyan' }
    ],
    description: 'jsabmnasdb',
    fee: 'Free',
    status: 'under_review',
    saved: false,
    category: 'Others',
    mode: 'Full Time',
    date: '2026-08-15'
  },
  {
    id: 6,
    code: 'IN2026HTB1251',
    title: 'Cloud Computing & DevOps Practice',
    company: 'Hilux Technologies',
    badges: [
      { text: 'VIRTUAL', type: 'purple' },
      { text: 'FREE OF COST', type: 'green' },
      { text: 'NON-RESIDENTIAL', type: 'orange' }
    ],
    description: 'Practical deployment pipelines, Docker containerization, and AWS infrastructure management.',
    fee: 'Free',
    status: 'enrolled',
    saved: true,
    category: 'Computer Science',
    mode: 'Virtual',
    date: '2026-08-10'
  },
  {
    id: 7,
    code: 'IN2026HTB4132',
    title: 'Full Stack Web Development (Free Tier)',
    company: 'CodeHub Academy',
    badges: [
      { text: 'FULL TIME', type: 'purple' },
      { text: 'FREE OF COST', type: 'green' },
      { text: 'RESIDENTIAL', type: 'orange' }
    ],
    description: 'Learn modern React, Node.js, and MongoDB with hands-on live project building.',
    fee: 'Free',
    status: 'apply',
    saved: false,
    category: 'Computer Science',
    mode: 'Full Time',
    date: '2026-08-01'
  }
];

const categoriesList = ['All Categories', 'Humanity', 'Computer Science', 'Engineering', 'Others'];
const modesList = ['All Modes', 'Full Time', 'Virtual', 'Part Time'];
const sortList = ['Newest First', 'Oldest First', 'Fee: Low to High', 'Fee: High to Low'];

const BrowseInternships = () => {
  const [internships, setInternships] = useState(initialInternships);
  const [viewLayout, setViewLayout] = useState('grid');

  const [showFilterPopover, setShowFilterPopover] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedMode, setSelectedMode] = useState('All Modes');
  const [selectedSort, setSelectedSort] = useState('Newest First');
  const [filterFees, setFilterFees] = useState({ free: true, paid: true });

  const [selectedDetail, setSelectedDetail] = useState(null);

  const filterRef = useRef(null);
  const categoryRef = useRef(null);
  const modeRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) setShowFilterPopover(false);
      if (categoryRef.current && !categoryRef.current.contains(e.target)) setShowCategoryDropdown(false);
      if (modeRef.current && !modeRef.current.contains(e.target)) setShowModeDropdown(false);
      if (sortRef.current && !sortRef.current.contains(e.target)) setShowSortDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSave = (id) => {
    setInternships(prev => prev.map(item => item.id === id ? { ...item, saved: !item.saved } : item));
  };

  const handleApply = (id) => {
    setInternships(prev => prev.map(item => item.id === id ? { ...item, status: 'under_review' } : item));
    if (selectedDetail && selectedDetail.id === id) {
      setSelectedDetail(prev => ({ ...prev, status: 'under_review' }));
    }
  };

  const processedInternships = internships
    .filter(item => {
      if (selectedCategory !== 'All Categories' && item.category !== selectedCategory) return false;
      if (selectedMode !== 'All Modes' && item.mode !== selectedMode) return false;
      const isFree = item.fee === 'Free';
      if (!filterFees.free && isFree) return false;
      if (!filterFees.paid && !isFree) return false;
      return true;
    })
    .sort((a, b) => {
      if (selectedSort === 'Newest First') return new Date(b.date) - new Date(a.date);
      if (selectedSort === 'Oldest First') return new Date(a.date) - new Date(b.date);
      if (selectedSort === 'Fee: Low to High') return (a.fee === 'Free' ? 0 : 1) - (b.fee === 'Free' ? 0 : 1);
      if (selectedSort === 'Fee: High to Low') return (b.fee === 'Free' ? 0 : 1) - (a.fee === 'Free' ? 0 : 1);
      return 0;
    });

  const totalCount = internships.length;
  const freeCount = internships.filter(i => i.fee === 'Free').length;
  const paidCount = internships.filter(i => i.fee !== 'Free').length;
  const remoteCount = internships.filter(i => i.mode === 'Virtual' || i.badges.some(b => b.text === 'VIRTUAL')).length;

  return (
    <div className="BrowseInternships-container">
      {/* Top Header Section */}
      <div className="BrowseInternships-header">
        <div className="BrowseInternships-header-text">
          <h1>Browse Internships</h1>
          <p>Discover opportunities and apply to kick-start your career.</p>
        </div>
        <div className="BrowseInternships-illustration-wrapper">
          <svg className="BrowseInternships-vector-art" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Arch */}
            <path d="M20 120 C 20 50, 180 50, 180 120 Z" fill="#e6f4ef" />
            
            {/* Confetti Dots */}
            <circle cx="25" cy="55" r="3" fill="#60a5fa" />
            <circle cx="15" cy="85" r="2.5" fill="#f59e0b" />
            <circle cx="190" cy="65" r="2.5" fill="#f43f5e" />
            <circle cx="175" cy="40" r="2" fill="#10b981" />

            {/* Briefcase Base */}
            <rect x="55" y="32" width="80" height="58" rx="8" fill="#015237" />
            
            {/* Briefcase Strap Details */}
            <rect x="75" y="32" width="6" height="58" fill="#013d29" />
            <rect x="109" y="32" width="6" height="58" fill="#013d29" />
            
            {/* Briefcase Handle */}
            <path d="M83 32 V 22 C 83 18, 107 18, 107 22 V 32" stroke="#015237" strokeWidth="5" strokeLinecap="round" fill="none" />
            
            {/* Lock Buckles */}
            <rect x="73" y="58" width="10" height="8" rx="2" fill="#facc15" />
            <rect x="107" y="58" width="10" height="8" rx="2" fill="#facc15" />

            {/* Graduation Cap */}
            <g transform="translate(110, 68)">
              {/* Cap Base */}
              <ellipse cx="28" cy="24" rx="16" ry="6" fill="#1e293b" />
              {/* Cap Diamond Top */}
              <polygon points="28,2 60,14 28,26 -4,14" fill="#334155" />
              <polygon points="28,2 58,13 28,24 -1,13" fill="#0f172a" />
              {/* Button */}
              <circle cx="28" cy="13" r="2.5" fill="#f59e0b" />
              {/* Tassel */}
              <path d="M28 13 Q 48 18, 50 32" stroke="#f59e0b" strokeWidth="2" fill="none" />
              <circle cx="50" cy="34" r="2.5" fill="#f59e0b" />
            </g>
          </svg>
        </div>
      </div>

      {/* Summary Metrics Cards */}
      <div className="BrowseInternships-stats-grid">
        <div className="BrowseInternships-stat-card">
          <div className="BrowseInternships-stat-icon icon-green"><FiBriefcase /></div>
          <div className="BrowseInternships-stat-content">
            <span className="BrowseInternships-stat-num">{totalCount}</span>
            <span className="BrowseInternships-stat-label">Total Internships</span>
          </div>
        </div>

        <div className="BrowseInternships-stat-card">
          <div className="BrowseInternships-stat-icon icon-purple"><FiGift /></div>
          <div className="BrowseInternships-stat-content">
            <span className="BrowseInternships-stat-num">{freeCount}</span>
            <span className="BrowseInternships-stat-label">Free Opportunities</span>
          </div>
        </div>

        <div className="BrowseInternships-stat-card">
          <div className="BrowseInternships-stat-icon icon-orange"><FiStar /></div>
          <div className="BrowseInternships-stat-content">
            <span className="BrowseInternships-stat-num">{paidCount}</span>
            <span className="BrowseInternships-stat-label">Paid Opportunities</span>
          </div>
        </div>

        <div className="BrowseInternships-stat-card">
          <div className="BrowseInternships-stat-icon icon-blue"><FiTv /></div>
          <div className="BrowseInternships-stat-content">
            <span className="BrowseInternships-stat-num">{remoteCount}</span>
            <span className="BrowseInternships-stat-label">Remote Opportunities</span>
          </div>
        </div>
      </div>

      {/* Controls & Filter Bar */}
      <div className="BrowseInternships-controls-bar">
        <div className="BrowseInternships-filters-group">
          {/* Filters Button */}
          <div className="BrowseInternships-popover-wrapper" ref={filterRef}>
            <button 
              className={`BrowseInternships-btn-filter ${showFilterPopover ? 'active' : ''}`}
              onClick={() => setShowFilterPopover(!showFilterPopover)}
            >
              <FiFilter /> Filters
            </button>
            {showFilterPopover && (
              <div className="BrowseInternships-popover">
                <div className="BrowseInternships-popover-title">
                  <span>Filter Options</span>
                  <button onClick={() => setShowFilterPopover(false)}><FiX /></button>
                </div>
                <div className="BrowseInternships-popover-body">
                  <label className="BrowseInternships-checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={filterFees.free} 
                      onChange={(e) => setFilterFees({ ...filterFees, free: e.target.checked })} 
                    />
                    <span>Free Opportunities</span>
                  </label>
                  <label className="BrowseInternships-checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={filterFees.paid} 
                      onChange={(e) => setFilterFees({ ...filterFees, paid: e.target.checked })} 
                    />
                    <span>Paid / Fee Opportunities</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* All Categories Dropdown */}
          <div className="BrowseInternships-popover-wrapper" ref={categoryRef}>
            <button 
              className="BrowseInternships-btn-dropdown"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              <FiGrid /> {selectedCategory} <FiChevronDown />
            </button>
            {showCategoryDropdown && (
              <div className="BrowseInternships-dropdown-menu">
                {categoriesList.map(cat => (
                  <button 
                    key={cat} 
                    className={selectedCategory === cat ? 'active' : ''}
                    onClick={() => { setSelectedCategory(cat); setShowCategoryDropdown(false); }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* All Modes Dropdown */}
          <div className="BrowseInternships-popover-wrapper" ref={modeRef}>
            <button 
              className="BrowseInternships-btn-dropdown"
              onClick={() => setShowModeDropdown(!showModeDropdown)}
            >
              {selectedMode} <FiChevronDown />
            </button>
            {showModeDropdown && (
              <div className="BrowseInternships-dropdown-menu">
                {modesList.map(m => (
                  <button 
                    key={m} 
                    className={selectedMode === m ? 'active' : ''}
                    onClick={() => { setSelectedMode(m); setShowModeDropdown(false); }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="BrowseInternships-popover-wrapper" ref={sortRef}>
            <button 
              className="BrowseInternships-btn-dropdown"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              ↑↓ Sort: {selectedSort} <FiChevronDown />
            </button>
            {showSortDropdown && (
              <div className="BrowseInternships-dropdown-menu">
                {sortList.map(s => (
                  <button 
                    key={s} 
                    className={selectedSort === s ? 'active' : ''}
                    onClick={() => { setSelectedSort(s); setShowSortDropdown(false); }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* View Layout Toggle */}
        <div className="BrowseInternships-layout-toggle">
          <button 
            className={`BrowseInternships-toggle-icon ${viewLayout === 'grid' ? 'active' : ''}`}
            onClick={() => setViewLayout('grid')}
            title="Grid View"
          >
            <FiGrid />
          </button>
          <button 
            className={`BrowseInternships-toggle-icon ${viewLayout === 'list' ? 'active' : ''}`}
            onClick={() => setViewLayout('list')}
            title="List View"
          >
            <FiList />
          </button>
        </div>
      </div>

      {/* Showing Count */}
      <div className="BrowseInternships-count-text">
        Showing {processedInternships.length} internships
      </div>

      {/* Cards Container */}
      <div className={`BrowseInternships-cards-${viewLayout}`}>
        {processedInternships.map((item) => (
          <div key={item.id} className="BrowseInternships-card">
            {/* Card Header Top */}
            <div className="BrowseInternships-card-header">
              <div className="BrowseInternships-card-icon-box">
                <FiBriefcase />
              </div>
              <div className="BrowseInternships-card-title-area">
                <h3 className="BrowseInternships-card-title">{item.title}</h3>
                <span className="BrowseInternships-card-company">{item.company}</span>
              </div>
              <button 
                className={`BrowseInternships-btn-save ${item.saved ? 'saved' : ''}`}
                onClick={() => toggleSave(item.id)}
                title={item.saved ? "Unsave" : "Save"}
              >
                <FiBookmark />
              </button>
            </div>

            {/* Badges Bar */}
            <div className="BrowseInternships-card-badges">
              <span className="BrowseInternships-code-badge">{item.code}</span>
              {item.badges.map((b, idx) => (
                <span key={idx} className={`BrowseInternships-badge badge-${b.type}`}>
                  {b.text}
                </span>
              ))}
            </div>

            {/* Description Body */}
            <p className="BrowseInternships-card-desc">{item.description}</p>

            {/* Fee Section */}
            <div className="BrowseInternships-fee-box">
              <FiTag className="BrowseInternships-fee-icon" />
              <span>FACILITATION & PACKAGE FEE: <strong>{item.fee}</strong></span>
            </div>

            {/* Actions Bottom Bar */}
            <div className="BrowseInternships-card-actions">
              <button 
                className="BrowseInternships-btn-view"
                onClick={() => setSelectedDetail(item)}
              >
                View Details
              </button>

              {item.status === 'apply' && (
                <button 
                  className="BrowseInternships-btn-apply"
                  onClick={() => handleApply(item.id)}
                >
                  Apply Now
                </button>
              )}

              {item.status === 'enrolled' && (
                <button className="BrowseInternships-btn-status status-enrolled" disabled>
                  Enrolled
                </button>
              )}

              {item.status === 'under_review' && (
                <button className="BrowseInternships-btn-status status-under-review" disabled>
                  Under Review
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Details Smooth Pop-up Modal */}
      {selectedDetail && (
        <div className="BrowseInternships-modal-overlay" onClick={() => setSelectedDetail(null)}>
          <div className="BrowseInternships-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="BrowseInternships-modal-header">
              <div className="BrowseInternships-modal-title-box">
                <span className="BrowseInternships-code-badge">{selectedDetail.code}</span>
                <h2>{selectedDetail.title}</h2>
                <p><FiMapPin /> {selectedDetail.company}</p>
              </div>
              <button className="BrowseInternships-btn-close" onClick={() => setSelectedDetail(null)}>
                <FiX />
              </button>
            </div>

            <div className="BrowseInternships-modal-body">
              <div className="BrowseInternships-card-badges" style={{ marginBottom: '16px' }}>
                {selectedDetail.badges.map((b, idx) => (
                  <span key={idx} className={`BrowseInternships-badge badge-${b.type}`}>
                    {b.text}
                  </span>
                ))}
              </div>

              <h4>Program Details & Overview</h4>
              <p>{selectedDetail.description}</p>

              <div className="BrowseInternships-fee-box" style={{ marginTop: '16px' }}>
                <FiTag className="BrowseInternships-fee-icon" />
                <span>FACILITATION & PACKAGE FEE: <strong>{selectedDetail.fee}</strong></span>
              </div>
            </div>

            <div className="BrowseInternships-modal-footer">
              <button 
                className={`BrowseInternships-btn-save ${selectedDetail.saved ? 'saved' : ''}`}
                onClick={() => toggleSave(selectedDetail.id)}
              >
                <FiBookmark /> {selectedDetail.saved ? 'Saved' : 'Save'}
              </button>

              {selectedDetail.status === 'apply' ? (
                <button className="BrowseInternships-btn-apply" onClick={() => handleApply(selectedDetail.id)}>
                  Apply Now
                </button>
              ) : selectedDetail.status === 'enrolled' ? (
                <button className="BrowseInternships-btn-status status-enrolled" disabled>
                  Enrolled
                </button>
              ) : (
                <button className="BrowseInternships-btn-status status-under-review" disabled>
                  Under Review
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseInternships;