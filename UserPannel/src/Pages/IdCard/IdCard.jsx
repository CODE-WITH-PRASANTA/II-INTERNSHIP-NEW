import React, { useState } from "react";
import {
  FiClock,
  FiCheckCircle,
  FiBookOpen,
  FiCalendar,
  FiShield,
  FiChevronRight,
  FiX,
  FiDownload,
} from "react-icons/fi";
import { FaIdCard } from "react-icons/fa";
import "./IdCard.css";

const IdCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const activeCards = [
    {
      id: 1,
      title: "Software",
      institution: "IIIT Center of Excellence",
      status: "Active",
      enrolledDate: "11 Aug 2026",
      internName: "Adyasa Barik",
      idNumber: "INT-2026-001",
      duration: "3 Months",
    },
    {
      id: 2,
      title: "Smart Web Developer Internship- Coding To Carrer.",
      institution: "International Institute of Internship",
      status: "Active",
      enrolledDate: "11 Aug 2026",
      internName: "Adyasa Barik",
      idNumber: "INT-2026-002",
      duration: "6 Months",
    },
    {
      id: 3,
      title: "sdhkkdsknfds,nbls",
      institution: "IIIT Center of Excellence",
      status: "Active",
      enrolledDate: "29 Jul 2026",
      internName: "Adyasa Barik",
      idNumber: "INT-2026-003",
      duration: "3 Months",
    },
  ];

  const completedCards = [
    {
      id: 4,
      title: "Cloud Computing & DevOps Practice",
      institution: "Hilux Technologies",
      status: "Completed",
      enrolledDate: "20 Jul 2026",
      completedDate: "24 Jul 2026",
      internName: "Adyasa Barik",
      idNumber: "INT-2026-004",
      duration: "2 Months",
    },
    {
      id: 5,
      title: "Full Stack Web Development (Free Tier)",
      institution: "Hilux Technologies",
      status: "Completed",
      enrolledDate: "14 Jul 2026",
      completedDate: "24 Jul 2026",
      internName: "Adyasa Barik",
      idNumber: "INT-2026-005",
      duration: "3 Months",
    },
  ];

  const handleOpenModal = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="IdCard-container">
      {/* ==================== HEADER ==================== */}
      <div className="IdCard-header">
        <div className="IdCard-header-text">
          <h1>My ID Cards</h1>
          <p>
            Access your digital ID cards for your active and completed
            internship enrollments.
          </p>
        </div>

        {/* Header Lanyard ID Card Graphic */}
        <div className="IdCard-illustration">
          <div className="IdCard-graphic-backdrop">
            {/* Floating particles background matching the screenshot */}
            <span className="dot dot-purple-1"></span>
            <span className="dot dot-purple-2"></span>
            <span className="dot dot-green-1"></span>
            <span className="dot dot-green-2"></span>
            <span className="dot dot-yellow-1"></span>

            {/* Lanyard Strap & Clip */}
            <div className="IdCard-lanyard-strap"></div>
            <div className="IdCard-lanyard-clip"></div>

            {/* ID Card Graphic Body */}
            <div className="IdCard-header-badge">
              <div className="IdCard-badge-header-stripe"></div>
              <div className="IdCard-badge-body-content">
                <div className="IdCard-badge-avatar">
                  <div className="IdCard-avatar-head"></div>
                  <div className="IdCard-avatar-body"></div>
                </div>
                <div className="IdCard-badge-text-lines">
                  <span className="line long"></span>
                  <span className="line short"></span>
                  <span className="line medium"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== ACTIVE SECTION ==================== */}
      <div className="IdCard-section">
        <div className="IdCard-section-title">
          <FiClock className="IdCard-section-icon IdCard-icon-active" />
          <h2>Active ({activeCards.length})</h2>
        </div>

        <p className="IdCard-section-subtitle">
          Your ongoing internship ID cards
        </p>

        <div className="IdCard-grid">
          {activeCards.map((card) => (
            <div key={card.id} className="IdCard-card">
              <div className="IdCard-card-header">
                <div className="IdCard-card-title-group">
                  <div className="IdCard-icon-badge">
                    <FiBookOpen />
                  </div>

                  <div>
                    <h3>{card.title}</h3>
                    <span className="IdCard-institution">
                      {card.institution}
                    </span>
                  </div>
                </div>

                <span className="IdCard-status-pill IdCard-status-active">
                  <FiClock className="IdCard-pill-icon" />
                  Active
                </span>
              </div>

              <div className="IdCard-card-details">
                <span className="IdCard-detail-item">
                  <FiCalendar />
                  Enrolled on {card.enrolledDate}
                </span>
              </div>

              <button
                type="button"
                className="IdCard-btn-view"
                onClick={() => handleOpenModal(card)}
              >
                <FaIdCard />
                View ID Card
                <FiChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== COMPLETED SECTION ==================== */}
      <div className="IdCard-section">
        <div className="IdCard-section-title">
          <FiCheckCircle className="IdCard-section-icon IdCard-icon-completed" />
          <h2>Completed ({completedCards.length})</h2>
        </div>

        <p className="IdCard-section-subtitle">
          Your completed internship ID cards
        </p>

        <div className="IdCard-grid">
          {completedCards.map((card) => (
            <div key={card.id} className="IdCard-card">
              <div className="IdCard-card-header">
                <div className="IdCard-card-title-group">
                  <div className="IdCard-icon-badge">
                    <FiBookOpen />
                  </div>

                  <div>
                    <h3>{card.title}</h3>
                    <span className="IdCard-institution">
                      {card.institution}
                    </span>
                  </div>
                </div>

                <span className="IdCard-status-pill IdCard-status-completed">
                  <FiCheckCircle className="IdCard-pill-icon" />
                  Completed
                </span>
              </div>

              <div className="IdCard-card-details">
                <span className="IdCard-detail-item">
                  <FiCalendar />
                  Enrolled on {card.enrolledDate}
                </span>

                <span className="IdCard-detail-item IdCard-detail-completed">
                  <FiCheckCircle />
                  Completed on {card.completedDate}
                </span>
              </div>

              <button
                type="button"
                className="IdCard-btn-view"
                onClick={() => handleOpenModal(card)}
              >
                <FaIdCard />
                View ID Card
                <FiChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== BOTTOM BANNER ==================== */}
      <div className="IdCard-banner">
        <div className="IdCard-banner-left">
          <div className="IdCard-banner-icon">
            <FiShield />
          </div>

          <div className="IdCard-banner-text">
            <h3>Your ID Cards, Anytime, Anywhere</h3>
            <p>
              Present your digital ID cards to validate your internship status
              with ease.
            </p>
          </div>
        </div>

        <div className="IdCard-banner-right">
          <div className="IdCard-shield-badge">
            <FiCheckCircle />
          </div>

          <span>Secure • Verified • Trusted</span>
        </div>
      </div>

      {/* ==================== MODAL ==================== */}
      {selectedCard && (
        <div
          className="IdCard-modal-overlay"
          onClick={handleCloseModal}
          role="presentation"
        >
          <div
            className="IdCard-modal-content"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="id-card-modal-title"
          >
            <button
              type="button"
              className="IdCard-modal-close"
              onClick={handleCloseModal}
              aria-label="Close ID card"
            >
              <FiX />
            </button>

            {/* Modal Header */}
            <div className="IdCard-modal-header">
              <span className="IdCard-modal-tag">DIGITAL ID CARD</span>
              <h2 id="id-card-modal-title">Internship ID Card</h2>
            </div>

            {/* DIGITAL BADGE CONTENT */}
            <div className="IdCard-digital-badge">
              {/* Badge Top */}
              <div className="IdCard-badge-top">
                <div className="IdCard-logo-box">
                  <span className="IdCard-logo-text">II</span>
                </div>

                <div className="IdCard-badge-inst-info">
                  <h3>{selectedCard.institution}</h3>
                  <p>INTERNSHIP PROGRAM</p>
                </div>

                <span
                  className={`IdCard-badge-status ${
                    selectedCard.status === "Active"
                      ? "active"
                      : "completed"
                  }`}
                >
                  ● {selectedCard.status}
                </span>
              </div>

              {/* Profile Area */}
              <div className="IdCard-badge-profile">
                <div className="IdCard-avatar">
                  <svg
                    viewBox="0 0 100 100"
                    className="IdCard-avatar-svg"
                    aria-hidden="true"
                  >
                    <circle cx="50" cy="50" r="50" fill="#f0e0d6" />
                    <circle cx="50" cy="38" r="18" fill="#333333" />
                    <circle cx="50" cy="40" r="16" fill="#fbc2a8" />
                    <path
                      d="M 25 80 Q 25 58 50 58 Q 75 58 75 80 Z"
                      fill="#015237"
                    />
                  </svg>
                </div>

                <div className="IdCard-profile-details">
                  <span className="IdCard-label">INTERN NAME</span>
                  <h3 className="IdCard-intern-name">
                    {selectedCard.internName}
                  </h3>
                  <span className="IdCard-id-number">
                    ID: {selectedCard.idNumber}
                  </span>
                </div>
              </div>

              {/* Badge Information Grid */}
              <div className="IdCard-badge-grid">
                <div className="IdCard-grid-box">
                  <FiBookOpen className="IdCard-box-icon" />
                  <div>
                    <span className="IdCard-box-label">INTERNSHIP</span>
                    <strong className="IdCard-box-value">
                      {selectedCard.title}
                    </strong>
                  </div>
                </div>

                <div className="IdCard-grid-box">
                  <FiCalendar className="IdCard-box-icon" />
                  <div>
                    <span className="IdCard-box-label">ENROLLED ON</span>
                    <strong className="IdCard-box-value">
                      {selectedCard.enrolledDate}
                    </strong>
                  </div>
                </div>

                <div className="IdCard-grid-box">
                  <FiClock className="IdCard-box-icon" />
                  <div>
                    <span className="IdCard-box-label">DURATION</span>
                    <strong className="IdCard-box-value">
                      {selectedCard.duration}
                    </strong>
                  </div>
                </div>

                <div className="IdCard-grid-box">
                  <FiShield className="IdCard-box-icon" />
                  <div>
                    <span className="IdCard-box-label">STATUS</span>
                    <strong className="IdCard-box-value IdCard-status-green">
                      {selectedCard.status}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Badge Footer */}
              <div className="IdCard-badge-footer">
                <div className="IdCard-verify-info">
                  <div className="IdCard-verify-icon">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <h4>Verified Internship ID</h4>
                    <p>This digital ID verifies your internship enrollment.</p>
                  </div>
                </div>

                {/* QR Code */}
                <div className="IdCard-qr-code">
                  <svg viewBox="0 0 100 100" width="54" height="54">
                    <path
                      d="M 0 0 h 30 v 30 h -30 z M 10 10 v 10 h 10 v -10 z"
                      fill="#000"
                    />
                    <path
                      d="M 70 0 h 30 v 30 h -30 z M 80 10 v 10 h 10 v -10 z"
                      fill="#000"
                    />
                    <path
                      d="M 0 70 h 30 v 30 h -30 z M 10 80 v 10 h 10 v -10 z"
                      fill="#000"
                    />
                    <rect x="40" y="10" width="10" height="10" fill="#000" />
                    <rect x="50" y="20" width="10" height="20" fill="#000" />
                    <rect x="30" y="40" width="20" height="10" fill="#000" />
                    <rect x="60" y="40" width="20" height="20" fill="#000" />
                    <rect x="40" y="70" width="20" height="10" fill="#000" />
                    <rect x="70" y="70" width="20" height="20" fill="#000" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="IdCard-modal-actions">
              <button
                type="button"
                className="IdCard-btn-close"
                onClick={handleCloseModal}
              >
                Close
              </button>

              <button
                type="button"
                className="IdCard-btn-download"
                onClick={() => window.print()}
              >
                <FiDownload />
                Download / Print ID
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdCard;