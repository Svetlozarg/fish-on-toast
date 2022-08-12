import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Hero />
      <About />
      <Events />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
