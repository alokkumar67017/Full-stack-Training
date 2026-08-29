import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<course/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;