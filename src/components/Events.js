import React, { useState, useEffect } from "react";
import firebase from "../firebase";

import "./Events.css";

import logo from "../images/logo.png";
import bussocLogo from "../images/bussoc-logo.png";
import enactusLogo from "../images/enactus.png";
import uosLogo from "../images/uos-logo.png";
import socialLogo from "../images/social-logo.png";
import womenLogo from "../images/women-logo.png";
import dsoclogo from "../images/soton-dSoc-full-white.png"

const Events = () => {
  const [eventObj, setEventObj] = useState({});

  useEffect(() => {
    // Get Event Document
    firebase
      .firestore()
      .collection("Fishontoast")
      .doc("Event")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setEventObj(doc.data());
        }
      });
  }, []);

  return (
    <section className="events">
      <div className="events-wrapper">
        <img src={logo} alt="" />
        <h4>{eventObj.Title}</h4>
        <p className="event-center">{eventObj.Subtitle}</p>
        <p className="event-place">{eventObj.Place}</p>

        <h4>Event Info</h4>
        <p className="event-info-p">{eventObj.Info}</p>
        <a href={eventObj.Link} target="_blank" rel="noreferrer">
          <button>Grab your ticket</button>
        </a>
        <div className="event-sponsors">
          {/* <img src={bussocLogo} alt="" /> */}
          <img src={enactusLogo} alt="" />
          <img src={dsoclogo} alt="" />
          {/* <img src={uosLogo} alt="" /> */}
          {/* <img src={socialLogo} alt="" /> */}
          <img src={womenLogo} alt="" />
        </div>
        <div id="team"></div>
      </div>
    </section>
  );
};

export default Events;
