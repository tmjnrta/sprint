"use strict";

const Route = use("Route");

Route.group(()=>{
    Route.post('/login', 'UserController.login')
    Route.post("/register", "UserController.register");
    Route.get("/getUser/:id", "UserController.show");
}).prefix('users')