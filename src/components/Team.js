import React from "react";

import "./Team.css";

import radu from "../images/RaduProfile.jpg";
import tom from "../images/TomProfile.png";
import ibi from "../images/IbiProfile.jpg";
import sam from "../images/SamProfile.jpg";
import julius from "../images/JuliusProfile.jpg";
import jasmin from "../images/JasminProfile.jpg";
import nikhil from "../images/NikhilProfile.jpg";
import chelsea from "../images/ChelseaProfile.jpeg";
import denitsa from "../images/DenitsaProfile.jpg";
import vlad from "../images/VladProfile.jpg";
import angelina from "../images/AngelinaProfile.jpg";
import isabel from "../images/IsabelProfile.jpg";
import jamie from "../images/JamieProfile.jpg";

const Team = () => {
  return (
    <section className="team">
      <div className="team-wrapper">
        <h4>Meet the team</h4>
        {/* Main Team */}
        <div className="main-team">
          <div className="card">
            <img src={radu} alt="" />
            <h5>Radu Popescu</h5>
            <p>President</p>
          </div>

          <div className="card">
            <img src={tom} alt="" />
            <h5>Tom Phipps</h5>
            <p>Vice President</p>
          </div>

          <div className="card">
            <img src={ibi} alt="" />
            <h5>Ibi Szenes</h5>
            <p>Head of Sponsorship</p>
          </div>
        </div>

        {/* Events Coordinator */}
        <p className="subteam-heading">Events Coordinators</p>
        <div className="main-team">
          <div className="card">
            <img className="small-img" src={sam} alt="" />
            <h5 className="small-name">Sam Topping</h5>
          </div>

          <div className="card">
            <img className="small-img" src={julius} alt="" />
            <h5 className="small-name">Julius Maisch</h5>
          </div>

          <div className="card">
            <img className="small-img" src={jasmin} alt="" />
            <h5 className="small-name">Jasmin Sealy</h5>
          </div>

          <div className="card">
            <img className="small-img" src={nikhil} alt="" />
            <h5 className="small-name">Nikhil Kumar</h5>
          </div>
        </div>

        {/* Marketing Designer */}
        <p className="subteam-heading">Marketing Designers</p>
        <div className="main-team left-align">
          <div className="card">
            <img className="small-img" src={chelsea} alt="" />
            <h5 className="small-name">Chelsea Davis</h5>
          </div>

          <div className="card">
            <img className="small-img" src={denitsa} alt="" />
            <h5 className="small-name">Denitsa Hadzhiyska</h5>
          </div>
        </div>

        <div className="main-team-two">
          <div className="main-team-div">
            {/* Tech Star */}
            <p className="subteam-heading">Tech Star</p>
            <div className="main-team left-align">
              <div className="card">
                <img className="small-img" src={vlad} alt="" />
                <h5 className="small-name">Vlad Hilea</h5>
              </div>
            </div>
          </div>

          <div className="main-team-div">
            {/* Faculty of Social Sciences */}
            <p className="subteam-heading">Faculty of Social Sciences</p>
            <div className="main-team left-align">
              <div className="card">
                <img className="small-img" src={jamie} alt="" />
                <h5 className="small-name">Jamie Croucher</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="main-team-two">
          <div className="main-team-div">
            {/* Faculty of Engineering and Physical Sciences */}
            <p className="subteam-heading">
              Faculty of Engineering and Physical Sciences
            </p>
            <div className="main-team left-align">
              <div className="card">
                <img className="small-img" src={isabel} alt="" />
                <h5 className="small-name">Isabel Rose</h5>
              </div>
            </div>
          </div>

          <div className="main-team-div">
            {/* Faculty of Arts and Humanities */}
            <p className="subteam-heading">Faculty of Arts and Humanities</p>
            <div className="main-team left-align">
              <div className="card">
                <img className="small-img" src={angelina} alt="" />
                <h5 className="small-name">Angelina Der Arakelian</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
