// Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import ScrollTopBehaviour from "../components/elements/ScrollTopBehaviour";

// Pages
import Home from "../pages/home-pages/Home";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";

const VisRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        {/* All home */}
        <Route path="/" element={<Home />} />

        {/* about us page  */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Services */}

        <Route path="/services" element={<Services />} />

        {/* Blogs */}

        <Route path="/blogs" element={<Blogs />} />

        {/* Contact */}

        <Route path="/contact-us" element={<ContactUs />} />

        {/* Invalid URL */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default VisRoutes;
