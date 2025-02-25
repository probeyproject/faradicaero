import React, { useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
import TeamMember12 from "../Components/Teams";

const About = () => {
  const stories = [
    {
      title: "The journey to relaxation.",
      description:
        "Finding a hammock you can truly relax in didn't happen overnight. It started with a chance discovery while on vacation, and took a lot of hard work (and a lot of hanging around) to bring the softest, most comfortable, and thoughtfully crafted hammocks to your backyard.",
      image: "https://cdn.easyfrontend.com/pictures/featured/featured_13.png",
    },
    {
      title: "The way to heaven.",
      description:
        "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.",
      image: "https://cdn.easyfrontend.com/pictures/about/about9.jpg",
    },
  ];

  const StoryItem = ({ item, index }) => {
    const { title, description, image } = item;

    useEffect(() => {
      // Animate each story item as it comes into view
      gsap.fromTo(
        `.story-item-${index}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          delay: 0.3 * index,
        }
      );
    }, [index]);

    return (
      <div
        className={`story-item-${index} grid grid-cols-12 justify-center items-center mt-12`}
      >
        <div
          className={`col-span-12 md:col-span-5 ${
            index % 2 === 0
              ? "order-1 md:order-2 md:col-start-7"
              : "order-2 md:order-1 md:col-start-2"
          }`}
        >
          <div
            className={`flex flex-col justify-center ${
              index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"
            }`}
          >
            <h4 className="text-2xl text-red-500 font-bold mb-4">{title}</h4>
            <p className="text-lg leading-relaxed text-gray-500 text-justify opacity-70 mb-0 md:pr-6">
              {description}
            </p>
          </div>
        </div>
        <div
          className={`${
            index % 2 === 0
              ? "order-1 md:col-start-2"
              : "order-1 md:order-2 md:col-start-7"
          } col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0`}
        >
          <div>
            <img
              src={image}
              alt={title}
              className="max-w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    // GSAP Animation for header and subheading
    gsap.fromTo(
      ".header-text",
      { opacity: 0, y: -50 }, // Initial state
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    );

    gsap.fromTo(
      ".subheading-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.3 }
    );
  }, []);

  return (
    <>
      <div
        className="grid grid-cols-12 pt-30 justify-center text-center pb-10 bg-black"
        style={{
          borderBottomLeftRadius: "50% 40px",
          borderBottomRightRadius: "50% 40px",
        }}
      >
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <h2 className="header-text text-4xl text-white leading-snug md:text-5xl md:leading-snug font-bold mb-6">
            Our Story
          </h2>
          <p className="subheading-text text-xl text-white opacity-80 mb-4">
            We not only make the world's most comfortable hammocks, but through
            training and sustainable job creation, we empower our weavers and
            their families to break the cycle of poverty and build a brighter
            future.
          </p>
        </div>
      </div>
      <section className="py-14 md:py-10 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
          {stories.map((item, i) => (
            <StoryItem item={item} index={i + 1} key={i} />
          ))}
        </div>
      </section>
      <TeamMember12 />
    </>
  );
};

export default About;
