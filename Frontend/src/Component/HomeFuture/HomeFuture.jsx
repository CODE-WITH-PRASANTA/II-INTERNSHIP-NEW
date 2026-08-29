import React from 'react';
import './HomeFuture.css';

import imgStudent from '../../assets/laptop.webp';
import imgClassroom from '../../assets/classroom.webp';
import imgGroup from '../../assets/LearnAnytim.webp';

const checkIcon = (
  <svg 
    className="home-future__check-icon" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const arrowIcon = (
  <svg 
    className="home-future__btn-arrow" 
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
);

const HomeFuture = () => {
  return (
    <section className="home-future">
      <div className="home-future__container">
        
        {/* Left Column: Information & Actions */}
        <div className="home-future__content">
          <div className="home-future__tag-wrapper">
            <span className="home-future__tag">Why Choose Us</span>
            <span className="home-future__tag-line"></span>
          </div>

          <h2 className="home-future__title">
            Why Students Choose Us <br className="home-future__br-desktop" />
            for Their Future
          </h2>

          <p className="home-future__description">
            Edhen an unknown printer took a galley of type and scrambled it to 
            make a type specimen bookas survived not only five centuries. but 
            workplace better right now. Seventy percent of workers think that.
          </p>

          <ul className="home-future__features">
            <li className="home-future__feature-item">
              {checkIcon}
              <span>Free for physically handcraft</span>
            </li>
            <li className="home-future__feature-item">
              {checkIcon}
              <span>Easy to enroll courses</span>
            </li>
            <li className="home-future__feature-item">
              {checkIcon}
              <span>Course certificate for particular course</span>
            </li>
          </ul>

          <div className="home-future__action">
            <button className="home-future__btn" type="button">
              <span>More about us</span>
              <span className="home-future__btn-icon-box">
                {arrowIcon}
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Layered Collage */}
        <div className="home-future__gallery">
          {/* Decorative Colored Blocks */}
          <div className="home-future__shape-green" aria-hidden="true"></div>
          <div className="home-future__shape-yellow" aria-hidden="true"></div>

          {/* Dotted Accent Textures */}
          <div className="home-future__dots home-future__dots--top" aria-hidden="true"></div>
          <div className="home-future__dots home-future__dots--bottom" aria-hidden="true"></div>

          {/* Collage Images */}
          <div className="home-future__card home-future__card--top">
            <img src={imgStudent} alt="Student learning with laptop and headphones" />
          </div>

          <div className="home-future__card home-future__card--middle">
            <img src={imgClassroom} alt="Teacher presenting in classroom to raising hands" />
          </div>

          <div className="home-future__card home-future__card--bottom">
            <img src={imgGroup} alt="Collaborative group study on laptops" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeFuture;