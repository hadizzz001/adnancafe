"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sendEmail } from "../api/sendEmail/sendEmail";
import Footer from "../_components/Footer";
import Nav from "../_components/Nav";

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

  return (
    <>
      <Nav />
      <div className="bg-gray-50 py-10 mt-20">
        <div className="container mx-auto">
          <h4
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ color: "#a0292a" }}
          >
            GET IN TOUCH
          </h4>
        </div>
      </div>
      <div className="container mx-auto mt-10 px-5">
        <div className="bg-white shadow-md rounded-md p-6">
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
    </>
  );
}
