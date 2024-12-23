"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="contactnv" className="absolute w-full z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-white font-bold text-2xl"> </div>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
        <ul
        style={{padding:'2em'}}
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-black/80 md:bg-transparent 
          md:flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 py-4 md:py-0 transition-all`}
        >
          <li className="list-none text-white text-lg hover:text-[#a0292a] !hover:text-[#a0292a] transition-colors">
            <a id="navlist" href="/">Home</a>
          </li>
          <li className="list-none text-white text-lg hover:text-[#a0292a] !hover:text-[#a0292a] transition-colors">
            <a id="navlist" href="/#about">About</a>
          </li>
          <li className="list-none text-white text-lg hover:text-[#a0292a] !hover:text-[#a0292a] transition-colors">
            <a id="navlist" href="/#history">Coffee</a>
          </li>
          <li className="list-none text-white text-lg hover:text-[#a0292a] !hover:text-[#a0292a] transition-colors">
            <a id="navlist" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
