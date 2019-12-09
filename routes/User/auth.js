"use strict";

const Route = use("Route");

Route.group(() => {
  Route.post("login", "Auth/AuthController.login");
}).prefix("users");
