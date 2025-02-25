import React, { useRef, useEffect } from "react";
import Navbar from "../Components/Layout/Navbar";
import BannerPage from "../Components/Banner/BannerPage";
import ServicesWeoffer from "../Components/Services/ServicesWeoffer";
import DroneFeatures from "../Components/Features/DroneFeatures";
import Services from "./Services";
import AboutComponent from "../Components/AboutComponents/AboutComponent";
import Projects from "../Components/Projects/Projects";
import MergeText from "../Components/Merge/MergeText";
import FeatureView from "../Components/Features/FeatureView";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "../Components/Layout/Footer";
import Testimonials from "../Components/Testimonial'/Testimonial";
import MIssion from "../Components/Mission/MIssion";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import ImageGrid from "../Components/ProductGrid/ImageGrid";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  // Create refs for each section you want to animate
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesWeofferRef = useRef(null);
  const servicesRef = useRef(null);
  const mergeTextRef = useRef(null);
  const droneFeaturesRef = useRef(null);

  useEffect(() => {
    // Gather all section refs into an array
    const sections = [
      bannerRef,
      aboutRef,
      featureRef,
      projectsRef,
      servicesWeofferRef,
      servicesRef,
      mergeTextRef,
      droneFeaturesRef,
    ];

    // Animate each section as it enters the viewport
    sections.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            scrub: 2,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="bg-black" ref={bannerRef}>
        <BannerPage />
      </div>
      <div ref={aboutRef}>
        <AboutComponent />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>
      <MIssion />
      <div ref={servicesWeofferRef}>
        <ServicesWeoffer />
      </div>

      <Testimonials />
    </>
  );
}

export default Home;
