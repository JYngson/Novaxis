import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__logoBox">
        <h2 className="Navbar__logo">Novaxis</h2>
      </div>
      <div className="Navbar__menu">
        <ul className="Navbar__menuList">
          <Link to="/" className="Navbar__menuItem">
            Home
          </Link>
          <li className="Navbar__menuItem">Programs</li>
          <Link to="/About" className="Navbar__menuItem">
            About
          </Link>
          <li className="Navbar__menuItem">Contact</li>
        </ul>
      </div>
    </div>
  );
}
