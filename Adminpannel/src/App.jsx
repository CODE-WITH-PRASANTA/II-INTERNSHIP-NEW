import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import UserAccounts from "./Component/UserAccounts/UserAccounts";
import Registrations from "./Component/Registrations/Registrations";
import Internships from "./Component/Internships/Internships";
import ReviewsModeration from "./Component/ReviewsModeration/ReviewsModeration";
import NoticeBoard from "./Component/NoticeBoard/NoticeBoard";
import DonationLogs from "./Component/DonationLogs/DonationLogs";
import SupportTickets from "./Component/SupportTickets/SupportTickets";
import Settings from "./Component/Settings/Settings";
import RecruitmentOpenings from "./Component/RecruitmentOpenings/RecruitmentOpenings";
import PartnersOnboard from "./Component/PartnersOnboard/PartnersOnboard";
import BlogsBoard from "./Component/BlogsBoard/BlogsBoard";
import MediaDesk from "./Component/MediaDesk/MediaDesk";

// Layout & Pages
import MainLayout from "./Layout/Mainlayout/Mainlayout";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route wrapping all pages that require Sidebar & Topbar */}
        <Route path="/" element={<MainLayout />}>
          {/* Index route: redirects root "/" to "/dashboard" */}
          <Route index element={<Navigate to="/dashboard" replace />} />

          {/* Nested routes rendered inside MainLayout's <Outlet /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-accounts" element={<UserAccounts />} />
          <Route path="registrations" element={<Registrations />} />
          <Route path="internships" element={<Internships />} />
          <Route path="reviews-moderation" element={<ReviewsModeration />} />
          <Route path="notice-board" element={<NoticeBoard />} />
          <Route path="donation-logs" element={<DonationLogs />} />
          <Route path="support-tickets" element={<SupportTickets />} />
          <Route path="settings" element={<Settings />} />
          <Route path="recruitment-openings" element={<RecruitmentOpenings />} />
          <Route path="partners-onboard" element={<PartnersOnboard />} />
          <Route path="blogs-board" element={<BlogsBoard />} />
          <Route path="media-desk" element={<MediaDesk />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;