import React, { useState } from 'react';
import './HomeGoals.css';

// Local assets with online CDN fallbacks
import goalsMediaImg from '../../assets/GoalsMedia.webp';
import featureDailyLiveImg from '../../assets/DailyLive.webp';
import featurePracticeImg from '../../assets/PracticeRevise.webp';
import featureLearnAnytimeImg from '../../assets/LearnAnytim.webp';

const FALLBACK_MEDIA = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&auto=format&fit=crop&q=80';
const FALLBACK_CARD1 = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80';
const FALLBACK_CARD2 = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80';
const FALLBACK_CARD3 = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80';

const HomeGoals = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const tickerItems = [
    '56+ Wonderful Awards',
    '5000+ Members',
    'Expert Mentors',
    'Online Certifications',
    '2500+ Online Courses',
    'Top Instructors'
  ];

  const cardsData = [
    {
      id: 1,
      title: 'Daily Live Classes',
      description: 'Interact with educators, ask questions, participate in live polls, and clear your doubts.',
      image: featureDailyLiveImg,
      fallback: FALLBACK_CARD1
    },
    {
      id: 2,
      title: 'Practice and Revise',
      description: 'Learning extends beyond classes with our practice section, mock tests, and guidance.',
      image: featurePracticeImg,
      fallback: FALLBACK_CARD2
    },
    {
      id: 3,
      title: 'Learn Anytime',
      description: 'One subscription gives you access to all live and recorded classes whenever you need.',
      image: featureLearnAnytimeImg,
      fallback: FALLBACK_CARD3
    }
  ];

  const bulletPoints = [
    'Learn from top educators in your city',
    'In-person classes & doubt solving',
    'Bonus access to online learning'
  ];

  return (
    <section className="home-goals-section">

      {/* Decorative Matrix Grid Overlay */}
      <div className="home-goals-bg-pattern"></div>

      <div className="home-goals-container">
        {/* Top Section: Media & Headline */}
        <div className="home-goals-header-row">
          {/* Left Column: Polygon Student Image & Play Stamp */}
          <div className="home-goals-media-col">
            <div className="home-goals-media-frame">
              <img
                src={goalsMediaImg}
                alt="Student writing in classroom"
                className="home-goals-media-img"
                onError={(e) => {
                  e.target.src = FALLBACK_MEDIA;
                }}
              />
            </div>

            <div
              className="home-goals-play-badge"
              onClick={() => setIsVideoOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsVideoOpen(true);
              }}
            >
              {/* Circular Rotating Badge with SVG Circular Text */}
              <div className="home-goals-play-stamp">
                <svg className="home-goals-stamp-svg" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="home-goals-stamp-text">
                    <textPath href="#circlePath" startOffset="0%">
                      PLAY VIDEO • PLAY VIDEO •
                    </textPath>
                  </text>
                </svg>
                <div className="home-goals-play-btn-center">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </div>
              </div>

              <p className="home-goals-play-text">
                Learn With <span className="home-goals-highlight">200+</span> World Class Institutions And Educators
              </p>
            </div>
          </div>

          {/* Right Column: Heading & Benefit Bullets */}
          <div className="home-goals-content-col">
            <h2 className="home-goals-heading">
              Learning<br />
              Focused on<br />
              Your Goals
            </h2>

            <ul className="home-goals-bullets">
              {bulletPoints.map((text, idx) => (
                <li key={idx} className="home-goals-bullet-item">
                  <span className="home-goals-bullet-star">★</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row: 3 Feature Cards */}
        <div className="home-goals-cards-grid">
          {cardsData.map((card) => (
            <div key={card.id} className="home-goals-card">
              <div className="home-goals-card-img-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="home-goals-card-img"
                  onError={(e) => {
                    e.target.src = card.fallback;
                  }}
                />
              </div>
              <div className="home-goals-card-body">
                <h3 className="home-goals-card-title">{card.title}</h3>
                <p className="home-goals-card-desc">{card.description}</p>
              </div>
              {/* Organic cream leaf detail at the bottom right */}
              <div className="home-goals-card-leaf"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Angled Bottom Edge Transition */}
      <div className="home-goals-bottom-angle"></div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="home-goals-modal-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="home-goals-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="home-goals-modal-close"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <iframe
              className="home-goals-modal-iframe"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Overview Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeGoals;