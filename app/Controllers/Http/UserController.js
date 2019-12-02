"use strict";
const User = use("App/Models/User");
const Hash = use("Hash");

class UserController {
  async register({ request, response }) {
    const {
      first_name,
      middle_name,
      last_name,
      username,
      password,
      role_id
    } = request.only([
      "first_name",
      "middle_name",
      "last_name",
      "username",
      "password",
      "role_id"
    ]);
 
      await User.create({
        first_name,
        middle_name,
        last_name,
        username,
        password,
        role_id
      })
      return response.send({message: "User has been created."})
  }

  // to login
  async login({ request, response, auth }) {
    const { username, password } = request.all();
    const token = await auth.attempt(username,password)
    return response.json(token)    
  }
  

  //show details of iser
  async show ({params, response}){
    const user = await User.find(params.id)
    const res = {
      first_name: user.first_name,
      middle_name: user.middle_name,
      last_name: user.last_name,
      username: user.username,
      password: user.password,
      role_id: user.role_id
    };
    return response.json(res)
  }
 

  //to logout user
  async logout({ auth, response }) {
    await auth.logout();
    return response.redirect("/home#");
  }
  

  //to show all users
  async index({ response }) {
    const users = await User.all();
    return response.status(200).json(users);
  }

  //to delete users
  async delete({ params, response }) {
    const user = await User.find(params.id);
    await user.delete();

    return response.status(200).json({
      message: "User has been deleted!"
    });
  }
}

module.exports = UserController;
