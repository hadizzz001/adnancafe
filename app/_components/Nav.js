"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="contactnv" className="absolute w-full z-10 bg-transparent">
      <div className="container mx-auto flex justify-end items-center px-6 py-4">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 right-0 w-full md:w-[30vw] h-[60vh] bg-black/90 flex flex-col py-10 px-12 transition-all`}
        >
          <li className="list-none text-white text-lg font-semibold hover:text-[#a0292a] transition-colors py-4 flex flex-col items-center">
            <a id="navlist" href="/">Home</a>
            <span className="block h-[2px] w-full bg-white mt-2"></span>
          </li>
          <li className="list-none text-white text-lg font-semibold hover:text-[#a0292a] transition-colors py-4 flex flex-col items-center">
            <a id="navlist" href="/#about">About Us</a>
            <span className="block h-[2px] w-full bg-white mt-2"></span>
          </li>
          <li className="list-none text-white text-lg font-semibold hover:text-[#a0292a] transition-colors py-4 flex flex-col items-center">
            <a id="navlist" href="/#history">Learn More About Coffee</a>
            <span className="block h-[2px] w-full bg-white mt-2"></span>
          </li>
          <li className="list-none text-white text-lg font-semibold hover:text-[#a0292a] transition-colors py-4 flex flex-col items-center">
            <a id="navlist" href="/contact">Contact Us</a>
            <span className="block h-[2px] w-full bg-white mt-2"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
