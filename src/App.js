import React from "react";
import { Navbar, Home } from "./components";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
        <Route to="/"></Route>
      </Switch>
    </div>
  );
}
