import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="Contact__picture">
        <h1>Image goes here</h1>
      </div>
      <div className="Contact__cta">
        <h1>Contact us!</h1>
        <h3>Business Consult</h3>
        <p>604 - 369 - 5119</p>
        <a href="mailto:Novax.bc.ca@gmail.com">Novax.bc.ca@gmail.com</a>
      </div>
    </div>
  );
}
