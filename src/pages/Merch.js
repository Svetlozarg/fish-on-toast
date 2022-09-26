import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

import logo from "../images/logo-white.png";
import tag1 from "../images/merch/tag1.jpg";
import tag2 from "../images/merch/tag2.jpg";
import tag3 from "../images/merch/tag3.jpg";
import front1m from "../images/merch/mens-front-only-tshirt.jpg";
import front1w from "../images/merch/womens-front-only-tshirt.jpg";
import "./Merch.css";

const Merch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <section className="merch">
        <div className="merch-wrapper">
          <div className="merch-bg">
            <img src={logo} alt="" />

            <h2> Merch</h2>
          </div>


          <div className="main-merch">
            <div className="card">
              <h5> T-Shirt</h5>
              <img className="img" src={tag1} alt="" />
              <p>
                We have partnered with WingCard.io for society exclusive access
                to their tags. These tags stick on the back of your phone and
                allow sharing your social medias at a tap of a phone. No extra
                apps required for usage.
              </p>
              <button>Buy for £2</button>
            </div>
          

            <div className="card">
              <h5> T-Shirt</h5>
              <img className="img" src={front1m} alt="" />
              <p>
                Our merch is now available to buy! This is the normal tshirt design.
              </p>
              <button>Buy for £15</button>
            </div>
          </div>

          
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Merch;
