import React from "react";
import styled from "styled-components";

import "./Dropdown.css";

import logo from "../images/logo.png";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #194664;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 250ms ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
`;

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <DropdownContainer className="dropdown" isOpen={isOpen} onClick={toggle}>
      <img src={logo} alt="" />
      <div className="dropdown-icon" onClick={toggle}>
        <i class="fas fa-times"></i>
      </div>
      <div className="dropdown-wrapper">
        <div className="dropdown-menu">
          <a href="/#">Home</a>
          <a href="/#about">About</a>
          <a href="/#events">Events</a>
          <a href="/#team">Team</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="dropdown-social">
          <a
            href="https://www.facebook.com/FishOnToast"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/fish_on_toast/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/fot-soton/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;
