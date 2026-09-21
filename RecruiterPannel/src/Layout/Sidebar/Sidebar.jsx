import React from "react";
import { NavLink } from "react-router-dom";
import {
  TbLayoutGrid,
  TbUser,
  TbBriefcase,
  TbId,
  TbBell,
  TbHelpCircle,
  TbX,
  TbSelector,
  TbArrowBarToLeft,
  TbArrowBarToRight,
} from "react-icons/tb";
import "./Sidebar.css";

import logo from "../../assets/logooo.webp";

// Set to the imported logo directly (or fallback string if desired)
const LOGO_SRC = logo;

const INSTRUCTOR = {
  name: "Senior Instructor",
  email: "instructor@hilux.com",
  initial: "S",
};
 
const menuSections = [
  {
    label: "Teaching Hub",
    items: [
      {
        title: "Dashboard",
        icon: <TbLayoutGrid />,
        path: "/dashboard",
      },
      {
        title: "My Profile",
        icon: <TbUser />,
        path: "/my-profile",
      },
      {
        title: "Current Job Opening",
        icon: <TbBriefcase />,
        path: "/current-job-opening",
      },
      {
        title: "Change Password",
        icon: <TbId />,
        path: "/change-password",
      },
    ],
  },
];

const Sidebar = ({
  collapsed,
  mobileSidebar,
  toggleSidebar,
  toggleMobileSidebar,
}) => {
  const sidebarClass = [
    "Sidebar",
    collapsed ? "collapsed" : "",
    mobileSidebar ? "mobile-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`Sidebar-overlay ${mobileSidebar ? "show" : ""}`}
        onClick={toggleMobileSidebar}
      />

      <aside className={sidebarClass}>
        {/* Decorative Background Glows */}
        <div className="Sidebar-glow Sidebar-glow-one" />
        <div className="Sidebar-glow Sidebar-glow-two" />

        {/* Decorative Leaf */}
        <svg
          className="Sidebar-leaf"
          viewBox="0 0 240 240"
          fill="currentColor"
          aria-hidden="true"
        >
          <g transform="translate(120 235)">
            <path
              transform="rotate(-28)"
              d="M0 0 C-46 -60 -44 -140 0 -205 C44 -140 46 -60 0 0Z"
            />
            <path
              transform="rotate(18)"
              d="M0 0 C-40 -52 -38 -122 0 -178 C38 -122 40 -52 0 0Z"
            />
            <path
              transform="rotate(-2)"
              d="M0 0 C-34 -46 -33 -108 0 -158 C33 -108 34 -46 0 0Z"
            />
          </g>
        </svg>

        {/* Logo Section */}
        <div className="Sidebar-logoSection">
          <div className="Sidebar-logoCard">
            {LOGO_SRC ? (
              <div className="Sidebar-logoWrapper">
                <img
                  className="Sidebar-logoImg"
                  src={LOGO_SRC}
                  alt="International Institute of Internship"
                />
              </div>
            ) : (
              <div className="Sidebar-logoFallback">
                <span className="Sidebar-logoMark">I</span>
                <span className="Sidebar-logoText">
                  <strong>International Institute of</strong>
                  <strong>Internship</strong>
                  <small>LEARN TODAY · LEAD TOMORROW</small>
                </span>
              </div>
            )}
          </div>

          {/* Mobile Close Button */}
          <button
            className="Sidebar-close"
            onClick={toggleMobileSidebar}
            type="button"
            aria-label="Close sidebar"
          >
            <TbX />
          </button>
        </div>

        {/* Navigation */}
        <nav className="Sidebar-menu">
          {menuSections.map((section, sectionIndex) => (
            <div className="Sidebar-section" key={sectionIndex}>
              {/* Section Heading */}
              <div className="Sidebar-sectionLabel">
                <span>{section.label}</span>
              </div>

              {/* Navigation Items */}
              <div className="Sidebar-sectionItems">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    title={collapsed ? item.title : undefined}
                    className={({ isActive }) =>
                      isActive
                        ? "Sidebar-link active"
                        : "Sidebar-link"
                    }
                  >
                    <span className="Sidebar-icon">{item.icon}</span>
                    <span className="Sidebar-title">{item.title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Profile & Collapse Controls */}
        <div className="Sidebar-footer">
          <button
            className="Sidebar-user"
            type="button"
            title={
              collapsed
                ? `${INSTRUCTOR.name} · ${INSTRUCTOR.email}`
                : undefined
            }
          >
            <span className="Sidebar-avatar">{INSTRUCTOR.initial}</span>

            <span className="Sidebar-userInfo">
              <strong>{INSTRUCTOR.name}</strong>
              <small>{INSTRUCTOR.email}</small>
            </span>

            <TbSelector className="Sidebar-userChevron" />
          </button>

          {/* Collapse Button */}
          <button
            className="Sidebar-collapse"
            type="button"
            onClick={toggleSidebar}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={
              collapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          >
            {collapsed ? <TbArrowBarToRight /> : <TbArrowBarToLeft />}
            <span className="Sidebar-collapseText">Collapse</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;