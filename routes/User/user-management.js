"use strict";

const Route = use("Route");

Route.group(() => {
  Route.post("register", "Auth/UserController.register");
  // Route.post("register", "Auth/UserController.register").validator(
  //   "CreateUser"
  // );
  Route.get("getuser/:id", "Auth/UserController.show");
  Route.get("allusers", "Auth/UserController.index");
  Route.post("updateuser/:id", "Auth/UserController.update");
  Route.post("deleteuser/:id", "Auth/UserController.delete");
}).prefix("users");
