import React, { useRef, useEffect } from "react";
import {
  AiFillCamera,
  AiFillCar,
  AiFillEnvironment,
  AiFillSafetyCertificate,
} from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const ServicesWeOffer = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const serviceRefs = useRef([]);

  // Left Section Animation
  useGSAP(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  // Right Section Animation
  useGSAP(() => {
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  // Staggered Animation for Service Items
  useGSAP(() => {
    if (serviceRefs.current.length > 0) {
      gsap.fromTo(
        serviceRefs.current,
        { y: 50, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: serviceRefs.current[0], // Ensure correct triggering
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  const services = [
    {
      icon: <AiFillCamera />,
      heading: "Aerial Photography",
      subheading: "High-Resolution Imaging",
      paratext:
        "Capture stunning aerial photographs and videos with high-quality drone cameras, perfect for real estate, events, and marketing campaigns.",
    },
    {
      icon: <AiFillEnvironment />,
      heading: "Survey & Mapping",
      subheading: "Precision Geospatial Data",
      paratext:
        "Advanced drone technology provides accurate land surveys, 3D mapping, and topographical analysis for construction, agriculture, and real estate.",
    },
    {
      icon: <AiFillCar />,
      heading: "Drone Delivery",
      subheading: "Efficient & Fast Logistics",
      paratext:
        "Revolutionizing delivery services with drones, ensuring faster, more efficient transport of medical supplies, e-commerce goods, and urgent packages.",
    },
    {
      icon: <AiFillSafetyCertificate />,
      heading: "Inspection & Monitoring",
      subheading: "Infrastructure & Industrial Checks",
      paratext:
        "Enhance safety and efficiency with drone-based inspections for power lines, bridges, towers, and industrial sites, reducing risks and costs.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="mt-4 lg:pt-10 pt-2 container mx-auto">
        <div className="mt-4 pt-3">
          <div>
            <div className="flex flex-wrap">
              {/* Left Section */}
              <div
                ref={leftRef}
                className="w-full md:w-1/2 border-r border-gray-300 mb-3 md:mb-0"
              >
                <div className="sticky top-0">
                  <p className="uppercase font-bold text-gray-50 mb-2 mx-2 md:mx-6">
                    Services We Offer
                  </p>
                  <hr className="border-gray-300 " />
                  <span className="text-4xl text-red-500 py-2 font-semibold px-6">
                    Together We Create <br />
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-white p-5">
                    They're unique in that they can drive remotely and
                    autonomously, and they're capable of maintaining a
                    controlled, sustained level of flight.
                  </span>
                </div>
              </div>

              {/* Right Section */}
              <div ref={rightRef} className="w-full md:w-1/2 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      ref={(el) => (serviceRefs.current[index] = el)}
                      className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <p className="uppercase font-bold mb-2 text-red-500">
                          {service.heading}
                        </p>
                        <div className="text-4xl text-red-500">
                          {service.icon}
                        </div>
                      </div>
                      <hr className="border-gray-300" />
                      <span className="block text-lg font-light">
                        {service.subheading}
                      </span>
                      <p className="text-sm leading-relaxed mt-2 font-semibold">
                        {service.paratext}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWeOffer;
