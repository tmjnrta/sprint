"use strict";

const Route = use("Route");
Route.get("/", ({ response }) => response.redirect("home"));

Route.group(() => {
  Route.get("/", "HomeController.view");
  Route.get("config.js", "ConfigController.index");
  Route.get("translation.js", "TranslationController.index");
})
  .prefix("home")
  .namespace("Home");
