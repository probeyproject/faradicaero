import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="pt-4 px-5 fixed w-full z-20">
      <div className="navbar bg-white  rounded-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                dev
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content   bg-base-100 rounded-box z-[1] mt-2 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-red-500  font-bold">
            <img src="./image/IMG_7207_.png" alt="logo" className="w-32" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  gap-5 font-bold text-sm text-gray-600 px-1">
            <li className="text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg">
              <Link to="/about">About</Link>
            </li>
            <li className="text-lg">
              <Link to="/project">Projects</Link>
            </li>
            <li className="text-lg">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-lg">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
