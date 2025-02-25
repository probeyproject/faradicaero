import { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const headingRef = useRef(null);
  const testimonialRefs = useRef([]);

  // Using GSAP for animations
  useGSAP(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: 1,
        },
      }
    );

    // Animate testimonials
    if (testimonialRefs.current.length > 0) {
      gsap.fromTo(
        testimonialRefs.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          stagger: 0.4,
          scrollTrigger: {
            trigger: testimonialRefs.current[0],
            start: "top 95%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  const testimonialData = [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user1.png",
      text: "The precision and efficiency of these drones have transformed our surveying projects. The data accuracy is unmatched!",
      user: "Mary Tyler",
      profession: "Survey Engineer",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user2.png",
      text: "Using these drones for aerial photography has taken our real estate marketing to a whole new level. Stunning visuals every time!",
      user: "Emily Berry",
      profession: "Real Estate Photographer",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user3.png",
      text: "From inspection to delivery, these drones have optimized our workflow. Reliable, efficient, and easy to operate!",
      user: "John Alex",
      profession: "Logistics Manager",
    },
  ];

  return (
    <section className="py-14 md:py-20 mt-16 px-2 lg:px-10 bg-white dark:bg-[#2E2F41] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto text-center">
        {/* Animated Heading */}
        <h2
          ref={headingRef}
          className="text-3xl md:text-[50px] text-red-500 font-bold mb-6"
        >
          What People Say
        </h2>
        <p className="text-lg leading-6 opacity-60 max-w-xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere
          ipsum molestie sem volutpat, non imperdiet leo porttitor.
        </p>

        {/* Animated Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 p-4">
          {testimonialData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className="bg-white mt-20 md:mt-4 dark:bg-[#404156] shadow-xl rounded-b-xl p-6 lg:p-12 relative"
            >
              <div className="w-40 h-40 mx-auto -mt-28 flex justify-center items-center rounded-full border-4 border-white dark:border-[#404156]">
                <img
                  src={item.img}
                  alt={item.user}
                  className="rounded-full w-full"
                />
              </div>
              <FaQuoteLeft className="text-red-500 text-3xl absolute top-4 left-4" />
              <p className="text-[17px] leading-[1.7] opacity-60 mt-6">
                {item.text}
              </p>
              <h4 className="text-xl font-medium mt-12 mb-2">{item.user}</h4>
              <h6 className="text-red-500">{item.profession}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
