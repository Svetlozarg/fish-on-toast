import React from "react";

import "./Team.css";

import radu from "../images/RaduProfile.jpg";
import alice from "../images/AliceProfile.jpg";
import grace from "../images/GraceProfile.jpg";
import parth from "../images/ParthProfile.jpg";
import PastCommittee from "../pages/PastCommittee";

import elizabete from "../images/ElizabeteProfile.jpg";
import iona from "../images/IonaProfile.jpg";
import divisha from "../images/DivishaProfile.jpg";
import benedetta from "../images/BenedettaProfile.jpg";
import miro from "../images/MiroProfile.jpg";
import roman from "../images/RomanProfile.jpg";
import andras from "../images/AndrasProfile.jpg";
import tomas from "../images/TomasProfile.jpg";
import benedek from "../images/BenedekProfile.jpg";
import jenna from "../images/JennaProfile.jpg";

const Team = () => {
  return (
    <section className="team">
      <div className="team-wrapper">
        <h4>Meet the team</h4>
        {/* Main Team */}
        <div className="main-team">
          <div className="card">
            <img className="small-img" src={benedetta} alt="" />
            <h5 className="small-name">Benedetta Harris</h5>
            <p className="small-description">President</p>
          </div>

          <div className="card">
            <img className="small-img" src={elizabete} alt="" />
            <h5 className="small-name">Elizabete Jeremejeva</h5>
            <p className="small-description">Vice President</p>
          </div>

          <div className="card">
            <img className="small-img" src={grace} alt="" />
            <h5 className="small-name">Grace Hollister</h5>
            <p className="small-description">Head of Finance</p>
          </div>

          <div className="card">
            <img className="small-img" src={alice} alt="" />
            <h5 className="small-name">Alice Godis</h5>
            <p className="small-description">Head of Events</p>
          </div>

          <div className="card">
            <img className="small-img" src={jenna} alt="" />
            <h5 className="small-name">Jenna Lee</h5>
            <p className="small-description">Head of Marketing</p>
          </div>

          <div className="card">
            <img className="small-img" src={parth} alt="" />
            <h5 className="small-name">Parth Chutani</h5>
            <p className="small-description">Head of Technology</p>
          </div>

        <a href="past-committee" rel="noreferrer">
          <button>Past Committee</button>
        </a>
      </div>
    </section>
  );
};

export default Team;
