import React, { useState, useEffect } from "react";
import firebase from "../firebase";

import "./Hero.css";

const Hero = () => {
  const [heroObj, setHeroObj] = useState({});

  useEffect(() => {
    // Get Hero Document
    firebase
      .firestore()
      .collection("Fishontoast")
      .doc("HeroText")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setHeroObj(doc.data());
        }
      });
  }, []);

  return (
    <section className="hero">
      <div className="hero-wrapper">
        <h2>{heroObj.Title}</h2>
        <h3>{heroObj.Text}</h3>
      </div>
      <a href="#about">
        <i className="fas fa-chevron-down arrow-down"></i>
      </a>
    </section>
  );
};

export default Hero;
