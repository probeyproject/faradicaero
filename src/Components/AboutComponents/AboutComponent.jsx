import React, { useRef } from "react";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import { gsap } from "gsap"; // Still need gsap for animation
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import SvgBackground from "../SvgImages/SvgBackground";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AboutComponent() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const wordRef = useRef(null);

  // Using useGSAP hook for the animations
  useGSAP(() => {
    // Parallax Effect on Image
    gsap.fromTo(
      imageRef.current,
      { y: 50, opacity: 0 },
      {
        y: -50,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Split Text and Stagger Animation for the first text block
    const splitText = new SplitType(textRef.current, { types: "words, chars" });
    gsap.fromTo(
      splitText.chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Adjust stagger time
        ease: "power3.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 40%",
          end: "top 20%",
          scrub: 2,
        },
      }
    );

    // Split Text and Stagger Animation for the second text block
    const splitTextTwo = new SplitType(wordRef.current, {
      types: "words, chars",
    });
    gsap.fromTo(
      splitTextTwo.chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Adjust stagger time
        ease: "power3.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: wordRef.current,
          start: "top 40%",
          end: "top 20%",
          scrub: 2,
        },
      }
    );

    // Parallax Effect on Background Image
    gsap.fromTo(
      imageRef.current,
      { y: "10%" }, // Initial parallax offset
      {
        y: "-10%", // Final parallax offset
        ease: "power0.5.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: 2, // Slower and smoother animation
        },
      }
    );
  }, []); // Empty dependency array to run once on mount

  return (
    <section className="py-14 md:py-16 overflow-hidden">
      <div className="container px-4">
        <div className="grid lg:grid-cols-3 gap-x-6">
          <div ref={textRef}>
            <h2 className="lg:text-end text-4xl font-medium md:text-5xl leading-tight md:leading-normal tracking-wide lg:pl-6 mb-0">
              Traveller Visiting Nowadays Iceage Caves With Amazing Eye-catching
              Scenes.
            </h2>
          </div>
          <div className="lg:px-4 my-2 lg:my-0">
            <div
              ref={imageRef}
              className="parallax_bg flex items-center justify-center min-h-[300px] md:h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/professional-drone-pilot-stock-photographer_346278-263.jpg?t=st=1738827721~exp=1738831321~hmac=dd4ec5241aa579a28cf99e4bc986b82a08b6589045775a3fb08b700171aef18f&w=360)",
              }}
            >
              {/* Background Image */}
            </div>
          </div>
          <div className="pr-6" ref={wordRef}>
            <p className="mb-2 md:mt-0 font-semibold text-lg">
              Created forth two. Behold appear first, kind all I saying fowl man
              itself moved which every open shall moved subdue appear. kind all
              I saying fowl man itself moved which every open shall moved subdue
              appear. kind all I saying fowl man itself moved which every open
              shall moved subdue appear.
            </p>
            <p className="mt-5 mb-0 font-semibold text-lg">
              Moved bearing give a two after. Had. Seas. Man they're. Grass
              above kind saying thing for that void sixth fly His after it. Had.
              Seas. Man they're. Grass above kind Had. Seas. Man they're. Grass
              above kind
            </p>
            <p className="mt-5 mb-0 font-semibold text-lg">
              The set doesn't moved. Deep don't fruit fowl gathering heaven days
              moving Deep don't fruit fowl gathering heaven days moving creeping
              under from I air.
            </p>
          </div>
        </div>
      </div>
      {/* <SvgBackground /> */}
    </section>
  );
}

export default AboutComponent;
