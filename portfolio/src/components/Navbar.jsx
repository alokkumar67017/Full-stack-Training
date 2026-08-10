import { useState, useEffect } from "react";

import {
  Sun,
  Moon,
  Menu,
  X,
  Sparkles
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");


  const sections = [
    "home",
    "about",
    "skills",
    "portfolio",
    "education",
    "contact"
  ];


  useEffect(() => {

    const handleScroll = () => {

      let current = "home";

      sections.forEach((sectionId) => {

        const section = document.getElementById(sectionId);

        if (section) {

          const sectionTop = section.offsetTop;

          if (window.scrollY >= sectionTop - 200) {
            current = sectionId;
          }

        }

      });

      setActive(current);

    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  const goToSection = (sectionId) => {

    const section = document.getElementById(sectionId);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth"
      });

    }

    setMenuOpen(false);
  };


  return (

    <nav className="navbar">

      {/* LOGO */}

      <div
        className="brand"
        onClick={() => goToSection("home")}
      >

        <div className="brand-box">
          AK
        </div>

        <div className="brand-name">
          Alok<span>.Kumar</span>
        </div>

      </div>


      {/* NAVIGATION */}

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>

        <button
          className={active === "home" ? "active" : ""}
          onClick={() => goToSection("home")}
        >
          Home
        </button>


        <button
          className={active === "about" ? "active" : ""}
          onClick={() => goToSection("about")}
        >
          About
        </button>


        <button
          className={active === "skills" ? "active" : ""}
          onClick={() => goToSection("skills")}
        >
          Skills
        </button>


        <button
          className={active === "portfolio" ? "active" : ""}
          onClick={() => goToSection("portfolio")}
        >
          Portfolio
        </button>


        <button
          className={active === "education" ? "active" : ""}
          onClick={() => goToSection("education")}
        >
          Education
        </button>


        <button
          className={active === "contact" ? "active" : ""}
          onClick={() => goToSection("contact")}
        >
          Contact
        </button>

      </div>


      {/* RIGHT SIDE */}

      <div className="nav-right">

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle dark mode"
        >

          {darkMode ? (
            <Sun size={21} />
          ) : (
            <Moon size={21} />
          )}

        </button>


        <button
          className="talk-button"
          onClick={() => goToSection("contact")}
        >
          <Sparkles size={17} />
          Let's Talk
        </button>


        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? (
            <X />
          ) : (
            <Menu />
          )}

        </button>

      </div>

    </nav>
  );
}

export default Navbar;