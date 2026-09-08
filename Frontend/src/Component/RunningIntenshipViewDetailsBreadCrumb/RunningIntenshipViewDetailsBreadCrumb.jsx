import React from 'react';
import './RunningIntenshipViewDetailsBreadCrumb.css';

// Feather icons from react-icons/fi
import { 
  FiSend, 
  FiShare2, 
  FiShield, 
  FiMapPin, 
  FiClock, 
  FiCalendar, 
  FiAward, 
  FiBookOpen, 
  FiUserCheck, 
  FiBriefcase, 
  FiPhoneCall,
  FiCheckCircle,
  FiChevronRight,
  FiHelpCircle,
  FiCoffee,
  FiLayers
} from 'react-icons/fi';

// Sparkles icon imported from react-icons/hi2
import { HiSparkles } from 'react-icons/hi2';

const RunningIntenshipViewDetailsBreadCrumb = () => {
  return (
    <div className="RunningIntenshipViewDetailsBreadCrumb">
      <div className="RunningIntenshipViewDetailsBreadCrumb-container">
        
        {/* Main Content (Left Column) */}
        <div className="RunningIntenshipViewDetailsBreadCrumb-main">
          
          {/* Header & Badges */}
          <div className="RunningIntenshipViewDetailsBreadCrumb-header">
            <div className="RunningIntenshipViewDetailsBreadCrumb-badges">
              <span className="RunningIntenshipViewDetailsBreadCrumb-badge badge-running">
                <FiBriefcase className="badge-icon" /> RUNNING
              </span>
              <span className="RunningIntenshipViewDetailsBreadCrumb-badge badge-free">
                <HiSparkles className="badge-icon" /> FREE OF COST
              </span>
              <span className="RunningIntenshipViewDetailsBreadCrumb-badge badge-category">
                HUMANITY
              </span>
            </div>

            <h1 className="RunningIntenshipViewDetailsBreadCrumb-title">
              Research In Humanity Program
            </h1>

            <div className="RunningIntenshipViewDetailsBreadCrumb-org">
              <FiBriefcase className="org-icon" />
              <span>I3</span>
            </div>
          </div>

          {/* About Section */}
          <section className="RunningIntenshipViewDetailsBreadCrumb-section">
            <h2 className="RunningIntenshipViewDetailsBreadCrumb-section-title">
              About the Internship
            </h2>
            <div className="RunningIntenshipViewDetailsBreadCrumb-text-block">
              <p>fsbv et EFWR wt4 v4wtt wrtrt trgr ar</p>
              <p>जनवाद जस से जीव</p>
              <p>बेबे विश्वास हे ए यूवी हे इस बहसे</p>
              <p>बेशक नहीं</p>
            </div>
          </section>

          {/* Project Focus & Outcome */}
          <section className="RunningIntenshipViewDetailsBreadCrumb-section">
            <h3 className="RunningIntenshipViewDetailsBreadCrumb-heading focus-heading">
              <FiCheckCircle className="heading-icon" /> Project Focus & Outcome
            </h3>
            <p className="RunningIntenshipViewDetailsBreadCrumb-indent-text">
              retbga
            </p>
          </section>

          {/* Structure & Key Modules */}
          <section className="RunningIntenshipViewDetailsBreadCrumb-section">
            <h3 className="RunningIntenshipViewDetailsBreadCrumb-heading structure-heading">
              <FiLayers className="heading-icon" /> Structure & Key Modules
            </h3>
            <div className="RunningIntenshipViewDetailsBreadCrumb-module-card">
              <span className="module-number">1</span>
              <span className="module-text">rhezr</span>
            </div>
          </section>

          {/* Tools & Skills Grid */}
          <div className="RunningIntenshipViewDetailsBreadCrumb-grid-2col">
            <section className="RunningIntenshipViewDetailsBreadCrumb-section">
              <h3 className="RunningIntenshipViewDetailsBreadCrumb-heading tools-heading">
                <FiChevronRight className="heading-icon" /> Tools & Technologies
              </h3>
              <div className="RunningIntenshipViewDetailsBreadCrumb-chip chip-tools">
                aewawt
              </div>
            </section>

            <section className="RunningIntenshipViewDetailsBreadCrumb-section">
              <h3 className="RunningIntenshipViewDetailsBreadCrumb-heading skills-heading">
                <FiBookOpen className="heading-icon" /> Skills & Prerequisites
              </h3>
              <div className="RunningIntenshipViewDetailsBreadCrumb-chip chip-skills">
                agw aw4t
              </div>
            </section>
          </div>

          {/* Facilities & Placements Grid */}
          <div className="RunningIntenshipViewDetailsBreadCrumb-grid-2col">
            <section className="RunningIntenshipViewDetailsBreadCrumb-section">
              <h3 className="RunningIntenshipViewDetailsBreadCrumb-heading facilities-heading">
                <FiCoffee className="heading-icon" /> Facilities & Benefits
              </h3>
              <div className="RunningIntenshipViewDetailsBreadCrumb-info-box box-orange">
                <HiSparkles className="box-icon icon-orange" />
                <span>ehgarh5 etr tt4q w5y</span>
              </div>
            </section>

            <section className="RunningIntenshipViewDetailsBreadCrumb-section">
              <h3 className="RunningIntenshipViewDetailsBreadCrumb-heading placement-heading">
                <FiAward className="heading-icon" /> Career Scope & Placements
              </h3>
              <div className="RunningIntenshipViewDetailsBreadCrumb-info-box box-green">
                <FiCheckCircle className="box-icon icon-green" />
                <span>5yw e5wyw aer g q4t4aq</span>
              </div>
            </section>
          </div>

        </div>

        {/* Sidebar & CTA Actions (Right Column) */}
        <aside className="RunningIntenshipViewDetailsBreadCrumb-sidebar">
          
          {/* Top Floating Buttons */}
          <div className="RunningIntenshipViewDetailsBreadCrumb-top-actions">
            <button className="RunningIntenshipViewDetailsBreadCrumb-apply-top-btn">
              <FiSend /> Apply Now
            </button>
            <button className="RunningIntenshipViewDetailsBreadCrumb-share-top-btn">
              <FiShare2 /> Share Internship
            </button>
          </div>

          {/* Quick Overview Card */}
          <div className="RunningIntenshipViewDetailsBreadCrumb-overview-card">
            <div className="RunningIntenshipViewDetailsBreadCrumb-overview-header">
              <FiShield className="overview-header-icon" />
              <h3>Quick Overview</h3>
            </div>

            <div className="RunningIntenshipViewDetailsBreadCrumb-overview-grid">
              
              <div className="overview-item">
                <HiSparkles className="item-icon icon-gold" />
                <div className="item-details">
                  <span className="item-label">Fee structure</span>
                  <span className="item-value text-gold">FREE</span>
                </div>
              </div>

              <div className="overview-item">
                <FiMapPin className="item-icon icon-green" />
                <div className="item-details">
                  <span className="item-label">Location</span>
                  <span className="item-value">THEKMA</span>
                </div>
              </div>

              <div className="overview-item">
                <FiClock className="item-icon icon-blue" />
                <div className="item-details">
                  <span className="item-label">Duration</span>
                  <span className="item-value">1 Month</span>
                </div>
              </div>

              <div className="overview-item">
                <FiCalendar className="item-icon icon-purple" />
                <div className="item-details">
                  <span className="item-label">Start Date</span>
                  <span className="item-value">03 Sept 2026</span>
                </div>
              </div>

              <div className="overview-item">
                <FiCalendar className="item-icon icon-red" />
                <div className="item-details">
                  <span className="item-label">Last Date</span>
                  <span className="item-value text-red">04 Nov 2026</span>
                </div>
              </div>

              <div className="overview-item">
                <FiAward className="item-icon icon-cyan" />
                <div className="item-details">
                  <span className="item-label">Credits</span>
                  <span className="item-value">4</span>
                </div>
              </div>

              <div className="overview-item">
                <FiBookOpen className="item-icon icon-purple" />
                <div className="item-details">
                  <span className="item-label">Qualification</span>
                  <span className="item-value">MA</span>
                </div>
              </div>

              <div className="overview-item">
                <FiUserCheck className="item-icon icon-gold" />
                <div className="item-details">
                  <span className="item-label">Mentor</span>
                  <span className="item-value">Senior Instructor</span>
                </div>
              </div>

              <div className="overview-item">
                <FiBriefcase className="item-icon icon-blue" />
                <div className="item-details">
                  <span className="item-label">Organizer</span>
                  <span className="item-value">I3</span>
                </div>
              </div>

              <div className="overview-item">
                <FiPhoneCall className="item-icon icon-teal" />
                <div className="item-details">
                  <span className="item-label">Contact</span>
                  <span className="item-value">Avishek Kumar</span>
                </div>
              </div>

            </div>

            <button className="RunningIntenshipViewDetailsBreadCrumb-apply-card-btn">
              <FiSend /> Apply Now
            </button>
          </div>

          {/* Need Assistance Block */}
          <div className="RunningIntenshipViewDetailsBreadCrumb-assistance-box">
            <div className="assistance-header">
              <FiHelpCircle className="assistance-icon" />
              <h4>Need Assistance?</h4>
            </div>
            <p>
              If you have any questions regarding the internship syllabus, dates, registration fees, or certificates, please reach out via the official helpdesk or contact details listed above.
            </p>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default RunningIntenshipViewDetailsBreadCrumb;