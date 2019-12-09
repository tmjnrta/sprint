"use strict";

class HomeController {
  async view({ antl, response, view }) {
    let page = antl.formatMessage("shared.title", { page: "Welcome!" });
    console.log(page);

    return view.render("home.home", {
      page: "Welcome!"
    });
  }
}

module.exports = HomeController;
