"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { sendEmail } from "../api/sendEmail/sendEmail";
import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import Loading from '../_components/Loading';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);


  const handleChange = (e) => {
    if (e.target.name === "phone") {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      setValue(numericValue);
    }

    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };


  useEffect(() => {
    // Simulate a loading delay of 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);


  const branches = [
    { name: "Barbeer branch", phone: "01-633211" },
    { name: "Zarif branch", phone: "01-735046" },
    { name: "Mar Elias branch", phone: "01-308442" },
    { name: "Chiah branch", phone: "01-271721" },
  ];



  return (
    <>


      {loading && <Loading />}
      <Nav />


      <div id="page" className="hfeed site grid-container container grid-parent">
        <div id="content" className="site-content">
          <div
            id="primary"
            className=" "
          >
            <main id="main" className="site-main">
              <article
                className=" "
              >
                <div className=" ">
                  <div className=" ">




                    <div className="relative w-full h-screen">
                      {/* Video Background */}
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="/pics/vid3.gif"
                        alt="Background Animation"
                      />

                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        {/* Logo */}
                        <img
                          src="/pics/logo2.png"
                          alt="Logo"
                          className="mb-4 w-74 md:w-72"
                          style={{ objectFit: 'contain' }}
                        />

                        {/* Title */}
                        <h1
                          style={{
                            margin: '0',
                            fontSize: "47px",
                            textWrapMode: "nowrap",
                          }}
                          className="text-white text-2xl md:text-4xl font-bold"
                        >
                          Coffee Adnan
                        </h1>

                        {/* Year with Horizontal Lines */}
                        <div className="flex items-center">
                          <hr style={{ borderWidth: "1px", background: "white" }} className="w-16 md:w-24 border-t-4 border-white" />
                          <span className="mx-4 text-lg md:text-xl font-bold">1951</span>
                          <hr style={{ borderWidth: "1px", background: "white" }} className="w-16 md:w-24 border-t-4 border-white" />
                        </div>
                      </div>
                    </div>




                    <section className="py-10"  >
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
                      <a href="mailto:info@coffeeadnan.co" target="_blank" rel="noopener noreferrer">
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













                    <p />
                  </div>
                  {/* .entry-content */}
                </div>
                {/* .inside-article */}
              </article>
              {/* #post-## */}
            </main>
            {/* #main */}
          </div>
          {/* #primary */}
        </div>
        {/* #content */}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .entry-content .alignwide, body:not(.no-sidebar) .entry-content .alignfull {\n    width:auto !important;\n}\n\nbody #page.grid-container {\n    max-width: 100% !important;\n}\n"
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  @media (min-width: 320px) and (max-width: 670px) {\n    .main-navigation.toggled .main-nav>ul { \n        top: 105px !important; \n    }\n}\n\n@media (max-width: 768px) {\n    .main-navigation.toggled .main-nav li:nth-last-child(2) {\n        display: inline !important;\n    }\n}\n"
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n \n.hg_home_what_learn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap; /* Ensures the tiles wrap if there's not enough space */\n  padding: 20px;\n}\n\n.hg_wl_tiles {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap; /* Ensures the tiles stack on smaller screens */\n  gap: 20px; /* Adds space between tiles */\n}\n\n.hg_wl_tile {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n  max-width: 200px; /* Optional: control tile size */\n}\n\n.hg_wl_image img {\n  display: block;\n  margin: 0 auto;\n  width: 30%;  \n \n}\n\n.hg_wl_title {\n  margin-top: 10px;\n  font-size: 1rem; /* Adjust font size as needed */\n  text-align: center;\n}\n\n"
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n @media (min-width: 320px) and (max-width: 670px) {\n    a.hg_ho_btn { \n        line-height: 0px !important;\n        \n    }\n}\n\n"
        }}
      />



      <Footer />



    </>




  );
}
