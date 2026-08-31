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

        {/* Main Layout */}
        <Route path="/" element={<Mainlayout />}>

          {/* Default Page */}
          <Route
            index
            element={<Navigate to="/browseinternships" replace />}
          />

          <Route
             path="/"
             element={<Dashboard/>}/>

          {/* Browse Internships */}
          <Route
            path="/browse-internships"
            element={<BrowseInternships />}
          />

          {/* My Application */}
          <Route
            path="/applications"
            element={<MyApplication />}
          />

          {/* ID Card */}
          <Route
            path="/id-cards"
            element={<IdCard />}
          />

           <Route
            path="/notifications"
            element={<Notification/>}
          />


          {/* Other Pages */}
          <Route
            path="certificates"
            element={<PagePlaceholder title="Certificates" />}
          />

          <Route
            path="notifications"
            element={<PagePlaceholder title="Notifications" />}
          />

          <Route
            path="payments"
            element={<PagePlaceholder title="Payments" />}
          />

          <Route
            path="profile"
            element={<PagePlaceholder title="Profile" />}
          />

          <Route
            path="settings"
            element={<PagePlaceholder title="Settings" />}
          />

          <Route
            path="help-center"
            element={<PagePlaceholder title="Help Center" />}
          />

          <Route
            path="contact-support"
            element={<PagePlaceholder title="Contact Support" />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<PagePlaceholder title="404 - Page Not Found" />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;