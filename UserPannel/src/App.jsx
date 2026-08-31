import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import IdCard from "./Pages/IdCard/IdCard";
import MyApplication from "./Pages/MyApplication/MyApplication";
import BrowseInternships from "./Pages/BrowseInternships/BrowseInternships";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect to Browse Internships */}
        <Route path="/" element={<Navigate to="/browseinternships" replace />} />

        {/* Application Routes */}
        <Route path="/idcard" element={<IdCard />} />
        <Route path="/myapplication" element={<MyApplication />} />
        <Route path="/browseinternships" element={<BrowseInternships />} />

        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/browseinternships" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;