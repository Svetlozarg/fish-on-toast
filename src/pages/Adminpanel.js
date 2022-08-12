import React, { useState, useEffect } from "react";
import firebase, { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Link, Navigate } from "react-router-dom";

import "./Adminpanel.css";

import logo from "../images/logo.png";

const Adminpanel = () => {
  const [toggle, setToggle] = useState(1);

  const [heroTitle, setHeroTitle] = useState("");
  const [heroText, setHeroText] = useState("");

  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutText, setAboutText] = useState("");

  const [eventTitle, setEventTitle] = useState("");
  const [eventSubtitle, setEventSubtitle] = useState("");
  const [eventPlace, setEventPlace] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [eventInfo, setEventInfo] = useState("");

  const [heroObj, setHeroObj] = useState({});
  const [aboutObj, setAboutObj] = useState({});
  const [eventObj, setEventObj] = useState({});

  const [user, setUser] = useState({});

  // Check if there is a current user
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // Log out user
  const logout = async () => {
    await signOut(auth);
  };

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

  // Toogle Index For Tabs
  const toggleTab = (index) => {
    setToggle(index);
  };

  // Handle Hero Submit
  const handleHeroSubmit = async (e) => {
    e.preventDefault();

    if (heroTitle === "" || heroText === "") {
      alert("No empty fields allowed");
    } else {
      await setDoc(doc(firebase.firestore(), "Fishontoast", "HeroText"), {
        Title: heroTitle,
        Text: heroText,
        id: 1,
      }).then(
        alert("Fish on Toast hero section has been successfully updated!")
      );
    }
  };

  // Handle About Submit
  const handleAboutSubmit = async (e) => {
    e.preventDefault();

    if (aboutTitle === "" || aboutText === "") {
      alert("No empty fields allowed");
    } else {
      await setDoc(doc(firebase.firestore(), "Fishontoast", "AboutText"), {
        Title: aboutTitle,
        Text: aboutText,
        id: 2,
      }).then(
        alert("Fish on Toast about section has been successfully updated!")
      );
    }
  };

  // Handle Event Submit
  const handleEventSubmit = async (e) => {
    e.preventDefault();

    if (
      eventTitle === "" ||
      eventSubtitle === "" ||
      eventPlace === "" ||
      eventLink === "" ||
      eventInfo === ""
    ) {
      alert("No empty fields allowed");
    } else {
      await setDoc(doc(firebase.firestore(), "Fishontoast", "Event"), {
        Title: eventTitle,
        Subtitle: eventSubtitle,
        Place: eventPlace,
        Link: eventLink,
        Info: eventInfo,
        id: 3,
      }).then(alert("Fish on Toast even has been successfully added!"));
    }
  };

  if (user) {
    return (
      <section className="admin-panel">
        <div className="admin-panel-wrapper">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <h5>
            <i className="fas fa-fish"></i>Admin Panel
            <i className="fas fa-bread-slice"></i>
          </h5>
          <div className="admin-panel-links">
            <Link className="admin-link" to="/">
              Return to main page
            </Link>
            <a
              href="#"
              className="admin-link admin-link-short"
              onClick={logout}
            >
              Log out
            </a>
          </div>
          <div className="admin-panel-buttons">
            <h6
              className={toggle === 1 ? "active-h6" : ""}
              onClick={() => toggleTab(1)}
            >
              Hero Section
            </h6>
            <h6
              className={toggle === 2 ? "active-h6" : ""}
              onClick={() => toggleTab(2)}
            >
              About Section
            </h6>
            <h6
              className={toggle === 3 ? "active-h6" : ""}
              onClick={() => toggleTab(3)}
            >
              Event Section
            </h6>
          </div>
          {/* Hero Section */}
          <form
            className={toggle === 1 ? "admin-form active-form" : "admin-form"}
            onSubmit={handleHeroSubmit}
          >
            <label>Title</label>
            <input
              type="text"
              value={heroTitle}
              onChange={(e) => setHeroTitle(e.target.value)}
              placeholder={heroObj.Title}
            />
            <label>Text</label>
            <textarea
              cols="30"
              rows="10"
              value={heroText}
              onChange={(e) => setHeroText(e.target.value)}
              placeholder={heroObj.Text}
            ></textarea>
            <button>Save</button>
          </form>

          {/* About Section */}
          <form
            className={toggle === 2 ? "admin-form active-form" : "admin-form"}
            onSubmit={handleAboutSubmit}
          >
            <label>Title</label>
            <input
              type="text"
              value={aboutTitle}
              onChange={(e) => setAboutTitle(e.target.value)}
              placeholder={aboutObj.Title}
            />
            <label>Text</label>
            <textarea
              cols="30"
              rows="10"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              placeholder={aboutObj.Text}
            ></textarea>
            <button>Save</button>
          </form>

          {/* Event Section */}
          <form
            className={toggle === 3 ? "admin-form active-form" : "admin-form"}
            onSubmit={handleEventSubmit}
          >
            <label>Title</label>
            <input
              type="text"
              value={eventTitle}
              required
              placeholder={eventObj.Title}
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <label>Subtitle</label>
            <input
              type="text"
              value={eventSubtitle}
              required
              placeholder={eventObj.Subtitle}
              onChange={(e) => setEventSubtitle(e.target.value)}
            />
            <label>Place - Time</label>
            <input
              type="text"
              value={eventPlace}
              required
              placeholder={eventObj.Place}
              onChange={(e) => setEventPlace(e.target.value)}
            />
            <label>Button Link</label>
            <input
              type="text"
              value={eventLink}
              required
              placeholder={eventObj.Link}
              onChange={(e) => setEventLink(e.target.value)}
            />
            <label>Event Info</label>
            <textarea
              cols="30"
              rows="10"
              value={eventInfo}
              required
              placeholder={eventObj.Info}
              onChange={(e) => setEventInfo(e.target.value)}
            ></textarea>
            <button>Save</button>
          </form>
        </div>
      </section>
    );
  } else {
    return <Navigate to="/fot-admin/" />;
  }
};

export default Adminpanel;
