import React from "react";
import "./Hero.scss";
import Button from "react-bootstrap/Button";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__header">
        <div className="Hero__textBack">
          <div className="Hero__textBox">
            <h1>Novaturiant Axis</h1>
            <p>Desiring or seeking powerful change in one's life</p>
            <Button variant="info">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
