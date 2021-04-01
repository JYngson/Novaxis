import React from "react";
import { Navbar, Hero, Courses } from "./components";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Courses />
    </div>
  );
}
