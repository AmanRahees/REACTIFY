import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";
import Dashboard from "./Pages/dashboard/Dashboard";
import { Logout } from "./utils/auth";
import PrivateRoute, { RestrictRoute } from "./Routes/PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<RestrictRoute element={<Login />} />} />
        <Route
          path="/register"
          element={<RestrictRoute element={<Signup />} />}
        />

        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/logout" element={<PrivateRoute element={<Logout />} />} />
        <Route
          path="/admin"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        {/* <Route
          path="/user/:id/:status"
          element={<PrivateRoute element={<Dashboard />} />}
        /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
