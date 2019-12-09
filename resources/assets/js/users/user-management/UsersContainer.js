import React, { Component } from "react";
import Header from "../../shared/components/Header";
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
  loader: () => import("../../users/user-management/components/Home"),
  loading: Loading
});

const Login = Loadable({
  loader: () => import("../../users/auth/components/Login"),
  loading: Loading
});

const Register = Loadable({
  loader: () => import("../../users/user-management/components/Register"),
  loading: Loading
});

export default class UsersContainer extends Component {
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
