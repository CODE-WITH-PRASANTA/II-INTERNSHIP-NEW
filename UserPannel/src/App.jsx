import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './Layout/Mainlayout/Mainlayout';

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
        <Route path="/" element={<Mainlayout />}>
          <Route
            index
            element={<PagePlaceholder title="Dashboard" />}
          />

          <Route
            path="browse-internships"
            element={<PagePlaceholder title="Browse Internships" />}
          />

          <Route
            path="applications"
            element={<PagePlaceholder title="My Applications" />}
          />

          <Route
            path="id-cards"
            element={<PagePlaceholder title="ID Cards" />}
          />

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