import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth

function ProtectedRoute() {
  const { isAuthenticated } = useAuth(); // Use the hook to get authentication status

  // If authenticated, render the child routes (using Outlet)
  // Otherwise, redirect to the home or login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;