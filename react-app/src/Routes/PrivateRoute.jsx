import React from "react";
import { isAuthenticated } from "../utils/auth";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
}

export function RestrictRoute({ element }) {
  return !isAuthenticated() ? element : <Navigate to="/" replace />;
}

export default PrivateRoute;
