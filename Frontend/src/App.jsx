import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Loginpage from "./Component/Loginpage/Loginpage";
import Protectrouter from "./Component/Protectrouter/Protectrouter";

// Pages
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import VisitionAndMission from "./Pages/VisitionAndMission/VisitionAndMission";
import TeamMember from "./Pages/TeamMember/TeamMember";
import Internship from "./Pages/Internship/Internship";
import Immersion from "./Pages/Immersion/Immersion";
import ImmersionOne from "./Pages/ImmersionOne/ImmersionOne";
import SuccessStory from "./Pages/SuccessStory/SuccessStory";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Donate from "./Pages/Donate/Donate";
import Recuirment from "./Pages/Recuirment/Recuirment";

// Media Pages
import MediaVideos from "./Pages/MediaVideos/MediaVideos";
import MediaPhotos from "./Pages/MediaPhotos/MediaPhotos";
import OnlineMedia from "./Pages/OnlineMedia/OnlineMedia";
import MediaNews from "./Pages/MediaNews/MediaNews";

// Internship Pages
import RunningInternships from "./Pages/RunningInternships/RunningInternships";
import OnCampusInternship from "./Pages/OnCampusInternship/OnCampusInternship";
import VirtualInternship from "./Pages/VirtualInternship/VirtualInternship";

// Partner Pages
import EducationalInstitute from "./Pages/EducationalInstitute/EducationalInstitute";
import JobPlacement from "./Pages/JobPlacement/JobPlacement";
import TechnicalSupport from "./Pages/TechnicalSupport/TechnicalSupport";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/immersion" element={<ImmersionOne />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/recruitment" element={<Recuirment />} />
        <Route path="/success-story" element={<SuccessStory />} />
        
        {/* About Routes */}
        <Route path="/about/history" element={<AboutUs />} />
        <Route path="/about/vision-mission" element={<VisitionAndMission />} />
        <Route path="/about/team" element={<TeamMember />} />
        <Route path="/about/internship" element={<Internship />} />
        <Route path="/about/immersion" element={<Immersion />} />

        {/* Media Routes */}
        <Route path="/media/video" element={<MediaVideos />} />
        <Route path="/media/photos" element={<MediaPhotos />} />
        <Route path="/media/online" element={<OnlineMedia />} />
        <Route path="/media/news" element={<MediaNews />} />

        {/* Internship Routes */}
        <Route path="/internships/running" element={<RunningInternships />} />
        <Route path="/internships/on-campus" element={<OnCampusInternship />} />
        <Route path="/internships/virtual" element={<VirtualInternship />} />

        {/* Partner Routes */}
        <Route path="/partners/educational" element={<EducationalInstitute />} />
        <Route path="/partners/placement" element={<JobPlacement />} />
        <Route path="/partners/training" element={<TechnicalSupport />} />

        {/* Auth & Protected Routes */}
        <Route path="/login" element={<Loginpage />} />
        <Route path="/protectrouter" element={<Protectrouter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;