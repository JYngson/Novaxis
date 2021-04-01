import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__logoBox">
        <h2 className="Navbar__logo">Novaxis</h2>
      </div>
      <div className="Navbar__menu">
        <ul className="Navbar__menuList">
          <li className="Navbar__menuItem">Home</li>
          <li className="Navbar__menuItem">Programs</li>
          <li className="Navbar__menuItem">About</li>
          <li className="Navbar__menuItem">Contact</li>
        </ul>
      </div>
    </div>
  );
}
