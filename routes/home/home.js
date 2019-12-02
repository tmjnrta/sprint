

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
    Route.post("login", 'UserController.login') //to login
    Route.post("register", "UserController.register"); //to register
    Route.get("getuser/:id", "UserController.show"); //to show user logged in user
    Route.get("allusers", "UserController.index"); //to show all
    // Route.post("updateuser/:id", "UserController.update");
    Route.post("deleteuser/:id", "UserController.delete");
    Route.get('logout', 'UserController.logout')
}).prefix('users')