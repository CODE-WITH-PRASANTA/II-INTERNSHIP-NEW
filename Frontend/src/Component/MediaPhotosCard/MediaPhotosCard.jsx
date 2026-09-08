import React, { useState } from "react";
import { FiFilter, FiGrid, FiList, FiX, FiMaximize2 } from "react-icons/fi";
import "./MediaPhotosCard.css";

const initialPhotos = [
  {
    id: 1,
    title: "DBMS Online",
    date: "2026-08-04",
    description: "Digital Bookkiping Management System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    year: "2026",
    category: "Press Release",
  },
  {
    id: 2,
    title: "Tech-Ops Hackathon Presentation",
    date: "2026-06-24",
    description: "Teams showcasing their optimized routing algorithms to mentors.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    year: "2026",
    category: "Feature",
  },
  {
    id: 3,
    title: "Hands-on Logistics Training",
    date: "June 18, 2026",
    description: "Interns practicing order sorting and box labeling workflows.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    year: "2026",
    category: "Campus",
  },
  {
    id: 4,
    title: "Annual Developer Summit",
    date: "2025-11-12",
    description: "Keynote sessions and cloud architecture discussions.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
    year: "2025",
    category: "Interview",
  },
];

const MediaPhotosCard = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [fullScreenImage, setFullScreenImage] = useState(null);

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
  const filteredPhotos = initialPhotos.filter((photo) => {
    const matchesYear =
      selectedYears.length === 0 || selectedYears.includes(photo.year);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(photo.category);
    return matchesYear && matchesCategory;
  });

  return (
    <div className="media-photos-container">
      {/* Filter Sidebar */}
      <aside className="media-photos-sidebar">
        <div className="media-photos-sidebar-header">
          <FiFilter className="media-photos-filter-icon" />
          <h2>Filter Media</h2>
        </div>

        {/* Year Filter */}
        <div className="media-photos-filter-group">
          <h3>YEAR</h3>
          {["2026", "2025", "2024"].map((year) => (
            <label key={year} className="media-photos-checkbox-label">
              <input
                type="checkbox"
                checked={selectedYears.includes(year)}
                onChange={() => handleYearChange(year)}
                className="media-photos-checkbox"
              />
              <span>{year}</span>
            </label>
          ))}
        </div>

        {/* Category Filter */}
        <div className="media-photos-filter-group">
          <h3>CATEGORY</h3>
          {["Press Release", "Interview", "Feature", "Campus"].map(
            (category) => (
              <label key={category} className="media-photos-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="media-photos-checkbox"
                />
                <span>{category}</span>
              </label>
            )
          )}
        </div>
      </aside>

      {/* Main Section */}
      <main className="media-photos-main">
        <div className="media-photos-main-header">
          <h2 className="media-photos-section-title">Latest Photos</h2>

          <div className="media-photos-view-toggle">
            <button
              className={`media-photos-toggle-btn ${
                viewMode === "grid" ? "active" : ""
              }`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <FiGrid className="media-photos-toggle-icon" />
            </button>
            <button
              className={`media-photos-toggle-btn ${
                viewMode === "list" ? "active" : ""
              }`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <FiList className="media-photos-toggle-icon" />
            </button>
          </div>
        </div>

        {/* 3 Grid / List Photo Cards */}
        <div className={`media-photos-grid ${viewMode}`}>
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="media-photos-card">
              <div
                className="media-photos-image-container"
                onClick={() => setFullScreenImage(photo)}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="media-photos-image"
                />
                <div className="media-photos-image-overlay">
                  <FiMaximize2 className="media-photos-expand-icon" />
                </div>
              </div>

              <div className="media-photos-card-body">
                <div className="media-photos-card-header">
                  <h3 className="media-photos-card-title">{photo.title}</h3>
                  <span className="media-photos-card-date">{photo.date}</span>
                </div>
                <p className="media-photos-card-description">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Full Screen Image Modal / Lightbox */}
      {fullScreenImage && (
        <div
          className="media-photos-lightbox"
          onClick={() => setFullScreenImage(null)}
        >
          <div
            className="media-photos-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="media-photos-lightbox-close"
              onClick={() => setFullScreenImage(null)}
            >
              <FiX />
            </button>
            <img
              src={fullScreenImage.image}
              alt={fullScreenImage.title}
              className="media-photos-lightbox-image"
            />
            <div className="media-photos-lightbox-caption">
              <h3>{fullScreenImage.title}</h3>
              <p>{fullScreenImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPhotosCard;