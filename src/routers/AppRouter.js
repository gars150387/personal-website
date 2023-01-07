import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { MainPage } from "../pages/main-page";
import { Resume } from "../pages/Resume";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/main" element={<MainPage />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};
