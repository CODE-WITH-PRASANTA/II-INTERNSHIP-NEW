import React, { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiClock,
  FiDollarSign,
  FiGrid,
  FiList,
  FiBriefcase,
  FiCheckCircle,
  FiLayers,
  FiCode,
  FiChevronDown,
  FiChevronUp,
  FiSend,
  FiShare2,
} from "react-icons/fi";
import "./InternshipsRunningCard.css";

const initialInternships = [
  {
    id: 1,
    title: "Research In Humanity Program",
    code: "IN2026CN27328",
    status: "RUNNING",
    costType: "FREE OF COST",
    residency: "NR",
    domain: "HUMANITY",
    description:
      "fsbv et EFWR wt4 v4wtt wrtrt trgr ar&nbsp;जनवाद जस से जीव&nbsp;बेबे विश्वासा हे ए यूवी हे इरा बहरों&nbsp;बेशक नहीं&nbsp;",
    projectFocus: "retbga",
    keyModules: ["rhezr"],
    toolsTech: ["aewawt"],
    fee: "Free",
    note: "",
  },
  {
    id: 2,
    title: "Smart Web Developer Internship- Coding To Carrer.",
    code: "IN2026CN57463",
    status: "RUNNING",
    costType: "BY PAYING FEES",
    residency: "RESIDENTIAL",
    domain: "COMPUTER SCIENCE",
    description:
      "Website Development Internship Program Lead: Learnify, Lucknow Organized by: International Institute of Internship...",
    projectFocus: "Real Time",
    keyModules: ["React", "js node"],
    toolsTech: ["next js"],
    fee: "₹1",
    note: "The internship program is completely free of charge. The contribution fee being collected is for the special personal amenities and other essential services provided during the internship.",
  },
  {
    id: 3,
    title: "software",
    code: "IN2026CM82168",
    status: "RUNNING",
    costType: "BY PAYING FEES",
    residency: "NON-RESIDENTIAL",
    domain: "ENGINEERING",
    description: "sanjknmf dsnfkldsflkmf n kldslkflsdkf",
    projectFocus: "fdslkfmdflklglk lkkdsflksdf",
    keyModules: ["dsf", "sdfsd", "fsd", "s"],
    toolsTech: ["dsfds", "dsfsdf"],
    fee: "₹1",
    note: "The internship program is completely free of charge. The contribution fee being collected is for the special personal amenities and other essential services provided during the internship.",
  },
  {
    id: 4,
    title: "sdhkkdsknfds,nbls",
    code: "IN2026CM47885",
    status: "RUNNING",
    costType: "STIPEND",
    residency: "NON-RESIDENTIAL",
    domain: "ENGINEERING",
    description: "dwasdadsafdsfdsfsdfsdfsdffd",
    projectFocus: "sadans,,dmn,amsn",
    keyModules: ["fdssafd", "dsfd"],
    toolsTech: ["fdsf", "sdf", "sfd"],
    fee: "Free",
    note: "",
  },
  {
    id: 5,
    title: "ssajhsa",
    code: "IN2026CM60096",
    status: "RUNNING",
    costType: "FREE OF COST",
    residency: "NON-RESIDENTIAL",
    domain: "JHDASJHD",
    description: "jsabmnasdb",
    projectFocus: "kasdhhaskdj",
    keyModules: ["Uidesig", "nsanmdn", "bmsabdmbd"],
    toolsTech: ["bmdsbamb", "sakmndsb", "nsan", "d"],
    fee: "Free",
    note: "",
  },
  {
    id: 6,
    title: "Cloud Computing & DevOps Practice",
    code: "IN2026CM81251",
    status: "RUNNING",
    costType: "FREE OF COST",
    residency: "NON-RESIDENTIAL",
    domain: "ENGINEERING",
    description:
      "Practical deployment pipelines, Docker containerization, and AWS infrastructure management.",
    projectFocus: "Automated Blue-Green Deployment Pipeline",
    keyModules: [
      "AWS Basics",
      "Docker Containers",
      "CI/CD with GitHub Actions",
      "Infrastructure as Code (Terraform)",
    ],
    toolsTech: ["AWS", "Docker", "Terraform", "GitHub Actions", "Nginx"],
    fee: "Free",
    note: "",
  },
];

const InternshipsRunningCard = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredInternships = initialInternships.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="InternshipsRunningCard-wrapper">
      <div className="InternshipsRunningCard-container">
        {/* LEFT SIDEBAR FILTERS */}
        <aside className="InternshipsRunningCard-sidebar">
          {/* Quick Search */}
          <div className="InternshipsRunningCard-search-box">
            <h3 className="InternshipsRunningCard-sidebar-title">
              Quick Search
            </h3>
            <div className="InternshipsRunningCard-input-group">
              <FiSearch className="InternshipsRunningCard-search-icon" />
              <input
                type="text"
                placeholder="e.g. Software Engineer"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters Card */}
          <div className="InternshipsRunningCard-filter-card">
            <div className="InternshipsRunningCard-filter-header">
              <div className="InternshipsRunningCard-filter-title">
                <FiFilter className="InternshipsRunningCard-icon-green" />
                <span>Filters</span>
              </div>
              <button
                className="InternshipsRunningCard-clear-btn"
                onClick={() => setSearchQuery("")}
              >
                CLEAR ALL
              </button>
            </div>

            {/* Domain Group */}
            <div className="InternshipsRunningCard-filter-group">
              <div className="InternshipsRunningCard-group-label">
                <FiBriefcase className="InternshipsRunningCard-group-icon" />
                <span>Domain</span>
              </div>
              {["Engineering", "Design", "Marketing", "Data Science"].map(
                (item) => (
                  <label
                    key={item}
                    className="InternshipsRunningCard-checkbox-label"
                  >
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                )
              )}
            </div>

            {/* Duration Group */}
            <div className="InternshipsRunningCard-filter-group">
              <div className="InternshipsRunningCard-group-label">
                <FiClock className="InternshipsRunningCard-group-icon" />
                <span>Duration</span>
              </div>
              {["1-2 Months", "3-4 Months", "6 Months", "Flexible"].map(
                (item) => (
                  <label
                    key={item}
                    className="InternshipsRunningCard-checkbox-label"
                  >
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                )
              )}
            </div>

            {/* Stipend Group */}
            <div className="InternshipsRunningCard-filter-group">
              <div className="InternshipsRunningCard-group-label">
                <FiDollarSign className="InternshipsRunningCard-group-icon" />
                <span>Stipend</span>
              </div>
              {["Paid", "Unpaid", "Performance Based"].map((item) => (
                <label
                  key={item}
                  className="InternshipsRunningCard-checkbox-label"
                >
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT AREA */}
        <main className="InternshipsRunningCard-main">
          {/* Header Bar */}
          <div className="InternshipsRunningCard-top-bar">
            <div>
              <h1 className="InternshipsRunningCard-heading">
                Showing {filteredInternships.length} Running Internships
              </h1>
              <p className="InternshipsRunningCard-subheading">
                Explore ongoing, live practice internships and join directly.
              </p>
            </div>

            {/* View Toggle Buttons */}
            <div className="InternshipsRunningCard-view-toggle">
              <button
                className={`InternshipsRunningCard-toggle-btn ${
                  viewMode === "grid" ? "active" : ""
                }`}
                onClick={() => setViewMode("grid")}
                title="Grid View"
              >
                <FiGrid />
              </button>
              <button
                className={`InternshipsRunningCard-toggle-btn ${
                  viewMode === "list" ? "active" : ""
                }`}
                onClick={() => setViewMode("list")}
                title="List View"
              >
                <FiList />
              </button>
            </div>
          </div>

          {/* Cards Layout Grid or List */}
          <div className={`InternshipsRunningCard-layout ${viewMode}`}>
            {filteredInternships.map((card) => (
              <div key={card.id} className="InternshipsRunningCard-card">
                {/* Header Section */}
                <div className="InternshipsRunningCard-card-header">
                  <div className="InternshipsRunningCard-badge-icon">
                    <FiBriefcase />
                  </div>
                  <h2 className="InternshipsRunningCard-card-title">
                    {card.title}
                  </h2>
                </div>

                {/* Pill Tags Row */}
                <div className="InternshipsRunningCard-tags-row">
                  <span className="InternshipsRunningCard-tag tag-code">
                    {card.code}
                  </span>
                  <span className="InternshipsRunningCard-tag tag-status">
                    {card.status}
                  </span>
                  <span
                    className={`InternshipsRunningCard-tag ${
                      card.costType === "FREE OF COST"
                        ? "tag-free"
                        : card.costType === "STIPEND"
                        ? "tag-stipend"
                        : "tag-fee"
                    }`}
                  >
                    {card.costType}
                  </span>
                  <span className="InternshipsRunningCard-tag tag-residency">
                    {card.residency}
                  </span>
                  <span className="InternshipsRunningCard-tag tag-domain">
                    {card.domain}
                  </span>
                </div>

                {/* Description */}
                <p className="InternshipsRunningCard-description">
                  {card.description}
                </p>

                {/* Project Focus Box */}
                <div className="InternshipsRunningCard-project-focus">
                  <div className="InternshipsRunningCard-section-title green-text">
                    <FiCheckCircle className="InternshipsRunningCard-inline-icon" />
                    PROJECT FOCUS
                  </div>
                  <div className="InternshipsRunningCard-focus-text">
                    {card.projectFocus}
                  </div>
                </div>

                {/* Key Modules */}
                <div className="InternshipsRunningCard-section">
                  <div className="InternshipsRunningCard-section-title">
                    <FiLayers className="InternshipsRunningCard-inline-icon blue-text" />
                    KEY MODULES
                  </div>
                  <div className="InternshipsRunningCard-chips-container">
                    {card.keyModules.map((module, i) => (
                      <span
                        key={i}
                        className="InternshipsRunningCard-chip chip-gray"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Tech */}
                <div className="InternshipsRunningCard-section">
                  <div className="InternshipsRunningCard-section-title">
                    <FiCode className="InternshipsRunningCard-inline-icon orange-text" />
                    TOOLS & TECH
                  </div>
                  <div className="InternshipsRunningCard-chips-container">
                    {card.toolsTech.map((tool, i) => (
                      <span
                        key={i}
                        className="InternshipsRunningCard-chip chip-green"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Facilitation Fee Box */}
                <div className="InternshipsRunningCard-fee-box">
                  <span className="InternshipsRunningCard-fee-sparkle">✨</span>
                  <span>FACILITATION & PACKAGE FEE:</span>
                  <strong>{card.fee}</strong>
                </div>

                {/* Fee Note if exists */}
                {card.note && (
                  <p className="InternshipsRunningCard-fee-note">{card.note}</p>
                )}

                {/* Requirements Dropdown Toggle */}
                <div
                  className="InternshipsRunningCard-requirements-toggle"
                  onClick={() => toggleExpand(card.id)}
                >
                  <span>View Internship Details & Requirements</span>
                  {expandedCards[card.id] ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>

                {/* Collapsible Content */}
                {expandedCards[card.id] && (
                  <div className="InternshipsRunningCard-expanded-content">
                    <p>• Minimum Eligibility: Graduate or enrolled student</p>
                    <p>• Commitment: 10-15 hrs / week</p>
                    <p>• Certificate upon successful completion</p>
                  </div>
                )}

                {/* Action Buttons Footer */}
                <div className="InternshipsRunningCard-card-footer">
                  <button className="InternshipsRunningCard-btn-outline">
                    View Detail
                  </button>
                  <button className="InternshipsRunningCard-btn-primary">
                    Apply Now <FiSend className="InternshipsRunningCard-btn-icon" />
                  </button>
                  <button
                    className="InternshipsRunningCard-btn-icon-only"
                    title="Share"
                  >
                    <FiShare2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default InternshipsRunningCard;