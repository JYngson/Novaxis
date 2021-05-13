import React from "react";
import { Navbar, Home } from "./components";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path = "/courses" component = {}></Route>
      </Switch>
    </div>
  );
}
