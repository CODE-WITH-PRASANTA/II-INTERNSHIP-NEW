import React, { useState } from "react";
import "./AvailableImmersion.css";
import {
  GraduationCap,
  Home,
  Sprout,
  Heart,
  BookOpen,
  Landmark,
  Activity,
  Trees,
  Sparkles,
  Building2,
  HelpCircle,
  MapPin,
  Clock,
  Award,
  Calendar,
  Sparkle,
  Send,
  Share2,
  X,
  CheckCircle2,
} from "lucide-react";

const programsData = [
  {
    id: 1,
    category: "EDUCATION IMMERSION",
    title: "Cloud Native Architectures Boot Camp",
    icon: GraduationCap,
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    location: "DELHI NCR",
    duration: "6 WEEK",
    roleBadge: "SENIOR INSTRUCTOR",
    description:
      "Hands-on immersion program with Kubernetes, AWS, and Microservices.",
    dates: "28 Jul 2026 — 27 Aug 2026",
    fees: "Free / Project Scope",
    isFree: true,
  },
  {
    id: 2,
    category: "VILLAGE IMMERSION",
    title: "Village Immersion",
    icon: Home,
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    location: "THEKMA, AZAMGARH, UP",
    duration: "1 MONTH",
    roleBadge: "SENIOR INSTRUCTOR",
    description:
      "Field immersion into local governance, community structures, and rural ecosystems.",
    dates: "29 Jul 2026 — 28 Aug 2026",
    fees: "Free / Project Scope",
    isFree: true,
  },
  {
    id: 3,
    category: "RURAL DEVELOPMENT IMMERSION",
    title: "Rural Livelihoods & Enterprise Immersion",
    icon: Sprout,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    location: "RAJASTHAN / MADHYA PRADESH",
    duration: "3 WEEKS",
    description:
      "Work with rural cooperatives, self-help groups, and micro-enterprises to understand village economy structures.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹5,000",
    isFree: false,
  },
  {
    id: 4,
    category: "VILLAGE IMMERSION",
    title: "Village Life & Culture Immersion",
    icon: Home,
    iconBg: "#ffedd5",
    iconColor: "#ea580c",
    location: "UTTARAKHAND HIMALAYAN VILLAGES",
    duration: "2 WEEKS",
    description:
      "Experience authentic rural living, traditional agricultural practices, water harvesting systems, and community resources.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹4,000",
    isFree: false,
  },
  {
    id: 5,
    category: "SOCIAL WORK IMMERSION",
    title: "Community Empowerment & Social Work",
    icon: Heart,
    iconBg: "#ffe4e6",
    iconColor: "#e11d48",
    location: "DELHI NCR / MAHARASHTRA URBAN SLUMS",
    duration: "4 WEEKS",
    description:
      "Partner with local NGOs and community centers to support welfare campaigns, youth mentoring, and educational drives.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹4,500",
    isFree: false,
  },
  {
    id: 6,
    category: "RESEARCH IMMERSION",
    title: "Socio-Economic Research & Policy Evaluation",
    icon: BookOpen,
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    location: "HYBRID / PARTNER ACADEMIC CENTERS",
    duration: "6 WEEKS",
    description:
      "Undertake empirical research, conduct field surveys, collect qualitative/quantitative data, and draft policy case studies.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹6,000",
    isFree: false,
  },
  {
    id: 7,
    category: "GOVERNANCE/POLICY IMMERSION",
    title: "Grassroots Governance & Panchayati Raj Systems",
    icon: Landmark,
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    location: "DISTRICT HEADQUARTERS IN UTTAR PRADESH / BIHAR",
    duration: "3 WEEKS",
    description:
      "Study grassroots administration, policy execution, and rural governance systems. Observe how Central/State schemes are rolled out.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹5,500",
    isFree: false,
  },
  {
    id: 8,
    category: "EDUCATION IMMERSION",
    title: "Primary Education & Creative Learning Outreach",
    icon: GraduationCap,
    iconBg: "#ede9fe",
    iconColor: "#8b5cf6",
    location: "RURAL KARNATAKA / TAMIL NADU",
    duration: "4 WEEKS",
    description:
      "Teach at underserved rural primary schools using creative pedagogical tools, design low-cost teaching aids, and run fun learning camps.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹4,000",
    isFree: false,
  },
  {
    id: 9,
    category: "HEALTH & MEDICINE IMMERSION",
    title: "Public Health & Rural Medical Care Outreach",
    icon: Activity,
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    location: "PRIMARY HEALTH CENTERS IN GUJARAT / KERALA",
    duration: "4 WEEKS",
    description:
      "Assist in rural health camps, participate in public health awareness drives, compile medical registries, and study primary healthcare.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹6,000",
    isFree: false,
  },
  {
    id: 10,
    category: "NATURE & ENVIRONMENT IMMERSION",
    title: "Ecology, Forestry & Sustainable Agriculture",
    icon: Trees,
    iconBg: "#ccfbf1",
    iconColor: "#0d9488",
    location: "WESTERN GHATS / ECO-FARMS IN HIMACHAL PRADESH",
    duration: "2 WEEKS",
    description:
      "Participate in conservation efforts, organic farming workshops, waste management programs, and biodiversity mapping.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹5,000",
    isFree: false,
  },
  {
    id: 11,
    category: "SPIRITUAL IMMERSION",
    title: "Heritage, Yoga & Spiritual Mindfulness",
    icon: Sparkles,
    iconBg: "#fef9c3",
    iconColor: "#ca8a04",
    location: "RISHIKESH / VARANASI",
    duration: "1 WEEK",
    description:
      "Discover ancient spiritual heritage, participate in yoga & meditation practices, study local traditions, and experience cultural ashrams.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹7,500",
    isFree: false,
  },
  {
    id: 12,
    category: "NGO FIELD IMMERSION",
    title: "NGO Operations & Grassroots Project Management",
    icon: Building2,
    iconBg: "#e0e7ff",
    iconColor: "#4f46e5",
    location: "MAJOR INDIAN CITIES / NGO RURAL HUBS",
    duration: "5 WEEKS",
    description:
      "Learn the administrative and execution aspects of non-profits, including fundraising campaigns, donor relations, and field audits.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "₹5,000",
    isFree: false,
  },
  {
    id: 13,
    category: "OTHER",
    title: "Custom Immersion Projects",
    icon: HelpCircle,
    iconBg: "#f1f5f9",
    iconColor: "#64748b",
    location: "TAILORED BASED ON REQUEST",
    duration: "FLEXIBLE (1-8 WEEKS)",
    description:
      "Work with our academic and field coordinators to design a custom experiential program that fits your specific learning requirements.",
    dates: "01 Aug 2026 — 31 Aug 2026",
    fees: "Free / Project Scope",
    isFree: true,
  },
];

const AvailableImmersion = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [appliedProgram, setAppliedProgram] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleShare = async (prog) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: prog.title,
          text: `Check out the ${prog.title} immersion program!`,
          url: window.location.href,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          triggerToast("Program link copied to clipboard!");
        }
      }
    } else {
      navigator.clipboard.writeText(
        `${window.location.href}#program-${prog.id}`
      );
      triggerToast("Program link copied to clipboard!");
    }
  };

  const handleApply = (prog) => {
    setAppliedProgram(prog);
  };

  return (
    <div className="available-immersion-container">
      {/* Background Soft Glows */}
      <div className="available-immersion-glow available-immersion-glow--left" />
      <div className="available-immersion-glow available-immersion-glow--right" />

      {/* Header Section */}
      <header className="available-immersion-header">
        <h1 className="available-immersion-header__title">
          Available Immersion Programs
        </h1>
        <p className="available-immersion-header__subtitle">
          Choose from a variety of domain-specific immersion cohorts and gain
          true field experience.
        </p>
      </header>

      {/* Grid */}
      <main className="available-immersion-grid">
        {programsData.map((prog) => {
          const IconComponent = prog.icon;
          return (
            <article key={prog.id} className="available-immersion-card">
              {/* Card Top Category & Icon */}
              <div className="available-immersion-card__top">
                <div
                  className="available-immersion-card__icon"
                  style={{
                    backgroundColor: prog.iconBg,
                    color: prog.iconColor,
                  }}
                >
                  <IconComponent size={22} strokeWidth={2.2} />
                </div>
                <span className="available-immersion-card__category">
                  {prog.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="available-immersion-card__title">{prog.title}</h3>

              {/* Badges Bar */}
              <div className="available-immersion-card__badges">
                <span className="available-immersion-badge available-immersion-badge--purple">
                  <MapPin size={13} className="available-immersion-badge__icon" />
                  {prog.location}
                </span>
                <span className="available-immersion-badge available-immersion-badge--yellow">
                  <Clock size={13} className="available-immersion-badge__icon" />
                  {prog.duration}
                </span>
                {prog.roleBadge && (
                  <span className="available-immersion-badge available-immersion-badge--teal">
                    <Award size={13} className="available-immersion-badge__icon" />
                    {prog.roleBadge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="available-immersion-card__desc">
                {prog.description}
              </p>

              {/* Date Interval */}
              <div className="available-immersion-card__dates">
                <Calendar size={14} className="available-immersion-card__dates-icon" />
                <span>{prog.dates}</span>
              </div>

              {/* Fees Banner */}
              <div className="available-immersion-card__fee">
                <Sparkle size={15} className="available-immersion-card__fee-icon" />
                <span className="available-immersion-card__fee-label">
                  PROGRAM FEES:
                </span>
                <span className="available-immersion-card__fee-amount">
                  {prog.fees}
                </span>
              </div>

              {/* Action Buttons Toolbar */}
              <div className="available-immersion-card__actions">
                <button
                  type="button"
                  className="available-immersion-btn available-immersion-btn--secondary"
                  onClick={() => setSelectedProgram(prog)}
                >
                  View Detail
                </button>

                <button
                  type="button"
                  className="available-immersion-btn available-immersion-btn--primary"
                  onClick={() => handleApply(prog)}
                >
                  <span>Apply Now</span>
                  <Send size={14} className="available-immersion-btn__send-icon" />
                </button>

                <button
                  type="button"
                  className="available-immersion-btn available-immersion-btn--icon"
                  aria-label="Share Program"
                  onClick={() => handleShare(prog)}
                >
                  <Share2 size={15} />
                </button>
              </div>
            </article>
          );
        })}
      </main>

      {/* Details Modal */}
      {selectedProgram && (
        <div
          className="available-immersion-modal-overlay"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="available-immersion-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="available-immersion-modal__close"
              onClick={() => setSelectedProgram(null)}
            >
              <X size={20} />
            </button>
            <div className="available-immersion-modal__header">
              <span className="available-immersion-card__category">
                {selectedProgram.category}
              </span>
              <h2>{selectedProgram.title}</h2>
            </div>
            <div className="available-immersion-modal__body">
              <div
                className="available-immersion-card__badges"
                style={{ marginBottom: "1rem" }}
              >
                <span className="available-immersion-badge available-immersion-badge--purple">
                  <MapPin size={13} /> {selectedProgram.location}
                </span>
                <span className="available-immersion-badge available-immersion-badge--yellow">
                  <Clock size={13} /> {selectedProgram.duration}
                </span>
              </div>
              <p className="available-immersion-modal__desc">
                {selectedProgram.description}
              </p>
              <div className="available-immersion-modal__meta">
                <p>
                  <strong>Dates:</strong> {selectedProgram.dates}
                </p>
                <p>
                  <strong>Fees:</strong> {selectedProgram.fees}
                </p>
              </div>
            </div>
            <div className="available-immersion-modal__footer">
              <button
                className="available-immersion-btn available-immersion-btn--secondary"
                onClick={() => setSelectedProgram(null)}
              >
                Close
              </button>
              <button
                className="available-immersion-btn available-immersion-btn--primary"
                onClick={() => {
                  const p = selectedProgram;
                  setSelectedProgram(null);
                  handleApply(p);
                }}
              >
                Apply for Cohort
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Success Modal */}
      {appliedProgram && (
        <div
          className="available-immersion-modal-overlay"
          onClick={() => setAppliedProgram(null)}
        >
          <div
            className="available-immersion-modal available-immersion-modal--success"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle2
              size={50}
              className="available-immersion-modal__success-icon"
            />
            <h2>Application Initiated!</h2>
            <p>
              You are applying for <strong>{appliedProgram.title}</strong>. Our
              team will contact you regarding upcoming cohort schedules.
            </p>
            <button
              className="available-immersion-btn available-immersion-btn--primary available-immersion-btn--full"
              onClick={() => setAppliedProgram(null)}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="available-immersion-toast">{toastMessage}</div>
      )}
    </div>
  );
};

export default AvailableImmersion;