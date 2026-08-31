import React from 'react';
import './VisitionAndMissionMain.css';

const VisitionAndMissionMain = () => {
  return (
    <section className="VisitionAndMissionMain-container">
      {/* Background Decorative Graphic Elements */}
      <div className="VisitionAndMissionMain-bg-circle VisitionAndMissionMain-bg-circle-top"></div>
      <div className="VisitionAndMissionMain-bg-dots VisitionAndMissionMain-bg-dots-left"></div>
      <div className="VisitionAndMissionMain-bg-dots VisitionAndMissionMain-bg-dots-right"></div>
      <div className="VisitionAndMissionMain-bg-wave"></div>

      <div className="VisitionAndMissionMain-wrapper">
        {/* Section Header */}
        <div className="VisitionAndMissionMain-header">
          <div className="VisitionAndMissionMain-tag">
            <span className="VisitionAndMissionMain-tag-icon">✨</span>
            <span className="VisitionAndMissionMain-tag-text">PURPOSE &amp; VALUES</span>
          </div>
          <h2 className="VisitionAndMissionMain-heading">Vision, Mission &amp; Promise</h2>
          <p className="VisitionAndMissionMain-subheading">
            Guiding the youth toward experiential learning, ethical leadership, and impactful careers.
          </p>
        </div>

        {/* Top Grid: Vision & Mission Cards */}
        <div className="VisitionAndMissionMain-grid-top">
          {/* Card 1: Our Vision */}
          <div className="VisitionAndMissionMain-card VisitionAndMissionMain-card-vision">
            <div className="VisitionAndMissionMain-card-header">
              <div className="VisitionAndMissionMain-card-icon VisitionAndMissionMain-card-icon-vision">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="VisitionAndMissionMain-card-title">Our Vision</h3>
                <h4 className="VisitionAndMissionMain-card-subtitle">Shaping Futures Through Experience &amp; Purpose.</h4>
              </div>
            </div>

            <div className="VisitionAndMissionMain-card-body">
              <p>
                The vision of the <strong>International Institute of Internship (i3)</strong> is to provide young people with
                experiential learning and meaningful internships that prepare them not just for a job, but for a
                fulfilling life, leadership, and service to society.
              </p>

              <div className="VisitionAndMissionMain-list-container">
                <p className="VisitionAndMissionMain-list-title">We envision a future where—</p>
                <ul className="VisitionAndMissionMain-list">
                  <li>Learning extends beyond the confines of the classroom and connects with the real world.</li>
                  <li>Knowledge transforms into experience, and experience gives rise to innovation.</li>
                  <li>Young people/students are self-reliant, confident, and possess a global mindset.</li>
                </ul>
              </div>

              <p>
                The International Institute of Internship aims to develop young people from India and around the world into
                competitive individuals on national and international platforms, as well as ethical, sensitive, and
                socially conscious citizens.
              </p>
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="VisitionAndMissionMain-card VisitionAndMissionMain-card-mission">
            <div className="VisitionAndMissionMain-card-header">
              <div className="VisitionAndMissionMain-card-icon VisitionAndMissionMain-card-icon-mission">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="22" y1="12" x2="18" y2="12" />
                  <line x1="6" y1="12" x2="2" y2="12" />
                  <line x1="12" y1="6" x2="12" y2="2" />
                  <line x1="12" y1="22" x2="12" y2="18" />
                </svg>
              </div>
              <div>
                <h3 className="VisitionAndMissionMain-card-title">Our Mission</h3>
                <h4 className="VisitionAndMissionMain-card-subtitle">Bridging Education, Skills &amp; Real-World Impact.</h4>
              </div>
            </div>

            <div className="VisitionAndMissionMain-card-body">
              <p>
                The mission of the <strong>International Institute of Internship (i3)</strong> is to bridge the gap between
                education and the real world of work—through purposeful, skill-based, and value-centered internships.
              </p>

              <div className="VisitionAndMissionMain-list-container">
                <p className="VisitionAndMissionMain-list-title">We pursue our mission with the following commitments—</p>
                <ul className="VisitionAndMissionMain-list">
                  <li>To mainstream Experiential Learning, Internships, and Skill-Based Education in line with the spirit of the New National Education Policy (NEP) 2020.</li>
                  <li>To make students and researchers career-ready and future-proof by connecting them with live projects, field exposure, research, and industry-relevant internships.</li>
                  <li>To develop meaningful collaborations between education, industry, social organizations, and research institutions.</li>
                  <li>To cultivate leadership qualities, innovative thinking, professional discipline, and ethical values in young people.</li>
                  <li>To promote Social Impact, Community Engagement, and Responsible Citizenship through projects connected to the real needs of society.</li>
                  <li>To empower individuals to be useful to themselves and society through various immersion programs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Card: Our Promise */}
        <div className="VisitionAndMissionMain-promise-card">
          <div className="VisitionAndMissionMain-promise-header">
            <div className="VisitionAndMissionMain-card-icon VisitionAndMissionMain-card-icon-promise">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <h3 className="VisitionAndMissionMain-card-title">Our Promise</h3>
              <h4 className="VisitionAndMissionMain-card-subtitle">More Than an Internship</h4>
            </div>
          </div>

          <div className="VisitionAndMissionMain-promise-content">
            <p className="VisitionAndMissionMain-promise-intro">
              At the International Institute of Internship, we believe that—
            </p>

            <ul className="VisitionAndMissionMain-promise-list">
              <li>
                <span className="VisitionAndMissionMain-bullet-icon">✦</span>
                <span>An internship is not just a certificate, but a journey of learning.</span>
              </li>
              <li>
                <span className="VisitionAndMissionMain-bullet-icon">✦</span>
                <span>Training not only imparts skills but also shapes attitudes.</span>
              </li>
              <li>
                <span className="VisitionAndMissionMain-bullet-icon">✦</span>
                <span>A career should not just be about employment, but about a meaningful purpose.</span>
              </li>
            </ul>

            <div className="VisitionAndMissionMain-promise-quote">
              <p>
                We provide young people and students with a platform where learning becomes experience, experience builds confidence, and confidence shapes the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitionAndMissionMain;