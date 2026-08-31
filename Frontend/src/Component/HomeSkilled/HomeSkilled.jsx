import React, { useState } from 'react';
import './HomeSkilled.css';

import mentorImg1 from '../../assets/emily.webp';
import mentorImg2 from '../../assets/michael.webp';
import mentorImg3 from '../../assets/emily.webp';

const mentorsData = [
  {
    id: 1,
    name: 'Emily Rodriguez',
    role: 'Product Design Head',
    quote:
      "I've seen many platforms, but this one stands out. The architecture and the design are flawless. They really understand how to create a seamless user experience.",
    image: mentorImg1,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Software Engineer',
    quote:
      'An absolutely incredible experience working with the team. The attention to detail is unmatched, and their technical expertise helped us scale our product seamlessly.',
    image: mentorImg2,
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'VP of Product Strategy',
    quote:
      'The dedication to crafting elegant design systems while keeping scalable architecture at the core is truly inspiring. Highly recommended for aspiring designers and engineers.',
    image: mentorImg3,
  },
];

const HomeSkilled = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleSlideChange = (newIndex) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 250);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? mentorsData.length - 1 : currentIndex - 1;
    handleSlideChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === mentorsData.length - 1 ? 0 : currentIndex + 1;
    handleSlideChange(newIndex);
  };

  const currentMentor = mentorsData[currentIndex];

  return (
    <section className="home-skilled-section">
      <div className="home-skilled-container">
        {/* Section Heading */}
        <h2 className="home-skilled-title">Meet our Highly Skilled Mentors</h2>

        {/* Carousel Content Container */}
        <div className="home-skilled-card-wrapper">
          {/* Left: Stacked Image Cards */}
          <div className="home-skilled-visual-box">
            <div className="home-skilled-layer home-skilled-layer-1" />
            <div className="home-skilled-layer home-skilled-layer-2" />
            <div className="home-skilled-layer home-skilled-layer-3" />

            <div
              className={`home-skilled-image-card ${
                isFading ? 'home-skilled-fade-out' : 'home-skilled-fade-in'
              }`}
            >
              <img
                src={currentMentor.image}
                alt={currentMentor.name}
                className="home-skilled-image"
                loading="eager"
              />
            </div>
          </div>

          {/* Right: Mentor Details */}
          <div
            className={`home-skilled-details-box ${
              isFading ? 'home-skilled-fade-out' : 'home-skilled-fade-in'
            }`}
          >
            <h3 className="home-skilled-mentor-name">{currentMentor.name}</h3>
            <p className="home-skilled-mentor-role">{currentMentor.role}</p>

            <blockquote className="home-skilled-mentor-quote">
              {currentMentor.quote}
            </blockquote>

            {/* Navigation Buttons */}
            <div className="home-skilled-controls">
              <button
                type="button"
                className="home-skilled-nav-btn"
                onClick={handlePrev}
                aria-label="Previous mentor"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>

              <button
                type="button"
                className="home-skilled-nav-btn"
                onClick={handleNext}
                aria-label="Next mentor"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSkilled;