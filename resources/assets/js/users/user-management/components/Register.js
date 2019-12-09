import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { register } from "./UserFunctions";
import TmjPrompt from "Shared/TmjPrompt";
import { AvForm } from "availity-reactstrap-validation";
import TMJField from "Shared/TMJField";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      middle_name: "",
      last_name: "",
      username: "",
      role_id: "",
      password: ""
    };
    this.createUser = this.createUser.bind(this);
    this.onChange = this.onChange.bind(this);
    this.trans = window.translations.register.register;
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createUser = e => {
    e.preventDefault();
    const newUser = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      role_id: this.state.role_id,
      username: this.state.username,
      password: this.state.password
    };

    register(newUser).then(res => {
      TmjPrompt.success("User has been added successfully!", {
        title: "Success!"
      });
      this.props.history.push(`/login`);
    });
  };

  render() {
    const formStyle = {
      backgroundColor: "#eaeaea",
      fontFamily: "Josefin Sans",
      border: "1px solid #eaeaea"
    };

    return (
      <div className="container mt-1">
        <div className="row">
          <div className="col-sm-6 offset-sm-3 mb-5" style={formStyle}>
            <AvForm onSubmit={this.onSubmit}>
              <TMJField
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.onChange}
                label={this.trans.first_name}
                placeholder={this.trans.first_name}
                rules={{
                  required: true,
                  minLength: 2
                }}
                disabled={this.props.buttonClicked == "view"}
                errorMessage={{ required: "Hey! This field is required." }}
              />
              <TMJField
                type="text"
                name="middle_name"
                value={this.state.middle_name}
                onChange={this.onChange}
                label={this.trans.middle_name}
                placeholder={this.trans.middle_name}
                // rules={{
                //   required: true,
                //   minLength: 1
                // }}
                disabled={this.props.buttonClicked == "view"}
                errorMessage={{ required: "Hey! This field is required." }}
              />
              <TMJField
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.onChange}
                label={this.trans.last_name}
                placeholder={this.trans.last_name}
                rules={{
                  required: true,
                  minLength: 2
                }}
                disabled={this.props.buttonClicked == "view"}
                errorMessage={{ required: "Hey! This field is required." }}
              />
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
                type="text"
                name="role_id"
                value={this.state.role_id}
                onChange={this.onChange}
                label={this.trans.role_id}
                placeholder={this.trans.role_id}
                rules={{
                  required: true,
                  minLength: 1
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
                onClick={this.createUser}
                type="submit"
                className="btn btn-success btn-block mb-3 text-uppercase"
              >
                {" "}
                Register
              </Button>
            </AvForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
