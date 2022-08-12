import React, { useState, useEffect } from "react";
import firebase from "../firebase";

import "./About.css";

const About = () => {
  const [aboutObj, setAboutObj] = useState({});

  useEffect(() => {
    // Get About Document
    firebase
      .firestore()
      .collection("Fishontoast")
      .doc("AboutText")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setAboutObj(doc.data());
        }
      });
  }, []);
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <h3>{aboutObj.Title}</h3>
        <p>{aboutObj.Text}</p>
      </div>
      <div id="events"></div>
    </section>
  );
};

export default About;
