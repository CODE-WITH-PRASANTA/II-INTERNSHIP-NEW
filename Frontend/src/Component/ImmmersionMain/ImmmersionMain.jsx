import React from 'react';
import './ImmmersionMain.css';

const ImmmersionMain = () => {
  return (
    <section className="ImmmersionMain-container">
      {/* Background Decorative Graphic Elements */}
      <div className="ImmmersionMain-bg-circle ImmmersionMain-bg-circle-top"></div>
      <div className="ImmmersionMain-bg-dots ImmmersionMain-bg-dots-left"></div>
      <div className="ImmmersionMain-bg-dots ImmmersionMain-bg-dots-right"></div>
      <div className="ImmmersionMain-bg-wave"></div>

      <div className="ImmmersionMain-wrapper">
        {/* Top Section / Header */}
        <div className="ImmmersionMain-header">
          <div className="ImmmersionMain-tag">
            <span className="ImmmersionMain-tag-icon">🌊</span>
            <span className="ImmmersionMain-tag-text">EXPERIENTIAL LEARNING</span>
          </div>
          <h2 className="ImmmersionMain-heading">What is Immersion..?</h2>
          <div className="ImmmersionMain-header-desc">
            <p>
              Immersion is an educational, social, and experiential concept whose core meaning is to completely immerse
              oneself in a subject, environment, activity, or experience. Immersion occurs when an individual actively
              participates in a process mentally, emotionally, and behaviorally, rather than remaining a mere external
              observer. It is not just a method of learning, but a profound learning experience where knowledge,
              understanding, and behavior develop simultaneously.
            </p>
            <p>
              From an educational perspective, immersion means learning through experience. It goes beyond limiting the
              learner to theoretical knowledge from books, connecting them directly to real-world situations, social
              environments, work contexts, and the realities of life. For example, when a student lives in a rural area and
              experiences its social, economic, and cultural conditions firsthand, it is called rural immersion. This type of
              experience deepens the student&apos;s sensitivity, perspective, and social understanding.
            </p>
            <p>
              The greatest characteristic of immersion is that learning becomes natural and spontaneous. It doesn&apos;t require
              a formal curriculum or rigid evaluation system. The individual experiences, questions, develops understanding,
              and reaches conclusions independently. This process fosters self-reflection, empathy, and a sense of social
              responsibility within the individual. For this reason, immersion is considered not only an artistic concept but
              also a crucial process for human development.
            </p>
          </div>
        </div>

        {/* Section 1: Immersion Across Fields */}
        <div className="ImmmersionMain-grid-two">
          {/* Card 1: Technological & Cultural Contexts */}
          <div className="ImmmersionMain-card">
            <div className="ImmmersionMain-card-header">
              <div className="ImmmersionMain-card-icon ImmmersionMain-card-icon-tech">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="ImmmersionMain-card-title">Technological &amp; Cultural Dimensions</h3>
            </div>
            <div className="ImmmersionMain-card-body">
              <p>
                In the technological field, immersion is used through mediums like virtual reality, augmented reality, and
                simulations, where individuals are given the experience of being present in a real environment. In cultural
                and religious contexts, immersion also refers to the complete submersion of an object or symbol in water,
                such as the immersion of idols.
              </p>
              <div className="ImmmersionMain-badge-note">
                Thus, the word immersion is used in various fields with different meanings, but the core idea of
                &quot;complete submersion&quot; remains constant.
              </div>
            </div>
          </div>

          {/* Card 2: Social & Developmental Programs */}
          <div className="ImmmersionMain-card">
            <div className="ImmmersionMain-card-header">
              <div className="ImmmersionMain-card-icon ImmmersionMain-card-icon-social">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="ImmmersionMain-card-title">Social &amp; Developmental Impact</h3>
            </div>
            <div className="ImmmersionMain-card-body">
              <p>
                In social and developmental programs, the objective of immersion is to connect participants with the
                realities of society. This develops practical understanding, leadership skills, and a spirit of service in
                individuals. Emerson&apos;s approach not only makes an individual knowledgeable but also helps in developing
                them into a conscious, responsible, and informed citizen.
              </p>
              <p>
                Therefore, in short, Emerson&apos;s method is a process in which an individual learns, explores, and develops
                themselves by becoming fully immersed in an experience, environment, or subject. It is a powerful and
                effective method of connecting knowledge to life, which is considered essential for today&apos;s
                experience-based education and social development.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Banner Card (i3 Opportunity Callout) */}
        <div className="ImmmersionMain-opportunity-card">
          <div className="ImmmersionMain-opportunity-content">
            <p>
              <em>
                The International Institute of Internship (i3) provides its students, young people, and researchers from
                India and abroad with the opportunity to immerse themselves in various fields and situations, giving them a
                real-world experience and practical insights. Anyone can register for the Emerson program on the i3 portal
                and participate in the immersion program at any time. The certificates received after successful completion
                of the immersion program will prove useful in various aspects of life.
              </em>
            </p>
          </div>
        </div>

        {/* Section 3: Differences Between Immersion and Internship */}
        <div className="ImmmersionMain-diff-section">
          <div className="ImmmersionMain-diff-header">
            <div className="ImmmersionMain-tag">
              <span className="ImmmersionMain-tag-icon">⚖️</span>
              <span className="ImmmersionMain-tag-text">COMPARATIVE OVERVIEW</span>
            </div>
            <h2 className="ImmmersionMain-heading">Differences between Immersion and Internship.</h2>
          </div>

          <div className="ImmmersionMain-diff-grid">
            {/* 1. Concept */}
            <div className="ImmmersionMain-diff-item">
              <div className="ImmmersionMain-diff-num">1</div>
              <div className="ImmmersionMain-diff-content">
                <h4 className="ImmmersionMain-diff-title">Concept</h4>
                <ul className="ImmmersionMain-list">
                  <li><strong>Immersion:</strong> A process of learning by fully immersing oneself in a subject, field, community, or environment. Experience, observation, and self-reflection are key components.</li>
                  <li><strong>Internship:</strong> Training to learn professional skills by working on real projects within an institution or organization.</li>
                </ul>
              </div>
            </div>

            {/* 2. Objective */}
            <div className="ImmmersionMain-diff-item">
              <div className="ImmmersionMain-diff-num">2</div>
              <div className="ImmmersionMain-diff-content">
                <h4 className="ImmmersionMain-diff-title">Objective</h4>
                <ul className="ImmmersionMain-list">
                  <li>The objective of <strong>immersion</strong> is to develop a deep understanding, sensitivity, and a broader perspective.</li>
                  <li>The objective of an <strong>internship</strong> is to gain practical experience, work efficiency, and career-oriented skills.</li>
                </ul>
              </div>
            </div>

            {/* 3. Learning Method */}
            <div className="ImmmersionMain-diff-item">
              <div className="ImmmersionMain-diff-num">3</div>
              <div className="ImmmersionMain-diff-content">
                <h4 className="ImmmersionMain-diff-title">Learning Method</h4>
                <ul className="ImmmersionMain-list">
                  <li>In <strong>immersion</strong>, learning happens through lived experience.</li>
                  <li>In an <strong>internship</strong>, learning happens through working.</li>
                </ul>
              </div>
            </div>

            {/* 4. Work and Responsibilities */}
            <div className="ImmmersionMain-diff-item">
              <div className="ImmmersionMain-diff-num">4</div>
              <div className="ImmmersionMain-diff-content">
                <h4 className="ImmmersionMain-diff-title">Work and Responsibilities</h4>
                <ul className="ImmmersionMain-list">
                  <li>In <strong>immersion</strong>, work responsibilities are limited or symbolic.</li>
                  <li>In an <strong>internship</strong>, clear tasks, goals, and responsibilities are defined.</li>
                </ul>
              </div>
            </div>

            {/* 5. Duration */}
            <div className="ImmmersionMain-diff-item">
              <div className="ImmmersionMain-diff-num">5</div>
              <div className="ImmmersionMain-diff-content">
                <h4 className="ImmmersionMain-diff-title">Duration</h4>
                <ul className="ImmmersionMain-list">
                  <li><strong>Immersion</strong> is short-term or objective-based.</li>
                  <li><strong>Internships</strong> are generally for a fixed duration (e.g., 1–6 months).</li>
                </ul>
              </div>
            </div>

            {/* 6. Evaluation and Certification */}
            <div className="ImmmersionMain-diff-item">
              <div className="ImmmersionMain-diff-num">6</div>
              <div className="ImmmersionMain-diff-content">
                <h4 className="ImmmersionMain-diff-title">Evaluation and Certification</h4>
                <ul className="ImmmersionMain-list">
                  <li>Formal evaluation is not necessarily required in <strong>immersion</strong>.</li>
                  <li>Performance-based evaluation and a certificate are usually provided in an <strong>internship</strong>.</li>
                </ul>
              </div>
            </div>

            {/* 7. Relation to Employment */}
            <div className="ImmmersionMain-diff-item">
              <div className="ImmmersionMain-diff-num">7</div>
              <div className="ImmmersionMain-diff-content">
                <h4 className="ImmmersionMain-diff-title">Relation to Employment</h4>
                <ul className="ImmmersionMain-list">
                  <li><strong>Immersion</strong> is not directly related to employment.</li>
                  <li><strong>Internships</strong> are directly linked to employment and career building.</li>
                </ul>
              </div>
            </div>

            {/* 8. Examples */}
            <div className="ImmmersionMain-diff-item">
              <div className="ImmmersionMain-diff-num">8</div>
              <div className="ImmmersionMain-diff-content">
                <h4 className="ImmmersionMain-diff-title">Examples</h4>
                <ul className="ImmmersionMain-list">
                  <li><strong>Immersion:</strong> Rural immersion, community immersion, teacher immersion.</li>
                  <li><strong>Internship:</strong> IT company internship, media internship, NGO internship.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Summary Takeaway Card */}
        <div className="ImmmersionMain-summary-card">
          <div className="ImmmersionMain-summary-header">
            <div className="ImmmersionMain-card-icon ImmmersionMain-card-icon-summary">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 className="ImmmersionMain-summary-title">In short...</h3>
          </div>
          <div className="ImmmersionMain-summary-grid">
            <div className="ImmmersionMain-summary-pill">
              <span className="ImmmersionMain-pill-tag">Immersion</span>
              <span className="ImmmersionMain-pill-eq">=</span>
              <span className="ImmmersionMain-pill-text">Learning deeply through experience.</span>
            </div>
            <div className="ImmmersionMain-summary-pill">
              <span className="ImmmersionMain-pill-tag ImmmersionMain-pill-tag-intern">Internship</span>
              <span className="ImmmersionMain-pill-eq">=</span>
              <span className="ImmmersionMain-pill-text">Learning skills through work.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmmersionMain;