

"use strict";

const Route = use("Route");

Route.group(() => {
  Route.get("/", "HomeController.view");
  Route.get("config.js", "ConfigController.index");
  Route.get("translation.js", "TranslationController.index");
})
  .prefix("home")
  .namespace("Home");



Route.group(()=>{
    Route.post("login", 'UserController.login')
    Route.post("register", "UserController.register");
    Route.get("getuser/:id", "UserController.show");
    Route.post('logout', 'UserController.logout')
}).prefix('users')