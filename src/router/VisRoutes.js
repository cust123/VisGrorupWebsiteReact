import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollTopBehaviour from "../components/elements/ScrollTopBehaviour";
import Home from "../pages/home-pages/Home";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";

const VisRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        {/* All home */}
        <Route path="/" element={<Home />} />

        {/* about us page  */}

        <Route path="/about-us" element={<AboutUs />} />

        {/* pages dropdown Essentials pages */}
        {/* Essentials */}

        {/* Support */}

        {/* Others */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default VisRoutes;
