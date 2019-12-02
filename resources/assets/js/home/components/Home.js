import React, { Component } from 'react';
import { Table, Button } from "reactstrap";

const Home = props => {
  return (
    <Table>
      <h1 className="text-center">PROFILE</h1>{" "}
      <thead>
        <tr>
          <th>Username</th>
          <th>Role ID</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>markotto</td>
          <td>1</td>
          <td>Mark</td>
          <td>D</td>
          <td>Otto</td>
          <td>
            <div>
              <Button color="info">View</Button>{" "}
              <Button color="danger">Delete</Button>{" "}
              <Button color="secondary">Disable</Button>{" "}
              <Button color="success">Enable</Button>{" "}
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Home;
// import React, { Component } from "react";

// class Landing extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="jumbotron mt-5">
//           <div className="col-sm-8 mx-auto">
//             <h1 className="text-center">WELCOME</h1>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Landing;