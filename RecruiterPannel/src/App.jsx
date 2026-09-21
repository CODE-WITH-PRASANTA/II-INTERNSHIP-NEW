import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from "./Layout/MainLayout/MainLayout";

// Pages / Components
import Dashboard from "./Components/Dashboard/Dashboard";
import MyProfile from "./Components/MyProfile/MyProfile";
import CurrentJob from "./Components/CurrentJob/CurrentJob";
import ChangePassword from "./Components/ChangePassword/ChangePassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>

          {/* Default Page */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* Dashboard */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* My Profile */}
          <Route path="my-profile" element={<MyProfile />} />
           
          <Route path="/current-job-opening" element={<CurrentJob />} />

          <Route path="/change-password" element={<ChangePassword />} />
          
        </Route>

        {/* Invalid URL */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;