import axios from "axios";

export const login = user => {
  return axios
    .post("users/login", {
      username: user.username,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("usertoken", res.data.token);
      return res.data;
    })
    .catch(err => {
      console.log("Invalid Username and password, " + err);
    });
};
