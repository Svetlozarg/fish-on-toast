import React, { useState, useEffect } from "react";

import "./Navbar.css";

import logo from "../images/logo.png";

const Navbar = ({ toggle }) => {
  const [header, setHeader] = useState("header2");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 100) {
      return setHeader("header2");
    } else if (window.scrollY > 100) {
      return setHeader("header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={header}>
      <img className="logo" src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#events">Events</a>
          </li>
          <li>
            <a href="/#team">Team</a>
          </li>
          {/* <li>
            <a href="/resources">Resources</a>
          </li>  */}
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </nav>
      <i className="fas fa-bars bars" onClick={toggle}></i>
      <div className="social">
        <a
          href="https://www.facebook.com/FishOnToast"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/fish_on_toast/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/fot-soton/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
