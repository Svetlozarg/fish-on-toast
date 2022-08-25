import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

import "./Resources.css";

const Resources = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <section className="resources">
        <div className="resources-wrapper">
          <h4> Resources</h4>
          <div className="main-resources">
            <div className="card">
              <h5> Ideation</h5>
              <p>
                publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will
                uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </p>
              <button>PDF Link</button>
            </div>

            <div className="card">
              <h5> Ideation</h5>
              <p>
                publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will
                uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </p>
              <button>PDF Link</button>
            </div>

            <div className="card">
              <h5> Ideation</h5>
              <p>
                publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will
                uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </p>
              <button>PDF Link</button>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Resources;
