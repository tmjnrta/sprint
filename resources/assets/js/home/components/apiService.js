import axios from "axios";

export default class ApiService {
  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:3333/project"
    });
  }

  storeUser = async user => {
    return this.http.post(`/register`, user);
  };

  logUser = async user => {
    return this.http.post(`/login`, user);
  };

  getUser = async () => {
    return this.http.get(`/users`);
  };

  deleteUser = async id => {
    return this.http.delete(`/user/${id}`);
  };
}
