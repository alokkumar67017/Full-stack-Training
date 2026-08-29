import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          Sweet Dreams
        </Link>
      </div>


      {/* Navigation */}
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/course" onClick={closeMenu}>
          Course
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link
          to="/contact"
          className="mobile-order-btn"
          onClick={closeMenu}
        >
          Order Now
        </Link>

      </nav>


      {/* Desktop Order Button */}
      <Link to="/contact" className="order-btn">
        Order Now
      </Link>


      {/* Hamburger */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}

export default Navbar;