import React, { useState } from "react";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
import "./MediaVideoscard.css";

const initialVideos = [
  {
    id: "video-1",
    title: "Behind the Scenes at Bengaluru Hub",
    date: "July 05, 2026",
    description:
      "A sneak peek into the daily operations and engineering challenges at our Tech Hub.",
    youtubeId: "d-diB65scQU",
    year: "2026",
    category: "Campus",
  },
  {
    id: "video-2",
    title: "Student Success Stories & Testimonials",
    date: "July 01, 2026",
    description:
      "Graduates share their journey and experiences during the Summer cohort.",
    youtubeId: "LXb3EKWsInQ",
    year: "2026",
    category: "Interview",
  },
  {
    id: "video-3",
    title: "Annual Tech Conference Keynote & Highlights",
    date: "June 15, 2025",
    description:
      "Watch the key announcements, product reveals, and leader panel discussions.",
    youtubeId: "dQw4w9WgXcQ",
    year: "2025",
    category: "Press Release",
  },
  {
    id: "video-4",
    title: "Engineering Excellence & Innovation Lab",
    date: "May 20, 2024",
    description:
      "Exploring cutting-edge research and new product architectures built by interns.",
    youtubeId: "3JZ_D3ELwOQ",
    year: "2024",
    category: "Feature",
  },
];

const MediaVideoscard = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

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
  const filteredVideos = initialVideos.filter((video) => {
    const matchesYear =
      selectedYears.length === 0 || selectedYears.includes(video.year);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(video.category);
    return matchesYear && matchesCategory;
  });

  return (
    <div className="media-videos-container">
      {/* Filter Sidebar */}
      <aside className="media-videos-sidebar">
        <div className="media-videos-sidebar-header">
          <FiFilter className="media-videos-filter-icon" />
          <h2>Filter Media</h2>
        </div>

        {/* Year Filter */}
        <div className="media-videos-filter-group">
          <h3>YEAR</h3>
          {["2026", "2025", "2024"].map((year) => (
            <label key={year} className="media-videos-checkbox-label">
              <input
                type="checkbox"
                checked={selectedYears.includes(year)}
                onChange={() => handleYearChange(year)}
                className="media-videos-checkbox"
              />
              <span>{year}</span>
            </label>
          ))}
        </div>

        {/* Category Filter */}
        <div className="media-videos-filter-group">
          <h3>CATEGORY</h3>
          {["Press Release", "Interview", "Feature", "Campus"].map(
            (category) => (
              <label key={category} className="media-videos-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="media-videos-checkbox"
                />
                <span>{category}</span>
              </label>
            )
          )}
        </div>
      </aside>

      {/* Main Video Section */}
      <main className="media-videos-main">
        <div className="media-videos-main-header">
          <h2 className="media-videos-section-title">Latest Videos</h2>

          <div className="media-videos-view-toggle">
            <button
              className={`media-videos-toggle-btn ${
                viewMode === "grid" ? "active" : ""
              }`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <FiGrid className="media-videos-toggle-icon" />
            </button>
            <button
              className={`media-videos-toggle-btn ${
                viewMode === "list" ? "active" : ""
              }`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <FiList className="media-videos-toggle-icon" />
            </button>
          </div>
        </div>

        {/* 3 Grid / List Video Cards */}
        <div className={`media-videos-grid ${viewMode}`}>
          {filteredVideos.map((video) => (
            <div key={video.id} className="media-videos-card">
              <div className="media-videos-iframe-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="media-videos-iframe"
                ></iframe>
              </div>

              <div className="media-videos-card-body">
                <div className="media-videos-card-header">
                  <h3 className="media-videos-card-title">{video.title}</h3>
                  <span className="media-videos-card-date">{video.date}</span>
                </div>
                <p className="media-videos-card-description">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MediaVideoscard;