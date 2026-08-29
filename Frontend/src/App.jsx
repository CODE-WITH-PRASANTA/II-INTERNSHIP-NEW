import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Immersion from "./Pages/Immersion/Immersion";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/immersion" element={<Immersion />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;