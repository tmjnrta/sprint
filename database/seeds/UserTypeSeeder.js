"use strict";

/*
|--------------------------------------------------------------------------
| UserTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class UserTypeSeeder {
  static async run() {
    await Database.table("user_roles").insert([
      { name: "Manager" },
      { name: "Normal User" },
      { name: "Admin" }
    ]);
  }
}

module.exports = UserTypeSeeder;
