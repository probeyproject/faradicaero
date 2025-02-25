import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Update = () => {
  const countdown = [
    { time: "35", format: "Days" },
    { time: "17", format: "Hours" },
    { time: "11", format: "Minutes" },
    { time: "55", format: "Seconds" },
  ];

  const Countdown = () => (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 min-w-[100px] md:top-1/2 md:bottom-[15%] md:left-[85%] md:translate-x-0 md:-translate-y-1/2 lg:left-[90%] flex md:flex-col items-center">
      {countdown.map((count, i) => (
        <div className="flex flex-col text-center p-4" key={i}>
          <span className="text-4xl leading-none font-bold">{count.time}</span>
          <span className="text-base opacity-50">{count.format}</span>
        </div>
      ))}
    </div>
  );

  const SubscribeForm = () => (
    <form className="bg-white bg-opacity-10 rounded-[50px] overflow-hidden text-white flex items-center mt-6 md:mr-12">
      <input
        name="email"
        className="bg-transparent py-4 px-5 placeholder:text-lg placeholder:text-opacity-60 focus:outline-none grow"
        type="email"
        placeholder="Enter email"
        required
      />
      <button className="text-xl font-semibold duration-500 hover:text-blue-600 mr-7">
        <FaPaperPlane />
      </button>
    </form>
  );

  return (
    <section
      className="py-36 md:py-72 max-h-screen text-white bg-cover bg-center bg-no-repeat relative overflow-hidden z-[1]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/generative-ai-drone-performs-reconnaissance-flight-forest_1268-22212.jpg?t=st=1738783738~exp=1738787338~hmac=fe49f10da323e9865674334531aacd6c5f12503b686053af6747dae170c70c5c&w=1060)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0  -z-[1]" />
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
            <div className="text-center md:text-start">
              <h2 className="text-[32px] md:text-[65px] leading-none font-bold mb-4">
                <em>Coming Soon</em>
              </h2>
              <p className="text-lg opacity-80 ml-2">
                <em>Follow Us To be updated!</em>
              </p>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
      <Countdown />
    </section>
  );
};

export default Update;
