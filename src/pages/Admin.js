import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Link, Navigate } from "react-router-dom";

import "./Admin.css";

import logo from "../images/logo.png";

const Admin = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async (e) => {
    e.preventDefault();

    if (loginEmail === "" || loginPassword === "") {
      alert("Email and password fields should not be empty!");
    } else {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        return <Navigate to="/fot-admin/adminpanel" />;
      } catch (error) {
        alert("Wrong email/password");
      }
    }
  };

  if (user) {
    if (user.email !== undefined) {
      return <Navigate to="/fot-admin/adminpanel" />;
    }
  }

  return (
    <section className="admin">
      <div className="admin-wrapper">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <h5>
          <i className="fas fa-fish"></i>Admin Panel
          <i className="fas fa-bread-slice"></i>
        </h5>

        <form>
          <label>
            <i className="fas fa-envelope"></i> Email Address
          </label>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            required
          />
          <label>
            <i className="fas fa-key"></i> Password
          </label>
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            required
          />
          <button onClick={login}>Save</button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
