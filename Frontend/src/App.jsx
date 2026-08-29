import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import VisitionAndMission from "./Pages/VisitionAndMission/VisitionAndMission";
import TeamMember from "./Pages/TeamMember/TeamMember";
import Internship from "./Pages/Internship/Internship";
import Immersion from "./Pages/Immersion/Immersion";
import SuccessStory from "./Pages/SuccessStory/SuccessStory";
import MediaVideos from "./Pages/MediaVideos/MediaVideos";
import MediaPhotos from "./Pages/MediaPhotos/MediaPhotos";
import OnlineMedia from "./Pages/OnlineMedia/OnlineMedia";
import MediaNews from "./Pages/MediaNews/MediaNews";
import RunningInternships from "./Pages/RunningInternships/RunningInternships";
import OnCampusInternships from "./Pages/OnCampusInternships/OnCampusInternships";
import VirtualInternship from "./Pages/VirtualInternship/VirtualInternship";
import Donate from "./Pages/Donate/Donate";
import EducationalInstitutes from "./Pages/EducationalInstitutes/EducationalInstitutes";
import PlacementCompanies from "./Pages/PlacementCompanies/PlacementCompanies";
import TrainingSupport from "./Pages/TrainingSupport/TrainingSupport";




const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
       
       
       
        <Route path="/about/history" element={<AboutUs/>} />
        <Route path="/about/vision-mission" element={<VisitionAndMission/>} />
        <Route path="/about/team" element={<TeamMember/>} />
        <Route path="/about/internship" element={<Internship/>} />
        <Route path="/about/immersion" element={<Immersion/>} />
         <Route path="/success-story" element={<SuccessStory/>}/>
       <Route path="/media/video" element={<MediaVideos/>}/>
        <Route path="/media/photos" element={<MediaPhotos/>}/>
        <Route path="/media/online" element={<OnlineMedia/>}/>
        <Route path="/media/news" element={<MediaNews/>}/>
        <Route path="/internships/running" element={<RunningInternships/>}/>
        <Route path="/internships/on-campus" element={<OnCampusInternships/>}/>
        <Route path="/internships/virtual" element={<VirtualInternship/>}/>
        <Route path="/donate" element={<Donate/>}/>
       <Route path="/partners/educational" element={<EducationalInstitutes/>}/>
       <Route path="/partners/placement" element={<PlacementCompanies/>}/>
       <Route path="/partners/training" element={<TrainingSupport/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;