import React, { Component } from "react";
import ReactDOM from "react-dom";
import UsersContainer from "./users/user-management/UsersContainer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="root-container">
        <UsersContainer />
      </div>
    );
  }
}

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
