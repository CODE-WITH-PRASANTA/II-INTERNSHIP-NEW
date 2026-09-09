import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/Mainlayout/Mainlayout";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;