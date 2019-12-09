"use strict";
const User = use("App/Models/User");
const { validate } = use("Validator");

class UserController {
  // to register
  async register({ request, response }) {
    // Validate input
    const validation = await validate(request.all(), {
      first_name: "required|min:2|max:255",
      last_name: "required|min:2|max:255",
      username: "required|min:2|max:255",
      role_id: "required|min:1|max:255",
      password: "required|min:1|max:255"
    });

    if (validation.fails()) {
      return response.redirect("back");
    }

    const user = new User();

    user.first_name = request.input("first_name");
    user.middle_name = request.input("middle_name");
    user.last_name = request.input("last_name");
    user.username = request.input("username");
    user.role_id = request.input("role_id");
    user.password = request.input("password");

    await user.save();

    return response.send({ message: "User has been created." });
  }
  // async register({ request, response }) {
  //   const {
  //     first_name,
  //     middle_name,
  //     last_name,
  //     username,
  //     password,
  //     role_id
  //   } = request.only([
  //     "first_name",
  //     "middle_name",
  //     "last_name",
  //     "username",
  //     "password",
  //     "role_id"
  //   ]);

  //   await User.create({
  //     first_name,
  //     middle_name,
  //     last_name,
  //     username,
  //     password,
  //     role_id
  //   });
  //   return response.send({ message: "User has been created." });
  // }

  // to show all users
  async index({ response }) {
    const users = await User.all();
    return response.status(200).json(users);
  }

  //show details of iser
  async show({ params, response }) {
    const user = await User.find(params.id);
    const res = {
      first_name: user.first_name,
      middle_name: user.middle_name,
      last_name: user.last_name,
      username: user.username,
      password: user.password,
      role_id: user.role_id
    };
    return response.json(res);
  }

  //to delete users
  async delete({ params, response }) {
    const user = await User.find(params.id);
    if (!user) {
      return response.status(404).json({ data: "User not found" });
    }
    await user.delete();

    return response.status(200).json({ message: "User has been deleted" });
  }

  //to update
  async update({ params, request, response }) {
    let userInfo = request.all();

    const user = await User.find(params.id);
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    user.first_name = userInfo.first_name;
    user.middle_name = userInfo.middle_name;
    user.last_name = userInfo.last_name;
    user.username = userInfo.username;
    user.role_id = userInfo.role_id;

    await user.save();

    return response.status(200).json(user);
  }
}

module.exports = UserController;
