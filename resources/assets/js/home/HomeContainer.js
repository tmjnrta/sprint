import React, { Component } from "react";
import TmjPrompt from "Shared/TmjPrompt";
import { axios } from "Shared/bootstrap";
import Header from "../shared/components/Header";

import Loadable from "react-loadable";
import { Link, Route, HashRouter, Switch } from "react-router-dom";
import Profile from "./components/Profile";

const Loading = ({ error }) => {
  if (error) {
    return "Oh nooess!";
  }

  return <h3>Loading...</h3>;
};

const Home = Loadable({
  loader: () => import("../home/components/Home"),
  loading: Loading
});

const Register = Loadable({
  loader: () => import("../home/components/Register"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("../home/components/Login"),
  loading: Loading
});


const SampleReactLoadableRouterContainer = Loadable({
  loader: () =>
    import(
      "../sample/sample-react-loadable-router/SampleReactLoadableRouterContainer"
    ),
  loading: Loading
});

 const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/login')
  }

export default class ProjectContainer extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
