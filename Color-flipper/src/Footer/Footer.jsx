import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h2>Sweet Dreams</h2>
          <p>
            Freshly baked with love. Enjoy delicious cakes,
            pastries, cookies and more every day.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/course">Course</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>📍 Rajkot, Gujarat</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ sweetdreams@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Sweet Dreams Bakery. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;