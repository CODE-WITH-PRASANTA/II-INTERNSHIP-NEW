import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import IdCard from "./Pages/IdCard/IdCard";
import MyApplication from "./Pages/MyApplication/MyApplication";
import BrowseInternships from "./Pages/BrowseInternships/BrowseInternships";
import Mainlayout from "./Layout/Mainlayout/Mainlayout";
import Notification from "./Pages/Notification/Notification";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginForm from "./Components/Loginform/Loginform";
import Protectrout from "./Components/Protectrout/Protectrout";

// Placeholder component for empty routes
const PagePlaceholder = ({ title }) => (
  <div className="content-placeholder">
    <div className="placeholder-card">
      <h2>{title} View</h2>
      <p>This is where the {title} content will render.</p>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Public Route: Login Screen (बिना TopBar/Mainlayout के) */}
        <Route path="/login" element={<LoginForm />} />

        {/* 2. Protected Routes: Mainlayout केवल लॉगिन होने पर ही दिखेगा */}
        <Route
          path="/"
          element={
            <Protectrout>
              <Mainlayout />
            </Protectrout>
          }
        >
          {/* Default Route */}
          <Route index element={<Dashboard />} />

          {/* Core Feature Pages */}
          <Route path="browse-internships" element={<BrowseInternships />} />
          <Route path="applications" element={<MyApplication />} />
          <Route path="id-cards" element={<IdCard />} />
          <Route path="notifications" element={<Notification />} />

          {/* Secondary Pages */}
          <Route path="certificates" element={<PagePlaceholder title="Certificates" />} />
          <Route path="payments" element={<PagePlaceholder title="Payments" />} />
          <Route path="profile" element={<PagePlaceholder title="Profile" />} />
          <Route path="settings" element={<PagePlaceholder title="Settings" />} />
          <Route path="help-center" element={<PagePlaceholder title="Help Center" />} />
          <Route path="contact-support" element={<PagePlaceholder title="Contact Support" />} />
        </Route>

        {/* 3. Fallback Route: कोई गलत URL डालने पर */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;