import React from 'react';
import './ReadArticleCrad.css';

// Importing webp images from src/assets/
import articleImage from '../../assets/LearnAnytim.webp';
import sidebarBg from '../../assets/librarygroup.webp';

// Icons from react-icons
import { FiArrowUpRight, FiShare2, FiShield } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ReadArticleCrad = () => {
  return (
    <div className="ReadArticleCrad">
      <div className="ReadArticleCrad-container">
        
        {/* Main Content Area */}
        <div className="ReadArticleCrad-main">
          
          {/* Section 1 */}
          <section className="ReadArticleCrad-section">
            <h2 className="ReadArticleCrad-title">
              Blending Technology with Physical Logistics
            </h2>
            <p className="ReadArticleCrad-text">
              Our Spring 2026 Cohort at the Bengaluru Center explored the intersection of technology and warehousing. With 110 selected engineering and data science interns, the focus was on building smart warehouse picking queues and optimizing carrier routing algorithms.
            </p>
            
            <div className="ReadArticleCrad-image-wrapper">
              <img 
                src={articleImage} 
                alt="Interns analyzing real-time warehouse data logs" 
                className="ReadArticleCrad-image"
              />
              <p className="ReadArticleCrad-caption">
                Interns analyzing real-time warehouse data logs to model pick-path routing optimizations.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="ReadArticleCrad-section">
            <h2 className="ReadArticleCrad-title">
              Algorithm Design & API Integrations
            </h2>
            <p className="ReadArticleCrad-text">
              Exporters face major delays when syncing e-commerce orders with shipping carriers. During the program, interns worked directly on connecting storefront APIs with the <code className="ReadArticleCrad-code">`IIInternship carrier engine`</code> to automate dispatch notifications and calculate live carrier rates.
            </p>

            <blockquote className="ReadArticleCrad-quote">
              "The algorithms developed by our Spring interns to optimize picking paths in the warehouse showed a simulated 15% efficiency gain in sorting. Their tech focus was outstanding."
              <cite className="ReadArticleCrad-quote-author">
                — Alok Sharma, Chief Technology Officer
              </cite>
            </blockquote>

            <h3 className="ReadArticleCrad-subtitle">Key Tech Milestones</h3>
            <p className="ReadArticleCrad-text">
              During the tech rotations, interns focused on automation code, system integrations, and layout algorithms:
            </p>
            <ul className="ReadArticleCrad-list">
              <li>
                <strong>API Automation:</strong> Connecting WooCommerce and Shopify storefronts with carrier rate endpoints.
              </li>
              <li>
                <strong>Path Routing:</strong> Developing code to optimize picking sequences for warehouse operators.
              </li>
              <li>
                <strong>Data Analytics:</strong> Aggregating freight times across major routes to profile carrier speeds.
              </li>
            </ul>

            <h3 className="ReadArticleCrad-subtitle">Weekly Curriculum Overview</h3>
            <p className="ReadArticleCrad-text">
              The tech-ops curriculum combined software engineering practices with physical warehouse operations:
            </p>
            <ol className="ReadArticleCrad-ordered-list">
              <li>
                <strong>Week 1: Logistics Tech Architecture</strong> — Overview of Warehouse Management Systems (WMS) and carrier APIs.
              </li>
              <li>
                <strong>Week 2: Pick-Path Modeling</strong> — Studying sorting algorithms and designing warehouse layout models.
              </li>
              <li>
                <strong>Week 3: Direct API Integrations</strong> — Building Webhooks to sync orders with shipping manifests.
              </li>
              <li>
                <strong>Week 4: The Routing Optimization Challenge</strong> — Simulating carrier rates under different fuel surcharges.
              </li>
              <li>
                <strong>Week 5: The Logistics Hackathon</strong> — Coding an automated billing generator for custom commercial invoices.
              </li>
              <li>
                <strong>Week 6: Review & Final Assessments</strong> — Technical assessment, project review, and certification.
              </li>
            </ol>
          </section>

          {/* Section 3 */}
          <section className="ReadArticleCrad-section">
            <h2 className="ReadArticleCrad-title">
              Launchpad for Future Tech Leaders
            </h2>
            <p className="ReadArticleCrad-text">
              With a 100% completion rate, the Spring cohort interns proved that combining data science with physical logistics is highly effective. Many have received full-time engineering offers to continue building logistics technology at IIInternship.
            </p>

            {/* Share Footer Box */}
            <div className="ReadArticleCrad-share-box">
              <div className="ReadArticleCrad-share-info">
                <h4 className="ReadArticleCrad-share-title">Share This Article</h4>
                <p className="ReadArticleCrad-share-sub">
                  Help your network discover smarter global logistics solutions.
                </p>
              </div>
              <div className="ReadArticleCrad-share-actions">
                <a href="#facebook" className="ReadArticleCrad-share-btn ReadArticleCrad-fb" aria-label="Share on Facebook">
                  <FaFacebookF />
                </a>
                <a href="#twitter" className="ReadArticleCrad-share-btn ReadArticleCrad-tw" aria-label="Share on Twitter">
                  <FaTwitter />
                </a>
                <a href="#linkedin" className="ReadArticleCrad-share-btn ReadArticleCrad-li" aria-label="Share on LinkedIn">
                  <FaLinkedinIn />
                </a>
                <button className="ReadArticleCrad-share-btn ReadArticleCrad-general" aria-label="Copy link">
                  <FiShare2 />
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Sticky Area */}
        <aside className="ReadArticleCrad-sidebar">
          <div className="ReadArticleCrad-sidebar-header">
            <span>Recommended</span> <span className="ReadArticleCrad-green-text">Reads</span>
          </div>
          
          <div 
            className="ReadArticleCrad-card" 
            style={{ backgroundImage: `url(${sidebarBg})` }}
          >
            <div className="ReadArticleCrad-card-overlay"></div>
            <div className="ReadArticleCrad-card-content">
              <div className="ReadArticleCrad-card-icon-badge">
                <FiShield />
              </div>
              <h3 className="ReadArticleCrad-card-title">
                Expert Logistics Insights
              </h3>
              <p className="ReadArticleCrad-card-desc">
                Need help with global shipping, customs compliance, or fulfillment? Speak with our logistics experts today.
              </p>
              <button className="ReadArticleCrad-card-cta">
                <span>SPEAK TO AN EXPERT</span>
                <FiArrowUpRight className="ReadArticleCrad-cta-icon" />
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ReadArticleCrad;