import React, { useState, useEffect } from "react";

import "./Footer.css";

import logo from "../images/logo.png";

const Footer = () => {
  const [arrow, setArrow] = useState("show");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 600) {
      return setArrow("show");
    } else if (window.scrollY > 600) {
      return setArrow("hide");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <footer>
      <a href="#" className={arrow}>
        <i className="fas fa-chevron-up arrow-top"></i>
      </a>
      <div className="footer-up">
        <div className="footer-div">
          <img src={logo} alt="" />
          <p>
            We exist because we want to see talented students make their dreams
            come true. We'll inspire you to build your own business, introduce
            you to the students and professionals that can help make it a
            reality, and help you take the first steps.
          </p>
        </div>
        <div className="footer-div">
          <h6>Menu</h6>
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
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-div">
          <h6>Social Networks</h6>
          <a
            href="https://www.facebook.com/FishOnToast"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/fishontoast.co.uk/"
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
      </div>
      <div className="footer-down">
        <p>
          Fish on Toast © 2021 | Created by{" "}
          <a href="https://www.obelussoft.com">ObelusSoft</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
