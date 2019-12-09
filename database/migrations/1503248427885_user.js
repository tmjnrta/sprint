"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
const Hash = use("Hash");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("first_name", 254).notNullable();
      table.string("middle_name", 254).notNullable();
      table.string("last_name", 254).notNullable();
      table
        .string("username", 254)
        .notNullable()
        .unique();
      table.string("role_id", 60).notNullable();
      table.string("password", 60).notNullable();
      table.timestamps();
      table.timestamp("deleted_at").nullable();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
