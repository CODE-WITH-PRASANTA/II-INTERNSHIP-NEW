import React from 'react';
import './TeamMemberMain.css';

const TeamMemberMain = () => {
  return (
    <section className="TeamMemberMain-container">
      {/* Decorative Background Elements */}
      <div className="TeamMemberMain-bg-circle TeamMemberMain-bg-circle-top"></div>
      <div className="TeamMemberMain-bg-dots TeamMemberMain-bg-dots-left"></div>
      <div className="TeamMemberMain-bg-dots TeamMemberMain-bg-dots-right"></div>
      <div className="TeamMemberMain-bg-wave"></div>

      <div className="TeamMemberMain-wrapper">
        {/* Section Header */}
        <div className="TeamMemberMain-header">
          <div className="TeamMemberMain-tag">
            <span className="TeamMemberMain-tag-icon">👥</span>
            <span className="TeamMemberMain-tag-text">LEADERSHIP &amp; VISIONARIES</span>
          </div>
          <h2 className="TeamMemberMain-heading">Leadership &amp; Visionaries</h2>
          <p className="TeamMemberMain-subheading">
            The foundation of the International Institute of Internship (i3) is built upon the dedication, expertise,
            and forward-thinking of its leadership. Our team consists of renowned educators, industry experts,
            and social activists committed to empowering the youth.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="TeamMemberMain-leaders-grid">
          {/* Leader 1: Dr. Avishek Kumar */}
          <div className="TeamMemberMain-card">
            <div className="TeamMemberMain-card-header">
              <div className="TeamMemberMain-avatar-box">
                <div className="TeamMemberMain-avatar-icon TeamMemberMain-avatar-icon-founder">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <div className="TeamMemberMain-card-title-group">
                <h3 className="TeamMemberMain-leader-name">Dr. Avishek Kumar</h3>
                <span className="TeamMemberMain-leader-role">Founder &amp; CMD</span>
              </div>
            </div>

            <div className="TeamMemberMain-card-body">
              <p>
                A renowned literary figure, thinker, educator, researcher, and social activist. He believes that
                education is meaningful when it empowers individuals with self-reliance, sensitivity, and social
                service. Under his leadership, i3 was developed as a platform that connects academic knowledge
                with real-world work experiences.
              </p>
            </div>
          </div>

          {/* Leader 2: Mr. Tapas Kumar */}
          <div className="TeamMemberMain-card">
            <div className="TeamMemberMain-card-header">
              <div className="TeamMemberMain-avatar-box">
                <div className="TeamMemberMain-avatar-icon TeamMemberMain-avatar-icon-ceo">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
              </div>
              <div className="TeamMemberMain-card-title-group">
                <h3 className="TeamMemberMain-leader-name">Mr. Tapas Kumar</h3>
                <span className="TeamMemberMain-leader-role">CEO, Learnify Consultancy, Lucknow</span>
              </div>
            </div>

            <div className="TeamMemberMain-card-body">
              <p>
                Played an inspiring role in shaping the vision of i3. His ideas and encouragement paved the way for
                creating opportunities, developing skills, and fostering a global perspective for students. He
                emphasized that internships should be a process of character and personality development,
                discipline, and professional understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner Card: Our Core Philosophy */}
        <div className="TeamMemberMain-philosophy-card">
          <div className="TeamMemberMain-philosophy-header">
            <div className="TeamMemberMain-avatar-icon TeamMemberMain-avatar-icon-philosophy">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div>
              <h3 className="TeamMemberMain-philosophy-title">Our Core Philosophy</h3>
            </div>
          </div>

          <div className="TeamMemberMain-philosophy-body">
            <p>
              Our team operates with a unified philosophy—that learning should extend beyond the classroom. The
              mentors, guides, and project coordinators at i3 work tirelessly to ensure that every student receives
              hands-on experience, professional guidance, and true mentorship.
            </p>

            <div className="TeamMemberMain-philosophy-quote">
              <p>
                We are not just an institution, but a movement where education becomes experience, and
                experience creates the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberMain;