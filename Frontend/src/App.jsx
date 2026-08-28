import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import VisitionAndMission from "./Pages/VisitionAndMission/VisitionAndMission";
import TeamMember from "./Pages/TeamMember/TeamMember";
import Internship from "./Pages/Internship/Internship";
import Immersion from "./Pages/Immersion/Immersion";



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


        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;