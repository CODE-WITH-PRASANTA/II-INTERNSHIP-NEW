import React, { useState } from "react";
import { FiFilter, FiGrid, FiList, FiCalendar, FiArrowUpRight } from "react-icons/fi";
import "./OnlineMedia.css";

const initialLinks = [
  {
    id: "01",
    source: "TechPulse",
    date: "14 Jul 2026",
    title: "IIInternship Launches India-wide Digital Training Hub",
    url: "#",
    year: "2026",
    category: "Press Release",
  },
  {
    id: "02",
    source: "Logistics Wire",
    date: "16 Jul 2026",
    title: "Next Gen E-Commerce Logistics Internships Announced",
    url: "#",
    year: "2026",
    category: "Interview",
  },
  {
    id: "03",
    source: "Future Tech News",
    date: "16 Jul 2026",
    title: "AI in Warehousing: Empowering Youth with Practical Skills",
    url: "#",
    year: "2026",
    category: "Feature",
  },
  {
    id: "04",
    source: "DPK BLOG POST",
    date: "04 Aug 2026",
    title: "DBMS",
    url: "#",
    year: "2026",
    category: "Campus",
  },
];

const OnlineMedia = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' for 1st image layout, 'list' for 2nd image layout

  // Filter Checkbox Handlers
  const handleYearChange = (year) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filter Logic
  const filteredLinks = initialLinks.filter((link) => {
    const matchesYear =
      selectedYears.length === 0 || selectedYears.includes(link.year);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(link.category);
    return matchesYear && matchesCategory;
  });

  return (
    <div className="online-media-container">
      {/* Filter Sidebar */}
      <aside className="online-media-sidebar">
        <div className="online-media-sidebar-header">
          <FiFilter className="online-media-filter-icon" />
          <h2>Filter Media</h2>
        </div>

        {/* Year Filter */}
        <div className="online-media-filter-group">
          <h3>YEAR</h3>
          {["2026", "2025", "2024"].map((year) => (
            <label key={year} className="online-media-checkbox-label">
              <input
                type="checkbox"
                checked={selectedYears.includes(year)}
                onChange={() => handleYearChange(year)}
                className="online-media-checkbox"
              />
              <span>{year}</span>
            </label>
          ))}
        </div>

        {/* Category Filter */}
        <div className="online-media-filter-group">
          <h3>CATEGORY</h3>
          {["Press Release", "Interview", "Feature", "Campus"].map(
            (category) => (
              <label key={category} className="online-media-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="online-media-checkbox"
                />
                <span>{category}</span>
              </label>
            )
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="online-media-main">
        <div className="online-media-main-header">
          <h2 className="online-media-section-title">Latest Links</h2>

          {/* Grid / List Switcher */}
          <div className="online-media-view-toggle">
            <button
              className={`online-media-toggle-btn ${
                viewMode === "grid" ? "active" : ""
              }`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <FiGrid className="online-media-toggle-icon" />
            </button>
            <button
              className={`online-media-toggle-btn ${
                viewMode === "list" ? "active" : ""
              }`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <FiList className="online-media-toggle-icon" />
            </button>
          </div>
        </div>

        {/* Cards Layout Container (Grid or List Mode) */}
        <div className={`online-media-content-layout ${viewMode}`}>
          {filteredLinks.map((item) => (
            <div key={item.id} className="online-media-card">
              <div className="online-media-card-number">{item.id}</div>

              <div className="online-media-card-content">
                <div className="online-media-card-meta">
                  <span className="online-media-card-source">
                    {item.source}
                  </span>
                  <span className="online-media-meta-divider">•</span>
                  <span className="online-media-card-date">
                    <FiCalendar className="online-media-calendar-icon" />
                    {item.date}
                  </span>
                </div>

                <h3 className="online-media-card-title">{item.title}</h3>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="online-media-card-action-btn"
                aria-label="Open Link"
              >
                <FiArrowUpRight className="online-media-arrow-icon" />
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OnlineMedia;