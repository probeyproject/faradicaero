import React from "react";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import gsap from "gsap";

const portfolioList = [
  {
    image:
      "https://cdn.pixabay.com/photo/2023/08/13/17/54/drone-8188144_1280.jpg",
    title: "Marketing",
    categories: ["Digital Marketing"],
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2024/05/20/16/30/drone-8775749_1280.jpg",
    title: "Management",
    categories: ["Content Writing"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio30.jpg",
    title: "Branding",
    categories: ["Product Design"],
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/08/13/17/54/drone-8188144_1280.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/08/13/17/54/drone-8188144_1280.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio27.jpg",
    title: "Customization",
    categories: ["Theme Development"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio26.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio25.jpg",
    title: "Development",
    categories: ["Editor Expert"],
  },
];

const GalleryPage = () => {
  useGSAP(() => {
    // GSAP Animation for portfolio items on page load
    gsap.fromTo(
      ".portfolio-item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "back.inOut" }
    );
  });

  return (
    <>
      <div
        className="flex pt-40 h-[50vh] pb-10 bg-black justify-center mb-6 md:mb-1"
        style={{
          borderBottomLeftRadius: "50% 40px",
          borderBottomRightRadius: "50% 40px",
        }}
      >
        <div className="sm:max-w-md text-center">
          <h2 className="text-3xl text-white font-bold leading-none md:text-[45px] mb-4">
            My Latest Works
          </h2>
          <p className="text-white">
            Explore our portfolio showcasing our latest creative and technical
            projects.
          </p>
        </div>
      </div>
      <section className="py-14 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portfolioList.map((portfolio, index) => (
              <div
                key={index}
                className="portfolio-item relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 w-[200px] h-[100px] bg-white bg-opacity-25 p-4 rounded-lg md:opacity-0 md:group-hover:opacity-80 transition-opacity duration-300">
                  <h5 className="text-lg font-semibold mb-2">
                    {portfolio.title}
                  </h5>
                  <p className="text-sm">{portfolio.categories.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
