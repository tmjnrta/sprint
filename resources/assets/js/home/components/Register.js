import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { register } from "./UserFunctions";
import TmjPrompt from "Shared/TmjPrompt";

class Register extends Component {
  state = {
    first_name: "",
    middle_name: "",
    last_name: "",
    role_id: "",
    username: "",
    password: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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

    // axios.get("/login");
  };

  render() {
    const formStyle = {
      backgroundColor: "#eaeaea",
      fontFamily: "Josefin Sans",
      border: "1px solid #eaeaea",
      borderRadius: "5px"
      // padding: "10"
    };

    return (
      <div className="container mt-1">
        <div className="row">
          <div className="col-sm-6 offset-sm-3 mb-5" style={formStyle}>
            <Form noValidate className="mt-2" onClick={this.createUser}>
            <h3 className="text-center mt-4 text-uppercase">Register</h3>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="first_name">First Name</Label>
                    <Input
                      type="first_name"
                      name="first_name"
                      id="first_name"
                      placeholder=""
                      value={this.state.first_name}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label for="middle_name">Middle Name</Label>
                    <Input
                      type="middle_name"
                      name="middle_name"
                      id="middle_name"
                      placeholder=""
                      value={this.state.middle_name}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label for="last_name">Last Name</Label>
                    <Input
                      type="last_name"
                      name="last_name"
                      id="last_name"
                      placeholder=""
                      value={this.state.last_name}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="role_id">Role ID</Label>
                      <Input
                        type="text"
                        name="role_id"
                        id="role_id"
                        value={this.state.role_id}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                </Col>
              </Row>

              <Button
                type="submit"
                className="btn btn-success btn-block mb-3 text-uppercase"
              >
                {" "}
                Add User
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
