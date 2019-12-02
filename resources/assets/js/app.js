import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomeContainer from "./home/HomeContainer";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  
  render() {
    return (
      <div className="root-container">
        <HomeContainer />
      </div>
     
    );
  }
}


if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
