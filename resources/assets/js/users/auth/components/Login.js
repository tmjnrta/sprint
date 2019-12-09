import React, { Component } from "react";
import { login } from "./AuthFunctions";
import { Button } from "reactstrap";
import { AvForm } from "availity-reactstrap-validation";
import TmjPrompt from "Shared/TmjPrompt";
import TMJField from "Shared/TMJField";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.trans = window.translations.login.login;
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    login(newUser).then(res => {
      TmjPrompt.success("You are logged in!", {
        title: "Welcome!"
      });
      this.props.history.push(`/`);
    });
  };

  render() {
    const formStyle = {
      backgroundColor: "#eaeaea",
      fontFamily: "Josefin Sans",
      border: "1px solid #eaeaea",
      borderRadius: "5px",
      paddingTop: "10px",
      paddingBottom: "10px"
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3 mb-5" style={formStyle}>
            <AvForm onSubmit={this.onSubmit}>
              <TMJField
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                label={this.trans.username}
                placeholder={this.trans.username}
                rules={{
                  required: true,
                  minLength: 2
                }}
                disabled={this.props.buttonClicked == "view"}
                errorMessage={{ required: "Hey! This field is required." }}
              />

              <TMJField
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                label={this.trans.password}
                placeholder={this.trans.password}
                rules={{
                  required: true,
                  minLength: 1
                }}
              />
              <Button
                type="submit"
                className="btn btn-success btn-block mb-3 text-uppercase"
              >
                {" "}
                Login
              </Button>
            </AvForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
