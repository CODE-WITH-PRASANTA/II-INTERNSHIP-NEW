import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

import MainLayout from "./Layout/Mainlayout/Mainlayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
// Layout
 

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
       <Route path="/" element={<MainLayout />}>
       <Route path="dashboard" element={<Dashboard />} />
       
       <Route path="/user-accounts" element={<UserAccounts />} />
       <Route path="/registrations" element={<Registrations />} />
       <Route path="/internships" element={<Internships />} />
        
       <Route path="/reviews" element={<ReviewsModeration/>}/>
       <Route path="/noticeboard" element={<NoticeBoard/>}/>   
       <Route path="/donationlogs" element={<DonationLogs/>}/>   
       <Route path="/support" element={<SupportTickets/>}/>   
       <Route path="/settings" element={<Settings/>}/>
       <Route path="/recruitment" element={<RecruitmentOpenings/>}/>
       <Route path="/partners" element={<PartnersOnboard/>}/>
       <Route path="/blogsboard" element={<BlogsBoard/>}/>   
       <Route path="/mediadesk" element={<MediaDesk/>}/>
      </Route>   
      </Routes>
    </BrowserRouter>
  );
};

export default App;