import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Protectrouter Component
 * Checks if user is authenticated in localStorage.
 * If authenticated -> renders children (protected page).
 * If not -> redirects to /login with redirected route in state.
 */
const Protectrouter = ({ children }) => {
  const location = useLocation();
  const authUser = localStorage.getItem('authUser');

  if (!authUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default Protectrouter;