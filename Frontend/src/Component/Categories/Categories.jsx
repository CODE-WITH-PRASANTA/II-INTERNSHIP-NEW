import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    title:
      "Internship Spring 2026 Cohort: Launching AI-Driven Warehouse Management Models",
    author: "ALOK SHARMA",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    date: "April 05, 2026",
    readTime: "6 min read",
    description: "Read details of this cohort's achievements.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    category: "Internships",
    tag: "INTERNSHIPS",
    title:
      "Internship Winter 2025 Cohort: Redefining Cross-Border E-Commerce Delivery",
    author: "PRIYA PATEL",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    date: "January 05, 2026",
    readTime: "6 min read",
    description: "Read details of this cohort's achievements.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    category: "Internships",
    tag: "INTERNSHIPS",
    title:
      "Internship Summer 2026 Cohort: Empowering 150+ Tech Leaders",
    author: "RAJAN KUMAR",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    date: "June 28, 2026",
    readTime: "6 min read",
    description: "Read details of this cohort's achievements.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    category: "Logistics",
    tag: "LOGISTICS",
    title: "Modern Supply Chain Optimization & AI Solutions",
    author: "ALOK SHARMA",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    date: "March 12, 2026",
    readTime: "5 min read",
    description: "Learn how smart logistics improves delivery speed.",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=80",
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
  // React Router navigation
  const navigate = useNavigate();

  // Category state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Grid / List state
  const [viewMode, setViewMode] = useState("grid");

  // Filter articles
  const filteredArticles =
    selectedCategory === "All"
      ? articleData
      : articleData.filter(
          (article) => article.category === selectedCategory
        );

  // Handle Read Article button
  const handleReadArticle = (article) => {
    console.log("Opening article:", article.title);

    // Navigate to ReadArticle page
    navigate("/readarticle");
  };

  // Handle Share button
  const handleShare = async (article) => {
    const shareData = {
      title: article.title,
      text: article.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Article link copied to clipboard!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error sharing article:", error);
      }
    }
  };

  return (
    <div className="categories-container">
      {/* ================================
          SIDEBAR NAVIGATION
      ================================= */}

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
                className={`categories-menu-item ${
                  isActive ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category}</span>

                {isActive && (
                  <span className="categories-active-dot"></span>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* ================================
          MAIN CONTENT
      ================================= */}

      <main className="categories-main">
        {/* Main Header */}
        <div className="categories-main-header">
          <span className="categories-count-text">
            SHOWING {filteredArticles.length} ARTICLES
          </span>

          {/* Grid / List Toggle */}
          <div className="categories-view-toggle">
            <button
              type="button"
              className={`categories-toggle-btn ${
                viewMode === "grid" ? "active" : ""
              }`}
              onClick={() => setViewMode("grid")}
            >
              <FiGrid className="categories-toggle-icon" />
              Grid
            </button>

            <button
              type="button"
              className={`categories-toggle-btn ${
                viewMode === "list" ? "active" : ""
              }`}
              onClick={() => setViewMode("list")}
            >
              <FiList className="categories-toggle-icon" />
              List
            </button>
          </div>
        </div>

        {/* ================================
            ARTICLE CARDS
        ================================= */}

        <div className={`categories-card-wrapper ${viewMode}`}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <article
                key={article.id}
                className="categories-card"
              >
                {/* Card Image */}
                <div className="categories-card-image-container">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="categories-card-image"
                  />

                  {/* Category Tag */}
                  <span className="categories-card-tag">
                    {article.tag}
                  </span>

                  {/* Share Button */}
                  <button
                    type="button"
                    className="categories-share-btn"
                    aria-label={`Share ${article.title}`}
                    onClick={() => handleShare(article)}
                  >
                    <FiShare2 />
                  </button>
                </div>

                {/* Card Content */}
                <div className="categories-card-content">
                  {/* Article Title */}
                  <h3 className="categories-card-title">
                    {article.title}
                  </h3>

                  {/* Article Meta Information */}
                  <div className="categories-meta-group">
                    {/* Author */}
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

                    {viewMode === "list" && (
                      <span className="categories-meta-dot">
                        •
                      </span>
                    )}

                    {/* Date */}
                    <div className="categories-date-info">
                      <FiCalendar className="categories-meta-icon" />
                      <span>{article.date}</span>
                    </div>

                    {viewMode === "list" && (
                      <span className="categories-meta-dot">
                        •
                      </span>
                    )}

                    {/* Read Time */}
                    <div className="categories-read-time">
                      <FiClock className="categories-meta-icon" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="categories-card-description">
                    {article.description}
                  </p>

                  {/* Card Footer */}
                  <div className="categories-card-footer">
                    {/* READ ARTICLE BUTTON */}

                    <button
                      type="button"
                      className="categories-read-link"
                      onClick={() => handleReadArticle(article)}
                    >
                      READ ARTICLE

                      <FiArrowUpRight className="categories-arrow-icon" />
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            /* No Articles */
            <div className="categories-no-results">
              <h3>No articles found</h3>
              <p>
                There are no articles available in this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Categories;