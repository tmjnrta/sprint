import axios from "axios";

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      middle_name: newUser.middle_name,
      last_name: newUser.last_name,
      username: newUser.username,
      password: newUser.password,
      role_id: newUser.role_id
    })
    .then(response => {
      console.log("Registered.");
    });
};

export const login = user => {
  return axios
    .post('users/login', {
      username: user.username,
      password: user.password
    })
    .then(res => {
      // console.log("Loggedin.");
      localStorage.setItem('usertoken', res.data.token)
      return res.data
    }).catch(err => {
      console.log('Invalid Username and password, ' + err)
    })
};

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
