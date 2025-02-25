import React, { useState } from "react";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import gsap from "gsap";
import "./ContactUs.css";

const ContactUs = () => {
  const [status, setStatus] = useState("Submit");

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animating Contact Header
      gsap.from(".contact-header", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power2.out",
      });

      // Animating Subheader
      gsap.from(".contact-subheader", {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      // Animating Contact Form
      gsap.from(".contact-form", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
      });

      // Animating Contact Info Section
      gsap.from(".contact-info-section", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.8,
        ease: "power2.out",
      });

      // Animating Icon Boxes in Contact Info
      gsap.from(".wt-icon-box-wraper", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        stagger: 0.2, // Each icon-box appears one after another
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // Cleanup GSAP animations when component unmounts
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., show a success message)
  };

  return (
    <div className="contact-container-main">
      <div className="get-us-container">
        <h2 className="contact-header">Get in Touch With Us</h2>
        <p className="contact-subheader">
          Have questions? We'd love to hear from you. Fill out the form below
          and we’ll get back to you soon!
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-bg">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="username"
              type="text"
              placeholder="Your Name"
              className="contact-input"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="contact-input"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="contact-input"
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="contact-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-textarea"
              required
            ></textarea>
            <button type="submit" className="contact-button">
              {status}
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <div className="wt-icon-box-wraper">
            <div className="icon-content">
              <span>Phone number</span>
              <p>(+291) 0987 654 321</p>
            </div>
          </div>

          <div className="wt-icon-box-wraper">
            <div className="icon-content">
              <span>Email address</span>
              <p>thewebmax@gmail.com</p>
            </div>
          </div>

          <div className="wt-icon-box-wraper">
            <div className="icon-content">
              <span>Address info</span>
              <p>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
            </div>
          </div>

          <div className="wt-icon-box-wraper">
            <div className="icon-content">
              <span>Opening Hours</span>
              <ul>
                <li>Mon-Fri: 9 am - 6 pm</li>
                <li>Saturday: 9 am - 4 pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
