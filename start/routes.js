"use strict";

const Route = use("Route");

const Helpers = use("Helpers");
const home = Helpers.appRoot("routes/Home/");
const user = Helpers.appRoot("routes/User/");

require(home + "home");
require(user + "auth"); //for login and logout
require(user + "user-management"); //for adding, editing, etc.
