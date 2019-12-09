"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");


class UserController {
  // to login
  async login({ request, response, auth }) {
    const { username, password } = request.all();
    const token = await auth.attempt(username, password);
    return response.json(token);
  }
}

module.exports = UserController;
