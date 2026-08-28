import React, { useState, useEffect } from 'react';
import './Navbar.css';

// Original Local Asset Imports
import logoImage from '../../assets/logo.webp';
import aboutUsImage from '../../assets/AboutusNavbar.avif';

const navLinks = [
  { id: 'home', label: 'Home', link: '/' },
  {
    id: 'about',
    label: 'About Us',
    hasDropdown: true,
    card: {
      title: 'About Us',
      desc: 'Learn more about our history, mission, and the dedicated team driving our vision forward.',
      image: aboutUsImage,
    },
    items: [
      {
        title: 'Organization History',
        desc: 'Discover the roots and milestones of our journey.',
        link: '/about/history'
      },
      {
        title: 'Vision & Mission',
        desc: 'Learn about our goals and the future we aim to build.',
        link: '/about/vision-mission'
      },
      {
        title: 'Team Members',
        desc: 'Meet the dedicated professionals driving our success.',
        link: '/about/team'
      },
      {
        title: 'What is Internship',
        desc: 'Understand the structure and benefits...',
        link: '/about/internship'
      },
      {
        title: 'What is Immersion',
        desc: 'Explore our comprehensive immersion programs.',
        link: '/about/immersion'
      }
    ]
  },
  { id: 'notice', label: 'Notice', link: '/notice' },
  {
    id: 'internship',
    label: 'Internship Program',
    hasDropdown: true,
    card: {
      title: 'Internship Programs',
      desc: 'Accelerate your career with our exclusive virtual and on-campus internship opportunities.',
      image: aboutUsImage,
    },
    items: [
      {
        title: 'Running Internships',
        desc: 'Explore our ongoing internship programs.',
        link: '/internships/running'
      },
      {
        title: 'On Campus Internships',
        desc: 'Join our on-campus internship opportunities.',
        link: '/internships/on-campus'
      },
      {
        title: 'Virtual Internships',
        desc: 'Participate in remote and virtual internships from anywhere.',
        link: '/internships/virtual'
      }
    ]
  },
  { id: 'immersion', label: 'Immersion', link: '/immersion' },
  {
    id: 'partners',
    label: 'Our Partners',
    hasDropdown: true,
    card: {
      title: 'Our Partners',
      desc: 'Collaborating with top educational institutes and industry leaders to provide the best opportunities.',
      image: aboutUsImage,
    },
    items: [
      {
        title: 'Educational Institutes',
        desc: 'Collaborating with top academic institutions.',
        link: '/partners/educational'
      },
      {
        title: 'Job Placement Companies',
        desc: 'Connecting you with leading hiring partners.',
        link: '/partners/placement'
      },
      {
        title: 'Training & Technical Support',
        desc: 'Enhancing skills through expert technical support.',
        link: '/partners/training'
      }
    ]
  },
  {
    id: 'media',
    label: 'Media',
    hasDropdown: true,
    card: {
      title: 'Media Room',
      desc: 'Explore our latest videos, photos, and media coverage.',
      image: aboutUsImage,
    },
    items: [
      {
        title: 'Video',
        desc: 'Watch highlights and educational video content.',
        link: '/media/video'
      },
      {
        title: 'Photo',
        desc: 'Browse through our vibrant campus and event galleries.',
        link: '/media/photos'
      },
      {
        title: 'Online Media',
        desc: 'Read our features across various online platforms.',
        link: '/media/online'
      },
      {
        title: 'News Paper',
        desc: 'Stay updated with our latest press releases...',
        link: '/media/news'
      }
    ]
  },
  { id: 'success-story', label: 'Success Story', link: '/success-story' },
  { id: 'recruitment', label: 'Recruitment', link: '/recruitment' },
  { id: 'contact', label: 'Contact Us', link: '/contact' },
  { id: 'donate', label: 'Donate', link: '/donate' },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle floating pill mode when scrolled down
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`Navbar-wrapper ${isScrolled ? 'Navbar-wrapper--scrolled' : 'Navbar-wrapper--initial'}`}>
      <nav className={`Navbar-container ${isScrolled ? 'Navbar-container--scrolled' : 'Navbar-container--initial'}`}>
        
        {/* Brand / Logo */}
        <a href="/" className="Navbar-logo-link">
          <img 
            src={logoImage} 
            alt="International Institute of Internship" 
            className="Navbar-logo-img" 
          />
        </a>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`Navbar-mobile-toggle ${mobileMenuOpen ? 'Navbar-mobile-toggle--active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Items & Actions */}
        <div className={`Navbar-menu ${mobileMenuOpen ? 'Navbar-menu--open' : ''}`}>
          <ul className="Navbar-list">
            {navLinks.map((item) => (
              <li 
                key={item.id}
                className={`Navbar-item ${item.hasDropdown ? 'Navbar-item--dropdown' : ''}`}
                onMouseEnter={() => {
                  if (window.innerWidth > 1024 && item.hasDropdown) {
                    setActiveDropdown(item.id);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 1024 && item.hasDropdown) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <a 
                  href={item.link || '#'} 
                  className={`Navbar-link ${activeDropdown === item.id ? 'Navbar-link--active' : ''}`}
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === item.id ? null : item.id);
                    }
                  }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className={`Navbar-arrow ${activeDropdown === item.id ? 'Navbar-arrow--up' : ''}`}>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </span>
                  )}
                </a>

                {/* Mega Dropdown Menu */}
                {item.hasDropdown && (
                  <div 
                    className={`Navbar-dropdown ${activeDropdown === item.id ? 'Navbar-dropdown--visible' : ''}`}
                    onMouseEnter={() => {
                      if (window.innerWidth > 1024) setActiveDropdown(item.id);
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth > 1024) setActiveDropdown(null);
                    }}
                  >
                    <div className="Navbar-dropdown-inner">
                      {/* Left Poster Card */}
                      <div className="Navbar-card">
                        <img src={item.card.image} alt={item.card.title} className="Navbar-card-bg" />
                        <div className="Navbar-card-overlay">
                          <h3 className="Navbar-card-title">{item.card.title}</h3>
                          <p className="Navbar-card-desc">{item.card.desc}</p>
                        </div>
                      </div>

                      {/* Right Sub-links */}
                      <div className="Navbar-sublinks">
                        {item.items.map((subItem, index) => (
                          <a 
                            key={index} 
                            href={subItem.link} 
                            className="Navbar-sublink-item"
                            onClick={() => {
                              setActiveDropdown(null);
                              setMobileMenuOpen(false);
                            }}
                          >
                            <div className="Navbar-sublink-info">
                              <h4 className="Navbar-sublink-title">{subItem.title}</h4>
                              <p className="Navbar-sublink-desc">{subItem.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Login Button nested inside navbar */}
          <div className="Navbar-actions">
            <a href="/login" className="Navbar-login-btn">
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;