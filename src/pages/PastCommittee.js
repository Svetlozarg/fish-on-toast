import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

import "./PastCommittee.css";

import radu from "../images/RaduProfile.jpg";
import tom from "../images/TomProfile.png";
import ibi from "../images/IbiProfile.jpg";
import sam from "../images/SamProfile.jpg";
import julius from "../images/JuliusProfile.jpg";
import jasmin from "../images/JasminProfile.jpg";
import nikhil from "../images/NikhilProfile.jpg";
import denitsa from "../images/DenitsaProfile.jpg";
import vlad from "../images/VladProfile.jpg";
import isabel from "../images/IsabelProfile.jpg";
import jamie from "../images/JamieProfile.jpg";

const PastCommittee = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <section className="team">
        <div className="team-wrapper">
          <h4>Committee of 2021-22</h4>
          {/* Main Team */}
          <div className="main-team">
            <div className="card">
              <img className="small-img" src={radu} alt="" />
              <h5 className="small-name">Radu Popescu</h5>
              <p className="small-description">President</p>
            </div>

            <div className="card">
              <img className="small-img" src={tom} alt="" />
              <h5 className="small-name">Tom Phipps</h5>
              <p className="small-description">Vice President</p>
            </div>

            <div className="card">
              <img className="small-img" src={ibi} alt="" />
              <h5 className="small-name">Ibi Szenes</h5>
              <p className="small-description">Head of Sponsorship</p>
            </div>

            <div className="card">
              <img className="small-img" src={sam} alt="" />
              <h5 className="small-name">Sam Topping</h5>
              <p className="small-description">Events Coordinator</p>
            </div>

            <div className="card">
              <img className="small-img" src={julius} alt="" />
              <h5 className="small-name">Julius Maisch</h5>
              <p className="small-description">Events Coordinator</p>
            </div>

            <div className="card">
              <img className="small-img" src={jamie} alt="" />
              <h5 className="small-name">Jamie Croucher</h5>
              <p className="small-description">Events Coordinator</p>
            </div>

            <div className="card">
              <img className="small-img" src={jasmin} alt="" />
              <h5 className="small-name">Jasmin Sealy</h5>
              <p className="small-description">Events Coordinator</p>
            </div>

            <div className="card">
              <img className="small-img" src={nikhil} alt="" />
              <h5 className="small-name">Nikhil Kumar</h5>
              <p className="small-description">Events Coordinator</p>
            </div>

            <div className="card">
              <img className="small-img" src={denitsa} alt="" />
              <h5 className="small-name">Denitsa Hadzhiyska</h5>
              <p className="small-description">Marketing Designer</p>
            </div>

            <div className="card">
              <img className="small-img" src={vlad} alt="" />
              <h5 className="small-name">Vlad Hilea</h5>
              <p className="small-description">Tech Star</p>
            </div>

            <div className="card">
              <img className="small-img" src={isabel} alt="" />
              <h5 className="small-name">Isabel Rose</h5>
              <p className="small-description">Text Editor</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PastCommittee;
