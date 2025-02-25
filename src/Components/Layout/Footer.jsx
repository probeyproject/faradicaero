import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" ref={footerRef}>
          {/* Get in Touch */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Get in Touch
            </h3>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> Plot No:220, 221
              Nazirabad, Narendrapur, Kolkata
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaEnvelope className="text-red-500" /> contact123@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhoneAlt className="text-red-500" /> (+91) 912-3476-973
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Latest Blog",
                "About Pages",
                "Contact Us",
              ].map((link, index) => (
                <li key={index} className="hover:text-red-500 transition">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Recent Post
            </h3>
            {[
              {
                date: "25 May",
                title: "Planning approved for restoration town hall.",
              },
              {
                date: "28 Dec",
                title: "Planning approved for restoration town hall.",
              },
            ].map((post, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-700"></div>
                <div>
                  <p className="text-red-500 font-semibold">{post.date}</p>
                  <p className="text-sm">{post.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-sm">
              Join our subscribers list to get the latest news, updates, and
              special offers delivered directly to your inbox.
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 text-white outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-red-500 px-4 py-2 text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            Terms & Conditions / Privacy Policy / Contact Us
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="hover:text-red-500 transition cursor-pointer" />
            <FaTwitter className="hover:text-red-500 transition cursor-pointer" />
            <FaLinkedinIn className="hover:text-red-500 transition cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
