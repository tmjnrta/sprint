import React, { Component } from "react";
import { login } from "./UserFunctions";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Row,
  Button,
  Input,
  FormText
} from "reactstrap";
import {} from "reactstrap";
// import TmjTable from "Shared/TmjTable";
import TmjPrompt from "Shared/TmjPrompt";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

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
      this.props.history.push(`/profile`);
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
            <Form noValidate className="mt-2" onSubmit={this.onSubmit}>
            <h3 className="text-center mt-4 text-uppercase">Please Sign In</h3>
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
                </Col>
              </Row>

              <Button
                type="submit"
                className="btn btn-success btn-block mb-3 text-uppercase"
              >
                {" "}
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
