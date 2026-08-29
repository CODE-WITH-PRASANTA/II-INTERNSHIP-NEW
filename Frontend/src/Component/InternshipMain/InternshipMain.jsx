import React from 'react';
import './InternshipMain.css';

const InternshipMain = () => {
  return (
    <section className="InternshipMain-container">
      {/* Background Decorative Graphic Elements */}
      <div className="InternshipMain-bg-circle InternshipMain-bg-circle-top"></div>
      <div className="InternshipMain-bg-dots InternshipMain-bg-dots-left"></div>
      <div className="InternshipMain-bg-dots InternshipMain-bg-dots-right"></div>
      <div className="InternshipMain-bg-wave"></div>

      <div className="InternshipMain-wrapper">
        {/* Top Section / Header */}
        <div className="InternshipMain-header">
          <div className="InternshipMain-tag">
            <span className="InternshipMain-tag-icon">🎓</span>
            <span className="InternshipMain-tag-text">LEARNING BY DOING</span>
          </div>
          <h2 className="InternshipMain-heading">What is an Internship?</h2>
          <h3 className="InternshipMain-subheading">
            Understanding Internship in Today&apos;s Education System.
          </h3>
          <div className="InternshipMain-header-desc">
            <p>
              An internship is a structured, purposeful, and experience-based learning process in which students
              or young professionals gain real-world experience by working with an institution, organization, or
              project.
            </p>
            <p>
              It goes beyond limiting education to textbooks, connecting it instead to practical application, skills,
              and professional understanding.
            </p>
            <p className="InternshipMain-header-highlight">
              Today, internships have become an essential step in career building—especially in the context of
              the new National Education Policy (NEP) 2020.
            </p>
          </div>
        </div>

        {/* Section 1: Definition Callout */}
        <div className="InternshipMain-callout-card">
          <div className="InternshipMain-callout-header">
            <div className="InternshipMain-card-icon InternshipMain-card-icon-briefcase">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div>
              <h3 className="InternshipMain-callout-title">International Institute of Internship (i3)</h3>
              <p className="InternshipMain-callout-motto">Learning by Doing. Growing with Purpose. Building Careers.</p>
            </div>
          </div>
          <div className="InternshipMain-callout-body">
            <p className="InternshipMain-callout-simple">In simple terms:</p>
            <div className="InternshipMain-callout-formula">
              Internship = &quot;Trial Job&quot; or &quot;Practice Job&quot;
            </div>
            <p className="InternshipMain-callout-note">
              That is, practicing working in a company/organization without the pressure of a full-time job.
            </p>
          </div>
        </div>

        {/* Section 2: Two-column grid (Why Internship Matters & Key Objectives) */}
        <div className="InternshipMain-grid">
          {/* Card: The Importance of Internships */}
          <div className="InternshipMain-card">
            <div className="InternshipMain-card-header">
              <div className="InternshipMain-card-icon InternshipMain-card-icon-importance">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <h3 className="InternshipMain-card-title">The Importance of Internships</h3>
                <h4 className="InternshipMain-card-subtitle">Why Internship Matters</h4>
              </div>
            </div>
            <div className="InternshipMain-card-body">
              <p>
                In modern times, employers look not only at degrees but also at the ability to perform the job.
                Internships provide young people with the opportunity to—
              </p>
              <ul className="InternshipMain-list">
                <li>Apply classroom knowledge in practice.</li>
                <li>Understand real-world work situations.</li>
                <li>Learn professional discipline and work culture.</li>
                <li>Develop confidence and decision-making skills.</li>
              </ul>
              <div className="InternshipMain-badge-note">
                In short, an internship is the link between learning and career.
              </div>
            </div>
          </div>

          {/* Card: Key Objectives of Internships */}
          <div className="InternshipMain-card">
            <div className="InternshipMain-card-header">
              <div className="InternshipMain-card-icon InternshipMain-card-icon-objectives">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div>
                <h3 className="InternshipMain-card-title">Key Objectives of Internships</h3>
                <h4 className="InternshipMain-card-subtitle">Strategic Milestones for Students</h4>
              </div>
            </div>
            <div className="InternshipMain-card-body">
              <ul className="InternshipMain-list">
                <li>Connecting theoretical knowledge with practical exposure.</li>
                <li>Enhancing skill development and employability among students.</li>
                <li>Developing a clear understanding of career options.</li>
                <li>Improving leadership, teamwork, and problem-solving abilities.</li>
                <li>Establishing a direct connection with society, industry, and the research sector.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Two-column grid (NEP 2020 & Types of Internships) */}
        <div className="InternshipMain-grid">
          {/* Card: Internship as per NEP 2020 */}
          <div className="InternshipMain-card">
            <div className="InternshipMain-card-header">
              <div className="InternshipMain-card-icon InternshipMain-card-icon-nep">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 6h10M6 10h10M6 14h6" />
                </svg>
              </div>
              <div>
                <h3 className="InternshipMain-card-title">Internship as per National Education Policy 2020</h3>
                <h4 className="InternshipMain-card-subtitle">Policy Alignment &amp; Directives</h4>
              </div>
            </div>
            <div className="InternshipMain-card-body">
              <p>
                The new National Education Policy (NEP) 2020 has recognized internships as a mandatory and
                effective part of the education system. Its key points are—
              </p>
              <ul className="InternshipMain-list">
                <li>Special emphasis on experiential learning.</li>
                <li>Internships, project work, and field exposure alongside studies.</li>
                <li>Promotion of &quot;Learning by Doing&quot; and &quot;Earn while Learn&quot;.</li>
                <li>A multi-disciplinary and skill-based education system.</li>
              </ul>
              <p>
                All internship programs of the International Institute of Internship (i3) are based on these concepts of
                NEP 2020.
              </p>
            </div>
          </div>

          {/* Card: Types of Internships */}
          <div className="InternshipMain-card">
            <div className="InternshipMain-card-header">
              <div className="InternshipMain-card-icon InternshipMain-card-icon-types">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <div>
                <h3 className="InternshipMain-card-title">Types of Internships</h3>
                <h4 className="InternshipMain-card-subtitle">Types of Internships at i3</h4>
              </div>
            </div>
            <div className="InternshipMain-card-body">
              <p>The International Institute of Internship offers structured internships in various fields—</p>
              <ul className="InternshipMain-list">
                <li>Academic &amp; Research Internship</li>
                <li>Skill Development Internship</li>
                <li>Social &amp; Community Internship</li>
                <li>Digital, Media &amp; Content Internship</li>
                <li>Management &amp; Entrepreneurship Internship</li>
              </ul>
              <div className="InternshipMain-badge-note">
                Internships may be available on-campus, online, offline, and in hybrid modes.
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Benefits of Internships */}
        <div className="InternshipMain-card">
          <div className="InternshipMain-card-header">
            <div className="InternshipMain-card-icon InternshipMain-card-icon-benefits">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <h3 className="InternshipMain-card-title">Benefits of Internships</h3>
              <h4 className="InternshipMain-card-subtitle">Empowering Student Growth</h4>
            </div>
          </div>
          <div className="InternshipMain-card-body">
            <ul className="InternshipMain-list InternshipMain-list-benefits-grid">
              <li>Real-world work experience that is not available in academic institutions, which helps you determine if the field is right for you!</li>
              <li>Development of skills, confidence, and professional mindset.</li>
              <li>Access to networking and career opportunities.</li>
              <li>Strengthening your resume and profile.</li>
              <li>Meaningful learning with a certificate.</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Internship at i3 (Conclusion Banner) */}
        <div className="InternshipMain-banner-card">
          <div className="InternshipMain-banner-header">
            <div className="InternshipMain-card-icon InternshipMain-card-icon-banner">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <h3 className="InternshipMain-banner-title">Internship at International Institute of Internship</h3>
              <h4 className="InternshipMain-banner-subtitle">More Than Just Training</h4>
            </div>
          </div>
          <div className="InternshipMain-banner-body">
            <p>
              Internships at the International Institute of Internship (i3) are not just a formality, but a structured
              learning process that includes mentorship, guidance, and evaluation.
            </p>
            <p>
              They have a positive impact on both society and your career.
            </p>
            <p className="InternshipMain-banner-motto-intro">We believe that—</p>
            <div className="InternshipMain-banner-quote">
              <p>
                An internship is not just preparation for the future, but the first step towards the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipMain;