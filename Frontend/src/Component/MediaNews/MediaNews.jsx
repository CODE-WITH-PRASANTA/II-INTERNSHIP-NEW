import React, { useState } from "react";
import { FiFilter, FiGrid, FiList, FiCalendar, FiExternalLink } from "react-icons/fi";
import "./MediaNews.css";

const initialArticles = [
  {
    id: 1,
    title: "DDDDDDDDDDDDDDDDD",
    date: "4 August 2026",
    source: "DPK BLOG POST",
    description: "CCCCCCCCCCCCCCCCCC",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    url: "#",
    year: "2026",
    category: "Campus",
  },
  {
    id: 2,
    title: "Transforming Tech Education in India",
    date: "22 June 2026",
    source: "THE ECONOMIC TIMES",
    description:
      "A special feature on how our free internship cohorts are building job-ready skills.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80",
    url: "#",
    year: "2026",
    category: "Press Release",
  },
  {
    id: 3,
    title: "Future of AI & Machine Learning Internships",
    date: "15 May 2025",
    source: "TECH CRUNCH",
    description:
      "An in-depth article exploring industry partnerships and real-world student projects.",
    image:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80",
    url: "#",
    year: "2025",
    category: "Feature",
  },
];

const MediaNews = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

  // Filter Handlers
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
  const filteredArticles = initialArticles.filter((article) => {
    const matchesYear =
      selectedYears.length === 0 || selectedYears.includes(article.year);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(article.category);
    return matchesYear && matchesCategory;
  });

  return (
    <div className="media-news-container">
      {/* Sidebar Filters */}
      <aside className="media-news-sidebar">
        <div className="media-news-sidebar-header">
          <FiFilter className="media-news-filter-icon" />
          <h2>Filter Media</h2>
        </div>

        {/* Year Filter */}
        <div className="media-news-filter-group">
          <h3>YEAR</h3>
          {["2026", "2025", "2024"].map((year) => (
            <label key={year} className="media-news-checkbox-label">
              <input
                type="checkbox"
                checked={selectedYears.includes(year)}
                onChange={() => handleYearChange(year)}
                className="media-news-checkbox"
              />
              <span>{year}</span>
            </label>
          ))}
        </div>

        {/* Category Filter */}
        <div className="media-news-filter-group">
          <h3>CATEGORY</h3>
          {["Press Release", "Interview", "Feature", "Campus"].map(
            (category) => (
              <label key={category} className="media-news-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="media-news-checkbox"
                />
                <span>{category}</span>
              </label>
            )
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="media-news-main">
        <div className="media-news-main-header">
          <h2 className="media-news-section-title">Latest Mentions</h2>

          {/* View Toggles */}
          <div className="media-news-view-toggle">
            <button
              className={`media-news-toggle-btn ${
                viewMode === "grid" ? "active" : ""
              }`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <FiGrid className="media-news-toggle-icon" />
            </button>
            <button
              className={`media-news-toggle-btn ${
                viewMode === "list" ? "active" : ""
              }`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <FiList className="media-news-toggle-icon" />
            </button>
          </div>
        </div>

        {/* Cards Layout */}
        <div className={`media-news-content-layout ${viewMode}`}>
          {filteredArticles.map((article) => (
            <div key={article.id} className="media-news-card">
              <div className="media-news-image-wrapper">
                <img
                  src={article.image}
                  alt={article.title}
                  className="media-news-image"
                />
              </div>

              <div className="media-news-card-body">
                {/* Date Tag */}
                <div className="media-news-date-badge">
                  <FiCalendar className="media-news-badge-icon" />
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="media-news-card-title">{article.title}</h3>

                {/* Source Label */}
                <span className="media-news-card-source">{article.source}</span>

                {/* Description */}
                <p className="media-news-card-description">
                  {article.description}
                </p>

                {/* Action Link */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-news-read-link"
                >
                  Read Article <FiExternalLink className="media-news-link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MediaNews;