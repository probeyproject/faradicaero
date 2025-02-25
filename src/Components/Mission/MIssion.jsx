import React, { useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP

function MIssion() {
  useEffect(() => {
    // Create the IntersectionObserver to observe when the component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the component is in the viewport
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // GSAP Animations for Mission Section when component is visible
            gsap.fromTo(
              ".mission-heading", // Target the mission heading
              { x: -100, opacity: 0 }, // Initial position off to the left
              { x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Animate to original position
            );

            gsap.fromTo(
              ".mission-text", // Target the mission text
              { y: 50, opacity: 0 }, // Initial position below and transparent
              { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 } // Animate to original position with delay
            );

            gsap.fromTo(
              ".read-more", // Target the read more section
              { y: 50, opacity: 0 }, // Initial position below and transparent
              { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.4 } // Animate to original position with delay
            );

            // Stop observing the element once the animation has been triggered
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the component is visible
      }
    );

    // Start observing the Mission Section
    const missionElement = document.querySelector(".mission-section");
    if (missionElement) {
      observer.observe(missionElement);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (missionElement) {
        observer.unobserve(missionElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full md:h-screen z-0 mission-section">
      {/* Background Image */}
      <div className="absolute bg-slate-50 opacity-100 z-1 h-full w-full bg-opacity-90">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/silhouette-hovering-mid-air-capturing-backlit-sunset-generated-by-ai_24640-91524.jpg?t=st=1738914674~exp=1738918274~hmac=7db4a5bd06cb89a1e653ffb4931b96a3630df575809d0b56c33e2eb13bea4a4d&w=1060"
          alt="Background"
        />
      </div>

      {/* Mission Section */}
      <div className="px-6 md:px-12 lg:px-24 pt-20 md:pt-20 relative z-2">
        <h3 className="mission-heading text-white border-l-4 animate-bounce border-red-500 pl-3 text-xl md:text-2xl font-bold text-shadow-neon">
          Mission
        </h3>
        <p className="mission-text text-white text-2xl md:text-4xl lg:text-4xl font-semibold w-full md:w-3/4 mt-4 text-shadow-neon">
          Our mission is to redefine the local shipping experience.
        </p>
      </div>

      {/* Read More Section */}
      <div className="read-more px-6 md:px-12 lg:px-24 mt-20 md:mt-52 relative z-2">
        <p className="text-white text-lg md:text-xl lg:text-xl w-full md:w-2/3">
          Delve into our core values, the very pillars upon which we stand, and
          uncover the myriad offerings this site holds for you.
        </p>
        <button className="mt-5 mb-6 bg-black/40 text-white border-b-4 border-red-500 px-6 py-2 text-lg md:text-xl hover:bg-black/60 transition-all duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}

export default MIssion;
