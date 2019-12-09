import React, { Component } from "react";
import { getList } from "./UserFunctions";

class List extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      middle_name: "",
      last_name: "",
      username: "",
      password: "",
      role_id: "",
      editDisabled: false,
      users: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  onChange = event => {
    this.setState({ name: event.target.value, editDisabled: "disabled" });
    console.log(this.state.editDisabled);
  };

  getAll = () => {
    getList().then(data => {
      this.setState(
        {
          first_name: "",
          middle_name: "",
          last_name: "",
          username: "",
          password: "",
          role_id: "",
          users: [...data]
        },
        () => {
          console.log(this.state.users);
        }
      );
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ editDisabled: false });
    addToList(this.state.name).then(() => {
      this.getAll();
    });
  };

  onUpdate = e => {
    e.preventDefault();
    this.setState({ editDisabled: false });
    updateItem(this.state.name, this.state.id).then(() => {
      this.getAll();
    });
  };

  onEdit = (item, itemid, e) => {
    e.preventDefault();
    this.setState({
      id: itemid,
      name: item
    });
  };

  onDelete = (id, e) => {
    e.preventDefault();
    deleteItem(id);

    var data = [...this.state.users];
    data.filter((user, index) => {
      if (user[0] === id) {
        data.splice(index, 1);
      }
      return true;
    });
    this.setState({ users: [...data] });
  };

  render() {
    return (
      <div className="col-md-12">
        <table className="table">
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
            {this.state.users.map((user, idx) => (
              <tr key={idx}>
                <td className="text-left">{user[1]}</td>
                <td className="text-left">{user[2]}</td>
                <td className="text-left">{user[3]}</td>
                <td className="text-left">{user[4]}</td>
                <td className="text-left">{user[5]}</td>
                <td className="text-right ">
                  <button
                    href=""
                    className="btn btn-info mr-1"
                    disabled={this.state.editDisabled}
                    onClick={this.onEdit.bind(this, user[0], user[1])}
                  >
                    Edit
                  </button>
                  <button
                    href=""
                    className="btn btn-danger"
                    onClick={this.onDelete.bind(this, user[0])}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
