import React, { Suspense, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
import LoadingPage from "./Components/Loader/LoadingPage";
import ProjectPage from "./Pages/ProjectPage";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import ProductGrid from "./Components/ProductGrid/ProductGrid";
import Header from "./Components/Layout/Header";
import GalleryPage from "./Pages/GallerryPage";

// Suspense loading routes for components
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Services = React.lazy(() => import("./Pages/Services"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));
const Blog = React.lazy(() => import("./Pages/Blog"));

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <LoadingPage />
        </div>
      }
    >
      <BrowserRouter>
        <Main /> {/* Move the logic for location and animation here */}
      </BrowserRouter>
    </Suspense>
  );
}

function Main() {
  const location = useLocation(); // Hook to get the current route
  const containerRef = useRef(null); // Ref for the main container

  useEffect(() => {
    // GSAP animation on page load
    gsap.fromTo(
      containerRef.current,
      {
        x: "100%", // Start off-screen to the right
        opacity: 0,
      },
      {
        x: "0%", // Move to normal position
        opacity: 1,
        duration: 1,
        ease: "power4.out", // Smooth ease out
        onComplete: () => {
          // Ensure content height is adjusted after animation
          document.body.style.overflow = "auto"; // Allow scrolling after animation
        },
      }
    );

    // Disable overflow during animation to prevent scrolling
    document.body.style.overflow = "hidden";
  }, [location]);

  return (
    <div className="backgound_color">
      <Header />
      <div
        ref={containerRef}
        style={{ minHeight: "100vh", overflow: "hidden" }}
      >
        {/* Add style for container to ensure proper height */}
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/grid" element={<ProductGrid />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/gallary" element={<GalleryPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
