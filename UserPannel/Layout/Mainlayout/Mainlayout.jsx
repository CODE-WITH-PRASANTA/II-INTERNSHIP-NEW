import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../Topbar/Topbar';
import './Mainlayout.css';

const Mainlayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="layout-root">
      {/* Sidebar */}
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content Area */}
      <div className={`layout-content-wrapper ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <TopBar />
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Mainlayout;