import React, { useState } from "react";
import {
  FiFilter,
  FiGrid,
  FiList,
  FiShare2,
  FiCalendar,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";
import "./Categories.css";

const articleData = [
  {
    id: 1,
    category: "Internships",
    tag: "INTERNSHIPS",
    title: "Internship Spring 2026 Cohort: Launching AI-Driven Warehouse Management Models",
    author: "ALOK SHARMA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    date: "April 05, 2026",
    readTime: "6 min read",
    description: "Read details of this cohort's achievements.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    category: "Internships",
    tag: "INTERNSHIPS",
    title: "Internship Winter 2025 Cohort: Redefining Cross-Border E-Commerce Delivery",
    author: "PRIYA PATEL",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    date: "January 05, 2026",
    readTime: "6 min read",
    description: "Read details of this cohort's achievements.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    category: "Internships",
    tag: "INTERNSHIPS",
    title: "Internship Summer 2026 Cohort: Empowering 150+ Tech Leaders",
    author: "RAJAN KUMAR",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    date: "June 28, 2026",
    readTime: "6 min read",
    description: "Read details of this cohort's achievements.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    category: "Logistics",
    tag: "LOGISTICS",
    title: "Modern Supply Chain Optimization & AI Solutions",
    author: "ALOK SHARMA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    date: "March 12, 2026",
    readTime: "5 min read",
    description: "Learn how smart logistics improves delivery speed.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=80",
  },
];

const sidebarCategories = [
  "All",
  "Internships",
  "Logistics",
  "Company News",
  "Guides",
  "Customs & Compliance",
  "Fulfillment",
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const filteredArticles =
    selectedCategory === "All"
      ? articleData
      : articleData.filter((article) => article.category === selectedCategory);

  return (
    <div className="categories-container">
      {/* Sidebar Navigation */}
      <aside className="categories-sidebar">
        <div className="categories-sidebar-header">
          <FiFilter className="categories-filter-icon" />
          <h2>Categories</h2>
        </div>
        <ul className="categories-menu">
          {sidebarCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <li
                key={category}
                className={`categories-menu-item ${isActive ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category}</span>
                {isActive && <span className="categories-active-dot"></span>}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="categories-main">
        <div className="categories-main-header">
          <span className="categories-count-text">
            SHOWING {filteredArticles.length} ARTICLES
          </span>
          <div className="categories-view-toggle">
            <button
              className={`categories-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <FiGrid className="categories-toggle-icon" /> Grid
            </button>
            <button
              className={`categories-toggle-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              <FiList className="categories-toggle-icon" /> List
            </button>
          </div>
        </div>

        {/* Dynamic Card Container */}
        <div className={`categories-card-wrapper ${viewMode}`}>
          {filteredArticles.map((article) => (
            <article key={article.id} className="categories-card">
              <div className="categories-card-image-container">
                <img
                  src={article.image}
                  alt={article.title}
                  className="categories-card-image"
                />
                <span className="categories-card-tag">{article.tag}</span>
                <button className="categories-share-btn" aria-label="Share">
                  <FiShare2 />
                </button>
              </div>

              <div className="categories-card-content">
                <h3 className="categories-card-title">{article.title}</h3>

                <div className="categories-meta-group">
                  <div className="categories-author-info">
                    <img
                      src={article.avatar}
                      alt={article.author}
                      className="categories-author-avatar"
                    />
                    <span className="categories-author-name">
                      {article.author}
                    </span>
                  </div>

                  {viewMode === "list" && <span className="categories-meta-dot">•</span>}

                  <div className="categories-date-info">
                    <FiCalendar className="categories-meta-icon" />
                    <span>{article.date}</span>
                  </div>

                  {viewMode === "list" && <span className="categories-meta-dot">•</span>}

                  <div className="categories-read-time">
                    <FiClock className="categories-meta-icon" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <p className="categories-card-description">
                  {article.description}
                </p>

                <div className="categories-card-footer">
                  <a href="#read" className="categories-read-link">
                    READ ARTICLE <FiArrowUpRight className="categories-arrow-icon" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;