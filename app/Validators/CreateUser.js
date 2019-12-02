"use strict";
const User = use("App/Models/User");

class createUser {
  get rules() {
    return {
      // validation rules
      role_id: "required:users",
      username: "required|unique:users",
      password: "required",
      first_name: "required|unique:users",
      last_name: "required|unique:users",
    };
  }

  get messages() {
    return {
      required: "This is required.",
      unique: " is taken."
    };
  }

  async fails(error) {
    this.ctx.session.withErrors(error).flashAll();

    return this.ctx.response.redirect("back");
  }
}

module.exports = createUser;
