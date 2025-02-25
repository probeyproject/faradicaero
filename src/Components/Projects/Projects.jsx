import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsImages from "./ProjectsImages";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    // GSAP animations inside the useGSAP hook
    gsap.utils.toArray(".image_conatiner").forEach((container, index) => {
      const q = gsap.utils.selector(container);
      gsap.utils.toArray(q(".project_image")).forEach((peice, i) => {
        gsap.from(peice, {
          x: (i + 1) * 1200,
          scale: 2,
          y: 90,
          duration: 2,
          scrollTrigger: {
            trigger: `.image_${index + 1}`,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    // Box Rotation Animation
    gsap.to("._box_", {
      rotation: 360, // Rotate 360 degrees
      duration: 4, // Duration of the rotation
      scrollTrigger: {
        trigger: "._box_", // Element to trigger animation
        start: "top bottom", // When the element enters the viewport
        end: "bottom top", // When the element exits the viewport
        scrub: 1.9, // Sync animation with scroll
      },
    });

    // Text Box Animation
    gsap.from("._text_box", {
      x: -500, // Move to the original position
      opacity: 1, // Fade in
      duration: 10, // Animation duration
      stagger: 3, // Staggered animation
      scrollTrigger: {
        trigger: "._text_box", // The element to trigger animation
        start: "top bottom", // Start when the top of the text hits 80% of the viewport
        end: "bottom top", // End when the top of the text hits 50% of the viewport
        scrub: 8, // Sync animation with scroll
      },
    });
  });

  return (
    <section className="overflow-hidden parallax__bg py-5 bg-black text-white px-2">
      <h2 className="section-title mt-1 text-red-500 text-center text-5xl font-bold relative">
        Projects
        <span className="inline-block ml-2 w-10 h-10 bg-transparent border-1 relative border-gray-600 _box_"></span>
      </h2>
      <div className="w-full mt-10 md:py-[10px] md:px-40">
        <div className="md:flex gap-5 p-3">
          <div className="font-bold md:w-[340px] w-88">
            <span className="inline-block mt-1 mr-2 rounded-full relative border-gray-600">
              <h2 className="bg-red-500 text-xl px-1 text-white">01</h2>
            </span>
            <h1 className="text-3xl text-red-500 _text_box">Project Name</h1>
            <p className="mt-4 _text_box pb-4">
              Project Description sit amet, consectetur adipiscing elit. Sed
              sollicitudin, eros eu scelerisque convallis, velit neque volutpat
              lectus, vel dignissim nisi velit vel lectus. eros eu scelerisque
              convallis
            </p>
          </div>
          <ProjectsImages imgNumbers="1" />
        </div>
        <div className="md:flex gap-5 p-3">
          <div className="font-bold md:w-[340px] w-88">
            <span className="inline-block mt-1 mr-2 rounded-full relative border-gray-600">
              <h2 className="bg-red-500 text-xl px-1 text-white">02</h2>
            </span>
            <h1 className="text-3xl text-red-500 _text_box">Project Name</h1>
            <span className="inline-block opacity-50 ml-2 w-30 h-30 bg-transparent border-2 absolute border-gray-600 _box_"></span>
            <p className="mt-4 _text_box pb-4">
              Project Description sit amet, consectetur adipiscing elit. Sed
              sollicitudin, eros eu scelerisque convallis, velit neque volutpat
              lectus, vel dignissim nisi velit vel lectus. eros eu scelerisque
              convallis
            </p>
          </div>
          <ProjectsImages imgNumbers="2" />
        </div>
        <div className="md:flex gap-5 p-3">
          <div className="font-bold md:w-[340px] w-88">
            <span className="inline-block mt-1 mr-2 rounded-full relative border-gray-600">
              <h2 className="bg-red-500 text-xl px-1 text-white">03</h2>
            </span>
            <h1 className="text-3xl text-red-500 _text_box">Project Name</h1>
            <p className="mt-4 _text_box pb-4">
              Project Description sit amet, consectetur adipiscing elit. Sed
              sollicitudin, eros eu scelerisque convallis, velit neque volutpat
              lectus, vel dignissim nisi velit vel lectus. eros eu scelerisque
              convallis
            </p>
          </div>
          <ProjectsImages imgNumbers="3" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
