import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".feature-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(`.card-${index}`, {
      scale: 1.1,
      duration: 0.3,
      
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(`.card-${index}`, {
      scale: 1,
      duration: 0.3,
    });
  };

  return (

    <div className="w-full overflow-hidden p-2"><h1 className="text-3xl md:text-5xl mt-6 pt-3 font-bold text-center text-red-500 mb-5"></h1>
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen  py-10"
    >
      

      <div className="relative flex items-center justify-center w-full max-w-5xl">
        {/* Center Circular Card */}
        <div className="absolute z-10 p-10 bg-white rounded-full shadow-lg w-60 h-60 flex items-center justify-center text-center">
          <h2 className="text-xl font-bold">4K Ultra-HD Camera</h2>
          <p className="text-sm">Capture stunning aerial footage with incredible clarity.</p>
        </div>

        {/* Side Cards */}
        <div
          className="absolute feature-card card-1 left-10 hover:z-50 transform rotate-[-10deg] bg-white p-5 shadow-lg rounded-lg w-52 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <h3 className="text-lg font-bold">01 Advanced Obstacle Avoidance</h3>
          <p className="text-sm">Fly safely with smart sensors detecting nearby objects.</p>
        </div>

        <div
          className="absolute feature-card card-2 hover:z-100 right-10 transform rotate-[10deg] bg-white p-5 shadow-lg rounded-lg w-52 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <h3 className="text-lg font-bold">02 Intelligent Flight Modes</h3>
          <p className="text-sm">Follow Me, Waypoints, and Gesture Control for effortless operation.</p>
        </div>

        <div
          className="absolute feature-card card-3 bottom-10  left-20 transform rotate-[-10deg] bg-white p-5 shadow-lg rounded-lg w-52 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <h3 className="text-lg font-bold">03 Compact & Portable Design</h3>
          <p className="text-sm">Foldable, lightweight, and perfect for adventures.</p>
        </div>

        <div
          className="absolute feature-card card-4 bottom-10  right-20 transform rotate-[10deg] bg-white p-5 shadow-lg rounded-lg w-52 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          <h3 className="text-lg font-bold">04 Extended Flight Time</h3>
          <p className="text-sm">Fly up to 20 minutes on a single charge.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;

