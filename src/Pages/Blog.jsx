import React, { useEffect } from "react";
import { FaClock } from "react-icons/fa"; // Importing the clock icon from react-icons
import { gsap } from "gsap"; // Import GSAP for animations

const blogs = [
  {
    title: "Long lasting fall scent for women sale offer",
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
    author: "Mahws Georgia",
    date: "13 Jan, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_2.jpg",
  },
  {
    title: "Fashion Essentials All Men Should Know",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque laudantium.",
    author: "Mary Gold",
    date: "27 Oct, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
  },
  {
    title: "Dolor sit amet, adiplscing eliyt sed",
    description:
      "Viverra tellus in hac habitasse platea dictumst. Sollicitudin tempor id eu nisl.",
    author: "Hardik Finn",
    date: "11 Mar, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
  },
];

const BlogItem = ({ blog }) => {
  const { title, description, author, date, image } = blog;

  return (
    <article className="flex flex-col shadow-lg bg-white dark:bg-[#1E2735] dark:shadow-none rounded-lg overflow-hidden pb-2 h-full">
      <img src={image} alt={title} className="h-auto w-full" />
      <div className="flex flex-col justify-between grow p-3 pb-8 lg:p-6">
        <div>
          <h4 className="font-medium text-2xl mb-1">{title}</h4>
          <p className="opacity-80 mb-2 flex flex-col gap-2">
            <p className="mr-2">
              By <span className="text-blue-600">{author}</span>
            </p>
            <p className="flex gap-2 place-items-center">
              <FaClock className="ml-1" /> <span>{date}</span>
            </p>
          </p>
          <p className="opacity-60 mt-3 mb-6">{description}</p>
        </div>
        <div></div>
      </div>
    </article>
  );
};

const FeaturedBlogItem = () => {
  return (
    <article>
      <div className="grid grid-cols-12 items-center gap-6">
        <div className="col-span-12 lg:col-span-7 lg:order-2">
          <img
            src="https://cdn.easyfrontend.com/pictures/blog/blog_7.jpg"
            alt="Featured Blog"
            className="max-w-full h-auto rounded"
          />
        </div>
        <div className="col-span-12 lg:col-span-5 lg:order-1">
          <div className="mt-6 lg:mt-0 lg:pl-6">
            <h4 className="font-medium text-2xl md:text-[40px] md:leading-[50px] mb-2">
              Tellus in metus vulp utate eu scele risque scele viverra mauris in
              al?
            </h4>
            <p className="md:text-lg opacity-60 mt-3 mb-6">
              This is a factor in the economy of a nation, and the
              administration takes the major choices. Banking crises have
              developed many times throughout history when one or more risks
              have emerged for a banking sector as a whole.
            </p>
            <div className="text-base leading-5 flex items-center">
              <div className="mr-2">
                <img
                  src="https://cdn.easyfrontend.com/pictures/users/user18.jpg"
                  alt="Author"
                  className="h-auto max-w-full rounded-full border border-border"
                  width="47"
                />
              </div>
              <div className="opacity-80">
                <p>
                  By <b>Alan Bell</b>
                </p>
                <p className="text-sm opacity-75">August 10th, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Blog5 = () => {
  useEffect(() => {
    // GSAP Animation on page load
    gsap.fromTo(
      ".heading",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".subheading",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <div
        className="grid grid-cols-12 justify-center pt-30 pb-10 bg-black"
        style={{
          borderBottomLeftRadius: "50% 40px",
          borderBottomRightRadius: "50% 40px",
        }}
      >
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-end-11 text-center text-white">
          <h2 className="heading text-[32px] lg:text-[45px] leading-none font-bold mb-4">
            Pros & Cons of Being a Model.
          </h2>
          <p className="subheading text-lg font-medium opacity-80 lg:px-12 mb-9">
            It’s no secret that the digital industry is booming. From exciting
            startups to global brands, companies are reaching out to digital
            agencies.
          </p>
        </div>
      </div>
      <section className="ezy__blog5 light py-14 md:py-24 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
        <div className="container px-20 md:px-8 xl:px-28">
          <div className="grid grid-cols-12 items-center mt-12 gap-6">
            <div className="col-span-12">
              <FeaturedBlogItem />
            </div>
            {blogs.map((blog, i) => (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 h-full mt-6"
                key={i}
              >
                <BlogItem blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog5;
