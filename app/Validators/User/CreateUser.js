"use strict";
const User = use("App/Models/User");
// const BaseValidator = use("App/Services/BaseValidatorService");
// const Antl = use("Antl");

class createUser {
  get rules() {
    return {
      // validation rules
      first_name: "required",
      middle_name: "required |min: 1 ? max: 255",
      last_name: "required",
      username: "required | min: 6 | max: 255 | unique:users",
      password: "required | min: 6 | max: 255",
      role_id: "required"
    };
  }

  get messages() {
    return {
      required: "This is required.",
      unique: " This must be unique."
    };
  }

  async fails(error) {
    return this.ctx.response.redirect(error);
  }
}

module.exports = createUser;
