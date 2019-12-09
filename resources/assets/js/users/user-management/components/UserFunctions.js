import axios from "axios";

export const register = newUser => {
  return axios
    .post(`users/register`, {
      first_name: newUser.first_name,
      middle_name: newUser.middle_name,
      last_name: newUser.last_name,
      username: newUser.username,
      password: newUser.password,
      role_id: newUser.role_id
    })
    .then(res => {
      console.log(res);
    });
};

export const getList = () => {
  return axios
    .get(`users/allusers`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      var data = [];
      Object.keys(res.data).map(key => {
        var val = res.data[key];
        data.push([
          val.id,
          val.first_name,
          val.middle_name,
          val.last_name,
          val.username,
          val.role_id,
          val.password
        ]);
      });

      return data;
    });
};

//to view user details
export const getUser = id => {
  return axios
    .get(`users/getuser/${id}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

//to delete user
export const deleteUser = id => {
  axios
    .post(`users/deleteuser/${id}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

//to update user
export const updateUser = (
  id,
  first_name,
  middle_name,
  last_name,
  username,
  role_id
) => {
  return axios
    .post(
      `users/updateuser/${id}`,
      {
        id: id,
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        username: username,
        role_id: role_id
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(res => {
      console.log(res);
    });
};
