import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Profile from "../pages/auth/profile";
import News from "../pages/news";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default AppRoutes;
