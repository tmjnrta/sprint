"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");
const Hash = use("Hash");

class UserSeeder {
  static async run() {
    const encryptedPassword = await Hash.make("123456");
    await Database.table("users").insert([
      {
        first_name: "John",
        middle_name: "D",
        last_name: "Doe",
        username: "johndoe",
        password: encryptedPassword,
        role_id: "3"
      },
      {
        first_name: "Jane",
        middle_name: "J",
        last_name: "Doe",
        username: "janedoe",
        password: encryptedPassword,
        role_id: 1
      },
      {
        first_name: "Jim",
        middle_name: "D",
        last_name: "Doe",
        username: "jimdoe",
        password: encryptedPassword,
        role_id: 1
      }
    ]);
  }
}

module.exports = UserSeeder;
