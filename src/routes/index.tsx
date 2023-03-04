import NewsList from "../pages/news-list";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Profile from "../pages/auth/profile";
import News from "../pages/news";
import HomePage from "../pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/news/:id" element={<News />} />
      <Route path="/all-news" element={<NewsList />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
