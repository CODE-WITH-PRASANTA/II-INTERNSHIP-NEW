import React, { useState, useEffect, useCallback } from 'react';
import './HomeOurMoments.css';

import galleryImg1 from '../../assets/librarygroup.webp';
import galleryImg2 from '../../assets/classroom.webp';
import galleryImg3 from '../../assets/graduation.webp';
import galleryImg4 from '../../assets/lab-research.webp';
import galleryImg5 from '../../assets/laptop.webp';
import galleryImg6 from '../../assets/cycling-sports.webp';

const galleryItems = [
  {
    id: 1,
    title: 'Group Collaboration',
    subtitle: 'Campus Library',
    image: galleryImg1,
    gridClass: 'home-our-moments__card--tall-left',
  },
  {
    id: 2,
    title: 'Study Sessions',
    subtitle: 'Library focus',
    image: galleryImg2,
    gridClass: 'home-our-moments__card--mid-top',
  },
  {
    id: 3,
    title: 'Research & Innovation',
    subtitle: 'Digital workspace',
    image: galleryImg4,
    gridClass: 'home-our-moments__card--mid-bottom',
  },
  {
    id: 4,
    title: 'Graduation Day',
    subtitle: 'Celebrating success',
    image: galleryImg3,
    gridClass: 'home-our-moments__card--tall-right',
  },
  {
    id: 5,
    title: 'Solo Focus',
    subtitle: 'Creative corner',
    image: galleryImg5,
    gridClass: 'home-our-moments__card--bottom-left',
  },
  {
    id: 6,
    title: 'Sports & Energy',
    subtitle: 'Annual tournament',
    image: galleryImg6,
    gridClass: 'home-our-moments__card--bottom-right',
  },
];

const HomeOurMoments = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
    }
  }, [selectedIndex]);

  const showPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [selectedIndex]);

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, showNext, showPrev]);

  const activeItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section className="home-our-moments">
      <div className="home-our-moments__container">
        {/* Header Section */}
        <header className="home-our-moments__header">
          <div className="home-our-moments__header-left">
            <div className="home-our-moments__badge-row">
              <span className="home-our-moments__badge-text">OUR MOMENTS</span>
              <span className="home-our-moments__accent-line"></span>
            </div>
            <h2 className="home-our-moments__title">Our Gallery</h2>
          </div>
          <div className="home-our-moments__header-right">
            <p className="home-our-moments__description">
              A glimpse into the vibrant campus life, dedicated study sessions,
              and memorable events that shape our students' journey.
            </p>
          </div>
        </header>

        {/* Gallery Grid */}
        <div className="home-our-moments__grid">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`home-our-moments__card ${item.gridClass}`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="home-our-moments__image"
                loading="lazy"
              />
              <div className="home-our-moments__overlay">
                <div className="home-our-moments__overlay-content">
                  <div className="home-our-moments__text-wrap">
                    <h3 className="home-our-moments__card-title">{item.title}</h3>
                    <p className="home-our-moments__card-subtitle">{item.subtitle}</p>
                  </div>
                  <button
                    type="button"
                    className="home-our-moments__arrow-btn"
                    aria-label={`Open ${item.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(index);
                    }}
                  >
                    <svg
                      className="home-our-moments__arrow-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Popup Modal */}
      {activeItem && (
        <div
          className="home-our-moments__modal"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="home-our-moments__modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="home-our-moments__modal-close"
              onClick={closeLightbox}
              aria-label="Close popup"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Left Nav Arrow */}
            <button
              type="button"
              className="home-our-moments__modal-nav home-our-moments__modal-nav--prev"
              onClick={showPrev}
              aria-label="Previous image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Modal Image Box */}
            <div className="home-our-moments__modal-body">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="home-our-moments__modal-image"
              />
              <div className="home-our-moments__modal-caption">
                <div className="home-our-moments__modal-text">
                  <h3 className="home-our-moments__modal-title">{activeItem.title}</h3>
                  <p className="home-our-moments__modal-subtitle">{activeItem.subtitle}</p>
                </div>
                <span className="home-our-moments__modal-counter">
                  {selectedIndex + 1} / {galleryItems.length}
                </span>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              type="button"
              className="home-our-moments__modal-nav home-our-moments__modal-nav--next"
              onClick={showNext}
              aria-label="Next image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeOurMoments;