import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__logoBox">
        <Link to="/" className="Navbar__logo">
          Novaxis
        </Link>
      </div>
      <div className="Navbar__menu">
        <ul className="Navbar__menuList">
          <Link to="/" className="Navbar__menuItem">
            Home
          </Link>
          <Link to="/About" className="Navbar__menuItem">
            About
          </Link>
          <Link to="/Programs" className="Navbar__menuItem">
            Programs
          </Link>
          <li className="Navbar__menuItem">Contact</li>
        </ul>
      </div>
    </div>
  );
}
