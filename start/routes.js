"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", ({ response }) => response.redirect("home"));

const Helpers = use("Helpers");
const home = Helpers.appRoot("routes/home/");

require(home + "home");
