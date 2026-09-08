import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAccounts from "./Component/UserAccounts/UserAccounts";
import Registrations from "./Component/Registrations/Registrations";
import Internships from "./Component/Internships/Internships";

// Layout
 

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/users" element={<UserAccounts />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/internships" element={<Internships />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;