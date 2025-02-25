import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import ModelViewer from "../Loader/ModelViewer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function BannerPage({ ref }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    // animate blob
    // gsap.from(".animate_", {
    //     x:-100,
    //     duration: 2,
    //     scale: 1.05,
    //     yoyo: true,
    //     repeat: 0
    // });
    const splitText = new SplitType(".service__title", { types: "chars" });
    gsap.from(splitText.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.1,

      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 100%",
      },
    });
    const split_Text = new SplitType(".service__title_two", { types: "chars" });
    gsap.from(split_Text.chars, {
      opacity: 0,
      y: 40,
      stagger: 0.4,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 100%",
      },
    });

    gsap.to(sectionRef.current, {
      y: -20,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        scrub: true,
      },
    });
  });
  return (
    <section className="w-full pt-20  md:h-screen overflow-hidden" ref={ref}>
      <div
        ref={sectionRef}
        className="flex flex-col  items-center min-h-screen  text-white relative"
      >
        {/* Title Section */}
        <div className="relative top-8 lg:top-12 lg:left-6">
          <h1
            ref={titleRef}
            className="service__title text-3xl p-2 md:text-8xl font-bold tracking-wide uppercase animate_  flex gap-10 md:gap-44"
          >
            <span>Innovating</span> <span className=" ">THE </span>
          </h1>
          <h2
            ref={titleRef}
            className="service__title_two text-4xl p-4  md:p-0 md:text-8xl font-bold tracking-wide mt-2 float-right text-red-500"
          >
            SKIES
          </h2>
        </div>

        {/* Animated Blob */}
        <div className="absolute    top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-r from-gray-500 to-slate-300 rounded-full opacity-70 animate-pulse filter blur-3xl"></div>
        <div className="absoulte w-full ">
          <ModelViewer />
        </div>

        {/* Latest Project Section */}
        <div className="absolute flex bottom-16 md:bottom-72 text-center  lg:right-16 ">
          <div className=" bg-opacity-50 px-6 py-4 md:w-96 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold uppercase">
              Latest Project
            </h3>
            <p className="text-sm md:text-base mt-2">
              We specialize in creating meaningful digital experiences infused
              with emotion, driven by innovation, evoking a sense of awe and
              wonder.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-68  ">
          {/* <p className="text-sm uppercase tracking-wide">[ Scroll ]</p> */}
        </div>

        {/* Floating Icon */}
        {/* <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16">
        <button
          className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:bg-red-600 transition"
        >
          <span className="text-white text-xl">+</span>
        </button>
      </div> */}
      </div>
    </section>
  );
}

export default BannerPage;
