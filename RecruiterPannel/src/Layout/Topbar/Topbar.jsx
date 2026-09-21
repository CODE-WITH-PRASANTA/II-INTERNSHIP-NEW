import React, { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Topbar.css";

const MOBILE_MAX = 992;

const Topbar = ({ toggleSidebar, toggleMobileSidebar }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  // --------------------------------------------------
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // --------------------------------------------------
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setProfileOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // --------------------------------------------------
  // SIDEBAR TOGGLE
  // --------------------------------------------------
  const handleToggle = () => {
    if (window.innerWidth <= MOBILE_MAX) {
      toggleMobileSidebar();
    } else {
      toggleSidebar();
    }
  };

  // --------------------------------------------------
  // PROFILE
  // --------------------------------------------------
  const handleProfile = () => {
    setProfileOpen(false);
    navigate("/wdms/profile");
  };

  // --------------------------------------------------
  // SETTINGS
  // --------------------------------------------------
  const handleSettings = () => {
    setProfileOpen(false);
    navigate("/wdms/settings");
  };

  // --------------------------------------------------
  // LOGOUT
  // --------------------------------------------------
  const handleLogout = () => {
    setProfileOpen(false);

    // Remove your authentication/session data
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("isLoggedIn");

    // Redirect to login page
    navigate("/login", { replace: true });
  };

  return (
    <header className="Topbar">
      {/* ==========================================
          LEFT
      ========================================== */}
      <div className="Topbar-left">
        <button
          className="Topbar-toggle"
          onClick={handleToggle}
          type="button"
          aria-label="Toggle sidebar"
          title="Toggle Sidebar"
        >
          <FaBars />
        </button>
      </div>

      {/* ==========================================
          RIGHT
      ========================================== */}
      <div className="Topbar-right">

        {/* ========================================
            NOTIFICATION
        ======================================== */}
        <button
          className="Topbar-notification"
          type="button"
          aria-label="Notifications"
          title="Notifications"
          onClick={() => {
            // Notification functionality can be added here
          }}
        >
          <FaBell />

          <span className="Topbar-badge">
            3
          </span>
        </button>

        {/* ========================================
            PROFILE
        ======================================== */}
        <div
          className={`Topbar-profile ${
            profileOpen ? "active" : ""
          }`}
          ref={profileRef}
        >
          <button
            className="Topbar-profileInfo"
            type="button"
            onClick={() =>
              setProfileOpen((prev) => !prev)
            }
            aria-haspopup="menu"
            aria-expanded={profileOpen}
          >
            {/* Profile Icon */}
            <span className="Topbar-profileIcon">
              <FaUser />
            </span>

            {/* Profile Information */}
            <span className="Topbar-profileText">
              <h4>Administrator</h4>
              <span>Super Admin</span>
            </span>

            {/* Arrow */}
            <FaChevronDown
              className={`Topbar-chevron ${
                profileOpen ? "open" : ""
              }`}
            />
          </button>

          {/* ======================================
              DROPDOWN
          ====================================== */}
          <div
            className={`Topbar-dropdown ${
              profileOpen ? "show" : ""
            }`}
            role="menu"
          >
            {/* PROFILE */}
            <button
              className="Topbar-dropdownItem"
              type="button"
              role="menuitem"
              onClick={handleProfile}
            >
              <span className="Topbar-dropdownIcon">
                <FaUserCircle />
              </span>

              <span className="Topbar-dropdownText">
                <strong>Profile</strong>
                <small>View your profile</small>
              </span>
            </button>

            {/* SETTINGS */}
            <button
              className="Topbar-dropdownItem"
              type="button"
              role="menuitem"
              onClick={handleSettings}
            >
              <span className="Topbar-dropdownIcon">
                <FaCog />
              </span>

              <span className="Topbar-dropdownText">
                <strong>Settings</strong>
                <small>Manage your settings</small>
              </span>
            </button>

            {/* DIVIDER */}
            <div className="Topbar-dropdownDivider" />

            {/* LOGOUT */}
            <button
              className="Topbar-dropdownItem logout"
              type="button"
              role="menuitem"
              onClick={handleLogout}
            >
              <span className="Topbar-dropdownIcon">
                <FaSignOutAlt />
              </span>

              <span className="Topbar-dropdownText">
                <strong>Logout</strong>
                <small>Sign out of your account</small>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;