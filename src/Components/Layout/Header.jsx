import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./Header.css";
import SplitType from "split-type";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  // Function to handle scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current + 10) {
      // If scrolling down
      setShowHeader(false);
    } else if (currentScrollY < lastScrollY.current - 10) {
      // If scrolling up
      setShowHeader(true);
    }

    setScrolled(currentScrollY > 50); // Toggle background color change
    lastScrollY.current = currentScrollY;
  };

  const logoRef = useRef(null);

  const split_Text = new SplitType(".logo_header", { types: "chars" });
  gsap.from(split_Text.chars, {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: logoRef.current,
      start: "top 100%",
    },
  });

  gsap.fromTo(
    split_Text.chars[4], // Third character (R in "FARADIC")
    {
      opacity: 0,
      rotate: -360, // Start rotation (negative for a smooth effect)
    },
    {
      opacity: 1,
      rotate: 0, // Ends at normal position
      duration: 2,
      ease: "power2.out",
    }
  );
  gsap.fromTo(
    split_Text.chars[10], // Third character (R in "FARADIC")
    {
      opacity: 0,
      rotate: -140, // Start rotation (negative for a smooth effect)
    },
    {
      opacity: 1,
      rotate: 0, // Ends at normal position
      duration: 4,
      ease: "power2.out",
      scrub: true,
    }
  );
  gsap.fromTo(
    split_Text.chars[12], // Third character (R in "FARADIC")
    {
      opacity: 0,
      rotate: -360, // Start rotation (negative for a smooth effect)
    },
    {
      opacity: 1,
      rotate: 0, // Ends at normal position
      duration: 6,
      ease: "power2.out",
      scrub: true,
    }
  );
 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hoverAnimation = () => {
      gsap.to(split_Text.chars, {
        rotateY: 360, // Rotates each letter around Y-axis
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
      });
    };

    const resetAnimation = () => {
      gsap.to(split_Text.chars, {
        rotateY: 0, // Resets rotation
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
      });
    };

    const logo = logoRef.current;
    logo.addEventListener("mouseenter", hoverAnimation);
    logo.addEventListener("mouseleave", resetAnimation);
  });

  // Smooth GSAP Animation for header appearance/disappearance
  useGSAP(() => {
    gsap.to(headerRef.current, {
      y: showHeader ? 0 : -120, // Moves the header smoothly
      duration: 0.8,
      ease: "power2.out",
    });
  }, [showHeader]);

  return (
    <header
      ref={headerRef}
      className={`header w-full fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "scrolled bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="header-container px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <h1 ref={logoRef} className="text-xl font-bold logo_header ">
            F A R A D I C
          </h1>
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
        <nav className={  `nav ${menuOpen ? "nav-open" : ""}`}>
          <ul className="nav-links flex gap-6 text-lg font-medium">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/project">PROJECTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/gallary">GALLARY</Link>
            </li>
            <li>
              <Link to="/blog">BLOGS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;