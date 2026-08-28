import React from 'react';
import './OrganizationHistory.css';

const OrganizationHistory = () => {
  return (
    <section className="OrganizationHistory-container">
      {/* Background Decorative Graphic Elements */}
      <div className="OrganizationHistory-bg-circle OrganizationHistory-bg-circle-1"></div>
      <div className="OrganizationHistory-bg-dots OrganizationHistory-bg-dots-top"></div>
      <div className="OrganizationHistory-bg-dots OrganizationHistory-bg-dots-bottom"></div>
      <div className="OrganizationHistory-bg-wave"></div>

      <div className="OrganizationHistory-wrapper">
        {/* Top Section */}
        <div className="OrganizationHistory-top-section">
          {/* Left: Date Badge Card */}
          <div className="OrganizationHistory-badge-card">
            <div className="OrganizationHistory-badge-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M4 10l8-6 8 6M12 4v2" />
              </svg>
            </div>
            <span className="OrganizationHistory-badge-label">Established on</span>
            <span className="OrganizationHistory-badge-date">Sep 3, 2025</span>
            <div className="OrganizationHistory-badge-accent-leaf">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
              </svg>
            </div>
          </div>

          {/* Center: Main Headings & History Content */}
          <div className="OrganizationHistory-main-text">
            <div className="OrganizationHistory-tag">
              <span className="OrganizationHistory-tag-icon">🌱</span>
              <span className="OrganizationHistory-tag-text">OUR JOURNEY</span>
            </div>
            <h2 className="OrganizationHistory-heading">Organization History</h2>
            <h4 className="OrganizationHistory-subheading">
              Our Journey of Vision, Leadership &amp; Experiential Learning.
            </h4>

            <div className="OrganizationHistory-description">
              <p>
                The <strong>International Institute of Internship (i3)</strong> was established on{' '}
                <span className="OrganizationHistory-highlight">September 3, 2025</span>, with a vision to
                empower youth not just through internships/academic certifications, but also through practical
                experience, skill-based learning, social awareness, and connect them with systematic employment
                opportunities.
              </p>
              <p>
                The institute is a flagship unit of the <strong>Divya Prerak Kahaniyan Humanity Research Centre Trust (DPKHRC Trust)</strong>.
                The DPKHRC Trust has been actively involved in humanities research, the publication of inspirational
                literature, social upliftment activities, and nation-building. It is within this ideological background that
                the International Institute of Internship (i3) was born.
              </p>
            </div>
          </div>

          {/* Right: Featured Group Image */}
          <div className="OrganizationHistory-image-card">
            <div className="OrganizationHistory-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Students collaborating"
                className="OrganizationHistory-image"
              />
            </div>
          </div>
        </div>

        {/* Row 1 Cards: Founder's Vision & Inspiration */}
        <div className="OrganizationHistory-bottom-section">
          {/* Card 1: Founder's Vision */}
          <div className="OrganizationHistory-card">
            <div className="OrganizationHistory-card-header">
              <div className="OrganizationHistory-card-icon OrganizationHistory-card-icon-vision">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="OrganizationHistory-card-title">Founder's Vision</h3>
            </div>
            <div className="OrganizationHistory-card-body">
              <p>
                The founder &amp; CMD of the institute is <strong>Dr. Avishek Kumar</strong>, a renowned literary figure,
                thinker, educator, researcher, and social activist. He believes that education is meaningful when it
                empowers individuals with self-reliance, sensitivity, and social service.
              </p>
              <p>
                Under the leadership of <strong>Dr. Avishek Kumar</strong>, the International Institute of Internship (i3)
                was developed as a platform that connects academic knowledge with real-world work experiences,
                providing young people with the opportunity to learn, explore, and contribute.
              </p>
            </div>
          </div>

          {/* Card 2: Inspiration & Guiding Thought */}
          <div className="OrganizationHistory-card">
            <div className="OrganizationHistory-card-header">
              <div className="OrganizationHistory-card-icon OrganizationHistory-card-icon-thought">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
                </svg>
              </div>
              <h3 className="OrganizationHistory-card-title">
                Inspiration &amp; <span className="OrganizationHistory-title-accent">Guiding Thought</span>
              </h3>
            </div>
            <div className="OrganizationHistory-card-body">
              <p>
                <strong>Mr. Tapas Kumar</strong> (CEO, Learnify Consultancy, Lucknow) played an inspiring role in
                shaping the vision of the International Institute of Internship (i3). His ideas and encouragement
                paved the way for creating opportunities, developing skills, and fostering a global perspective for
                students. He always emphasized that internships should not be merely training, but a process of
                character and personality development, discipline, and professional understanding.  His inspiration will 
                always live on in the work culture of the International Institute of Internship.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 Cards: Alignment with NEP 2020 & Moving Forward with Purpose */}
        <div className="OrganizationHistory-bottom-section">
          {/* Card 3: Alignment with National Education Policy 2020 */}
          <div className="OrganizationHistory-card">
            <div className="OrganizationHistory-card-header">
              <div className="OrganizationHistory-card-icon OrganizationHistory-card-icon-nep">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 6h10M6 10h10M6 14h6" />
                </svg>
              </div>
              <h3 className="OrganizationHistory-card-title">
                Alignment with <span className="OrganizationHistory-title-accent">NEP 2020</span>
              </h3>
            </div>
            <div className="OrganizationHistory-card-body">
              <p>
                The new National Education Policy (NEP) 2020 has given internships and experiential learning a
                significant place in the Indian education system. According to the policy, 80 to 120 hours of practical
                internships are now mandatory for undergraduate students. Furthermore:
              </p>
              <ul className="OrganizationHistory-list">
                <li>Education should be made multidisciplinary and skill-oriented.</li>
                <li>Students should be connected to real-world work experience, fieldwork, research, and internships.</li>
                <li>&quot;Earn while learning&quot; and learning by doing should be promoted.</li>
              </ul>
              <p>
                The <strong>International Institute of Internship (i3)</strong> model has been developed in line with these core
                concepts of NEP 2020. i3 provides students with academic knowledge, along with internships,
                practical skills, research insights, professional exposure, and employment opportunities, enabling
                them to meet future challenges.
              </p>
            </div>
          </div>

          {/* Card 4: Moving Forward with Purpose */}
          <div className="OrganizationHistory-card">
            <div className="OrganizationHistory-card-header">
              <div className="OrganizationHistory-card-icon OrganizationHistory-card-icon-purpose">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3 className="OrganizationHistory-card-title">Moving Forward with Purpose</h3>
            </div>
            <div className="OrganizationHistory-card-body">
              <p>
                Today, the International Institute of Internship continues to collaborate with educational institutions,
                universities, social organizations, and professional platforms nationally and internationally. Our
                mission is to:
              </p>
              <ul className="OrganizationHistory-list">
                <li>Provide quality, purposeful, and value-based internships and immersion programs.</li>
                <li>Develop leadership, innovation, and social responsibility among youth.</li>
                <li>Bridge the gap between education and employment.</li>
                <li>Conduct internship programs at nominal fees, both on-campus at educational institutions, colleges, and universities, and in a hybrid online mode.</li>
              </ul>
              <p className="OrganizationHistory-quote-text">
                The <strong>International Institute of Internship (i3)</strong> is not an institution, but a movement—where education
                becomes experience, and experience creates the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationHistory;