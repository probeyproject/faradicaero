import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import { gsap } from "gsap"; // Still need gsap for animation
import { Link } from "react-router-dom";
import "./Header.css"; // Import normal CSS

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef();

  // Handle scroll to toggle scrolled state
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Register scroll event listener in useEffect
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use the useGSAP hook for animations
  useGSAP(() => {
    // GSAP animation for the logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.6 }
    );

    // GSAP animation for header background color on scroll
    gsap.to(".header", {
      backgroundColor: scrolled ? "#ffffff" : "transparent",
      duration: 0.1,
      ease: "power2.out",
    });
  }, [scrolled]); // Trigger whenever the scrolled state changes

  return (
    <header className={`header w-full ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo" ref={logoRef}>
          <h1>FARADIC</h1>
        </div>

        {/* Hamburger Menu Button */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/gallary">Gallary</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
