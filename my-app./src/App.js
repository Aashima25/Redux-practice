import React, { Component } from "react";

import "./App.css";
import First from "./container/First";

export default class App extends Component {
  render() {
    return (
      <div className="Bigdiv">
        <div className="Smalldiv" />
        <center>
          <h1>Click me</h1>
        </center>
        <First />
      </div>
    );
  }
}
