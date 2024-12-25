"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sendEmail } from "../api/sendEmail/sendEmail";
import Footer from "../_components/Footer";
import Nav from "../_components/Nav"; 
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Home() { 
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "phone") {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      setValue(numericValue);
    }

    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };


  const branches = [
    { name: "Barbeer branch", phone: "01-633211" },
    { name: "Zarif branch", phone: "01-735046" },
    { name: "Mar Elias branch", phone: "01-308442" },
    { name: "Chiah branch", phone: "01-271721" },
  ];

 

  return (
    <>
      <Nav />

      <section className="py-10" style={{ marginTop: "10em" }}>
  <div className="container mx-auto px-4">
    <h4 className="text-3xl md:text-4xl font-bold text-center" style={{ color: "#a0292a" }}>
      CONTACT INFORMATION
    </h4> 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {branches.map((branch, index) => (
        <div key={index} className="p-4 border rounded shadow bg-white flex items-center">
          <FaMapMarkerAlt className="text-[#a0292a] text-2xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{branch.name}</h3>
            <p className="text-gray-700">{branch.phone}</p>
          </div>
        </div>
      ))} 
    </div>
  </div>
</section>

<div className="flex justify-center items-center space-x-8 mt-6">
        {/* WhatsApp Icon */}
        <a href="https://wa.me/9613860682" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-500 text-6xl hover:text-green-700" />
        </a>

        {/* Email Icon */}
        <a href="mailto:fadims1@hotmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-blue-500 text-6xl hover:text-blue-700" />
        </a>
      </div>

      <div className=" py-10 ">
        <div className="container mx-auto">
          <h4
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ color: "#a0292a" }}
          >
            GET IN TOUCH
          </h4>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <div className="  p-6">
          <form
            action={async (formData) => {
              await sendEmail(formData);
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  className="form-control w-full rounded-lg p-3 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control w-full rounded-lg p-3 border border-gray-300 shadow-sm mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control w-full rounded-lg p-3 border border-gray-300 shadow-sm mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control w-full rounded-lg p-3 border border-gray-300 shadow-sm mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={value}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  className="form-control w-full rounded-lg p-3 border border-gray-300 shadow-sm h-48 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-all"
                style={{ backgroundColor: "#a0292a" }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <style
  dangerouslySetInnerHTML={{
    __html: "\n  #contactnv{\n    background-color:#594F4F;top:0\n  }\n  "
  }}
/>

    </>
  );
}
