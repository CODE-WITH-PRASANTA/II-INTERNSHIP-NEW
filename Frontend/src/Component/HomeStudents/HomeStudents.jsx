import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import './HomeStudents.css';

import avatarAlex from '../../assets/Alex.webp';
import avatarSarah from '../../assets/Sarah.webp';
import avatarDavid from '../../assets/David.webp';
import avatarStudent1 from '../../assets/michael.webp';
import avatarStudent2 from '../../assets/Alex.webp';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    tagline: 'Highly Experienced Mentors',
    quote:
      '"The mentorship provided here is unparalleled. I was able to scale my skills in React and Next.js within weeks. Highly recommended!"',
    name: 'Alex Johnson',
    role: 'Frontend Developer',
    avatar: avatarAlex,
  },
  {
    id: 2,
    rating: 5,
    tagline: 'Highly Experienced Mentors',
    quote:
      '"Amazing structure and guidance. The hands-on projects helped me build a solid portfolio that landed me a job at a top tech firm."',
    name: 'Sarah Parker',
    role: 'UI/UX Designer',
    avatar: avatarSarah,
  },
  {
    id: 3,
    rating: 5,
    tagline: 'Highly Experienced Mentors',
    quote:
      '"A truly transformative experience. The feedback on my code reviews was detailed and incredibly helpful for my growth."',
    name: 'David Lee',
    role: 'Software Engineer',
    avatar: avatarDavid,
  },
];

const floatingAvatarsData = [
  {
    id: 'avatar-pos-1',
    posClass: 'home-students__floating-avatar--pos-1',
    src: avatarStudent1,
    name: 'Student 1',
    linkedTestimonialIndex: null,
  },
  {
    id: 'avatar-pos-2',
    posClass: 'home-students__floating-avatar--pos-2',
    src: avatarSarah,
    name: 'Sarah Parker',
    linkedTestimonialIndex: 1,
  },
  {
    id: 'avatar-pos-3',
    posClass: 'home-students__floating-avatar--pos-3',
    src: avatarStudent2,
    name: 'Student 2',
    linkedTestimonialIndex: null,
  },
  {
    id: 'avatar-pos-4',
    posClass: 'home-students__floating-avatar--pos-4',
    src: avatarDavid,
    name: 'David Lee',
    linkedTestimonialIndex: 2,
  },
  {
    id: 'avatar-pos-5',
    posClass: 'home-students__floating-avatar--pos-5',
    src: avatarAlex,
    name: 'Alex Johnson',
    linkedTestimonialIndex: 0,
  },
];

const HomeStudents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="home-students">
      <div className="home-students__container">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="home-students__left-col">
          {/* Floating Grayscale & Active Bubbles */}
          {floatingAvatarsData.map((avatar) => {
            const isActive = avatar.linkedTestimonialIndex === currentIndex;
            return (
              <div
                key={avatar.id}
                className={`home-students__floating-avatar ${avatar.posClass} ${
                  isActive ? 'home-students__floating-avatar--active' : ''
                }`}
              >
                <img
                  src={avatar.src}
                  alt={avatar.name}
                  className="home-students__floating-avatar-img"
                />
              </div>
            );
          })}

          {/* Heading and Subtext */}
          <div className="home-students__text-content">
            <h2 className="home-students__title">
              What Our <br />
              <span className="home-students__title-highlight">Students</span> Have <br />
              to Say
            </h2>
            <p className="home-students__description">
              Our students consistently praise the transformative learning experience
              we provide. Here’s what they say about our courses
            </p>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="home-students__right-col">
          
          {/* Testimonial Card Stack */}
          <div className="home-students__card-wrapper">
            <div className="home-students__card-backdrop" />

            <div className="home-students__card">
              <div>
                <div className="home-students__card-header">
                  <div className="home-students__stars">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="home-students__tagline">
                    {currentTestimonial.tagline}
                  </span>
                </div>

                <p className="home-students__quote">{currentTestimonial.quote}</p>
              </div>

              <div className="home-students__card-footer">
                <div className="home-students__author">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="home-students__author-avatar"
                  />
                  <div>
                    <h3 className="home-students__author-name">
                      {currentTestimonial.name}
                    </h3>
                    <p className="home-students__author-role">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative Quotation SVG */}
                <svg
                  className="home-students__quote-icon"
                  viewBox="0 0 48 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.4 0C6.444 0 0 6.444 0 14.4c0 7.956 6.444 14.4 14.4 14.4.744 0 1.464-.072 2.16-.192C14.712 32.856 10.344 36 4.8 36H2.4v-4.8c6.624 0 12-5.376 12-12v-1.68C6.672 17.52 0 10.848 0 2.4V0h14.4zm31.2 0c-7.956 0-14.4 6.444-14.4 14.4 0 7.956 6.444 14.4 14.4 14.4.744 0 1.464-.072 2.16-.192C45.912 32.856 41.544 36 36 36h-2.4v-4.8c6.624 0 12-5.376 12-12v-1.68C37.872 17.52 31.2 10.848 31.2 2.4V0h14.4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="home-students__controls">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="home-students__arrow-btn"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="home-students__pagination">
              <span className="home-students__counter">
                {currentIndex + 1} / {testimonialsData.length}
              </span>
              <div className="home-students__progress-track">
                <div
                  className="home-students__progress-fill"
                  style={{
                    width: `${((currentIndex + 1) / testimonialsData.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="home-students__arrow-btn"
            >
              <ArrowRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeStudents;