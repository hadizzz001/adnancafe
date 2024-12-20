"use client";
import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isCoffeeDropdownOpen, setIsCoffeeDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
    const navigationElement = document.getElementById("site-navigation");
    if (navigationElement) {
      navigationElement.classList.toggle("toggled", !isToggled);
    }
  };

  const toggleCoffeeDropdown = () => {
    setIsCoffeeDropdownOpen((prev) => !prev);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <>
      <div className="top-bar top-bar-align-right">
        <div className="inside-top-bar grid-container grid-parent">
          <aside id="block-12" className="widget inner-padding widget_block">
            <div className="outertoprightbar">
              <div className="toprightbar">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/groups/606571133119922">
                      <i className="fa fa-facebook" target="_blank" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/homegroundsco/?igshid=MzRlODBiNWFlZA%3D%3D">
                      <i className="fa fa-instagram" target="_blank" />
                    </a>
                  </li>
                </ul>
                <div className="hdrnewsleter">
                  <a href="javascript:void(0)">
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <header className="site-header" id="masthead" aria-label="Site">
        <div className="inside-header grid-container grid-parent" style={{ padding: "15px 0px" }}>
          <div className="site-logo">
            <a href="/" rel="home">
              <img
                className="header-image is-logo-image"
                alt="Home Grounds"
                src="/pics/logo.png"
                width={125}
                height={35}
                style={{ width: "125px" }}
              />
            </a>
          </div>
          <nav
  className="main-navigation sub-menu-right"
  id="site-navigation"
  aria-label="Primary"
>
  <div
    className="inside-navigation grid-container grid-parent"
    style={{ float: "inline-end" }}
  >
    <button
      className="menu-toggle"
      aria-controls="primary-menu"
      aria-expanded={isToggled}
      onClick={handleToggle}
    >
      <span className="mobile-menu">Menu</span>
    </button>
    <div id="primary-menu" className={`main-nav ${isToggled ? "open" : ""}`}>
      <ul id="menu-english-header-menu-1" className="menu">
        <li id="menu-item-105070" className="menu-item">
          <a href="/">Home</a>
        </li>
        <li id="menu-item-229653" className="menu-item">
          <a href="/#about">About</a>
        </li>
        <li
          id="menu-item-105067"
          className={`menu-item menu-item-has-children ${isCoffeeDropdownOpen ? "open" : ""}`}
        >
          <a href="#" onClick={toggleCoffeeDropdown}>
            Coffee
          </a>
          {isCoffeeDropdownOpen && (
            <>
              {isMobile ? (
                <>
                  <li id="menu-item-229653" className="menu-item">
                    <a href="/#history">History of Coffee</a>
                  </li>
                  <li id="menu-item-229653" className="menu-item">
                    <a href="/#typer">Types of Roasts</a>
                  </li>
                  <li id="menu-item-229653" className="menu-item">
                    <a href="/#varieties">Coffee Varieties</a>
                  </li>
                  <li id="menu-item-229653" className="menu-item">
                    <a href="/#typec">Types of Coffee</a>
                  </li>
                </>
              ) : (
                <ul className="sub-menu">
                  <li>
                    <a href="/#history">History of Coffee</a>
                  </li>
                  <li>
                    <a href="/#typer">Types of Roasts</a>
                  </li>
                  <li>
                    <a href="/#varieties">Coffee Varieties</a>
                  </li>
                  <li>
                    <a href="/#typec">Types of Coffee</a>
                  </li>
                </ul>
              )}
            </>
          )}
        </li>
        <li id="menu-item-105100" className="menu-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div >
      </header >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 320px) and (max-width: 670px) {
            .main-navigation.toggled .main-nav > ul {
              top: 105px !important;
            }
          }
          .menu-item-has-children {
            position: relative;
          }
          .sub-menu {
            display: none;
            background: #fff;
            list-style: none;
            padding: 10px 0;
            margin: 0;
          }
          .menu-item-has-children.open .sub-menu {
            display: block;
          }
          .sub-menu li a {
            padding: 10px 20px;
            display: block;
            color: #333;
            text-decoration: none;
            transition: background 0.3s;
          }
          .sub-menu li a:hover {
            background: #f5f5f5;
          }
        `,
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n \n\n@media (max-width: 768px) {\n.menu-item-has-children.open .sub-menu {\n    display: contents;\n}\n.main-navigation .main-nav ul ul li a {\n    color: #273338 !important;\n        visibility: visible;\n}\n}\n"
        }}
      />


      <style
        dangerouslySetInnerHTML={{
          __html: "\n.inside-header {\n    padding: 15px 0px;!important\n}\n\n"
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n@media (min-width: 320px) and (max-width: 670px) {\n    .main-navigation.toggled .main-nav>ul {\n        position: absolute !important; \n    }\n}\n\n"
        }}
      />


    </>
  );
};

export default Nav;
