import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewsModeration from "./Component/ReviewsModeration/ReviewsModeration";
import NoticeBoard from "./Component/NoticeBoard/NoticeBoard";
import DonationLogs from "./Component/DonationLogs/DonationLogs";
import SupportTickets from "./Component/SupportTickets/SupportTickets";
import Settings from "./Component/Settings/Settings";

// Layout


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/reviews" element={<ReviewsModeration/>}/>
    <Route path="/noticeboard" element={<NoticeBoard/>}/>   
       <Route path="/donationlogs" element={<DonationLogs/>}/>   
       <Route path="/support" element={<SupportTickets/>}/>   
       <Route path="/settings" element={<Settings/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;