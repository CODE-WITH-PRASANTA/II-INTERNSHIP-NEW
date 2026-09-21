import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./MainLayout.css";

const DESKTOP_MIN = 993;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setCollapsed((prev) => !prev);
  const toggleMobileSidebar = () => setMobileSidebar((prev) => !prev);

  // Close mobile drawer after navigating
  useEffect(() => {
    setMobileSidebar(false);
  }, [location.pathname]);

  // Close mobile drawer when resizing to desktop, or on Escape
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_MIN) setMobileSidebar(false);
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setMobileSidebar(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="MainLayout">
      <Sidebar
        collapsed={collapsed}
        mobileSidebar={mobileSidebar}
        toggleMobileSidebar={toggleMobileSidebar}
      />

      <div className={`MainLayout-content ${collapsed ? "collapsed" : ""}`}>
        <Topbar
          toggleSidebar={toggleSidebar}
          toggleMobileSidebar={toggleMobileSidebar}
        />

        <main className="MainLayout-page">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;