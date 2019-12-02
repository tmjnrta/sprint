import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { getUser } from "./UserFunctions";
import { Table, Button } from "reactstrap";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      middle_name: "",
      last_name: "",
      username: "",
      password: "",
      role_id: "",
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    getUser(decoded.uid).then(res => {
      this.setState({
        first_name: res.data.first_name,
        middle_name: res.data.middle_name,
        last_name: res.data.last_name,
        username: res.data.username,
        password: res.data.password,
        role_id: res.data.role_id
      });
    });
  }

  render() {
      
    return (
      <div className="jumbotron mt-5">
          <h1 className="text-center">PROFILE</h1>{" "}
        <div className="col-sm-8 mx-auto">
        </div>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Role ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <td>{this.state.first_name}</td>
              </td>
              <td>
                <td>{this.state.middle_name}</td>
              </td>
              <td>
                <td>{this.state.last_name}</td>
              </td>
              <td>
                <td>{this.state.username}</td>
              </td>
              <td>
                <td>{this.state.role_id}</td>
              </td>
              
              <td>
                <div>
                  <Button color="success">Edit</Button>{" "}
                  
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
   
  }
}

export default Profile;
